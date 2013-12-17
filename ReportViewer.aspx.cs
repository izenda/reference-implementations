using Izenda.AdHoc;

public partial class ReportViewer : System.Web.UI.Page
{
	protected override void OnInit(System.EventArgs e)
	{
		Utility.CheckUserName();
		Utility.CheckLimitations();
		base.OnInit(e);
	}
}
