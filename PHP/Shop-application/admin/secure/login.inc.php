<?
require_once "secure.inc.php";
if(!empty($_POST)){
	$name = trim(strip_tags($_POST['login']));
	$pw = trim(strip_tags($_POST['password']));
	if(!checkUser($name, $pw)){
		$subtitle = "Введены неправльное имя или пароль";
	}else{
		$subtitle = "Авторизация прошла успешно";
	}
}
?>