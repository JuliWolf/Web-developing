<?
// *******************************************************************************************************


/*----------XML----------*/

// XML(Extensible Markup Language)
// 	Расширяемый язык разметки

// Предназначен для
// 	хранения структурированных данных
// 	обмена информацией между программами
// 	создания на его основе других, более специализированнвх языков разметки(OFX, OTP, WSDL, SOAP, VML, XSL, ebXML, CML, XLANG)

// Цель создания
// 	Обеспечение совместимости при передаче
// 	структурированных данных между разными системами обработки информации

// Различия XML и HTML
// 	HTML описывает ИЗ ЧЕГО СОСТОИТ и КАК отображать документ
// 	XML определяет ЗНАЧЕНИЕ и ОТНОШЕНИЕ данных


// Правила XML
// 	Если документ содержит символы, выходящие за рамки ASCII, необходимо указать кодировку
// 	XML - документ состоит из вложенных элементов
// 	Элемент состоит из открывающего и закрывающего тегов, а также содержимого
// 	XML чувствителен к регистру символов
// 	Элементы могут вкладываться друг в друга
// 	Теги должны быть правильно вложены друг в друга
// 	Все парные теги должны быть закрыты
// 	Возможно формирование пустых элементов
// 	Должен существовать только один корневой элемент, который содержит все остальные элементы. Пустой документ(без корневого элемента) недопустим! 
// 	Элементы могут иметь атрибуты
// 	Значения атрибутов заключаются в одинарные или двойные кавычки
// 	У каждого конкретного элемента не должно быть повторяющихся атрибутов


/*----------Simple API for XML (SAX)----------*/

// Описывает метод парсинга XML-документов для получения данных
// Создавать и изменять XML-документы с помощью SAX невозможно
// Основан на событиях
// XML-парсеру предоставляется набор собственных функция для обработки различных типов XML-данных
// Парсер автоматически вызывает эти функции в процессе последовательной обработки XML-документа


/*----------Использование SAX----------*/

// Создание парсера
// $sax = xml_parser_create("utf-8");

// Декларация функций обработки событий 
// function onStart($parser, $tag, $attributes){} 
// function onEnd($parser, $tag){} 
// function onText($parser, $text){}

// Регистрация функций как обработчиков событий 
// xml_set_element_handler($sax, "onStart", "onEnd");
// xml_set_character_data_handler($sax, "onText");

// Запуск парсера 
// xml_parse($sax, "XML строка!");

// Обработка ошибок 
// echo xml_error_string( xml_get_error_code($sax) );


/*----------Document Object Model(DOM)----------*/

// Интерфейс, позволяющий программам управлять содержимым документов XML, а также изменять их структуру
// Существует спецификация DOM(W3C)
// Представляет XML-документ в виде дерева узлов


/*----------Использование DOM----------*/

// Чтение XML-документа

// Создание объекта, экземпляра класса DomDocument 
// $dom = new DomDocument();

// Загрузка документа
// $dom->load("catalog.xml");

// Получение коневого элемента 
// $root = $dom->documentElement;

// Получение типа узла
// echo $root->nodeType; // 1

// Получение коллекции дочерних узлов (экземпляр класса DomNodeList) 
// $children = $root->childNodes;

// Получение текстового содержимого узла 
// $content = $root->textContent;

// Получение коллекции элементов с определённым именем 
// $books = $dom->getElementsByTagName("book");


// Создание/изменение XML-документа

// Создание объекта, экземпляра класса DomDocument 
// $dom = new DomDocument("1.0", "utf-8");

// Получение коневого элемента 
// $root = $dom->documentElement;

// Создание новых элементов
// $book = $dom->createElement("book"); 
// $title = $dom->createElement("title");

// Создание текстового узла
// $text = $dom->createTextNode("Название книги");

// Добавление узлов к узлам 
// $title->appendChild($text); 
// $book->appendChild($title); 
// $root->appendChild($book);

// Другой вариант создания нового элемента
// $author = $dom->createElement("author", "Автор книги"); 

// Добавляем узел к узлу перед другим узлом 
// $book->insertBefore($author, $title);

// Создаём секцию CDATA
// $description = $dom->createElement("description"); 
// $cdata = $dom->createCDATASection("...описание книги..."); 
// $description->appendChild($cdata); 
// $book->appendChild($description);

// Сохраняем документ 
// $dom->save("catalog.xml");


/*----------Использование SimpleXML----------*/

// Загружаем документ и преобразуем его в объект 
// $sxml = simplexml_load_file("catalog.xml"); 

// Загружаем XML-строку и преобразуем его в объект
// $sxml = simplexml_load_string("XML строка");

// Получение текста нужного элемента (название второй книги) 
// echo $sxml->book[1]->title;

// Получение атрибута элемента 
// echo $sxml->book[1]->title["lang"];

// Изменение текста нужного элемента (название первой книги) 
// $sxml->book[0]->title = "Новое название";

// Преобразование объекта в строку 
// $xml = $sxml->asXML(); 

// Запись строки в файл 
// file_put_contents("catalog.xml", $xml);


/*----------Обзор XMLReader и XMLWriter----------*/

// Использование XMLReader

// Создание объекта
// $xml = new XMLReader("catalog.xml"); 

// Перемешение курсора
// $xml->read(); 
// $xml->next(); 

// Получение свойств элемента 
// echo $xml->nodeType; 
// echo $xml->depth; 
// echo $xml->name; 
// echo $xml->value;

// Получение объекта DomNode 
// $domNode = $xml->expand();


// Использование XMLWriter

// Создание объекта 
// $writer = new XMLWriter(); 

// Выделение памяти под запись
// $writer->openMemory(); 

// Создавать отступы 
// $writer->setIndent = true;

// Создание документа и узлов 
// $writer->startDocument("1.0", "utf-8");  
// 	$writer->startElement("catalog");    
// 		$writer->startElement("book");      
// 			$writer->startElement("title");        
// 				$writer->text("Название книги");      
// 			$writer->endElement();    
// 		$writer->endElement();  
// 	$writer->endElement(); 
// $writer->endDocument();

// Получаем XML-строку 
// $xml = $writer->outputMemory(); 

// Запись строки в файл 
// file_put_contents("catalog.xml", $xml);


/*----------Преобразование XML c XSL/T----------*/

// Extensible Stylesheet Language /Transformations
// Стилевая технология, предназначенная для трансформации XML-документов в другие форматы
// Таблицы стилей XSL создаются по правилам XML-документов
// Таблицы стилей XSL состоят из набора шаблонов

// Загрузка исходного XML-документа 
// $xml = new DomDocument(); 
// $xml->load("catalog.xml");

// Загрузка таблицы стилей XSL 
// $xsl = new DomDocument(); 
// $xsl->load("catalog.xsl");

// Создание XSLT процессора 
// $processor = new XSLTProcessor();

// Загрузка XSL в процессор 
// $processor->importStylesheet($xsl); 

// Выполнение преобразования 
// echo $processor->transformToXML($xml);


// *******************************************************************************************************

/*----------PHP и XML Web services----------*/

// Программы, доступ к которым осуществляется по протоколу HTTP
// Обмен данными происходит в формате XML
// Независимы от платформы
// Простоты в разработке и отладке
// Используются открытие протоколы и стандарты
// Есть возможность описать услуги, предоставляемые службой и способы обращения к ним


/*----------Simple Object Access Protocol----------*/

// Простой протокол доступа к объектам
// Запросы посылаются HTTP методом POST
// Структура SOAP сообщения:
	// Envelope
	// Header
	// Body

// Soap Запрос
// <soap:Envelope      
// 	xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"> 
// 	<soap:Body> 
// 		<getStock xmlns="http://site.ru/ws"> 
// 			<num>12345</num> 
// 		</getStock> 
// 	</soap:Body> 
// </soap:Envelope>

// Soap ответ
// <soap:Envelope      
// 	xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"> 
// 	<soap:Body> 
// 		<getStockDetailsResponse xmlns="http://site.ru/ws"> 
// 			<getStockDetailsResult> 
// 				<id>12345</id> 
// 				<productName>Стакан граненый</productName> 
// 				<description>Стакан граненый. 250 мл.</description> 
// 				<price>9.95</price> 
// 			</getStockDetailsResult> 
// 		</getStockDetailsResponse> 
// 	</soap:Body> 
// </soap:Envelope>




