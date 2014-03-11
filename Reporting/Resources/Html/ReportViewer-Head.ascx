<%@ Control AutoEventWireup="true" %>

<title>Report viewer</title>
<link rel="stylesheet" href="rs.aspx?css=ModernStyles.jquery-ui"/>
<link rel="stylesheet" href="./Resources/css/report-viewer-filter.css"/>
<link rel="stylesheet" href="./Resources/css/duncan.css" />
<link rel="stylesheet" href="./Resources/fonts/futura.css">
<%--<link rel="stylesheet" type="text/css" href="./Resources/css/Filters.css" />--%>
<link rel="stylesheet" href="Resources/css/jquery.bxslider.css" />
    <link rel="stylesheet" type="text/css" href="rs.aspx?css=jQuery" />
<script src="rs.aspx?js=ModernScripts.jquery-1.9.1.min" type="text/javascript"></script>
<script src="rs.aspx?js=ModernScripts.jquery-ui-1.9.2.min" type="text/javascript"></script>
<script type="text/javascript" src="rs.aspx?js=jQuery.jq"></script>
	  <script type="text/javascript" src="rs.aspx?js=jQuery.jqui"></script>
<script type="text/javascript" src="./rs.aspx?js=Utility"></script>
<script type="text/javascript" src="./rs.aspx?js=AdHocServer"></script>
<script type="text/javascript" src="rs.aspx?js=ModernScripts.jquery.purl"></script>
	  <script type="text/javascript" src="rs.aspx?js=ModernScripts.url-settings"></script>		  
<script type="text/javascript" src="rs.aspx?js=HtmlCharts"></script>
<script type="text/javascript" src="rs.aspx?js=htmlcharts-more"></script>
<script type="text/javascript" src="rs.aspx?js=HtmlChartsFunnel"></script>
<script type="text/javascript" src="rs.aspx?js=ModalDialog"></script>
<script type="text/javascript" src="rs.aspx?js=ReportViewer"></script>
<script type="text/javascript" src="rs.aspx?js=AdHocToolbarNavigation"></script>
<script type="text/javascript" src="rs.aspx?js=HtmlOutputReportResults"></script>
<script type="text/javascript" src="rs.aspx?js=EditorBaseControl"></script>
<script type="text/javascript" src="rs.aspx?js=MultilineEditorBaseControl"></script>
<script type="text/javascript" src="Resources/js/ReportViewerFilters.js"></script>
<script type="text/javascript" src="./Resources/js/moment-with-langs.min.js"></script>
<script type="text/javascript" src="./Resources/js/jquery-ui-timepicker.js"></script>
<script type="text/javascript" src="./Resources/js/jquery.tmpl.js"></script>
<script type="text/javascript" src="./Resources/js/jquery.bxslider.js"></script>
<script type="text/javascript" src="./Resources/js/url-settings.js"></script>
<script type="text/javascript" src="./Resources/js/relative-time.js"></script>
<script type="text/javascript" src="./Resources/js/report-viewer-filter.js"></script>
<script type="text/javascript" src="./Resources/js/report-viewer-filter-settings.js"></script>
<style type="text/css">
	.izenda-toolbar {
		display: none !important;
	}

	table.simpleFilters td.filterColumn {
		background-color: #CCEEFF;
		margin-top: 10px;
		overflow: hidden;
	}

	#dsUlList {
		margin: 5px 0 2px;
	}

	#fieldsCtlTable {
		border-spacing: 0;
		margin-bottom: 1px;
	}

	.Filter div input, select {
		width: 100%;
		margin-left: 0px;
	}

	.Filter div input {
		width: 296px;
		margin-left: 0px;
	}

		.Filter div input[type="checkbox"] {
			margin-left: 5px;
			width: auto;
		}

	.filterValue {
		padding-left: 0px;
	}

	.pivot-selector select {
		padding: 5px;
		min-width: 300px;
		width: auto;
	}

	.pivot-selector div {
		margin: 5px 0px;
	}

	.field-selector-container {
		float: left;
		width: 400px;
		height: 200px;
		overflow-y: scroll;
		border: 1px solid #aaa;
	}

	.f-button {
		margin: 2px;
		display: inline-block;
	}

		.f-button a {
			height: 25px;
			line-height: 25px;
			vertical-align: baseline;
			border: none;
			padding: 7px;
			color: white !important;
			text-decoration: none !important;
			position: relative;
			display: inline-block;
		}

		.f-button .text {
			margin-right: 4px;
			text-transform: uppercase;
			letter-spacing: 1px;
			position: relative;
		}

		.f-button .blue {
		}

		.f-button .gray {
		}

		.f-button.left {
			float: left;
		}

		.f-button.right {
			float: right;
		}

		.f-button.middle .text {
			display: none;
		}

		.f-button a img {
			margin-right: 12px;
			margin-right: 2px;
			width: 25px;
			height: 25px;
			vertical-align: bottom;
			position: relative;
			top: 1px;
		}

		.f-button a.gray, .f-button a.gray.disabled:hover {
			background-color: #A0A0A0;
		}

			.f-button a.gray:hover {
				background-color: #C0C0C0;
			}

		.f-button a.blue, .f-button a.blue.disabled:hover {
			background-color: #0D70CD;
		}

			.f-button a.blue:hover {
				background-color: #0E90FF;
			}

		.f-button a.disabled {
			opacity: .5;
			cursor: default;
		}

	.visibility-pivots {
		display: none;
	}
</style>

