$(document).ready(function() {

  /* Galleries
  ------------------------------------------------------------------- */

  /* remove paragraphs from gallery div */
  $('.gallery p').replaceWith(function() { return $(this).contents(); });
  
  /* assign style classes to gallery div and wrap it's contents inside a unordered list */
  $('.gallery').wrapInner('<ul class="rslides"/>');

  /* wrap every image inside a list element */
  $('.slides img').wrap('<li/>');

  /* start the responsive slides */
  $('.rslides').responsiveSlides({
       pager: true
  });

  /* Single Images
  ------------------------------------------------------------------- */
  
  /* add the image class to paragraphs containing an image */
  $('article p:has(img)').addClass('image');

});
