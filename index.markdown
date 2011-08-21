---
layout: default
---

{% for post in site.posts limit:3 %}
  {% assign content = post.content %}
  {% include article.html %}
{% endfor %}
