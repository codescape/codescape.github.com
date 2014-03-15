/* Categories */

function showCategory(name) {
  $('#categories > li').hide();
  $('#' + name).show();
}

/* GPX maps */

function showMap(file, id) {
  var map = L.map('track' + id);
  var url = '/files/gpx/' + file;
  L.tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', {
    attribution: '<a href="http://opencyclemap.org">OpenCycleMap</a> | <a href="' + url + '">Download GPX</a>',
    maxZoom: 18
  }).addTo(map);
  new L.GPX(url, {
    async: true,
    marker_options: {
      startIconUrl: '/images/pin-icon-start.png',
      endIconUrl: '/images/pin-icon-end.png',
      shadowUrl: '/images/pin-shadow.png'
    }
  }).on('loaded', function(e) {
    map.fitBounds(e.target.getBounds());
  }).addTo(map);
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

  /* GPX maps
  ------------------------------------------------------------------- */
  if ($('.gpxmap').length) {
    $('.gpxmap').each(function(index) {
      $(this).attr("id", "track" + index);
      var file = $(this).text();
      $(this).empty();
      showMap(file, index);
    });
  }

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
