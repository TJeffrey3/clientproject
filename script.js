// JavaScript File
/* global $ */

$("button").click(function(){
    var value=$(".search").val();

$.ajax({
    url:"https://api.soundcloud.com/tracks?q=beyone&clientid=5aa8e389ba4e24b6106af5159ab3e344",
    method:"GET",
    success: function(response) {
        $(".gallery").html("<img src='"+response[0].title+"'>")
       
    }
});

});