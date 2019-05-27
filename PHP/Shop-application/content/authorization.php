<?
require_once "admin/secure/secure.inc.php";
require "admin/secure/login.inc.php";
?>

<h3><?=$subtitle?></h3>
<form action="" method="post">
	<div class="login form-group">
		<label for="input-login"> Логин: </label>
		<input type="text" name="login" id="input-login" size="50" class="form-control" placeholder="Login" value="<?= $login?>">
	</div>
	<div class="password form-group">
		<label for="input-password">Пароль:</label>
		<input type="text" name="password" id="input-password" size="50" class="form-control" placeholder="Password">
	</div>
	<div class="submit form-group">
		<input type="submit" name="submit" id="input-submit" value="Войти" class="btn btn-default">
	</div>
</form>