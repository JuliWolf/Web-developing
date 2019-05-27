<?php
	if(!$news->getNews()){

		$errMsg = "Произошла ошибка при выводе новостной ленты";
	}else{
		$posts = $news->getNews();
		echo "Количество новостей: ". count($posts). "<br><br>";
	}
