---
layout: post
title: Automatische Vervollständigung für Facelets in Eclipse
tags: jsf facelets java eclipse sts autocomplete
---

In diesem Artikel wird es mal wieder etwas technischer. Da ich mich im Moment beruflich wieder intensiver mit [JavaServer Faces](http://java.sun.com/javaee/javaserverfaces) beschäftige und [Eclipse](http://www.eclipse.org) (beziehungsweise die [SpringSource Tool Suite](http://www.springsource.com/products/sts)) als Entwicklungsumgebung gesetzt ist, stand ich vor dem selben Problem wie auch schon vor etwas mehr als anderthalb Jahren:

> Wie aktiviere ich die Autovervollständigung sowohl der JavaServer-Faces-Tagbibliotheken als auch der Facelets-Tagbibliothek für den normalen Eclipse JSP-Editor bei JSF-Seiten im Format \*.xhtml-Dateien?

Die Lösung auf diese Fragestellung ist recht trivial allerdings lässt sie sich nicht so einfach finden. Im gestarteten Eclipse gehen wir im Menü auf `Window` – `Preferences` – `Content Types` – `Text` – `JSP` und fügen über `Add...` wie im folgenden Bild dargestellt einen neuen Eintrag mit dem Inhalt `*.xhtml` hinzu.

![Content Type \*.xhtml hinzufügen](/images/2010-07-01/add-xhtml.png)

Öffnen wir nun eine `*.xhtml`-Datei mit dem JSP-Editor von Eclipse, so haben wir endlich auch hier eine funktionierende automatische Vervollständigung für JavaServer-Faces-Tags. Der folgende Screenshot zeigt, wie es nach diesem Kniff aussieht.

![Autovervollständigung für JavaServer Faces Tagbibliotheken](/images/2010-07-01/autovervollstaendigung.png)

Doch damit wollen wir uns nicht zufrieden geben, denn noch immer funktioniert die automatische Vervollständigung nicht für [Facelets](https://facelets.dev.java.net)-Tags, da der JSP-Editor hierfür eine entsprechende `*.tld`-Datei benötigt. Diese lässt sich aber glücklicherweise unter der folgenden Adresse herunterladen:

> [https://facelets.dev.java.net/files/documents/3448/21641/jsf-ui.tld](https://facelets.dev.java.net/files/documents/3448/21641/jsf-ui.tld)

Die heruntergeladene Datei legen wir im JSF-Projekt unter `WEB-INF/tld` ab, um ab sofort auch für alle Tags aus der Facelets-Tagbibliothek die Autovervollständigung in `*.xhtml`-Dateien nutzen zu können.

Ich hoffe, dem einen oder anderen hilft diese Anleitung bei der Lösung des Problems. Wenn ich nun in anderthalb Jahren mal wieder vor der gleichen Problematik stehe, weiß ich nun bereits wo ich nachschauen kann. :-)

Wer über die Autovervollständingung der Tags hinaus noch weiteren Support von der IDE erwartet, dem sei der [Visual Page Editor](http://docs.jboss.org/tools/3.0.0.CR2/en/jsf/html/editors.html#visual_page) aus den [JBoss Tools](http://jboss.org/tools) ans Herz gelegt. Mit diesem Editor können neben der Autovervollständigung über die Tags auch Managed Bean Referenzen und Message Bundles aufgelöst und eine Vorschau der Seite dargestellt werden.
