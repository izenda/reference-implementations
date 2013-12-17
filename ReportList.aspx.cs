using System.Web.UI;
using Izenda.AdHoc;

public partial class ReportList : Page
{
	protected override void OnInit(System.EventArgs e)
	{
		Utility.CheckUserName();
		Utility.CheckLimitations();
		base.OnInit(e);
	}
}
