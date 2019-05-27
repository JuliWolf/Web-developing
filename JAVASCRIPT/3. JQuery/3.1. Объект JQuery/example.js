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

//Создание нового элемента со свойствами и аттрибутами
// $("<h2></h2>", {
// 	text:"Добавить строку",
// 	class:"myClass"
// }).prependTo(".wrapper");

// Добавление элемента в конец, добавление текстового узла
// $(".wrapper").append("<h3>Hello World</h3>");
// $("#special_data").append("Hello World");

// Добавление элемента в начало, добавление текстового узла
// $("#special_data").prepend("Hello World");

// Добавление элемента или текстового узла к другому элементу
// $("<h3>Hello World</h3>").appendTo(".wrapper");

//Добавить соседа после элемента
// $(".wrapper").after("Hello World");

//Добавить соседа до элемента
// $(".wrapper").before("Hello World");

//Для нахождения детей
// $("ul.list").children("li").css("color", "red");
// $("ul.list").children("li").eq(1).css("color", "red"); //конкретного ребенка

// для нахождения детей и их детей
// console.log($("ul.list").find("li"));

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


//Для проверки наличия каких-то элементов, свойств
//console.log($element.is("newClass"));
// console.log($("ul li:first").is(":contains('item in list 1')"));

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

//Копирование элемента
// $element.clone();

// Удаление элемента, сохраняет обработики событий 
// $("ul li").first().remove();

//Вырезать элемент, не сохраняет обработчики событий, если они были 
// $("ul li").first().detach();

// Заменить элемент
// $("ul li").first().replaceWith('Hello')

// Эммулирует нажатие кнопокй мыши на элемент
// console.log($element.trigger("click"));

//Для нахождения конкретных элементов
// var td = $("td");
// var specialTd = td.filter("#special_data");
// console.log(specialTd);

// var notTd = td.not("#special_data");
// console.log(notTd);

// var inSpan = td.has("span");
// console.log(inSpan);

//Для обращения к родителям
// $("li").parent("ul.list").removeClass("list");//к конкретному, ближайшему
// $("li").parents().removeClass("list");//обращение ко всем родителям
// $("li").closest("div").removeClass("list");//ближайший предок


//Для добавления элементов в выборку
// var ul = $("ul");
// console.log(ul);

// ul.add("div");
// console.log(ul);

// добавление в выборку сразу несколько элементов
// $("*").add([document, window])//dвыбрать все элементы и добавить к ним еще 2 элемента


/*=======================================================================================*/
//Обработчики событий jQuery


// События мыши:

// click – происходит, когда кликнули на элемент левой кнопкой мыши
// contextmenu – происходит, когда кликнули на элемент правой кнопкой мыши
// mouseover – возникает, когда на элемент наводится мышь и уводится с элемента
// mousedown и mouseup – когда кнопку мыши нажали или отжали
// mousemove – при движении мыши
// mouseenter - при наведении на элемент одноразово
// mouseleave - когда мышку убирают с элемента

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
// метод "end()"


// function toggle(obj){
// 	obj
// 		.siblings("button")
// 			.removeAttr("disabled")
// 		end()//вернулись к работе с самим объектом, а не с его соседями
// 		.attr("disabled", "disabled");
// }


// метод show() - убирает у объекта style="display:none;"
// метод hide() - добавляет объекту style="display:none;"
// метод toggle() - добавляет или удаляет стиль в зависимости от его наличия.отсутствия

// метод off() - для отмены обработчика событий


/*=======================================================================================*/
// Объект события

// $(document).on("click", function(e){
// 	console.log("type", e.type);
// 	console.log("which", e.which);
// 	console.log("target", e.target);
// 	console.log("currentTarget", e.currentTarget);
// 	console.log("x:y", e.pageX+":"+e.pageY);
// })


//можно передать параметры на клик
// $(".click_button").on("click", {x:10, y:20}, function(e){
// 	console.log(e.data.x, e.data.y);
// })

// Для отмены bubble
// e.stopPropagation();


/*=======================================================================================*/
// Отличие map() от each() заключается в том, что map() возвращает массив, а each() ничего не возвращает


/*=======================================================================================*/


// Отбор значений в столбце с помощью перебора массива

// var tr = $("table tbody tr");
// var complexes = tr.map(function(i, obj){
// 	return $(obj).children().eq(3).text();	
// });

// function unique(arr){
// 	var tmp = [];
// 	for(var i=0; i<arr.length; i++){
// 		if(tmp.indexOf(arr[i]) == -1){
// 			tmp.push(arr[i]);
// 		}
// 	}
// 	return tmp;
// }
// complexes = unique(complexes);


/*=======================================================================================*/

// Анимация


//Сворачивание и разворачивание элемента, быстрое изменение высоты элемента
//Скорость анимации (милисекунды, тип скорости)
// $(function(){
// 	$("#toggle").on("click", function(){
// 		if($(".box").is(":visible")){
// 			$(".box").slideUp("verySlow");
// 		}else{
// 			$(".box").slideDown("veryFast");
// 		}
// 	})
// });

//Объединяет 2 метода (slideUp() and slideDown())
// $(function(){
// 	$("#toggle").on("click", function(){
// 		$(".box").slideToggle();
// 	})
// });


//Быстрое изменение прозрачности
// $(function(){
// 	$("#toggle").on("click", function(){
// 		if($(".box").is(":visible")){
// 			$(".box").fadeOut();
// 		}else{
// 			$(".box").fadeIn();
// 		}
// 	})
// });

//Объединяет два метода (fadeOut() and fadeIn())
// $(function(){
// 	$("#toggle").on("click", function(){
// 		$(".box").fadeToggle();
// 	})
// });

// Чтобы добавить свои скорости
// Найти этот объект в jQuery
// console.log($.fx.speeds);//Object fast: 200, slow: 600, _default: 400

// $.fx.speeds._default = 1000;
// $.fx.speeds.verySlow = 3000;
// $.fx.speeds.veryFast = 100;

//Сделать паузу перед анимацией
// $(function(){
// 	$("#toggle").on("click", function(){
// 		if($(".box").is(":visible")){
// 			$(".box").slideUp().delay(1000).slideDown(300);
// 		}
// 	})
// });

/*=======================================================================================*/

// $("#header").on("click", function(){
// 	$(".mylist li").fadeToggle();
// })
// function eventFunction(obj, type, name){
// 	obj.on(type, function(){
// 		obj.toggleClass(name);
// 	})
// }
// eventFunction($(".mylist li:first"), "mouseenter", "liClass");
// eventFunction($(".mylist li:first"), "mouseleave", "liClass");


// $(function(){
// 	var div = $("div#container");
// 	div.on("mouseenter", function(){
// 		$(this).css("background-color", "yellow")
// 			.find("li").eq(2).css("background-color", "red");
// 	})

// 	div.on("click", function(){
// 		$("ul").fadeOut();
// 	})
// 	div.on("mouseleave", function(){
// 		$(this).css("background-color", "")
// 			.find("li").eq(2).css("background-color", "")
// 			.parent().fadeIn();
// 	})

// });


/*=======================================================================================*/
// Метод Animate()


//При нажатии на кнопку увеличивается размер шрифта на 5px и меняется цвет текста
// Первый параметр - объект
// Второй параметр - время анимации
// Третий параметр - способ анимации ("linear", "swing")
// Четвертый параметр - действие по окончанию

// var content = $("div#content");
// $(".change_button").on("click", function(){
// 	content.animate({
// 		"font-size": "+=5",
// 		"width": "+=200"
// 	}, 1000, "swing", function(){
// 		console.log("stop")
// 	});
	
// })


//Более удобный формат 

// var content = $("div#content");
// $(".change_button").on("click", function(){
// 	content.animate(
// 		// свойства для изменения
// 		{"font-size": "+=2"},
// 		// Дополнительные настройки
// 		{
// 			duration: 2000,
// 			complete: function(){
// 				console.log("stop");
// 			},
// 			step: function(){
// 				console.log("Текущий размер: ", $(this).css("font-size"));
// 			}
// 		}
// 		);
	
// })

//animate() выполняются последовательно, если указано несколько
//Чтобы оба animate выполнялись одновременно, необходимо изменить свойство "queue"(по уполчанию "true")

// var content = $("div#content");
// $(".change_button").on("click", function(){
// 	content
// 	.animate(
// 		{"font-size": "+=5"},
// 		{duration: 500}
// 		)
// 	.animate(
// 		{"top": "500"},
// 		{duration: 1000, queue: true }
// 		);
// });


//По нажатию кнопки размещаем контейнер по середине окна

// $.fn.mySuperSunc = function(){console.log("Hello")};//Добавляем свою функцию в код jQuery

// var content = $("div#content");
// var winW = $(window).width()/2 - content.outerWidth()/2;
// var winH = $(window).height()/2 - content.outerHeight()/2;

// $(".change_button").on("click", function(){
// 	content.mySuperSunc();
// 	content.animate(
// 		{
// 			"left": winW, 
// 			"position": "absolute",
// 		})
// 	.animate(
// 		{"top": winH}, 
// 		{duration: 200, queue: false});

// });

//Автоматическая смена высоты и прозрачности в зависимости от начальных параметром элемента от 0-100%
// height:"toggle";
// opacity:"toggle"


/*=======================================================================================*/


//Создать функцию конструктор для анимации элемента

 // $.fn.inOut = function(speed, result ){
 // 	if($.isFunction(result)){
 // 		console.log("yes");
 // 	}else{
 // 		console.log("no");
 // 	}
 // 	return $(this).animate(
 // 		{
 // 			height:"toggle",
 // 			opacity:"toggle"
 // 		},
 // 		{
 // 			duration: speed || 1000,
 // 			complete: function(){
 // 				$.isFunction(result) && result.call(this);
 // 			},
 // 		}
 // 	)
 // };

 //  var content = $("div#content");
 //   $(".change_button").on("click", function(){
 //   		$("div#content").inOut(1000, function(){console.log("Hello")});

 //   }) 


 /*=======================================================================================*/
 

//Фильтрация массивов, объектов
// Первый параметр - объект массива
// Второй параметр - индекс объекта массива
// Третий параметр - инвертирование результата

 // $(function(){
 // 	// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 // 	var users =[
 // 	{first:"John", last: "Smith"},
 // 	{first:"Mike", last: "Doe"}
 // 	];
 // 	var result = $.grep(users, function(val, key){
 // 		return val.last =="Smith";
 // 		// return val>5;
 // 	});
 // 	console.log(result);
 // })


/*=======================================================================================*/


//Слайдер для картинок

// (function($){
	
// 	var viewUl = $("div.view").css("overflow", "hidden").children("ul"),
// 		imgs = viewUl.find("img"),
// 		imgW = 400,
// 		imgsLen = imgs.length,
// 		totalImgsW = imgsLen *imgW,
// 		current = 1;
// 	$("div#show").show().find("button").on("click", function(){
// 		var direction = $(this).attr("id"),
// 			position = imgW;
// 		(direction == "next") ? ++current : --current
// 		if(current == 0){
// 			current = imgsLen;//установить последнюю картинку
// 			direction = "next";
// 			position = totalImgsW - imgW;
// 		}else if(current - 1 ==imgsLen){
// 			current = 1; //установить первую картинку
// 			position = 0;
// 		}
// 		doIt(viewUl, position, direction);
// 	});
// 	function doIt(container, position, direction){
// 		var sign;//"-=" or "+="
// 		if(direction && position != 0){
// 			sign = (direction == "next") ? "-=" : "+=";
// 		}
// 		var shift = {"margin-left":sign ? (sign+position) :position};
// 		var duration = {};
// 		if(position == 0 || position == imgW*(imgsLen-1)){
// 			duration = {duration: 0}
// 		}
// 		container.animate(shift, duration);
// 	}
// })(jQuery);


/*=======================================================================================*/

// Заготовка для шаблона
// var myImgAlt = "Картинка номер ";
// 	var aImgs = [
// 		{alt: myImgAlt + "1", src: "images/first.jpg"},
// 		{alt: myImgAlt + "2", src: "images/second.jpg"},
// 		{alt: myImgAlt + "3", src: "images/third.jpg"},
// 		{alt: myImgAlt + "4", src: "images/forth.jpg"},
// 	];

// //шаблон 
// var tpl = $("#myTpl").html();
// $.each(aImgs, function(key, val){
// 	var tmp = tpl.replace(/{{src}}/ig, val.src)
// 				 .replace(/{{alt}}/ig, val.alt);
// 	$("div.view ul").append(tmp);
// 	console.log(tmp);
// });