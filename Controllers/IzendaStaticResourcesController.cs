using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC4Razor2.Controllers
{
	public class IzendaStaticResourcesController : Controller
	{
		public ActionResult Index()
		{
			if (HttpContext == null || HttpContext.Request == null || String.IsNullOrEmpty(HttpContext.Request.RawUrl))
				return new EmptyResult();
			string rawUrl = HttpContext.Request.RawUrl.ToLower();
			if (rawUrl.EndsWith("relative-time.js"))
				return File(Url.Content("~/Reporting/Resources/js/relative-time.js"), "application/x-javascript");
			if (rawUrl.EndsWith("reportviewerfilters.js"))
				return File(Url.Content("~/Reporting/Resources/js/ReportViewerFilters.js"), "application/x-javascript");
			if (rawUrl.EndsWith("data-sources.js"))
				return File(Url.Content("~/Reporting/Resources/js/data-sources.js"), "application/x-javascript");
			if (rawUrl.EndsWith("data-sources-preview.js"))
				return File(Url.Content("~/Reporting/Resources/js/data-sources-preview.js"), "application/x-javascript");
			if (rawUrl.EndsWith("charts.js"))
				return File(Url.Content("~/Reporting/Resources/js/charts.js"), "application/x-javascript");
			if (rawUrl.EndsWith("datasources-search.js"))
				return File(Url.Content("~/Reporting/Resources/js/datasources-search.js"), "application/x-javascript");
			if (rawUrl.EndsWith("jquery-1.6.1.min.js"))
				return File(Url.Content("~/Reporting/elrte/js/jquery-1.6.1.min.js"), "application/x-javascript");
			if (rawUrl.EndsWith("jquery-ui-1.8.13.custom.min.js"))
				return File(Url.Content("~/Reporting/elrte/js/jquery-ui-1.8.13.custom.min.js"), "application/x-javascript");
			if (rawUrl.EndsWith("elrte.full.js"))
				return File(Url.Content("~/Reporting/elrte/js/elrte.full.js"), "application/x-javascript");
			if (rawUrl.EndsWith("elrte.ru.js"))
				return File(Url.Content("~/Reporting/elrte/js/i18n/elrte.ru.js"), "application/x-javascript");
			if (rawUrl.EndsWith("tabs.css"))
				return File(Url.Content("~/Reporting/Resources/css/tabs.css"), "text/css");
			if (rawUrl.EndsWith("report.css"))
				return File(Url.Content("~/Reporting/Resources/css/report.css"), "text/css");
			if (rawUrl.EndsWith("futura.css"))
				return File(Url.Content("~/Reporting/Resources/fonts/futura.css"), "text/css");
			if (rawUrl.EndsWith("filters.css"))
				return File(Url.Content("~/Reporting/Resources/css/filters.css"), "text/css");
			if (rawUrl.EndsWith("base.css"))
				return File(Url.Content("~/Reporting/Resources/css/base.css"), "text/css");
			if (rawUrl.EndsWith("report-list-modal.css"))
				return File(Url.Content("~/Reporting/Resources/css/report-list-modal.css"), "text/css");
			if (rawUrl.EndsWith("duncan.css"))
				return File(Url.Content("~/Reporting/Resources/css/duncan.css"), "text/css");
			if (rawUrl.EndsWith("data-sources.css"))
				return File(Url.Content("~/Reporting/Resources/css/data-sources.css"), "text/css");
			if (rawUrl.EndsWith("charts.css"))
				return File(Url.Content("~/Reporting/Resources/css/charts.css"), "text/css");
			if (rawUrl.EndsWith("jquery-ui-1.8.13.custom.css"))
				return File(Url.Content("~/Reporting/elrte/css/smoothness/jquery-ui-1.8.13.custom.css"), "text/css");
			if (rawUrl.EndsWith("elrte.min.css"))
				return File(Url.Content("~/Reporting/elrte/css/elrte.min.css"), "text/css");
			if (rawUrl.EndsWith("elrte-inner.css"))
				return File(Url.Content("~/Reporting/elrte/css/elrte-inner.css"), "text/css");
			if (rawUrl.EndsWith("elrtebg.png"))
				return File(Url.Content("~/Reporting/elrte/images/elrtebg.png"), "image/png");
			if (rawUrl.EndsWith("elrte-toolbar.png"))
				return File(Url.Content("~/Reporting/elrte/images/elrte-toolbar.png"), "image/png");

			if (rawUrl.EndsWith("filter-collapse-arrow-bg.png"))
				return File(Url.Content("~/Reporting/Resources/img/filter-collapse-arrow-bg.png"), "image/png");
			if (rawUrl.EndsWith("filter-collapse-bg.png"))
				return File(Url.Content("~/Reporting/Resources/img/filter-collapse-bg.png"), "image/png");
			if (rawUrl.EndsWith("filter-collapse-inside-bg.png"))
				return File(Url.Content("~/Reporting/Resources/img/filter-collapse-inside-bg.png"), "image/png");
			if (rawUrl.EndsWith("filter-refresh-bg.png"))
				return File(Url.Content("~/Reporting/Resources/img/filter-refresh-bg.png"), "image/png");
			if (rawUrl.EndsWith("left.png"))
				return File(Url.Content("~/Reporting/Resources/img/left.png"), "image/png");
			if (rawUrl.EndsWith("right.png"))
				return File(Url.Content("~/Reporting/Resources/img/right.png"), "image/png");
			if (rawUrl.EndsWith("filter-shadow-bottom.gif"))
				return File(Url.Content("~/Reporting/Resources/img/filter-shadow-bottom.gif"), "image/png");

			if (rawUrl.EndsWith("elrte/images/pixel.gif"))
				return File(Url.Content("~/Reporting/elrte/images/pixel.gif"), "image/gif");

			if (rawUrl.EndsWith("moment-with-langs.min.js"))
				return File(Url.Content("~/Reporting/Resources/js/moment-with-langs.min.js"), "application/x-javascript");
			if (rawUrl.EndsWith("jquery-ui-timepicker.js"))
				return File(Url.Content("~/Reporting/Resources/js/jquery-ui-timepicker.js"), "application/x-javascript");
			if (rawUrl.EndsWith("jquery.tmpl.js"))
				return File(Url.Content("~/Reporting/Resources/js/jquery.tmpl.js"), "application/x-javascript");
			if (rawUrl.EndsWith("jquery.bxslider.js"))
				return File(Url.Content("~/Reporting/Resources/js/jquery.bxslider.js"), "application/x-javascript");
			if (rawUrl.EndsWith("url-settings.js"))
				return File(Url.Content("~/Reporting/Resources/js/url-settings.js"), "application/x-javascript");

			if (rawUrl.EndsWith("report-viewer-filter.js"))
				return File(Url.Content("~/Reporting/Resources/js/report-viewer-filter.js"), "application/x-javascript");

			if (rawUrl.EndsWith("report-viewer-filter-settings.js"))
				return File(Url.Content("~/Reporting/Resources/js/report-viewer-filter-settings.js"), "application/x-javascript");
			if (rawUrl.EndsWith("additional-filters-config.js"))
				return File(Url.Content("~/Reporting/Resources/js/additional-filters-config.js"), "application/x-javascript");
			if (rawUrl.EndsWith("jquery.bxslider.css"))
				return File(Url.Content("~/Reporting/Resources/css/jquery.bxslider.css"), "text/css");
			if (rawUrl.EndsWith("report-viewer-filter.css"))
				return File(Url.Content("~/Reporting/Resources/css/report-viewer-filter.css"), "text/css");
			if (rawUrl.EndsWith("report-viewer-filter-templates.html"))
				return File(Url.Content("~/Reporting/Resources/html/report-viewer-filter-templates.html"), "text/html");
			if (rawUrl.EndsWith("report-viewer-filter-templates2.html"))
				return File(Url.Content("~/Reporting/Resources/html/report-viewer-filter-templates2.html"), "text/html");
			return new EmptyResult();
		}
	}
}
