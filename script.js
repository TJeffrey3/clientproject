// JavaScript File
/* global $ */

$("button").click(function(){
    var value = $(".search").val();
    var url = "https://api.soundcloud.com/tracks?client_id=5aa8e389ba4e24b6106af5159ab3e344&q=";
    var combine = url + value;

$.ajax({
    url: combine,
    method:"GET",
    success: function(response) {
        console.log(response[0].title);
        $(".gallery").html("<a href='"+ response +"'>" + response[0].title + "</a>");
     
    }
});

});

//have to add something in order for this to really be linked to the other pages.
