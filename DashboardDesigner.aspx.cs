public partial class DashboardDesigner : System.Web.UI.Page {
  protected override void OnPreInit(System.EventArgs e) {
    ASP.global_asax.CustomAdHocConfig.InitializeReporting();
  }
}
