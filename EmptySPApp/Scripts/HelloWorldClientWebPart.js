var context;
var web;
var user;

//Wait for the page to load
$(document).ready(

    function () {
        //Get the URI decoded SharePoint site url from the SPHostUrl parameter.
        var spHostUrl = decodeURIComponent(getQueryStringParameter('SPHostUrl'));
        //Build absolute path to the layouts root with the spHostUrl
        var layoutsRoot = spHostUrl + '/_layouts/15/';
        $.getScript(layoutsRoot + "SP.Runtime.js", function () {
            $.getScript(layoutsRoot + "SP.js", execOperation);
           }
        );

        // Function to execute basic operations.
        function execOperation() {
            // get context and then username
            context = new SP.ClientContext.get_current();
            web = context.get_web();
            //getUserName();
        }
    }
);


function getQueryStringParameter(urlParameterKey) {
    var params = document.URL.split('?')[1].split('&');
    var strParams = '';
    for (var i = 0; i < params.length; i = i + 1) {
        var singleParam = params[i].split('=');
        if (singleParam[0] == urlParameterKey)
            return decodeURIComponent(singleParam[1]);
    }
}


// This function prepares, loads, and then executes a SharePoint query to get the current user's information
//function getUserName() {
//    user = web.get_currentUser();
//    context.load(user);
//    context.executeQueryAsync(onGetUserNameSuccess, onGetUserNameFail);
//}


//// This function is executed if the above OM call is successful
//// It replaces the content of the 'welcome' element with the user name
//function onGetUserNameSuccess() {
//    $('#message').text('Hello ' + user.get_title());
//}


//// This function is executed if the above OM call fails
//function onGetUserNameFail(sender, args) {
//    alert('Failed to get user name. Error:' + args.get_message());
//}
