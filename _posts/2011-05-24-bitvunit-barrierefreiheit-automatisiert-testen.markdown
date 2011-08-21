---
layout: post
title: BitvUnit – Barrierefreiheit automatisiert testen
tags: bitv barrierefreiheit java testen
---

Motiviert durch einen Workshop mit einigen Kollegen und einen interessanten <a href="http://webtestpraxis.de/blog/?p=15" target="_blank">Artikel bei WebTestPraxis</a>, über den ich gestolpert bin, als ich mich nach Werkzeugen für die Automatisierung von Tests auf Barrierefreiheit umgesehen habe, entstand die Idee, ein Open-Source-Framework zu erstellen.

Was gibt es da passenderes als einfach mal ein kleines Projekt bei <a href="https://github.com" target="_blank">GitHub</a> zu starten und einen initialen Stand zu entwickeln? Nachdem in <a href="http://www.google.de/#sclient=psy&q=bitvunit" target="_blank">BitvUnit</a> ein Name gefunden war, der noch nicht belegt ist, war das zugehörige <a href="https://github.com/codescape/bitvunit" target="_blank">GitHub-Repository</a> in Sekunden angelegt und lechzte nach dem ersten Code.

Mittlerweile sind erste Framework-Komponenten entstanden, die ersten 10 Regeln implementiert, dokumentiert und mit kleinen Beispielen getestet.

Als kleines Beispiel anbei die Regel zur Prüfung auf das Attribut "alt" für Alternativtexte an Bildern:

<pre><code>public class AlternativeTextForImageRule extends AbstractRule {

    public static final String RULE_NAME = "AlternativeTextForImage";
    private static final String RULE_MESSAGE = "Every image must provide an alternative text through its alt attribute.";

    @Override
    public String getName() {
        return RULE_NAME;
    }

    @Override
    protected void applyTo(Page page, List&lt;Violation&gt; violations) {
        for (HtmlImage image : page.findAllImageTags()) {
            validateImage(image, violations);
        }
    }

    private void validateImage(HtmlImage image, List&lt;Violation&gt; violations) {
        if (!elementHasAttribute(image, "alt")) {
            violations.add(createViolation(image.getStartLineNumber(), RULE_MESSAGE));
        }
    }

}</code></pre>

Eine Version 0.1.0 mit den ersten 10 funktionierenden Regeln kann bereits bei <a href="https://github.com/codescape/bitvunit/archives/master" target="_blank">GitHub</a> heruntergeladen und ausprobiert werden. 

Für kommende Versionen plane ich neben vielen weiteren Regeln Erweiterungen, die eine Verwendung des Frameworks erleichtern:

<ul>
	<li>Konfiguration der Regelsätze (RuleSet) beispielsweise mittels XML-Dokumenten</li>
	<li>Visualisierung der Ergebnisse in geeigneter Form (Text, XML, HTML ...)</li>
	<li>Adapter für gängige Test-Werkzeuge(JUnit, TestNG, Spock ...) bereitstellen</li>
	<li>Erstellung eines Getting-Started-Guide für den Einstieg in das Framework</li> 
</ul>

Habe ich Dich neugierig gemacht? Dann schau doch mal in das <a href="https://github.com/codescape/bitvunit" target="_blank">Git-Repository</a> und teste Deine Webseite oder Webanwendung! Feedback, Verbesserungsvorschläge oder Mitarbeit sind natürlich herzlich willkommen.