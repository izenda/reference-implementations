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
    [ValidateInput(false)]
    public ActionResult ReportDesigner() {


      return View();
    }
    [ValidateInput(false)]
    public ActionResult ReportList() {


      if (HttpContext.Request != null && !String.IsNullOrEmpty(HttpContext.Request.RawUrl) && !HttpContext.Request.RawUrl.ToLower().Contains(AdHocSettings.ReportList.ToLower())) {
				return RedirectToAction("Index", "Home");
      }
      return View();
    }
    [ValidateInput(false)]
    public ActionResult Settings() {
      return View();
    }
    [ValidateInput(false)]
    public ActionResult Dashboards() {


      return View();
    }
    [ValidateInput(false)]
    public ActionResult ReportViewer() {


      AdHocSettings.ShowSimpleModeViewer = true;
      return View();
    }
    [ValidateInput(false)]
    public ActionResult InstantReport() {


      return View();
    }
    [ValidateInput(false)]
    public ActionResult DashboardDesigner() {
      return View();
    }
  }
}
