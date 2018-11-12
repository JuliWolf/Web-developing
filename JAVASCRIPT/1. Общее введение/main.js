/*
Типы данных
1. Number - Целые числа (в том числе отрицательные) 
2. Boolean - Значение "true or false"
3. String - Строчный тип данных (любой набор символов заключенный в "" или '')
4. Undefined - тип данных неопределено
5. NaN - Not a nubmer 
6. Function - Функция
7. Array - Массив
*/

/*
Операторы

Ариметические операторы
1. + - Оператор сложения
2. - - Оператор вычитания
3. * - Опретор умножения
4. / - Оператор деления
5. % - Оператор целочисленного остатка деления

Логические операторы
1. > - Логическое больше
2. < - Логическое меньше
3. >= - Логическое больше или равно
4. <= - Логическое меньше или равно
5. == - Оператор логического равенства
6. != - Оператор логического неравенства
7. || - Логический оператор или
8. && - Логический оператор и
9. !! - Логический оператор не

Операторы присваивания
1. = - Оператор присваивания
2. += - Оператор сложения и присваивания
3. -= - Оператор вычисления и присваивания
4. *= - Оператор умножения и присваивания
5. ++ - Оператор инкремента (Прибавляет 1 и присваивает значение)
6. -- - Оператор декремента (Отнимает 1 и присваивает значение)

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




/*Анонимная функция */

// var foo = function (){
// 	console.log("Hello World")
// }


/*Анонимная самовызывающаяся функция*/

// var payFromAccount =  (function(){

// 	var account = 20;

// 	function pay (much){
// 		account = account - much;
// 		console.log(account);
// 	}

// 	return pay;})()



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



// Массивы 

// Массивы - это нумерованный список данных, разделенных запятой. Доступ к элементам массива осуществляется по индексу. 
// У массива есть длина. Доступ к длине массива можно получить с помощью свойства "length". 
// Длину массива можно задавать с помощью свойства "name.length = sum;"
// Присвоить новое значение элементу массива можно с помощью "arr[1] = 10;"

// var arr = ["Hello World", 23, true, undefined, 12, 45, "Hi", false, "name"];


// for (var i = 0; i < 9; i++){
// 	console.log (arr[i])
// }



// Удаление элементов из массива

//var arr = ["Hello", "World",",", "Я", "изучаю", "JavaScript", "!"];
 
//arr.splice (2, 2);
//alert (arr);



// Удаление элементов и вставка других на их место 

// var arr = ["Hello", "World", "Я", "изучаю", "JavaScript", "!"];

// arr.splice (2, 2, "Мы", "изучаем");
// alert (arr);


//Вставка элементов без удаления

// var arr = ["Hello", "World", "Я", "изучаю", "JavaScript", "!"];

// arr.splice (3, 0, "сложный", "язык");
// alert (arr); 



// Копирование участка массива, не меняя его

// var arr = ["Hello", "World", "Я", "изучаю", "JavaScript", "!"];

// var arr2 = arr.slice(0, 2);
// alert (arr2);



// Копирование всего массива

// var arr = ["Hello", "World", "Я", "изучаю", "JavaScript", "!"];
// alert (arr.slice(2));



// Копирование всего массивка

// var arr = ["Hello", "World", "Я", "изучаю", "JavaScript", "!"];
// var fullcopy = arr.slice();

// console.log(fullcopy);



// Цикл "for ... in " используется для перебора свойств массива или объекта, включая унаследованные

// var arr = ['hello', 'world', 34];


// for(var i in arr){
// 	if(arr.hasOwnProperty(i)){
// 		console.log(arr[i]);
// 	}
// }





//Объекты

// var person = {
// 	"name": "John",
// 	"age": 25,
// 	"voice": function (){
// 		console.log ("Hello, I'm " + this.name);//метод объекта
// 	} 
// }

// var arr = [];
// for (var i in person){
// 	if (person.hasOwnProperty(i)){
// 		arr.push(person[i]);
// 	}
// }





var obj = {
	param: 'hello',
	foo: function(){
		var self = this;
		function bar(){
			console.log(self);
		}
		bar();
	}
}

obj.foo();




















