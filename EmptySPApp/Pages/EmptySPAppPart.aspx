<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<WebPartPages:AllowFraming ID="AllowFraming1" runat="server" />
<head>
    <title>Shaft Coupler Web Part</title>
    <link rel="stylesheet" href="../css/normalize.css">
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="../css/app.css" />
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.15/angular.min.js"></script> 
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script type="text/javascript" src="../Scripts/angular-route.min.js"></script>
    <script type="text/javascript" src="//ajax.aspnetcdn.com/ajax/4.0/1/MicrosoftAjax.js"></script>
    <%--<script type="text/javascript" src="../Scripts/HelloWorldClientWebPart.js"></script>--%>
    <script type="text/javascript" src="../Scripts/sc/sc_app.js"></script>
    <script type="text/javascript" src="../Scripts/sc/sc_services.js"></script>
    <script type="text/javascript" src="../Scripts/sc/sc_controllers.js"></script>
    <script type="text/javascript" src="../Scripts/sc/sc_filters.js"></script>
    <script type="text/javascript" src="../Scripts/sc/sc_directives.js"></script>
</head>
<body style="overflow:auto;">
    <div ng-app="myApp">
        <ul>
            <li><a href="#/view1">Design Coupler</a></li>
            <li><a href="#/view2">Specifications</a></li>
        </ul>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        <div ng-view></div>
        <hr />
    </div>
</body>
