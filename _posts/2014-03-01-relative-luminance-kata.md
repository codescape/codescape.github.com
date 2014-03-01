---
layout: post
title: Relative Luminance Kata
categories: craftsmanship software coding
---

### Was sind eigentlich Coding Katas?

Katas mag der Eine oder Andere aus fernöstlichen Kampfsportarten wie beispielsweise Karate kennen. Eine Kata stellt dabei einen fest definierten Bewegungsablauf im Kampf gegen imaginäre Gegner dar. Dieser Ablauf wird durch Wiederholungen so oft eingeübt, bis der Ablauf in Fleisch und Blut übergeht und somit auch in realen Kämpfen abgerufen werden kann.

Das Prinzip der Katas hat [Dave Thomas](http://codekata.pragprog.com/) auf die Softwareentwicklung übertragen und die sogenannten Coding Katas geprägt. Coding Katas stellen eine Programmierübung dar, anhand derer wir beispielsweise die  Verwendung der Entwicklungsumgebung, die Formulierung von Testfällen oder das Refactoring von Code trainieren können.

### Relative Luminance Kata

Einmal im Monat treffen wir uns bei [OPITZ CONSULTING](http://www.opitz-consulting.com/) um uns gemeinsam an einem Programmierabend beispielsweise der Durchführung von Coding Katas zu widmen. Da wir bei unserem letzten Event auch einige Kollegen mit Fokus auf PL/SQL dabei hatten, habe ich mir eine eher algorithmische Aufgabe ausgedacht, über die ich vor einiger Zeit im Rahmen der Erstellung meiner kleinen Bibliothek [BitvUnit](http://bitvunit.codescape.de/) zur Sicherstellung von Regeln der Barrierefreiheit gestolpert bin.

Die [Relative Luminance Kata][kata] besteht aus vier inkrementellen Schritten, die im Erfolgsfall zu einem Programm führen, mit welchem bei Eingabe von zwei Farbcodes(CMYK oder RGB) das Kontrastverhältnis basierend auf der relativen Leuchtkraft beider Farben berechnet und mit den Mindestanforderungen der [WCAG 2.0][wcag] abgeglichen werden können.

### Relative Leuchtkraft

Im ersten Schritt gilt es die Relative Leuchtkraft für einen Farbwert zu berechnen. Mögliche Ergebnisse variieren dabei zwischen 0 (dunkelste Farbe) und 1 (hellste Farbe). Die Formel zur Berechnung der Relativen Leuchtwert lautet wie folgt:

    L = 0.2126 * R + 0.7152 * G + 0.0722 * B

wobei für R, G und B die folgende Formel gilt:

    Wenn RsRGB <= 0.03928 dann R = RsRGB/12.92 ansonsten R = ((RsRGB+0.055)/1.055) ^ 2.4
    Wenn GsRGB <= 0.03928 dann G = GsRGB/12.92 ansonsten G = ((GsRGB+0.055)/1.055) ^ 2.4
    Wenn BsRGB <= 0.03928 dann B = BsRGB/12.92 ansonsten B = ((BsRGB+0.055)/1.055) ^ 2.4

und die RsRGB, GsRGB und BsRGB wie folgt definiert sind:

    RsRGB = R8bit/255
    GsRGB = G8bit/255
    BsRGB = B8bit/255

In einfachem Groovy Code könnte ein mögliches Zwischenergebnis dann beispielsweise so aussehen:

    def relativeLuminance(def red, def green, def blue) {
        0.2126 * weight(red) + 0.7152 * weight(green) + 0.0722 * weight(blue)
    }

    def weight(def color) {
        def sRGB = color / 255
        if (sRGB <= 0.03928)
            sRGB / 12.92
        else
            Math.pow((sRGB + 0.055) / 1.055, 2.4)
    }

    println relativeLuminance(0, 0, 0)
    println relativeLuminance(64, 128, 0)
    println relativeLuminance(255,255,255)

### Kontrastverhältnis 

Im zweiten Schritt soll das Kontrastverhältnis zweier Farben auf Basis der nun entwickelten Funktionalität zur Berechnung der Relativen Leuchtkraft berechnet werden. Dazu gilt die folgende Formel:

    (L1 + 0.05) / (L2 + 0.05)

wobei für L1 der Wert der Relativen Leuchtkraft der helleren Farbe und für L2 der Wert der Relativen Leuchtkraft der dunkleren Farbe eingesetzt wird. Auch das lässt sich mit Groovy recht einfach ausdrücken und nach einem kleinen Refactoring ist dabei noch ein Color-Objekt herausgefallen:

    def contrastRatio(Color first, Color second) {
        def firstLum = relativeLuminance(first)
        def secondLum = relativeLuminance(second)
        if (firstLum > secondLum)
            (firstLum + 0.05) / (secondLum + 0.05)
        else
            (secondLum + 0.05) / (firstLum + 0.05)
    }

    println contrastRatio(
        new Color(red: 0, green: 0, blue: 0),
        new Color(red: 255, green: 255, blue: 255)
    )

Das Kontrastverhältnis variiert mit dieser Formel zwischen 1:1 (kein Kontrast, z.B. schwarzer Text auf schwarzem Hintergrund) bis hin zu 21:1 (maximaler Kontrast, z.B. weißer Text auf schwarzem Hintergrund).

### Minimales Kontrastverhältnis

Der dritte Schritt ist für sich gesehen ebenfalls recht einfach, hier geht es in erster Linie darum die passende API für die zu erzeugende(n) Methode(n) zu finden. Es soll das Ergebnis der vorherigen Berechnung verwendet werden, um zu bestimmen, ob die minimalen Anforderungen an das Kontrastverhältnis erzielt wurden. Diese sind mit der folgenden Regel definiert:

    3:1 - Minimaler Kontrast für großen Text (mindestens Schriftgröße 18pt oder 14pt bold)
    4.5:1 - Minimaler Kontrast für normalen Text
    7:1 - Verbesserter Kontrast für normalen Text

### Eingabe von CMYK-Werten neben RGB-Werten erlauben

In diesem vierten und letzten Schritt soll das Programm so erweitert werden, dass sowohl die Eingabe von RGB- als auch CMYK-Farbcodes unterstützt wird. Um CMYK-Farbwerte in RGB-Werte umzurechnen müssen die drei folgenden Formeln verwendet werden:

    R = 255 × (1 - C) × (1 - K)
    G = 255 × (1 - M) × (1 - K)
    B = 255 × (1 - Y) × (1 - K)

wobei die Werte von C(yan), M(agenta), Y(ellow) und K(ey) im Bereich von 0 bis 1 liegen dürfen.

### Fazit

Wir haben dieses Coding Kata mit 14 Teilnehmern in den verschiedensten Programmiersprachen (Java, JavaScript, Groovy, PL/SQL und Clojure) mehr oder minder erfolgreich in der vorgegebenen Zeit durchexerziert und beim anschließenden gemeinsamen Code Reading interessante Unterschiede und Parallelen zwischen den einzelnen Lösungen entdecken können.

Wem es an dieser Stelle in den Fingern kribbelt und wer es selber einmal ausprobieren möchte, kann mein [Relative Luminance Kata][kata] Repository als Ausgangsbasis nehmen und hat so alle Regeln in einer Datei zusammengefasst. Happy Coding!

  [kata]:https://github.com/codescape/relative-luminance-kata/
  [wcag]:http://www.w3.org/TR/2008/REC-WCAG20-20081211/
