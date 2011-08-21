---
layout: default
---

{% for post in site.posts limit:3 %}
  {% include article.html %}
{% endfor %}
