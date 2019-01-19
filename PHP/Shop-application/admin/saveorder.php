<?

	if(!empty($_POST)){
		$name = $_POST["name"];
		$email = $_POST["email"];
		$address = $_POST["address"];
		$phone = $_POST["phone"];
		$dt = time();
		$oid = $basket['orderid'];

		$order = "$name|$email|$phone|$address|$oid|$dt\n";
		file_put_contents("admin/".ORDERS_LOG, $order, FILE_APPEND);
		saveOrder($dt);
	}

?>
<p>Ваш заказ принят.</p>
<p><a href="http://shop-application/index.php?id=catalog">Вернуться в каталог товаров</a></p>

