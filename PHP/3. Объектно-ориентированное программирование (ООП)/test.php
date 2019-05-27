<?
// *******************************************************************************************************


/*----------Объектно-ориентированное программирование----------*/


/*----------Принципы ООП----------*/

// 1.Инкапсуляция
// 2.Наследование
// 3.


/*----------Классы и объекты----------*/

// Класс
// Для названий следуют использовать CamelCase
// class Pet{
//  // тело класса - свойства
// }

// Скобки можно не указывать
// $obj1 = new Pet(); //переменная
// $obj2 = new Pet;

// echo gettype($obj1);// object
// echo is_object($obj2);// 1


/*----------Свойства объекта----------*/

// class Pet{
// 	public $name;
// 	public $type = "unknown";
// }

// $cat = new Pet();
// $dog = new Pet;

// echo $cat->type;//доступ к свойству

// $cat->type = "cat";
// $dog->type = "dog";
// $cat->name = "Murzik";
// $dog->name = "Tuzik";

// echo $cat->name; //Murzik
// echo $dog->name; //Tuzik


/*----------Методы объекта----------*/

// class Pet{
// 	public $name;
// 	public $type = "unknown";

// 	function say($word){
// 		echo $this->name . " said $word";//Доступ к свойству объекта получается через "this"
// 		$this->drawLine();
// 	}
// 	function drawLine(){
// 		echo "<hr>";
// 	}
// }

// $cat = new Pet();
// $dog = new Pet;

// $cat->name = "Murzik";
// $dog->name = "Tuzik";

// $cat->say("Myau");
// $dog->say("Gav");


/*----------Использование псевдоконстант----------*/

// class SuperClass{
// 	function functionName(){
// 		echo  "<p>Вызвана функция " . __FUNCTION__; 
// 	}
// 	function className(){
// 		 echo "<p>Используем класс " . __CLASS__;
// 	}
// 	function methodName(){
// 		 echo "<p>Вызван метод " . __METHOD__;
// 	}
// }
// $obj = new SuperClass();

// $obj->functionName();//functionName
// $obj->className();//SuperClass
// $obj->methodName();//SuperClass::methodName


/*----------Констуркторы и деструкторы----------*/

// class Pet{
// 	public $name;
// 	public $type = "unknown";

// 	function __construct($name, $type){
// 		$this->name = $name;
// 		$this->type = $type;
// 		// echo "Object created <br>";
// 	}

// 	function __destruct(){
// 		echo "Object deleted <br>";
// 	}

// 	function say($word){
// 		echo $this->name . " said $word";//Доступ к свойству объекта получается через "this"
// 		$this->drawLine();
// 	}
// 	function drawLine(){
// 		echo "<hr>";
// 	}

// }

// $cat = new Pet("Murzik", "cat");//Object created
// $dog = new Pet("Tuzik", "dog");////Object created

// $cat->say("Myau");
// $dog->say("Gav");


/*----------Клонирование объектов----------*/

// Копирование значений переменных всех типов, кроме объектов
// $x = 10;
// $y = $x;
// $y = 20; 
// echo $y;//20
// echo $x;//10

// Создание ссылок для всех типов, кроме объектов
// $x = 10; 
// $y = &$x;
// $y = 20;
// echo $y;//20 
// echo $x;//20


// class MyClass{
// 	function __construct($param){
// 		$this->param = $param;
// 	}

// 	function __clone(){
// 		echo "Object cloned";
// 	}
// }
// $objX = new MyClass(10); // $objX - ссылка на объект в памяти 
// $objY = $objX; //$objY - ссылка на $objX

// $objY->param = 20;
// echo $objX->param;//20

// $objZ = clone $objX; // $objZ копия $objX 

// $objZ->param = 30;
// echo $objX->param;//20


/*----------Наследование классов----------*/

// class SimpleHouse{

// 	public $model = "";
// 	public $square = 0;
// 	public $floors = 0;
// 	public $color = "none";

// 	function __construct($model, $square = 0, $floors = 1){  
// 		$this->model = $model;  
// 		$this->square = $square;  
// 		$this->floors = $floors; 
// 	}

// 	function startProject(){  
// 		echo "Start. Model: {$this->model}<br>"; 
// 	}
// 	function stopProject(){  
// 		echo "Stop. Model: {$this->model}<hr>"; 
// 	}
// 	function build(){  
// 		echo "Build. House: 
// 		{$this->square}x{$this->floors}<br>"; 
// 	}
// 	function paint(){  
// 		echo "Paint. Color: {$this->color}<br>"; 
// 	}
// }

// $simple = new SimpleHouse("A-100-123", 120, 2); 
// $simple->color = "red"; 
// $simple->startProject(); 
// $simple->build(); 
// $simple->paint(); 
// $simple->stopProject();

// class SuperHouse extends SimpleHouse{

// 	public $fireplace = true;
// 	public $patio = true;

// 	function fire(){
// 		if($this->fireplace)
// 			echo "Fueled fireplace<br>";
// 	}
// }

// $super = new SuperHouse("A-100-125", 320, 3); 
// $super->color = "green"; 
// $super->startProject(); 
// $super->build(); 
// $super->paint(); 
// $super->fire(); 
// $super->stopProject();


// class FabricHouse extends SimpleHouse{

// 	// Перегрузка метода
// 	function build(){  
// 		echo "Build. Fabric: {$this->square}x{$this->floors}<br>";
// 	}
// }

// $fabric = new FabricHouse("B-200-007", 3250, 5); 
// $fabric->color = "white"; 
// $fabric->startProject(); 
// $fabric->build(); 
// $fabric->paint(); 
// $fabric->stopProject();

// // Создание класса-наследник
// class SuperFabricHouse extends FabricHouse{
// 	// Перегрузка метода 
// 	function build(){  
// 		echo "==============================================<br>";
// 		// Вызов родительского метода    
// 		echo parent::build();  
// 		echo "==============================================<br>";
// 	}
// }

// $super_fabric = new SuperFabricHouse("C-201-034", 5150, 7); 
// $super_fabric->color = "black"; 
// $super_fabric->startProject(); 
// $super_fabric->build(); 
// $super_fabric->paint(); 
// $super_fabric->stopProject(); 


/*----------Обработка исключений----------*/

// function test($var = false){  
// 	try {    
// 		echo "Start\n";
// 		if(!$var)  
// 			throw new Exception('$var is false!');//встроенные класс php 
//   		echo "Continue\n";    
// 	}catch(Exception $e){ 
// 		echo "Exception: " . $e->getMessage() . "\n";    
// 		echo "in file: " . $e->getFile() . "\n";    
// 		echo "on line: " . $e->getLine() . "\n";  
// 	}   
// 	echo "The end\n"; 
// }
// var_dump(test(), test(1));


// Надо получить ответ от последней функции в цепочке в случае ошибки 
// foo() -> bar() -> … -> baz() 
// foo() <- bar() <- … <- baz()
// function foo(){  
// 	$x = bar();
// 	if(!$x)
// 		echo "Плохо";  
// 	else 
// 		echo "Хорошо";  
// } 
// function bar(){  
// 	return baz(); 
// } 
// // ... 
// function baz(){  
// // Что-то делаем  
// 	if(!$param)      
// 		return false;  
// 	return true; 
// }


// // Проброс исключения 
// function foo(){
// 	try {
// 		bar(); 
// 		echo "Хорошо";  
// 	}catch(Exception $e){  
// 		echo $e->getMessage();  
// 	}  
// }
// function bar(){  
// 	baz(); 
// } 
// // ... 
// function baz(){  
// // Что-то делаем  
// 	if(!$param)      
// 		throw new Exception("Плохо!"); 
// }

// Создание пользовательских исключений 
// class MathException extends Exception{ 
// 	function __construct($msg){
// 		parent::__construct($msg); 
// 	}
// 	function someMethod(){ 
// 		return __CLASS__;
// 	}
// }

// try {  
// 	$x = rand(5, 15);  
// 	$y = rand(0, 1);
// 	if($y == 0) // Генерируем собственное исключение  
// 		throw new MathException("На 0 делить нельзя!");  
// 	if($y < 0) // Генерируем встроенное исключение    
// 		throw new Exception("Что-то случилось!");  
// 	echo $x / $y; 
// }catch(MathException $e){  
// 	echo $e->someMethod() . ":" . $e->getMessage(); 
// }catch(Exception $e){  
// 		echo $e->getMessage(); 
// }


// Внимание!
// try {  
// 	$x = rand(5, 15);  
// 	$y = rand(0, 1);
// 	if($y == 0) // Генерируем собственное исключение  
// 		throw new MathException("На 0 делить нельзя!");  
// 	if($y < 0) // Генерируем встроенное исключение    
// 		throw new Exception("Что-то случилось!");  
// 	echo $x / $y; 

// }catch(Exception $e){  
// 	echo $e->getMessage(); 
// }catch(MathException $e){  
// 	echo $e->someMethod() . ":" . $e->getMessage(); 
// }

// Финализация 
// function test($var = false){  
// 	try {   
// 		echo "TRY\n";
//   		if(!$var)  
//   			throw new Exception("Error");    
// 	}catch(Exception $e){    
// 		echo "CATCH\n";  
// 	}finally{    
// 		echo "FINALLY\n";  
// 	} 
// }
// var_dump(test(), test(1));


// Возвращаем значения 
// function test($var = false){  
// 	try {    
// 		echo "TRY\n";
//   		if(!$var)  
//   			throw new Exception("Error"); return 1;    
//   	}catch(Exception $e){    
//   		echo "CATCH\n";    
//   		return 2;  
//   	}finally{    
//   		echo "FINALLY\n";    
//   		return 3; // Можно закомментировать эту строку  
//   	} 
// }
// var_dump(test(), test(1));


/*----------Абтрактные классы и методы----------*/

// Получертеж чертежа

// Создание абстрактного класса

// От абстракции нельзя создать класс, можно только наследовать
// abstract class HouseAbstract{
// 	public $model = ""; 
// 	public $square; 
// 	public $floors;

// 	function __construct($model, $square = 0, $floors = 1){
// 		if(!$model)
// 			throw new Exception('Ошибка! Укажите модель!'); 
// 		$this->model = $model; 
// 		$this->square = $square; 
// 		$this->floors = $floors;
// 	}
// 	function startProject(){
// 		echo "Start. Model: {$this->model}<br>"; 
// 	}

// 	function stopProject(){  
// 		echo "Stop. Model: {$this->model}<hr>"; 
// 	}
// 	// Абстрактный метод, обязательно должен быть описан
// 	abstract function build();
// }
// class A extends HouseAbstract{
// 	function build(){}
// }
// $obj = new A(1,2,3);


// // Создание супер-класса
// class SimpleHouse extends HouseAbstract{
// 	// Свойства абстрактного класса + 
// 	public $color = "none";

// 	// Обязательная реализация абстрактного метода 
// 	function build(){  
// 		echo "Build. House: {$this->square}x{$this->floors}<br>"; 
// 	}

// 	// Свой метод 
// 	function paint(){  
// 		echo "Paint. Color: {$this->color}<br>"; 
// 	}
// }
// // Создание простого дома 
// $simple = new SimpleHouse("A-100-123", 120, 2); 
// $simple->color = "red"; 
// $simple->startProject(); 
// $simple->build(); 
// $simple->paint(); 
// $simple->stopProject();


// // Создание супер-класса
// class FabricHouse extends HouseAbstract{

// // Обязательная реализация абстрактного метода 
// 	function build(){  
// 		echo "Build. Fabric: {$this->square}x{$this->floors}<br>";
// 	}
// }

// $fabric = new FabricHouse("B-200-007", 3250, 5); 
// $fabric->startProject(); 
// $fabric->build(); 
// $fabric->stopProject();


// // Создание класса-наследника
// class SuperFabricHouse extends FabricHouse{
// 	// Перегрузка метода 
// 	function build(){  
// 		echo "==============================================<br>";
// 	 // Вызов родительского метода    
// 		echo parent::build();  
// 		echo "==============================================<br>";
// 	}
// }
// $super_fabric = new SuperFabricHouse("C-201-034", 5150, 7); 
// $super_fabric->startProject(); 
// $super_fabric->build(); 
// $super_fabric->stopProject();


/*----------Интерфейс----------*/

// Это абстрактный класс, екоторый содержит только абстрактные методы

// Интерфейсы реализуются(не наследуются)
// interface Db{
// 	function connect();
// 	function close();
// }

// class A implements Db{
// 	function connect(){}
// 	function close(){}
// }

// В классе можно реализовывать множество интерфейсов


// Создание интерфейса
// interface Paintable{
// 	// Абстрактный метод 
// 	function paint();
// }
// interface Brick{} 
// interface Panel{}

// // Создание супер-класса
// class SimpleHouse extends HouseAbstract implements Paintable, Brick{

// 	// Свойства абстрактного класса + 
// 	public $color = "none";

// 	// Обязательная реализация абстрактного метода 
// 	function build(){
// 		 echo "Build. House: {$this->square}x{$this->floors}<br>";
// 	} 

// 	// Обязательная реализация абстрактного метода 
// 	function paint(){ 
// 		 echo "Paint. Color: {$this->color}<br>";
// 	}
// } 

// // Создание простого дома 
// $simple = new SimpleHouse("A-100-123", 120, 2); 
// $simple->color = "red"; 
// $simple->startProject(); 
// $simple->build(); 

// // Проверка класса в цепочке предков
// if($simple instanceOf Paintable) 
// 	$simple->paint(); 
// $simple->stopProject();

// // Создание класса-наследника
// class SuperHouse extends SimpleHouse{
// 	public $fireplace = true; 
// 	public $patio = true;
	
// 	function fire(){
// 		if ($this->fireplace)      
// 		 	echo "Fueled fireplace\n"; 
// 	}
// }

// $super = new SuperHouse("A-100-125", 320, 3); 
// $super->color = "green"; 
// $super->startProject(); 
// $super->build(); 

// // Проверка класса в цепочке предков
// if($super instanceOf Paintable)
// 	$super->paint();
// $super->fire(); 
// $super->stopProject();

// // Создание супер-класса
// class FabricHouse extends HouseAbstract implements Panel{
// 	// Обязательная реализация абстрактного метода 
// 	function build(){
// 		 echo "Build. Fabric: {$this->square}x{$this->floors}<br>"; 
// 	}
// }

// $fabric = new FabricHouse("B-200-007", 3250, 5); 
// $fabric->startProject(); 
// $fabric->build(); 

// // Проверка класса в цепочке предков
// if($fabric instanceOf Paintable)
// 	$fabric->paint(); 
// $fabric->stopProject();

// // Создание класса-наследника
// class SuperFabricHouse extends FabricHouse{
// 	// Перегрузка метода 
// 	function build(){ 
// 		echo "==============================================<br>";  
// 		// Вызов родительского метода    
// 		echo parent::build();  

// 		echo "==============================================<br>";
// 	}
// }

// $super_fabric = new SuperFabricHouse("C-201-034", 5150, 7); 
// $super_fabric->startProject(); 
// $super_fabric->build(); 

// // Проверка класса в цепочке предков
// if($super_fabric instanceOf Paintable)
// 	$super_fabric->paint();
// $super_fabric->stopProject();
 

/*----------Константы и статические члены класса----------*/
 
// class ConstructionCompany{
// 	const NAME = "Рога и Копыта";

// 	function printName(){
// 		// Обращение к константе из метода класса
// 		echo self::NAME; 
// 	}
// }
// // Обращение к константе без создания эксземпляра класса
// echo ConstructionCompany::NAME;//Рога и Копыта

// $company = new ConstructionCompany();
// $company->printName();//Рога и Копыта

// class Worker{
// 	public $name;
// 	// Статическое свойство класса
// 	public static $workerCount = 0;

// 	function __construct($name){
// 		if(!$name)
// 			throw new Exception('Ошибка! Укажите имя рабочего!');
// 		$this->name = $name;
// 		// Изменение статического свойства класса
// 		++self::$workerCount;
// 	}
// 	// Статические метод класса
// 	static function welcome(){
// 		// Никаких $this в статическом методе класса!
// 		echo "Добро пожаловать на стройплощадку! Нас уже" . self::$workerCount . "<br>";
// 	}
// }

// Worker::welcome();
// $w1 = new Worker('Вася Пупкин');
// $w2 = new Worker('Федя Сумкин');

// echo 'Текущее количество рабочих: '.Worker::$workerCount . "<br>";


/*----------Автоматическая загрузка класса----------*/

// $myClass = new MyClass(); // Ошибка! Описание класса не найдено 

// function __autoload($class){
// 	echo $class; 
// }

// $myClass = new MyClass(); // MyClass. Далее: Ошибка! Описание класса не найдено


// // Решение. 
// // Описываем класс в одноимённом файле, то есть MyClass.class.php

// class MyClass{
// 	function __construct(){
// 		echo __CLASS__;
// 	}
// }

// // В текущем файле подключаем файл с описанием нужного класса
// function __autoload($class){
// 	include $class.'.class.php'; 
// }
// $myClass = new MyClass(); // MyClass


/*----------Модификаторы доступа к свойствам и методам----------*/

// Свойства "private and protected" созданы для внутреннего использования в классе
// protected доступе внутри класса, в котором оно объявлен, плюс в классах наследниках 
//  privat доступно только внутри класса, в котором оно объявлен

// class ParentClass{
// 	public $public = 1;  
// 	protected $protected = 2;//Запрещают доступ из глобальной области видимости
// 	private $private = 3;//Запрещают доступ из глобальной области видимости

// 	// Чтобы дать возможность дотянуться до свойства
//     function getProtected(){    
//     	return $this->protected;  
//     }  

//     // Чтобы дать возможность дотянуться до свойства
// 	function getPrivate(){    
// 		return $this->private;  
// 	} 
// }

// $parent = new ParentClass(); 
// // echo $parent->public; 
// // echo $parent->protected; // нельзя 
// // echo $parent->private; // нельзя

// echo $parent->getProtected(); 
// echo $parent->getPrivate();


// class ChildClass{  
// 	function getParentProtected(){    
// 		return $this->protected;  
// 	}  
// 	function getParentPrivate(){    
// 		return $this->private;  
// 	}    
// 	function getRealParentPrivate(){    
// 		return $this->getPrivate();  
// 	} 
// }

// $child = new ChildClass(); 
// echo $child->getParentProtected(); 
// // echo $child->getParentPrivate();  // нельзя

// echo $child->getRealParentPrivate();



// // Использование модификаторов
// class HouseAbstract{
// 	private $model = ""; 
// 	private $square; 
// 	private $floors;
// 	function __construct($model, $square = 0, $floors = 1){
// 		if(!$model)
// 			throw new Exception('Ошибка! Укажите модель!'); 
// 		$this->model = $model; 
// 		$this->square = $square; 
// 		$this->floors = $floors;
// 	}
// 	function getModel(){  
// 		return $this->model; 
// 	}
// 	function getSquare(){  
// 		return $this->square; 
// 	}
// 	function getFloors(){  
// 		return $this->floors; 
// 	} 
// 	// Описание других методов
// }

// class SimpleHouse{
// 	private $color = "none";
// 	function getColor(){  
// 		return $this->color; 
// 	}
// 	function setColor(){  
// 		return $this->color; 
// 	} 
// 	// Описание других методов
// }

// $simple = new SimpleHouse("A-100-123", 120, 2); 
// $simple->setColor("red");


/*----------Доступ к недоступным свойствам и методам----------*/

// class MyClass{
// 	function __set($name, $value){    
//   		echo "Set property '$name' to value $value";  
//   	}    
//   	function __get($name){    
//   		return "Access to property '$name'";  
//   	}    
//   	function __call($name, $args){    
//   		echo "Call method '$name' with arguments: " . implode(', ', $args);  
//   	}
//   	static function __callStatic($name, $args){    
//   		echo "Call static method '$name' with arguments: " . implode(', ', $args);    
//   	} 
// }

// $obj = new MyClass(); 
// MyClass::staticFunc(10, 20);  // Call static method 'staticFunc' width arguments: 10, 20


// Использование "магических" сеттеров и геттеров
// class HouseAbstract{
// 	private $model = ""; 
// 	private $square; 
// 	private $floors;
// 	function __construct($model, $square = 0, $floors = 1){
// 		if(!$model)
// 			throw new Exception('Ошибка! Укажите модель!'); 
// 		$this->model = $model; 
// 		$this->square = $square; 
// 		$this->floors = $floors;
// 	}

// 	function __get($name){  
// 		switch($name){ 
// 			case 'model': return $this->model;    
// 			case 'square': return $this->square;    
// 			case 'floors': return $this->floors;    
// 			default: throw new Exception('Неизвестное свойство!'); 
// 		}
// 	}
// }

// class SimpleHouse{
// 	private $color = "none";
// 	function __get($name){  
// 		switch($name){    
// 			case 'color': return $this->color;    
// 			default: throw new Exception('Неизвестное свойство!');   
// 		} 
// 	}
// 	function __set($name, $value){  
// 		switch($name){    
// 			case 'color': $this->color = $value; break;    
// 			default: throw new Exception('Неизвестное свойство!');   
// 		} 
// 	} 
// 	// Описание других методов
// }

// $simple = new SimpleHouse("A-100-123", 120, 2); 
// $simple->color = "red"; 
// echo $simple->color;


/*----------Преобразование объекта в строку----------*/

// class MyClass{}
// $obj = new MyClass(); 
// echo $obj; // Ошибка!

// class MyClass{    
// 	function __toString(){    
// 		return 'Это объект, экземпляр класса ' . __CLASS__;
// 	}
// }
// $obj = new MyClass(); 
// echo $obj; // Это объект, экземпляр класса MyCLASS


/*----------Обращение к объекту как к функции----------*/

// class Math{    
// 	function __invoke($num, $action){ 
// 		 switch($action){      
// 		 	case '+': return $num + $num;      
// 		 	case '*': return $num * $num;      
// 		 	default: throw new Exception('Неизвестное свойство!'); 
// 		}
// 	}
// }

// $obj = new Math(); 
// echo $obj(5, '+'); // 10 
// echo $obj(5, '*'); // 25


/*----------Сериализация объекта----------*/

// class User{
// 	private $login; 
// 	private $password; 
// 	private $params = []; 

// 	function __construct($login, $password){
// 		$this->login = $login; 
// 		$this->password = $password; 
// 		$this->params = $this->getUser(); 
// 	}
// 	function getUser(){ 
// 	// Что-то делаем // Например, возвращаем массив данных пользователя 
// 	}

// 	// Вызывается перед сериализацией 
// 	// Должен вернуть массив имен свойств, которые должны быть сериализованы
// 	function __sleep(){  
// 		return ['login', 'password']; 
// 	}

// 	// Вызывается после сериализации
// 	// Аналог магического метода "__construct()"
// 	function __wakeup(){  
// 		$this->params = $this->getUser(); 
// 	}
// }
// $obj = new User("john", "1234"); 
// $str = serialize($obj);
// unset($obj); 
// $obj = unserialize($str);
// print_r($obj); 
 

/*----------Финальные классы и методы----------*/

// Финальный класс
// Используется, если в дальнейшем планируется координально изменить класс
// final class Breakfast{
// 	function eatFood($food){

// 		echo "Съели $food";
// 	}
// }
// class McBreakfast extends Breakfast{}
// $obj = new McBreakfast();//Ошибка! 


// Финальный метод
// class Math{
// 	final function sum($num1, $num2){
// 		echo "Сумма: ". $num1 + $num2;
// 	}
// }
// class Algebra extends Math{
// 	function sum($num1, $num2){
// 		$result = $num1 + $num2;
// 		echo "Сумма: $num1 и $num2 = $result";
// 	}
// }

// $obj = new Algebra();


/*----------Типажи----------*/

//Базовое использование

// trait Hello{
// 	function getGreet(){
// 		return "Hello";
// 	}
// } 
// trait User{
// 	function getUser($name){
// 		return ucfirst($name);
// 	}
// }
// Использование типажей
// class Welcome{
// 	use Hello, user;
// }

// $obj = new Welcome();
// echo $obj->getGreet(), ",", $obj->getUser('john'), '|';


// Наследование 

// trait Greeting{  
// 	use Hello, User; 
// 	function sayHello($name){    
// 		echo $obj->getGreet(), ', ', $obj->getUser($name), '!';
// 	}
// }
// trait Hello{
// 	function getGreet(){
// 		return "Hello";
// 	}
// } 
// trait User{
// 	function getUser($name){
// 		return ucfirst($name);
// 	}
// }
// class Welcome{  
// 	use Greeting; 
// }

// (new Welcome())->sayHello('john');


// Изменение модификаторов доступа 

// trait Hello{  
// 	private function sayHello($name){    
// 		return "Hello, $name!"; 
// 	}
// }
// class Welcome{  
// 	use Hello{     
// 		sayHello as public;  
// 	} 
// }
// (new Welcome())->sayHello('John');


// Разрешение конфликтов имён 

// trait Hello{  
// 	private function sayHello(){    
// 		return "Hello";
// 	}
// }
// trait User{  
// 	public function sayHello($name){    
// 		return $name;  
// 	} 
// }
// class Welcome{  
// 	use User, Hello{     
// 		Hello::sayHello as public word;    
// 		User::sayHello insteadof Hello;  
// 	} 
// }
// $obj = new Welcome(); 
// echo $obj->word(), ', ', $obj->sayHello('John'), '!';
 

/*----------Уточнение типа и полезные функции----------*/

// Базовое использование 
// class MyClass{} 
// $my = new MyClass(); 
// $std = new stdClass();

// // Ожидается передача объекта, экземпляра класса MyClass
// function foo(MyClass $obj){}

// foo($my); // Отработает успешно 
// // foo($std); // Ошибка!

// class MyClass{    
// 	function func(){    
// 		return __METHOD__;  
// 	}    
// 	static function staticFunc(){    
// 		return __METHOD__;  
// 	}    
// 	function __invoke(){    
// 		return __METHOD__;  
// 	} 
// }

// $obj = new MyClass();


// // Ожидается то, что можно вызвать 
// function foo(callable $x){  
// 	if(func_num_args() == 2){    
// 		$m = func_get_arg(1);      
// 		return $x->$m();  
// 	}elseif(is_array($x)){    
// 		return $x[0]::$m[1]();  
// 	}else{    
// 		return $x();  
// 	} 
// }
// echo foo($obj, "func"); // MyClass::func 
// echo foo(["MyClass", "staticFunc"]); // MyClass::staticFunc 
// echo foo($obj); // MyClass::__invoke


/*----------Библиотека SQLite----------*/

// Особенности SQLite

// Создание БД
// CREATE TABLE users(id INTEGER, name TEXT, age INTEGER)

// CREATE TABLE users(id, name, age)

// Для задания первичного ключа
// id INTEGER PRIMARY KEY
// id INTEGER PRIMARY KEY AUTOINCREMENT

// Экранирование строк через двойной апостроф
// 'Harry O"Brian'


/*----------Создание, открытие и закрытие данных----------*/

// Создаем или открываем БД
// $db = new SQLite3("test.db");

// Закрываем базу данных без удаления объекта
// $db->close();

// Открываем другую БД для работы
// $db->open("another.db");

// Удаляем объект
// unset($db);


/*----------Выполнение запроса----------*/

// Экранирование строк
// $name = $db->escapeString($name);

// Для запросов без выборки данных
// $sql = "INSERT INTO users(name, age) VALUES ('name', 25)";

// Возвращает значение булева типа
// $result = $db->exec($sql);

// Количество измененных записей
// echo $db->changes();

// Отслеживание ошибок
// echo $db->lastErrorCode();
// echo $db->lastErrorMsg();


/*----------Подготовленные запроса----------*/

// $sql = "INSERT INTO users(name, age) VALUES (:name, :25)";

// Готовим запрос
// $stmt = $db->prepare($sql);

// Привязываем параметры
// $stmt->bindParam(':name', $name);
// $stmt->bindParam(':age', $age);

// Исполняем запрос
// $result = $stmt->execute();

// Закрываем при необходимости
// $stmt->close();


/*----------Выборка данных----------*/

// $sql = "SELECT name, age FROM users";

// В случае неудачи возвращает false
// $result = $db->querySingle($sql);
// В $result - значение первого поля первой записи

// $result = $db->querySingle($sql, true);
// В $result - массив значений первой записи

// Стандартная выборка
// $result = $db->query($sql);

// Обработка выборки
// $row = $result->fetchArray()//  SQLITE3_BOTH

// Получаем ассоциативный массив
// $row = $result->fetchArray(SQLITE3_ASSOC);
// Получаем индексированный массив
// $row = $result->fetchArray(SQLITE3_NUM);


