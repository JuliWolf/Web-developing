
	<form  action="../admin/save2cat.php" method="POST" enctype="multipart/form-data">
		<div class="name form-group">
			<label for="input-name">Название: </label>
			<input type="text" name="name" id="input-name" class="form-control" placeholder="Name">
		</div>
		<div class="category form-group">
			<label for="input-category">Категория: </label> 
			<input type="text" name="category" id="input-category" class="form-control" placeholder="Category">
		</div>
		<div class="price form-group">
			<label for="input-price">Цена: </label>
			<input type="text" name="price" id="input-price" class="form-control" placeholder="Price">
		</div>
		<div class="desk form-group">
			<label for="input-description">Описание: </label>
			<input type="text" name="desc" id="input-description" class="form-control" placeholder="Description">
		</div>
		<div class="desk form-group">
			<input name="productImage" type="file" />
			<input type="hidden" name="MAX_FILE_SIZE" value="30000" />
		</div>
		<div class="submit form-group">
			<input type="submit" value="Добавить" class="btn btn-default">
		</div>
	</form>
	