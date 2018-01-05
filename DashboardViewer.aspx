<%@ Page language="VB" Inherits="DashboardViewer" CodeFile="DashboardViewer.aspx.vb" Debug="true" EnableEventValidation="false"%>
<%@ Import namespace="Izenda.AdHoc.Toolkits" %>

<%@ Register TagPrefix="cc1" Namespace="Izenda.Web.UI" Assembly="Izenda.AdHoc" %>

<!DOCTYPE html>
<html>
	<head id="Head1" runat="server">
		<link rel="stylesheet" type="text/css" href="./<%=StaticResourceToolkit.ResourcesProviderUrl%>css=DashboardViewer" />
		<script type="text/javascript" src="./<%=StaticResourceToolkit.ResourcesProviderUrl%>js=jQuery.DashboardViewer"></script>
		<script type="text/javascript" src="./<%=StaticResourceToolkit.ResourcesProviderUrl%>js=jQuery.NewDashboardControls"></script>
		<title>Izenda AdHoc - Dashboard Viewer</title>
	</head>
	<body>
		<form id="form1" method="post" runat="server">
			<cc1:DashboardViewer id="dashboardViewer" runat="server"/>
			</form>
	</body>
</html>
