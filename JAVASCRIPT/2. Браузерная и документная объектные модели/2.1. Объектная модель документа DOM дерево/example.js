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

	