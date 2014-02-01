<%@ Page Title="Report Designer" Language="C#" MasterPageFile="~/Default.master" AutoEventWireup="true" CodeFile="ReportDesigner.aspx.cs" Inherits="ReportDesigner" %>

<%@ Register TagPrefix="cc1" Namespace="Izenda.Web.UI" Assembly="Izenda.AdHoc" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadPlaceHolder" runat="Server">
  <link rel="stylesheet" type="text/css" href="./Resources/css/Filters.css" />
  <script type="text/javascript">
    $(document).ready(function() {
      var fieldWithRn = document.getElementById('reportNameFor2ver');
      if (fieldWithRn != undefined && fieldWithRn != null) {
        var frn = decodeURIComponent(fieldWithRn.value.replace(/\\'/g, "'"));
        while (frn.indexOf('+') >= 0) {
          frn = frn.replace('+', ' ');
        }
        while (frn.indexOf('\\\\') >= 0) {
          frn = frn.replace('\\\\', '\\');
        }
        var frNodes = frn.split(categoryCharacter);
        var hdr = '<h1 style=\"margin-left:40px;\">' + frNodes[frNodes.length - 1].replace(/'/g, "&#39;") + (frNodes.length <= 1 ? '' : ' <i>(' + frNodes[frNodes.length - 2].replace(/'/g, "&#39;") + ')</i>') + '</h1>';
        var repHeader = document.getElementById('repHeader');
        repHeader.innerHTML = hdr;
      }
    });
</script>
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="PlaceHolder" runat="Server">
  <div class="report-page">
    <form id="form1" runat="server">
      <div id="repHeader"></div>
      <cc1:adhocreportdesigner id="Adhocreportdesigner1" runat="server">
      </cc1:adhocreportdesigner>
    </form>
  </div>
</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="TrackerPlaceHolder" runat="Server">
</asp:Content>
