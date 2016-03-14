<%@ Application Codebehind="Global.asax.cs" Inherits="MVC5Razor3.MvcApplication" Language="C#" %>
<%@ Import Namespace="Izenda.AdHoc"%>
<%@ Import Namespace="System.IO"%>

<script runat="server">
	void Application_AcquireRequestState(object sender, EventArgs e) 
	{
		CustomAdHocConfig.InitializeReporting();
	}

	[Serializable]
	public class CustomAdHocConfig : FileSystemAdHocConfig 
	{
		public static void InitializeReporting() 
		{
			if (AdHocContext.Initialized)
				return;
			AdHocSettings.LicenseKey = "INSERT_LICENSE_KEY_HERE";
			AdHocSettings.SqlServerConnectionString = @"INSERT_CONNECTION_STRING_HERE";
			AdHocSettings.AdHocConfig = new CustomAdHocConfig();
			AdHocSettings.GenerateThumbnails = true;
			AdHocSettings.ShowSimpleModeViewer = true;
			AdHocSettings.IdentifiersRegex = "^.*[iI][Dd]$";
			AdHocSettings.TabsCssUrl = "/Resources/css/tabs.css";
			AdHocSettings.ReportCssUrl = "../Resources/css/Report.css";
			AdHocSettings.ShowBetweenDateCalendar = true;
			AdHocSettings.ReportViewer = "ReportViewer";
			AdHocSettings.InstantReport = "InstantReport";
			AdHocSettings.ReportDesignerUrl = "ReportDesigner";
			AdHocSettings.ReportList = "ReportList";
			AdHocSettings.SettingsPageUrl = "Settings";
			AdHocSettings.ParentSettingsUrl = "Settings";
			AdHocSettings.ResponseServer = "rs.aspx";
			AdHocSettings.ReportsPath = Path.Combine(HttpContext.Current.Server.MapPath("~/"), "Reports");
			AdHocSettings.ChartingEngine = ChartingEngine.HtmlChart;
			AdHocSettings.ShowModifiedReportMessage = false;
			AdHocSettings.DashboardViewer = "Dash";
			AdHocSettings.DashboardDesignerUrl = "Dash";
			AdHocSettings.DashboardDateSliderMode = DashboardDateSliderMode.None;
			AdHocSettings.ShowJoinDropDown = true;
			AdHocSettings.InstantReport = "InstantReportNew";
			//EOPDF uses a DLL that converts HTML
			//AdHocSettings.PdfPrintMode = PdfMode.EOPDF;
			//PhantomJS PDF uses an EXE on the web server that produces the export
			AdHocSettings.PdfPrintMode = PdfMode.EvoPdf;
			//Please note that for new Izenda Reference Implementations 
			//the default mode for AdHocSettings.CurrentUserIsAdmin is set to TRUE 
			AdHocSettings.CurrentUserIsAdmin = true;
			
			AdHocContext.Initialized = true;
		}
	}
</script>
