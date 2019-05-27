<?
if(is_file($_SERVER['DOCUMENT_ROOT'].'/log/path.log')){
	$lines = file($_SERVER['DOCUMENT_ROOT'].'/log/path.log');
	$number = 1;
	foreach($lines as $value){
		$text = explode("|", $value);
		echo $number.". ".date("d-m-Y H:i:s",(int)$value)." - ".$text[1]. $text[2]."<br>";
		$number++;
	}
}
