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
using System.Reflection;

namespace MVC3SK.Controllers {
	public class ReportingController : Controller {

		private void ValidateDataRequest()
		{
			// Force standard request validation
			Request.ValidateInput();
			// Validate Query string manually
			for (int i = 0; i < Request.QueryString.Count; i++)
			{
				string val = Request.QueryString[i];
			}
		}

		public ActionResult ReportDesigner() {
			ValidateDataRequest();
			return View();
		}

		public ActionResult ReportList() {
			Tuple<string, string> redirection = Izenda.AdHoc.Utility.CheckUserNameMVC();
			if (redirection != null)
				return String.IsNullOrEmpty(redirection.Item2) ? RedirectToAction(redirection.Item1, "Reporting") : RedirectToAction(redirection.Item1, "Reporting", new { ReturnUrl = redirection.Item2 });
			Request.ValidateInput();
			if (HttpContext.Request != null && !String.IsNullOrEmpty(HttpContext.Request.RawUrl) && !HttpContext.Request.RawUrl.ToLower().Contains(AdHocSettings.ReportList.ToLower())) {
				return RedirectToAction("ReportList", "Reporting");
			}
			return View();
		}

		public ActionResult Settings() {
			Tuple<string, string> redirection = Izenda.AdHoc.Utility.CheckUserNameMVC();
			if (redirection != null)
				return String.IsNullOrEmpty(redirection.Item2) ? RedirectToAction(redirection.Item1, "Reporting") : RedirectToAction(redirection.Item1, "Reporting", new { ReturnUrl = redirection.Item2 });
			ValidateDataRequest();
			return View();
		}

		public ActionResult InstantReportNew()
		{
			Tuple<string, string> redirection = Izenda.AdHoc.Utility.CheckUserNameMVC();
			if (redirection != null)
				return String.IsNullOrEmpty(redirection.Item2) ? RedirectToAction(redirection.Item1, "Reporting") : RedirectToAction(redirection.Item1, "Reporting", new { ReturnUrl = redirection.Item2 });
			ValidateDataRequest();
			return View();
		}

		public ActionResult Dash(){
			Tuple<string, string> redirection = Izenda.AdHoc.Utility.CheckUserNameMVC();
			if (redirection != null)
				return String.IsNullOrEmpty(redirection.Item2) ? RedirectToAction(redirection.Item1, "Reporting") : RedirectToAction(redirection.Item1, "Reporting", new { ReturnUrl = redirection.Item2 });
			ValidateDataRequest();
			return View();
		}

		public ActionResult Dashboards() {
			Tuple<string, string> redirection = Izenda.AdHoc.Utility.CheckUserNameMVC();
			if (redirection != null)
				return String.IsNullOrEmpty(redirection.Item2) ? RedirectToAction(redirection.Item1, "Reporting") : RedirectToAction(redirection.Item1, "Reporting", new { ReturnUrl = redirection.Item2 });
			ValidateDataRequest();
			return View();
		}

		public ActionResult ReportViewer() {
			Tuple<string, string> redirection = Izenda.AdHoc.Utility.CheckUserNameMVC();
			if (redirection != null)
				return String.IsNullOrEmpty(redirection.Item2) ? RedirectToAction(redirection.Item1, "Reporting") : RedirectToAction(redirection.Item1, "Reporting", new { ReturnUrl = redirection.Item2 });
			ValidateDataRequest();
			AdHocSettings.ShowSimpleModeViewer = true;
			return View();
		}

		public ActionResult InstantReport() {
			Tuple<string, string> redirection = Izenda.AdHoc.Utility.CheckUserNameMVC();
			if (redirection != null)
				return String.IsNullOrEmpty(redirection.Item2) ? RedirectToAction(redirection.Item1, "Reporting") : RedirectToAction(redirection.Item1, "Reporting", new { ReturnUrl = redirection.Item2 });
			ValidateDataRequest();
			return View();
		}

		public ActionResult DashboardDesigner() {
			ValidateDataRequest();
			return View();
		}

		public ActionResult Login()
		{
			ValidateDataRequest();
			return View();
		}
	}
}
