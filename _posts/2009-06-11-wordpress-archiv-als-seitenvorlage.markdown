---
layout: post
title: WordPress - Archiv als Seitenvorlage
tags:
---

Heute habe ich meinen Blog um ein Archiv der bisher erstellten Blog-Einträge erweitert. Hierbei handelt es sich um eine Seitenvorlage oder in der englischen WordPress-Fachsprache um ein [Page Template](http://codex.wordpress.org/Pages#Page_Templates) als Bestandteil des Theme, also des verwendeten Designs.

In diesem Blog-Eintrag möchte ich kurz das Vorgehen zur Erstellung eines Archivs, als Beispiel für eine Seitenvorlage mit besonderer Funktionalität, beschreiben. Zuerst legen wir im Verzeichnis unseres Theme (in meinem Fall /wp-content/themes/stefanglase/) eine neue Datei an. Für ein Archiv bietet sich unter Berücksichtigung der von WordPress [reservierten Namen](http://codex.wordpress.org/Theme_Development#Theme_Template_Files_List) für Seitenvorlagen der Dateiname archives.php an.

Der Kopfbereich der Datei archives.php muss nun die folgende Form haben, um als Seitenvorlage von WordPress erkannt zu werden:

{% highlight php %}
<?php
/*
Template Name: Archives
*/
?>
{% endhighlight %}

Unterhalb des Kommentars wird im Anschluss der Code eingefügt, welcher bei der Verwendung der Seitenvorlage verarbeitet werden soll. Für ein Archiv inklusive Anzeige der Anzahl der Kategorien und Beiträge benötigen wir in etwa die folgende Form:

{% highlight php %}
<?php
/*
Template Name: Archives
*/

/* Anzahl der publizierten Beiträge ermitteln */
$post_count = $wpdb->get_var("SELECT COUNT(*) FROM $wpdb->posts WHERE post_status = 'publish' AND post_type = 'post'");
if ( 0 < $post_count )
  $post_count = number_format($post_count, 0, ',', '.');

/* Anzahl der Kategorien mit mindestens einem Beitrag ermitteln */
$category_count = $wpdb->get_var("SELECT COUNT(*) FROM $wpdb->term_taxonomy WHERE taxonomy = 'category' AND count > 0");
if ( 0 < $category_count )
  $category_count = number_format($category_count, 0, ',', '.');

/* Text für die Anzeige der Beitrags- und Kategorienanzahl erzeugen */
$format = 'Es wurden %s Artikel in %s Kategorien gefunden.';
$ergebnis = sprintf( $format, $post_count, $category_count );
?>

<?php
/* Kopfbereich anzeigen */
get_header();
?>

<div id="content">
  <h2>Archiv</h2>
  <h3><?php echo $ergebnis; ?></h3> 
  <ul id="archivelist">
  <?php
	/* In einer Schleife über alle Beiträge iterieren */
	$all_posts = get_posts('numberposts=-1');
	/* Jeden Beitrag mit Titel und Datum verlinken */
	foreach( $all_posts as $post ) :
  ?>
	  <li><?php the_time('d.m.Y'); ?>: <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></li>
  <?php
	endforeach;
  ?>
  </ul>
</div>

<?php
/* Seitenleiste anzeigen */
get_sidebar();
/* Fußbereich anzeigen */
get_footer();
?>
{% endhighlight %}

Mit grundlegenden HTML- und PHP-Kenntnissen und mit Hilfe der Kommentare ist der oben dargestellte Code einigermaßen selbsterklärend und erzeugt das gewünschte Archiv. Kurz erklärt wird in den Zeilen 6 bis 18 zuerst die Anzahl der Beiträge und der verwendeten Kategorien ermittelt und hieraus eine Meldung generiert. Der Kopfbereich des Theme wird in den Zeilen 21 bis 24 vor der Auflistung der Beiträge in den Zeilen 26 bis 41 ausgegeben. Im Anschluss wird in den Zeilen 43 bis 48 zuerst die Seitenleiste und anschließend der Fußbereich des Theme ausgegeben.

Ist diese Datei hochgeladen und das Theme aktiv, so erscheint bei der Erstellung einer neuen Seite in der Administration im Bereich der Eigenschaften (“Attributes” im englischen WordPress) eine Auswahlliste vorhandener Seitenvorlagen, die für die Erzeugung der aktuellen Seite verwendet werden können.

![Seitenvorlage auswählen](/images/2009-06-11/seitenvorlage.gif)

Anmerkung: Ist hier keine Auswahlliste zu sehen oder die erstellte Seitenvorlage findet sich nicht in der Auswahlliste, so genügt es in der Regel kurz ein anderes Theme zu aktivieren und sofort wieder zum alten Theme zurück zu wechseln.

Um nun aus unserer Vorlage eine wirkliche Seite zu erstellen, gehen wir wie folgt vor: Wir legen zunächst eine neue Seite an, geben dieser Seite einen Titel (z.B. “Archiv”) und speichern und veröffentlichen die Seite nach Auswahl der Seitenvorlage “Archives”. Geschafft! Unser Blog hat nun einen Link zum Archiv in der Liste der Seiten!

Bei Fragen und Anregungen freue ich mich über euren Kommentar!
