<HTML>
<HEAD>
<TITLE>fopen</TITLE>
</HEAD>
<BODY>
<?
$f = fopen("file.txt", "r") or die("Не могу открыть файл");

// Закрытие потока
fclose($f);
?>
</BODY>
</HTML>