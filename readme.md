stefanglase.de
==============

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

### GPX map

Including a GPX map is as easy as adding the following snippet referencing the GPX file inside the /gpx folder:

    <div class="gpxmap">2011-04-10-Radrebellen.gpx</div>

### Code Highlighting

    {% highlight groovy %}
    // code here
    {% endhighlight %}
