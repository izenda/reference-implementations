Imports System.Web
Imports System.Web.UI
Imports Izenda.AdHoc

Partial Class TemplateDesigner
  Inherits Page
  Protected Overrides Function DeterminePostBackMode() As System.Collections.Specialized.NameValueCollection
    Try
      Return MyBase.DeterminePostBackMode()
    Catch ex As HttpRequestValidationException
    End Try
    Return Nothing
  End Function

  Protected Overrides Sub OnLoad(ByVal e As System.EventArgs)
    Dim templateName As String
    templateName = Request.Params("rn")
    If (String.IsNullOrEmpty(templateName)) Then
      Response.Write("Template name not specified")
      Response.End()
      Return
    End If
    templateName = templateName.Replace("\\\\", "\\")

    Dim saveData As String
    saveData = Request.Params("editor")
    If (Not String.IsNullOrEmpty(saveData)) Then
      Dim doNotDoAnything As Boolean
      doNotDoAnything = False
      Dim goCancel As String
      goCancel = Request.Params("gocancel")
      If (Not String.IsNullOrEmpty(goCancel) AndAlso goCancel = "1") Then
        doNotDoAnything = True
      End If
      If (Not doNotDoAnything) Then
        AdHocSettings.AdHocConfig.SetVolatileTemplate(templateName, saveData)
      End If
      Dim goBack As String
      goBack = Request.Params("goback")
    End If
    Dim delete As String
    delete = Request.Params("delete")
    If (Not String.IsNullOrEmpty(delete) AndAlso delete = "1") Then
      AdHocSettings.AdHocConfig.DeleteTemplateInternal(templateName)
    End If
    Dim templateData As String
    templateData = AdHocSettings.AdHocConfig.GetVolatileTemplate(templateName)
    Response.Write("<html><head>")
    Response.Write("<script src=""elrte/js/jquery-1.6.1.min.js"" type=""text/javascript"" charset=""utf-8""></script>")
    Response.Write("<script src=""elrte/js/jquery-ui-1.8.13.custom.min.js"" type=""text/javascript"" charset=""utf-8""></script>")
    Response.Write("<link rel=""stylesheet"" href=""elrte/css/smoothness/jquery-ui-1.8.13.custom.css"" type=""text/css"" media=""screen"" charset=""utf-8"">")
    Response.Write("<script src=""elrte/js/elrte.full.js"" type=""text/javascript"" charset=""utf-8""></script>")
    Response.Write("<link rel=""stylesheet"" href=""elrte/css/elrte.min.css"" type=""text/css"" media=""screen"" charset=""utf-8"">")
    Response.Write("<script src=""elrte/js/i18n/elrte.ru.js"" type=""text/javascript"" charset=""utf-8""></script>")
    Response.Write("<script type=""text/javascript"" charset=""utf-8"">   $().ready(function() { var opts = { cssClass: 'el-rte', width:950, height: 350, toolbar: 'maxi', cssfiles: ['elrte/css/elrte-inner.css'] }; $('#editor').elrte(opts); if ($("".docstructure"") && $("".docstructure"").attr(""class"").indexOf(""active"") != -1) $("".docstructure"").click(); $("".formatblock"").click(function(e){if ($(this).attr(""class"").indexOf(""disabled"") != -1){e.preventDefault();e.stopPropagation();this.onclick=undefined;return false;}else return true;});$("".el-rte .toolbar .panel-direction"").hide(); });</script>")
    Response.Write("<script type=""text/javascript"" charset=""utf-8"">   function reinitialize() {var act = document.getElementById('saveForm').action; var gbPos = act.indexOf('&goback'); if (gbPos >= 0) {act = act.substr(0, gbPos);} var gcPos = act.indexOf('&gocancel'); if (gcPos >= 0) {act = act.substr(0, gcPos);} document.getElementById('saveForm').action = act;}</script>")
    Response.Write("</head><body>")
    Response.Write("<form id=""saveForm"" method=""POST"" action=""./FormDesigner.aspx?rn=" & Request.Params("rn") & """>")
    Response.Write("<input id=""cswBackButton"" type=""submit"" value=""OK"" onclick=""document.getElementById('saveForm').action += '&goback=1';parent.closeIFrame();"" style=""background-color:LightGray;border:1px solid DarkGray;"" />&nbsp;")
    Response.Write("<input id=""cswCancelButton"" type=""submit"" value=""Cancel"" onclick=""document.getElementById('saveForm').action += '&gocancel=1';parent.closeIFrame();"" style=""background-color:LightGray;border:1px solid DarkGray;"" />&nbsp;")
    Response.Write("<input id=""cswDeleteButton"" type=""submit"" value=""Delete"" onclick=""document.getElementById('saveForm').action += '&delete=1';parent.closeIFrame();"" style=""background-color:LightGray;border:1px solid DarkGray;"" /><br /><br />")
    Dim message As String
    message = ""
    Dim showMsg As Boolean
    showMsg = False
    Dim brObject As HttpBrowserCapabilities
    brObject = Request.Browser
    If (brObject.Type.ToLower().StartsWith("ie")) Then
      Dim ver As Single
      Try
        ver = Single.Parse(brObject.Version)
      Catch ex As System.Exception
        ver = 0
      End Try
      If (ver < 9) Then
        showMsg = True
      End If
    End If
    If (showMsg) Then
      message = "<br />The Forms Designer works requires at least Internet Exporer 9.0 an HTML5 compatible browser"
    End If
    Response.Write("<div id=""editor"">" & templateData & "</div></form>" & message & "</body></html>")
    Response.End()
  End Sub
End Class
