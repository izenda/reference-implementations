<%@ Page Title="Login Page" Language="VB" MasterPageFile="Izenda.master" AutoEventWireup="true" CodeFile="Login.aspx.vb" Inherits="Login" %>
<%@ Register Src="Resources/html/Login-Head.ascx" TagName="ccn1" TagPrefix="ccp1" %>
<%@ Register Src="Resources/html/Login-Body.ascx" TagName="ccn2" TagPrefix="ccp2" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadPlaceHolder" runat="Server">
    <ccp1:ccn1 runat="server" />
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="PlaceHolder" runat="Server">
	<ccp2:ccn2 runat="server" />
</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="TrackerPlaceHolder" runat="Server">
</asp:Content>
