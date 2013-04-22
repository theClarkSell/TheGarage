﻿(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.

            $("#Door").click(function () {
                $('#Door').removeClass('doorClosed');
                $('#Door').attr('class', 'doorOpen');
            });

            $("#OutsideButtonRight, #OutsideRight, #OutsideButtonLeft, #OutsideLeft").click(function () {
                var x = "ASDF";
            });

            $("#InsideButton, #Inside").click(function () {
                var x = "ASD";
            });

        }
    });

})();
