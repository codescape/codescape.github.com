---
layout: post
title: Logging der SQL-Statements in Oracle ADF
categories: java oracle adf logging
---

Während der Entwicklung einer Oracle ADF Anwendungen möchte man spätestens dann, wenn es zu Fehlern bei der Ausführung von Datenbankoperationen kommt, die von Oracle ADF ausgeführten SQL-Statements auf der Konsole nachvollziehen können. Hierzu geht man wie folgt vor:

1. Im Menü des Oracle JDeveloper auf `Run` gehen. 
1. Die Option `Choose Active Run Configuration` auswählen. 
1. Die Option `Manage Run Configurations...` auswählen. 
1. Die aktive Run Configuration (in der Regel `Default`) mit `Edit...` bearbeiten. 
1. In den `Launch Settings` unter `Java Options:` folgendes eintragen: `-Djbo.debugoutput=console -Djbo.logging.trace.threshold=5`

Nach dem Starten der Applikation werden nun die SQL-Statements auf der Konsole ausgegeben.
