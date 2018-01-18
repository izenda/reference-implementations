<%@ Page language="C#" Inherits="DashboardViewer" CodeFile="DashboardViewer.aspx.cs" Debug="true" EnableEventValidation="false"%>
<%@ Import namespace="Izenda.AdHoc" %>

<%@ Register TagPrefix="cc1" Namespace="Izenda.Web.UI" Assembly="Izenda.AdHoc" %>

<!DOCTYPE html>
<html>
	<head id="Head1" runat="server">
		<link rel="stylesheet" type="text/css" href="./<%=AdHocSettings.ResourcesProviderUniqueUrlWithDelimiter%>extres=css.build.dashboard-viewer.min.css" />
		<script type="text/javascript" src="./<%=AdHocSettings.ResourcesProviderUniqueUrlWithDelimiter%>js=jQuery.DashboardViewer"></script>
		<script type="text/javascript" src="./<%=AdHocSettings.ResourcesProviderUniqueUrlWithDelimiter%>js=jQuery.NewDashboardControls"></script>
		<title>Izenda AdHoc - Dashboard Viewer</title>
	</head>
	<body>
		<form id="form1" method="post" runat="server">
			<cc1:DashboardViewer id="dashboardViewer" runat="server"/>
		</form>
	</body>
</html>
