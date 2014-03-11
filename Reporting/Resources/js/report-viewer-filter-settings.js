function ReportViewerSettings(options) {
	var urlSettings = options.urlSettings;
	var locale = options.locale;
	var uidGenIndex = 0;

	var getControlTypeId = function (controlType) {
		if (controlType == null)
			return null;
		if (typeof (controlType) == 'number') {
			return controlType;
		} else if (typeof (controlType) == 'function') {
			return controlType();
		} else if (typeof (controlType) == 'string') {
			var controlTypes = {
				'Like': 1,
				'Between': 2,
				'Equals_Select': 3,
				'InTimePeriod': 4,
				'BetweenTwoDates': 5,
				'EqualsPopup': 6,
				'Equals_TextArea': 7,
				'Equals_CheckBoxes': 8,
				'EqualsCalendar': 9,
				'Equals_Multiple': 10
			};
			return controlTypes[controlType];
		}
		// like by default
		return 1;
	};

	var getControlTypeString = function (controlType) {
		var controlTypes = {
			1: 'Like',
			2: 'Between',
			3: 'Equals_Select',
			4: 'InTimePeriod',
			5: 'BetweenTwoDates',
			6: 'EqualsPopup',
			7: 'Equals_TextArea',
			8: 'Equals_CheckBoxes',
			9: 'EqualsCalendar',
			10: 'Equals_Multiple'
		};
		return controlTypes[controlType];
	};

	var applyDateTimeExpression = function (filter) {
		if (filter.Value != null) {
			var timeExpression = filter.Value;
			if (timeExpression != null && typeof (timeExpression) == "string") {
				if (timeExpression.indexOf('%') >= 0) {
					var rt = new RelativeTime();
					var relativeDate = null;
					try {
						relativeDate = rt.getRelativeTime(timeExpression);
					} catch (e) {
						relativeDate = null;
						if (console != null && typeof console.log == 'function') console.log('cannot parse expression: ' + timeExpression);
					}
					if (relativeDate != null) {
						filter.Value = moment(relativeDate).lang(locale).format('L HH:mm');
					}
				}
			}
		}
		if (filter.Values != null && Object.prototype.toString.call(filter.Values) === '[object Array]') {
			for (var i = 0; i < filter.Values.length; i++) {
				var timeExpression = filter.Values[i];
				if (timeExpression != null && typeof (timeExpression) == "string") {
					if (timeExpression.indexOf('%') >= 0) {
						var rt = new RelativeTime();
						var relativeDate = null;
						try {
							relativeDate = rt.getRelativeTime(timeExpression);
						} catch (e) {
							relativeDate = null;
							if (console != null && typeof console.log == 'function') console.log('cannot parse expression: ' + timeExpression);
						}
						if (relativeDate != null) {
							filter.Values[i] = moment(relativeDate).lang(locale).format('L HH:mm');
						}
					}
				}
			}
		}
	};

	var _preProcessFilter = function (filter) {
		if (!filter.Uid) {
			uidGenIndex++;
			filter.Uid = 'additionalFilterGenId' + uidGenIndex;
		}
		filter.DisplayCloseButton = !filter.IsRequired;
		if (typeof filter.Values == "undefined" || filter.Values == null)
			filter.Values = [];
		if (typeof filter.LinkedColumns == 'undefined')
			filter.LinkedColumns = null;
		if (typeof filter.Value == "undefined")
			filter.Value = null;
		filter.ControlType = getControlTypeId(filter.ControlType);
		filter.ControlTypeString = getControlTypeString(filter.ControlType);
		if (filter.Value != null) {
			if (moment(filter.Value).isValid()) {
				filter.Value = moment(filter.Value).lang(locale).format('L HH:mm');
			}
		}
		if (filter.Values != null && filter.Values.length >= 1 && moment(filter.Values[0]).isValid()) {
			filter.Values[0] = moment(filter.Values[0]).lang(locale).format('L HH:mm');
		}
		if (filter.Values != null && filter.Values.length >= 2 && moment(filter.Values[1]).isValid()) {
			filter.Values[1] = moment(filter.Values[1]).lang(locale).format('L HH:mm');
		}
		applyDateTimeExpression(filter);
	};

	/**
	   * Prepare loaded filters and call done handler
	   */
	var _preProcessFilters = function (filters, doneHandler) {
		if (filters.RegularFilters == null)
			filters.RegularFilters = [];
		if (filters.MiscFilters == null)
			filters.MiscFilters = [];
		if (filters.Groups == null)
			filters.Groups = [];
		uidGenIndex = 0;

		$.each(filters.RegularFilters, function (iF, f) {
			_preProcessFilter(f);
			f.FromServer = true;
		});
		$.each(filters.MiscFilters, function (iF, f) {
			f.IsMisc = true;
			_preProcessFilter(f);
		});
		$.each(filters.Groups, function (iGroup, group) {
			$.each(group.Items, function (iF, f) {
				f.IsMisc = false;
				_preProcessFilter(f);
			});
		});

		if (console != null && typeof console.log == 'function') console.log('loaded filters', filters);
		if (typeof doneHandler == 'function') {
			doneHandler(filters);
		}
	};

	/**
	   * Get active filters from server
	   */
	function loadActiveFilters(filters, doneHandler) {
		var reportName = urlSettings.reportInfo.fullName;
		var masterName = urlSettings.reportInfo.masterReportFullName;
		var ddValue = urlSettings.reportInfo.ddkvalue;
		var cmd = 'GetActiveAdditionalFilters';
		var requestString = '?wscmd=' + cmd + '&wsarg0=' + encodeURIComponent(reportName);
		if (masterName != null) {
			requestString += '&wsarg1=' + encodeURIComponent(masterName);
			requestString += '&wsarg2=' + encodeURIComponent(ddValue);
		}
		$.ajax({
			url: urlSettings.urlRsDuncanPage + requestString
		}).done(function (filtersData) {
			var activeFiltersData = filtersData;
			if (filters.RegularFilters == null) {
				filters.RegularFilters = [];
			}
			if (activeFiltersData != null && activeFiltersData.Filters != null && activeFiltersData.Filters.length > 0) {
				$.each(activeFiltersData.Filters, function (iItem, item) {
					filters.RegularFilters.push(item);
				});
			}
			_preProcessFilters(filters, doneHandler);
		}).fail(function (jqXhr, textStatus, errorThrown) {
			alert('Failed to load ' + _url + '. See console for details');
			if (console != null && typeof console.log == 'function') console.log(jqXhr, textStatus, errorThrown);
		});
	}

	/**
	   * Get filters configuration from server
	   * doneHandler - function(filtersData) {}
	   */
	var loadFilters = function (doneHandler) {
		var filters = null;
		var _url = urlSettings.urlBase + '/Reporting/Resources/js/additional-filters-config.js';
		$.ajax({
			url: _url,
			dataType: 'text'
		}).done(function (data) {
			var jData = $.parseJSON(data);

			// try to find filters by report
			for (var key in jData.filtersByReport) {
				if (urlSettings.reportInfo.fullName.trim().indexOf(key) >= 0) {
					filters = jData.filtersByReport[key];
				}
			}
			if (filters != null) {
				loadActiveFilters(filters, doneHandler);
				return;
			}

			// try to find filters by table
			_url = urlSettings.urlRsPage + '?wscmd=getcrstables';
			$.ajax({
				url: _url
			}).done(function (data2) {
				var tables = data2;
				if (tables.length > 0) {
					filters = jData.filtersByTable[tables[0]];
					if (filters != null) {
						loadActiveFilters(filters, doneHandler);
						return;
					}

					// autogenerate filters
					_url = urlSettings.urlRsPage + '?wscmd=getallfiltersdata';
					$.ajax({
						url: _url,
						async: false
					}).done(function (filtersData) {
						if (filtersData != null && filtersData.Filters != null) {
							filters = {
								Joins: {},
								RegularFilters: [],
								MiscFilters: [],
								Groups: []
							};
							$.each(filtersData.Filters, function (iFilter, filter) {
								filters.MiscFilters.push(filter);
							});
							loadActiveFilters(filters, doneHandler);
							return;
						} else {
							alert('Cannot retrieve filters data information from server.');
						}
					}).fail(function (jqXhr, textStatus, errorThrown) {
						alert('Failed to load ' + _url + '. See console for details');
						if (console != null && typeof console.log == 'function') console.log(jqXhr, textStatus, errorThrown);
					});
				}
			}).fail(function (jqXhr, textStatus, errorThrown) {
				alert('Failed to load ' + _url + '. See console for details');
				if (console != null && typeof console.log == 'function') console.log(jqXhr, textStatus, errorThrown);
			});
		}).fail(function (jqXhr, textStatus, errorThrown) {
			alert('Failed to load ' + _url + '. See console for details');
			if (console != null && typeof console.log == 'function') console.log(jqXhr, textStatus, errorThrown);
		});
	};

	return {
		// functions
		locale: locale,
		loadFilters: loadFilters,
		getControlTypeId: getControlTypeId,
		getControlTypeString: getControlTypeString
	};
}