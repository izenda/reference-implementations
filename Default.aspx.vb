Partial Class _Default
  Inherits System.Web.UI.Page
  Protected Overrides Sub OnLoad(ByVal e As System.EventArgs)
		Response.Redirect(Izenda.AdHoc.Utility.AppendIzPidParameter("ReportList.aspx"))
  End Sub
End Class
