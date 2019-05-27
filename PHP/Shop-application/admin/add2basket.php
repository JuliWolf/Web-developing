<?
	require "../inc/lib.inc.php";
	require "../inc/data.inc.php";

	$id = $_GET['id'];
	if($id){
		add2Basket($id);
	}
	header("Location: http://shop-application/index.php?id=catalog");
	exit;
