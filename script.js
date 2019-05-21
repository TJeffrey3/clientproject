// JavaScript File
/* global $ */

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
        response.forEach(function(song){
            console.log(song.title);
             $(".gallery").append("<li><a href ='" + song.title +"'>"+song.title+"</a></li>");
        });
       // $(".gallery").html("<li><a href='"+ response +"'>" + response[0].title + "</a></li>");
     
    }
});
//test.forEach(function(song){
//   $("gallery").append(<a> + song + </a>);
//});


 //function myFunction() {
  // Declare variables
 // var input, filter, ul, li, a, i, txtValue;
 // input = document.getElementById('myInput');
 // filter = input.value.toUpperCase();
 // ul = document.getElementById("myUL");
 // li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
 // for (i = 0; i < li.length; i++) {
  //  a = li[i].getElementsByTagName("a")[0];
   // txtValue = a.textContent || a.innerText;
  //  if (txtValue.toUpperCase().indexOf(filter) > -1) {
   //   li[i].style.display = "";
  //  } else {
 //     li[i].style.display = "none";
 //   }
//  }
//}
});


