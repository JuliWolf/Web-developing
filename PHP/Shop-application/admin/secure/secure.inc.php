<?
function userExists(){
	global $link;
	$sql = "SELECT id, name, email, password FROM users";
	if(!$result = mysqli_query($link, $sql))
		return false;
	$users = makeArray($result);
	return $users;
}
function makeArray($data){
	$arr = [];
	while($row = mysqli_fetch_ASSOC($data)){
		$arr[] = $row;
	}
	return $arr;
}

function checkUser($name, $pw){
	global $link;
	$sql = "SELECT password FROM users WHERE name='$name'";
	if(!$result = mysqli_query($link, $sql))
		return false;
	$user = mysqli_fetch_ASSOC($result);
	return checkHash($pw, $user['password']);
}


function checkHash($password, $hash){
	return password_verify(trim($password), trim($hash));
}

function getHash($pw){
	$hash = password_hash($pw, PASSWORD_BCRYPT);
	return trim($hash);
}

function saveUser($name, $email, $pw, $status){
	global $link;
	$hash = password_hash($pw, PASSWORD_BCRYPT);
	$sql = "INSERT INTO users(name, email, password, status)
			VALUES(?,?,?,?)";
	if(!$stmt = mysqli_prepare($link, $sql))
		return false;
	mysqli_stmt_bind_param($stmt, 'ssss', $name, $email, $hash, $status);
	mysqli_stmt_execute($stmt);
	mysqli_stmt_close($stmt);
	return true;
}

?>