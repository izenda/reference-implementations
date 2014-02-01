<%@ Page Title="Select data sources" Language="C#" MasterPageFile="~/Default.master" AutoEventWireup="true" CodeFile="InstantReport.aspx.cs" Inherits="InstantReport" %>
<%@ Register Src="~/Resources/html/InstantReport-Head.ascx" TagName="ccn1" TagPrefix="ccp1" %>
<%@ Register Src="~/Resources/html/InstantReport-Body.ascx" TagName="ccn2" TagPrefix="ccp2" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadPlaceHolder" runat="server">
  <ccp1:ccn1 runat="server" />
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="PlaceHolder" runat="server">
  <ccp2:ccn2 runat="server" />
</asp:Content>
