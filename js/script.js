$(document).ready(function() {

  /* assign style classes to image containing paragraphs and wrap contents inside a unordered list */
  $('p img').parent().addClass('flexslider gallery').wrapInner('<ul class="slides"/>');

  /* wrap every image inside a list element and extract alt text into caption paragraph */
  $('.slides img').wrap('<li/>').each(function() {
    $(this).after('<p class="flex-caption">' + $(this).attr('alt')  + '</p>');
  });

  /* start the flexslider */
  $('.flexslider').flexslider();

});
