<?

class SuperUser extends User implements ISuperUser{
	public $role;
	public static $count = 0;
	function __construct($name, $login, $password, $role){
		parent::__construct($name, $login, $password);
		$this->role = $role;
		++self::$count;
	}
	function showInfo(){
		echo "Имя: $this->name <br> Логин: $this->login <br> Пароль: $this->password <br> Роль: {$this->role}<hr>";
	}
	function getInfo(){
		print_r((array)$this);
		echo "<br>";
	}
	
}