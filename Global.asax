<%@ Application Language="C#" %>
<%@ Import Namespace="Izenda.AdHoc" %>

<script runat="server">
  [Serializable]
  public class CustomAdHocConfig : FileSystemAdHocConfig {
    public static void InitializeReporting() {
      //Check to see if we've already initialized.
      if (HttpContext.Current.Session == null || HttpContext.Current.Session["ReportingInitialized"] != null)
        return;
      //Initialize System
      AdHocSettings.LicenseKey = "INSERT_LICENSE_KEY_HERE";
      AdHocSettings.SqlServerConnectionString = @"INSERT_CONNECTION_STRING_HERE";
      AdHocSettings.GenerateThumbnails = true;
      AdHocSettings.DashboardViewer = "Dashboards.aspx";
      AdHocSettings.ShowSimpleModeViewer = true;
      AdHocSettings.IdentifiersRegex = "^.*[iI][Dd]$";
      AdHocSettings.TabsCssUrl = "Resources/css/tabs.css";
      AdHocSettings.ReportCssUrl = "Resources/css/Report.css";
      AdHocSettings.ShowBetweenDateCalendar = true;
      AdHocSettings.AdHocConfig = new CustomAdHocConfig();
      AdHocSettings.PrintMode = PrintMode.Html2PdfAndHtml;
      AdHocSettings.ChartingEngine = ChartingEngine.HtmlChart;
      //Initialize User
      //AdHocSettings.VisibleDataSources=
      //AdHocSettings.CurrentUserName=
      //AdHocSettings.HiddenFilters["Field"] = new string [] {"value1","value2"};
      //Success!
      HttpContext.Current.Session["ReportingInitialized"] = true;
    }
    public override void ProcessDataSet(System.Data.DataSet ds, string reportPart) {
      base.ProcessDataSet(ds, reportPart);
    }
    public override void PreExecuteReportSet(ReportSet reportSet) {
      base.PreExecuteReportSet(reportSet);
    }
  }
</script>
