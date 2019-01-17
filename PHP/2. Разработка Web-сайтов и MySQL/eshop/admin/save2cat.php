<?php
	// подключение библиотек
	require "secure/session.inc.php";
	require "../inc/config.inc.php";
	require "../inc/lib.inc.php";


	if (!empty($_POST)){
		$title = $_POST["title"];
		$author = $_POST["author"];
		$pubyear = $_POST["pubyear"];
		$price = $_POST["price"];

		if (!addItemToCatalog($title, $author, $pubyear, $price)){
			echo "Произошла ошибка при добавлении товара в каталог";
		}else{
			header("Location: add2cat.php");
			exit;
		}
	}
