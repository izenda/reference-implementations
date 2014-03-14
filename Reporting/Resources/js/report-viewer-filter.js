function GetRenderedReportSet() {
	var renderedReportDiv$ = $('#renderedReportDiv');
	var divLoading$ = $('<div class="rvf-loading">Loading...<br /><img alt="" src="rs.aspx?image=loading.gif" /></div>');
	renderedReportDiv$.empty();
	renderedReportDiv$.append(divLoading$);

	var requestString = 'wscmd=getrenderedreportset';
	var urlParams = '';
	var queryParameters = {}, queryString = location.search.substring(1),
			  re = /([^&=]+)=([^&]*)/g, m;
	while (m = re.exec(queryString)) {
		var pName = decodeURIComponent(m[1]).toLowerCase();
		queryParameters[pName] = decodeURIComponent(m[2]);
		if (pName != 'rn') {
			if (urlParams == '') {
				urlParams += '?';
			}
			else {
				urlParams += '&';
			}
			urlParams += pName + '=' + decodeURIComponent(m[2]);
		}
	}
	AjaxRequest('./rs.aspx' + urlParams, requestString, GotRenderedReportSet, null, 'getrenderedreportset');
}

function GotRenderedReportSet(returnObj, id) {
	if (id != 'getrenderedreportset' || returnObj == undefined || returnObj.length == 0)
		return;
	var renderedReportDiv = document.getElementById('renderedReportDiv');
	renderedReportDiv.innerHTML = returnObj;
}

function ReportViewerFilters() {
	var _urlSettings = null;
	var _filterSettings;
	var _containerId = null;
	var _container$ = null;
	var _slider$ = null;
	var _filtersContainerRegular$ = null;
	var _filtersContainerAdditional$ = null;
	var _filtersData = null;

	var rtime = new Date(1, 1, 2000, 12, 00, 00);
	var timeout = false;
	var delta = 500;

	/**
	 * Handler for refresh button click
	 */
	var _refreshFilterHandler = function () {
		_commitFiltersData(true);
	};

	var _stringToDate = function (dateStr) {
		return moment(dateStr, moment.langData(reportViewerFilterSettings.locale)._longDateFormat.L + ' HH:mm')._d;
	};

	/**
	 * Send filters information to server
	 */
	var _commitFiltersData = function (updateReportSet, callback) {
		if (_filtersData.RegularFilters == null || _filtersData.RegularFilters.length == 0)
			return;
		var dataToCommit = new Array();
		var currentIndex = 0;
		for (var index = 0; index < _filtersData.RegularFilters.length; index++) {
			var filterObj = new Object();
			$.extend(filterObj, _filtersData.RegularFilters[index]);
			var fData = _getFilterValues(_filtersData.RegularFilters[index]);
			if (fData.value2 == null) {
				filterObj.Value = fData.value1;
				filterObj.Values = [fData.value1];
			} else {
				filterObj.Value = null;
				filterObj.Values = [fData.value1, fData.value2];
			}
			var type = _filtersData.RegularFilters[index].Type;
			if (type != null && type.toLowerCase().indexOf('int') >= 0) {
				if (filterObj.Value != null)
					filterObj.Value = parseInt(filterObj.Value);
				for (var i = 0; i < filterObj.Values.length; i++) {
					filterObj.Values[i] = parseInt(filterObj.Values[i]);
				}
			}
			if (_filtersData.RegularFilters[index].ControlType == 5 || _filtersData.RegularFilters[index].ControlType == 9) {
				var f = _filtersData.RegularFilters[index];
				if (filterObj.Values != null && filterObj.Values.length == 2) {
					filterObj.Values[0] = _stringToDate(filterObj.Values[0]);
					filterObj.Values[1] = _stringToDate(filterObj.Values[1]);
				}
				if (filterObj.Value) {
					filterObj.Value = _stringToDate(filterObj.Value);
				}
			}
			if (filterObj.Values.length == 1 && filterObj.Values[0] == '...') {
				continue;
			}
			filterObj.Uid = fData.uid;
			filterObj.IsAdditionalFilter = _filtersData.RegularFilters[index].IsAdditionalFilter;
			filterObj.IsDD = _filtersData.RegularFilters[index].IsDD;
			filterObj.Column = _filtersData.RegularFilters[index].ColumnName;
			filterObj.Operator = _filtersData.RegularFilters[index].ControlType;
			filterObj.LinkedColumns = _filtersData.RegularFilters[index].LinkedColumns;
			dataToCommit[currentIndex] = filterObj;
			currentIndex++;
		}
		var cmd = 'ApplyFiltersFiltersNew';
		var requestString = 'wscmd=' + cmd + '&wsarg0=' + encodeURIComponent(JSON.stringify(dataToCommit)) +
		  '&wsarg1=' + encodeURIComponent(urlSettings.reportInfo.fullName);
		if (updateReportSet) {
			$.ajax({
				type: "POST",
				url: urlSettings.urlRsDuncanPage,
				data: requestString
			}).done(function () {
				GetRenderedReportSet();
			});
		} else {
			$.ajax({
				type: "POST",
				url: urlSettings.urlRsDuncanPage,
				data: requestString
			}).done(function () {
				if (typeof callback == "function")
					callback();
				else
					GetRenderedReportSet();
			});
		}
	};

	/**
	 * Get filter by property conditions
	 * condition: {propName: propValue}
	 */
	var grepFilters = function (conditions, findInRegularFilters) {
		var compareFunction = function (cond, filter) {
			if (!$.isPlainObject(cond) || $.isEmptyObject(cond))
				return true;
			var res = true;
			for (var propertyName in cond) {
				var propertyVal = cond[propertyName];
				res = res && filter[propertyName] == propertyVal;
			}
			return res;
		};
		// regular filters
		var result;
		if (findInRegularFilters) {
			result = $.grep(_filtersData.RegularFilters, function (f) {
				return compareFunction(conditions, f);
			});
			return result;
		} else {
			result = [];
			// misc filters
			if (_filtersData.MiscFilters != null) {
				result = result.concat($.grep(_filtersData.MiscFilters, function (f) {
					return compareFunction(conditions, f);
				}));
			}
			// groups
			if (_filtersData.Groups != null) {
				$.each(_filtersData.Groups, function (iGroup, group) {
					result = result.concat($.grep(group.Items, function (f) {
						return compareFunction(conditions, f);
					}));
				});
			}
			return result;
		}
	};

	/**
	 * Get regular filter by uid
	 */
	var getFilterRegularByUid = function (uid) {
		var filters = grepFilters({ Uid: uid }, true);
		if (filters.length > 1)
			throw 'Found more than one filter with Uid = ' + uid;
		return filters.length > 0 ? filters[0] : null;
	};

	/**
	 * Get additional filter by uid
	 */
	var getFilterAdditionalByUid = function (uid) {
		var filters = grepFilters({ Uid: uid }, false);
		if (filters.length > 1)
			throw 'Found more than one filter with Uid = ' + uid;
		return filters.length > 0 ? filters[0] : null;
	};

	/**
	 * Get additional filter by column name
	 */
	var getFilterAdditionalByColumn = function (columnName) {
		var filters = grepFilters({ ColumnName: columnName }, false);
		return filters.length > 0 ? filters[0] : null;
	};

	/**
	 * Get regular filter jquery element
	 */
	var getRegularFilterJqueryObject = function (uid) {
		return _container$.find('.rvf-regular-filter[id=' + uid + ']');
	};

	/**
	 * Get filter values
	 */
	var _getFilterValues = function (filter) {
		var result = {
			uid: filter.uid,
			value1: null,
			value2: null
		};
		var filter$ = getRegularFilterJqueryObject(filter.Uid);
		switch (filter.ControlType) {
			case 1:
			case 3:
			case 4:
			case 7:
			case 9:
				result.value1 = filter$.find('.ndbfc').val();
				break;
			case 2:
				result.value1 = filter$.find('.ndbfc_l').val();
				result.value2 = filter$.find('.ndbfc_r').val();
				break;
			case 5:
				result.value1 = filter$.find('.ndbfc_1').val();
				result.value2 = filter$.find('.ndbfc_2').val();
				break;
			case 6:
				break;
			case 8:
				var cb$ = filter$.find('.ndbfc_cb:checked');
				var str = '';
				$.each(cb$, function (iCb, currCheckbox) {
					var currCheckbox$ = $(currCheckbox);
					if (currCheckbox$.prop('checked')) {
						if (str != '')
							str += ',';
						str += currCheckbox$.val();
					}
				});
				result.value1 = str;
				break;
			case 10:
				var filterOptionsEl = filter$.find('.ndbfc>option:selected');;
				str = $.map(filterOptionsEl, function (o) { return $(o).attr('value'); }).join();
				result.value1 = str;
				break;
			default:
		}
		return result;
	};

	/**
	 * Create query string
	 */
	var _createApplyedFiltersQueryString = function (filter, affectingFilters) {
		var queryString = '';
		var tables = [];
		var i = 0;
		var ownColumnName = filter.ColumnName;
		if (!ownColumnName)
			throw 'ColumnName property must be set for filter ' + filter.Uid;
		var ownTableName = ownColumnName.substr(0, ownColumnName.lastIndexOf('.'));
		tables.push(ownTableName);
		if (affectingFilters.length > 0) {
			$.each(affectingFilters, function (iRf, rf) {
				var columnName = rf.ColumnName;
				if (columnName == null)
					return;
				var tableName = columnName.substr(0, columnName.lastIndexOf('.'));
				if (tables.indexOf(tableName) < 0) {
					tables.push(tableName);
				}
				var operatorName = rf.ControlTypeString;
				var fData = _getFilterValues(rf);

				var fvl = fData.value1;
				var fvr = fData.value2;
				if (rf.ControlType == 5 || rf.ControlType == 9) {
					fvl = _stringToDate(fData.value1, dateFormat);
					fvr = _stringToDate(fData.value2, dateFormat);
				}

				if (fvl == '...')
					return;

				if (queryString != '')
					queryString += '&';
				queryString += 'fc' + i + '=' + columnName + '&fo' + i + '=' + operatorName + '&fvl' + i + '=' + fvl;
				if (fvr) {
					queryString += '&fvr' + i + '=' + fvr;
				}
				i++;
			});
		}
		// add tables to query string
		for (i = 0; i < tables.length; i++) {
			if (queryString != '')
				queryString += '&';
			queryString += 'tbl' + i + '=' + tables[i];
		}
		// add joins to query string
		if (tables.length > 1) {
			for (i = 1; i < tables.length; i++) {
				var joins = _filtersData.Joins;
				var join = joins[tables[i]];
				if (join != null)
					queryString += '&jn' + i + '=INNER&lclm' + i + '=' + join.pkColumn + '&rclm' + i + '=' + join.fkColumn;
			}
		}
		return queryString;
	};

	/**
	 * Occurs when user add or removed regular filter
	 */
	var _regularFiltersChanged = function (indexChanged, actionName) {
		var filtersToUpdate = [];
		var affectingFilters = [];
		var i = indexChanged;
		var filter;
		while (i < _filtersData.RegularFilters.length) {
			filter = _filtersData.RegularFilters[i];
			filtersToUpdate.push(filter);
			i++;
		}
		if (indexChanged > 0) {
			for (i = 0; i < indexChanged; i++) {
				filter = _filtersData.RegularFilters[i];
				if (!filter.DistinctColumn)
					affectingFilters.push(filter);
			}
		}
		// update filters data
		if (filtersToUpdate.length > 0) {
			$.each(filtersToUpdate, function (iF, f) {
				if (f.ControlType != 3)
					return;
				var query = '';
				var filter$ = getRegularFilterJqueryObject(f.Uid);
				if (f.DistinctColumn != null) {
					var fullTableName = f.DistinctColumn.substr(0, f.DistinctColumn.lastIndexOf('.'));
					query = 'columnName=' + f.DistinctColumn + '&tbl0=' + fullTableName;
				} else {
					var queryString = _createApplyedFiltersQueryString(f, affectingFilters);
					query = 'columnName=' + f.ColumnName + '&' + queryString;
				}
				EBC_LoadData('ExistentValuesList', query, filter$.find('select').get(0), true, function (currentSelect) {
					//if (console != null && typeof console.log == 'function') console.log('loaded values for ', f, filter$.find('option'));
					if (filter$.find('option').length == 0) {
						alert('No values found for this filter. Field name: ' + (f.DistinctColumn != null ? f.DistinctColumn : f.ColumnName));
					}
				});
			});
		}
		if (console != null && typeof console.log == 'function') console.log('Regular filters collection changed', _filtersData.RegularFilters, ',action:' + actionName, ',index:' + indexChanged,
	  ',filters to update:', filtersToUpdate, ', filters affects:', affectingFilters);
	};

	/**
	 * Occurs when user selects additional filter
	 */
	var _activateFilterHandler = function (filter) {
		if ($.grep(_filtersData.RegularFilters, function (f) {
	  return f.Uid == filter.Uid;
		}).length > 0) {
			throw false;
		}
		if ($.grep(_filtersData.RegularFilters, function (f) {
		  var colName = f.DistinctColumn != null ? f.DistinctColumn : f.ColumnName;
		var colName2 = filter.DistinctColumn != null ? filter.DistinctColumn : filter.ColumnName;
		  return colName == colName2;
		}).length > 0)
			return false;

		filter.IsActive = true;
		_filtersData.RegularFilters.push(filter);
		var $regularFilter = _renderRegularFilter(filter);
		var templateFiltersContainerTd$ = _container$.find('.rvf-regular-filters-td');
		var li$ = $('<li></li>');
		li$.append($regularFilter);
		templateFiltersContainerTd$.find('.overview').append(li$);
		_slider$.reloadSlider();
		_slider$.goToNextSlide();
		_regularFiltersChanged(_filtersData.RegularFilters.length - 1, 'add');
		return true;
	};

	/**
	 * Render additional filter
	 */
	var _renderAdditionalFilterNew = function (filterItem) {
		var groupItemTemplate$ = $('#rvfGroupItemTemplate');
		var groupItemContent$ = $.tmpl(groupItemTemplate$, [filterItem]);

		// filter expand handler
		groupItemContent$.click(function () {
			var this$ = $(this);
			var thisRoot$ = this$.closest('.rvf-group-item');
			var uid = thisRoot$.attr('uid');
			var filter = getFilterAdditionalByUid(uid);
			var selectedItem$;
			if (!filter.IsMisc) {
				var thisGroupRoot$ = this$.closest('.rvf-group');
				selectedItem$ = thisGroupRoot$;
			} else {
				selectedItem$ = thisRoot$;
			}
			selectedItem$.fadeOut(200, function () {
				_activateFilterHandler(filter);
			});
		});

		// select option handler
		groupItemContent$.find('.rvf-group-item-option').click(function () {
			var this$ = $(this);
			var thisRoot$ = this$.closest('.rvf-group-item');
			var filterUid = thisRoot$.attr('Uid');
			var filter = getFilterAdditionalByUid(filterUid);
			_activateFilterHandler(filter);
		});
		return groupItemContent$;
	};

	/**
	 * Render additional filters group
	 */
	var _renderAdditionalFiltersNew = function (filterItems) {
		var items = [];
		$.each(filterItems, function (iItem, item) {
			var res$ = _renderAdditionalFilterNew(item);
			if (_isCorrelatingFilter(item)) {
				res$.hide();
			}
			items.push(res$);
		});
		return items;
	};

	/**
	 * Is filter in regular filters
	 */
	var _isCorrelatingFilter = function (filter) {
		var correlatingFilter = $.grep(_filtersData.RegularFilters, function (regularFilter) {
			return regularFilter.ColumnName == filter.ColumnName && regularFilter.ControlType == filter.ControlType;
		});
		return correlatingFilter.length > 0;
	};

	/**
	 * Render group of additional filters: apply group template.
	 */
	var _renderAdditionalGroup = function (group) {
		var groupTemplate$ = $('#rvfGroupTemplate');
		var groupContent$ = $.tmpl(groupTemplate$, [group]);
		var groupItemsContent = _renderAdditionalFiltersNew(group.Items);
		$.each(groupItemsContent, function (iItem, item) {
			groupContent$.append(item);
		});
		var foundAny = false;
		$.each(group.Items, function (iFilter, filter) {
			foundAny |= _isCorrelatingFilter(filter);
		});
		if (foundAny)
			groupContent$.hide();
		return groupContent$;
	};

	/**
	 * Initialize required filters.
	 */
	var _initializeRequiredFilters = function () {
		var activateRequiredFilter = function (filter) {
			var button$ = $('.rvf-group-item[uid=' + filter.Uid + ']');
			var selectedItem$;
			if (!filter.IsMisc) {
				var thisGroupRoot$ = button$.closest('.rvf-group');
				selectedItem$ = thisGroupRoot$;
			} else {
				selectedItem$ = button$;
			}
			selectedItem$.fadeOut(200, function () {
				_activateFilterHandler(filter);
			});
		};

		if (_filtersData.Groups != null && _filtersData.Groups.length > 0) {
			$.each(_filtersData.Groups, function (iGroup, group) {
				$.each(group.Items, function (iFilter, filter) {
					if (filter.IsRequired) {
						activateRequiredFilter(filter);
					}
				});
			});
		}

		if (_filtersData.MiscFilters != null && _filtersData.MiscFilters.length > 0) {
			$.each(_filtersData.MiscFilters, function (iFilter, filter) {
				if (filter.IsRequired) {
					activateRequiredFilter(filter);
				}
			});
		}
	};

	/**
	 * Render additional filters
	 */
	var _renderAdditionalFilters = function () {
		_filtersContainerAdditional$ = _container$.find('.rvf-menu-content-additional');
		var addFiltersTemplate$ = $('#rvfAddFiltersTemplate');
		var addFiltersContent$ = $.tmpl(addFiltersTemplate$, [{}]);
		_filtersContainerAdditional$.append(addFiltersContent$);
		// group filters
		var addFiltersBody$ = addFiltersContent$.find('.rvf-addfilters-body-main');
		if (_filtersData.Groups != null && _filtersData.Groups.length > 0) {
			addFiltersBody$.empty();
			$.each(_filtersData.Groups, function (iGroup, group) {
				var group$ = _renderAdditionalGroup(group);
				addFiltersBody$.append(group$);
			});
		} else {
			addFiltersBody$.hide();
		}

		// misc filters
		var addFiltersBodyMisc$ = addFiltersContent$.find('.rvf-addfilters-body-misc');
		if (_filtersData.MiscFilters != null && _filtersData.MiscFilters.length > 0) {
			var miscContent = _renderAdditionalFiltersNew(_filtersData.MiscFilters);
			$.each(miscContent, function (iItem, item) {
				addFiltersBodyMisc$.append(item);
			});
		} else {
			addFiltersBodyMisc$.hide();
		}
	};

	/**
	 * reindex regular filters
	 */
	var _reindexRegularFilters = function () {
		var i = 0;
		_container$.find('.rvf-regular-filter').each(function (iFilter, filter) {
			var filter$ = $(filter);
			filter$.attr('index', i);
			i++;
		});
	};

	/**
	 * Remove element from _filtersData.RegularFilter
	 */
	var _removeFromRegularFilters = function (filterUid) {
		var removedIndex = -1;
		_filtersData.RegularFilters = jQuery.grep(_filtersData.RegularFilters, function (filter, iFilter) {
			var result = filter.Uid != filterUid;
			if (!result)
				removedIndex = iFilter;
			return result;
		});
		return removedIndex;
	};

	/**
	 * Used for autocomplete filter (filter operator LIKE)
	 */
	var _initAutoComplete = function (input$) {
		input$.autocomplete({
			minLength: 1,
			source: function (req, responseFunction) {
				var this$ = $(this.element);
				var filter$ = this$.closest('.rvf-regular-filter');
				var uid = filter$.attr('id');
				var filterItem = getFilterRegularByUid(uid);
				var possibleText = this$.val();
				var fullColumnName = filterItem.DistinctColumn != null ? filterItem.DistinctColumn : filterItem.ColumnName;
				var fullTableName = fullColumnName.substr(0, fullColumnName.lastIndexOf('.'));
				var cmd = '&tbl0=' + fullTableName + '&possibleValue=' + possibleText;
				EBC_LoadData("ExistentValuesList", "columnName=" + fullColumnName + cmd, null, true, function (responseResult) {
					var opts = $(responseResult);
					var cnt = opts.length;
					var result = new Array();
					for (var i = 0; i < cnt; i++) {
						var text = opts[i].value;
						if (text != null && text != "" && text != "...")
							result.push(text);
					}
					responseFunction(result);
				});
			}
		});
	};

	var _initializeFilterControlData = function (filter, control$) {
		var columnName = (filter.DistinctColumn && filter.DistinctColumn !== '') ? filter.DistinctColumn : filter.ColumnName;
		var tableName = columnName.substr(0, columnName.lastIndexOf('.'));

		if (filter.ControlType == 4) {
			var requestString = '?cmd=GetOptionsByPath&p=PeriodList';
			$.ajax({
				url: urlSettings.urlRsPage + requestString
			}).done(function (options) {
				control$.empty();
				control$.append($(options));
			});
			return;
		}
		if (filter.ControlType == 10) {
			var requestString = '?cmd=GetOptionsByPath&p=ExistentValuesList&columnName=' + columnName + '&tbl0=' + tableName;
			$.ajax({
				url: urlSettings.urlRsPage + requestString
			}).done(function (options) {
				control$.empty();
				control$.append($(options));
			});
			return;
		}
	};

	/**
	 * Create filter html content (return jquery object)
	 */
	var _generateFilterControlHtml = function (filter) {
		var onChangeCmd = '';
		var onKeyUpCmd = '';
		var value = filter.Value;
		var values = filter.Values;
		var existingValues = filter.ExistingValues ? filter.ExistingValues : [];
		var existingLabels = filter.ExistingLabels ? filter.ExistingLabels : [];
		var result = '';
		switch (filter.ControlType) {
			case 1:
				result = '<input style="margin: 8px; width: 248px;" type="text" class="ndbfc" value="' + (value != null ? value : '') + '" ' + onKeyUpCmd + ' />';
				break;
			case 2:
				result = '<input style="margin: 8px; width: 248px;" type="text" class="ndbfc_l" value="' + values[0] + '" ' + onKeyUpCmd + ' />';
				result += '<input style="margin: 8px; width: 248px;" type="text" class="ndbfc_r" value="' + values[1] + '" ' + onKeyUpCmd + ' />';
				break;
			case 3:
				if (filter.LoadFromDatabase) {
					values = ['loading...'];
					existingValues = ['loading...'];
					existingLabels = ['loading...'];
				}
				result += '<select style="margin: 8px; width: 254px;" class="ndbfc">';
				for (var cnt3 = 0; cnt3 < existingValues.length; cnt3++) {
					var selected3 = '';
					if (existingValues[cnt3] == value)
						selected3 = 'selected="selected"';
					result += '<option value="' + existingValues[cnt3] + '" ' + selected3 + '>' + existingLabels[cnt3] + '</option>';
				}
				result += '</select>';
				break;
			case 4:
				result += '<select style="margin: 8px; width: 254px;" class="ndbfc">';
				for (var cnt4 = 0; cnt4 < existingValues.length; cnt4++) {
					var selected4 = '';
					if (existingValues[cnt4] == value)
						selected4 = 'selected="selected"';
					result += '<option value="' + existingValues[cnt4] + '" ' + selected4 + '>' + existingLabels[cnt4] + '</option>';
				}
				result += '</select>';
				break;
			case 5:
				result += '<div style="padding-left: 8px;white-space: nowrap; width: 250px;">';
				result += '<input type="text" ' + onChangeCmd + ' value="' + (values[0] ? values[0] : '') + '" style="width: 220px;" class="ndbfc_1"/>';
				result += '</div>';
				result += '<div style="padding-left: 8px;white-space: nowrap; width: 250px;">';
				result += '<input type="text" ' + onChangeCmd + ' value="' + (values[1] ? values[1] : '') + '" style="width: 220px;" class="ndbfc_2"/>';
				result += '</div>';
				break;
			case 6:
				result += 'equals popup - not implemented yet';
				break;
			case 7:
				result += '<textarea style="margin: 8px; width: 238px;" rows="2" class="ndbfc" ' + onKeyUpCmd + '>' + value + '</textarea>';
				break;
			case 8:
				result += '<div class="ndbfc" style="padding-left:8px; overflow: auto; max-height: 70px;">';
				var valuesSet8 = value.split(',');
				for (var cnt8 = 0; cnt8 < valuesSet8.length; cnt8++) {
					var checked8 = '';
					result += '<nobr><input type="checkbox" style="margin: 3px;" class="ndbfc_cb" ' + onChangeCmd + ' value="' + valuesSet8[cnt8] + '" ' + checked8 + '" />' + valuesSet8[cnt8] + '</nobr><br>';
				}
				result += '</div>';
				break;
			case 9:
				result += '<div style="padding-left: 8px;white-space: nowrap; width: 250px;">';
				result += '<input type="text" ' + onChangeCmd + ' value="' + value + '" style="width: 220px;" class="ndbfc"/>';
				result += '</div>';
				break;
			case 10:
				result += '<select multiple="" style="margin: auto 0; height: 70px;" class="ndbfc" ' + onChangeCmd + '>';
				if (!value)
					break;
				var valuesSet10 = value.split(',');
				for (var cnt10 = 0; cnt10 < existingValues.length; cnt10++) {
					var selected10 = '';
					for (var subCnt = 0; subCnt < valuesSet10.length; subCnt++) {
						if (existingValues[cnt10] == valuesSet10[subCnt]) {
							selected10 = 'selected="selected"';
							break;
						}
					}
					result += '<option value="' + existingValues[cnt10] + '" ' + selected10 + '>' + existingLabels[cnt10] + '</option>';
				}
				result += '</select>';
				break;
			default:
				result = '';
		}
		var result$ = $(result);
		_initializeFilterControlData(filter, result$);
		// if datetime filter we need to initialize datepicker
		if (filter.ControlType == 1 && filter.UseAutosuggest == true) {
			_initAutoComplete(result$);
		}
		if ([5, 9].indexOf(filter.ControlType) >= 0) {
			$.each(result$, function (iRes, res) {
				var datePickerTarget$;
				if ($(res).prop('tagName').toLowerCase() == 'input') {
					datePickerTarget$ = $(res);
				} else {
					datePickerTarget$ = $(res).find('input');
				}
				var dateFormat = moment.langData(reportViewerFilterSettings.locale)._longDateFormat.L;
				dateFormat = dateFormat.replace('DD', 'dd');
				dateFormat = dateFormat.replace('MM', 'mm');
				dateFormat = dateFormat.replace('YYYY', 'yy');
				//var timeFormat = moment.langData(reportViewerFilterSettings.locale)._longDateFormat.LT;
				datePickerTarget$.datetimepicker({
					showOn: 'button',
					buttonImage: 'rs.aspx?image=calendar_icon.png',
					buttonImageOnly: true,
					dateFormat: dateFormat,
					timeFormat: 'HH:mm',
					stepHour: 1,
					stepMinute: 10,
					onSelect: function (date, datepicker$) {
						var timePicker$ = datepicker$.settings.timepicker;
						var thisDate = new Date(datepicker$.selectedYear, datepicker$.selectedMonth, parseInt(datepicker$.selectedDay),
						timePicker$.hour, timePicker$.minute, 0, 0);
						var currInput$ = $(this);
						var nextInput$ = currInput$.parent().next('div').find('input');
						var prevInput$ = currInput$.parent().prev('div').find('input');
						if (nextInput$.length > 0) {
							if (nextInput$.val() != null && nextInput$.val() != '') {
								var nextDate = Date.parse(nextInput$.val());
								if (nextDate < thisDate) {
									alert('Min date cannot be more than max date');
								}
							}
						} else if (prevInput$.length > 0) {
							if (prevInput$.val() != null && prevInput$.val() != '') {
								var prevDate = Date.parse(prevInput$.val());
								if (prevDate > thisDate) {
									alert('Max date cannot be less than min date');
								}
							}
						}
						var $f = currInput$.closest('.rvf-regular-filter');
						var idx = parseInt($f.attr('index'));
						_regularFiltersChanged(idx + 1, 'change');
					}
				});
			});
		}
		if (filter.ControlType == 3) {
			result$.change(function () {
				var $f = $(this).closest('.rvf-regular-filter');
				var idx = parseInt($f.attr('index'));
				_regularFiltersChanged(idx + 1, 'change');
			});
		}
		return result$;
	};

	/**
	 * Render single regular filter
	 */
	var _renderRegularFilter = function (filter) {
		//filter.onChangeCmd = 'onchange="CommitFiltersData(false);"';
		filter.onKeyUpCmd = '';
		filter.IsActive = true;
		var filterTemplate$ = $('#rvfRegularFilterBlockTemplate');
		var filterTemplateContent$ = $.tmpl(filterTemplate$, [filter]);

		// render control content
		var filterControlHtml = _generateFilterControlHtml(filter);
		var filterControlHtml$ = $(filterControlHtml);
		filterTemplateContent$.append(filterControlHtml$);

		// set filter value in UI
		if (filter.Value != null && filter.ControlType == 1) {
			filterTemplateContent$.find('input').val(filter.Value);
		}
		if (filter.Values != null && filter.Values.length > 0 && filter.ControlType != 1) {
			filterTemplateContent$.find('input').each(function (iInput, input) {
				var $input = $(input);
				if (iInput < filter.Values.length)
					$input.val(filter.Values[iInput]);
				if (filter.FromServer && filter.ControlType == 5) {
					$input.val(_stringToDate(filter.Values[iInput]));
				}

			});
		}

		// close regualar filter handler
		var closeButton$ = filterTemplateContent$.find('.rvf-regular-filter-close');
		closeButton$.click(function () {
			var btn$ = $(this);
			var filter$ = btn$.closest('.rvf-regular-filter');
			var uid = filter$.attr('id');

			filter$.fadeOut(200, function () {
				var removedIndex = _removeFromRegularFilters(uid);
				filter$.parent().remove();
				_slider$.goToSlide(0);
				_slider$.reloadSlider();
				//_cascadingRefreshFilters2(blockPrevious$, true);
				if (_filtersData.RegularFilters.length == 0) {
					_container$.find('.bx-next').addClass('disabled');
					_container$.find('.bx-prev').addClass('disabled');
				}
				_reindexRegularFilters();
				_regularFiltersChanged(removedIndex, 'remove');
			}, 0);

			var filterItem = getFilterAdditionalByUid(uid);
			if (filterItem == null) {
				var f = getFilterRegularByUid(uid);
				filterItem = getFilterAdditionalByColumn(f.ColumnName);
				if (filterItem != null) {
					filterItem.Values = f.Values;
					filterItem.Value = f.Value;
				}
			}
			if (filterItem == null)
				return;
			if (filterItem.IsMisc) {
				var miscContainer$ = _filtersContainerAdditional$.find('.rvf-addfilters-body-misc');
				miscContainer$.find('.rvf-group-item').each(function (iItem, item) {
					var miscItem$ = $(item);
					if (miscItem$.attr('uid') == uid) {
						miscItem$.fadeIn(200);
					}
				});
			} else {
				var groupFound = false;
				var i = 0;
				var groupFoundItem = null;
				while (!groupFound && i < _filtersData.Groups.length) {
					var group = _filtersData.Groups[i];
					if ($.grep(group.Items, function (item) {
					  return item.Uid == filterItem.Uid;
					}).length > 0) {
						groupFound = true;
						groupFoundItem = group;
					}
					i++;
				}
				if (groupFound) {
					var mainAreaOfAdditionalFilters$ = _filtersContainerAdditional$.find('.rvf-addfilters-body-main');
					mainAreaOfAdditionalFilters$.find('.rvf-group-header').each(function (iGroup, group) {
						var groupHeader$ = $(group);
						var groupName = groupHeader$.text();
						if (groupName == groupFoundItem.Description) {
							groupHeader$.closest('.rvf-group').fadeIn(200);
							groupHeader$.closest('.rvf-group').find('.rvf-group-item').fadeIn(200);
						}
					});
				}
			}
		});
		_reindexRegularFilters();
		return filterTemplateContent$;
	};

	/**
	 * Renader regular filters
	 */
	var _renderRegularFilters = function () {
		// render template:
		_filtersContainerRegular$ = _container$.find('.rvf-menu-content-regular');
		var regularFiltersTemplate$ = $('#rvfRegularFiltersTemplate');
		var regularFiltersContent$ = $.tmpl(regularFiltersTemplate$, [{}]);
		_filtersContainerRegular$.append(regularFiltersContent$);

		// render filters
		var htmlFilters$ = $('#htmlFilters');
		var templpate$ = $('#rvfRegularFilterBlocksTemplate');
		var templateContent$ = $.tmpl(templpate$, [{}]);
		var templateFiltersContainerTd$ = templateContent$.find('.rvf-regular-filters-td');
		htmlFilters$.append(templateContent$);
		var index = 0;
		$.each(_filtersData.RegularFilters, function (iF, f) {
			var filter$ = _renderRegularFilter(f);
			var li$ = $('<li></li>');
			li$.append(filter$);
			templateFiltersContainerTd$.find('.overview').append(li$);
			index++;
		});

		// slider
		_initializeSlider();
		// window resize handler
		$(window).resize(function () {
			rtime = new Date();
			if (timeout === false) {
				timeout = true;
				setTimeout(resizeend, delta);
			}
		});
		function resizeend() {
			if (new Date() - rtime < delta) {
				setTimeout(resizeend, delta);
			} else {
				timeout = false;
				if (_slider$ != null)
					_slider$.destroySlider();
				_initializeSlider();
			}
		}

		// regular filters changed handler;
		if (_filtersData.RegularFilters.length > 0) {
			_reindexRegularFilters();
			_regularFiltersChanged(_filtersData.RegularFilters.length - 1, 'add');
		}

		// refresh button
		$('#updateBtnP, #btnUpdateResultsC').click(function () {
			_refreshFilterHandler();
		});
	};

	/**
	 * Initialize regular filters slider
	 */
	var _initializeSlider = function () {
		var screenWidth = $(window).width() - 100;
		var tiles = screenWidth / 300 - 1;
		var tilesInt = Math.ceil(tiles);
		_slider$ = $('.overview').bxSlider({
			infiniteLoop: false,
			hideControlOnEnd: true,
			pager: false,
			minSlides: tilesInt,
			maxSlides: tilesInt,
			slideWidth: 290,
			responsive: false
		});
		if (_filtersData.RegularFilters.length == 0) {
			_container$.find('.bx-next').addClass('disabled');
			_container$.find('.bx-prev').addClass('disabled');
		}
	};

	/**
	 * Collapse filters button
	 */
	var _initializeCollapseButton = function () {
		var buttons$ = _container$.find('.filter-collapse,#filter-collapse-inside');
		buttons$.click(function () {
			var menu$ = _container$.find('.rvf-menu-content-additional');
			if (menu$.css('display') == 'none') {
				menu$.slideDown('normal');
			} else {
				menu$.slideUp('normal');
			};
		});
	};

	/**
	 * Initialize report header
	 */
	var _initializeReportTitle = function () {
		// apply report name
		var reportName = urlSettings.reportInfo.name;
		var reportCategory = urlSettings.reportInfo.category;
		var pageTitle$ = $('#page-title');
		pageTitle$.empty();
		if (reportCategory) {
			pageTitle$.append($('<h1>' + reportCategory + ' / <span>' + reportName + '</span></h1>'));
		} else {
			pageTitle$.append($('<h1><span>' + reportName + '</span></h1>'));
		}
	};

	/**
	 * Apply top
	 */
	var _changeTopRecordsNew = function (recsNum) {
		for (var i = 0; i < 5; i++)
			$('#resNumLi' + i).removeClass('selected');
		var resNumImg = document.getElementById('resNumImg');
		var uvcVal = '';
		var baseUrl = 'img/icons/';
		if (recsNum == 1) {
			uvcVal = '1';
			$('#resNumLi0').addClass('selected');
			resNumImg.src = 'rs.aspx?image=ModernImages.' + 'row-1.png';
		}
		if (recsNum == 10) {
			uvcVal = '10';
			$('#resNumLi1').addClass('selected');
			resNumImg.src = 'rs.aspx?image=ModernImages.' + 'rows-10.png';
		}
		if (recsNum == 100) {
			uvcVal = '100';
			$('#resNumLi2').addClass('selected');
			resNumImg.src = 'rs.aspx?image=ModernImages.' + 'rows-100.png';
		}
		if (recsNum == 1000) {
			uvcVal = '1000';
			$('#resNumLi3').addClass('selected');
			resNumImg.src = 'rs.aspx?image=ModernImages.' + 'rows-1000.png';
		}
		if (recsNum == -1) {
			uvcVal = '-2147483648';
			$('#resNumLi4').addClass('selected');
			resNumImg.src = 'rs.aspx?image=ModernImages.' + 'rows-all.png';
		}
		var requestString = '?wscmd=applytopforcrs&wsarg0=' + encodeURIComponent(uvcVal)/* + '&wsarg1=' + encodeURIComponent(GetReportName())*/;
		$.ajax({
			url: urlSettings.urlRsPage + requestString
		}).done(function (data) {
			_commitFiltersData(true);
		});
	};

	/**
	 * Initialize top
	 */
	var _initializeTopButtons = function () {
		// top handlers
		$('.change-top').click(function () {
			var this$ = $(this);
			var id = this$.attr('id');
			if (id == 'resNumLi0') {
				_changeTopRecordsNew(1);
			} else if (id == 'resNumLi1') {
				_changeTopRecordsNew(10);
			} else if (id == 'resNumLi2') {
				_changeTopRecordsNew(100);
			} else if (id == 'resNumLi3') {
				_changeTopRecordsNew(1000);
			} else if (id == 'resNumLi4') {
				_changeTopRecordsNew(-1);
			}
		});

		// get top count
		var requestString = '?wscmd=gettopforcrs';
		$.ajax({
			url: urlSettings.urlRsPage + requestString
		}).done(function (data) {
			for (var i = 0; i < 5; i++)
				$('#resNumLi' + i).removeClass('selected');
			var resNumImg = document.getElementById('resNumImg');
			if (data == 1) {
				$('#resNumLi0').addClass('selected');
				resNumImg.src = 'rs.aspx?image=ModernImages.' + 'row-1.png';
			} else if (data == 10) {
				$('#resNumLi1').addClass('selected');
				resNumImg.src = 'rs.aspx?image=ModernImages.' + 'rows-10.png';
			} else if (data == 100) {
				$('#resNumLi2').addClass('selected');
				resNumImg.src = 'rs.aspx?image=ModernImages.' + 'rows-100.png';
			} else if (data == 1000) {
				$('#resNumLi3').addClass('selected');
				resNumImg.src = 'rs.aspx?image=ModernImages.' + 'rows-1000.png';
			} else {
				resNumImg.src = 'rs.aspx?image=ModernImages.' + 'rows-all.png';
			}
		});
	};

	/**
	 * Render all filters
	 */
	var _renderFilters = function () {
		// apply base template
		var templpate$ = $('#rvfFilterMainTemplate');
		var templateResult$ = $.tmpl(templpate$, [{}]);
		_container$.empty();
		_container$.append(templateResult$);

		// header
		_initializeReportTitle();
		// collapse button
		_initializeCollapseButton();
		// top buttons
		_initializeTopButtons();
		// regular filters
		_renderRegularFilters();
		// additional filters
		_renderAdditionalFilters();

		_initializeRequiredFilters();
	};

	/**
	 * Initialize filters UI
	 */
	var _initializeControl = function () {
		$.ajax({
			url: _urlSettings.urlBase + '/Reporting/Resources/Html/report-viewer-filter-templates.html'
		}).done(function (data) {
			$(data).appendTo('head');
			_renderFilters();
			var ddValue = urlSettings.reportInfo.ddkvalue;
			if (ddValue)
				_refreshFilterHandler();
		});
	};

	/**
	 * initialization
	 */
	var initialize = function (options) {
		_urlSettings = options.urlSettings;
		_filterSettings = options.filterSettings;
		_containerId = options.containerId;
		_container$ = $('#' + _containerId);

		// data
		_filtersData = options.filtersData;

		// initialize UI
		_initializeControl();
	};

	return {
		initialize: initialize,
		refreshFilters: _commitFiltersData
	};
}
