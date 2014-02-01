<%@ Page Title="Settings" Language="C#" MasterPageFile="~/Default.master" AutoEventWireup="true" CodeFile="Settings.aspx.cs" Inherits="Settings" %>
<%@ Register TagPrefix="cc1" Namespace="Izenda.Web.UI" Assembly="Izenda.AdHoc" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadPlaceHolder" Runat="Server">
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="PlaceHolder" Runat="Server">
<div class="report-page">
  <form id="form1" runat="server">
    <cc1:SettingsControl runat="server" ID="settingscontrol"></cc1:SettingsControl>
  </form>
</div>
</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="TrackerPlaceHolder" Runat="Server">
</asp:Content>
