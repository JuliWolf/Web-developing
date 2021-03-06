/*
Типы данных
1. Number - Целые числа (в том числе отрицательные) 
2. Boolean - Значение "true or false"
3. String - Строчный тип данных (любой набор символов заключенный в "" или '')
4. Undefined - тип данных неопределено
5. NaN - Not a nubmer 
6. Function - Функция
7. Array - Массив
8. Object - Объект
*/


/*=======================================================================================*/
/*
Операторы

Ариметические операторы
1. + - Оператор сложения
2. - - Оператор вычитания
3. * - Опретор умножения
4. / - Оператор деления
5. % - Оператор целочисленного остатка деления

Операторы сравнения
1. > - Логическое больше
2. < - Логическое меньше
3. >= - Логическое больше или равно
4. <= - Логическое меньше или равно
5. == - Оператор логического равенства (пытается привести типы)
6. === - Строгое равенство (сравнивает значение и тип)
7. != - Оператор логического неравенства (пытается привести типы)
8. !== Строгое неравенство (сравнивает значение и тип)

Логические операторы
1. || - Логический оператор или
2. && - Логический оператор и
3. !! - Логический оператор не

Операторы присваивания
1. = - Оператор присваивания
2. += - Оператор сложения и присваивания
3. -= - Оператор вычисления и присваивания
4. *= - Оператор умножения и присваивания
5. ++ - Оператор инкремента (Прибавляет 1 и присваивает значение)
6. -- - Оператор декремента (Отнимает 1 и присваивает значение)

Оператор группировки
1. ( ) - для объединения операций

Оператор конкатенации (склеивание) строк
1. + - Используется лишь тогда, когда один из оперантов - строка

Тернарный оператор 
1. выражение ? случай истинности : случай не истинности;  **link 388

Операторы доступа
1. .  - Оператор доступа к свойству объекта, если это не строка. 
2. [] - Оператор доступа к свойству объекта или элементу массива. 
*/


//console.log(typeof(1));
//console.log("Hello"+" "+"World");
//console.log("Hello"+1);
//console.log("Hello"*1);
//console.log(NaN==NaN);


/*=======================================================================================*/
//Условные выражения


// if(Выражение){
// 	Инструкция в случае истинности выражения.
// } 

// var money = false;
// var is_shop_open = false;
// var yuriys_money = true;
// var products = false;

// if (products){
// 	console.log("Приготовил Салат")
// }else if((money ||yuriys_money) && is_shop_open){
// 	console.log("Купил салат")
// }else {
// 	console.log("Скажи салату нет")
// }

// var age = 66;

// if(age <= 0){
// 	console.log("Вы еще не родились")
// }else if ((age <= 7) && (age > 0)){
// 	console.log("Вам в сад")
// }else if ((age <= 18) && (age > 7)){
// 	console.log("Вам в школу")
// } else if ((age <= 25) && (age > 18)){
// 	console.log("Вам в университет")
// }else if ((age <= 30) && (age > 25)){
// 	console.log("У вас кризис среднего возраста")
// } else if ((age <= 45)&& (age > 30)){
// 	console.log("Вам не скоро на пенсию")
// }else if ((age <= 55) && (age > 45)){
// 	console.log("Еще чуть-чуть и пенсия")
// }else if((age <= 65) && (age > 55)){
// 	console.log("Пенсия уже не нужна")
// }else if (age >=65){
// 	console.log("Готовься!")
// }


/*=======================================================================================*/
// Циклы


// var age = 1;

// while(age < 100){
// 	if(age <= 0){
// 		console.log("Вы еще не родились")
// 	}else if ((age <= 7) && (age > 0)){
// 		console.log("Вам в сад")
// 	}else if ((age <= 18) && (age > 7)){
// 		console.log("Вам в школу")
// 	} else if ((age <= 25) && (age > 18)){
// 		console.log("Вам в университет")
// 	}else if ((age <= 30) && (age > 25)){
// 		console.log("У вас кризис среднего возраста")
// 	} else if ((age <= 45)&& (age > 30)){
// 		console.log("Вам не скоро на пенсию")
// 	}else if ((age <= 55) && (age > 45)){
// 		console.log("Еще чуть-чуть и пенсия")
// 	}else if((age <= 65) && (age > 55)){
// 		console.log("Пенсия уже не нужна")
// 	}else if (age >=65){
// 		console.log("Готовься!")
// 	}
// 	age++;
// }




// var i = 1;

// while(i<=100){
// 	if(i % 3 == 0){
// 		console.log(i);
// 	}
// 	i++;
// }


// var i = 1;
// var str = "";

// while (i<=20){
// 	str = str + "*";
// 	console.log(str);
// 	i++;
// }


//Возведения числа в степень

// var i = 1;
// var result = parseInt(prompt('какое число возводить?'));
// var number = result;
// var limit = prompt('В какую степень');

// while (i<limit){
// 	result = result * number;
// 	i++;
// }

// console.log(result);

// var i = 1;
// var n = 7;
// while (i < 100){
// 	if (i % n == 0){	
// 	console.log(i);
// 	}
// 	i++;
// }


// var i = 1;
// var end = "";
// var letter = "";
// while (i < 100){
// 	if ((i % 100 == 11) || (i % 100 == 12) || (i % 100 == 13) || (i % 100 == 14)){
// 		end = "";
// 	}else if (i % 10 == 1){
// 		end = "а";
// 	}else if ((i % 10 >= 2) && (i % 10 <=4)){
// 		end = "ы";
// 	}else if ((i % 10 > 4) && (i % 10 <=9) || (i % 10 == 0)){
// 		end = "";
// 	}
// 	if ((i % 10 == 1) && (i % 100 != 11)){
// 		letter = "а";
// 	}else {
// 		letter = "о";
// 	}
// 	 console.log("На ветке сидел"+letter+" "+i+" ворон"+end+"!");
// 		i++;
// }


// var i = 2;

// switch(i){
// 	case 1 : console.log(1); break;
// 	case 2 : console.log(2); break;
// 	case 3 : console.log(3); break;
// 	case 4 : console.log(4); break;
// }


// var i = 1;

// while (i <= 5){
// 	switch(i){
// 		case 1 : console.log(1); break;
// 		case 2 : console.log(2); break;
// 		case 3 : console.log(3); break;
// 		case 4 : console.log(4); break;
// 		case 5 : console.log(5); break;
// 	}
// 	i++;
// }


// for (var i = 1; i <= 10; i++){
// 	console.log(i);
// }


// for (var i = 1; i <= 10; i++){
// 	switch(i){
// 		case 3: continue;break;
// 		case 7: continue;break;
// 	}
// 	if (i == 8){
// 		break;
// 	}
// 	console.log(i);
// }



// var i = parseInt(prompt('Укажите число итераций'));


// function foo (some) {
// 	for(var i = 0; i<=some; i++){
// 		console.log(i);
// 	}
// }



// foo(i);
// foo(2);
// foo(7);


/*=======================================================================================*/
// Функции


// Функция битва Hero vs Monster


// var hero = 100;
// var monster = 500;
// var heroMP = 0;

// function regen () {
// 	heroMP += 50;
// }

// function megaHit () {
// 	var megaDamage = getRandomInt(20,100);

// 	monster = monster - megaDamage;
// 	heroMP = 0;
// 	console.log ("Hero made a Super Attack on Monster on "+ megaDamage);
// }


// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// function hit (who){
	
// 	var damage = getRandomInt(0,10);

// 	if (who == "H"){
// 		hero = hero - damage; 
// 		console.log ("Monster attacked Hero on "+ damage);
// 	} else if (who == "M"){
// 		monster = monster - damage;
// 		console.log ("Hero attacked Monster on "+ damage);
// 	}
// }

// while ((hero > 0) && (monster > 0)){
// 	if (heroMP == 100){
// 		megaHit();
// 	} else {
// 		hit ("M");
// 	}
// 	hit ("H");
// 	regen();
// 	console.log ("Monster's life is " + monster + "\n Hero's life is " + hero +"\n Hero's mana is " + heroMP + "\n\n");
// }


/*=======================================================================================*/


// function plus (numOne, numTwo){
// 	return (numOne + numTwo);
// }

// function minus (numOne, numTwo) {
// 	return (numOne - numTwo);
// }

// function mult (numOne, numTwo) {
// 	return (numOne * numTwo);
// }

// function devide (numOne, numTwo) {
// 	return (numOne / numTwo);
// }

// var funcPlus = plus(2, 5);
// var funcMinus = minus(5, 2);
// var funcMult = mult(2, 5);
// var funcDevide = devide(6, 2);

// console.log (funcPlus, funcMinus, funcMult, funcDevide);


/*=======================================================================================*/


// function bar(one){
// 	console.log(one * 2);
// }


// function foo (one, two){
// 	return one + two;
// }

// console.log(foo(4, 7));

// var result = foo(2, 8);
// console.log(result);

// bar(foo(5, 5));


/*=======================================================================================*/
/*Анонимная функция */


// var foo = function (){
// 	console.log("Hello World")
// }


/*=======================================================================================*/
/*Анонимная самовызывающаяся функция*/


// var payFromAccount =  (function(){

// 	var account = 20;

// 	function pay (much){
// 		account = account - much;
// 		console.log(account);
// 	}

// 	return pay;})()


/*=======================================================================================*/


// if(true){
// 	console.log('hello');
// }else{
// 	console.log('bye');
// }

// true ? console.log('hello') : console.log('bye');


// function num (n1, n2){
// 	var result = n1;
// 	var counter = 2;

// 	while (counter <= n2){
// 		result = result * n1;
// 		counter++;
// 	}
// 	return (result);
// }

// console.log (num(5, 3));


/*=======================================================================================*/


// Функция, которая передает в консоль "Hello ....!"
// Сама функция может быть декларирована после вызова
// программа сначала анализирует файл, только потом выполняет
// Функция может принимать несколько параметров


// function sayHello(name,sign){
// 	name = name || "Guest";
// 	sign = sign || "...";
// 	console.log("Hello, "+name+sign);
// }

// sayHello("John", "!"); //Hello, John!
// var n = "Mike";
// sayHello(n); //Hello, Mike...
// sayHello(); //Hello, Guest...


/*=======================================================================================*/


// Функция складывает числа и возвращает значение

// function sum(n1, n2){
// 	return n1+ n2;
// }

// var res = sum(5, 3);
// // console.log(res);
// console.log ( sum(2, 4) ); //8


/*=======================================================================================*/


// Функция всегда передает положительное число

// function abs(num){
// 	// if (num < 0){
// 	// 	return -num;
// 	// }
// 	// return num;
// 	return(num<0)? -num : num;
// }

// console.log(abs(5));
// console.log(abs(-5));


/*=======================================================================================*/


// Функция возведения числа в степень

// function power (base, exp){
// 	var result = 1;
// 	for(var cnt=0; cnt<exp; cnt++){
// 		result *=base;
// 	}
// 	return result;
// }
// console.log(power(2, 10)); //1024
// console.log(power(3, 5)); //243
// console.log(power(5, 3)); //125


/*=======================================================================================*/
// Области видимости


//Глобальная область видимости это то, что вне  функции
//Локальная область видимости это то, что находится внутри функции

// var x = "X"; 
// var y = "Y";


// function outer(){
// 	var x = "x";
// 	console.log("x: "+ x); //x: x
// 	console.log("y: "+ y); //y: Y
// 	y = "y";
// 	function inner(z){
// 		var y = "_y";
// 		console.log("x: "+ x); //x: x
// 		console.log("y: "+ y); //y: _y
// 		console.log("z: "+ z); //z: z
// 	}
// 	inner ("z")
// }

// outer();
// console.log("x: "+ x); //x: X
// console.log("y: "+ y); //y: y


/*=======================================================================================*/


// function outer(){
// 	return function (x){
// 		console.log(x);
// 	}
// }

// var x = outer();
// x("Hello");


/*=======================================================================================*/
//Замыкание


// Передача параметров функции внутри функции


// function say(greet){
// 	return function(name){
// 		return greet + " " + name;
// 	};
// };

// var en = say("Hello");
// // console.log(en);
// console.log(en("John"));
// console.log(en("Mike"));

// var ru = say("Privet");
// // console.log(ru);
// console.log(ru("Vasya"));
// console.log(ru("Petya"));


// Исправить ошибку

// for(var i = 0; i< 10; i++){
// 	setTimeout(function(){
// 		console.log(i)
// 	}, 10)
// }

// for(var i = 0; i< 10; i++){
// 	(function(count){
// 		setTimeout(function(){
// 			console.log(count)
// 		}, 10)
// 	})(i)
// }

// for(let i = 0; i< 10; i++){
// 	setTimeout(function(){
// 		console.log(i)
// 	}, 10)
// }


/*=======================================================================================*/


// Функция сравнения чисел 

// function compare(x){
// 	return function(y){
// 		if(y==x){ 
// 			return null;
// 		}return y>x;
// 	}
// };
// console.log( compare(10)(9) );
// // var c = compare(10);
// // console.log( c(9) );
// // console.log( c(10) );
// // console.log( c(11) );


/*=======================================================================================*/
// Рекурсия


// Используется когда неизвестно сколько раз нужно разворачивать функцию

// Функция возведения числа в степень

// function power (base, exp){
// 	if (exp == 0){
// 		return 1;
// 	}return base * power(base, exp-1);
// }

// 	//Как разворачивается функция
// 	// function power (2, 3){
// 	// 	if (3 == 0){
// 	// 		return 1;
// 	// 	}return 2 * power(2, 3-1);//power = 4
// 	// }
// 	// function power (2, 2){
// 	// 	if (2 == 0){
// 	// 		return 1;
// 	// 	}return 2 * power(2, 2-1);//power = 2
// 	// }
// 	// function power (2, 1){
// 	// 	if (1 == 0){
// 	// 		return 1;
// 	// 	}return 2 * power(2, 1-1); //power = 1
// 	// }
// 	// function power (2, 0){
// 	// 	if (0 == 0){
// 	// 		return 1;
// 	// 	}return 2 * power(2, 1-1);
// 	// }


// console.log(power(2, 3));//8


/*=======================================================================================*/
// Массивы 


// Массивы - это нумерованный список данных, разделенных запятой. Доступ к элементам массива осуществляется по индексу. 
// У массива есть длина. Доступ к длине массива можно получить с помощью свойства "length". 
// Длину массива можно задавать с помощью свойства "name.length = sum;"
// Присвоить новое значение элементу массива можно с помощью "arr[1] = 10;"

// var arr = ["Hello World", 23, true, undefined, 12, 45, "Hi", false, "name"];


// for (var i = 0; i < 9; i++){
// 	console.log (arr[i])
// }


/*=======================================================================================*/
// Удаление элементов из массива


//var arr = ["Hello", "World",",", "Я", "изучаю", "JavaScript", "!"];
 
//arr.splice (2, 2);
//alert (arr);


/*=======================================================================================*/
// Удаление элементов и вставка других на их место 


// var arr = ["Hello", "World", "Я", "изучаю", "JavaScript", "!"];

// arr.splice (2, 2, "Мы", "изучаем");
// alert (arr);

/*=======================================================================================*/
//Вставка элементов без удаления


// var arr = ["Hello", "World", "Я", "изучаю", "JavaScript", "!"];

// arr.splice (3, 0, "сложный", "язык");
// alert (arr); 


/*=======================================================================================*/
// Копирование участка массива, не меняя его


// var arr = ["Hello", "World", "Я", "изучаю", "JavaScript", "!"];

// var arr2 = arr.slice(0, 2);
// alert (arr2);


/*=======================================================================================*/
// Копирование всего массива


// var arr = ["Hello", "World", "Я", "изучаю", "JavaScript", "!"];
// alert (arr.slice(2));


/*=======================================================================================*/
// Копирование всего массивка


// var arr = ["Hello", "World", "Я", "изучаю", "JavaScript", "!"];
// var fullcopy = arr.slice();

// console.log(fullcopy);


/*=======================================================================================*/


// Цикл "for ... in " используется для перебора свойств массива или объекта, включая унаследованные

// var arr = ['hello', 'world', 34];


// for(var i in arr){
// 	if(arr.hasOwnProperty(i)){
// 		console.log(arr[i]);
// 	}
// }


/*=======================================================================================*/


// Извлечение последнего элемента массива

 // var a = [5, 'abc', 73];

 // var v = a.pop();
 // console.log(v);


/*=======================================================================================*/


//Добавление элемента в конец массива

// var a = [5, 'abc', 73];
// var v = a.push(12, 3);
// console.log(a);


/*=======================================================================================*/


//Извлечение элемента из начала массива

// var a = [5, 'abc', 73];
// var v = a.shift();

// console.log(v);
// console.log(a);


/*=======================================================================================*/


//Добавление элементов в начало массива

// var a = [5, 'abc', 73];
// var v = a.unshift(12, 3);

// console.log(v);
// console.log(a);


/*=======================================================================================*/

//Метод перебора массива


//первое значение - значение элемента массива
//Второе значение - индекс элемента массива
//Третье значение - весь массив
// var m = [1, 2, 3];
// m.forEach(function(q, w, e){	
// 	console.log(q);
// 	console.log(w);
// 	console.log(e);

// })


/*=======================================================================================*/


//Создание нового массива

// var m = [1, 2, 3];
// var i = m.map(function(q, w, e){
// 	console.log(q);
// 	console.log(w);
// 	console.log(e);
// })
// console.log(i);


/*=======================================================================================*/
//Объекты


// Создание пустого объекта
// Добавление объекту новых свойств и вызов объекта


// var user = {};
// user.name = "John";
// user.age = 25;

// console.log(user);
// console.log(user.name);


/*=======================================================================================*/


// Создание объекта со свойствами и методами


// var person = {
// 	"name": "John",
// 	"age": 25,
// 	"voice": function (){
// 		console.log ("Hello, I'm " + this.name);//метод объекта
// 	} 
// }


/*=======================================================================================*/


// var arr = [];
// for (var i in person){
// 	if (person.hasOwnProperty(i)){
// 		arr.push(person[i]);
// 	}
// }


/*=======================================================================================*/


// var obj = {
// 	param: 'hello',
// 	foo: function(){
// 		var self = this;
// 		function bar(){
// 			console.log(self);
// 		}
// 		bar();
// 	}
// }

// obj.foo();


/*=======================================================================================*/


// Можно создавать свойства, которые содержат пробел, начинаются с "var", начинаются с цифер

// var o = {
// 	"user name":"John",
// 	var:10,
// 	2:true
// };

// console.log(o);
// console.log(o[2]); //true
// console.log(o[1+1]);//true
// console.log(o["user name"]);//John
// console.log(o["var"]);//10

// console.log("var" in o); //чтобы узнать есть ли свойства у объекта (возвращает булев тип)
// console.log("x" in o);


/*=======================================================================================*/


// Как удалять свойства объекта


// var o = {
// 	x:10
// };
// console.log(o.x);//10
// delete o.x;
// console.log(o);//{}


/*=======================================================================================*/


// Перечисление всех свойств объекта

// var user = {
// 	"x": "a",
// 	"y": "b",
// 	"z": "c"
// };

// for(var i in user){ 
// 	console.log(i+ ":" + user[i]);
// }
// // for (var i=0; i in user; i++){ //если свойства пропумерованы
// // 	console.log(i+ ":" + user[i]);
// // }


/*=======================================================================================*/


//объекты передаются по ссылке

// var o ={a:2};
// console.log(o);
// var r = o;
// console.log(r);
// r.a = 10;
// console.log(o);

//массивы передаются по ссылке

// var o = [1,2,3,4];
// console.log(o);
// var r = o;
// console.log(r);
// r[2] = 10;
// console.log(o);


//Копирование объекта

// var o = {a:2};
// console.log(o);
// var r = Object.assign({},o);
// console.log(r);
// r.a = 10;
// console.log(r);
// console.log(o);

//Копирование массива

// var o = [1,2,3,4];
// console.log(o);
// var r = o.slice();
// console.log(r);
// r[2] = 10;
// console.log(r);
// console.log(o);



/*=======================================================================================*/


//Создать пустой объект и добавить в него свойства
//Вывести все свойства в консоль


// var obj = {};

// obj.name = "Mike";
// obj.age = "34";
// obj.lang = "english";

// for (var i in obj){
// 	console.log (i + ":" + obj[i]);
// }


/*=======================================================================================*/


//Объекту можно присвоить ранее созданную функцию
//Функция может быть описана где угодно и вызываться где угодно

// var o = {
// 	param:10,
// 	method: function(){
// 		var self = this;
// 		function test(){
// 			console.log(self.param); //Эта функция не является методом объекта
// 		}
// 		test(o);
// 	}
// };

// o.method();



//  function some(){
//  	console.log(this.age);
//  }
// var age = 10;
// some();
 
// var john = {
// 	"name": "John",
// 	say: function(word){
// 		console.log(word + " from " + this.name);
// 	}
// };

// var mike = {
//  	name: "Mike",
// };

 //mike.x = john.say;
//(mike.x("Hello"));


/*=======================================================================================*/
//Метод функции "call"


//Использовать функцию одноразово, без присваивания объекту
// параметры передаются через запятую после названия объекта
//Передать параметров можно больше, чем она ожидает
//чтобы узнать остальные параметры используем свойство "arguments"


//  function some(a, b){
//  	// console.log(this.name);
//  	// console.log(some.length); //сколько параметров ожидает функция
//  	console.log(arguments.length); //количество принятых параметров
//  	console.log(arguments[2]); //вывести параметры по номеру
//  }

// var mike = {
//  	name: "Mike",
// };

// // console.log(some.length);
// some.call(mike, 10, 20, 30, 40, 50);//параметры передаются через запятую после названия объекта


/*=======================================================================================*/

// Метод функции "apply"
//Чтобы передать параметры в виде массива


// var a = [5, 45,3 ,89, 100];

// Math.min.apply(Math, a);


/*=======================================================================================*/
//Самовызывающаяся функция


// function foo(){
// 	var a = [];
// 	for(var i=0; i<3; i++)
// 		(function(j){
// 		a.push( function(){
// 			console.log(j)
// 		});}) (i);
// 	return a;
// }

// var x = foo();
// x[0]();
// x[1]();
// x[2]();


/*=======================================================================================*/
// Объект Math


// var a = [5, 12];
// var b = [];
// a[99] = 7;

// for(var i in a){
// 	b.push(Math.pow(a[i], 2));
// }


/*=======================================================================================*/
// Свойства и методы строки

// var t = "Hello World";

// console.log("hello".length); //Определяет длину строки
// console.log("hello".concat(" ", "world")); //Склеивает строки(альтернатива "+")
// console.log("hello".toLowerCase()); //hello
// console.log("hello".toUpperCase()); //HELLO

// console.log("hello".charAt(2)); //позиция символа с 0
// console.log("hello".charCodeAt(2)); //возвращает символ в виде юникода

// var x = t.slice(2, 5);//llo
// var y = t.substring(2, 5);//llo

// var x = t.slice(2);//llo World

// var x = t.slice();//Hello World


//"substring" метод, который при неправильном диапазоне меняет их местами

// var x = t.slice(5, 1);//""
// var y = t.substring(5, 1);//ello


//"substring" метод, который в отличии от метода "slice" не работает с отрицательными значениями

// var x = t.slice(-5, -1);//Worl

// var x = t.indexOf("Wor", 5);//Поиск в строке данного словосочетания, второй параметр - это начало поиска

// var x = t.lastIndexOf("llo", 2);

// var x = t.replace("World", "Earth"); //замена в строке с разбитием по знаку

// var x = t.split(" "); //Возвращает массив,вторым параметром можно указать кол-во элементов

// console.log(x);
// console.log(y);


/*=======================================================================================*/


//  var s = "Мы знаем, что монохромный цвет - это градации серого";
//  var txt = "хром";
//  var word;


// var pos = s.indexOf(txt);
// if(pos != -1){
// 	var start = s.lastIndexOf(" ", pos)+1;
// 	var end = s.indexOf(" ", pos);
// 	if(end== -1){
// 		word = s.slice(start);
// 	}
// 	word = s.slice(start, end);
// }


// console.log(word);


/*=======================================================================================*/
//Регулярные выражения


// var re = /.../;
// var s = "...";
// s.search(re); //метод строки для работы с регулярными выражениями
// re.test(s);//метод регулярного выражения для работы со строками

// var email = "vasya@mail.ru";

// console.log(email.search(/@/));//5

// console.log(email.search(/gmail|yandex/));//-1
// console.log(/gmail|yandex/.test(email));//false

// console.log(/[abc]/.test(email));//есть ли в этой строке указанные буквы

// console.log(/[^abc]/.test(email));//в строке не должно быть "abc"

// console.log(/[a-z]/.test(email)); // есть ли символы из диапазона

// console.log(/[a-zA-Z]/.test(email));

// console.log(/[0-9]/.test(email));// есть ли символы из диапазона чисел

// [a-zA-Z0-9_] - /\w/ // если нужно указать все перечисленные символы
// [^a-zA-Z0-9_] - /\W/

// [0-9] - /\d/
// [^0-9] - /\D/
// /./ //любой символ вообще, кроме "/n"

		// console.log(/b/i.test("abbBbbbc"));//флаг, для обозначения не зависимости от регистра(большая буква или прописная)
		
		// console.log(/^def/im.test("ABC\nDEF\nXYZ"));//мультистрока


/*=======================================================================================*/
//Диапазоны регулярных выражений


// console.log(/ab{2,4}c/.test("abc")); //числа, указанные в {} обозначают минимум и максимум буквы "b" в строке для отбора 

// console.log(/ab{2,4}c/.test("abbc"));//true
// console.log(/ab{2,4}c/.test("abbbbbc"));//false

// console.log(/ab{2,}c/.test("abbc"));//максимум не ограничен, но миниму 2

// console.log(/ab{2}c/.test("abbc"));//строго 2 буквы

// {0,1} - ?//вместо диапазона 0-1 можно использовать знак вопроса
// console.log(/ab?c/.test("abc"));//true

// // {1,} - + //миниму 1 и максимум не ограничен
// console.log(/ab+c/.test("abbbbbbc"));//true

// // {0,} - *//либо вообще нет, либо сколько угодно
// console.log(/ab*c/.test("abbbbbbc"));//true


//Группировка

// "......"
// ""
// '......'
 // var re = /(['"])[^'"]*\1/;//в круглых скобках группировка, на которую ставится ссылка по номеру(1,2...)

 // \1 - ссылка


/*=======================================================================================*/

// 25-02-2012
//25-2-2012
//01-12-2011
//2-12-1978

// console.log(/^\d\d&?-\d\d?-\d{4}&/.test("25-2-2012"));

// /^\d\d&?-\d\d?-\d{4}$/  //знак "^" ограничивает начало строки, знак "&" ограничивает конец строки
// /\d{1,2}-\d{1,2}-\d{4}/
// /[0-3]?\d-[0-2]?\d-\d{4}/


/*=======================================================================================*/
// Функция-конструктор


// Для обращения к функции используем свойство объекта "constructor"


// function User(name, age){
// 	this.name = name;
// 	this.age = age;
// 	this.admin = false;
// }


// var u1 = new User("John", 25);
// u1.admin = true;

// // console.log(u1.constructor);

// var u2 = new User("Mike", 33);

// User.prototype.x = 10;
// User.prototype.say = function(w){
// 	console.log(this.name, ":", w)
// };

// u2.say = 10;
// console.log(u2);

// delete u2.say;
// console.log(u2);


//Если где-то сверху в коже изменены свойства объекта

	// Object.prototype.x = 10;
	
	// var u = new User("John", 25);
	
	// //чтобы вывести только изначальные, корневые свойства объекта используем метод "hasOwnProperty"
	// for(var i in u){
	// 	if(u.hasOwnProperty(i))
	// 	console.log(i, ":", u[i]);
	// }


/*=======================================================================================*/


// var n1 = 10; 

// console.log(typeof n1);

// var n2 = new Number(10);

// console.log(n2.valueOf());//метод для извлечения значения


//"s" не является объектом, программа создает временный объект, который удаляет в конце операции
// var s = "Hello";
// s.length;	//var tmp = new String(s); 
// 		 		//tmp.length
// 		 		//delete tmp


/*=======================================================================================*/


//Конструктор для регулряного выражения
//Чтобы использовать массив для регулярного выражения

// var accept = ["gmail","yandex","yahoo"];
// var re = new RegExp(accept.join('|'),"i");

// // /gmail|yandex|yahoo/.test(email);


/*=======================================================================================*/


//Функция, которая возвращает все параметры в виде массива

//  function func(){
//  	return Array.prototype.slice.call(arguments);
//  }

// console.log(func(1,2,3,4,5,6,7,8))


/*=======================================================================================*/


//Создать конструктов Book со свойствами, создать объект типо book с произвольными значениями
//Добавить в прототип конструктора Book метод show, который выводит свойства 


// function book(){
// 	this.title = "Book";
// 	this.price = 100;
// 	this.pubYear = 2017;
// }

// var b = new book();
// book.prototype.show = function(){
// 	console.log(this.title);
// 	console.log(this.price);
// };
// console.log(b.show());


/*=======================================================================================*/
//Объект Date


//Для работы со временными данными в спецификации JavaScript подготовлен конструктор объекта "date"
//наиболее распространенным, с практической точки зрения, инструментом для работы с временными данными
//является метка времени (timeStamp) количество дней в милисекундах, прошедших с 1970 (начало эры Unix)

//Метка времени
// Date.now(); //1542452460567

//Создание нового объекта "Date"
// var d = new Date(); //Sat Nov 17 2018 14:02:54 GMT+0300 (Москва, стандартное время)

//Констуктор может принимать метку времени для создания объекта даты на определенное время
// var specD = new Date(1542452460567);//Sat Nov 17 2018 14:01:00 GMT+0300 (Москва, стандартное время)

//У объекта "Date" есть методы 

// d.getDay() //Возвращает день месяца (1-31) указанной даты по местному времени.
// d.getDate()  //Возвращает день недели (0-6) указанной даты по местному времени.
// d.getFullYear() //Возвращает год (4 цифры для 4-х значного года) указанной даты по местному времени.
// d.getHours() //Возвращает часы (0-23) указанной даты по местному времени.
// d.getMilliseconds() //Возвращает миллисекунды (0-999) указанной даты по местному времени.
// d.getMinutes() //Возвращает минуты (0-59) указанной даты по местному времени.
// d.getMonth() //Возвращает месяц (0-11) указанной даты по местному времени.
// d.getSeconds() //Возвращает секунды (0-59) указанной даты по местному времени.


// Собрать дату в формате HH:MM:SS DD.MM.YYYY
// console.log(d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()+" "+d.getDate()+"."+d.getMonth()+"."+d.getFullYear());//14:27:19 17.10.2018

//Способ для увеличения или уменьшение timeStamp на определенное количество времени
// new Date(Date.now() + 30*24*60*60*1000);//увеличение на 30 дней


/*=======================================================================================*/
//Date


// function getDate(str){
// 	var f = str.match(/^(\d\d?)-(\d\d?)-(\d{4})$/);
// 	if(f){
// 		return new Date (f[3], f[2]-1, f[1]);
// 	}
// }

// var d = getDate("21-10-2014");
// console.log(d.toString());


/*=======================================================================================*/


//Можно назначить свою дату,время(часы, минуты, секунды)

// d = new Date();

// d.setDate(10);

// console.log(d);


/*=======================================================================================*/
// Таблица типа Exel


// var block = document.createElement("div");
// block.classList.add("smallBox");
// var body = document.getElementsByTagName("body")[0];
//
//
// //Выбираем элемент "table"
// // Вводим новую переменную, которая перебирает буквы по алфавиту по их Юникоду "str.charCodeAt(index)"
// // Создаем внутри каждой ячейки "input" c "id", который был сгенерирован в "letter"
// for (var i=0; i<15; i++){
// 	var row = document.querySelector("table").insertRow(-1);
// 	for(var j=0; j<15; j++){
// 		var letter = String.fromCharCode("A".charCodeAt(0)+j-1);
// 		row.insertCell(-1).innerHTML = i&&j ? "<input id='" + letter + i + "'/>" : i || letter;
// 	}
// }
//
// // Создаем пустой объект
// // Создаем массив, состоящий из всех "input"
// var DATA = {},
// 	INPUT = [].slice.call(document.querySelectorAll("input"));
// //Сохраняем значение введенное в "input" в "localStorage" при наведении
// INPUT.forEach(function(elm){
// 	elm.onfocus = function(e){
// 		e.target.value = localStorage[e.target.id] || "";
// 	};
// // При убирании курсора с "input" задаем ранее введенное значение для данного "input"
// 	elm.onblur = function(e){
// 		localStorage[e.target.id] = e.target.value;
// 		computeAll();
// 		block.style.display = "none";
//
// 	}
// 	elm.onclick = function(e){
// 		block.style.display = "block";
// 		block.innerHTML = e.target.id;
// 		block.style.left = e.pageX + "px";
// 		block.style.top = e.pageY +10+ "px";
// 		body.insertBefore(block,body.childNodes[0]);
// 	}
// //Сохраняем значение введенное в "input" в переменную "value"
// // Задаем условие, в котром находим значение "DATA"
// // Возвращаем значение подстроки
// // Иначе, преобрзуем дробное число в целое десятичное число
// 	var getter = function(){
// 		var value = localStorage[elm.id] || "";
// 		if(value.charAt(0) == "="){
// 			with(DATA)
// 			return eval(value.substring(1));
// 		}else{
// 			return isNaN(parseFloat(value)) ? value : parseFloat(value);
// 		}
// 	};
// 	// Первое значение - объект на котором определяется свойство
// 	// Второе значение - имя определяемого или изменяемого свойства
// 	// Третье значение - дескриптор определяемого или изменяемого свойства
// 	Object.defineProperty(DATA, elm.id, {get:getter});
// 	Object.defineProperty(DATA, elm.id.toLowerCase(), {get:getter});
// });
// (window.computeAll = function(){
// 	INPUT.forEach(function(elm){
// 		try{elm.value = DATA[elm.id];
// 		}catch(e){}
// 	})
// })();