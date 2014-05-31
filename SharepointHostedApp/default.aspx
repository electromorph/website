<%@ Page Title="Home" Language="C#" MasterPageFile="~/Default.Master" AutoEventWireup="true" CodeBehind="default.aspx.cs" Inherits="SharepointHostedApp._default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="BodyContent" runat="server">

    <table border="0">
        <tr>
            <td></td>
            <td>
                <h3 style="font-weight: bold; text-decoration: underline">Diameter of Input Shaft</h3>
            </td>
            <td>
                <h3 style="font-weight: bold; text-decoration: underline">Diameter of Output Shaft</h3>
            </td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <input type="image" style="display: none !important;" />
                <input id="rd1lhs" type="radio" name="rdGroup" onclick="AddMetric('mySelectlhs')" checked="checked" />Metric
			    <input id="rd2lhs" type="radio" name="rdGroup" onclick="AddImperial('mySelectlhs')" />Imperial
            </td>
            <td>
                <input type="image" style="display: none !important;" />
                <input id="rd1rhs" type="radio" name="rdGroup2" onclick="AddMetric('mySelectrhs')" checked="checked" />Metric
			    <input id="rd2rhs" type="radio" name="rdGroup2" onclick="AddImperial('mySelectrhs')" />Imperial
            </td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td style="text-align: center">
                <select id="mySelectlhs" onchange="DrawConverter()"></select>
            </td>
            <td style="text-align: center">
                <select id="mySelectrhs" onchange="DrawConverter()"></select>
            </td>
            <td></td>
        </tr>
        <tr>
            <td style="height: 20px" colspan="4"></td>
        </tr>
        <tr>
            <td style="float: right">
                <div id="lhScrollbar" style="float: right"></div>
            </td>
            <td colspan="2" style="text-align: center">
                <div id="converterDiv" style="text-align: center">
                    <img id="imgConverter" src="assets/ConverterImage.png" onload="" /></div>
                <div id="spinnerDiv" style="text-align: center">
                    <img id="imgSpinner" src="assets/ajax-loader.gif" /></div>
            </td>
            <td style="float: left">
                <div id="rhScrollbar" style="float: left"></div>
            </td>
        </tr>
        <tr>
            <td colspan="4" style="text-align: center"><span id="description" class="ms-rteStyle-Quote">&quot;8mm Aluminium Shaft Coupler joining 1.5mm to 1.5mm&quot;</span></td>
        </tr>
        <tr>
            <td style="height: 20px"></td>
        </tr>
        <tr>
            <td>
                <h2>Quantity:
                    <input type="text" size="3" id="qty" name="quantity" onblur="DrawConverter()" value="1" /></h2>
            </td>
            <td>
                <h2>&nbsp;&nbsp;Price:&nbsp;&pound;<span id="priceText">2.99</span>&nbsp;each</h2>
            </td>
            <td colspan="2"><a class="redButton" id="BuyNowButton" href='http://www.romancart.com/cart.asp?itemname=Shaft+Converterrrr&itemcode=EM0012&storeid=20772&quantity=1'>Add to Basket</a></td>
        </tr>
    </table>
</asp:Content>
