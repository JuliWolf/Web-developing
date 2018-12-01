//С подключением библотеки JQueary появляется объект jQuery
//У объекта jQuery есть псевдоним $
//С помощью объекта jQuery можно оборачивать html элементы

// jQuery('querySelector') //querySelector это css селекторы

// jQuery("#special_data"); //коллекция элементов с дополнительными методами от jQuery
// $("#special_data");


//Весь код программы должен быть написан внутри этой функции
//Функция выполняется тогда, когда весь контент документа загружен

// $(document).ready(function(){

// 	// code here ...


// })




/*=======================================================================================*/
// Методы объекта jQuery


// var $element = $("#special_data");


// Нахождение объекта элемента по Id
// $("#id");

// Создание нового элемента
// var btn = $("<button></button>");

// Добавление элемента в конец, добавление текстового узла
// $("#special_data").append("Hello World");

// Нахождение массива объектов по классу.
// $(".className");

//Нахождения массива объектов по атрибуту
// $('[attrname=attrvalue]');

// Нахождение массива объектов по тегу.
// $("tagName");

// Динамическое свойство отвечающее за HTML внутри объекта
// $element.html();

// С помощью свойства "innerHTML" можно динамически менять контент на странице. 
// $element.html("Вася");

// Выводит все дочерние элементы "ul". 
// console.log($(".list>.list_item"));


// Добавляет класс
// console.log($element.addClass("newClass"));

// Проверяет есть ли класс и возвращает значение boolean
// console.log($element.hasClass("newClass"));

// Удаляет класс из элемента
// console.log($element.removeClass("newClass"));

// Присваивает или удаляет класс из свойств элемента
// console.log($element.toggleClass("newClass"));

//Возвращает значение текстового поля
// console.log($(".input").val());

//Устанавливает значение текстового поля
// console.log($(".input").val("лпрвалп"));

//Получение значения атрибута	
// console.log($element.attr('id'));

//Изменение значение атрибута
// console.log($element.attr("id", "different_id"));

//Добавление нового атрибута
// console.log($element.attr("different_id", "different_id"));

//Добавить стиль
// $element.css("background", "red");

//Добавить несколько стилей
// $element.css({
// 	background: 'yellow',
// 	fontSize: '20px',
// })

// Эммулирует нажатие кнопокй мыши на элемент
// console.log($element.trigger("click"));


/*=======================================================================================*/
//Обработчики событий jQuery


// События мыши:

// click – происходит, когда кликнули на элемент левой кнопкой мыши
// contextmenu – происходит, когда кликнули на элемент правой кнопкой мыши
// mouseover – возникает, когда на элемент наводится мышь
// mousedown и mouseup – когда кнопку мыши нажали или отжали
// mousemove – при движении мыши

// События на элементах управления(элементах форм):

// submit – посетитель отправил форму <form>
// focus – посетитель фокусируется на элементе, например нажимает на <input>
// change - посетитель ввёл новое содержимое в элемент <input> и увёл с него фокус
// input - посетитель ввёл новый символ в элемент <input>
// blur - посетитель увёл фокус с элемента <input>


//первый параметр - это действие события, второй параметр - это функция
// $element.on("click", function(){
// 	console.log("Hello World");
// })

// $element.click(function(){
// 	console.log("Hello World");
// })

//Объект события
//меняет задний фон элемента при нажатии
// $(".list_item").on("click", function(e){
// 	$(e.target).css({
// 		background:"red"
// 	});
// })


/*=======================================================================================*/

