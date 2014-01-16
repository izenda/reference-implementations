public partial class rs : Izenda.AdHoc.ResponseServer {
  override protected void OnInit(System.EventArgs e) {
    if (System.Web.HttpContext.Current.Request.RawUrl.Contains("rs.aspx?copy=")) {
      System.Web.HttpContext.Current.Response.End();
    }
  }
}
