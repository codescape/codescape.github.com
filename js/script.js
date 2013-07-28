/* Categories */

function showCategory(name) {
  $('#categories > li').hide();
  $('#' + name).show();
}

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

  /* Categories
  ------------------------------------------------------------------- */

  if ($('#categories').length) {
    // check for url fragment
    var fragment = $.url().attr('fragment');

    // hide all categories
    $('#categories > li').hide();

    // create list of categories
    $('#categories').before('<ul id="categories-list"/>');

    // fill list of categories
    $("#categories > li").each(function(index) {
      var category = $(this).find('h3').first().text();
      $('#categories-list').append('<li><a href="#' + category + '" onclick="showCategory(\'' + category + '\')">' + category + '</a></li>');
    });

    // display selected catgeory
    if (fragment) {
      showCategory(fragment);
    }
  }

});
