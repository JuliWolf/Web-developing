<?php
/* Основные настройки */
define('DB_HOST', 'localhost');
define('DB_LOGIN', 'root');
define('DB_PASSWORD','');
define('DB_NAME','gbook');

$link = mysqli_connect(DB_HOST, DB_LOGIN, DB_PASSWORD, DB_NAME);
/* Основные настройки */


/* Сохранение записи в БД */
if (!empty($_POST)){
	$name = $_POST["name"];
	$email = $_POST["email"];
	$msg = $_POST["msg"];

	$sql = "INSERT INTO msgs (name, email, msg) 
		VALUES ('$name', '$email', '$msg')";
	$result = mysqli_query($link, $sql);
	header("Location: /inc/gbook.inc.php");
}

/* Сохранение записи в БД */


/* Удаление записи из БД */
if(!empty($_GET)){
	$del_sql = "DELETE FROM msgs WHERE id = ".$_GET['id'];
	$result = mysqli_query($link, $del_sql);
	header("Location: /inc/gbook.inc.php");
}

/* Удаление записи из БД */
?>
<h3>Оставьте запись в нашей Гостевой книге</h3>

<form method="post" action="<?= $_SERVER['REQUEST_URI']?>">
Имя: <br /><input type="text" name="name" /><br />
Email: <br /><input type="text" name="email" /><br />
Сообщение: <br /><textarea name="msg"></textarea><br />

<br/>

<input type="submit" value="Отправить!" />

</form>
<?php
	/* Вывод записей из БД */
	$asql="SELECT id, name, email, msg, UNIX_TIMESTAMP(datetime) as dt
		 FROM msgs
		 ORDER BY id DESC";

	$res = mysqli_query($link, $asql);
	$msgs = [];

	while($row = mysqli_fetch_array($res,MYSQLI_ASSOC)){
		$msgs[] = $row;
	}

	mysqli_close($link);
	echo "<p>Всего записей в гостевой книге: ".count($msgs)."</p>";

	/* Вывод записей из БД */
?>


<?foreach($msgs as $m):?>
	<?if(!empty($m['name'])):?>
		<p>	User: <b><?=$m['name']?></b> 
			with email: <b><?=$m['email']?></b>
			leaves a message: <b><?=$m['msg']?></b>	
			<a href="/inc/gbook.inc.php?id=<?=$m['id']?>">Delete</a>
		</p>
	<?endif?>
<?endforeach?>