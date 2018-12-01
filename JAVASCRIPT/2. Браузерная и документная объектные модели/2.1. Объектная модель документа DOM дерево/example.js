// DOM - document object model - объектная модель документа

// document - корневой объект в объектной модели документа
// window - корневой объект в объектной модели браузера. 

// Объектная модель  - при создании элементов им определеется ряд свойств и методов для управления их отображением в браузере. 


/*=======================================================================================*/
// Методы корневого объекта в объектной модели документа


// Нахождение объекта элемента по Id
// getElementById
// var article = document.getElementById("article");

// Создание нового элемента
// createElement
// var btn = document.createElement("button");

// Создание нового текстового узла
// createTextNode
// var text = document.createTextNode("Подтвердить");

//свойство document
// Получить Главный элемент документа
// console.log(document.documentElement);//(сам HTML)


/*=======================================================================================*/
// Методы и свойства всех html объектов


// var testElem = document.getElementsByTagName("ul")[0];

// Нахождение массива объектов по классу.
// getElementsByClassName
// var square = document.getElementsByClassName("square"); //где в [] указывается порядковый номер объекта в массиве. 

// Нахождение массива объектов по тегу.
// getElemntsByTagName
// var listItems = document.getElementsByTagName("li"); //где в [] указывается порядковый номер объекта в массиве. 


// Динамическое свойство отвечающее за HTML внутри объекта
// console.log(testElem.innerHTML);

// С помощью свойства "innerHTML" можно динамически менять контент на странице. 
// console.log(testElem.innerHTML = "Вася");


//Проверить есть ли атрибуты у элемента
// console.log(testElem.hasAttribute());//true

// Узнать какое значение у атрибута элемента
// console.log(testElem.getAttribute("class"));

// Добавить атрибут эелементу
// console.log(testElem.setAttribute("new", 10));


// Выводит все дочерние элементы "ul", включая текстовые узлы. 
// console.log(testElem.childNodes);

// Выводит все дочерние элементы "ul", исключая текстовые узлы.
// console.log(testElem.children);

// Свойство для работы с классами
// console.log(testElem.classList);

	// Добавляет класс
	// console.log(testElem.classList.add("myStyle"));

	// Проверяет есть ли класс и возвращает значение boolean
	// console.log(testElem.classList.contains("myStyle"));

	// Запрос класса по порядковому номеру
	// console.log(testElem.classList.item(0));

	// Удаляет класс из элемента
	// console.log(testElem.classList.remove("style_ul"));

	// Присваивает или удаляет класс из свойств элемента
	// console.log(testElem.classList.toggle("style_ul", false));
	// console.log(testElem.classList.toggle("myStyle", true));
	
// Присваивает элементу новый класс
// console.log(testElem.className = "myStyle");

// Эммулирует нажатие кнопокй мыши на элемент
// console.log(testElem.click());


// Возвращает объект css styles declaration со всеми css свойствами.
// css свойство это свойство обзекта. При изменении, к html элементам добавляются инлайновые стили
// testElem.style.color = "yellow";


/*=======================================================================================*/


/* Пример работы методов

	Создание нового элемента
	var btn = document.createElement("button");
	
	Создание нового текстового узла
	var text = document.createTextNode("Подтвердить");
	
	Добавление элемента "text" в конец элемента "btn" 
	btn.appendChild(text);
	
	Нахождение объекта элемента по Id
	var wrapCont = document.getElementById("article");
	
	Добавление элемента "btn" в начало элемента "wrapCont".
	wrapCont.insertBefore(btn,wrapCont.childNodes[0]); */


/*=======================================================================================*/


// var wrapper = document.getElementsByClassName("wrapper")[0]; // Нахождение первого элемента с классом "wrapper"
// var container = document.createElement("div"); // Создание нового элемента с тегом "div"
// container.className = "newContainer"; // Присваивание переменной "container" класса  "newContainer"

// // Создание нового элемента с тегом "h1"
// // создание нового текстового узла 
// // добавление дочернего текстового узла "headText" переменной "headLine"
// var headLine = document.createElement("h1");
// var headText = document.createTextNode("Hello World");
// headLine.appendChild(headText);

// // Создание нового элемента с тегом "p"
// // Создание нового текстового узла
// // добавление дочернего текстового узла "artText" переменной "art"
// var art = document.createElement("p");
// var artText = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione libero earum explicabo sit reprehenderit quod eum debitis, excepturi dolor, rerum magnam quidem quisquam molestiae, porro expedita in neque aliquid voluptates.")
// art.appendChild(artText);

// // Создание нового элемента с тегом "ul"
// // Создание нового элемента с тегом "li"
// // Создание нового текстового узла 
// // добавление дочернего текстового узла "listedText" переменной "listedItem"
// var list = document.createElement("ul");
// var listedItem = document.createElement("li");
// var listedText = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, labore, minus! Asperiores quo earum debitis soluta, et laborum cumque saepe.")
// listedItem.appendChild(listedText);

// // Дублирование переменной listedItem
// // Добавление в начало текста в дочернем текстовом узле элемента "clnListedItem" значение переменной счетчика цикла "i".
// // добавление дочернего элемента "clnListedItem" переменной "list"
// for(i=1; i<=50; i++){
// 	var clnListedItem = listedItem.cloneNode(true);
// 	clnListedItem.innerHTML = i +" " + clnListedItem.innerHTML;
// 	list.appendChild(clnListedItem);
// }


// container.appendChild(headLine);//добавление дочернего элемента "headLine" переменной "container"
// container.appendChild(art);//добавление дочернего элемента "art" переменной "container"
// container.appendChild(list);//добавление дочернего элемента "list" переменной "container"
// wrapper.insertBefore(container,wrapper.childNodes[0]);// До элемена "wrapper" добавить элемент "container" и поместить его до первого дочернего элемента.


/*=======================================================================================*/


// Подготовить элемент обертку и стили для дочерних элементов с высотой и шириной 200px разного цвета
// Подготовить функцию, которая принимает параметром имя класса и добавляет элемент с классом в конец элемента обертки

// var wrapper = document.getElementsByClassName("wrapper")[0];
// var container = document.createElement("div");
// container.className = "newContainer";
// var item = document.createElement("div");

// var button = document.createElement("button");
// var accept = document.createTextNode("Новый куб");
// button.className = "button_style";
// button.appendChild(accept);
// wrapper.insertBefore(container,wrapper.childNodes[0]);
// wrapper.insertBefore(button,wrapper.childNodes[1]);

// var changeColor = ["color_lightblue", "color_purple", "color_green"];

// function Randomizer(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// function foo (some){
// 	item.className = changeColor[Randomizer(0,3)];
// 	var clnItem = item.cloneNode(true);
// 	container.appendChild(clnItem);
// }
// button.addEventListener("click", foo);



/*=======================================================================================*/


//Свойства для элементов форм

// var something = document.getElementById('something');
// var the = document.getElementById('the');
// var same = document.getElementById('same');
// var is = document.getElementById('is');
// var some_options = document.getElementById('some_options');

// function typeText(){
// 	console.log(something.value); // Значение в текстовом поле
// 	console.log(something.type); // Тип поля ввода
// 	console.log(something.required); // Обязательное или не обязательное для заполнения
// 	console.log(something.name); // Имя поля ввода
// 	console.log(something.disabled); // Отключенное поле ввода
// 	console.log(something.autocomplete); // Автозаполнение данных из кеша
// };

// function typeCheckBox(){
// 	console.log(the.checked); // Определяет заполнено или нет
// };


/*=======================================================================================*/
// Объект window


// Объекты

// History - отвечает за посещенные страницы
	// console.log(history.length); //количество открытых ранее страниц
	
	// console.log(history.back());//метод для загрузки предыдущей страницы
	
	// console.log(history.forward());//метод для загрузки следующей страницы
	
	// console.log(history.go());//на сколько страниц перейти вперед или назад


// Navigator - браузере


//Screen - отвечает за монитор пользователя
	// function f(){
	// 	var s = "";
	// 	for (var p in screen){
	// 		console.log(p,":", screen[p]);
	// 	}
	// }


//Location - отвечает за адресную строку браузера
// http://www.site.ru:81/abour/index.html?x=10#metka

	// console.log(location.protocol);//"http:"

	// console.log(location.hostname);//"www.site.ru"

	// console.log(location.post);//"81"

	// console.log(location.host);//"www.site.ru:81"

	// console.log(location.pathname);//"/about/index.html"
  
	// console.log(location.search);/"?x=10"

	// console.log(location.hash);//"#metka"
	
	// console.log(location.href);//http://www.site.ru:81/abour/index.html?x=10#metka

	// function f(){
	// 	var s = "";
	// 	for (var p in location){
	// 		console.log(p,":", location[p]);
	// 	}
	// }
	// reload(); //перезапускает страницу
	// assign();//загружает тот контент, который указан в параметрах
	// replace();//заменяет в историю данную страницу на другую


// Document
	// function f(){
	// 	var s = "";
	// 	for (var p in document){
	// 		console.log(p,":", document[p]);
	// 	}
	// }

	//write(); //Добавляет какую-либо информацию
	// document.write("<div> Содержание добавленоь из скрипта в head </div>")
	// open();//открывает документ для перезаписи
	// close(); //закрывает документ для перезаписи


// Методы окна window

	// alert("Hello World");//Окно оповещения
	// confirm("Are you sure?");//Окно запроса
	// prompt("Are you sure?", "Yes");//Диалоговое окно с заранее заданным ответом

	// setTimeout - задает таймер для выполнения какого-либо события на странице
	// var timer;
	// function demoSetTimeout(){
	// 	timer = window.setTimeout("alert('setTimeout')",1000);
	// }

	// function User(){
	// 	this.name = name;
	// 	this.say = function(){
	// 		console.log(this.name);
	// 	};
	// }
	// var john = new User("John");
	// function foo(){
	// 	timer = window.setTimeout(
	// 		function(){
	// 			john.say();
	// 		}, 1000);
	// }


	// open();//открывает новое окно
	// close();//закрывает открытое окно

	// var w;
	// function demoOpen(p){
	// 	w = window.open("http:ya.ru")
	// }

	// function demoClose(p){
	// 	w.close()
	// }


/*=======================================================================================*/
// Коллекции объекта document


// document.links//количество ссылок на странице
// document.links[0]

// document.images//количество картинок на сайте
// document.images[0]

// document.forms//количество форм на странице
// document.forms[]

// document.links[0].style.color = "red";//можно обращаться к свойствам выбранного элемента и задавать новые параметры
// document.links[0].style.backgroundColor = "red"//если свойство css пишется с "-"

// label for //для избежания колнфликта имен используется свойство "html"
// label.htnlFor

// style.cssFloat


// var i = document.images[0];

// console.log(i.toString());//[object HTMLImageElement]


// form - свойства html и js

// var f;
// function f(){
// 	f = document.forms[0];
// 	// f.document.forms["search"];//обращение по имени
// 	// f.document.forms["search"];
// }

// html свойства
// f.action//"www.ya.ru"
// f.target//"_blank"
// f.method//"get" - по умолчанию

// js свойства
// f.length//1- количество элементов формы
// f.elements//HTMLFormControlsCollection [input] - выводит все элементы формы

// Если нет кнопки, которая отправляет форму
// f.submit();

//Сброс введенных значений
// f.reset();


// var form;

// (function f(){
// 	form = document.forms[1];
// })()

// var txt = form.elements.something;

// свойства
// console.log(txt.toString());//[object HTMLFieldSetElement]
// console.log(txt.value);
// console.log(txt.defaultValue);//чтобы изменить имя начальное
// console.log(txt.form);//чтобы узнать в какой форме находится input

// // методы
// console.log(txt.focus());//фокус на выбранный элемент
// console.log(txt.blur());//убрать фокус с элемента
// console.log(txt.select());//выделяет все, что находится внутри элемента

// textarea

// var t = form.elements.is;

// console.log(t.cols);//20
// console.log(t.rows);//2


/*=======================================================================================*/


// Перед отправкой формы, программа должна проверить все поля на отсутвие пустых полей
// Если есть пустые, то обвести их красным цветом и вызвать окно alert
	

// function checkform(){
// 	var f = document.forms[2];
// 	var els = f.elements;
// 	var isEmpty = false;
// 	for(var i = 0; i<els.length;i++){
// 		if(els[i].type == "text"){
// 			if(els[i].value == ""){
// 				els[i].style.borderColor = "red";
// 				isEmpty = true;
// 			}else{
// 				els[i].style.borderColor = "";
// 			}
// 		}
// 	}
// 	if(isEmpty){
// 		alert("Fill the gaps");
// 	}else{
// 		f.submit();
// 	}
// }


/*=======================================================================================*/


// радио кнопки и typeCheckBox

// var f = document.forms[1];
// var x = f.elements.the;
// console.log(f.elements.the.checked);//Проверить значение
// console.log(f.elements.the.checked = "true");//установить значение
// console.log(f.elements.the.defaultChecked = "true");//сделать значение по умолчанию


/*=======================================================================================*/
// HTMLSelectElement


// Конструктор Options

// Option(text, value, defaultSelected, selected) - "defaultSelected" значение boolean

// var o = new Option("PHP5, "php");

// select.add(newOpt, curOpt);//для старых браузеров(первый параметр название, второй после какого элемента)
// select.add(newOpt.curOptIdx);//для старого IE
// select.remove(index);

//Создаем пустой объект 
// var links = new Object();

// links["Яндекс"] = "http://www.yandex.ru";
// links["Рамблер"] = "http://www.rambler.ru";
// links["Гуглс"] = "http://www.google.com";

// //цикл для создания новой option под каджую ссылку
// var s = document.forms[3].selURL;
// console.log(document.forms[3].selURL);
// for(var linkName in links){
// 	var o = new Option();
// 	o.value = links[linkName];
// 	o.text = linkName;

// 	// var o = new Option(linkName, links[linkName]);

// 	s.add(o);
// }
// //Делаем элементы форм доступными
// var f = document.forms[3];
// for(var i=0; i<f.elements.length; i++){
// 	f.elements[i].disabled = false;
// }

// function goToURL(){
// 	var s = document.forms[3].selURL;
// 	var url = s.options[s.selectedIndex].value;
// 	location.assign(url);
// 	console.log(s.selectedIndex);
// }


/*=======================================================================================*/


//При нажатии на левую кнопку должен прибавляться год в начало списка "1970-1",
//При нажатии на првую год в конец списка 1975+1

// var s = document.forms[4].year;
// function addYear(flag){
// 	var val,o;
// 	if(flag){
// 		val = s.options[s.length-1].value*1 + 1;
// 		o = new Option(val, val, false, true);
// 		s.add(o,null);
// 	}else{
// 		val = s.options[0].value*1 - 1;
// 		o = new Option(val, val, false, true);
// 		s.add(o,s.options[0]);
// 	}	
// }


/*=======================================================================================*/
// images


// var i = document.images[1];
// i.src = "http://freevector.co/wp-content/uploads/2014/05/img-1.png"; //сменить картинку

// var flag = false;
// function loopImage(){
// 	var i = document.images[1];
// 	if(flag){
// 		i.src = "http://freevector.co/wp-content/uploads/2014/05/img-1.png";
// 	}else{
// 		i.src = "https://im0-tub-ru.yandex.net/i?id=05af23a7b62507d7087069a4f07035ea&n=13&exp=1";
// 	}flag = !flag;
// }


// Изменение размера изображения

// function resizeImage(){
// 	var i = document.images[2];
// 	var normalWidth = 640;
// 	if(i.width < normalWidth){
// 		i.width *= 1.1;
// 		i.height *= 1.1;
// 		setTimeOut("resizeImage()", 50);
// 	}
// }


/*=======================================================================================*/
// Tables


//Количество ячеек
// var td_count = 10;

// //Таблица
// var t;


// function createContent(){
// 	t = window.tbl;
// 	//Вызываем фунцию генерации строк для разных секций
// 	if(!t.rows.length){
// 		create(t.tBodies[0] || t, 4);
// 		create(t.createTHead(), 2);
// 		create(t.createTFoot(), 3);
// 	}

// 	//Функция заполняет переданную секцию нужным количеством строк
// 	function create(section, tr_count){
// 		for(var i = 0, tr; i < tr_count; i++){
// 			//Добавляем строку в секцию
// 			//Длина коллекции меняется динамически
// 			tr = section.insertRow(section.rows.length);

// 			//Тут надо ставить обработчик клика на строке
// 			//tr.onClick = deleteRow
// 			for(var j = 0, td; j < td_count; j++){
// 				//Добавляем ячейку в строку
// 				td = tr.insertCell(tr.cells.length);
// 				//В ячейке пишем номер ячейки
// 				td.innerHTML = tr.cells.length;
// 				//В элементе <sup> ставим номер строки
// 				td.innerHTML += "<sup>" + section.rows.length + "</sup>";
// 				//td.textContent += "<sup>" + section.rows.length + "</sup>";
// 			}
// 		}
// 	}
// }

// //Функция удаляет таблицу
// function deleteContent(){
// 	if(t.tHead){
// 		t.deleteTHead();
// 	}
// 	if(t.tFoot){
// 		t.deleteTFoot();
// 	}
// 	if(t.tBodies){
// 		if(t.tBodies[0].rows.length){
// 			for(var i =t.tBodies[0].rows.length; i > 0; i--){
// 				t.tBodies[0].deleteRow(t.tBodies[0].rows[i]);
// 			}
// 		}
// 	}
// }


/*=======================================================================================*/
// Свойства объектов DOM


// parentNode - ссылка на родительский элемент
// childNodes - коллекция детей 
// firstChild - первый дочерний узел
// lastChild - последний дочерний узел
// nextSibling - ближайщий соседний узел
// ownerDocument - сам документ (DOM)

// textCondent - весь текст на любой глубине узла

// nodeName - имя узла
// nodeType - тип узла
// nodeValue - значение узла


/*=======================================================================================*/


//Скопировать документ на новую страницу


// function showDOM(){
// 	var w = window.open("","");
// 	w.document.write("<html><body>");
// 	showChildNodes(document.body, w.document);
// 	w.document.write("</body></html>");
// }
// function showChildNodes(node, doc){
// 	if(node.nodeType == 3){
// 		doc.write("<li><i>" + node.nodeValue + "</i><li>");
// 	}
// 	if(node.nodeType == 1){
// 		doc.write("<li><b>" + node.nodeName + "</b><ul>");
// 		for(var i=0; i<node.childNodes.length; i++){
// 			showChildNodes(node.childNodes[i], doc);
// 		}
// 		doc.write("</ul></li>")
// 	}
// }


/*=======================================================================================*/
