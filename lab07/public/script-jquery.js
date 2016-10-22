"use strict";

$(document).ready(function() {
    $( function() {
        $( ".widget input[type=submit], .widget a, .widget button" ).button();
        $( "button, input, a" ).click( function( event ) {
            $.ajax({
            url: "/fetch",
            type: "GET",
            data: {
                name: "jQuery-AJAX"
            }
        })
        .done(function(result){
            console.log('AJAX request succeeded...');
            $("#fetch").next("div").html("<p>" + result.content + "</p>");
        })
        .fail(function(xhr, status, errorThrown) {
            console.log('AJAX request failed...');
        })
        });
    });
});
