---
layout: page
title: Artikel nach Schlagwort
---

Hier findest du alle {{ site.posts | size }} Artikel meines Blogs sortiert nach Schlagworten:

{% assign sorted_tags = site.tags | sort %}
{% for tag in sorted_tags %}
{% assign sorted_posts = tag[1] | reversed %}
<h3 id="{{tag[0] | uri_escape | downcase }}">{{tag[0] | capitalize}}</h3>
<ul>
  {% for post in sorted_posts %}
  <li><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d.%m.%Y" }}</time> <a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
{% endfor %}
