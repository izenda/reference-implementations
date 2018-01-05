Imports Izenda.AdHoc
Imports Izenda.AdHoc.Toolkits

Partial Class MasterPage1
	Inherits MasterPage
	Protected Overrides Sub OnInit(ByVal e As System.EventArgs)
		ASP.global_asax.CustomAdHocConfig.InitializeReporting()
		Dim imgUrl As String
		If (AdHocSettings.ApplicationHeaderImageUrl = Nothing) Then
			imgUrl = "ModernImages.IzendaNewLogoBlue.png"
		Else
			imgUrl = AdHocSettings.ApplicationHeaderImageUrl
		End If
		rightLogo.Src = String.Format("./{0}image={1}",
			StaticResourceToolkit.ResourcesProviderUrl,
			imgUrl)
		If (AdHocSettings.ShowDesignLinks = False) Then
			Dim script As String
			script = "<script type=""text/javascript"" language=""javascript"">"
			script += "try { $(document).ready(function() {$('.designer-only').hide(); });}catch(e){}"
			script += " try{ jq$(document).ready(function() {jq$('.designer-only').hide(); });}catch(e){} "
			script += "</script>"
			If Not (Page Is Nothing) Then
				Page.Header.Controls.Add(New LiteralControl(script))
			End If
		End If
		AdHocSettings.ShowSettingsButtonForNonAdmins = False
	End Sub
End Class
