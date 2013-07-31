---
layout: post
title: Gradle unter Mac OS X installieren
categories: java gradle macosx groovy
---

Nachdem ich heute auf der Arbeit erstmals mit dem Buildsystem [Gradle](http://gradle.org) in einem kleinen [Coding Kata](http://codingkata.org/katas/unit/movie-tickets) in Berührung gekommen bin, musste ich mich – einmal neugierig geworden nun auch daheim auf dem Macbook – damit beschäftigen. Der manuellen Installation von Gradle unter Mac OS X möchte ich mich in diesem Beitrag widmen.

Nach dem [Download einer aktuellen Version](http://gradle.org/downloads.html) von der offiziellen Gradle Webseite öffnen wir ein Terminal und entpacken das geladene Archiv an seinen Bestimmungsort. Ich habe dafür den Ordner /usr/share/gradle vorgesehen:

{% highlight bash %}
sudo unzip ~/Downloads/gradle-0.9-rc-3-all.zip -d /usr/share/gradle
{% endhighlight %}

Da ich aber kein Verzeichnis in der Art /usr/share/gradle/gradle-0.9-rc-3 haben wollte, kopiere ich alle Dateien um eine Ebene nach oben und lösche anschließend den zuviel angelegten Ordner:

{% highlight bash %}
sudo mv /usr/share/gradle/gradle-0.9-rc-3/* /usr/share/gradle
sudo rmdir /usr/share/gradle/gradle-0.9-rc-3
{% endhighlight %}

Zuletzt müssen wir bevor wir Gradle verwenden können noch die notwendigen Umgebungsvariablen setzen. Zum Editieren der Datei .profile, welche hierfür herangezogen wird, verwende ich das Programm [TextMate](http://macromates.com/). Wer TextMate nicht installiert hat kann beispielsweise pico verwenden indem im unten stehenden Befehl mate durch pico ersetzt wird:

{% highlight bash %}
mate ~/.profile
{% endhighlight %}

In dieser Datei ergänzen wir – sofern die Datei schon vorhanden ist – die folgenden Zeilen, damit Gradle von nun an im Terminal verfügbar ist. Ist die Datei noch nicht vorhanden legen wir sie durch Speichern an:

{% highlight bash %}
GRADLE_HOME=/usr/share/gradle;
export GRADLE_HOME
export PATH=$PATH:$GRADLE_HOME/bin
{% endhighlight %}

Nach dem Speichern der Datei können wir ein neues Terminal-Fenster öffnen und hier unser erstes Gradle-Kommando absetzen um eine erfolgreiche Installation zu testen:

{% highlight bash %}
gradle -v
{% endhighlight %}

Im Erfolgsfall sieht die Antwort dann ähnlich der hier dargestellten Ausgabe aus:

{% highlight bash %}
Gradle 0.9-rc-3
------------------------------------------------------------

Gradle build time: Monday, November 15, 2010 1:17:50 PM EST
Groovy: 1.7.5
Ant: Apache Ant version 1.8.1 compiled on April 30 2010
Ivy: 2.2.0
JVM: 1.6.0_22 (Apple Inc. 17.1-b03-307)
OS: Mac OS X 10.6.5 x86_64
{% endhighlight %}

Ich hoffe, dieser kleine Leitfaden hilft bei der Installation und ermuntert vielleicht den Einen oder Anderen zum Ausprobieren von Gradle. Ich habe ein kleines Groovy Coding Kata nach der Lektüre der gelungenen [Gradle Tutorials](http://gradle.org/tutorials.html) schon nach nur wenigen Minuten bauen können.
