---
layout: page
title: Artikel nach Datum
---

Hier findest du alle {{ site.posts | size }} Artikel meines Blogs sortiert nach Datum:

{% if site.posts %}
{% for post in site.posts %}

{% capture this_year %}{{ post.date | date: "%Y" }}{% endcapture %}
{% unless year == this_year %}

  {% if should_close %} </ul> {% endif %}
  {% assign year = this_year %}
  {% assign should_close = true %}

<h3 id="{{ year }}">Jahr {{ year }}</h3>
<ul>

{% endunless %}  

  <li><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d.%m." }}</time> <a href="{{ post.url }}">{{ post.title }}</a></li>

{% endfor %}

{% if should_close %} </ul> {% endif %}

{% endif %}
