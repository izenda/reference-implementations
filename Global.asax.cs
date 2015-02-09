using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using Izenda.AdHoc;
using System.Configuration;
using System.Web.Compilation;

namespace MVC4Razor2 {
  public class SpecificFileRouterConstraint : IRouteConstraint {
    private string extensionToBeRouted = null;
    private string fileToBeRouted = null;

    public bool Match(HttpContextBase httpContext, Route route, string parameterName, RouteValueDictionary values, RouteDirection routeDirection) {
      return !String.IsNullOrEmpty(extensionToBeRouted) && !String.IsNullOrEmpty(fileToBeRouted) && values[extensionToBeRouted] != null && values[extensionToBeRouted].ToString().ToLower().Contains(fileToBeRouted);
    }

    public SpecificFileRouterConstraint() { }

    public SpecificFileRouterConstraint(string extension, string fileName) {
      extensionToBeRouted = extension.ToLower();
      fileToBeRouted = fileName.ToLower();
    }
  }

  public class IzendaResourceConstraint : IRouteConstraint {
    private string extensionToBeRouted = null;

    public bool Match(HttpContextBase httpContext, Route route, string parameterName, RouteValueDictionary values, RouteDirection routeDirection) {
      if (String.IsNullOrEmpty(extensionToBeRouted) || values[extensionToBeRouted] == null) {
        return false;
      }
      string requestUrl = values[extensionToBeRouted].ToString().ToLower();
      bool result = false;
      if (extensionToBeRouted == "js") {
        result = result || requestUrl.Contains("reportviewerfilters.js");
        result = result || requestUrl.Contains("reportlist.js");
        result = result || requestUrl.Contains("data-sources.js");
        result = result || requestUrl.Contains("data-sources-preview.js");
        result = result || requestUrl.Contains("charts.js");
        result = result || requestUrl.Contains("datasources-search.js");
        result = result || requestUrl.Contains("jquery-1.6.1.min.js");
        result = result || requestUrl.Contains("jquery-ui-1.8.13.custom.min.js");
        result = result || requestUrl.Contains("elrte.full.js");
        result = result || requestUrl.Contains("elrte.ru.js");
        result = result || requestUrl.Contains("fieldproperties.js");
        result = result || requestUrl.Contains("shrinkable-grid.js");
				result = result || requestUrl.Contains("richeditorpopup.js");
				result = result || requestUrl.Contains("jquery-ui-timepicker.js");
				result = result || requestUrl.Contains("jquery.tmpl.js");
				result = result || requestUrl.Contains("jquery.bxslider.js");
				result = result || requestUrl.Contains("url-settings.js");
				result = result || requestUrl.Contains("report-viewer-filter.js");
				result = result || requestUrl.Contains("report-viewer-filter-settings.js");
				result = result || requestUrl.Contains("additional-filters-config.js");
				result = result || requestUrl.Contains("relative-time.js");
      }
      if (extensionToBeRouted == "css") {
				result = result || requestUrl.Contains("futura.css");
				result = result || requestUrl.Contains("duncan.css");
        result = result || requestUrl.Contains("tabs.css");
        result = result || requestUrl.Contains("report.css");
        result = result || requestUrl.Contains("filters.css");
        result = result || requestUrl.Contains("base.css");
        result = result || requestUrl.Contains("report-list-modal.css");
        result = result || requestUrl.Contains("data-sources.css");
        result = result || requestUrl.Contains("charts.css");
        result = result || requestUrl.Contains("jquery-ui-1.8.13.custom.css");
        result = result || requestUrl.Contains("elrte.min.css");
        result = result || requestUrl.Contains("elrte-inner.css");
				result = result || requestUrl.Contains("jquery.bxslider.css");
				result = result || requestUrl.Contains("report-viewer-filter.css");
        result = result || requestUrl.Contains("shrinkable-grid.css");
      }
      if (extensionToBeRouted == "png") {
        result = result || requestUrl.Contains("elrtebg.png");
        result = result || requestUrl.Contains("elrte-toolbar.png");
				result = result || requestUrl.Contains("filter-collapse-arrow-bg.png");
				result = result || requestUrl.Contains("filter-collapse-bg.png");
				result = result || requestUrl.Contains("filter-collapse-inside-bg.png");
				result = result || requestUrl.Contains("filter-refresh-bg.png");
				result = result || requestUrl.Contains("right.png");
				result = result || requestUrl.Contains("left.png");
      }
      if (extensionToBeRouted == "gif") {
        result = result || requestUrl.Contains("elrte/images/pixel.gif");
				result = result || requestUrl.Contains("filter-shadow-bottom.gif");
      }
			if (extensionToBeRouted == "html") {
				result = result || requestUrl.Contains("report-viewer-filter-templates.html");
				result = result || requestUrl.Contains("report-viewer-filter-templates2.html");
			}
      return result;
    }

    public IzendaResourceConstraint() { }

    public IzendaResourceConstraint(string extension) {
      extensionToBeRouted = extension.ToLower();
    }
  }

  public class MvcApplication : System.Web.HttpApplication {
    protected void Application_Start() {
      RouteTable.Routes.MapPageRoute("rs.aspx", "{*aspx}", "~/Reporting/rs.aspx", false, null, new RouteValueDictionary { { "aspx", new SpecificFileRouterConstraint("aspx", "rs.aspx") } });
			RouteTable.Routes.MapPageRoute("RsDuncan.aspx", "{*aspx}", "~/Reporting/RsDuncan.aspx", false, null, new RouteValueDictionary { { "aspx", new SpecificFileRouterConstraint("aspx", "RsDuncan.aspx") } });
      AreaRegistration.RegisterAllAreas();
      WebApiConfig.Register(GlobalConfiguration.Configuration);
      FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
      RegisterRoutes(RouteTable.Routes);
      BundleConfig.RegisterBundles(BundleTable.Bundles);
      AuthConfig.RegisterAuth();
    }

    public static void RegisterRoutes(RouteCollection routes) {
      routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
      routes.MapRoute( "IzendaJsResources", "{*js}", new { controller = "IzendaStaticResources", action = "Index" }, new { irc = new IzendaResourceConstraint("js") });
      routes.MapRoute("IzendaCssResources", "{*css}",	new { controller = "IzendaStaticResources", action = "Index" },	new { irc = new IzendaResourceConstraint("css") });
      routes.MapRoute("IzendaPngResources", "{*png}", new { controller = "IzendaStaticResources", action = "Index" }, new { irc = new IzendaResourceConstraint("png") });
      routes.MapRoute("IzendaGifResources", "{*gif}", new { controller = "IzendaStaticResources", action = "Index" }, new { irc = new IzendaResourceConstraint("gif") });
			routes.MapRoute("IzendaHtmlResources", "{*html}", new { controller = "IzendaStaticResources", action = "Index" }, new { irc = new IzendaResourceConstraint("html") });
			routes.MapRoute("IzendaReporting", "{city}/pems/{controller}/{action}/{id}", new { controller = "Reporting", id = UrlParameter.Optional });
      routes.MapRoute("StarterKitDefault", "{controller}/{action}/{id}", new { controller = "Reporting", action = "ReportList", id = UrlParameter.Optional });
      routes.MapRoute("Default", "{*pathInfo}", new { controller = "Home", action = "Index", id = UrlParameter.Optional });
    }
  }
}
