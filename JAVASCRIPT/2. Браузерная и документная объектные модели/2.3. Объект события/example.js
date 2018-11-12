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

