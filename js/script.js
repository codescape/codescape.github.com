$(document).ready(function() {

  /* add gallery class to posts with images */
  $("p img").parent().each(function() {
    $(this).addClass('gallery');
  });

});
