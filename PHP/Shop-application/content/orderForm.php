
<form action="http://shop-application/index.php?id=saveorder" method="post">
	<div class="name form-group">
		<label for="input-name"> Заказчик: </label>
		<input type="text" name="name" id="input-name" size="50" class="form-control" placeholder="Name">
	</div>
	<div class="password form-group">
		<label for="input-email">Email:</label>
		<input type="text" name="email" id="input-email" size="50" class="form-control" placeholder="Email">
	</div>
	<div class="address form-group">
		<label for="input-address">Адрес:</label>
		<input type="text" name="address" id="input-address" size="50" class="form-control" placeholder="Address">
	</div>
	<div class="address form-group">
		<label for="input-phone">Телефон:</label>
		<input type="text" name="phone" id="input-phone" size="50" class="form-control" placeholder="Address">
	</div>
	<div class="submit form-group">
		<input type="submit" name="submit" id="input-submit" value="Заказать" class="btn btn-default">
	</div>
</form>