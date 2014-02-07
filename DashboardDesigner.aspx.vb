Partial Class DashboardDesigner
  Inherits System.Web.UI.Page
  Protected Overrides Sub OnPreInit(ByVal e As System.EventArgs)
    ASP.global_asax.CustomAdHocConfig.InitializeReporting()
  End Sub
End Class
