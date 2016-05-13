Partial Class DashboardsNew
  Inherits System.Web.UI.Page
  Protected Overrides Sub OnPreInit(ByVal e As System.EventArgs)
    ASP.global_asax.CustomAdHocConfig.InitializeReporting()
    Izenda.AdHoc.Utility.CheckUserName()
  End Sub
End Class
