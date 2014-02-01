<%@ Page Title="" Language="C#" MasterPageFile="~/Default.master" AutoEventWireup="true" CodeFile="Dashboards.aspx.cs" Inherits="Dashboards" %>
<%@ Register Src="~/Resources/html/Dashboards-Head.ascx" TagName="ccn1" TagPrefix="ccp1" %>
<%@ Register Src="~/Resources/html/Dashboards-Body.ascx" TagName="ccn2" TagPrefix="ccp2" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadPlaceHolder" runat="Server">
  <ccp1:ccn1 runat="server" />
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="PlaceHolder" runat="Server">
  <ccp2:ccn2 runat="server" />
</asp:Content>
