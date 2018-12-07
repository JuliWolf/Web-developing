// В Callback функцию, которая передается вторым параметром в обработчик события, 
// передается первым параметром объект события


// document.addEventListener('click', function(e  <-- ОБЪЕКТ СОБЫТИЯ ВОТ ТУТ ВОТ ОН !!!!   ){
// 	console.log(e);  /* В ТЕЛЕ ФУНКЦИИ МОЖНО ЮЗАТЬ */
// })




/*=======================================================================================*/
// Обработчик событий, который фиксирует клик
// и дорисовывает по его расположению в DOM новый элемент
// e.clientX - Определяет позицию события относительно левого края окна браузера(клиента)
// e.clientY - Определяет позицию события относительно верхнего края окна браузера(клиента)


// document.addEventListener("click", function(e){ 
// 	var el = document.createElement("div");
// 	el.classList.add("clickBlock");
// 	el.style.left = e.clientX + "px";
// 	el.style.top = e.clientY + "px";
// 	document.body.appendChild(el);
// });


/*=======================================================================================*/
// e.offsetX - Определяет позицию события относительно левого края выбранного элемента
// e.offsetY - Определяет позицию события относительно верхнего края выбранного элемента
// e.target - свойство, которое содержит ссылку на html элемент, на котором произошло событие


// var block = document.createElement("div");
// block.classList.add("bigBlock");
// document.body.appendChild(block);

// document.addEventListener("click", function(e){ 
// 	if (e.target.classList.contains("bigBlock")){
// 		var el = document.createElement("div");
// 		el.classList.add("clickBlock");
// 		el.style.left = e.offsetX + "px";
// 		el.style.top = e.offsetY + "px";
// 		block.appendChild(el);		
// 	}
// });


/*=======================================================================================*/
//e.cancelBubble - чтобы событие не регистрировалось на родительских элементах. 


//Создаем 3 элемента с тегом "div" и вкладываем 1 в другой. 
//свойство cancelBubble - это булево значение, определяющее вспылытие событий по DOM дереву. 

// var mainBlock = document.createElement("div");
// var middleBlock = document.createElement("div");
// var smallBlock = document.createElement("div");

// mainBlock.classList.add("mainBlock");
// middleBlock.classList.add("middleBlock");
// smallBlock.classList.add("smallBlock");

// document.body.appendChild(mainBlock);
// mainBlock.appendChild(middleBlock);
// middleBlock.appendChild(smallBlock);

// function foo (number){
// 	console.log("Hello World"+ " "+ number);
// }

// mainBlock.addEventListener("click", function(e){ 
// 	e.cancelBubble = true;
// 	foo(1);
// });
// middleBlock.addEventListener("click", function(e){
// 	e.cancelBubble = true;
// 	foo(2);
// });
// smallBlock.addEventListener("click", function(e){
// 	e.cancelBubble = true;
// 	foo(3);
// });


/*=======================================================================================*/
// e.preventDefault() - останавливает стандартное поведение


// var ya = document.getElementById("linkYa");

// ya.addEventListener("click", function(e){
// 	console.log(e);
// 	e.preventDefault();
// });


/*=======================================================================================*/
// При обработке событий на полях ввода таких как "input, change" 
// доступ к текущему значению поля можно получить из свойства "e.target.value"  


// input Если в него пишут название цвета, то контейнер рядом меняет цвет

// var input = document.createElement("input");
// var box = document.createElement("div");
// box.classList.add("smallBlock");

// document.body.appendChild(input);
// document.body.appendChild(box);
// input.style.display = "block";

// input.addEventListener("input", function (e){
// 	box.style.background = e.target.value;
// });


/*=======================================================================================*/


// Работа с событием отправки формы "submit"
// 
// var form = document.getElementsByClassName("quat_form")[0];

// function addQuat(r){
// 	var wrapper = document.getElementsByClassName("other_parts")[0];

// 	var block = document.createElement("div");
// 	var head = document.createElement("h1");
// 	var subHead = document.createElement("h3");
// 	var paragraph = document.createElement("p");

// 	wrapper.insertBefore(block,wrapper.childNodes[0]);
// 	block.appendChild(head);
// 	block.appendChild(subHead);
// 	block.appendChild(paragraph);
// 	block.classList.add("form_block");

// 	var textHead = document.createTextNode(r.name_quat);
// 	var textSubhead = document.createTextNode(r.ex_quat);
// 	var textQuat = document.createTextNode(r.quat);

// 	head.appendChild(textHead);
// 	subHead.appendChild(textSubhead);
// 	paragraph.appendChild(textQuat);

// }

// form.addEventListener("submit", function(e){
// 	e.preventDefault();
// 	var result = {};
// 	for (var i = 0; i<e.target.elements.length; i++){
// 		if (e.target.elements[i].name !== ""){
// 			result[e.target.elements[i].name] = e.target.elements[i].value;
// 		}
// 	}
// 	addQuat(result);
// });


/*=======================================================================================*/


//Задание

//Форма для добавления пользователей
//Информация о пользователе
// 1.Имя
// 2.Фамилия
// 3.Аватар
// 4.Интересы (блоки как при выборе специализации)
// 5.О Себе
//Идентификатор пользователя

var form = document.getElementsByClassName("form_quat")[0];


var fileInput = document.getElementById("file_input_element");
var fileReader = new FileReader();
var idName = 1;


function addUser(r){
	
	var wrapper = document.getElementsByClassName("other_parts")[1];

	var mainBlock = document.createElement("div");


	var block = document.createElement("div");
	var userName = document.createElement("p");
	var userLastname = document.createElement("p");
	var userInterest = document.createElement("p");
	var userAbout = document.createElement("p");
	mainBlock.classList.add("main_block_class");
	mainBlock.setAttribute("numberId", idName);


	wrapper.insertBefore(mainBlock,wrapper.childNodes[0]);
	mainBlock.appendChild(block);
	block.appendChild(userName);
	block.appendChild(userLastname);
	block.appendChild(userInterest);
	block.appendChild(userAbout);
	block.classList.add("person_block_form");

	var textUserName = document.createTextNode("Имя: "+r.user_name);
	var textUserLastname = document.createTextNode("Фамилия: "+r.user_lastname);
	var textUserInterest = document.createTextNode("Интересы: "+r.user_interest);
	var textUserAbout = document.createTextNode("О себе: "+r.user_about);

	userName.appendChild(textUserName);
	userLastname.appendChild(textUserLastname);
	userInterest.appendChild(textUserInterest);
	userAbout.appendChild(textUserAbout);

	userName.classList.add("text_form_name");
	userLastname.classList.add("text_form_lastname");
	userInterest.classList.add("text_form_interest");
	userAbout.classList.add("text_form_about");

		fileReader.onload = function(){
			var elImage = document.createElement("img");
			var blockImage = document.createElement("div");
			elImage.src = fileReader.result;
			elImage.classList.add("user_image");
			blockImage.classList.add("user_image_block");
			blockImage.appendChild(elImage);
			mainBlock.appendChild(blockImage);
		};

	idName++;
}


form.addEventListener("submit", function(e){
	e.preventDefault();
	console.log(e);
	var result = {};
	for(var i=0; i<e.target.elements.length;i++){
		if(e.target.elements[i].value !== ""){
			result[e.target.elements[i].name] = e.target.elements[i].value;
		}	
	}
	addUser(result);
	fileReader.readAsDataURL(fileInput.files[0]);
})


/*=======================================================================================*/
// Свойства объекта событий


// любой источник
// type - тип события
// target - сслыка на объект, по которому было произведено действие
// currentTarget - при bubbling, показывает на тот объект, на котором происходит событие на данный момент

// Источник мышь
// button - клавиша, которая нажата на мышке
// altKey, ctrlKey, shiftKey - при нажатии кнопки мыши с одной из управляющих клавиш
// clientX, clientY - точка отсчета окна браузера, куда нажал пользователь

// Источник клавиатура
// keyCode - номер нажатой клавиши


/*=======================================================================================*/
// Список, сворачиваем, разворачиваем


// function setPlusIcon(){
// 	var allLis = document.getElementsByTagName("li");
// 	for(var i=0; i<allLis.length; i++){
// 		var li = allLis[i];
// 		var allUls = li.getElementsByTagName("ul");
// 		if(allUls.length > 0){
// 			if(allUls[0].className == "expandable"){
// 				li.style.listStyleImage = "url(plus.jpg)";
// 			}
// 		}
// 	}
// 	var allA = document.getElementsByTagName("a");
// 	for(var i=0; i<allA.length; i++){
// 		allA[i].addEventListener("click", aClick, false);
// 	}
// }
// window.onload = setPlusIcon;

// function aClick(e){
// 	var objA = e.target;
// 	var li = objA.parentNode;
// 	var uls = li.getElementsByTagName("ul");
// 	if(uls.length == 0){
// 		return true;
// 	}
// 	if(uls[0].style.display == "block"){
// 		uls[0].style.display = "";
// 		li.style.listStyleImage = "url(plus.jpg)";
// 	}else{
// 		uls[0].style.display = "block";
// 		li.style.listStyleImage = "url(minus.jpg)";
// 	}

// 	e.preventDefault();
// }
