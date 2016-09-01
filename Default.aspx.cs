public partial class _Default : System.Web.UI.Page {
  protected override void OnLoad(System.EventArgs e) {
    Response.Redirect(Izenda.AdHoc.Utility.AppendIzPidParameter("ReportList.aspx"));
  }
}
