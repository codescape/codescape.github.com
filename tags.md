---
layout: page
title: Schlagworte
permalink: tags/index.html
---

Hier findest du eine Liste aller Schlagworte, mit denen ich die Artikel in meinem Blog gekennzeichnet habe. Ein Klick auf das Schlagwort führt dich zur Liste aller Beiträge zu diesem Schlagwort:

<ul id="categories">
{% for tag in site.tags %}
  <li id="{{ tag | first }}"><h3>{{ tag | first | capitalize }}</h3>
    <ul>
    {% for posts in tag %}
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
