---
layout: post
title: Was ist neu in camunda BPM 7.1?
categories: camunda java programming
---

Am 21. März war es endlich soweit und die neue camunda BPM 7.1 Version wurde vorgestellt. In einem einstündigen [Live Webinar](http://www.bpm-guide.de/2014/02/28/camunda-bpm-7-1-live-webinar/) haben [Jakob Freund](https://twitter.com/jakobfreund) und [Daniel Meyer](https://twitter.com/meyerdan) die neuesten Features der Version 7.1 vorgestellt. Nach einem kurzen Einstieg und Überblick über das camunda BPM Ökosystem inklusive eines interessanten Rückblicks über die letzten zwölf Monate camunda BPM ging es auch direkt an’s Eingemachte!

![BPMN 2.0 Model](/images/2014-03-29/pizza.png)

### Neue Features

Damit Prozesse ganz im Sinne des Rapid Prototyping möglichst schnell ausprobiert werden können besteht für die User Tasks die Möglichkeit sich auf einfache Art und Weise *Formulare generieren* zu lassen und diese nach dem Gewinn neuer Erkenntnisse weiter anzupassen.

Der Eclipse basierte *camunda Modeler* wird kontinuierlich verbessert und hat einige interessante und das effiziente Prozessdesign sehr stark unterstützende Features bekommen. Der Modeler ist für mich kaum noch vergleichbar mit dem Modeler für den wir Anfang 2012 noch den einen oder anderen Feature-Request oder Bugreport eingestellt haben.

Ein weiteres spannendes Feature ist die *Job Suspension*, um laufende Instanzen an einer bestimmten Stelle anzuhalten (beispielsweise beim Ausfall einer Schnittstelle) und später aktiv wieder anzustarten. Spannendes Detail an der Stelle: Die Job Suspension ist auch über die neue *Java API* erreich- und steuerbar und damit lässt sich dann auch programmatisch auf bestimmte Situationen in der eigenen Prozessanwendung reagieren.

Und besonders beim Betrieb von camunda BPM basierten Prozessanwendungen hilft auch die verbesserte *Process History* weiter, mit der über einzelne und alle Prozessinstanzen Abfragen möglich sind und damit Prozessdurchläufe analysiert werden können – natürlich inklusive grafischer Darstellung im camunda cockpit. Kleiner Wermutstropfen: Dieses Feature ist nur in der Enterprise Edition verfügbar.

Mit dem neuen *Support für JBoss AS 7.2 und JBoss EAP 6.1 / 6.2* werden nun in Summe sechs verschiedene Container und sechs verschiedene Datenbanken als Laufzeitumgebung für die camunda BPM Process Engine unterstützt.

Bei so vielen neuen Features stellt sich der Softwareentwickler natürlich die Frage, ob sich diese Verbesserungen negativ auf die *Performance* niederschlagen. Doch auch an dieser Baustelle wurde die camunda BPM Engine optimiert und profitiert nun noch mehr von Multi-Threading und reduziert für diverse BPM-Elemente die Anzahl der erforderlichen Datenbankzugriffe.

### Ausprobieren

Der [Einstieg](http://camunda.org/get-started/) in die Entwicklung von Prozessanwendungen mit camunda BPM wird durch die mittlerweile vielen Ressourcen wie der umfangreiche [User Guide](http://docs.camunda.org/latest/guides/user-guide/), die vielen [Tutorials](http://camunda.org/bpmn/tutorial.html) und [Beispiele](http://docs.camunda.org/latest/real-life/examples/) möglichst einfach gemacht. Wer dennoch den Erstkontakt scheut dem kann von camunda selber oder einem der Partnerunternehmen [Unterstützung bei der Einführung](http://camunda.org/support.html) durch Workshops oder einen Proof of Concept (“Nicht wir sondern Sie machen das und es läuft nicht bei uns sondern auf Ihrer eigenen Maschine!”) angeboten werden.

Ferner gibt es noch das [camunda BPM network](http://network.camunda.org/), wo man sich mit anderen BPM Interessierten vernetzen kann, diverse [Community Meetings](http://network.camunda.org/meetings) und natürlich die [BPMCon 2014](http://www.bpmcon.de/) in Berlin, die schon im letzten Jahr viele Anwender und Interessierte begeistern konnte.

### Ausblick

Im anschließenden Q&A sind die beiden Sprecher noch auf viele der gestellten Fragen eingegangen. So auch die Frage zur weiteren Entwicklung der camunda BPM Process Engine. Auf der Roadmap stehen gerade neben vielen kleinen Optimierungen und Weiterentwicklungen drei große Themen:

* Weitere Verbesserung der Tasklist 
* Implementierung von Adaptive Case Management
* Programmiermodell zur Transformation von XML- und JSON-Datenströmen

Die Stunde war viel zu schnell rum und für mich bleibt ein sehr gelungenes und interessantes Live Webinar mit wenigen aber informativen Folien und einer Menge echter Demos und Code-Beispiele in Erinnerung.

Die neuen Features machen das nächste BPM Projekt mit der camunda BPM Process Engine noch um einiges interessanter als Projekte dieser Art bisher schon waren!
