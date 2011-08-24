---
layout: default
---

<div class="teaser" markdown="1">

Hallo und herzlich willkommen in meinem Blog mit dem Themenschwerpunkt Mountainbike und Softwareentwicklung. Möchtest du mehr über den Autor dieses Blogs erfahren, so schau doch mal auf der Seite [Über mich](/about) vorbei. Ansonsten lohnt sich sicherlich ein Blick in die  Liste aller [Artikel](/archive).
</div>

{% for post in site.posts limit:3 %}
  {% assign content = post.content %}
  {% include article.html %}
{% endfor %}
