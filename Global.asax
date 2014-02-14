<%@ Application Language="C#" %>
<%@ Import Namespace="Izenda.AdHoc" %>
<%@ Import Namespace="HtmlAgilityPack" %>
<%@ Import Namespace="System.Xml" %>
<%@ Import Namespace="System.Web.Hosting" %>
<%@ Import Namespace="System.Collections.Generic" %>
<%@ Import Namespace="System.Globalization" %>

<script RunAt="server">
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
      //Initialize User
      //AdHocSettings.VisibleDataSources=
      //AdHocSettings.CurrentUserName=
      //AdHocSettings.HiddenFilters["Field"] = new string [] {"value1","value2"};
      //Success!
      HttpContext.Current.Session["ReportingInitialized"] = true;
    }

    private Dictionary<string, string> locals = new Dictionary<string, string>();

    public override void ProcessDataSet(System.Data.DataSet ds, string reportPart) {
      base.ProcessDataSet(ds, reportPart);
    }
    public override void PreExecuteReportSet(ReportSet reportSet) {
      base.PreExecuteReportSet(reportSet);
    }

    /// <summary>
    /// This method allows you to perform custom rendering of a report. We'll use this to
    /// find all localizable elements and then inject the localized version in their places. 
    /// </summary>

    public override string PerformCustomRendering(string initialHtml) {
      HtmlAgilityPack.HtmlDocument doc = new HtmlAgilityPack.HtmlDocument();
      doc.LoadHtml(initialHtml);

      // This uses an Xpath declaration to get all elements marked as localize. 
      HtmlNodeCollection localizableStrings = doc.DocumentNode.SelectNodes("//span[@class='localize']");

      // Loop over each Node that's localizable and inject the value from the resource file into the html
      if (localizableStrings != null) {
        if (locals.Count == 0) {
          LoadLocalizationStrings();
        }
        
        foreach (HtmlNode node in localizableStrings) {
          node.InnerHtml = locals[node.InnerText];
        }
        return doc.DocumentNode.OuterHtml;
      }

      return initialHtml;
    }

    /// <summary>
    /// Reads in the Strings resource file and adds each string to the locals dictionary
    /// </summary>
    public void LoadLocalizationStrings() {

      XmlDocument res = new XmlDocument();
      res.Load(HostingEnvironment.MapPath("/Resources/Strings." + CultureInfo.CurrentCulture.Name + ".resx"));

      foreach (XmlNode node in res.SelectNodes("//data")) {
        locals.Add(node.Attributes.GetNamedItem("name").Value,
                   node.InnerText.Replace("\r\n", string.Empty).Trim());
      }
    }

  }
</script>
