$(document).ready(function() {
    $("#carouselExampleIndicators").swiperight(function() {
       $(this).carousel('prev');
       console.log(this);
       
     });
    $("#carouselExampleIndicators").swipeleft(function() {
       $(this).carousel('next');
       console.log(this);
       
    });
 });