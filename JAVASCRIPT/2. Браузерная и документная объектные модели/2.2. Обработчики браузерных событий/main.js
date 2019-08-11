// У каждого объекта HTML элемента есть метод "addEventListener". Он принимает 1 аргумента:
	// 1. Имя события 
	// 1. Имя CallBack функции или саму CallBack функцию, которая исполняется когда обработчик события регистрирует событие


// Пример
	// document.addEventListener('click', function(){
	// 	console.log('hello world');
	// })



/**
* Виды событий
*/

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




// Обработчик событий с анонимной callback функцией

// document.addEventListener("click", function(){
// 	console.log("Hello World"); 
// });


// Обработчик события с именованной функцией, объявленной ранее 

// function foo (){
// 	console.log("Hello World");
// }
// document.addEventListener("click", foo);















var redSquare = document.getElementById("redSquare"); // сохраняем в переменную объект элемента #redSquare
var blueSquare = document.getElementById("blueSquare"); // сохраняем в переменную объект элемента #blueSquare


// Подготавливаем функцию, которая считает и добавляет в элемент 

function countClick (element){

	if (element.innerHTML == ""){
		element.innerHTML = 1;
	} else {
		element.innerHTML = parseInt(element.innerHTML)+1;
	}
	console.log(element.innerHTML);
}
// Подготавливаем функцию, которая добавляет класс если его нет и убирает, если есть

function changeClass (element){
	if (element.classList.contains("addedClass")){
		element.classList.remove("addedClass");
	} else {
		element.classList.add("addedClass");
	}
}

// Чтобы использовать функцию, ожидающую параметр, необходимо обернуть вызов в анонимную функцию

redSquare.addEventListener("click", function(){
	countClick(blueSquare);
	changeClass(blueSquare);
});

blueSquare.addEventListener("click", function(){
	countClick(redSquare);
	changeClass(redSquare);
});

