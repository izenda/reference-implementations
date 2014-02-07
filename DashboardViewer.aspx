<%@ Page language="C#" Inherits="DashboardViewer" CodeFile="DashboardViewer.aspx.cs" Debug="true" EnableEventValidation="false"%>
<%@ Register TagPrefix="cc1" Namespace="Izenda.Web.UI" Assembly="Izenda.AdHoc" %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
  <head id="Head1" runat="server">
    <link rel="stylesheet" type="text/css" href="./rs.aspx?css=DashboardViewer" />
    <script type="text/javascript" src="./rs.aspx?js=jQuery.DashboardViewer"></script>
    <script type="text/javascript" src="./rs.aspx?js=jQuery.NewDashboardControls"></script>
    <title>Izenda AdHoc - Dashboard Viewer</title>
  </head>
  <body>
    <form id="form1" method="post" runat="server">
      <cc1:DashboardViewer id="dashboardViewer" runat="server"/>
    </form>
  </body>
</html>
