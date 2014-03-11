using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.UI;
using Izenda.AdHoc;
using System.Text;
using System.Web.UI.WebControls;

namespace MVC3SK.Controllers
{
	public class ReportingController : Controller
	{
		public ActionResult ReportDesigner()
		{
			return View();
		}

		public ActionResult ReportList()
		{
			if (HttpContext.Request != null && !String.IsNullOrEmpty(HttpContext.Request.RawUrl) && !HttpContext.Request.RawUrl.ToLower().Contains(AdHocSettings.ReportList.ToLower()))
				return RedirectToAction("Index", "Home");
			return View();
		}

		public ActionResult Settings()
		{
			return View();
		}

		public ActionResult Dashboards()
		{
			return View();
		}

		public ActionResult ReportViewer()
		{
			AdHocSettings.ShowSimpleModeViewer = true;
			return View();
		}

		public ActionResult InstantReport()
		{
			return View();
		}

		public ActionResult DashboardDesigner()
		{
			return View();
		}

		[ValidateInput(false)]
		public ActionResult FormDesigner()
		{
			// Workaround to prevent security validation issues
			System.Web.Helpers.UnvalidatedRequestValues request = System.Web.Helpers.Validation.Unvalidated(Request);

			string templateName = request["rn"];
			if (String.IsNullOrEmpty(templateName))
				return this.Content("Template name not specified");
			templateName = templateName.Replace("\\\\", "\\");

			string saveData = request["editor"];
			if (!String.IsNullOrEmpty(saveData)) {
				bool doNotDoAnything = false;
				string goCancel = request["gocancel"];
				if (!String.IsNullOrEmpty(goCancel) && goCancel == "1")
					doNotDoAnything = true;
				if (!doNotDoAnything)
					AdHocSettings.AdHocConfig.SetVolatileTemplate(templateName, saveData);
				string goBack = request["goback"];//save clicked
			}
			string delete = request["delete"];
			if (!String.IsNullOrEmpty(delete) && delete == "1")
				AdHocSettings.AdHocConfig.DeleteTemplateInternal(templateName);
			string templateData = AdHocSettings.AdHocConfig.GetVolatileTemplate(templateName);

			StringBuilder sb = new StringBuilder();
			sb.Append("<html><head>");
			sb.Append("<script src=\"elrte/js/jquery-1.6.1.min.js\" type=\"text/javascript\" charset=\"utf-8\"></script>");
			sb.Append("<script src=\"elrte/js/jquery-ui-1.8.13.custom.min.js\" type=\"text/javascript\" charset=\"utf-8\"></script>");
			sb.Append("<link rel=\"stylesheet\" href=\"elrte/css/smoothness/jquery-ui-1.8.13.custom.css\" type=\"text/css\" media=\"screen\" charset=\"utf-8\">");
			sb.Append("<script src=\"elrte/js/elrte.full.js\" type=\"text/javascript\" charset=\"utf-8\"></script>");
			sb.Append("<link rel=\"stylesheet\" href=\"elrte/css/elrte.min.css\" type=\"text/css\" media=\"screen\" charset=\"utf-8\">");
			sb.Append("<script src=\"elrte/js/i18n/elrte.ru.js\" type=\"text/javascript\" charset=\"utf-8\"></script>");
			sb.Append("<script type=\"text/javascript\" charset=\"utf-8\">	  $().ready(function() { var opts = { cssClass: 'el-rte', width:950, height: 350, toolbar: 'maxi', cssfiles: ['elrte/css/elrte-inner.css'] }; $('#editor').elrte(opts); if ($(\".docstructure\") && $(\".docstructure\").attr(\"class\").indexOf(\"active\") != -1) $(\".docstructure\").click(); $(\".formatblock\").click(function(e){if ($(this).attr(\"class\").indexOf(\"disabled\") != -1){e.preventDefault();e.stopPropagation();this.onclick=undefined;return false;}else return true;});$(\".el-rte .toolbar .panel-direction\").hide(); });</script>");
			sb.Append("<script type=\"text/javascript\" charset=\"utf-8\">	  function reinitialize() {var act = document.getElementById('saveForm').action; var gbPos = act.indexOf('&goback'); if (gbPos >= 0) {act = act.substr(0, gbPos);} var gcPos = act.indexOf('&gocancel'); if (gcPos >= 0) {act = act.substr(0, gcPos);} document.getElementById('saveForm').action = act;}</script>");
			sb.Append("</head><body>");
			sb.Append("<form id=\"saveForm\" method=\"POST\" action=\"./FormDesigner?rn=" + request["rn"] + "\">");
			sb.Append("<input id=\"cswBackButton\" type=\"submit\" value=\"OK\" onclick=\"document.getElementById('saveForm').action += '&goback=1';parent.closeIFrame();\" style=\"background-color:LightGray;border:1px solid DarkGray;\" />&nbsp;");
			sb.Append("<input id=\"cswCancelButton\" type=\"submit\" value=\"Cancel\" onclick=\"document.getElementById('saveForm').action += '&gocancel=1';parent.closeIFrame();\" style=\"background-color:LightGray;border:1px solid DarkGray;\" />&nbsp;");
			sb.Append("<input id=\"cswDeleteButton\" type=\"submit\" value=\"Delete\" onclick=\"document.getElementById('saveForm').action += '&delete=1';parent.closeIFrame();\" style=\"background-color:LightGray;border:1px solid DarkGray;\" /><br /><br />");
			string message = "";
			bool showMsg = false;
			HttpBrowserCapabilitiesBase brObject = Request.Browser;
			if (brObject.Type.ToLower().StartsWith("ie")) {
				float ver;
				try {
					ver = float.Parse(brObject.Version);
				} catch {
					ver = 0;
				}
				if (ver < 9)
					showMsg = true;
			}
			if (showMsg)
				message = "<br />The Forms Designer works requires at least Internet Exporer 9.0 an HTML5 compatible browser";

			sb.Append("<div id=\"editor\">" + templateData + "</div></form>" + message + "</body></html>");

			return this.Content(sb.ToString());
		}
	}
}
