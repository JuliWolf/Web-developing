<!----------------------- Основные сведения об объектах ---------------------------->
<?


// ******************** Классы и объекты ********************************

// ******************** Создание класса ********************************
// class ShopProduct{
// 	// Тело класса
// }


// ******************** Объекты класса ********************************
// $product1 = new ShopProduct();
// $product2 = new ShopProduct();

// var_dump($product1);//object(ShopProduct) #1 (0){}
// var_dump($product2);//object(ShopProduct) #2 (0){}


// ******************** Определение свойств класса ********************************

// Слово public обеспечит доступ к этому свойству извне контекста объекта
// class ShopProduct{
// 	public $title = "Стандартный товар";
// 	public $producerMainName = "Фамилия автора";
// 	public $producerFirstName = "Имя автора"
// 	public $price = 0;
// }

// $product1 = new ShopProduct();
// // Обращение к свойству класса происходит с помощью "->"
// print $product1->title;//"Стандартный товар"

// // Присваивание нового значения свойству класса
// $product2 = new ShopProduct();
// $product2->title = "Собачье сердце";
// $product1->title = "Ревизор";

// // Добавление нового свойства к объекту
// $product1->arbitraryAddition = "Дополнительный параметр";


// ******************** Работа с методами класса ********************************

// class myClass{
// 	public function myMethod ($argument, $another){
// 		//...
// 	}
// }

// // Обращение к методу класса происходит с помощью ->
// $myObj = new MyClass();
// $myObj->myMethod("Михаил", "Булгаков");


// class ShopProduct{
// 	public $title = "Стандартный товар";
// 	public $producerMainName = "Фамилия автора";
// 	public $producerFirstName = "Имя автора"
// 	public $price = 0;

// 	// Если у метода или свойства не определена область видимости, то она автоматически выставляется в 'public'
// 	function getProducer(){
// 		// $this - ссылка на свойства или метода текущего объекта
// 		return "{$this->producerFirstName}"."{$this->producerMainName}";
// 	}
// }

// $product1 = new ShopProduct();
// $product1->title = "Собачье сердце";
// $product1->producerMainName = "Булгаков";
// $product1->producerFirstName = "Михаил";
// $product1->price = 5.99;

// print "Автор: {$product1->getProducer()}\n";//Автор: Михаил Булгаков


// ******************** Создание метода конструктора ********************************

// Методо-конструктор вызывается при создании объекта


// class ShopProduct{
// 	public $title = "Стандартный товар";
// 	public $producerMainName = "Фамилия автора";
// 	public $producerFirstName = "Имя автора"
// 	public $price = 0;

// 	function __construct($title, $firstName, $mainName, $price){
// 		$this->title = $title;
// 		$this->producerMainName = $firstName;
// 		$this->producerFirstName = $mainName;
// 		$this->price = $price;
// 	}

// 	function getProducer(){
// 		return "{$this->producerFirstName}"."{$this->producerMainName}";
// 	}
// }

// // Значения всех перечисленных аргументов передаются конструктору
// $product1 = new ShopProduct("Собачье сердце", "Михаил", "Булгаков", 5.99);


// print "Автор: {$product1->getProducer()}\n";//Автор: Михаил Булгаков


// ******************** Уточнение типов объектов ********************************

// class ShopProductWriter{
// 	// Чтобы добавить уточнение типа к аргументу метода, поместите перед ним имя класса
// 	public function write(ShopProduct $shopProduct) {
// 		$str = "{$shopProduct->title}:".$shopProduct->getProducer(). "({$shopProduct->price})\n";
// 		print $str;
// 	}
// }

// $product1 = new ShopProduct("Собачье сердце", "Михаил", "Булгаков", 5.99);
// $writer = new ShopProductWriter();
// $writer->write($product1);//Собычье сердце: Михаил Булгаков (5.99)


// // Если вызвать метод write() для другого класса, то получится фатальная ошибка
// class Wrong{}

// $writer->write(new Wrong());//fatal error


// ******************** Наследование ********************************

// Наследование - это механизм, посредством которого один или несколько классов можно получить с помощью некоторого базового класса.
// "Родительский" - "Дочерний"

// При расширении исходного класса в какой-то момент начнется путаница и избыточное количество информации в дочерних классах
// class ShopProduct{
// 	public $title;
// 	public $producerMainName;
// 	public $producerFirstNameL;
// 	public $price;
// 	public $numPages;
// 	public $playerLength;

// 	function __construct($title, $firstName, $mainName, $price, $playerLength = 0, $numPages = 0){
// 		$this->title = $title;
// 		$this->producerMainName = $firstName;
// 		$this->producerFirstName = $mainName;
// 		$this->price = $price;
// 		$this->numPages = $numPages;
// 		$this->playerLength = $playerLength;
// 	}

// 	function getProducer(){
// 		return "{$this->producerFirstName}"."{$this->producerMainName}";
// 	}

// 	function getNumberOfPages(){
// 		return $this->numPages;
// 	}

// 	function getPlayerLength(){
// 		return $this->playerLength;
// 	}
// }


// Разбиваем класс на 2 класса - для CD-дисков,  для Книг

// class CDProduct{
// 	public $title;
// 	public $producerMainName;
// 	public $producerFirstNameL;
// 	public $price;
// 	public $playerLength;

// 	function __construct($title, $firstName, $mainName, $price, $playerLength ){
// 		$this->title = $title;
// 		$this->producerMainName = $firstName;
// 		$this->producerFirstName = $mainName;
// 		$this->price = $price;
// 		$this->playerLength = $playerLength;
// 	}

// 	function getPlayerLength(){
// 		return $this->playerLength;
// 	}

// 	function getSummaryLine(){
// 		$base .= "{$this->title} ({$this->producerMainName}, ";
// 		$base .= "{$this->producerFirstName} )";
// 		$base .= ": Время звучания - {$this->playerLength}";
// 		return $base;
// 	}

// 	function getProducer(){
// 		return "{$this->producerFirstName}"."{$this->producerMainName}";
// 	}
// }

// class BookProduct {
// 	public $title;
// 	public $producerMainName;
// 	public $producerFirstNameL;
// 	public $price;
// 	public $numPages;

// 	function __construct($title, $firstName, $mainName, $price, $numPages){
// 		$this->title = $title;
// 		$this->producerMainName = $firstName;
// 		$this->producerFirstName = $mainName;
// 		$this->price = $price;
// 		$this->numPages = $numPages;
// 	}

// 	function getProducer(){
// 		return "{$this->producerFirstName}"."{$this->producerMainName}";
// 	}

// 	function getNumberOfPages(){
// 		return $this->numPages;
// 	}

// 	function getSummaryLine(){
// 		$base .= "{$this->title} ({$this->producerMainName}, ";
// 		$base .= "{$this->producerFirstName} )";
// 		$base .= ": {$this->playerLength} стр.";
// 		return $base;
// 	}
// }

// Исправляем класс ShopProductWriter в соответствии с новыми условиями
// Чтобы проверка необходимого класса происходила, необходимо добавить собственную проверку в тело класса
// class ShopProductWriter{
// 	public function write($shopProduct) {
// 		if(!($shopProduct instanceof CDProduct) && ! ($shopProduct instanceof BookProduct)){
// 			die ("Передан неверный тип данных");
// 		}
// 		$str = "{$shopProduct->title}:".$shopProduct->getProducer(). "({$shopProduct->price})\n";
// 		print $str;
// 	}
// }

// ******************** Работа с наследованием ********************************

// 1. Найти элементы базового класса, которые не соответствуют друг другу или которыми нужно оперировать иначе

// class ShopProduct{
// 	public $title;
// 	public $producerMainName;
// 	public $producerFirstNameL;
// 	public $price;
// 	public $numPages;
// 	public $playerLength;

// 	function __construct($title, $firstName, $mainName, $price, $playerLength = 0, $numPages = 0){
// 		$this->title = $title;
// 		$this->producerMainName = $firstName;
// 		$this->producerFirstName = $mainName;
// 		$this->price = $price;
// 		$this->numPages = $numPages;
// 		$this->playerLength = $playerLength;
// 	}

// 	function getProducer(){
// 		return "{$this->producerFirstName}"."{$this->producerMainName}";
// 	}

// }


// Создаем дочерние классы от ShopProduct
// Дочерние классы наследуют доступ ко всем методам типа public и protected
// class CDProduct extends ShopProduct{
// 	function getPlayerLength(){
// 		return $this->playerLength;
// 	}

// 	function getSummaryLine(){
// 		$base .= "{$this->title} ({$this->producerMainName}, ";
// 		$base .= "{$this->producerFirstName} )";
// 		$base .= ": {$this->playerLength} стр.";
// 		return $base;
// 	}
// }

// class BookProduct extends ShopProduct{
// 	function getNumberOfPages(){
// 		return $this->numPages;
// 	}

// 	function getSummaryLine(){
// 		$base .= "{$this->title} ({$this->producerMainName}, ";
// 		$base .= "{$this->producerFirstName} )";
// 		$base .= ": Время звучания - {$this->playerLength}";
// 		return $base;
// 	}
// }

// $product2 = new CDProduct("Пропавший без вести", "Группа", "ДДТ", "10.99", "null", "60.33");
// print "Исполнитель: {$product2->getProducer()}\n";


// ******************** Конструкторы и наследование ********************************

// Чтобы обратиться к методу в контексте класса, а не объекта следует использовать символы "::"
// class ShopProduct{
// 	public $title;
// 	public $producerMainName;
// 	public $producerFirstNameL;
// 	public $price;

// 	function __construct($title, $firstName, $mainName, $price){
// 		$this->title = $title;
// 		$this->producerMainName = $firstName;
// 		$this->producerFirstName = $mainName;
// 		$this->price = $price;
// 	}

// 	function getProducer(){
// 		return "{$this->producerFirstName}"."{$this->producerMainName}";
// 	}

// 	// большая часть кода метода getSummaryLine повторяется, поэтому мы можем определить его в классе и расширить в дочерних классах
// 	function getSummaryLine(){
// 		$base .= "{$this->title} ( {$this->producerMainName},";
// 		$base .= "{$this->producerFirstName} )";
// 		return $base;
// 	}
// }

// class CDProduct extends ShopProduct{
// 	function __construct($title, $firstName, $mainName, $price, $playerLength){
// 		parent::__construct($title, $firstName, $mainName, $price);
// 		$this->playerLength = $playerLength;
// 	}

// 	function getPlayerLength(){
// 		return $this->playerLength;
// 	}

// 	function getSummaryLine(){
// 		$base .= parent::getSummaryLine();
// 		$base .= ": Время звучания - {$this->playerLength}";
// 		return $base;
// 	}
// }

// class BookProduct extends ShopProduct{
// 	function __construct($title, $firstName, $mainName, $price, $numPages){
// 		// вызываем конструктор родительского класса прежде чем определять собственные свойства
// 		parent::__construct($title, $firstName, $mainName, $price);
// 		$this->numPages = $numPages;
// 	}

// 	function getNumberOfPages(){
// 		return $this->numPages;
// 	}

// 	function getSummaryLine(){
// 		$base .= parent::getSummaryLine();
// 		$base .= ": {$this->numPages} стр.";
// 		return $base;
// 	}
// }


// ******************** Public, Private, Protected:управление доступок к классам ********************************

// public - задается по умолчанию для всех методов и свойств

// public - общедоступные - можно получать доступ из любого контекста
// private - закрытые - можно получить доступ только из того класса, в котором они объявлены(подклассы не имеют доступа)
// protected - защищенные - можно получить доступ либо из содержащего их класса, либо из его подкласса

// Изначально лучше делать все методы и свойства защищенными


// ******************** Методы как средство доступа к свойствам ********************************
// Методы доступа(accessors)
// Получатели (getter)
// Установщики (setter)

// class ShopProductWriter{
// 	// Чтобы защитить свойсво $products от возможных изменений, присвоим ему тип private
// 	private $products = array();

// 	public function addProduct(ShopProduct $shopProduct){
// 		$this->products[] = $shopProduct;
// 	}

// 	public function write($shopProduct) {
// 		$str = '';
// 		foreach($this->products as $shopProduct){
// 			$str .= "{$shopProduct->title}";
// 			$str .= "$shopProduct->getProducer()";
// 			$str .= "({$shopProduct->getPrice()}\n";
// 		}
// 		print $str;
// 	}
// }

// // Закрываем свойсва класса ShopProduct и создаем методы доступа
// class ShopProduct{
// 	private $title;
// 	private $producerMainName;
// 	private $producerFirstNameL;
// 	private $price;
// 	private $discount = 0;

// 	public function __construct($title, $firstName, $mainName, $price){
// 		$this->title = $title;
// 		$this->producerMainName = $firstName;
// 		$this->producerFirstName = $mainName;
// 		$this->price = $price;
// 	}

// 	public function getProducerFirstName(){
// 		return $this->producerFirstName;
// 	}

// 	public function getProducerMainName(){
// 		return $this->producerMainName;
// 	}

// 	public function setDiscount($num){
// 		return $this->discount = $num;
// 	}

// 	public function getTitle(){
// 		return $this->title;
// 	}

// 	public function getPrice(){
// 		return $this->price;
// 	}

// 	public function getProducer(){
// 		return "{$this->producerFirstName}"."{$this->producerMainName}";
// 	}

// 	public function getSummaryLine(){
// 		$base .= "{$this->title} ( {$this->producerMainName},";
// 		$base .= "{$this->producerFirstName} )";
// 		return $base;
// 	}
// }

// class BookProduct extends ShopProduct{
// 	private $numPages = 0;

// 	public function __construct($title, $firstName, $mainName, $price, $numPages){
// 		parent::__construct($title, $firstName, $mainName, $price);
// 		$this->numPages = $numPages;
// 	}

// 	public function getNumberOfPages(){
// 		return $this->numPages;
// 	}

// 	public function getSummaryLine(){
// 		$base .= parent::getSummaryLine();
// 		$base .= ": {$this->numPages} стр.";
// 		return $base;
// 	}
// }

// class CDProduct extends ShopProduct{
// 	private $playerLength = 0;

// 	public function __construct($title, $firstName, $mainName, $price, $playerLength){
// 		parent::__construct($title, $firstName, $mainName, $price);
// 		$this->playerLength = $playerLength;
// 	}

// 	public function getPlayerLength(){
// 		return $this->playerLength;
// 	}

// 	public function getSummaryLine(){
// 		$base .= parent::getSummaryLine();
// 		$base .= ": Время звучания - {$this->playerLength}";
// 		return $base;
// 	}
// }
?>


<!----------------------- Дополнительные возможности ---------------------------->
<?


// ******************** Статические методы и свойства ********************************
// С помощью static мы можем получать доступ к методам и свойствам в контексте класса, а не объекта

// Статические методы - это функции используемые в контексте класса. Они сами не могут получать доступ ни к каким обычным свойствам класса,потому что такие свойства принадлежат объектам. Из статических методов можно обращаться к статическим свойствам.

// class StaticExample{
// 	static public $aNum = 0;

// 	static public function sayHello(){
// 		print "Привет!";
// 	}
// }

// // Для получения доступа к статическим методам и свойствам необходимо обратиться к классу и добавить ::
// print StaticExample::$aNum;
// StaticExample::sayHello();


// Слово self используется для обращения к текущему классу, а псевдоним $this к текущему объекту

// class StaticExample{
// 	static public $aNum = 0;

// 	static public function sayHello(){
// 		self::$aNum++;
// 		print "Привет! (" . self::$aNum . ")\n";
// 	}
// }

// Преимущества статических методом и свойств
// 1. Они доступны и любой точки сценария. Можно обращаться к функциям, не передавая экземпляр класса от одного объекта к другому.
// 2. Статические свойства доступны каждому экземпляру объекта этого класса.


// SQLLite - создать таблицу

// CREATE TABLE products (
// id 	INTEGER PRIMARY KEY AUTOINCREMENT,
// type TEXT,
// firstname TEXT,
// mainname TEXT,
// title TEXT,
// price float,
// numpages int,
// playerlength int,
// discount int)


// // Создать в классе метод, для создании объекта с нужными характеристиками
// class ShopProduct {
// 	private $id = 0;

// 	public function setID($id){
// 		$this->id = $id;
// 	}

// 	public static function getInstance ($id PDO $pdo){
// 		$query = "select * from products where id='$id'";
// 		$stmt = $pdo->query($query);
// 		$row = $stmt->fetch();
// 		if(empty($row)){
// 			return null;
// 		}
// 		if($row['type'] == 'book'){
// 			$product = new BookProduct ($row['title'],
// 										$row['firstname'],
// 										$row['mainname'],
// 										$row['price'],
// 										$row['numpages']);
// 		}else if($row['type'] == 'cd'){
// 			$product = new BookProduct ($row['title'],
// 										$row['firstname'],
// 										$row['mainname'],
// 										$row['price'],
// 										$row['playerlength']);
// 		}else {
// 			$product = new BookProduct ($row['title'],
// 										$row['firstname'],
// 										$row['mainname'],
// 										$row['price']);
// 		}
// 		$product->setId($row['id']);
// 		$product->setDiscount($row['discount']);
// 		return $product;
// 	}
// }


// ******************** Постоянные свойства ********************************

// Некоторые свойства не должны изменяться
// Такие свойства объявляется с помощью слова const

// class ShopProduct {
// 	const AVAILABLE = 0;
// 	const OUT_OF_STOCK = 1;
// }

// в константе могут содержаться только элементарные типы.
// Константе нельзя присвоить объект

// Константы используют, когда:
// 1. Свойство должно быть доступно для всех экземплятор класса
// 2. И должно быть фиксированным и неизменным


// ******************** Абстрактные классы ********************************

// В абстрактом классе можно создавать свойства и методы, но любавя попытка создать его экземпляр приведет к ошибке
// Чаще всего абстрактный класс содержит как миниму один абстрактный метод
// Создание асбтрактного метода гарантирует, что его реализация будет доступной во всех конкретных дочерних классах, но детали этой реализации остаются неопределенными

// adstract class ShopProductWriter{
// 	protected $products = array();

// 	public function addProduct(ShopProduct $shopProduct){
// 		$this->products[]=$shopProduct;
// 	}

// 	abstract public function write();
// }

// В любом классе, который расширяет абстрактный класс, должны быть реализованы все абстрактные методы, либо сам класс должен быть объявлен абстрактным
// Кроме того уровень доступа в реализующем методе не может быть более строгим, чем в абстрактном методе.
// Реализующему методу также должно быть передано такое же кол-во аргументов

// class XmlProductWriter extends ShopProductWriter {
// 	public function write(){
// 		$str = '<?xml version="1.0" encoding="UTF-8">' . "\n";
// 		$str .= "<products>\n";
// 		foreach($this->products as $shopProduct){
// 			$str .= "\t<product title=\"{$shopProduct->getTitle()}\">\n";
// 			$str .= "\t\t<summary>\n";
// 			$str .= "\t\t{$shopProduct->getSummaryLine()}\n";
// 			$str .= "\t\t<summary>\n";
// 			$str .= "\t<product>\n";
// 		}
// 		$str .= "</product>\n";
// 		print $str;
// 	}
// }
// class TextProductWriter extends ShopProductWriter{
// 	public function write(){
// 		$str = "ТОВАРЫ: \n";
// 		foreach ($this->products as $shopProduct){
// 			$str .= $shopProduct->getSummaryLine()."\n";
// 		}
// 		print $str;
// 	}
// }


// ******************** Интерфейсы ********************************

// Интерфейс - это шаблон
// Интерфейс может только определять функциональность, но никогда не реализует ее
// Интерфейс может содержать объявления свойств и методом, но не тела этимх методов

// interface Chargeable {
// 	public function getPrice();
// }

// Любой класс, содержащий этот интерфейс, должен реализовывать все методы, определенные в интерфейсе
// При реализации интерфейса, имя интерфейся указывается в обхявлении класса после слова "implements"

// Реализующий класс принимает тип класса и интерфейса, который он расширяет
// class ShopProduct implements Chargeable{
// 	public function getPrice (){
// 		return ($this->price - $this->discount);
// 	}
// }

// В классе можно реализовывать любое количество интерфейсов

// class Consultancy extends TimedService implements Bookable, Chargeable {
// 	//...
// }


// ******************** Обработка ошибок ********************************

// Exception - специальный объект, который является экземплятом встроенного класса Exception

// class Conf {
// 	private $file;
// 	private $xml;
// 	private $lastmatch;

// 	// Конструктору класса передается имя файла конфигурации
// 	function __construst($file){
// 		$this->file = $file;

// 		if(!file_exists($file)){
// 			throw new Exception ('Файл '$file'не найден');
// 		}

// 		// Полученный от функции обект сохраняется в свойстве $xml
// 		$this->xml = simplexml_load_file($file);
// 	}

// 	function write(){

// 		if(!is_writable($this->file)){
// 			throw new Exception("Файл '{$this->file}' недоступен для записи.");
// 		}

// 		// Сохраняет данные о новой конфигурации в исходном файле на диск
// 		file_put_contents($this->file, $this->xml->asXML());
// 	}

// 	function get ($str){
// 		// Для нахождения элемента item с заданным атрибутом используется метод xpath
// 		$matches = $this->xml->xpath("/conf/item[@name=\"$str\"]");
// 		if(count ($matches)){
// 			$this->lastmatch = $matches[0];
// 			return (string)$matches[0];
// 		}
// 		return null;
// 	}

// 	function set($key, $value){
// 		// Метод set либо меняет значение существующего элемента, либо создает новый
// 		if(!is_null($this->get($key))){
// 			$this->lastmatch[0]=$value;
// 			return;
// 		}
// 		$conf = $this->xml->conf;
// 		$this->xml->addChild('item', $value)->addAttribute('name', $key);
// 	}
// }


// *************Создание подклассов класса Exception

// Создаем классы, расширяеющие класс Exception
// class XmlException extends Exception {
// 	private $arror;

// 	function __construct (LibXmlError $error){
// 		$shortfile = basename($error->file);
// 		$msg = "[{$shortfile}, строка {$error->line}, ";
// 		$msg .= "колонка {$error->column}] {$error->message}";
// 		$this->error = $error;
// 		parent::__construct($msg, $error->code);
// 	}

// 	function getLibXmlError(){
// 		return $this->error;
// 	}
// }

// class FileException extends Exception{}
// class ConfException extends Exception{}


// Принцип построения catch обработчиков в том, чтобы разместить обработчики от частного случая к общему
// Если разместить первым Exception, то дальше проверка не пойдет, так как все ошибки относятся к Exception
// class Runner {
// 	static function init(){
// 		try {
// 			$conf = new Conf (dirname (__FILE__) . "/conf01.xml");
// 			print "user: " . $conf->get('user') . "\n";
// 			print "host: " . $conf->get('host') . "\n";
// 			$conf->set("pass", "newpass");
// 			$conf->write();
// 		}catch (FileException $e){
// 			// Файл не существует либо недоступе для записи
// 		}catch(XmlException $e){
// 			// Поврежденный XML-файл
// 		}catch (ConfException $e){
// 			// Некорректный формат XML-файла
// 		}catch (Exception $e){
// 			// Ограничитель: этот код не должен никогда вызываться
// 		}
// 	}
// }


// ******************** Завершенные классы и методы ********************************

// Если необходимо зафиксировать уровень функциональности класса, то необходимо использовать слово final
// Final позволяет положить конец наследованию. Завершенный метод нельзя переопределить

// class Checkout{
// 	final function totalize(){
// 		// вычисление итоговых данных
// 	}
// }


// ******************** Работа с методами-перехватчиками ********************************

// __get ($property) - Вызывается при обращении к неопределенному свойству
// __set ($property, $value) - Вызывается, когда неопределенному свойству присваивается значение
// __isset ($property) - Вызывается, когда функция isset() вызывается для неопределенного свойства
// __unset ($property) - Вызывается, когда функция unset() вызывается для неопределенного свойства
// __call ($property) - Вызывается при обращении к неопределенному методу


// ****************** Метод __get() || __isset()
// вызывается, когда клиентский код пытается прочитать необъявленное свойство
// Вызывается автоматически

// class Person{
// 	function __get($property) {
// 		$method = "get{$property}";
// 		if(method_exists($this, $method)){
// 			return $this->$method();
// 		}
// 	}
// 	// метод __isset() работает подобно методу __get()
// 	// метод __isset() вызывается после того, как клиентский код вызывает функции __isset() для неопределенного свойства
// 	function __isset($property) {
// 		$method = "get{$property}";
// 			return (method_exists($this, $method));
// 	}

// 	function getName(){
// 		return "Иван";
// 	}

// 	function getAge(){
// 		return 44;
// 	}
// }

// // После вызова метода __get(), в котором перед именем переданного ему свойства добавляется строка "get"
// // Полученная строка с новым именем передается функции method_exists()

// $p = new Person();
// print $p->name;


// ****************** Метод __set() || __unset()
// Вызывается, когда клиентский код пытается присвоить значение неопределенному свойству
// Передается два аргумента - Имя свойства и значение
// В методе проверяется есть существует ли указанный метод, и если да, то он вызывается

// class Person {
// 	private $_name;
// 	private $_age;

// 	function __set($property, $value){
// 		$method = "set{$property}";
// 		if(method_exists($this, $method)){
// 			return $this->$method($value);
// 		}
// 	}
// 	// метод __unset() - зеркальное отражение метода __set()
// 	// Вызывается, когда функции unset() передаетмя имя неопределенного свойства
// 	function __unset($property){
// 		$method = "set{$property}";
// 		if(method_exists($this, $method)){
// 			$this->$method(null);
// 		}
// 	}

// 	function setName($name){
// 		$this->_name = $name;
// 		if(!is_null($name)){
// 			$this->_name = strtoupper($this->_name)
// 		}
// 	}

// 	function setAge($age){
// 		$this->_age = strtoupper($age);
// 	}
// }


// ****************** Метод __call()
// Вызывается, когда клиентский код обращается к неопределенному свойству
// Передает имя несуществующего метода и массив, в котором содержатся все аргументы, переданные клиентом
// Метод __call() может использоваться для делегирования

//** Делегирование - это механизм, посредством которого один объект может вызвать метод другого объекта


// class PersonWriter {
// 	function writeName(Person $p){
// 		print $p->getName() . "\n";
// 	}

// 	function writeAge (Person $p){
// 		print $p->getAge() . "\n";
// 	}
// }

// class Person {
// 	private $writer;

// 	// Конструктору в качестве аргумента передается объект типа PersonWriter
// 	function __construct (PersonWriter $writer){
// 		$this->writer = $writer;
// 	}

// 	// Передается значение аргумента $methodname и проверяется наличие метода с таким же именем
// 	// Если метод найден, его вызов делегируется объекту PersonWriter
// 	function __call ($methodname, $args){
// 		if(method_exists($this->writer, $methodname)){
// 			return $this->writer->methodname($this);
// 		}
// 	}

// 	function getName(){
// 		return "Иван";
// 	}

// 	function getAge(){
// 		return 44;
// 	}
// }

// $person = new Person(new PersonWriter());
// $person->writerName();


// ******************** Определение методом деструктора ********************************

// Метод __destruct() вызывается пепосредственно перед тем, как объект отправляется на "свалку"
// Может использоваться, например, чтобы точно сохранить данные перед удалением

// class Person{
// 	private $name;
// 	private $age;
// 	private $id;

// 	function __construct($name, $age){
// 		$this->name = $name;
// 		$this->age = $age;
// 	}

// 	function setId($id){
// 		$this->id = $id;
// 	}

// 	function __destruct(){
// 		if(!empty($this->id)){
// 			// Сохраняем данные объекта Person
// 			print "Сохранение объекта person\n";
// 		}
// 	}
// }

// Метод __destruct() вызывается каждый раз, когда объект Person удаляется из памяти. Это происходит при вызове метода __unset()

// $person = new Person("Иван", 23);
// $person->setId(343);
// unset($person);


// ******************** Копирование объектов с помощью метода __clone() ********************************

// Применяются к экземпляру объекта и создает дополнительную копию
// Метод __clone() вызывается автоматически, когда для копирования объекта используется слово clone
// метод работае в контексте скопированного объекта, а не исходного
// class CopyMe{}
// $first = new CopyMe();
// $second = clone $first;


// class Person{
// 	private $name;
// 	private $age;
// 	private $id;

// 	function __construct($name, $age){
// 		$this->name = $name;
// 		$this->age = $age;
// 	}

// 	function setId($id){
// 		$this->id = $id;
// 	}

// 	function __clone(){
// 		$this->id = 0;
// 	}
// }

// // Когда оператор clone вызывается для объекта типа Person, создается его новая плоская копия, и для нее вызывается метод __clone()

// $person = new Person("Петр", 44);
// $person->setId(343);
// $person2 = clone $person;
// $person2: name: "Петр", age: 44, id: 0

// Выполнение плоской копии гарантирует, что значения элементарных свойств будут скопированы из старого объекта в новый
// свойства-объекты будут скопированы по ссылке
// class Account {
// 	public $balance;

// 	function __construct ($balance){
// 		$this->balance = $balance;
// 	}
// }

// class Person{
// 	private $name;
// 	private $age;
// 	private $id;

// 	function __construct($name, $age, Account $account){
// 		$this->name = $name;
// 		$this->age = $age;
// 		$this->account = $account;
// 	}

// 	function setId($id){
// 		$this->id = $id;
// 	}

// 	function __clone(){
// 		$this->id = 0;
// 	}
// }

// $person = new Person("Иван", 44, new Account(200));
// $person->setId(343);
// $person2 = clone $person;
// // Добавим $person немного денег
// $person->account->balance += 10;
// // Это изменение удивит $person2
// print $person2->account->balance;

// Объектная переменная $person содержит ссылку на объект типа Acoount, который мы сделали общедоступным ради компактности.
// Когда создается клон, он содержит ссылку на тот же самый объект Account, на который ссылается $person

// Если мы не хотим, чтобы после выполнения операции клонирования в новом объекте осталась ссылка на старое свойство-объект

// function __clone(){
// 	$this->id = 0;
// 	$this->account = clone $this->account;
// }


// ******************** Определение строковых значений для объектов ********************************

// Метод __toString() позволяет контролировать то, какую информацию будут выводить объеты при перчати
// Автоматические вызывается, когда объект передается функции print и echo

// class Person {

// 	function getName(){
// 		return "Иван";
// 	}

// 	function getAge(){
// 		return 44;
// 	}

// 	function __toString(){
// 		$desc = $this->getName();
// 		$desc .= "(возраст " . $this->getAge() . "лет) ";
// 		return $desc;
// 	}
// }
?>


<!----------------------- Средства для работы с объектами ---------------------------->
<?


// ******************** PHP и пакеты ********************************

// Пакеты - это набор связанных классов, обычно сгрупированных вместе некоторым способом

// Для избежания конфликтов приходилось использовать подобные названия классов
// abstract class
// PHPUnit_Framework_MockObject_Matcher_statelessInvocation implements PHPUnit_Framework_MockObject_Matcher_Invocation{
// 	//...
// }

// ******************** PHP и пространства имен ********************************

// Чтобы избежать длинных наименований пакетов, используются пространства имен для избежания конфликтов
// Объявление пространства имен должно быть первым оператором в файле
// namespace business;

// class user{
// 	//...
// }

// // Теперь можем обратиться к классу везде следующим образом

// $buser = new business::user();


// Можно использовать многоуровневые пространства имен
// Преобразованная версия классов из пространства имен

// namespace PHPUnit::Framework::MockObject::Matcher;

// interface Invocation{
// 	//...
// }


// Абстрактный класс, который реализует интерфейс.
// Класс находится в другом файле

// namespace PHPUnit::Framework::MockObject::Matcher;
// require_once('listing05.06.php');
// abstract class StatelessInvocation implements Invocation{
// 	//..
// }


// Чтобы обратиться к классу или функции за пределами пространства имен, нужно использовать полностью уточненное имя
// namespace test::smithco;

// // Включим определение класса StatelessInvocation
// require_once('listing5.php');

// class myStatelessInvocation extends PHPUnit::Framework::MockObject::Matcher::StatelessInvocation {
// 	//...
// }


// Для избежания подобных длинных наименования можно использовать слово import

// namespace test::smithco;

// import PHPUnit::Framework::MockObject::Matcher::StatelessInvocation;

// // Включим определение класса StatelessInvocation
// require_once('listing5.php');

// class myStatelessInvocation extends StatelessInvocation {
// 	//...
// }

// // Если приходится работать с несколькими классами из разных пространств имен с одиннаковыми названиями, то можно присвоить псевдоним
// import PHPUnit::Framework::MockObject::Matcher::StatelessInvocation as phpunit;

// class myStatelessInvocation extends phpunit::StatelessInvocation {
// 	//...
// }


// ******************** Пути включения файлов ********************************

// Относительные пути включения
// require_once('../../projectlib/business/User.php');

// Абсолютные пути включения
// require_once('/home/john/projectlib/business/User.php');

// // Чтобы отвязать путь включения от определенного расположения файла
// inclide_path = ".:/usr/local/lib/php-libraries";

// // При использовании сервера Apache директиву inclide_path можно указать в глобальном файле конфигурации сервера
// php_value inclide_path value .:/usr/local/lib/php-libraries

// Если нет доступа к файлу php.ini
// с помощью функции set_include_path() можно передать список каталогов (в таким виде, как он выглядел бы в файле php.ini)
// Получить каталог из файла php.ini можно с помощью функции get_include_path()

// set_include_path(get_include_path() . ":/home/john/phplib/");


// ******************** Автозагрузка ********************************

// Автоматически подключит файл, если он находится в той же директории
// function __autoload($classname){
// 	include_once("{$classname}.php");
// }

// $product1 = new ShopProduct("Собачье сердце", "Михаил", "Булгаков", 5.99);


// Функция преобразует символы подчеркивания в символ разделения каталогов
// function __autoload($classname){
// 	$path = str_replace('_', DIRECTORY_SEPARATOR, $classname);
// 	include_once("{$path}.php");
// }
// $y = new business_ShopProduct();


// ******************** Функции для работы с классами и объектами ********************************

// Динамическая ссылка на классы
// tasks/Task.php
// class Task {
// 	function doSpeak(){n
// 		print "Привет!";
// 	}
// }

// // TaskRunner.php
// $classname = "Task";
// require_once("tasks/{$classname}.php");
// $myObj = new $classname();
// $myObj->doSpeak();


// ******************** Поиск классов ********************************

// Проверка на существование класса

// $classname = "Task";
// $path = "tasks/{$classname}.php";
// if(!file_exists($path)){
// 	throw new Exception ("Файл {$path} не найден!");
// }
// require_once("$path");
// if(!class_exists($classname)){
// 	throw new Exception("Класс $classname не найден!");
// }

// $myObj = new $classname();
// $myObj->doSpeak();

// Чтобы получить массив всех классов, определенных в сценарии, можно воспользоваться функцией get_declared_classes()
// print_r(get_declared_classes());


// ******************** Получение информации об объекте или классе ********************************

// Проверяем, что  объект относится к классу CDProduct
// function getProduct(){
// 	return new CDProduct("Пропавший без вести", "Группа", "ДДТ", 10.99, 60.33);
// }
// $product = getProduct();
// if(get_class($product) == 'CDProduct'){
// 	print "\$product -- объект класса CDProduct\n";
// }

// Чтобы узнать, что объект принадлежит к определенному семейству

// $product = getProduct();
// if($product instanceof ShopProduct){
// 	print "\$product -- объект класса ShopProduct\n";
// }


// ******************** Получение информации о методах ********************************

// Получение всех методов класса
// print_r(get_class_methods('CDProduct'));


// Функция is_callable()
// Проверить существует ли метод
// Передать массив с сылкой на объект или имя класса, в качестве первого параметра
// Имя метода для проверки
// if(is_callable(array($product, $method))){
// 	print $product->$method();
// }
// Вернет true если метод существует


// Функция method_exists()
// Принимает ссылку на объект и имя метода
// if(method_exists($product, $method)){
// 	print $product->$method();
// }
// ***возвращает true - для закрытых, защищенных и общедоступных


// ******************** Получение информации о свойствах ********************************

// print_r(get_class_vars('CDProduct'));
// Возвращает массив свойств


// ******************** Получение информации о наследовании ********************************

// Функция get_parent_class()
// Принимает ссылка на объект или имя класса
// print get_parent_class('CDProduct');

// Функция is_subclass_of() - проверяет является ли класс дочерним для другого класса
// Принимает ссылку на дочерний объект и имя родительского элемента
// $product = getProduct();
// if(if_subclass_of($product, 'ShopProduct')){
// 	print "CDProduct является подклассом класса ShopProduct\n"
// }


// ******************** Вызов метода ********************************

// Функция call_user_func() может вызывать либо метода, либо функции
// $returnVal = call_user_func('MyFunction');

// Для вызова метода в качестве первого аргумента указывается массив
// Первым элементов массива должен быть объект, вторыс - имя вызываемого метода
// $returnVal = call_user_func(array($myObj, 'methodName'));

// Вызываемому методу или функции можно передать любое кол-во аргументов
// $product = getProduct();
// call_user_func(array($productn 'setDiscount'), 20); == $product->setDiscount(20);


// Если мы заранее не знаем сколько аргументов будет принимать метод
// Функция call_user_func_array() вторым параметром принимает массив аргументов
// function __call ($method, $args){
// 	if(method_exists($this->thirdpartyShop, $method)){
// 		return call_user_func_array(array($this->thirdpartyShop, $method), $args);
// 	}
// }


// ******************** Reflection API ********************************

// Предоставляет информацию почти о всех аспектах класса CDProduct, включая состояние доступа к свойствам и методам, аргументы, необходимые каждому методу и расположение каждого метода внутри файла сценария
// $prod_class = new ReflectionClass('CDProduct');
// Reflection::export($prod_class); // Получене информации о классе


// ************************* Исследование класса

// $prod_class = new ReflectionClass('CDProduct');
// Узнать к какому типу класса он относится и можно ли создать его экземпляр

// function classData(ReflectionClass $class){
// 	$details = "";
// 	$name = $class->getName();
// 	if($class->isUserDefined()){
// 		$details .= "$name -- класс определен пользователем\n";
// 	}
// 	if($class->isInternal()){
// 		$details .= "$name -- встроенный класс\n";
// 	}
// 	if($class->isInterface()){
// 		$details .= "$name -- это интерфейс\n";
// 	}
// 	if($class->isAbstract()){
// 		$details .= "$name -- это абстрактный класс\n";
// 	}
// 	if($class->isFinal()){
// 		$details .= "$name -- это завершенный класс\n";
// 	}
// 	if($class->isInstantiable()){
// 		$details .= "$name -- можно создать экземпляр класса\n";
// 	}else{
// 		$details .= "$name -- нельзя создать экземпляр класса\n";
// 	}
// 	return $details;
// }
// $prod_class = new ReflectionClass('CDProduct');
// print classData($prod_class);

// class ReflectionUtil{
// 	static function getClassSource (ReflectionClass $class) {
// 		$path = $class->getFileName();
// 		$lines = @file($path);
// 		$from
// 	}
// }


// ************************* Исследование методов

// ссылку на объект ReflectionMethod можно получить:
// 1. ReflectionMethod::getMethods()
// 2. ReflectionMethod::getMethods() + передать имя метода

// $prod_class = new ReflectionClass('CDProduct');
// $methods = $prod_class->getMethods();

// foreach($methods as $method){
// 	print methodData($method);
// 	print "\n-----\n";
// }

// function methodData(ReflectionMethod $method){
// 	$details = "";
// 	$name = $method->getName();
// 	if($method->idUserDefined()){
// 		$details .= "$name -- метод определен пользователем \n";
// 	}
// 	if($method->idInternal()){
// 		$details .= "$name -- внутренний метод \n";
// 	}
// 	if($method->idAbstract()){
// 		$details .= "$name -- абстрактный метод \n";
// 	}
// 	if($method->idPublic()){
// 		$details .= "$name -- общедоступный метод \n";
// 	}
// 	if($method->idProtected()){
// 		$details .= "$name -- защищенный метод \n";
// 	}
// 	if($method->idPrivate()){
// 		$details .= "$name -- закрытый метод \n";
// 	}
// 	if($method->idStatcic()){
// 		$details .= "$name -- статический метод \n";
// 	}
// 	if($method->idFinal()){
// 		$details .= "$name -- завершенный метод \n";
// 	}
// 	if($method->idConstructor()){
// 		$details .= "$name -- метод конструктора \n";
// 	}
// 	if($method->returnsReference()){
// 		$details .= "$name -- метод возвращает ссылку, а не значение\n";
// 	}
// 	return $details;
// }

// class ReflectionUtil {
// 	static function getMethodSource (ReflectionMethod $method){
// 		$path = $method->getFileName();
// 		$lines = @file($path);
// 		$from = $method->getStartLine();
// 		$to = $method->getEndLine();
// 		$len = $to-$from+1;
// 		return implode(array_slice($liens, $from-1, $len));
// 	}
// }
// $class = new ReflectionClass('CDProduct');
// $method = $class->getMethods('getSummaryLine');
// print ReflectionUtil::getMethodSource($method);


// ************************* Исследование аргументов методов

// класс ReflectionMethod::getParameters() - возвращает массив объектов типа ReflectionParameter

// $prod_class = new ReflectionClass('CDProduct');
// $method = $prod_class->getMethod("__construct");
// $params = $method->getParameters();

// foreach($params as $param){
// 	print argData($param);
// }

// function argData(ReflectionParameter $arg){
// 	$details = "";
// 	$name = $arg->getName();
// 	$class = $arg->getClass();
// 	if(!empty($class)){
// 		$classname = $class->getName();
// 		$details .= "\$$name должен быть объектом типа $classname\n";
// 	}
// 	if($arg->isPassedByReference()){
// 		$details .= "\$$name передан по ссылке \n";
// 	}
// 	return $details;
// }


// ************************* Использование интерфейса Reflection API

// Класс, который динамически вызывает объект типа Module

// class Person {
// 	public $name;

// 	function __construct ($name){
// 		$this->name = $name;
// 	}
// }

// interface Module{
// 	function execute();
// }

// class FtpModule implements Module {
// 	function setHost($host){
// 		print "FtpModule::setHost(): $host\n";
// 	}

// 	function setUser($user){
// 		print "FtpModule::setUser() : $user\n";
// 	}

// 	function execute(){
// 		//Выполнение работы
// 	}
// }

// class PersonModule implements Module {
// 	function setPerson(Person $person){
// 		print "PersonModule::setPerson() : {$person->name}\n";
// 	}

// 	function execute(){
// 		// Выполнение работы
// 	}
// }

// class ModuleRunner{
// 	private $configData = array(
// 			"PersonModule" => array('person' => 'bob'),
// 			"FtpModule" => array('host' => 'example.com',
// 								'user' => 'anon')
// 		);
// 	private $modules = array();
// 	//....

// 	function handleMethod(Module $module, ReflectionMethod $method, $params){
// 		$name = $method->getName();
// 		$args = $method->getParameters();

// 		if(count($args) != 1 || substr($name, 0, 3) != "set"){
// 			return false;
// 		}

// 		$property = strtolower(substr($name, 3));
// 		if(!isset($params[$property])){
// 			return false;
// 		}
// 		$arg_class = $args[0]->getClass();
// 		if(empty($arg_class)){
// 			$method->invoke($module, $params[$property]);
// 		}else{
// 			$method->invoke($module, $arg_class->newInstance($params[$property]));
// 		}
// 	}
// }

// class ModuleRunner {
// 	// ...

// 	function init(){
// 		$interface = new ReflectionClass('Module');
// 		foreach($this->configData as $modulename => $params){
// 			$module_class = new ReflectionClass($modulename);
// 			if(!$module_class->isSubclassOf($interface)){
// 				throw new Exception ("Неизвестный тип модуля: $modulename");
// 			}
// 			$module = $module_class->newInstance();
// 			foreach($module_class->getMethods() as $methods{
// 				$this->handleMethod($module, $method, $params);
// 				// ...
// 			}
// 			array_push($this->modules, $module);
// 		}
// 	}
// }
// $test = new ModulePunner();
// $test->init();
?>


<!----------------------- Объекты и методология проектирования ---------------------------->
<?


// ******************** Объектно=ориентированное и процедурное программирование ********************************
// Процедурный код
// Процедурный код имеет форму последовательности команд и вызовов функций
// Управляющий код несет ответственность за обработку различных ситуаций

// Объектно-ориентированный код
// Объектно-ориентированный код пытается минимизировать зависимости путем передачи отвественности за управление задачами от клиентского кода объектам в системе

// function readParams($sourceFile){
// 	$params = array();
// 	if(preg_match("/\.xml$/i", $source)){
// 		// Читаем параметры в формате XML из $source
// 	}else{
// 		// Читаем текстовый параметр из $source
// 	}
// 	return $params;
// }

// function writeParams($params, $sourceFile){
// 	if(preg_match("/\.xml$/i", $source)){
// 		// Читаем параметры в формате XML из $source
// 	}else{
// 		// Записываем текстовый параметр в $source
// 	}
// }

// $file = "./param.txt";
// $array['key1'] = "val1";
// $array['key2'] = "val2";
// $array['key3'] = "val3";
// writeParams($array, $file); //Запишем массив параметров в файл
// $output = readParams($file);
// print_r($output);

// // Приходится вводить условия проверки форматов в каждую функцию

// abstract class ParamHandler{
// 	protected $source;
// 	protected $params = array();

// 	function __construct($source){
// 		$this->source = $source;
// 	}

// 	function addParams($key, $val){
// 		return $this->params[$key] = $val;
// 	}

// 	function getAllParams(){
// 		return $this->params;
// 	}

// 	static function getInstance($filename){
// 		if(preg_match("/\.xml$/i", $filename)){
// 			return new XmlParamHandler($filename)
// 		}
// 		return new TextParamHandler($filename);
// 	}

// 	abstract function write();
// 	abstract function read();
// }

// class XmlParamHandler extends ParamHandler{

// 	function write(){
// 		// Запись в формате XML
// 		// массива параметров $this->params
// 	}

// 	function read(){
// 		// Чтение из XML-файла и
// 		// запись значений в массив $this->params
// 	}
// }

// class TextParamHandler extends ParamHandler{

// 	function write(){
// 		// Запись в текстовый файл
// 		// массива параметров $this->params
// 	}

// 	function read(){
// 		// Чтение из XML-файла и
// 		// запись значений в массив $this->params
// 	}
// }

// $test = ParamHandler::getInstance("./params.xml");
// $test->addParam("key1", "val1");
// $test->addParam("key2", "val2");
// $test->addParam("key3", "val3");
// $test->write();//Запись файла в XML-формате

// $test = ParamHandler::getInstance("./params.txt");
// $test->read();//Читаем данные из текстового файла


// ************************* Ответственность
// Процедурный стиль
// Управляющий код несет отвественность за выбор формата, но принимает это решение не один раз, а дважды.
// Процедурный код занимается деталями

// Объектно-ориентированный подход
// Выбор формата файла делает статический метод getInstance(), который проверяет расширение файла только один раз и создает нужный подкласс.
// Клиентский код не несет ответственности за реализацию
// Работает только с интерфейсом, не заботясь о деталях реализации


// ************************* Связность
// Это степень, в которой соединение процедуры связаны одна с другой

// Объектно-ориентированный подход
// в классах типа ParamHandler связанные процедуры собраны в общем контексте

// Процедурный стиль
// Связанные процедуры разделены
// Код работы с форматом разбросан по нескольким функциям


// ************************* Тесная связь
// Когда отдельные части кода системы тесно связаны одна с другой, так что измененеие в одной части влесет необходимость изменений в других частях

// Объектно-ориентированный подход
// Коды класса отделяются один от другого и от клиентского кода

// Процедурный стиль
// Функции readParams() и writeParams() осуществляют одну и ту же проверку расширения файла
// любое изменение в логике, которое осуществляется для одной функции, должно быть реализовано и для другой


// ************************* Ортогональность
// Сочетание компонентов с четко определенными обязанностями наряду с независимостью от более широкой системы


// ************************* Полиморфизм
// - Это поддержка нескольких реализация на основе общего интерфейса

// ************************* Инкапсуляция
// - Это сокрытие данных и функциональности от клиентского кода
// Цель - сделать каждую часть как можно более независимой от других
?>


<!----------------------- Шаблоны ---------------------------->
<?


// ******************** Что такое шаблоны проектирования ********************************

// Шаблон - это решение задачи в некотором контексте

// В мире программного обеспечения, шаблон - это реальное проявлени генетической памяти организации

// С помощью шаблонов проектирования описываются и формализуются типовые задачи и их решения.


// ******************** Некоторые принципы шаблонов ********************************

// ************************* Композиция и наследование
// Наследование - это эффективный способ описания меняющихся обстоятельств или контекста.

// Занятия в цниверситете - лекции/семинары
// Лекции - фиксированная цена за лекции/почасовая оплата за лекции
// Семинары - фиксированная цена за семинар/почасовая оплата за семинар

// Чтобы избежать повторения формирования цены, необходимо переместить логику оплаты вверх, в супркласс

// abstract class Lesson {
// 	protected $duration;
// 	const FIXED = 1;
// 	const TIMED = 2;
// 	private $costtype;

// 	function __construct ($duration, $costtype=1){
// 		$this->duration = $duration;
// 		$this->costtype = $costtype;
// 	}

// 	function cost(){
// 		switch ($this->costtype){
// 			CASE self::TIMED :
// 				return (5 * $this->duration);
// 				break;
// 			CASE self::FIXED :
// 				return 30;
// 				break;
// 			default:
// 				$this->costtype = self::FIXED;
// 				return 30;
// 		}
// 	}

// 	function chargeType(){
// 		switch ($this->costtype){
// 			CASE self::TIMED :
// 				return "Почасовая оплата";
// 				break;
// 			CASE self::FIXED :
// 				return "Фиксированная оплата";
// 				break;
// 			default:
// 				$this->costtype = self::FIXED;
// 				return "Фиксированная ставка";
// 		}
// 	}

// 	// Другие методы класса Lesson
// }

// class Lecture extends Lesson{
// 	// Специфические для Lecture реализации...
// }

// class Seminar extends Lesson{
// 	// Специфические для Seminar реализации...
// }

// Новая структура
// Lesson (+_construct(duration, costtype=1), +cost(), +chargeType()) - Lectute/Seminar


// ************************* Использование композиции

// Создадим абстрактный класс CostStrutegy(), в котором определены абстрактные методы cost() и chargeType()

// abstract class Lesson{
// 	private $duration;
// 	private $costStrategy;

// 	function __construct($duration, CostStrategy $strategy) {
// 		$this->duration = $duration;
// 		$this->costStrategy = $strategy;
// 	}

// 	function cost(){
// 		return $this->costStrategy->cost($this);
// 	}

// 	function chargeType(){
// 		return $this->costStrategy->chargeType();
// 	}

// 	function getDuration(){
// 		return $this->duration;
// 	}
// 	// Другие методы класса Lesson...
// }
// Конструкторы класса Lesson ередается объект типа CostStrategy, который он сохраняет в виде свойства
// Метод Lesson::cost() просто вызывает CostStrategy::chargeType()
// Такой явный вызов метода другого объекта называется Делегированием*

// abstract class CostStrategy {
// 	abstract function cost(Lesson $lesson);
// 	abstract function chargeType();
// }

// class TimedCostStrategy extends CostStrategy {
// 	function cost (Lesson $lesson){
// 		return ($lesson->getDuration() * 5);
// 	}

// 	function chrgeType(){
// 		return "Почасовая оплата";
// 	}
// }

// class FixedCostStrategy extends CostStrategy {
// 	function cost (Lesson $lesson) {
// 		return 30;
// 	}

// 	function chargeType(){
// 		return "Фиксированная ставка";
// 	}
// }

// // Мы можем изменить способ расчета стоимости занятий, выполняемый любым объектом типа Lesson, передав ему другой объект типа CostStrategy

// $lesson[] = new Seminar(4, new TimedCostStrategy());
// $lesson[] = new Lecture(4, new FixedCostStrategy());

// foreach ($lessons as $lesson) {
// 	print "Оплата за занятие {$lesson->cost()}"; // Оплата за занятие 20. Тип оплаты: Почасовая оплата
// 	print "Тип оплаты: {$lesson->chargeType()}\n"; // Оплата за занятие 30. Тип оплаты: Фиксированная ставка
// }


// ************************* Разделение

// В программе существует множественное обращение к определенной базе данных.
// При изменении базы данных придется будет вносить множественное изменение в код
// Для этого существуют готовые пакеты для работы с базой данных
// Используя такие пакеты, при изменение базы данных код необходимо будет менять только в одном месте приложения

// Пример пакетов:
// PEAR::DB
// PEAR::MDB2
?>


<!----------------------- Генерация объектов ---------------------------->
<?

// ******************** Генерация объктов: задачи и решения ********************************

// Определяем абстрактный базовый класс Employee
// abstract class Employee {
// 	protected $name;

// 	function __construct($name){
// 		$this->name = $name;
// 	}

// 	abstract function fire();
// }

// // Определяем реализующий класс Minion
// class Minion extends Employee{
// 	function fire(){
// 		print "{$this->name}: убери со стола \n"
// 	}
// }

// class NastyBoss {
// 	private $employee = array();

// 	function addEmployee($employeeName) {
// 		$this->employees[] = new Minion ($employeeName);
// 	}

// 	function projectFails(){
// 		if(count($this->employees) > 0){
// 			$emp = array_pop($this->employees);
// 			$emp->fire();
// 		}
// 	}
// }

// $boss = new NastyBoss();
// $boss->addEmployee("Игорь");
// $boss->addEmployee("Владимир");
// $boss->addEmployee("Мария");
// $boss->projectFails(); // Мария: убери со стола


// Если класс NastyBoss не создает экземпляр объекта Minion
// abstract class Employee {
// 	protected $name;

// 	function __construct($name){
// 		$this->name = $name;
// 	}

// 	abstract function fire();
// }

// class NastyBoss {
// 	private $employee = array();

// 	function addEmployee(Employee $employee) {
// 		$this->employees[] = $employee;
// 	}

// 	function projectFails(){
// 		if(count($this->employees) > 0){
// 			$emp = array_pop($this->employees);
// 			$emp->fire();
// 		}
// 	}
// }

// // Новый класс типа Employee
// class CluedUp extends Employee {
// 	function fire(){
// 		print "{$this->name}: вызови адвоката\n";
// 	}
// }

// $boss = new NastyBoss();
// $boss->addEmployee(new Minion ("Игорь"));
// $boss->addEmployee(new CluedUp ("Владимир"));
// $boss->addEmployee(new Minion ("Мария"));
// $boss->projectFails();
// $boss->projectFails();
// $boss->projectFails();


// Создадим статический метод к классу Employee, в котором реализована стратегия создания объекта

// abstract class Employee {
// 	protected $name;
// 	private ststic $types = array ('Minion', 'CluedUp', 'WellConnected');

// 	static function recruit ($name){
// 		$num = rand(1, count(self::$types)) -1;
// 		$class = self::$types[$num];
// 		return new $class($name);
// 	}

// 	function __construct($name){
// 		$this->name = $name;
// 	}

// 	abstract function fire();
// }

// class WellConnected extends Employee {
// 	function fire(){
// 		print "{$this->name} : позвони папику \n"
// 	}
// }
// // Методу передается строка с именем сотрудника, которая используется для создания экземпляра конкретного подтипа Employee, выбранного случайным образом
// $boss = new NastyBoss();
// $boss->addEmployee(Employee::recruit("Игорь"))
// $boss->addEmployee(Employee::recruit("Владимир"))
// $boss->addEmployee(Employee::recruit("Мария"))


// ************************* Шаблон Singleton

// Проблема:
// 1. Объект Preferences должен быть доступен для любого объекта в системе
// 2. Объект Preferences не должен сохраняться в глобальной переменной, значение которой может быть случайно запорчено
// 3. В системе не должно быть больше одного объекта Preferences

// class Preferences {
// 	private $props = array();
// 	private static $instance;

// 	public static function getInstance(){
// 		if(empty (self::$instance)){
// 			self::$instance = new Preferences();
// 		}
// 		return self::$instance;
// 	}
// 	private function __construct(){

// 	}

// 	public function setProperty($key, $val){
// 		$this->props[$key] = $val;
// 	}

// 	public function getProperty ($key){
// 		return $this->props[$key];
// 	}
// }

// // Свойство $instance - закрытое и статическое, поэтому к нему нельзя подключить доступ из-за пределов класса
// // у метода getInstance() - общедоступный и статический, его можно вызвать через класс

// $pref = Preferences::getInstance();
// $pref->setProperty("name", "Иван");

// unset($pref);//Удаляем ссылку

// $pref2 = Preferences::getInstance();
// // Убедимся, что ранее установленное значение сохранено
// print $pref2->getProperty("name"). "\n";


// ************************* Шаблон Factory Method
// Решает проблему создания экземпляров объектов, когда в коде используются абстрактные типы


// abstract class ApptEncoder {
// 	abstract function encode();
// }

// class BloggsApptEncoder extends ApptEncoder{
// 	function encode(){
// 		return "Данные о встрече закодированы в формате BloggsCal \n";
// 	}
// }

// class MegaApptEncoder extends ApptEncoder {
// 	function encode(){
// 		return "Данные о встрече закодированы в формате MegaCal \n";
// 	}
// }

// class CommsManager {
// 	function getApptEncoder(){
// 		return new BloggsApptEncoder();
// 	}
// }

// // Класс CommsManager отвечает за генерацию объектов BloggsApptEncoder

// class CommsManager {
// 	const BLOGGS = 1;
// 	const MEGA = 2;
// 	private $mode = 1;

// 	function __construct($mode){
// 		$this->mode = $mode;
// 	}
// 	// Добавим колонтитул в каждую запись
// 	function getHeaderText(){
// 		switch ($this->mode){
// 			case (self::MEGA) :
// 				return "MegaCal верхний колонтитул \n";
// 			default:
// 				return "BloggsCal верхний колонтитул \n";
// 		}
// 	}

// 	function getApptEncoder(){
// 		switch ($this->mode){
// 			case (self::MEGA) :
// 				return new MegaApptEncoder();
// 			default:
// 				return new BloggsApptEncoder();
// 		}
// 	}
// }

// $comms = new CommsManager(CommsManager::MEGA);
// $apptEncoder = $comms->getApptEncoder();
// print $apptEncoder->encode();

// До момента выполнения программы мы не знаем, какой вид объекта нам понадобится создать
// Мы  не должны иметь возможность достаточно просто добавлять новые типы объектов
// Каждый тип продукта связан с контекстом, который требует других специализированных операций


// Переопределеим CommsManager в виде абстрактного класса

// abstract class ApptEncoder {
// 	abstract function encode();
// }

// class BloggsApptEncoder extends ApptEncoder{
// 	function encode(){
// 		return "Данные о встрече закодированы в формате BloggsCal \n";
// 	}
// }

// abstract class CommsManager{
// 	abstract function getHeaderText();
// 	abstract function getApptEncoder();
// 	abstract function getFooterText();
// }

// class BloggsCommsManager extends CommsManager {
// 	function getHeaderText(){
// 		return "BloggsCal верхний колонтитул\n";
// 	}

// 	function getApptEncoder(){
// 		return new BloggsApptEncoder();
// 	}

// 	function getFootertext(){
// 		return "BloggsCal нижний колонтитул \n";
// 	}
// }

// Метод BloggsCommsManager::getApptEncoder() Возвращает объект типа BloggsApptEncoder
// Клиентский код, вызывающий getApptEncoder(), ожидает получить объект типа ApptEncoder и необязательно должен знать что-либо о конкретном классе продукта


// ************************* Шаблон Abstract Factory
// Решает проблему настройки наследования


// Существует 3 класса, которые реализуют абстрактный класс CommsManager

// abstract class CommsManager {
// 	abstract function getHeaderText();
// 	abstract function getApptEncoder();
// 	abstract function getTtdEncoder();
// 	abstract function getContactEncoder();
// 	abstract function getFootertext();
// }

// class BloggsCommsManager extends CommsManager {
// 	function getHeaderText(){
// 		return "BloggsCal верхний колонтитул \n";
// 	}

// 	function getApptEncoder(){
// 		return new BloggsApptEncoder();
// 	}

// 	function getTtdEncoder(){
// 		return new BloggsTtdEncoder();
// 	}

// 	function getContactEncoder(){
// 		return new BloggsContactEncoder();
// 	}

// 	function getFooterText(){
// 		return "BloggsCal нижний колонтитул \n";
// 	}
// }

// Метод getContactEncoder() объявлен абстрактным классе CommsManager и реализован в классе BloggsCommsManager

// Мы отделили нашу систему от деталей реализации. Мы можем добавлять и удалять любое количество кодирующих форматов в нашем примере, не опасаясь проблем
// Мы ввели в действие группировку функционально связанных элементов нашей системы. При использовании BloggsCommsManager есть гарантия, что мы будем работать только с классами, связаннами с BloggsCal
// Мы должны будем не только создать конкретные реализации новых продуктов, но и внести изменения в асбтрактный класс создателя, а также создать каждого из конкретных реализаторов


// Вместо того, чтобы создавать отдельные методы для каждого объекта шаблона Factory Method, мы можем создать один метод make() и передать ему в качестве аргумента флаг, определеяющий тип возвращаемого объекта

// abstract class CommsManager {
// 	const APPT = 1;
// 	const TTD = 2;
// 	const CONACT = 3;

// 	abstract function getHeaderText();
// 	abstract function make($flag_int);
// 	abstract function getFootertext();
// }

// class BloggsCommsManager extends CommsManager {
// 	function getHeaderText(){
// 		return "BloggsCal верхний колонтитул \n";
// 	}

// 	function make($flag_int){
// 		switch ($flag_int){
// 			case self::APPT:
// 				return new BloggsApptEncoder();
// 			case self::CONTACT:
// 				return new BloggsContactEncoder():
// 			case self::TTD:
// 				return new BloggsTtdEncoder();
// 		}
// 	}

// 	function getFooterText(){
// 		return "BloggsCal нижний колонтитул \n";
// 	}
// }


// ************************* Шаблон Prototype
// Решает вопрос параллельных иерархий наследования, которые каждый раз при добавлении нового семейства продукта вынуждают создавать связанный с ним конкретного создателя(кодировщикам BloggsCal соответствует BloggsCommsManager)
// Позволяет заменить наследование композицией
// Такой подход способствует гибкости во время выполнения программы и сокращает количество классов, которые необходимо создать

// !!! Используется Если не нужны параллельные иерархии наследования и нужна максимальная гибкость во время выполнения программы

// class Sea {
// 	// Свойство судоходность.
// 	// От него зависит количество энергии движения, которое клетка моря отнимает у судна
// 	private $navigability = 0

// 	function __construct($navigability){
// 		$this->navigability = $navigability;
// 	}
// }
// class EarthSea extends Sea {};
// class MarsSea extends Sea {};

// class Plains {}
// class EarthPlains extends Plains {}
// class MarsPlains extends Plains {}

// class Forest{}
// class EarthForest extends Forest{}
// class MarsForest extends Forest{}

// class TerrainFactory{
// 	private $sea;
// 	private $forest;
// 	private $plains;

// 	function __construct(Sea $sea, Plains $plains, Forest $forest){
// 		$this->sea = $sea;
// 		$this->plains = $plains;
// 		$this->forest = $forest;
// 	}

// 	function getSea(){
// 		return clone $this->sea;
// 	}

// 	function getPlains(){
// 		return clone $this->plains;
// 	}

// 	function getForest(){
// 		return clone $this->forest;
// 	}
// }
// // Загружаем в экземпляр конкретной фабрики типа TerrainFactory экземпляры объектов наших продуктов
// $factory = new TerrainFactory(new EarthSea(), new EarthPlains(), new EarthForest());

// print_r($factory->getSea());
// print_r($factory->getPlains());
// print_r($factory->getForest());

// // Чтобы игра происходила на новой планете с морями и лесами как на Земле, и с равнинами, как на Марсе
// $factory = new TerrainFactory(new EarthSea(), new MarsPlains(), new EarthForest());

// // Теперь можно добавить объект Sea с модификатором судоходности
// $factory = new TerrainFactory(new EarthSea(-1), new EarthPlains(), new EarthForest());


// Класс, в который включен признак типа протокола календаря

// class Settings{
// 	static $COMMSTYPE = 'Mega';
// }

// // Класс, который использует значение флага для принятия решения о том, какой объект типа CommsManager нужно предоставить запросу

// require_once("Settings.php");

// class AppConfig{
// 	private static $instance;
// 	private $commsManager;

// 	private functioon __construct(){
// 		// Выполняется только один раз
// 		$this->init();
// 	}

// 	private function init(){
// 		switch (Settings::$COMMSTYPE){
// 			case 'Mega':
// 				$this->CommsManager = new MegaCommsManager();
// 				break;
// 			default:
// 				$this->commsManager = new BloggsCommsManager();
// 		}
// 	}

// 	public static function getInstance(){
// 		if(empty(self::$instance)){
// 			self::$instance = new self();
// 		}
// 		return self::$instance;
// 	}

// 	public function getCommsManager(){
// 		return $this->commsManager;
// 	}
// }

// // Класс AppConfig - это стандартный Singleton
// // Мы можем легко получить ссылку на экземпляр AppConfig в любом месте системы

// $commsMgr = AppConfig::getInstance()->getCommsManager();

// print $commsMgr->getApptEncoder()->encode();
?>


<!----------------------- Шаблоны для программирования гибких объектов ---------------------------->
<?

// ******************** Как структурировать классы, чтобы достичь гибкости ********************************
// Будут рассмотрены шаблоны:
// 1. Шаблон Composite
// 2. Шаблон Decorator
// 3. Шаблон Facade

// ************************* Шаблон Composite
// Это простой способ соединения и управления группами схожих объектов
// Иерархии наследования представляют собой деревья, корнем которых является суперкласс, а ветвями - специализированные подклассы

// В классе Unit определен абстрактный метод bombardStrength(), который устанавливает атакующую силу элемента, обстреливающего клетку
// abstract class Unit{
// 	abstract function bombardStrength();
// }

// class Archer extends Unit{
// 	function bombardStrendth(){
// 		return 4;
// 	}
// }

// class LaserCannonUnit extends Unit{
// 	function bombardStrength(){
// 		return 44;
// 	}
// }

// // Организуем отдельный класс для группировки элементов
// // class Army{
// // 	private $units = array();

// // 	function addUnit(Unit $unit){
// // 		aray_push($this->units, $unit);
// // 	}

// // 	function bombardStrength(){
// // 		$ret = 0;
// // 		foreach($this->units as $unit) {
// // 			$ret += $unit->bombardStrength()
// // 		}
// // 		return $ret;
// // 	}
// // }

// // Реорганизуем класс Army так, чтобы была возможность объединять силы армий, но в тоже время сохранять индивидуальные параметры каждой армии
// class Army{
// 	private $units = array();

// 	function addUnit(Unit $unit){
// 		aray_push($this->units, $unit);
// 	}
// 	// Меняем метод, чтобы делать итерации по всем армиям и объектам типа Unit
// 	function bombardStrength(){
// 		$ret = 0;
// 		foreach($this->units as $unit) {
// 			$ret += $unit->bombardStrength()
// 		}

// 		foreach($this->army as $army){
// 			$ret += army->bombardStrength();
// 		}
// 		return $ret;
// 	}

// 	function addArmy (Army $army){
// 		array_push($this->armies, $army);
// 	}
// }


// Все элементы нашей модели расширяют класс Unit - клиентский код может быть уверен, что любой объект типа Unit будет поддерживатть метод bombardStrength()
// классы Army и TroopCarrier - это композиты: они предназначены для того, чтобы поддерживать операции с объектами типа Unit

// abstract class Unit{
// 	abstract function addUnit(Unit $unit);
// 	abstract function removeUnit(Unit $unit);
// 	abstract function bombardStrength();
// }

// class Army extends Unit{
// 	private $units = array();

// 	function addUnit (Unit $unit){
// 		if(in_array($unit, $this->units, true)){
// 			return;
// 		}
// 		$this->units[] = $unit;
// 	}

// 	function bombardStrength(){
// 		$ret = 0;
// 		foreach ($this->units as $unit) {
// 			$ret += $unit->bombardStrength();
// 		}
// 		return $ret;
// 	}
// }

// class UnitException extends Exception{}

// class Archer extends Unit{
// 	function addUnit(Unit $unit){
// 		throw new UnitException(get_class($this) . "относится к 'листьям'");
// 	}

// 	function removeUnit(Unit $unit){
// 		throw new UnitException(get_class($this) . "относится к 'листьям'");
// 	}

// 	function bombardStrength(){
// 		return 4;
// 	}
// }

// // Нам не нужна возможность добавлять объект типа Unit к объекту типа Archer
// // Поэтому при вызове методов addUnit() и removeUnit() генерируется исключение

// // Улучшим проект, заменив асбтрактные методы removeUnit() и addUnit()

// abstract class Unit {
// 	abstract function bombardStrength();

// 	function addUnit(Unit $unit){
// 		throw new UnitException(get_class($this) . " относится к 'листьям'")
// 	}

// 	function removeUnit(Unit $unit){
// 		thrwo new UnitException(get_class($this) . " относится к 'листьям'");
// 	}
// }

// class Archer extends Unit{
// 	function bombardStrength(){
// 		return 4;
// 	}
// }

// Преимущества
/*1. Гибкость - Во всех элементах шаблона Composite используется общий супертип, поэтому очень просто добавлять к проекту новые объекты-композиты или "листья", не меняя более широкий контекст программы
2. Простота - Клиентский код имеет простой интерфейс
Клиентскому коду не нужно делать различие между объектом, состоящим из других объектов, и объектом-личтом
3. Явная досягаемость - Шаблоны организованы в древовидную структуру
Операция над определенной часть дерева может иметь более широкий формат
4. Неявная досягаемость - В древовидной структуре можно легко выполнить обход всех ее узлов */

// Преимущества на примере

// Создадим армию
// $main_army = new Army();

// // Добавим пару боевых единиц
// $main_army->addUnit(new Archer());
// $main_army->addUnit(new LaserCannonUnit());

// // Создадим еще одну армию
// $sub_army = new Army();

// // Добавим пару боевых единиц
// $sub_army->addUnit(new Archer());
// $sub_army->addUnit(new Archer());
// $sub_army->addUnit(new Archer());
// $sub_army->addUnit(new Archer());

// // Добавим вторую армию к первой
// $main_army->addUnit($sub_army);

// // Все вычисления выполняются за кулисами
// print "Атакующая сила: {$main_army->bombardStrength()}\n";

// // Мы создали новый объект типа Army и добавляем несколько боевых единиц Unit
// // Повторяем
// // Добавляем второй объект Army к первому
// // Вся сложность структуры, которую мы построили, оказывается полностью скрытой

// Мы можем разбить классы-композиты на подтипы CompositeUnit
// abstract class Unit{
// 	function getComposite(){
// 		return null;
// 	}

// 	abstract function bombardStrength();
// }

// abstract class CompositeUnit extends Unit{
// 	private $units = array();

// 	function getComposite(){
// 		return $this;
// 	}

// 	protected function units(){
// 		return $this->units;
// 	}

// 	function removeUnit(Unit $unit){
// 		$units = array();
// 		foreach($this->units as $thisunit){
// 			if($unit !== $thisunit){
// 				$units[] = $thisunit;
// 			}
// 		}
// 		$this->units = $units;
// 	}

// 	function addUnit(Unit $unit){
// 		if(in_array($unit, $this->unit, true)){
// 			return;
// 		}
// 		$this->units[] = $unit;
// 	}
// }

// // Методу joinExisting() передаются два объекта типа Unit
// // Превый - объект прибывший на клетку
// // Второй - объект, который занимал клетку до этого
// // Если второй объект типа Unit принадлежит к классу CompositeUnit, то первый объект попытается присоединиться к нему
// class UnitScript {
// 	static function joinExisting(Unit $newUnit, Unit $occupyingUnit){
// 		if(!is_null($comp = $occupyingUnit->getComposite())){
// 			$comp->addUnit($newUnit);
// 		}else{
// 			$comp = new Army();
// 			$comp->addUnit($occupyingUnit);
// 			$comp->addUnit($newUnit);
// 		}
// 		return $comp;
// 	}
// }

// Шаблон полезен, когда нужно обращаться с набором объектов так же, как с отдельным объектом, либо потому, что набор по своей сути такой же, как компонент


// ************************* Шаблон Decorator

// Встраивание всех функций в структуру наследования может привести к бурному росту классов в системе
// При попытке применить аналогичные изменения к разным ветвям дерева наследования, то это может привести к дублированию
// Вместо наследования в шаблоне используется композиция и делегирование
// В классах хранится экземпляр другого класса и его собственного типа
// В классе реализуется собственно процесс выполнения операции и вызывается аналогичная операция на объекте, на который у него есть ссылка

// abstract class Tile{
// 	abstract function getWealthFactor();
// }

// class Plains extends Tile{
// 	private $wealthFactor = 2;

// 	function getWealthFactor(){
// 		return $this->wealthFactor;
// 	}
// }

// abstract class TileDecorator extends Tile{
// 	protected $tile;

// 	function __construct(Tile $tile){
// 		$this->tile = $tile;
// 	}
// }

// // Мы объявили классы Tile и Plains
// // Ввели новый класс TileDecorator

// class DiamondDecorator extends TileDecorator {
// 	function getWealthFactor(){
// 		return $this->tile->getWealthFactor()+2;
// 	}
// }

// class PollutionDecorator extends TileDecorator {
// 	function getWealthFactor(){
// 		return $this->tile->getWealthFactor()-4;
// 	}
// }

// // При вызове getWealthFactor(), каждый из этих классов сначала вызывает такой же метод у объекта Tile, а затем выполняет собственную корректировку значения

// $tile = new Plains();
// print $tile->getWealthFactor(); //Возвращается 2

// $tile = new DiamondDecorator(new Plains());
// print $tile->getWealthFactor();// Возвращает 4

// // В объекте типа DiamondDecorator хранится ссылка на объект типа Plains
// // Перед прибавлением собственного значения 2 он вызывает метод getWealthFactor() объекта типа Plains

// $tile = new PollutionDecorator(new DiamondDecorator(new Plains()));
// print $tile->getWealthFactor();//Возвращается 0


// class RequestHelper{}

// abstract class ProcessRequest {
// 	abstract function process(RequestHelper $req);
// }

// class MainProcess extends ProcessRequest {
// 	function process (RequestHelper $req){
// 		print __CLASS__ . ": выполнение запроса \n";
// 	}
// }

// abstract class DecoratorProcess extends ProcessRequest{
// 	protected $processrequest;

// 	function __construct(ProcessRequest $pr){
// 		$this->processrequest = $pr;
// 	}
// }

// // Мы определили абстрактный суперкласс (ProcessRequest), конкретный компонент (MainProcess) и абстрактный декоратор (DecoratorProcess)
// // Метод MainProcess::process() только сообщает, что он был вызван

// class LogRequest extends DecorateProcess{
// 	function process(RequestHelper $req){
// 		print __CLASS__.": регистрация запроса \n";
// 		$this->processrequest->process($req);
// 	}
// }

// class AuthenticateRequest extends DecorateProcess{
// 	function process(RequestHelper $req){
// 		print __CLASS__.": аутентификация запроса \n";
// 		$this->processrequest->process($req);
// 	}
// }

// class StructureRequest extends DecorateProcess {
// 	function process(RequestHelper $req){
// 		print __CLASS__.": упорядочение данных запроса \n";
// 		$this->processrequest->process($req);
// 	}
// }

// $process = new AuthenticateRequest(new StructureRequest(new LogRequest(new MainProcess())));
// $process->process(new RequestHelper());


// В данном шаблоне и композиция и наследование вступают в действие одновременно
// Поскольку объект-декоратор формирует оболочку вокруг дочернего объекта, очень важно поддерживать интерфейс настолько неплотным, насколько это возможно


// ************************* Шаблон Facade
// - Это простой способ предоставить простой и понятный интерфейс для сложных системе

// Пример запутанного процедурного кода, который из простой задачи получения информации из текстовых файлов и преобразования ее в данные объекта делает что-то очень сложное

// function getProductFileLines($file){
// 	return file($file);
// }

// function getProductObjectFromId($id, $productname){
// 	// Выполняем запрос к базе данных
// 	return new Product($id, $productname);
// }

// function getNameFromLine($line){
// 	if(preg_match("/.*)\s\d+/", $line, $array)){
// 		return str_replace('_', ' ', $array[1]);
// 	}
// 	return '';
// }

// function getIDFromLine($line){
// 	if(preg_match("/^(\d{1,3})-/", $line, $array)){
// 		return $array[1];
// 	}
// 	return -1;
// }

// class Product {
// 	public $id;
// 	public $name;

// 	function __construct($id, $name){
// 		$this->id = $id;
// 		$this->name = $name;
// 	}
// }

// $lines = getProductFileLines('test.txt');
// $objects = array();
// foreach($lines as $line){
// 	$id = getIDFromLine ($line);
// 	$name = getNameFromLine($line);
// 	$object[$id] = getProductObjectFromId($id, $name);
// }

// // Если мы будем вызывать эти функции непосредственно, то наш код будет плотно вплетен в подсистему, которую он использует


// // Пример простого класса, который предоставляет интерфейс для процедурного кода

// class ProductFacade {
// 	private $products = array();

// 	function __construct($file){
// 		$this->file = $file;
// 		$this->compile();
// 	}

// 	private function compile(){
// 		$lines = getProductFileLines($this->file);
// 		foreach($lines as $line){
// 			$id = getIDFromLine($line);
// 			$name = getNameFromLine($line);
// 			$this->products[$id] = getProductObjectFromId($id, $name);
// 		}
// 	}

// 	function getProducts(){
// 		return $this->products;
// 	}

// 	function getProduct($id){
// 		return $this->products[$id];
// 	}
// }

// $facade = new ProductFacade('text,txt');
// $facade->getProduct(234);

// Шаблон Facade решает вопрос создания одной точки входа для уровня или подсистемы в целом
// В итоге мы получаем:
// 1. Програмистам клиентского кода полезно и удобно иметь доступ к простым методам, которые выполняют понятные и очевидные вещи
// 2. Минимизировать ошибки в комплексных подсистемах
?>


<!----------------------- Выполнение задач и представление результатов ---------------------------->
<?

// Шаблон Interpreter
// Шаблон Strategy
// Шаблон Observer
// Шаблон Visittor
// Шаблон Command

// ******************** Шаблон Interpreter

