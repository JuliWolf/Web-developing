<?
	$json = json_decode(file_get_contents('http://sknt.ru/job/frontend/data.json'), true);
	array_shift($json);