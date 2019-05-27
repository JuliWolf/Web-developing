<?
require_once "admin/secure/secure.inc.php";
require "admin/saveuser.php";
?>
<h3><?=$subtitle?></h3>

<form action="" method='post'>
	<div class="form-group">
		<label for="txtUser">Логин:</label>
		<input type="text" name="name" id="txtUser" class="form-control" placeholder="Login">
	</div>
	<div class="form-group">
		<label for="txtEmail">Email:</label>
		<input type="text" name="email" id="txtEmail" class="form-control" placeholder="Email">
	</div>
	<div class="form-group">
		<label for="txtString">Пароль:</label>
		<input type="text" name="password" id="txtString" class="form-control" placeholder="password">
	</div>
	<div>
		<button type="submit" class="btn btn-default">Создать</button>
	</div>

</form>