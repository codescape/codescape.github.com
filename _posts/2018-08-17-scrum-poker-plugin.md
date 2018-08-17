---
layout: post
title: Scrum Poker Plugin für Jira
category: softwareentwicklung
tags: jira agile coding opensource
---

Seit mittlerweile mehr als 3 Jahren entwickele ich ein eigenes [Scrum Poker Plugin](https://github.com/codescape/jira-scrum-poker) als Erweiterung für das wohl bekannteste Ticketsystem [Atlassian Jira](https://de.atlassian.com/software/jira). Begonnen hat alles auf dem congstar eigenen [h4ck4thon](https://www.facebook.com/media/set/?set=a.766880276671228&type=1&l=7d83da8316), wo wir uns 2015 bei der Umstellung von [Kunagi](http://kunagi.org) auf Jira einen adäquaten Ersatz für das in Kunagi eingebaute Scrum Poker schaffen wollten.

### Was bitte ist Scrum Poker?

Um Scrum Poker oder auch [Planning Poker](http://www.mountaingoatsoftware.com/books/agile-estimating-and-planning) zu erklären, ist ein kleiner Exkurs nötig: Bei Scrum, einer iterativen Methode zur Softwareentwicklung, geht es darum in Sprints, also fest definierten Planungszyklen von meist 1 bis 3 Wochen, Software-Inkremente zu erstellen, die in sich funktionsfähig und auslieferbar sind. Oft werden diese Inkremente durch sogenannte User Stories beschrieben.

Damit ein Team aus Softwareentwicklern zum Einen ein gemeinsames Bild von einer solchen User Story hat und zum Anderen die Komplexität und damit in der Regel verbunden den zeitlichen Aufwand besser einschätzen kann, werden diese User Stories oft mit dem sogenannten Scrum oder Planning Poker geschätzt.

![Scrum Poker Sitzung in Jira](/images/2018-08-17/poker-session.png)

Wie beim echten Poker wählt jeder Teilnehmer verdeckt eine Karte und es wird aufgedeckt, sobald jeder seine Karte (Schätzung) gespielt hat. Über Diskussion und eventuelles erneutes Schätzen kann man so oft noch Unstimmigkeiten aufdecken und schlussendlich zu einem gemeinsamen Bild und einer abgestimmten Einschätzung der User Story kommen.

### Die Entwicklung

Von Anfang an haben wir uns dazu entschieden den Code für das Scrum Poker Plugin auf [GitHub](https://github.com/codescape/jira-scrum-poker) als Open Source Projekt zu veröffentlichen. Und so findet sich an dieser Stelle auch die komplette Entwicklungshistorie von mehr als drei Jahren stetiger Verbesserung und Optimierung wieder.

Die größten Stolpersteine für die Entwicklung des Plugins finden sich in der leider durchweg noch an vielen Stellen [verbesserungswürdigen Dokumentation](https://developers.atlassian.com/server/jira/platform/java-apis/) der von Atlassian bereitgestellten Jira API.

Das Plugin selber nutzt mittlerweile eine in meinen Augen recht spannende Kombination an Bibliotheken und Technologien für die bereitgestellte Funktionalität:

* [REST](https://de.wikipedia.org/wiki/Representational_State_Transfer)-Endpunkte für die Kommunikation der GUI mit dem Backend
* [Mustache.js](https://github.com/janl/mustache.js) für das Templating im Frontend
* [jQuery](https://jquery.com) für die Kommunikation des Frontends mit den REST-Endpunkten
* [Active Objects](https://developer.atlassian.com/server/framework/atlassian-sdk/active-objects) für die Speicherung der Scrum Poker Sitzungen
* [Spring Framework](https://spring.io) für die saubere Verzahnung der Software-Module

### Kostenfrei verfügbar

Im April diesen Jahres habe ich mich mit den notwendigen Anpassungen und Qualitätsansprüchen für eine Veröffentlichung im [Atlassian Marketplace](https://marketplace.atlassian.com) auseinandergesetzt. In diesem Marketplace werden Erweiterung für diverse Atlassian-Produkte von Atlassian selber und vielen freien Softwareentwicklern angeboten. Und seit dem 17. April fügt sich auch das [Scrum Poker Plugin](https://marketplace.atlassian.com/apps/1218884/scrum-poker) in die Liste der dort angebotenen Erweiterungen als kostenfrei verfügbares Plugin ein.

![Scrum Poker im Marketplace](/images/2018-08-17/marketplace.png)

Ein wenig stolz macht mich an dieser Stelle der Umstand, dass der [Eintrag im Marketplace](https://marketplace.atlassian.com/apps/1218884/scrum-poker) aktuell schon 38 aktive Installationen meines Scrum Poker Plugins verrät und ich freue mich, dass das Plugin das eine oder andere Team bei seiner täglichen Arbeit unterstützt.

### Ausblick

Weiterhin bin ich umtriebig und nutze auch das erste [Feedback](https://github.com/codescape/jira-scrum-poker/issues), welches seit der Veröffentlichung im Marketplace einen Weg in die [Issue-Liste](https://github.com/codescape/jira-scrum-poker/issues) gefunden hat, um das Plugin weiterzuentwickeln.

Du bist selber Nutzer des Scrum Poker Plugins? So möchte ich an dieser Stelle noch einmal dazu einladen, mit Wünschen, Verbesserungsideen und Kritik auf mich zuzukommen. Ich freue mich über [jegliche Idee](https://github.com/codescape/jira-scrum-poker/issues) zur Verbesserung des Plugins!
