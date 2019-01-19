<?
	require "../inc/lib.inc.php";
	require "../inc/data.inc.php";

	if(!empty($_POST && $_FILES) ){

		// Проверка на соотвествие загруженного файла
		$file = $_FILES['productImage'];
		$check = can_upload($file);
		if($check === true){
			$name = $_POST['name'];
			$category = $_POST['category'];
			$price = $_POST['price'];
			$desc = $_POST['desc'];
			$img = make_uploads($file);
			if(!addItemToCatalog($name, $category, $price, $desc, $img)){
				echo "Произошла ошибка при добавлении продукта в каталог!";
			}else{
				header("Location: http://shop-application/index.php?id=add2cat");
				exit;
			}
			
		}
	}