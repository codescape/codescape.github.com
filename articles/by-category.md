---
layout: page
title: Artikel nach Kategorie
---

Hier findest du alle {{ site.posts | size }} Artikel meines Blogs sortiert nach Kategorie:

{% assign sorted_categories = site.categories | sort %}
{% for category in sorted_categories %}
{% assign sorted_posts = category[1] | reversed %}
<h3 id="{{category[0] | uri_escape | downcase }}">{{category[0] | capitalize}}</h3>
<ul>
  {% for post in sorted_posts %}
 	<li><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d.%m.%Y" }}</time> <a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
{% endfor %}
