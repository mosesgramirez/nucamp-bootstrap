 /*
   // Scroll from Reserve Form button to inline form, if no modal is used. 

   $(function() {
       $('[data-toggle="tooltip"]').tooltip();
   });

   $(".jumbotron a").click(function() {
       $("body,html").animate({
           scrollTop: $("#" + $(this).data('value')).offset().top
       }, 1000);

   });
 */

 /* Function for two separate carousel play/pause buttons
 $(function() {
     //If using "data-ride" attribute, this section is not needed
     $(".carousel").carousel({
        interval: 5000,
       ride: "carousel"
     });
     $("#carouselPause").click(function() {
         $(".carousel").carousel("pause");
     });
     $("#carouselPlay").click(function() {
         $(".carousel").carousel("cycle");
     });
 });
 */

 // Toggling carousel pause/play button
 $(function() {
     $("#carouselButton").click(function() {
         if ($("#carouselButton").children("i").hasClass("fa-pause")) {
             $(".carousel").carousel("pause");
             $("#carouselButton").children("i").removeClass("fa-pause");
             $("#carouselButton").children("i").addClass("fa-play");
         } else {
             $(".carousel").carousel("cycle");
             $("#carouselButton").children("i").removeClass("fa-play");
             $("#carouselButton").children("i").addClass("fa-pause");
         }
     });
 });