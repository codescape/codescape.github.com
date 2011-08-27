---
layout: post
title: WordPress - Theme mit eigenem Suchformular
tags: wordpress php suche suchformular suchfeld
---

WordPress kommt bereits von Haus aus mit einer integrierten Suchfunktion, die beispielsweise über Widgets in das verwendete WordPress Theme eingebunden werden kann. Das Suchformular in WordPress wird über den Befehl `get_search_form();` eingebunden.

![Traveller von asifthebes](/images/2010-02-25/921297_20318911.jpg)

Zuerst versucht dieser Befehl eine Datei mit dem Namen `searchform.php` im aktuell verwendeten Theme zu finden. Findet WordPress diese Datei nicht, so wird alternativ auf die Datei `general-templates.php` im Ordner wp-includes zurückgegriffen und das Standard-Suchformular erzeugt.

### Standard-Suchformular als Vorlage verwenden

Um ein eigenes Suchformular zu erstellen, orientieren wir uns am besten am Aufbau des Standard-Suchformulars, welches fest in WordPress integriert ist und in der Datei general-templates.php gefunden werden kann. Dieses schaut wie folgt aus:

{% highlight html %}
$form = '<form role="search" method="get" id="searchform" action="' . get_option('home') . '/" >
  <div>
    <label class="screen-reader-text" for="s">' . __('Search for:') . '</label>
    <input type="text" value="' . esc_attr(apply_filters('the_search_query', get_search_query())) . '" name="s" id="s" />
    <input type="submit" id="searchsubmit" value="'. esc_attr__('Search') .'" />
  </div>
</form>';
{% endhighlight %}

### Suchformular an eigene Bedürfnisse anpassen

In der neu erstellten Datei `searchform.php` prüfen wir nun zuerst, ob eine Suche ausgeführt und ein Suchbegriff eingegeben wurde, damit wir beim Aufbau der Ergebnisseite den eingegebenen Suchbegriff erneut anzeigen können. Wurde kein Suchebegriff eingegeben, so wollen wir wieder den Standardtext “Suchbegriff eingeben…” ausgeben.

Mit Hilfe des JavaScript-Events `onblur` schreiben wir, sofern das Suchfeld ohne Eingabe verlassen wird, den Originaltext zurück. Umgekehrt löschen wir mit Hilfe des JavaScript-Events onfocus beim Fokussieren des Eingabefeldes den Text, sofern es sich um den voreingestellten Originaltext handelt und machen so die Eingabe für neue Suchbegriffe frei.

{% highlight php %}
<?php
/*
 * Zeichenkette für den Standardtext definieren sowie den gegebenenfalls
 * eingegebenen Suchbegriff speichern. Alternativ den Standardtext
 * anzeigen, falls kein Suchbegriff eingegeben wurde.
 */
$querystring = esc_attr(apply_filters('the_search_query', get_search_query()));
$searchstring = "Suchbegriff eingeben...";
if (empty($querystring)) { $querystring = $searchstring; }
?>
<form role="search" method="get" id="searchform" action="<?php echo get_option('home'); ?>">
    <div>
        <label class="screen-reader-text" for="s"><?php echo __('Search for:'); ?></label>
        <input type="text" name="s" id="s" value="<?php echo $querystring; ?>"
            onblur="if (this.value == '') { this.value = '<?php echo $searchstring; ?>'; }"
            onfocus="if (this.value == '<?php echo $searchstring; ?>') { this.value = ''; }" />
        <input type="submit" id="searchsubmit" value="<?php echo esc_attr(__('Search')); ?>" />
    </div>
</form>
{% endhighlight %}

Das dargestellte Script speichern wir im Verzeichnis unseres Themes und schon ist unser eigenes Suchformular bereit für den Einsatz!

Die Funktionsweise dieses angepassten Suchformulars kann in meinem Blog ausprobiert werden. Ich habe zusätzlich mittels der CSS-Eigenschaft `display:none;` die Klasse `screen-reader-text` unsichtbar gemacht anstatt das Label aus dem Code zu nehmen. So bleibt die Möglichkeit auf einfache Weise das Aussehen zu ändern und später wieder von dem Label Gebrauch zu machen.
