---
layout: page
title: Themen
---

<ul id="category-list">
{% for category in site.categories %}
  <li><a href="#{{ category | first }}">{{ category | first }}</a></li>
{% endfor %}
</ul>

<h2>Artikel je Thema</h2>
<ul id="category-posts">
{% for category in site.categories %}
  <li>
    <a name="{{ category | first }}">{{ category | first }}</a>
    <ul>
    {% for posts in category %}
      {% for post in posts %}
        {% if post.title %}
        <li><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d.%m." }}</time> <a href="{{ post.url }}">{{ post.title }}</a></li>
        {% endif %}
      {% endfor %}
    {% endfor %}
    </ul>
  </li>
{% endfor %}
</ul>