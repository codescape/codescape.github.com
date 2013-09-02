codescape.github.com
====================

This is my Jekyll driven static site hosted on GitHub Pages which replaced my former wordpress based blog in 2011. Since I wanted to keep this blog as simple as possible to lower the burden of writing posts I avoided using plugins that would make some aspects (e.g. tag pages) easier but would not work with GitHub Pages out of the box.

Instructions
------------

### Gallery

To create a gallery simply upload the pictures and include them into a post in this way:

    <div class="gallery markdown="1">
      ![My first picture](/folder/to/first-picture.jpg)
      ![My second picture](/folder/to/second-picture.jpg)
      ![My third picture](/folder/to/third-picture.jpg)
    </div>

### Bikemap route

To include a Bikemap route look up the route id from the Bikemap.

    {% assign route = "ROUTE_ID" %}
    {% include bikemap_map.html %}
