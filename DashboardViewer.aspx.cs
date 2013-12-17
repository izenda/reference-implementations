using System.Web.UI;
using Izenda.AdHoc;

namespace IzendaAdHocStarterKit
{
	public partial class DashboardViewer : Page
	{
		protected override void OnInit(System.EventArgs e)
		{
			Utility.CheckUserName();
			Utility.CheckLimitations();
			base.OnInit(e);
		}
  }
}
