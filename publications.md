---
layout: page
title: Publikationen
permalink: publications/index.html
---

Auf dieser Seite möchte ich von mir gehaltene [Vorträge](#vortraege) auf Messen und Konferenzen vorstellen und ankündigen sowie eine Liste der von mir verfassten oder mit meiner Beteiligung erstellten [Veröffentlichungen](#veroeffentlichungen) präsentieren.

<h3 id="vortraege">Vorträge</h3>

{% for talk in site.data.talks %}
<h4>{{talk.title}}</h4>
<p>{{talk.description}}</p>
<ul>
	{% for conference in talk.conferences %}
		<li>{{talk.type}} für <a href="{{conference.link}}">{{conference.title}}</a>
		{% if conference.cospeaker %}mit {{conference.cospeaker}}{% endif %}
		in {{conference.location}} am {{conference.date}}</li>
	{% endfor %}
</ul>
{% endfor %}

<h3 id="veroeffentlichungen">Veröffentlichungen</h3>

{% for article in site.data.articles %}
<h4>{{article.title}}</h4>
<p>{{article.description}}</p>
<ul>
	{% for magazine in article.magazines %}
		<li>Artikel für
			{% if magazine.link %}
				<a href="{{magazine.link}}">{{magazine.name}}</a>
			{% elsif magazine.file %}
				<a href="/files/publications/{{magazine.file}}">{{magazine.name}}</a>
			{% else %}
				{{magazine.name}}
			{% endif %}
			{% if magazine.coauthor %}mit {{magazine.coauthor}}{% endif %}</li>
	{% endfor %}
</ul>
{% endfor %}
