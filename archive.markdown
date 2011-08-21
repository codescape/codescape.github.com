---
layout: page
title: Artikel
---

Hier findet sich eine chronologisch geordnete Liste aller Artikel, die sich im Laufe der Zeit in meinem Blog angesammelt haben.

  {% if site.posts %}
  <ul>
  {% for post in site.posts %}
    {% capture this_year %}{{ post.date | date: "%Y" }}{% endcapture %}
    {% unless year == this_year %}
      {% assign year = this_year %}
      <h3>Jahr {{ year }}</h3>
    {% endunless %}  
  <li><span>{{ post.date | date: "%d.%m." }}</span> <a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
  </ul>
  {% endif %}
