Partial Class rs
  Inherits Izenda.AdHoc.ResponseServer
  Protected Overrides Sub OnInit(ByVal e As System.EventArgs)
    If (HttpContext.Current.Request.RawUrl.Contains("rs.aspx?copy=")) Then
      HttpContext.Current.Response.End()
    End If
  End Sub

  Protected Overrides Sub OnPreInit(ByVal e As System.EventArgs)
    ASP.global_asax.CustomAdHocConfig.InitializeReporting()
  End Sub
End Class
