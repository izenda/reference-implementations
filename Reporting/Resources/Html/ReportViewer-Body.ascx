<%@ Control AutoEventWireup="true" %>
<%@ Import Namespace="Izenda.AdHoc" %>

<iframe style="display: none" name="reportFrame" id='reportFrame' width='0' height='0'></iframe>
<div id="loadingrv2" style="z-index: 500; top: 0px; left: 0px; width: 100%; background-color: #FFFFFF; position: fixed; display: none; text-align: center; vertical-align: middle;">
	Loading...<br />
	<img alt="" src="rs.aspx?image=loading.gif" />
</div>

<div id="saveAsDialog" style="z-index: 515; top: 0px; left: 0px; width: 100%; position: absolute; display: none; text-align: center; vertical-align: middle;">
	<div style="padding: 20px; border-style: solid; border-width: 1px; background-color: #FFFFFF; display: table; margin: 0 auto;">
		<div>Input report name</div>
		<div>
			<input type="text" id="newReportName" style="width: 200px; margin: 0px; border-style: solid; border-width: 1px;" value="" />
		</div>
		<div style="margin-top: 5px;">Category</div>
		<div>
			<select onchange="CheckNewCatName();" id="newCategoryName" style="width: 206px; border-style: solid; border-width: 1px;"></select>
		</div>
		<div style="margin-top: 5px;">
			<div class="f-button" style="margin-bottom: 4px;">
				<a class="blue" onclick="javascript:SaveReportAs();" href="javascript:void(0);" style="width: 50px;"><span class="text">OK</span></a>
			</div>
			<div class="f-button">
				<a class="gray" onclick="javascript:CancelSave();" href="javascript:void(0);" style="width: 120px;"><span class="text">Cancel</span></a>
			</div>
		</div>
	</div>
</div>

<div id="newCatDialog" style="z-index: 515; top: 0px; left: 0px; width: 100%; position: absolute; display: none; text-align: center; vertical-align: middle;">
	<div style="padding: 20px; border-style: solid; border-width: 1px; background-color: #FFFFFF; display: table; margin: 0 auto;">
		<div>New category name</div>
		<div>
			<input type="text" id="addedCatName" style="width: 200px; margin: 0px; border-style: solid; border-width: 1px;" value="" />
		</div>
		<div style="margin-top: 5px;">
			<div class="f-button" style="margin-bottom: 4px;">
				<a class="blue" onclick="javascript:AddNewCategory();" href="javascript:void(0);" style="width: 120px;"><span class="text">Create</span></a>
			</div>
			<div class="f-button">
				<a class="gray" onclick="javascript:CancelAddCategory();" href="javascript:void(0);" style="width: 120px;"><span class="text">Cancel</span></a>
			</div>
		</div>
	</div>
</div>

<div id="popupEsDialog" style="z-index: 515; top: 0px; left: 0px; width: 100%; position: absolute; display: none; text-align: center; vertical-align: middle;">
	<div style="padding: 20px; background-color: #FFFFFF; border-style: solid; border-width: 1px; display: table; margin: 0 auto; width: 500px;">
		<div id="epdContent"></div>
		<div style="margin-top: 5px;">
			<div class="f-button" style="margin-bottom: 4px;">
				<a class="blue" onclick="javascript:HidePopupDialog(true);" href="javascript:void(0);" style="width: 50px;"><span class="text">OK</span></a>
			</div>
			<div class="f-button">
				<a class="gray" onclick="javascript:HidePopupDialog(false);" href="javascript:void(0);" style="width: 120px;"><span class="text">Cancel</span></a>
			</div>
		</div>
	</div>
</div>

<div id="content">
	<table>
		<tr>
			<td>
				<div class="btn-toolbar" style="margin: 4px 38px; position: relative; width: 50%; white-space: nowrap; top: -10px;">
					<div class="btn-group">
						<a class="btn" id="rlhref" href="ReportList.aspx" title="Report list">
							<img class="icon" src="rs.aspx?image=ModernImages.report-list.png" alt="Report list" />
							<span class="hide">Report list</span>
						</a>
					</div>
					<div class="btn-group cool designer-only hide-locked hide-viewonly" id="saveControls">
						<button type="button" class="btn" title="Save" id="btnSaveDirect" onclick="javascript:event.preventDefault();SaveReportSet();">
							<img class="icon" src="rs.aspx?image=ModernImages.floppy.png" alt="Save" />
							<span class="hide">Save</span>
						</button>
						<button type="button" class="btn dropdown-toggle" data-toggle="dropdown">
							<span class="caret"></span>
						</button>
						<ul class="dropdown-menu">
							<li class="hide-readonly"><a href="javascript:void(0)" style="min-width: 18em;"
								onclick="javascript:SaveReportSet();">
								<img class="icon" src="rs.aspx?image=ModernImages.save-32.png" alt="Save changes" />
								<b>Save</b><br>
								Save changes to the report for everyone it is shared with
							</a></li>
							<li><a href="javascript:void(0)"
								onclick="javascript:ShowSaveAsDialog();">
								<img class="icon" src="rs.aspx?image=ModernImages.save-as-32.png" alt="Save a copy" />
								<b>Save As</b><br>
								Save a copy with a new name, keeping the original intact
							</a></li>
						</ul>
					</div>
					<div class="btn-group cool">
						<button type="button" class="btn" title="Print"
							onclick="responseServer.OpenUrl('rs.aspx?p=htmlreport&print=1', 'aspnetForm', '');">
							<img class="icon" src="rs.aspx?image=ModernImages.print.png" alt="Printer" />
							<span class="hide">Print</span>
						</button>
						<button type="button" class="btn dropdown-toggle" data-toggle="dropdown">
							<span class="caret"></span>
						</button>
						<ul class="dropdown-menu">
							<li><a href="javascript:void(0)" title="" style="min-width: 18em;"
								onclick="reportViewerFilter.refreshFilters(false, function(){ responseServer.OpenUrl('rs.aspx?p=htmlreport&print=1', 'aspnetForm', ''); });">
								<img class="icon" src="rs.aspx?image=ModernImages.print-32.png" alt="" />
								<b>Print HTML</b><br>
								Print directly from your browser, the fastest way for modern browsers
							</a></li>
							<li><a href="javascript:void(0)" title="" onclick="reportViewerFilter.refreshFilters(false, function(){ responseServer.OpenUrlWithModalDialogNewCustomRsUrl('rs.aspx?output=PDF', 'aspnetForm', 'reportFrame', nrvConfig.ResponseServerUrl); });">
								<img class="icon" src="rs.aspx?image=ModernImages.html-to-pdf-32.png" alt="" />
								<b>HTML-powered PDF</b><br>
								One-file compilation of all the report's pages
							</a></li>
							<!--			<li><a href="javascript:void(0)" title="" 
								onclick="responseServer.OpenUrlWithModalDialogNew('rs.aspx?output=PDF', 'aspnetForm', 'reportFrame');">
								<img class="icon" src="rs.aspx?image=ModernImages.pdf-32.png" alt="" />
								<b>Standard PDF</b><br>
								Non-HTML PDF generation
							</a></li>  -->
						</ul>
					</div>
					<div class="btn-group cool">
						<button type="button" class="btn" title="Excel"
							onclick="reportViewerFilter.refreshFilters(false, function(){ responseServer.OpenUrlWithModalDialogNewCustomRsUrl('rs.aspx?output=XLS(MIME)', 'aspnetForm', 'reportFrame', nrvConfig.ResponseServerUrl); });">
							<img class="icon" src="rs.aspx?image=ModernImages.excel.png" alt="Get Excel file" />
							<span class="hide">Export to Excel</span>
						</button>
						<button type="button" class="btn dropdown-toggle" data-toggle="dropdown">
							<span class="caret"></span>
						</button>
						<ul class="dropdown-menu">
							<li><a href="javascript:void(0)" title="" style="min-width: 18em;"
								onclick="reportViewerFilter.refreshFilters(false, function(){ responseServer.OpenUrlWithModalDialogNewCustomRsUrl('rs.aspx?output=XLS(MIME)', 'aspnetForm', 'reportFrame', nrvConfig.ResponseServerUrl); });">
								<img class="icon" src="rs.aspx?image=ModernImages.xls-32.png" alt="" />
								<b>Export to Excel</b><br>
								File for Microsoft's spreadsheet application
							</a></li>
							<li><a href="javascript:void(0)" title=""
								onclick="reportViewerFilter.refreshFilters(false, function(){ responseServer.OpenUrlWithModalDialogNewCustomRsUrl('rs.aspx?output=DOC', 'aspnetForm', 'reportFrame', nrvConfig.ResponseServerUrl); });">
								<img class="icon" src="rs.aspx?image=ModernImages.word-32.png" alt="" />
								<b>Word document</b><br>
								File for Microsoft's word processor, most widely-used office application
							</a></li>
							<li><a href="javascript:void(0)" title=""
								onclick="reportViewerFilter.refreshFilters(false, function(){ responseServer.OpenUrlWithModalDialogNewCustomRsUrl('rs.aspx?output=CSV', 'aspnetForm', 'reportFrame', nrvConfig.ResponseServerUrl); });">
								<img class="icon" src="rs.aspx?image=ModernImages.csv-32.png" alt="" />
								<b>CSV</b><br>
								Stores tabular data in text file, that can be used in Google Docs
							</a></li>
							<li><a href="javascript:void(0)" title=""
								onclick="reportViewerFilter.refreshFilters(false, function(){ responseServer.OpenUrlWithModalDialogNewCustomRsUrl('rs.aspx?output=XML', 'aspnetForm', 'reportFrame', nrvConfig.ResponseServerUrl); });">
								<img class="icon" src="rs.aspx?image=ModernImages.xml-32.png" alt="" />
								<b>XML</b><br>
								Both human-readable and machine-readable text file
							</a></li>
							<li><a href="javascript:void(0)" title=""
								onclick="reportViewerFilter.refreshFilters(false, function(){ responseServer.OpenUrlWithModalDialogNewCustomRsUrl('rs.aspx?output=RTF', 'aspnetForm', 'reportFrame', nrvConfig.ResponseServerUrl); });">
								<img class="icon" src="rs.aspx?image=ModernImages.rtf-32.png" alt="" />
								<b>RTF</b><br>
								File format for cross-platform document interchange
							</a></li>
							<li><a href="javascript:void(0)" title=""
								onclick="reportViewerFilter.refreshFilters(false, function(){ responseServer.OpenUrlWithModalDialogNewCustomRsUrl('rs.aspx?output=ODT', 'aspnetForm', 'reportFrame', nrvConfig.ResponseServerUrl); });">
								<img class="icon" src="rs.aspx?image=ModernImages.open-office-32.png" alt="" />
								<b>Open Office</b><br>
								File for open-source office software suite 
							</a></li>
						</ul>
					</div>
					<div class="btn-group">
						<button type="button" class="btn" title="Send report"
							onclick="InitiateEmail();">
							<img class="icon" src="rs.aspx?image=ModernImages.mail.png" alt="Send report" />
							<span class="hide">Send report</span>
						</button>
					</div>
					<div class="btn-group cool" data-toggle="buttons-radio">
						<button type="button" class="btn" title="Results per page" onclick="">
							<img class="icon" id="resNumImg" src="rs.aspx?image=ModernImages.rows-100.png" alt="Results per page" />
							<span class="hide">Results per page</span>
						</button>
						<button type="button" class="btn dropdown-toggle" data-toggle="dropdown">
							<span class="caret"></span>
						</button>
						<ul class="dropdown-menu">
							<li class="change-top" id="resNumLi0"><a href="javascript:void(0)" title="" style="min-width: 12em;">
								<img class="icon" src="rs.aspx?image=ModernImages.result-1-32.png" alt="" />
								<b>1 Result</b><br />
								Ideal for large forms
							</a></li>
							<li class="change-top" id="resNumLi1"><a href="javascript:void(0)" title="">
								<img class="icon" src="rs.aspx?image=ModernImages.results-10-32.png" alt="" />
								<b>10 Results</b><br />
								Good for single parameter reports
							</a></li>
							<li class="change-top" id="resNumLi2"><a href="javascript:void(0)" title="">
								<img class="icon" src="rs.aspx?image=ModernImages.results-100-32.png" alt="" />
								<b>100 Results</b><br />
								Default and recommended value
							</a></li>
							<li class="change-top" id="resNumLi3"><a href="javascript:void(0)" title="">
								<img class="icon" src="rs.aspx?image=ModernImages.results-1000-32.png" alt="" />
								<b>1000 Results</b><br />
								Good for larger reports
							</a></li>
							<li class="divider"></li>
							<li class="change-top" id="resNumLi4"><a href="javascript:void(0)" title="">
								<img class="icon" src="rs.aspx?image=ModernImages.results-all-32.png" alt="" />
								<b>Show all results</b><br>
								Use carefully as this may overload the browser
							</a></li>
						</ul>
					</div>
					<div class="btn-group">
						<button type="button" class="btn designer-only hide-locked hide-viewonly" title="Open in designer" id="designerBtn">
							<img class="icon" src="rs.aspx?image=ModernImages.design.png" alt="Open in designer" />
							<span class="hide">Open in designer</span>
						</button>
					</div>
				</div>
			</td>
			<td>
				<div id="fieldPropertiesDialogContainer"></div>
				<div id="page-title" class="cf">
					
				</div>
			</td>
		</tr>
	</table>
	<div id="filtersContainerId"></div>
</div>

<script type="text/javascript">
	var urlSettings;
	var responseServer;
	var responseServerWithDelimeter;
	var reportViewerFilterSettings;
	var reportViewerFilter;

	/**
	 * Override got report viewer config
	 */
	function GotReportViewerConfig(returnObj, id) {
		if (id != 'reportviewerconfig' || returnObj == null)
			return;
		nrvConfig = returnObj;
		if (document.getElementById('rlhref') != null)
			document.getElementById('rlhref').href = nrvConfig.ReportListUrl;
		urlSettings = new UrlSettings(nrvConfig.ResponseServerUrl);
		responseServer = new AdHoc.ResponseServer(urlSettings.urlRsPage + '?', 0);
		responseServerWithDelimeter = responseServer;
		if (urlSettings.reportInfo.exportType != null) {
			responseServer.OpenUrlWithModalDialogNewCustomRsUrl('rs.aspx?output=' + urlSettings.reportInfo.exportType, 'aspnetForm', 'reportFrame', nrvConfig.ResponseServerUrl);
		};
	}

	function InitializeFilters(urlSettings) {
		// initialize filters   
		reportViewerFilterSettings = new ReportViewerSettings({
			urlSettings: urlSettings,
			locale: '<%=AdHocSettings.Culture%>',
		});
		reportViewerFilterSettings.loadFilters(function (filtersData) {
			reportViewerFilter = new ReportViewerFilters();
			reportViewerFilter.initialize({
				containerId: 'filtersContainerId',
				urlSettings: urlSettings,
				filterSettings: reportViewerFilterSettings,
				filtersData: filtersData
			});
		});
	}

	function TryInit() {
		if (urlSettings == undefined) {
			setTimeout(TryInit, 100);
			return;
		}
		
		// initialize filters
		InitializeFilters(urlSettings);

		// designer btn
		var designerBtn = document.getElementById('designerBtn');
		if (designerBtn != null)
			designerBtn.onclick = function () {
				var reportName = urlSettings.reportInfo.fullNameDirty;
				window.location = urlSettings.urlReportDesigner + '?rn=' + reportName;
			};
		if (urlSettings.reportInfo.exportType != null) {
			responseServer.OpenUrlWithModalDialogNew('rs.aspx?output=' + urlSettings.reportInfo.exportType, 'aspnetForm', 'reportFrame');
		};

	}

	$(document).ready(function () {
		InitializeViewer();
		setTimeout(TryInit, 1000);
	});
</script>

<div class="page">
	<div id="renderedReportDiv"></div>
</div>
