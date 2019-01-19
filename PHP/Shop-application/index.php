<?
	ob_start();
	// error_reporting(E_ALL);
	require "admin/secure/session.inc.php";
	var_dump($_SESSION);
	require_once "inc/lib.inc.php";
	require_once "inc/data.inc.php";

	$id = strtolower(strip_tags(trim($_GET['id']))); 
	switch($id){
		case 'catalog': 
			$title = "Магазин";
			$header = "Список товаров";break;
		case 'add2cat':
			$title = "Добавление товара в каталог";
			$header = "Добавление товара в каталог";break;
		case 'basket';
			$title = "Корзина";
			$header = "Корзина";break;
		case 'createuser':
			$title = "Новый пользователь";
			$header = "Создание нового пользователя"; break;
		case 'authorization':
			$title = "Авторизация";
			$header = "Авторизация";break;
		case 'orderform':
			$title = "Оформление заказа";
			$header = "Оформление заказа";break;
		case 'saveorder':
			$title = "Сохранение данных заказа";
			$header = "Оформление заказа завершено";break;
		default:
			$title = "Сайт магазина";
			$header = "Главная";break;
	}
	if($id == 'authorization' or $id == 'createuser'){
		require_once "admin/secure/login.inc.php";
		require_once "admin/secure/session.inc.php";

	}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title><?=$title?></title>
	<!-- Последняя компиляция и сжатый CSS -->  
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

	<!-- Дополнение к теме -->  
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

	<link rel="stylesheet" href="style.css">
	<script type="text/javascript" src="/inc/jquery.js"></script>

</head>
<body>
	<div class="container-fluid">
		<div class="container">
			<div class="row head_row" id="head_row">
				<div class="col-md-6">LOGO</div>
				<div class="col-md-6 block_images">
					<a href="index.php?id=basket">
						<img src="https://autopolycolor.ru/images/cart-icon.png" style="width:20px; height:20px;">
					</a>
					<span id="totalQuantity"></span>
					<a href="index.php?id=authorization">
						<img src="https://globalschoolrank.com/images/login_rounded_right_filled1600.png" style="width:20px; height:20px;">
					</a>
					<a href="index.php?id=createuser">
						<img src="https://banner2.kisspng.com/20180616/st/kisspng-computer-icons-login-google-account-internet-clip-user-5b25d3b3d94249.7401456915292056838899.jpg" style="width:20px; height:20px;">
					</a>
				</div>
				<div class="col-md-12 menu-row">
					<?
						require_once "menu.php";
					?>

				</div>
			</div>
		</div>
	</div>
	<div class="container-fluid main-block">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div id="header">
					<!-- Верхняя часть страницы -->
						<h2><?=$header?></h2>
					<!-- Верхняя часть страницы -->
					</div>

					<div id="main-content">
						<!-- Основной контент -->
						<?php
						switch($id){
							case 'catalog':
								include 'content/catalog.php';break;
							case 'authorization':
								include 'content/authorization.php';break;
							case 'createuser':
								include 'content/create_user.php';break;
							case 'add2cat':
								include 'content/add2cat.php';break;
							case 'basket':
								include 'content/basket.php';break;
							case 'orderform':
								include 'content/orderform.php';break;
							case 'saveorder':
								include 'admin/saveorder.php';break;
							default:
								include'content/main-page.php';
						}
						?>
						<!-- Основной контент -->
					</div>	

				</div>

			</div>
		</div>
	</div>
		<hr>
	<div id="footer">
		<?
			require_once "footer.php";
		?>
	</div>


	<?ob_end_flush();?>

</body>
</html>