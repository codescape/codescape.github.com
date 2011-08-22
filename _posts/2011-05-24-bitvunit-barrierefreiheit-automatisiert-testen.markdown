---
layout: post
title: BitvUnit – Barrierefreiheit automatisiert testen
tags: bitv barrierefreiheit java testen
---

Motiviert durch einen Workshop zum Thema Barrierefreiheit mit einigen Kollegen und der Lektüre eines interessanten [Artikels bei WebTestPraxis](http://webtestpraxis.de/blog/?p=15), über den ich gestolpert bin, als ich mich nach Werkzeugen für die Testautomatisierung von Kriterien der Barrierefreiheit umgesehen habe, entstand die Idee, ein Open-Source-Framework zu erstellen.

Was gibt es da passenderes als einfach mal ein kleines Projekt bei [GitHub](https://github.com) zu starten und einen initialen Stand zu entwickeln? Nachdem in [BitvUnit](http://www.google.de/#sclient=psy&q=bitvunit) ein Name gefunden war, der noch nicht belegt ist, war das zugehörige [GitHub-Repository](https://github.com/codescape/bitvunit) in Sekunden angelegt und lechzte nach dem ersten Code.

Mittlerweile sind erste Framework-Komponenten entstanden, die ersten 10 Regeln implementiert, dokumentiert und mit kleinen Beispielen getestet. Als kleines Beispiel anbei die Regel zur Prüfung auf das Attribut "alt" für Alternativtexte an Bildern:

{% highlight java %}
public class AlternativeTextForImageRule extends AbstractRule {

    private static final String RULE_NAME = "AlternativeTextForImage";
    private static final String RULE_MESSAGE = "Every image must provide an alternative text through its alt attribute.";

    @Override
    public String getName() {
        return RULE_NAME;
    }

    @Override
    protected void applyTo(Page page, List<Violation> violations) {
        for (HtmlImage image : page.findAllImageTags()) {
            validateImage(image, violations);
        }
    }

    private void validateImage(HtmlImage image, List<Violation> violations) {
        if (!elementHasAttribute(image, "alt")) {
            violations.add(createViolation(image.getStartLineNumber(), RULE_MESSAGE));
        } 
    }
}
{% endhighlight %}

Eine Version 0.1 mit den ersten zehn funktionierenden Regeln kann bereits bei [GitHub](https://github.com/codescape/bitvunit/archives/master) heruntergeladen und ausprobiert werden. Für kommende Versionen plane ich neben vielen weiteren Regeln Erweiterungen, die eine Verwendung des Frameworks erleichtern:

* Konfiguration der Regelsätze (`RuleSet`) beispielsweise mittels XML-Dokumenten
* Visualisierung der Ergebnisse in geeigneter Form (Text, XML, HTML ...)
* Adapter für gängige Test-Werkzeuge(JUnit, TestNG, Spock ...) bereitstellen
* Erstellung eines Getting-Started-Guide für den Einstieg in das Framework 

Habe ich Dich neugierig gemacht? Dann schau doch mal in das [Git-Repository](https://github.com/codescape/bitvunit) und teste Deine Webseite oder Webanwendung! Feedback, Verbesserungsvorschläge oder Mitarbeit sind herzlich willkommen und ausdrücklich erwünscht!
