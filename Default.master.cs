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
    /****DEMO****/
		string wasLogin = "";
		if (HttpContext.Current != null && HttpContext.Current.Session != null && HttpContext.Current.Session["loginas"] != null)
			wasLogin = HttpContext.Current.Session["loginas"].ToString();
		DemoAdHocConfig.LoginUser();
		string newLogin = "";
		if (HttpContext.Current != null && HttpContext.Current.Session != null && HttpContext.Current.Session["loginas"] != null)
			newLogin = HttpContext.Current.Session["loginas"].ToString();
		if (newLogin != wasLogin) {
			Response.Redirect(Request.RawUrl);
			Response.End();
			return;
		}
    if (AdHocSettings.MaxVersion <= 6.6f)
      irItem.Visible = false;
    else
      irItem.Visible = true;
    /****DEMO****/
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
