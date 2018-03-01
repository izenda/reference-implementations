<%@ Application Language="VB" %>
<%@ Import Namespace="Izenda.AdHoc"%>

<script runat="server">
	Sub Application_AcquireRequestState(ByVal sender As Object, ByVal e As EventArgs)
		CustomAdHocConfig.InitializeReporting()
	End Sub

	<Serializable()> Public Class CustomAdHocConfig
		Inherits FileSystemAdHocConfig
		Public Shared Function InstantiateMySelf() As AdHocConfig
			Return New CustomAdHocConfig()
		End Function
		Public Shared Sub InitializeReporting()
			'Check to see if we've already initialized.
			If (AdHocContext.Initialized) Then
				Return
			End If

			'Uncomment following block of code to engage izenda built-in user authentication
			'AdHocSettings.RequireLogin = True
			'AdHocSettings.LoginUrl = "Login.aspx"
			'If (TypeOf HttpContext.Current.Session("UserName") Is String) Then
			'AdHocSettings.CurrentUserName = DirectCast(HttpContext.Current.Session("UserName"), String)
			'Else
			'Return
			'End If

			'Initialize System
			CustomConfigFactory = New AdHocConfigFactory(AddressOf InstantiateMySelf)
			AdHocSettings.LicenseKey = "INSERT_LICENSE_KEY_HERE"
			AdHocSettings.SqlServerConnectionString = "INSERT_CONNECTION_STRING_HERE"
			AdHocSettings.GenerateThumbnails = True
			AdHocSettings.ShowSimpleModeViewer = True
			AdHocSettings.IdentifiersRegex = "^.*[iI][Dd]$"
			AdHocSettings.ReportCssUrl = AdHocSettings.ResourcesProviderUniqueUrlWithDelimiter & "extres=css.Report.css"
			AdHocSettings.ShowBetweenDateCalendar = True
			AdHocSettings.ChartingEngine = ChartingEngine.HtmlChart
			AdHocSettings.ShowModifiedReportMessage = False
			AdHocSettings.DashboardViewer = "Dash.aspx"
			AdHocSettings.DashboardDesignerUrl = "Dash.aspx"
			AdHocSettings.DashboardDateSliderMode = DashboardDateSliderMode.None
			AdHocSettings.ShowJoinDropDown = True
			AdHocSettings.InstantReport = "InstantReportNew.aspx"
			'EOPDF uses a DLL that converts HTML
			'AdHocSettings.PdfPrintMode = PdfMode.EOPDF;
			'PhantomJS PDF uses an EXE on the web server that produces the export
			AdHocSettings.PdfPrintMode = PdfMode.EvoPdf
			'Please note that for new Izenda Reference Implementations 
			'the default mode for AdHocSettings.CurrentUserIsAdmin is set to TRUE 
			AdHocSettings.CurrentUserIsAdmin = True
			'Initialize User
			'AdHocSettings.VisibleDataSources=
			'AdHocSettings.CurrentUserName=
			'AdHocSettings.HiddenFilters["Field"] = new string [] {"value1","value2"};
			'Success!
			AdHocContext.Initialized = True
		End Sub
	End Class
</script>
