<%@ Application CodeBehind="Global.asax.cs" Inherits="MVC4Razor2.MvcApplication" Language="C#" %>
<%@ Import Namespace="System" %>
<%@ Import Namespace="Izenda.AdHoc"%>
<%@ Import Namespace="System.IO"%>
<%@ Import Namespace="Izenda.Fusion" %>
<%@ Import Namespace="MVC4Razor2.Models" %>

<script RunAt="server">
	void Application_AcquireRequestState(object sender, EventArgs e)
	{
    CustomAdHocConfig.InitializeReporting();
  }

  [Serializable]
	public class CustomAdHocConfig : FileSystemAdHocConfig
	{
		public static void InitializeReporting()
		{
      if (HttpContext.Current.Session == null || HttpContext.Current.Session["ReportingInitialized"] != null)
        return;
			AdHocSettings.LicenseKey = "INSERT_LICENSE_KEY_HERE";
			AdHocSettings.SqlServerConnectionString = @"INSERT_CONNECTION_STRING_HERE";
			Izenda.Fusion.FusionDriver.AddSqlConnection("INSERT_FUSION_CONNECTION_NAME_HERE", @"INSERT_FUSION_CONNECTION_STRING_HERE");
			AdHocSettings.DataCacheInterval = 0;
			AdHocSettings.AdHocConfig = new CustomAdHocConfig();
      AdHocSettings.ReportViewer = "ReportViewer";
      AdHocSettings.InstantReport = "InstantReport";
			AdHocSettings.DashboardViewer = "Dashboards";
      AdHocSettings.ReportDesignerUrl = "ReportDesigner";
      AdHocSettings.DashboardDesignerUrl = "DashboardDesigner";
      AdHocSettings.ReportList = "ReportList";
      AdHocSettings.FormDesignerUrl = "FormDesigner";
      AdHocSettings.SettingsPageUrl = "Settings";
      AdHocSettings.ParentSettingsUrl = "Settings";
      AdHocSettings.ResponseServer = "rs.aspx";
			AdHocSettings.ReportsPath = Path.Combine(HttpContext.Current.Server.MapPath("~/"), "Reporting\\Reports");
			AdHocSettings.ShowHelpButton = true;
			AdHocSettings.AllowMultilineHeaders = true;
			AdHocSettings.ReportViewerDefaultPreviewResults = 1000;
			AdHocSettings.DefaultPreviewResults = 1000;
			AdHocSettings.Formats["AU Date"] = "{0:dd/MM/yyyy}";
			AdHocSettings.Formats["AU Datetime"] = "{0:dd/MM/yyy hh:mm:ss tt}";
			AdHocSettings.ShowSideHelp = true;
			AdHocSettings.GenerateThumbnails = true;
			AdHocSettings.NumChartTabs = 3;
			AdHocSettings.TabsCssUrl = "tabs.css";
			AdHocSettings.ReportCssUrl = "Report.css";
			AdHocSettings.ShowBetweenDateCalendar = true;
			AdHocSettings.ShowSimpleModeViewer = true;
      AdHocSettings.PrintMode = PrintMode.Html2PdfAndHtml;
			AdHocSettings.ShowPoweredByLogo = false;
			AdHocSettings.SqlCommandTimeout = 120;
			AdHocSettings.VisibleDataSources = new string[] { "ActiveAlarms_SP", "ActiveAlarmsV", "AssetEventListV", "HistoricalAlarmsV", "MaintenanceEventsV", "AssetOperationalStatusV", "EventsAllAlarmsV", "EventsCollectionCommEventV", "EventsCollectionCBRV", "EventsGSMConnectionLogsV", "EventsTransactionsV", "CollReconDetCBRCOMMSsubV", "CreditCardReconciliationV", "LastCollectioNDateTimeV", "CurrentMeterAmountsV", "CustomerPaymentTransactionV", "DailyFinancialTransactionV", "MeterUptimeV", "MSM_Sensor_Gateway_AttribStatExceptsSummV", "OccupancyRateSummaryV", "TotalIncomeSummaryV", "OccupancyRateSummary_SP", "A_EventsAlarmsTransactionsV", "A_LastCollectionAndGSMConnectionV", "PEMRBAC/MeterBreakdownSummaryV", "PEMRBAC/TechnicianPerformanceV" };
			AdHocSettings.HiddenFilters ["OccupancyRateSummary_SP"] = new string[1] { "29" };
			//AdHocSettings.ExtendedFunctions = new string[] { "ufn_AllSpacesEvents" };
			AdHocSettings.AllowEqualsSelectForStoredProcedures = true;
			AdHocSettings.DashboardDateSliderMode = DashboardDateSliderMode.None;
			AdHocSettings.ShowBetweenDateCalendar = true;

			AdHocSettings.ReportSetEventWatchers.Add(new MVC4Razor2.Models.FiltersReportSetEventWatcher());
      HttpContext.Current.Session["ReportingInitialized"] = true;
    }
  }
</script>
