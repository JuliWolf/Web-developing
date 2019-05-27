<?php
  require_once "NewsDB.class.php";
  require_once "delete_news.inc.php";
  // function __autoload($class){
  //   include_once $class.'.class.php'; 
  // }
  $news = new NewsDB();
  $errMsg = "";
  if($_SERVER["REQUEST_METHOD"]=="POST")
    require "save_news.inc.php";
?>
<!DOCTYPE html>
<html>
<head>
	<title>Новостная лента</title>
	<meta charset="utf-8" />
</head>
<body>
  <h1>Последние новости</h1>
  <?php
    if($errMsg)
      echo "<h3>$errMsg</h3>";
  ?>
  <form action="<?= $_SERVER['PHP_SELF']; ?>" method="post">
    Заголовок новости:<br />
    <input type="text" name="title" /><br />
    Выберите категорию:<br />
    <select name="category">
      <option value="1">Политика</option>
      <option value="2">Культура</option>
      <option value="3">Спорт</option>
    </select>
    <br />
    Текст новости:<br />
    <textarea name="description" cols="50" rows="5"></textarea><br />
    Источник:<br />
    <input type="text" name="source" /><br />
    <br />
    <input type="submit" value="Добавить!" />
</form>
<?php
  require "get_news.inc.php";
  foreach($posts as $news){
    ?>
    <p>Title: <?=$news['title']?></p>
    <p>Description: <?=$news['description']?></p>
    <p>Source: <a href="<?=$news['source']?>"><?=$news['source']?></a></p>
    <p>Date: <?=date("d-m-Y H:i",$news['datetime'])?></p>
    <a href="/news/news.php?id-to-delete=<?=$news['id']?>">Удалить</a>
    <hr>
<?    
  }
?>
</body>
</html>