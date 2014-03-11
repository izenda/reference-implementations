/**
 * jquery plugin required jquery.purl.js
 */
function UrlSettings(customUrlRsPage) {
	var getQueryParameter = function (name) {
		var location = window.location.search.substring(1);
		var queryParameters = {}, queryString = location,
		    re = /([^&=]+)=([^&]*)/g, m;
		while (m = re.exec(queryString)) {
			queryParameters[decodeURIComponent(m[1]).toLowerCase()] = decodeURIComponent(m[2]);
		}
		var res = null;
		if (queryParameters[name] != null && queryParameters[name].length > 0) {
			res = queryParameters[name];
		}
		return res;
	};

	var location = window.location.href;
	var url = $.url(location);

	// root url
	var path = url.attr('path').split('/');
	var urlBase = '';
	for (var i = path.length - 2; i >= 0; i--) {
		if (path[i].replace(/^\s+|\s+$/g, '') != '')
			urlBase = '/' + path[i].replace(/^\s+|\s+$/g, '') + urlBase;
	}

	// pages
	var urlRsPage;
	if (customUrlRsPage == undefined || customUrlRsPage == null || customUrlRsPage == '') {
	  urlRsPage = urlBase + '/rs.aspx';
	}
	else {
	  urlRsPage = customUrlRsPage;
	}
	var urlRsDuncanPage = urlBase + '/RsDuncan.aspx';
	var urlDashboardsPage = urlBase + '/Dashboards';
	var urlReportViewer = urlBase + '/ReportViewer';
	var urlReportDesigner = urlBase + '/ReportDesigner';
	var urlReportList = urlBase + '/ReportList';
	var urlResources = urlBase + '/Resources';

	// process parameters
	var reportFullName = url.param('rn');
	var reportName = null;
	var reportCategoryName = null;
	var ddkvalue = url.param('ddkvalue');
	var masterReportFullName = url.param('master');
	if (reportFullName != null) {
		var reportFullNameParts = reportFullName.split('\\');
		if (reportFullNameParts.length == 2) {
			reportName = reportFullNameParts[1];
			reportCategoryName = reportFullNameParts[0];
		} else if (reportFullNameParts.length == 3) {
			reportName = reportFullNameParts[2];
			reportCategoryName = reportFullNameParts[0];
		} else
			reportName = reportFullNameParts[0];
	}
	var isNew = url.param('isNew') == '1';
	var exportType = url.param('exportType');
	var result = {
		urlBase: urlBase,
		urlRsPage: urlRsPage,
		urlRsDuncanPage: urlRsDuncanPage,
		urlDashboardsPage: urlDashboardsPage,
		urlReportViewer: urlReportViewer,
		urlReportDesigner: urlReportDesigner,
		urlReportList: urlReportList,
		urlResources: urlResources,
		reportInfo: {
			ddkvalue: ddkvalue,
			fullNameDirty: getQueryParameter('rn'),
			fullName: reportFullName,
			name: reportName,
			masterReportFullName: masterReportFullName,
			category: reportCategoryName,
			isNew: isNew,
			exportType: exportType
		}
	};
	if (console != null && typeof console.log == 'function') console.log('url settings: ', result);
	return result;
}