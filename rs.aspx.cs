using System;
using System.Data;
using System.Configuration;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;

public partial class rs : Izenda.AdHoc.ResponseServer
{
    override protected void OnInit(EventArgs e)
    {
        if (HttpContext.Current.Request.RawUrl.Contains("rs.aspx?copy="))
            HttpContext.Current.Response.End();
    }
}
