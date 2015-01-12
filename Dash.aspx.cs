using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Izenda.AdHoc;

public partial class DashboardsNew : Page
{
	protected override void OnPreInit(System.EventArgs e)
	{
		ASP.global_asax.CustomAdHocConfig.InitializeReporting();
	}

	protected override void OnLoad(EventArgs e)
	{
	}
}