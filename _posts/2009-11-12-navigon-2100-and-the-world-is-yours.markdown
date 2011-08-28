---
layout: post
title: Navigon 2100 and the world is yours
tags: navigon application error navigon.exe
---

_And the world is yours…_ das möchte uns zumindest die Werbung weismachen. In der Realität sieht es leider nicht ganz so rosig aus und schon die nächste Seitenstraße kann plötzlich hinter einem “Fatal Application Error” verschwinden.

Dieses Schicksal ereilte gestern mitten auf der Autobahn auch mein Navigon 2100 max, welches bis auf die im Internet hinlänglich bekannten Macken ([langsames Auffinden der Satelliten](http://www.ciao.de/Navigon_2110_MAX__Test_8494724), [Vergessen der als Favoriten gespeicherten Ziele](http://forum.pocketnavigation.de/forum1000221-mobilenavigator-7-xx-pna/1138630-7-4-3-ist-da-was-ist-anders/#post2305406)…) in der Regel das tat, was es tun sollte…. bis gestern.

![Fatal Application Error](/images/2009-11-12/img_2607.jpg)

Seit diesem Moment gelingt es mir nicht mehr, das [Navigon](http://www.navigon.com) zum Navigieren zu überreden. Bei einem Wechsel vom Startbildschirm in die Navigation verabschiedet sich das Gerät mit einem kläglichen Laut und dieser Fehlermeldung:

> Fatal Application Error
> Application navigon.exe has performed an illegal operation and will be shut down. If the problem persists, contact the program vendor.
> 
> Programm: navigon.exe<br/>
> Exception: 0×80000002<br/>
> Address: 4C405B0C<br/>

Auf der Webseite von Navigon finden sich einige [Hinweise zur Behebung des Fehlers](http://www.navigon.com/portal/de/kundenservice/faq.html?id=1824&content_identifier=faq&page=1&faqTopic=Fatal%20application%20error).

Da weder ein Update der Software, noch ein Zurücksetzen auf die Werkseinstellungen und auch der Hardware Reset keinen Erfolg brachten, blieb nur noch der Griff zum Telefon und das Einreihen in die Warteschlange der Telefonhotline. Auch hier konnte man mir mit diesem Problem nicht weiterhelfen und so kam ich um die Einsendung des Navigationsgerätes nicht herum.

Im Nachhinein habe ich erfahren, dass sich das Problem durch das Löschen der Datei `RecentTargets.store` im Ordner `Favoriten` und einen anschließenden Hardware Reset lösen lassen soll.

Nach knapp drei Wochen halte ich das reparierte Gerät nun wieder in den Händen. Zu allererst habe ich mit der Software [Navigon Fresh](http://www.navigon.com/portal/de/karten_services/fresh.html) eine Sicherungskopie der Speicherkarte erstellt und bin so hoffentlich auf den nächsten Totalausfall der Software ausreichend vorbereitet.
