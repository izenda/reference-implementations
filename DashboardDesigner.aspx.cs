using Izenda.AdHoc;

public partial class DashboardDesigner : System.Web.UI.Page
{
	protected override void OnInit(System.EventArgs e)
	{
		Utility.CheckUserName();
		Utility.CheckLimitations();
		base.OnInit(e);
	}
}
