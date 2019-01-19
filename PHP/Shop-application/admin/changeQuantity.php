<?
	require "../inc/lib.inc.php";
	require "../inc/data.inc.php";

if($_GET["change_quantity"] && $_GET["id"]){
	$quantity = $_GET["change_quantity"];
	$id = $_GET["id"];
	$goods = myBasket();
	$sum = 0;
	$allItems = 0;

	foreach($goods as $arr){
		if($arr["id"] == $id){
			$price = $arr["price"];
			$sum += ($price *$quantity);
			$allItems += $quantity;
		}else{
			$sum += $arr['price']*$arr['quantity'];
			$allItems += $arr['quantity'];
		}
	}
	saveQuantity($id, $quantity);
	echo json_encode(["sum" => "$sum", "totalQuantity" => "$allItems"]);
}
