---
layout: page
title: Themen
permalink: categories/index.html
---

Hier findet sich eine Liste aller Themen, zu denen Artikel in meinem Blog existieren. Ein Klick auf das Thema führt zur Liste der mit diesem Thema assoziierten Beiträge:

<ul id="categories">
{% for category in site.categories %}
  <li id="{{ category | first }}"><h3>{{ category | first }}</h3>
    <ul>
    {% for posts in category %}
      {% for post in posts %}
        {% if post.title %}
        <li><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d.%m.%Y" }}</time> <a href="{{ post.url }}">{{ post.title }}</a></li>
        {% endif %}
      {% endfor %}
    {% endfor %}
    </ul>
  </li>
{% endfor %}
</ul>
