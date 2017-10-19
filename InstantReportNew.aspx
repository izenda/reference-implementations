<%@ Page Title="" Language="C#" MasterPageFile="Izenda.master" AutoEventWireup="true" CodeFile="InstantReportNew.aspx.cs" Inherits="InstantReportNew" %>
<%@ Register Src="Resources/html/InstantReport-Head-Angular.ascx" TagName="ccn1" TagPrefix="ccp1" %>
<%@ Register Src="Resources/html/InstantReport-Body-Angular.ascx" TagName="ccn2" TagPrefix="ccp2" %>

<asp:Content ID="Content3" ContentPlaceHolderID="ChangeableHeader" runat="server">
	<link rel="stylesheet" type="text/css" href="./rp.aspx?extres=components.vendor.bootstrap.css.bootstrap.min.css" />
	<script type="text/javascript" src="./rp.aspx?js=ModernScripts.modernizr-2.8.3.min"></script>
	<script type="text/javascript" src="./rp.aspx?js=jQuery.jquery.min"></script>
	<script type="text/javascript" src="./rp.aspx?js=jQuery.jquery-ui.min"></script>
	<script type="text/javascript" src="./rp.aspx?extres=components.vendor.bootstrap.js/bootstrap.min.js"></script>
</asp:Content>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadPlaceHolder" runat="Server">
	<ccp1:ccn1 ID="Ccn1" runat="server" />
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="PlaceHolder" runat="Server">
	<ccp2:ccn2 ID="Ccn2" runat="server" />
</asp:Content>