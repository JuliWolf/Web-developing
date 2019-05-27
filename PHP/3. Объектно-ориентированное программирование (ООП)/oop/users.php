<?php
function __autoload($class){
	include 'classes/'.$class.'.class.php';
}

$user = new User("John", "login_John", 123);
$user1 = new User("Jane", "login_Jane", 321);
$user2 = new User("Mike", "login_Mike", 456);

$user->showInfo();
$user1->showInfo();
$user2->showInfo();



$user3 = new SuperUser("Greg", "Greg_login", "123321", "Super-man");
$user3->getInfo();
$user3->showInfo();

echo "Всего обычных пользователей: " . User::$count . "<br>";
echo "Всего супер-пользователей: " . SuperUser::$count . "<br>";
