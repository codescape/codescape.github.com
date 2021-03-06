---
layout: post
title: Willkommen Jekyll - Auf Wiedersehen Wordpress
category: softwareentwicklung
tags: blog wordpress jekyll html
---

Nachdem ich etwas mehr als drei Jahre meinen Blog mit [Wordpress](http://de.wordpress.com) betrieben habe, wurde es mal wieder Zeit für eine Runderneuerung. In diesem Artikel möchte ich das neue System, welches mit [Jekyll](https://github.com/mojombo/jekyll) auf Basis von [Ruby](http://www.ruby-lang.org/de) läuft, kurz vorstellen.

> Jekyll is a simple, blog aware, static site generator. It takes a template directory (representing the raw form of a website), runs it through Textile or Markdown and Liquid converters, and spits out a complete, static website suitable for serving with Apache or your favorite web server. [Quelle](https://github.com/mojombo/jekyll#readme)

Mit Jekyll lassen sich statische Seiten zum Zeitpunkt ihrer Änderung generieren und nicht erst dann, wenn ein Besucher sie anfordert. Auf diese Weise lassen sich sehr performante Webseiten erstellen und dank [GitHub](https://github.com/codescape/codescape.github.com) auch direkt unter Versionskontrolle halten.

Und da ich nun einmal den Softwareentwickler in mir nicht verleugnen kann, musste natürlich auch direkt [HTML5](http://www.w3.org/TR/html5/) ausprobiert werden und als Basis für ein neues Layout herhalten, welches mit Hilfe von [CSS3 Media Queries](http://www.w3.org/TR/css3-mediaqueries/) auch auf dem Smartphone oder anderen Geräten mit kleinerer Bildschirmauflösung noch gut ausschaut.

In der aktuellen Version der Webseite gibt es noch eine Menge interessanter technischer Details:

* Mobile-fähige Fotogalerien mit Hilfe von [FlexSlider](http://flex.madebymufffin.com)
* Automatisch generierte [sitemap.xml](http://www.sitemaps.org) für die bessere Auffindbarkeit in Suchmaschinen
* Darstellung der letzten Twitter-Nachrichten mit [TwitterJS](http://twitterjs.googlecode.com)
* Automatische Generierung eines [atom.xml](http://www.atomenabled.org)-Newsfeeds
* Leichtgewichtiges Kommentarsystem mit [Disqus](http://disqus.com) inklusive mobiler Variante
* Einfachste Konfiguration für die Einbindung von [Google Analytics](http://www.google.com/intl/de/analytics)
* Hervorhebung von Source-Code mit Hilfe von [Pygments](http://pygments.org)

Der komplette Source-Code meines Blogs ist frei verfügbar und kann auf [GitHub](https://github.com/codescape/codescape.github.com) angeschaut, kopiert oder heruntergeladen werden. (Sämtliche Texte und Bilder verbleiben allerdings in meinem Eigentum und bedürfen der ausdrücklichen Genehmigung für eine weitere Verwendung!)
