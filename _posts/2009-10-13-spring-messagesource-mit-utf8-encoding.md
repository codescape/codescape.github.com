---
layout: post
title: Spring MessageSource mit UTF-8 Encoding
category: softwareentwicklung
tags: spring java messagesource resourcebundle utf8
---

Dieser Artikel erklärt das Vorgehen, wenn bei der Internationalisierung von Spring-Anwendungen die Texte innerhalb von \*.properties-Dateien direkt im UTF-8 Encoding abgelegt und nicht auf das im JDK befindliche Werkzeug [native2ascii] zurückgegriffen werden soll.

Die Konfiguration der Standard-Implementierung im Spring-Umfeld sieht bei der Verwendung eines [ResourceBundle] im ISO-8859-1 Encoding in der Regel wie folgt aus:

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-2.5.xsd">

  <bean id="messageSource" class="org.springframework.context.support.ResourceBundleMessageSource">
    <property name="basename" value="messages"/>
  </bean>

</beans>
{% endhighlight %}

Von der häufig verwendeten Standard-Implementierung `ResourceBundleMessageSource`, welche intern auf die Klasse `java.util.ResourceBundle` zurückgreift, wird allerdings lediglich das ISO-8859-1 Encoding unterstützt.

Als Alternative bietet sich daher der Einsatz der Klasse `ReloadableResourceBundleMessageSource` für die Bereitstellung des [ResourceBundle] an. An dieser Klasse lässt sich eine zusätzliche Eigenschaft `defaultEncoding` definieren mit deren Hilfe das Standard-Encoding für die zugrunde liegenden MessageBundle-Dateien definiert werden kann.

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-2.5.xsd">

  <bean id="messageSource" class="org.springframework.context.support.ReloadableResourceBundleMessageSource">
    <property name="basename" value="messages" />
    <property name="defaultEncoding" value="UTF-8" />
  </bean>

</beans>
{% endhighlight %}

In unserem `ResourceBundle` können wir nun unter Verwendung des UTF-8 Encoding beispielsweise “Hallo Welt” unter anderem auf Hebräisch hinterlegen und aus der Anwendung darauf zugreifen.

{% highlight properties %}
// messages_en.properties
example = hello world
// messages_de.properties
example = Hallo Welt
// messages_iw.properties
example = שלום העולם
{% endhighlight %}

Ein simpler Test mit dem oben konfigurierten [ApplicationContext] zeigt den Zugriff auf die internationalisierten Texte:

{% highlight java %}
package de.stefanglase.experimental.utf8;

import static org.junit.Assert.assertEquals;

import java.util.Locale;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "/config-application.xml")
public class TestUTF8MessageSource {

    private static final String GERMAN = "Hallo Welt";
    private static final String ENGLISH = "hello world";
    private static final String HEBREW = "שלום העולם";

    @Autowired
    private MessageSource messageSource;

    @Test
    public void testGetMessageForGermanLocale() {
        assertEquals(GERMAN, messageSource.getMessage("example", null, Locale.GERMAN));
    }

    @Test
    public void testGetMessageForEnglishLocale() {
        assertEquals(ENGLISH, messageSource.getMessage("example", null, Locale.ENGLISH));
    }

    @Test
    public void testGetMessageForHebrewLocale() {
        assertEquals(HEBREW, messageSource.getMessage("example", null, new Locale("IW")));
    }

}
{% endhighlight %}

Mit der Klasse `ReloadableResourceBundleMessageSource` ist es zudem auch möglich, Properties-Dateien in unterschiedlichen Encodings zu hinterlegen. Über die Eigenschaft `fileEncodings` besteht die Möglichkeit, das Encoding dateispezifisch vorzunehmen.

[native2ascii]: http://download.oracle.com/javase/1.4.2/docs/tooldocs/windows/native2ascii.html
[ResourceBundle]: http://download.oracle.com/javase/6/docs/api/java/util/ResourceBundle.html
[ApplicationContext]: http://static.springsource.org/spring/docs/3.0.x/api/org/springframework/context/ApplicationContext.html
