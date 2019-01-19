<?php
$record_id = $_GET['id-to-delete'];
if(isset($record_id)){
	$newsDB = new NewsDB();
	$deleted = $newsDB->deleteNews($record_id);
	if(!$deleted)
		echo "Произошла ошибка при удалении новости";
	header("Location: news.php");
}