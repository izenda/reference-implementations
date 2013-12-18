using System;
using System.Web;
using System.Web.SessionState;
using System.Web.UI;
using Izenda.AdHoc;

public partial class MasterPage1 : MasterPage
{
  protected override void OnInit(EventArgs e)
  {
    if (HttpContext.Current == null || HttpContext.Current.Session == null)
      return;
    Utility.CheckLimitations(true);
    HttpSessionState session = HttpContext.Current.Session;
    if (session["ReportingInitialized"] == null || session["ReportingInitialized"] as bool? != true)
      return;
    if (!String.IsNullOrEmpty(AdHocSettings.ApplicationHeaderImageUrl))
      rightLogo.Src = AdHocSettings.ApplicationHeaderImageUrl;
    if (!AdHocSettings.ShowDesignLinks) {
      string script = "<script type=\"text/javascript\" language=\"javascript\">";
      script += "try { $(document).ready(function() {$('.designer-only').hide(); });}catch(e){}";
      script += " try{ jq$(document).ready(function() {jq$('.designer-only').hide(); });}catch(e){} ";
      script += "</script>";
      Page.Header.Controls.Add(new LiteralControl(script));
    }
    AdHocSettings.ShowSettingsButtonForNonAdmins = false;
  }
}
