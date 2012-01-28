Jekyll driven static site hosted on GitHub Pages replacing my former Wordpress blog.

Configuration
-------------

Most aspects can be configured inside the `_config.yml` file.

Creating a gallery
------------------

To create a gallery simply upload the pictures and include them into a post in this way:

    <div class="gallery markdown="1">
      ![My first picture](/folder/to/first-picture.jpg)
      ![My second picture](/folder/to/second-picture.jpg)
      ![My third picture](/folder/to/third-picture.jpg)
    </div>

Including a Bikemap route
-------------------------

To include a Bikemap route look up the route id from the Bikemap.

    {% assign route = "ROUTE_ID" %}
    {% include bikemap_map.html %}