using System;
using System.Web;
using System.Web.UI;
using Izenda.AdHoc;

public partial class TemplateDesigner : Page {
  protected override System.Collections.Specialized.NameValueCollection DeterminePostBackMode() {
    try {
      return base.DeterminePostBackMode();
    } catch (HttpRequestValidationException ex) {
    }
    return null;
  }

  protected void Page_Load(object sender, EventArgs e) {
    string templateName = Request.Params["rn"];
    if (String.IsNullOrEmpty(templateName)) {
      Response.Write("Template name not specified");
      Response.End();
      return;
    }
    templateName = templateName.Replace("\\\\", "\\");

    string saveData = Request.Params["editor"];
    if (!String.IsNullOrEmpty(saveData)) {
      bool doNotDoAnything = false;
      string goCancel = Request.Params["gocancel"];
      if (!String.IsNullOrEmpty(goCancel) && goCancel == "1") {
        doNotDoAnything = true;
      }
      if (!doNotDoAnything) {
        AdHocSettings.AdHocConfig.SetVolatileTemplate(templateName, saveData);
      }
      string goBack = Request.Params["goback"];//save clicked
    }
    string delete = Request.Params["delete"];
    if (!String.IsNullOrEmpty(delete) && delete == "1") {
      AdHocSettings.AdHocConfig.DeleteTemplateInternal(templateName);
    }
    string templateData = AdHocSettings.AdHocConfig.GetVolatileTemplate(templateName);

    Response.Write("<html><head>");
    Response.Write("<script src=\"elrte/js/jquery-1.6.1.min.js\" type=\"text/javascript\" charset=\"utf-8\"></script>");
    Response.Write("<script src=\"elrte/js/jquery-ui-1.8.13.custom.min.js\" type=\"text/javascript\" charset=\"utf-8\"></script>");
    Response.Write("<link rel=\"stylesheet\" href=\"elrte/css/smoothness/jquery-ui-1.8.13.custom.css\" type=\"text/css\" media=\"screen\" charset=\"utf-8\">");
    Response.Write("<script src=\"elrte/js/elrte.full.js\" type=\"text/javascript\" charset=\"utf-8\"></script>");
    Response.Write("<link rel=\"stylesheet\" href=\"elrte/css/elrte.min.css\" type=\"text/css\" media=\"screen\" charset=\"utf-8\">");
    Response.Write("<script src=\"elrte/js/i18n/elrte.ru.js\" type=\"text/javascript\" charset=\"utf-8\"></script>");
    Response.Write("<script type=\"text/javascript\" charset=\"utf-8\">	  $().ready(function() { var opts = { cssClass: 'el-rte', width:950, height: 350, toolbar: 'maxi', cssfiles: ['elrte/css/elrte-inner.css'] }; $('#editor').elrte(opts); if ($(\".docstructure\") && $(\".docstructure\").attr(\"class\").indexOf(\"active\") != -1) $(\".docstructure\").click(); $(\".formatblock\").click(function(e){if ($(this).attr(\"class\").indexOf(\"disabled\") != -1){e.preventDefault();e.stopPropagation();this.onclick=undefined;return false;}else return true;});$(\".el-rte .toolbar .panel-direction\").hide(); });</script>");
    Response.Write("<script type=\"text/javascript\" charset=\"utf-8\">	  function reinitialize() {var act = document.getElementById('saveForm').action; var gbPos = act.indexOf('&goback'); if (gbPos >= 0) {act = act.substr(0, gbPos);} var gcPos = act.indexOf('&gocancel'); if (gcPos >= 0) {act = act.substr(0, gcPos);} document.getElementById('saveForm').action = act;}</script>");
    Response.Write("</head><body>");
    Response.Write("<form id=\"saveForm\" method=\"POST\" action=\"./FormDesigner.aspx?rn=" + Request.Params["rn"] + "\">");
    Response.Write("<input id=\"cswBackButton\" type=\"submit\" value=\"OK\" onclick=\"document.getElementById('saveForm').action += '&goback=1';parent.closeIFrame();\" style=\"background-color:LightGray;border:1px solid DarkGray;\" />&nbsp;");
    Response.Write("<input id=\"cswCancelButton\" type=\"submit\" value=\"Cancel\" onclick=\"document.getElementById('saveForm').action += '&gocancel=1';parent.closeIFrame();\" style=\"background-color:LightGray;border:1px solid DarkGray;\" />&nbsp;");
    Response.Write("<input id=\"cswDeleteButton\" type=\"submit\" value=\"Delete\" onclick=\"document.getElementById('saveForm').action += '&delete=1';parent.closeIFrame();\" style=\"background-color:LightGray;border:1px solid DarkGray;\" /><br /><br />");
    string message = "";
    bool showMsg = false;
    HttpBrowserCapabilities brObject = Request.Browser;
    if (brObject.Type.ToLower().StartsWith("ie")) {
      float ver;
      try {
        ver = float.Parse(brObject.Version);
      } catch {
        ver = 0;
      }
      if (ver < 9) {
        showMsg = true;
      }
    }
    if (showMsg) {
      message = "<br />The Forms Designer works requires at least Internet Exporer 9.0 an HTML5 compatible browser";
    }
    Response.Write("<div id=\"editor\">" + templateData + "</div></form>" + message + "</body></html>");
    Response.End();
  }
}
