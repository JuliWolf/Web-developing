<?
	$mysqli = new mysqli("localhost", "root", "", "test_bd");
			
	$res = $mysqli->query('SELECT * FROM person');
	while($arr_res[] = $res->fetch_assoc())
	$json_res = json_encode($arr_res);
	header('Content-Type: application/json');
	
	echo $json_res;
