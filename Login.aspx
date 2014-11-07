<%@ Page Title="Login Page" Language="VB" MasterPageFile="~/Default.master" AutoEventWireup="true" CodeFile="Login.aspx.vb" Inherits="Login" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadPlaceHolder" runat="Server">
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="PlaceHolder" runat="Server">
  <div class="page">
    <form id="form1" runat="server">
      <table style="width: 100%; height: 100%;">
        <tr>
          <td align="center">
            <table style="text-align: center">
              <tr>
                <td>User name</td>
                <td align="left">
                  <asp:TextBox ID="userNameTextbox" runat="server" Width="100px"></asp:TextBox>
                </td>
              </tr>
              <tr>
                <td style="height: 26px">Password</td>
                <td style="height: 26px" align="left">
                  <input id="userPassword" runat="server" type="password" style="width: 100px" />
                </td>
              </tr>
              <tr>
                <td colspan="2" align="center">
                  <asp:Button ID="Button1" runat="server" Text="Login" Width="110px" OnClick="Button1_Click" />
                </td>
              </tr>
            </table>
            <asp:CustomValidator ID="loginValidator" runat="server" ErrorMessage="Login failed. Please check your user name and password and try again.">            </asp:CustomValidator>
          </td>
        </tr>
      </table>

      <script runat="server">
          Function AuthenticateUser(userName As String, password As String, ByRef isAdmin As Boolean) As Boolean
              isAdmin = False
              If userName.ToLower() = "admin" OrElse userName.ToLower() = "administrator" Then
                  isAdmin = True
              End If
              Return True
          End Function

          Sub Button1_Click(sender As Object, args As EventArgs) Handles Button1.Click
              loginValidator.IsValid = True
              Dim isAdmin As Boolean = False
              If AuthenticateUser(userNameTextbox.Text, userPassword.Value, isAdmin) Then
                  HttpContext.Current.Session("UserName") = userNameTextbox.Text
                  If isAdmin Then
                      HttpContext.Current.Session("Role") = "Administrator"
                  Else
                      HttpContext.Current.Session("Role") = "RegularUser"
                      FormsAuthentication.RedirectFromLoginPage(userNameTextbox.Text, False)
                      Return
                  End If
              End If
              loginValidator.IsValid = False
          End Sub
      </script>

      <div style="text-align: center;">
        &nbsp;
      </div>
    </form>
  </div>
</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="TrackerPlaceHolder" runat="Server">
</asp:Content>
