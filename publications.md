---
layout: page
title: Publikationen
permalink: publications/index.html
---

Auf dieser Seite möchte ich von mir gehaltene [Vorträge](#vortraege) auf Messen und Konferenzen vorstellen und ankündigen sowie eine Liste der von mir verfassten oder mit meiner Beteiligung erstellten [Veröffentlichungen](#veroeffentlichungen) präsentieren.

<h2 id="vortraege">Vorträge</h2>

{% for talk in site.data.talks %}
<h3>{{talk.title}}</h3>
<p>{{talk.description}}</h3>
<ul>
	{% for conference in talk.conferences %}
		<li>Vortrag für <a href="{{conference.link}}">{{conference.title}}</a> 
		{% if conference.cospeaker %}mit {{conference.cospeaker}}{% endif %}
		in {{conference.location}} am {{conference.date}}</li>
	{% endfor %}
</ul>
{% endfor %}

<h2 id="veroeffentlichungen">Veröffentlichungen</h2>

{% for article in site.data.articles %}
<h3>{{article.title}}</h3>
<p>{{article.description}}</p>
<ul>
	<li>Artikel für {% if article.link %}<a href="{{article.link}}">{{article.magazine}}</a>{% endif %}
	{% if article.file %}<a href="/files/publications/{{article.file}}">{{article.magazine}}</a>{% endif %} 
	{% if article.coauthor %}mit {{article.coauthor}}{% endif %}
	</li>
</ul>
{% endfor %}
