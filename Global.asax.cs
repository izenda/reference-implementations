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

namespace MVC5Razor3 {
  public class MvcApplication : System.Web.HttpApplication {
    protected void Application_Start() {
      AreaRegistration.RegisterAllAreas();
			GlobalConfiguration.Configure(WebApiConfig.Register);
      FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
      RegisterRoutes(RouteTable.Routes);
      BundleConfig.RegisterBundles(BundleTable.Bundles);
      AuthConfig.RegisterAuth();
    }

    public static void RegisterRoutes(RouteCollection routes) {
      routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
      routes.MapRoute("IzendaReporting", "{controller}/{action}/{id}", new { controller = "Reporting", id = UrlParameter.Optional });
      routes.MapRoute("StarterKitDefault", "{controller}/{action}/{id}", new { controller = "Reporting", action = "ReportList", id = UrlParameter.Optional });
      routes.MapRoute("HomeDefault", "{*pathInfo}", new { controller = "Home", action = "Index", id = UrlParameter.Optional });
    }
  }
}
