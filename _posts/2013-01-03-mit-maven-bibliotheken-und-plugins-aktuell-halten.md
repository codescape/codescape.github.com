---
layout: post
title: Mit Maven Bibliotheken und Plug-Ins aktuell halten
categories: java maven software
date: 3013-01-03 01:00:00 +1000
---

Seit [Maven](http://maven.apache.org/) ist die einfache Verwaltung von Abhängigkeiten zu bestimmten Bibliotheken innerhalb eines Projektes als auch in großen Projekten bestehend aus mehreren Modulen keine Hexenkunst mehr. Ganz entgegen dem Sprichwort "Aller Anfang ist schwer" ist die erste Abhängigkeit zu einer Bibliothek wie JUnit schnell eingepflegt. Das sieht dann ungefähr wie folgt aus:

    <dependencies>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.11</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
