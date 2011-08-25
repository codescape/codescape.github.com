$(document).ready(function() {

  /* Galleries
  ------------------------------------------------------------------- */

  /* remove paragraphs from gallery div */
  $('.gallery p').replaceWith(function() { return $(this).contents(); });
  
  /* assign style classes to gallery div and wrap it's contents inside a unordered list */
  $('.gallery').addClass('flexslider').wrapInner('<ul class="slides"/>');

  /* wrap every image inside a list element and extract alt text into caption paragraph */
  $('.slides img').wrap('<li/>').each(function() {
    $(this).after('<p class="flex-caption">' + $(this).attr('alt')  + '</p>');
  });

  /* start the flexslider */
  $('.flexslider').flexslider();

  /* Single Images
  ------------------------------------------------------------------- */
  
  /* add the image class to paragraphs containing an image */
  $('article p img').parent().addClass('image');

});
