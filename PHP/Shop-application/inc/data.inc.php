<?
// Меню основное
	$menu = [
		["link" => "index.php", "text" => "О Магазине"],
		["link" => "index.php?id=catalog", "text" => "Список товаров"]
	];
	$subMenu = [
		["link" => "index.php?id=add2cat", "text" => "Добавить товары в каталог"]
	];

	// Константы для БД
	define('DB_HOST', 'localhost');
	define('DB_LOGIN', 'root');
	define('DB_PASSWORD', '');
	define('DB_NAME', 'Shop_app');
	define('ORDERS_LOG', 'orders.log');

	$link = mysqli_connect(DB_HOST, DB_LOGIN, DB_PASSWORD, DB_NAME);
	if(!$link){
		echo mysqli_connect_errno();
		echo "<br>";
		echo mysqli_connect_error();
	}
	$basket = [];
	$count = 0;
	basketInit();