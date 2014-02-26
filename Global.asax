<%@ Application Codebehind="Global.asax.cs" Inherits="MVC4Razor2.MvcApplication" Language="C#" %>
<%@ Import Namespace="Izenda.AdHoc"%>
<%@ Import Namespace="System.IO"%>
<%@ Import Namespace="HtmlAgilityPack" %>
<%@ Import Namespace="System.Xml" %>
<%@ Import Namespace="System.Web.Hosting" %>
<%@ Import Namespace="System.Collections.Generic" %>
<%@ Import Namespace="System.Globalization" %>

<script runat="server">
  void Application_AcquireRequestState(object sender, EventArgs e) {
    CustomAdHocConfig.InitializeReporting();
  }

  [Serializable]
  public class CustomAdHocConfig : FileSystemAdHocConfig {
    public static void InitializeReporting() {
      if (HttpContext.Current.Session == null || HttpContext.Current.Session["ReportingInitialized"] != null)
        return;
      AdHocSettings.LicenseKey = "INSERT_LICENSE_KEY_HERE";
      AdHocSettings.SqlServerConnectionString = @"INSERT_CONNECTION_STRING_HERE";
      AdHocSettings.GenerateThumbnails = true;
      AdHocSettings.ShowSimpleModeViewer = true;
      AdHocSettings.IdentifiersRegex = "^.*[iI][Dd]$";
      AdHocSettings.TabsCssUrl = "/Resources/css/tabs.css";
      AdHocSettings.ReportCssUrl = "../Resources/css/Report.css";
      AdHocSettings.ShowBetweenDateCalendar = true;
      AdHocSettings.DashboardViewer = "Dashboards";
      AdHocSettings.ReportViewer = "ReportViewer";
      AdHocSettings.InstantReport = "InstantReport";
      AdHocSettings.ReportDesignerUrl = "ReportDesigner";
      AdHocSettings.DashboardDesignerUrl = "DashboardDesigner";
      AdHocSettings.ReportList = "ReportList";
      AdHocSettings.FormDesignerUrl = "FormDesigner";
      AdHocSettings.SettingsPageUrl = "Settings";
      AdHocSettings.ParentSettingsUrl = "Settings";
      AdHocSettings.ResponseServer = "rs.aspx";
      AdHocSettings.ReportsPath = Path.Combine(HttpContext.Current.Server.MapPath("~/"), "Reports");
      AdHocSettings.PrintMode = PrintMode.Html2PdfAndHtml;
      AdHocSettings.AdHocConfig = new CustomAdHocConfig();
      HttpContext.Current.Session["ReportingInitialized"] = true;
    }
      
    public override void PostLoadReportSet(string name, ReportSet reportSet)
    {
        // Adjust dimentions for printing
        reportSet.PageWidth = 8.07f;
        reportSet.PageHeight = 11.49f;
        reportSet.OutputAreaWidth = 7.67f;
        reportSet.OutputAreaHeight = 11.19f;
        reportSet.OutputAreaLeft = 0.1f;
        reportSet.OutputAreaTop = 0.1f;
    }

    // This dictionary holds all localization strings. 
    private Dictionary<string, string> locals = new Dictionary<string, string>();

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

        // Return the XML document as a string.
        return doc.DocumentNode.OuterHtml;
      }

      return initialHtml;
    }

    /// <summary>
    /// Reads in the Strings resource file and adds each string to the locals dictionary
    /// </summary>
    public void LoadLocalizationStrings() {

      XmlDocument res = new XmlDocument();
            
      res.Load(HttpContext.Current.Server.MapPath("~/Resources/Strings." + CultureInfo.CurrentCulture.Name + ".resx"));

      // Finds all '<data> tags in the document and extracts the name value pair and loads it to the dictionary
      foreach (XmlNode node in res.SelectNodes("//data")) {
        locals.Add(node.Attributes.GetNamedItem("name").Value,
                   node.InnerText.Replace("\r\n", string.Empty).Trim());
      }
    }
  }
</script>
