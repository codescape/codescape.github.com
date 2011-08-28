---
layout: post
title: 'Eclipse: Workspace in use or cannot be created'
tags: eclipse workspace fehlermeldung lock java
---

Wer kennt das nicht? Der Rechner stürzt ab, es geht nichts mehr und es bleibt lediglich die Hoffnung, dass man vorher noch gespeichert hatte. So geschehen heute mit meinem Entwicklungsrechner beim Kunden.

![Workspace in use or cannot be created, choose a different one.](/images/2009-08-24/workspace_in_use.png)

### Das Problem

Nach einem Absturz von [Eclipse](http://www.eclipse.org) kann beim Starten der vorher benutzte Workspace nicht mehr aufgerufen werden und verweigert mit der folgenden Meldung den Dienst: Workspace in use or cannot be created, choose a different one.

Die Ursache des Problems liegt darin, dass [Eclipse](http://www.eclipse.org) bedingt durch den Absturz nicht korrekt heruntergefahren werden konnte und der Workspace durch Eclipse nicht wieder freigegeben wurde.

### Die Lösung

Die Lösung ist denkbar einfach: Eclipse legt im Workspace einen Unterordner mit dem Namen `.metadata` an. In diesem findet sich eine Datei mit dem Namen `.lock`, die die Verwendung des Workspaces blockiert. Nach dem Löschen der Datei kann der Workspace wie gewohnt verwendet werden.

Sollte es vorkommen, dass die Datei `.lock` nicht gelöscht werden kann, so liegt das in der Regel daran, dass ein laufender Prozess auf diese Datei zugreift. In diesem Fall empfiehlt es sich alle Eclipse-Instanzen zu beenden (Speichern nicht vergessen) und mit Hilfe des [Windows Taskmanagers](http://en.wikipedia.org/wiki/Windows_Task_Manager) (`Ctrl + Alt + Entf`) den Prozess javaw.exe zu beenden. Bei Mac OS X hilft hier die [Aktivitätsanzeige](http://en.wikipedia.org/wiki/Activity_Monitor) (Activity Monitor) weiter.

Nach Beenden des blockierenden Java-Prozesses und Löschen der `.lock`-Datei sollte der Verwendung des auf diese Weise weiterhergestellten Workspaces nichts mehr im Wege stehen.
