<?

class User extends UserAbstract{
	public $name;
	public $login;
	public $password;
	public static $count = 0;

	function __construct($name, $login, $password){
		$this->name = $name;
		$this->login = $login;
		$this->password = $password;
		++self::$count;
	}
	function __destruct(){
		echo "Пользователь $this->login был удален.<br>";
	}
	function showInfo(){
		echo "Имя: $this->name <br> Логин: $this->login <br> Пароль: $this->password <hr>";
	}
	
}