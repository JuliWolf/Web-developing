<?
// Приветствие
$hour = (int)strftime("%H");
$welcome = "";
if(( 0 <= $hour ) && ( $hour <= 6 )):
  $welcome = "Доброе ночи";
elseif( ($hour > 6 ) && ( $hour <= 12)):
  $welcome = "Доброе утро";
elseif ( ($hour > 12 ) && ( $hour <= 18 ) ):
  $welcome = "Добрый вечер";
elseif( ( $hour > 18 ) && ( $hour <= 23 ) ):
  $welcome = "Добрый вечер";
else:
  $welcome = "Неизвестное время";
endif;

// Установка локали и даты
  setlocale(LC_ALL, "russian");
  $day = strftime("%d");
  $mon = strftime("%B");
  $mon = iconv("windows-1251", "utf-8", $mon);
  $year = strftime("%Y");

 // Меню
$nav = [
  ["link" => "index.php", "text" => "Домой"],
  ["link" => "index.php?id=about", "text" => "О нас"],
  ["link" => "index.php?id=contact", "text" => "Контакты"],
  ["link" => "index.php?id=table", "text" => "Таблица умножения"],
  ["link" => "index.php?id=calc", "text" => "Калькулятор"]
];

const ERR_ON_DRAW_MENU = "Sorry .... ";

?>