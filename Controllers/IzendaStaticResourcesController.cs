using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC4Razor2.Controllers {
  public class IzendaStaticResourcesController : Controller {
    public ActionResult Index() {
      if (HttpContext == null || HttpContext.Request == null || String.IsNullOrEmpty(HttpContext.Request.RawUrl)) {
        return new EmptyResult();
      }
      string rawUrl = HttpContext.Request.RawUrl.ToLower();
      if (rawUrl.EndsWith("reportviewerfilters.js")) {
        return File(Url.Content("~/Resources/js/ReportViewerFilters.js"), "application/x-javascript");
      }
			if (rawUrl.EndsWith("reportlist.js")) {
				return File(Url.Content("~/Resources/js/ReportList.js"), "application/x-javascript");
			}
      if (rawUrl.EndsWith("data-sources.js")) {
        return File(Url.Content("~/Resources/js/data-sources.js"), "application/x-javascript");
      }
      if (rawUrl.EndsWith("data-sources-preview.js")) {
        return File(Url.Content("~/Resources/js/data-sources-preview.js"), "application/x-javascript");
      }
      if (rawUrl.EndsWith("charts.js")) {
        return File(Url.Content("~/Resources/js/charts.js"), "application/x-javascript");
      }
      if (rawUrl.EndsWith("datasources-search.js")) {
        return File(Url.Content("~/Resources/js/datasources-search.js"), "application/x-javascript");
      }
      if (rawUrl.EndsWith("jquery-1.6.1.min.js")) {
        return File(Url.Content("~/Reporting/elrte/js/jquery-1.6.1.min.js"), "application/x-javascript");
      }
      if (rawUrl.EndsWith("jquery-ui-1.8.13.custom.min.js")) {
        return File(Url.Content("~/Reporting/elrte/js/jquery-ui-1.8.13.custom.min.js"), "application/x-javascript");
      }
      if (rawUrl.EndsWith("elrte.full.js")) {
        return File(Url.Content("~/Reporting/elrte/js/elrte.full.js"), "application/x-javascript");
      }
      if (rawUrl.EndsWith("elrte.ru.js")) {
        return File(Url.Content("~/Reporting/elrte/js/i18n/elrte.ru.js"), "application/x-javascript");
      }
      if (rawUrl.EndsWith("fieldproperties.js")) {
        return File(Url.Content("~/Resources/js/FieldProperties.js"), "application/x-javascript");
      }
      if (rawUrl.EndsWith("tabs.css")) {
        return File(Url.Content("~/Resources/css/tabs.css"), "text/css");
      }
      if (rawUrl.EndsWith("report.css")) {
        return File(Url.Content("~/Resources/css/report.css"), "text/css");
      }
      if (rawUrl.EndsWith("filters.css")) {
        return File(Url.Content("~/Resources/css/filters.css"), "text/css");
      }
      if (rawUrl.EndsWith("base.css")) {
        return File(Url.Content("~/Resources/css/base.css"), "text/css");
      }
      if (rawUrl.EndsWith("report-list-modal.css")) {
        return File(Url.Content("~/Resources/css/report-list-modal.css"), "text/css");
      }
      if (rawUrl.EndsWith("data-sources.css")) {
        return File(Url.Content("~/Resources/css/data-sources.css"), "text/css");
      }
      if (rawUrl.EndsWith("charts.css")) {
        return File(Url.Content("~/Resources/css/charts.css"), "text/css");
      }
      if (rawUrl.EndsWith("jquery-ui-1.8.13.custom.css")) {
        return File(Url.Content("~/Reporting/elrte/css/smoothness/jquery-ui-1.8.13.custom.css"), "text/css");
      }
      if (rawUrl.EndsWith("elrte.min.css")) {
        return File(Url.Content("~/Reporting/elrte/css/elrte.min.css"), "text/css");
      }
      if (rawUrl.EndsWith("elrte-inner.css")) {
        return File(Url.Content("~/Reporting/elrte/css/elrte-inner.css"), "text/css");
      }
      if (rawUrl.EndsWith("elrtebg.png")) {
        return File(Url.Content("~/Reporting/elrte/images/elrtebg.png"), "image/png");
      }
      if (rawUrl.EndsWith("elrte-toolbar.png")) {
        return File(Url.Content("~/Reporting/elrte/images/elrte-toolbar.png"), "image/png");
      }
      if (rawUrl.EndsWith("elrte/images/pixel.gif")) {
        return File(Url.Content("~/Reporting/elrte/images/pixel.gif"), "image/gif");
      }
      return new EmptyResult();
    }
  }
}
