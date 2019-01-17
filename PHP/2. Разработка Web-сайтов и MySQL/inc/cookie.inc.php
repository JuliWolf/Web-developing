<?

$lastVisit = "";
$visitCounter = 0;

// if(isset($_COOKIE["lastVisit"])){
// 	$lastVisit = strftime('%d-%m-%Y',$_COOKIE["lastVisit"]);
// 	setcookie('lastVisit', $_COOKIE['lastVisit'], time()+3600);
// }
// setcookie('lastVisit', time(), time()+3600);

// if(isset($_COOKIE["visitCounter"])){
// 	$visitCounter = $_COOKIE["visitCounter"];
// 	setcookie('visitCounter', $visitCounter+1, time()+3600);
// }else{
// 	setcookie('visitCounter', $_COOKIE["visitCounter"], time()+3600);
// }

if(isset($_COOKIE["visitCounter"])){
	$visitCounter = $_COOKIE["visitCounter"];
}
$visitCounter++;

if(isset($_COOKIE["lastVisit"])){
	$lastVisit = date('d-m-Y H-i-s',$_COOKIE["lastVisit"]);
}
if(date('d-m-Y',$_COOKIE["lastVisit"]) != date("d-m-Y")){
	setcookie('visitCounter', $visitCounter, time()+36000);
	setcookie('lastVisit', time(), time()+36000);
}

