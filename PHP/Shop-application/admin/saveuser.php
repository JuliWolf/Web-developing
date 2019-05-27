<?
if(!empty($_POST)){
	$name = trim(strip_tags($_POST['name']));
	$email = trim(strip_tags($_POST['email']));
	$password = trim($_POST['password']);
	$users = userExists();
	$is_unique = true;
	foreach($users as $user){
		if($user['name'] == $name || $user['email'] == $email){
			$is_unique = false;
		}
	} 
	if($is_unique){
		saveUser($name, $email, $password, 'client');
		$subtitle = "Пользователь создан.<br>";
	}else{
		$subtitle = "Указанный логин или email уже используются.<br>";
	}
}
?>