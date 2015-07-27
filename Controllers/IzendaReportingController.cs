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

		private void ValidateRequest()
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
			ValidateRequest();
			return View();
		}

		public ActionResult ReportList() {
			Request.ValidateInput();
			if (HttpContext.Request != null && !String.IsNullOrEmpty(HttpContext.Request.RawUrl) && !HttpContext.Request.RawUrl.ToLower().Contains(AdHocSettings.ReportList.ToLower())) {
				return RedirectToAction("ReportList", "Reporting");
			}
			return View();
		}

		public ActionResult Settings() {
			ValidateRequest();
			return View();
		}

		public ActionResult Dash(){
			ValidateRequest();
			return View();
		}

		public ActionResult Dashboards() {
			ValidateRequest();
			return View();
		}

		public ActionResult ReportViewer() {
			ValidateRequest();
			AdHocSettings.ShowSimpleModeViewer = true;
			return View();
		}

		public ActionResult InstantReport() {
			ValidateRequest();
			return View();
		}

		public ActionResult DashboardDesigner() {
			ValidateRequest();
			return View();
		}
	}
}
