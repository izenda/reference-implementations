using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace MVC5Razor3 {
  public class RouteConfig {
    public static void RegisterRoutes(RouteCollection routes) {
      routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
      routes.MapRoute("IzendaReporting", "{controller}/{action}/{id}", new { controller = "Reporting", id = UrlParameter.Optional });
      routes.MapRoute("Default", "{controller}/{action}/{id}", new { controller = "Reporting", action = "ReportList", id = UrlParameter.Optional });
    }
  }
}
