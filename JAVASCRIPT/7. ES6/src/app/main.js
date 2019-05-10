/*******************************SYNTAX***************************************/


/************************let && const***********************/

// При объявлении переменной с помощью let & const нельзя объявлять переменную после того как ей было присвоено значение
// age = 27;
// console.log(age);//27
// var age;

// let age;
// age = 27;
// console.log(age);//27

// function doSmth(){
//   age = 27;
// }
// let age;
// doSmth();
// console.log(age);//27

//  ---------------------- LET -------------------------
// к переменной объявленной с помощью let можно обратить только там, где она была объявлена
// let создает переменную в локальной области видимости

// let age = 20;
// if(true) {
//   // var name = 'Max';
//   let age = 27;
//   console.log(age); //27
// }
// console.log(age);//20


//  ---------------------- CONST -------------------------
//  Константу нельзя изменять
//  при добавления нового значения в массив не меняется сам массив константы
//  При изменении значения константы-объекта не меняется сам объект

// const AGE = 27;
// AGE = 29; // error - Assignment to constant variable.
// const AGES = [27, 29, 31];
// console.log(AGES);//[27, 29, 31]
//
// AGES.push(25);
//
// console.log(AGES);// [27, 29, 31, 25];

// const OBJ = {
//   age: 27
// };
//
// console.log(OBJ);
//
// OBJ.age = 42;
//
// console.log(OBJ);


/************************Arrow functions***********************/

// function fn(){
//   console.log('Hello');
// }

// var fn = () => {
//   console.log('Hello');
// };

// var fn = () => console.log('Hello');

// fn();


//  -----------------------------------------------
// function fn(){
//   return 'Hello';
// }
// var fn = () => 'Hello';

// console.log(fn());//'Hello'


//  -----------------------------------------------
// var fn = (a, b) => {
//   return a + b;
// };

// console.log(fn(2,3));//5


//  -----------------------------------------------
//Если передается только один аргумент, то скобки (не обязательны)
// var fn = a => a + 5;

// console.log(fn(3));//8


// setInterval(() => console.log('Hello'), 1000);


//  -----------------------------------------------
//this всегда будет указывать на объект window, а не на тот объект которым он был вызван
// var fn2 = () => console.log(this); //window

// var button = document.getElementsByClassName('button')[0];
// button.addEventListener('click', fn);
// Указывает на тот объект где он был вызван
// function fn(){
//   console.log(this);
// }

// function Person(){
//   this.age = 0;
//
//   setInterval(() => {
//     this.age++; // |this| properly refers to the person object
//   }, 1000);
// }
//
// var p = new Person(); // Person {age: 0 }


/************************Default values***********************/

// function isEqualTo(number = 20/10, compare = number) {
//   console.log(number);//10
//   console.log(compare);//10
//   return number == compare;
// }
//
// console.log(isEqualTo());//true


/************************Object literals***********************/
// let name = 'Anna';
// let age = 25;
//
// let ageField = "age";
//
// let obj = {
//   name: 'Max',
//   [ageField]: 28,
//   // можно писать название функции в кавычках
//   "greet me"(){
//     console.log(this.name + ' ' + this.age);
//   }
// };
//
// console.log(obj);//{name: "Max", age: 28}
// console.log(obj.age);// 28
// obj["greet me"]();//Max 28


/************************Operator***********************/

//  ---------------Rest operator----------------

// let numbers = [1, 2, 3, 4, 5];

// // Функция ожидает массив
// function sumUp (...toAdd){
//   let result = 0;
//   for (let i = 0; i < toAdd.length; i++){
//     result += toAdd[i];
//   }
//   return result;
// }
// console.log(sumUp(100, 10, 20));


//  ------------Spread operator--------------

// let numbers = [1, 2, 3, 4, 5];
//
// console.log(...numbers);
// console.log(Math.max(...numbers));


/************************The for-of Loop***********************/

// let testResults = [1.23, 1.10, 4.1];
//
// for(let testResult of testResults){
//   console.log(testResult);
// }


/************************Template literals***********************/

// let name = 'Max';
//
// let description = `
// Hello, I'm ${name + '!!!'}
// `;
// console.log(description);//Hello, I'm Max!!!


/************************Destructuring***********************/

//  ---------------Array----------------
// Передаются по позиции в массиве

// let numbers = [1,2,3,4,5];
// let [a, b = 20, ...c] = numbers;
//
// console.log(a);// 1
// console.log(b);// 2
// console.log(c);//[1, 2, 3]
// console.log(numbers);//[[1, 2, 3, 4, 5]


// let a = 5;
// let b = 10;
// [b, a] = [a, b];
// console.log(b);//5
// console.log(a);//10


// let numbers = [1,2,3,4,5];
// let [a, , c] = numbers;
//
// console.log(a,c);//1 3


//  ---------------Object----------------
// Передаются по имени
//
// let obj = {
//   name: 'Max',
//   age: 27,
//   greet: function(){
//     console.log('Hello there!');
//   }
// };
// // Можно поменять имена свойств и методов объекта
// let {name, greet:hello} = obj;
//
// console.log(name);
//
// hello();


/************************Modules & Classes***********************/

//  ---------------Modules----------------

//Смена названия экспортируемой переменной
// import a, {keyValue as key, test} from './external'

// console.log(key);
// test();
// console.log(a);

// import * as imported from './external';
// console.log(imported);
// imported.test();


//  ---------------Classes----------------
//
// class Person{
//   constructor(name){
//     this.name = name;
//   }
//   greet(){
//     console.log('Hello, my name is ' + this.name + ' and I\'m ' + this.age);
//   }
// }
//
// let person = new Person('Julia');
// console.log(person);
// person.greet();//Hello, my name is Julia
//
// console.log(person.__proto__ === Person.prototype);//true


//************************ Inheritance

//При использовании constructor необходимо вызывать конструктор родителя
// class Juli extends Person {
//   constructor(age){
//     super('Juli');
//     this.age = age;
//   }
//
//   greetTwice(){
//     super.greet();
//     super.greet();
//   }
//
//   greet(){
//     console.log('Hello');
//   }
// }

// let juli = new Juli(23);
// juli.greet();
// juli.greetTwice();


//************************ Static method

//Чтобы можно было обратиться к методу класса без создания переменной, можно использовать static function
// class Helper {
//   static logTwice(message){
//     console.log(message);
//     console.log(message);
//   }
// }
//
// Helper.logTwice('Logged!');
//
//
// class Juli extends Person {
//   constructor(age) {
//     super('Juli');
//     this.age = age;
//   }
// }
// let juli = new Juli(23);

//Классы можно экспортировать так же как и модули


//************************ Getters & Setters

// class Person {
//   constructor(name){
//     this._name = name;
//   }
//
//   //Открытие доступа к свойству из вне
//   get name(){
//     return this._name.toUpperCase();
//   }
//
//   set name(value){
//     if(value.length > 2){
//       this._name = value;
//     }
//     console.log('Rejected!');
//   }
// }
//
// let person = new Person('Max');
//
// person.name = 'Anna';
// console.log(person.name);


//************************ Subclasses

//Можно менять свойства уже встроенных классов js
// class ConvertableArray extends Array {
//   convert(){
//     let returnArray = [];
//     this.forEach(value => returnArray.push('Converted! ' + value));
//     return returnArray;
//   }
// }
// let numberArray = new ConvertableArray();
// numberArray.push(1);
// numberArray.push(2);
// numberArray.push(3);
//
// console.log(numberArray.convert());//["Converted! 1", "Converted! 2", "Converted! 3"]


/************************Symbols***********************/


//************************ Symbols Basics

// let symbol = Symbol('debug');
// let anotherSymbol = Symbol('debug');
//
// console.log(symbol == anotherSymbol);//false
//
// let obj = {
//   name: 'Juli',
//   [symbol]: 22
// };
//
// console.log(obj[symbol]);


//************************ Shared Symbols

// let symbol1 = Symbol.for('age');
// let symbol2 = Symbol.for('age');
//
// console.log(symbol1 == symbol2);//true
//
// let person = {
//   name: 'Juli',
//   age: 23
// };
// function makeAge(person){
//   let ageSymbol = Symbol.for('age');
//   person[ageSymbol] = 22;
// }
// makeAge(person);
//
// console.log(person[symbol1]);
// console.log(person['age']);


//************************ Well-known Symbols

// class Person {
//
// }
// Person.prototype[Symbol.toStringTag] = 'Person';
// let person = new Person();
// console.log(person);//__proto__: Person


// let numbers = [1, 2, 3];
//
// numbers[Symbol.toPrimitive] = function(){
//   return 999;
// };
//
// console.log(numbers + 1);//1000


/************************Iterators & Generators***********************/


//************************ Iterator Basics

// let array = [1, 2, 3];
//
// // console.log(typeof array[Symbol.iterator]);//function
//
// let it = array[Symbol.iterator]();
// console.log(it);//Array Iterator {}
// console.log(it.next());//{value: 1, done: false}
// console.log(it.next());//{value: 2, done: false}
// console.log(it.next());//{value: 3, done: false}
// console.log(it.next());//{value: undefined, done: true}


//************************ Iterators in Action

// array[Symbol.iterator] = function(){
//   let nextValue = 10;
//   return {
//     next: function(){
//       nextValue++;
//       return{
//         done: nextValue > 15 ? true : false,
//         value: nextValue
//       };
//     }
//   }
// };
// for(let element of array){
//   console.log(element);
// }


//************************ Custom Iterateable Object

// let person = {
//   name: 'Juli',
//   hobbies: ['Sports', 'Cooling'],
//   [Symbol.iterator]: function(){
//     let i = 0;
//     let hobbies = this.hobbies;
//     return {
//       next: function(){
//         let value = hobbies[i];
//         i++;
//         return {
//           done: i > hobbies.length ? true : false,
//           value: value
//         };
//       }
//     }
//   }
// };
//
// for( let hobby of person ){
//   console.log(hobby);
// }


//************************ Generator Basics

// function *select() {
//   yield 'House';
//   yield 'Garage';
// }
//
// let it = select();
// console.log(it.next());//{value: "House", done: false}
// console.log(it.next());//{value: "Garage", done: false}
// console.log(it.next());//{value: undefined, done: true}


// let obj = {
//   [Symbol.iterator]: gen
// };
// function *gen(end){
//   // yield 1;
//   // yield 2;
//   for (let i = 0; i < end; i++){
//     yield i;
//   }
// }
//
// // for(let element of obj) {
// //   console.log(element);
// // }
//
// let it = gen(2);
// console.log(it.next());//{value: 0, done: false}
// console.log(it.next());//{value: 1, done: false}
// console.log(it.next());//{value: undefined, done: true}


//************************ Controlling iterators with throw and return
//
// function *gen(end){
//   // yield 1;
//   // yield 2;
//   for (let i = 0; i < end; i++){
//     try{
//       yield i;
//     }
//     catch(e){
//       console.log(e);
//     }
//
//   }
// }
//
//
// let it = gen(2);
// console.log(it.next());//{value: 0, done: false}
// // console.log(it.throw('An error occured'));//An error occured
// console.log(it.return('An error occured'));//{value: "An error occured", done: true}
// console.log(it.next());//{value: undefined, done: true}


/************************Promises***********************/


// Необходимы для асинхронных запросов
// Отслеживают окончание запроса и по окончанию выполняют дальнейшие действия в зависимости от успеха или неудачи запроса

//************************ Creating Promises

// let promise = new Promise(function(resolve, reject){
//   setTimeout(function(){
//     reject('Failed!');
//   },1500)
// });
//
// promise.then(function(value){
//   console.log(value);//Done!
// }, function(error){
//   console.log(error);
// });


//************************ Chaining Promises

// function waitASecond(seconds){
//   return new Promise(function(resolve, reject){
//     if (seconds > 2){
//       reject('Rejected!');
//     }else{
//       setTimeout(function(){
//         seconds++;
//         resolve(seconds);
//       }, 1000)
//     }
//
//   });
// }
// waitASecond(1)
//   .then(waitASecond)
//   .then(function(seconds){
//     console.log(seconds);//2
// })
//   .catch(function(error){
//     console.log(error);
//   });


//************************ Build-in Methods

// let promise1 = new Promise(function(resolve, reject){
//   setTimeout(function(){
//     resolve('Resolved!');
//   }, 1000);
// });
//
// let promise2 = new Promise(function(resolve, reject) {
//   setTimeout(function () {
//     reject('Rejected!');
//   }, 2000);
// });
//
// // Ожидаем, когда все промисы будут выполнены успешно
// Promise.all([promise1, promise2])
//   .then(function(success){
//     console.log(success);
//   })
//   .catch(function(error){
//     console.log(error);//Rejected!
//   });
//
// // Ожидаем, когда один промис будет выполнен успешно
// Promise.race([promise1, promise2])
//   .then(function(success){
//     console.log(success);//Resolved!
//   })
//   .catch(function(error){
//     console.log(error);
//   });


/************************Object Extensions***********************/


//************************ Object

// var obj1 = {
//   a: 1
// };
//
// var obj2 = {
//   b: 2
// };
//
// var obj = Object.assign(obj1, obj2);
//
// console.log(obj);//{a: 1, b: 2}


// Последующие объекты присоединяются к первому указанном у объекту

// class Obj1 {
//   constructor(){
//     this.a = 1;
//   }
// }
//
// class Obj2 {
//   constructor(){
//     this.b = 2;
//   }
// }
//
// var obj1 = new Obj1();
// var obj2 = new Obj2();
//
// // Соединяем 2 объекта в первом указанном объекте
// //var obj = Object.assign(obj1, obj2);
// //console.log(obj);//Obj1 {a: 1, b: 2}
// //console.log(obj.__proto__ === Obj1.prototype);//true
//
// // Соединяем объекты в один новый объект
// var obj = Object.assign({}, obj1, obj2);
// console.log(obj);//{a: 1, b: 2}


// let person = {
//   name: 'Max'
// };
// let boss = {
//   name: 'Anna'
// };
// console.log(person.__proto__ === Object.prototype);//true
//
// Object.setPrototypeOf(person, boss);
// console.log(person.__proto__ === Object.prototype);//false
// console.log(person.__proto__ === boss);//true


//************************ Math Object

//let number = -10;
// console.log(Math.sign(number));//-1

// let number = 10;
// console.log(Math.sign(number));//1

// let number = Nan;
// console.log(Math.sign(number));//Nan

// let number = "Nan";
// console.log(Math.sign(number));//Nan

// let number = 0.78;
// console.log(Math.trunc(number));//0

// let number = 3.78;
// console.log(Math.trunc(number));//3

// let number = -3.78;
// console.log(Math.trunc(number));//-3


//************************ Strings

// let name = 'Julia';

// console.log(name.startsWith('Juli'));//true
// console.log(name.startsWith('Juli'));//false

// console.log(name.endsWith('Juli'));//false
// console.log(name.endsWith('ia'));//true

// console.log(name.includes('uli'));//true


//************************ Number Object

//let number = Nan;
// console.log(isNan(number));//true

// let number = 10000000;
// console.log(isFinite(number));//true

// let number = 10.1;
// console.log(Number.isInteger(number));//false


//************************ Array

// let array = Array(5);
// console.log(array);//[empty × 5]

// let array = Array.of(5, 10, 15);
// console.log(array);//[5, 10, 15]

// let array = [5, 10, 15];
// console.log(array);

// let newArray = Array.from(array, val => val*2);
// console.log(newArray);//[10, 20, 30]

// let array = [5, 10, 15];
// array.fill(100, 1, 2);
// console.log(array);//[5, 100, 15]
// array.fill(100);
// console.log(array);//[100, 100, 100]

// Находит первый элемент соотвествующий требованиям
// let array = [5, 12, 15];
// console.log(array.find(val => val >= 12));//12


// let inventory = [
//   {name: 'apples', quantity: 2},
//   {name: 'bananas', quantity: 0},
//   {name: 'cherries', quantity: 5},
// ];
//
// function findCherries(fruit){
//   return fruit.name === 'cherries';
// }
// console.log(inventory.find(findCherries));//{name: "cherries", quantity: 5}

// let array = [5, 10, 15];
// console.log(array.copyWithin(1, 2,));//[5, 15, 15]
// console.log(array);//[5, 15, 15]
// console.log(array.copyWithin(1, 0, 2));//[5, 5, 15]

// let array = [5, 10, 15];
// console.log(array.entries());//Iterator {}
// let it = array.entries();
// for(let element of it){
//   console.log(element);//[(index)0, (value)5] [1, 10] [2, 15]
// }


/************************Maps and Sets***********************/

// Map – коллекция для хранения записей вида ключ:значение
//В отличие от объектов, в которых ключами могут быть только строки, в Map ключом может быть произвольное значение
//************************ Creation & Adding items

// let cardAce = {
//   name: 'Ace of Spades'
// };
//
// let cardKing = {
//   name: 'King of Clubs'
// };
//
// // let deck = new Map(['as', cardAce], ['kc', cardKing]);
// let deck = new Map();
// deck.set('as', cardAce);
// deck.set('kc', cardKing);
// console.log(deck);//{"as" => {…}, "kc" => {…}}


//************************ Managing items

// console.log(deck.size);//2
// deck.set('as', cardAce);
// console.log(deck.size);//2

// console.log(deck.get('as'));//{name: "Ace of Spades"}
// deck.delete('as');
// console.log(deck.get('as'));//undefined
//
// deck.clear();
// console.log(deck);//{}


//************************ Looping through

// console.log(deck.keys());//MapIterator {"as", "kc"}
// for(key of deck.keys()){
//   console.log(key);//as kc
// }

// console.log(deck.values());//MapIterator {{…}, {…}}
// for(value of deck.values()){
//   console.log(value);//{name: "Ace of Spades"} {name: "King of Cluds"}
// }

// console.log(deck.entries());//MapIterator {"as" => {…}, "kc" => {…}}
// for(entry of deck){
//   console.log(entry);//["as", {…}] ["kc", {…}]
// }


//************************ WeakMap object

// Особый вид Map не препятствующимй сборщику мусора удалять свои элементы из памяти
// Если некий объект присутствует только в WeakMap – он удаляется из памяти
// «урезанные» по функционалу варианты Map, которые позволяют только «точечно» обращаться к элементам

// let cardAce = {
//   name: 'Ace of Spades'
// };
//
// let cardKing = {
//   name: 'King of Clubs'
// };
//
// let key1 = {a:1};
// let key2 = {b:2};
//
// let deck = new WeakMap();
// deck.set(key1, cardAce);
// deck.set(key2, cardKing);
//
// console.log(deck.get(key1));//{name: "Ace of Spades"}


//************************ Set object

// Коллекция для хранения множества значений, причём каждое значение может встречаться лишь один раз.

// let set = new Set([1, 1, 1]);

// set.add(2);
// set.add(2);

// for(element of set) {
//   console.log(element);//1 2
// }

// set.delete(1);
// for(element of set) {
//   console.log(element);//2
// }

// set.clear();
// console.log(set);//Set(0) {}

// console.log(set.has(1));//true

// for(element of set.entries()) {
//   console.log(element);//[1, 1] [2, 2]
// }
//
// for(element of set.keys()) {
//   console.log(element);//1 2
// }

// for(element of set.values()) {
//   console.log(element);//1 2
// }


//************************ WeakSet object

// То же самое что и с WeakMap
// «урезанные» по функционалу варианты Map/Set, которые позволяют только «точечно» обращаться к элементам

// let obj1 = {a:1};
// let obj2 = {b:2};
//
// let set = new WeakSet([{a:1}, {b:2}, {b:2}]);
// let set1 = new WeakSet([obj1, obj2, obj2]);

// console.log(set.has({b:2}));//false
// console.log(set1.has(obj2));//true

// set1.delete(obj2);
// console.log(set1.has(obj2));//false

// set1.add(obj1);
// console.log(set1);


/************************The Reflect API***********************/


//************************ Creating Object

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// let person = Reflect.construct(Person, ['Juli'], TopObj);
// console.log(person);//Person {name: "Juli"}
// console.log(person instanceof Person);//true

// function TopObj(){
//   this.age = 23;
// }
// let person = Reflect.construct(Person, ['Juli'], TopObj);

// console.log(person.__proto__ == Person.prototype);//false
// console.log(person.__proto__ == TopObj.prototype);//true


//************************ Calling Function

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//
//   greet(prefix) {
//     console.log(prefix + 'Hello, I am ' + this.name);
//   }
// }
//
// let person = Reflect.construct(Person, ['Juli', 23]);
// Reflect.apply(person.greet, person, []);//Hello, I am Juli
// Reflect.apply(person.greet, {name: 'Anna'}, ['...']);//...Hello, I am Anna


//************************ Prototype

// class Person {
//   constructor() {
//     this.name = 'Juli';
//   }
// }
//
// let person = new Person();
// Person.prototype.age = 23;

// console.log(Reflect.getPrototypeOf(person) == Person.prototype);//true
// console.log(Reflect.getPrototypeOf(person));//{age: 23, constructor: ƒ}

// let proto = {
//  age: 18,
//   greet() {
//    console.log('Hello');
//   }
// };
//
// Reflect.setPrototypeOf(person, proto);
// console.log(Reflect.getPrototypeOf(person));//{age: 18}
//
// Reflect.apply(person.greet, person, []);//Hello


//************************ Accessing properties

// class Person {
//   constructor(name, age) {
//     this._name = name;
//     this.age = age;
//   }
//   get name(){
//     return this._name;
//   }
//   set name(value){
//     this._name = value;
//   }
// }
// let mum = {
//   _name: 'Mum'
// };
//
// let person = new Person('Juli', 23);
// console.log(Reflect.get(person, 'name'));//Juli

// Reflect.set(person, 'name', 'Anna');
// console.log(Reflect.get(person, 'name'));//Anna

// C помощью get мы можем передать значение объекта в виде объекта
// console.log(Reflect.get(person, 'name', mum));//Mum

// Reflect.set(person, 'name', 'Anna', mum);
// console.log(mum);//{_name: "Anna"}
// console.log(Reflect.get(person, 'name', mum));//Anna

// console.log(Reflect.has(person, 'name'));//true

// console.log(Reflect.ownKeys(person));//["_name", "age"]

// Reflect.defineProperty(person, 'hobbies', {
//   writable: true,
//   value: ['Sports', 'Cooking'],
//   configurable: false
// });
// console.log(person.hobbies);// ["Sports", "Cooking"]
//
// person.hobbies = ['Nothing'];
// console.log(person.hobbies);//["Nothing"]
//
// delete person.age;
// console.log(person.age);//undefined

// Reflect.deleteProperty(person, 'age');
// console.log(person.age);//undefined

// console.log(Reflect.isExtensible(person));//true
// Reflect.preventExtensions(person);
// console.log(Reflect.isExtensible(person));//false
// Reflect.defineProperty(person, 'hobbies', {
//   value: ['Sports', 'Cooking'],
// });
// console.log(person.hobbies);//undefined


/************************The Proxy API***********************/

// let person = {
//   name: 'Julia',
//   age: 23
// };
// let handler = {
//   get: function(target, name){
//     return name in target ? target[name] : 'Non existant';
//   },
//   set: function(target, property, value){
//     if (value.length > 2){
//       Reflect.set(target, property, value);
//     }
//   }
// };
// var proxy = new Proxy(person, handler);

// console.log(proxy.name);//Julia
// console.log(proxy.age);//Non existant

// proxy.name = 'Juli';
// console.log(proxy.name);//Juli


//************************ Using Proxies as Prototype

// let person = {
//   name: 'Julia',
//   age: 23
// };
// let handler = {
//   get: function(target, name){
//     return name in target ? target[name] : 'Not existent';
//   }
// };
// let proxy = new Proxy({}, handler);
//
// // Reflect.setPrototypeOf(person, proxy);
// // console.log(person.name);//Julia
// // console.log(person.hobbies);//Not existent
//
//
// let protoHandler = {
//   get: function(target, name){
//     return name in target ? target[name] : 'Not existent';
//   }
// };
//
// let protoProxy = new Proxy(proxy, protoHandler);
// Reflect.setPrototypeOf(person, protoProxy);
// console.log(person.hobbies);//Not existent


//************************ Wrapping Functions

// function log(message){
//   console.log('Log entry created, message: ' + message);
// }
//
// let handler = {
//   apply: function(target, thisArg, argumentsList){
//     if(argumentsList.length === 1){
//       return Reflect.apply(target, thisArg, argumentsList);
//     }
//   }
// };
//
// let proxy = new Proxy(log, handler);
//
// proxy('Hello');//Log entry created, message: Hello
// proxy('Hello', 10);//


//************************ Revocable Proxies

// Отмена

// let person = {
//   name: 'Julia'
// };
//
// let handler = {
//   get: function(target, property){
//     return Reflect.get(target, property);
//   }
// };
//
// let {proxy, revoke} = Proxy.revocable(person, handler);
//
// revoke();
// console.log(proxy.name);//Julia


/************************Weather App***********************/


// import * as ELEMENTS from './elements.js';
// import {Http} from './http.js';
// import {WeatherData, WEATHER_PROXY_HANDLER} from './weather-data.js';
//
// const APP_ID = 'ed663b6069f3fd64a9814d6ffa1a0736';
// ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener('click', searchWeather);
//
// function searchWeather(){
//   const CITY_NAME = ELEMENTS.ELEMENT_SEARCHED_CITY.value.trim();
//   if(CITY_NAME.length == 0){
//     return alert('Please enter a city name');
//   }
//   ELEMENTS.ELEMENT_LOADING_TEXT.style.display = 'block';
//   const URL = 'http://api.openweathermap.org/data/2.5/weather?q=' + CITY_NAME + '&units-metric&appId=' + APP_ID;
//
//   Http.fetchData(URL)
//     .then(responseData => {
//       const WEATHER_DATA = new WeatherData(CITY_NAME, responseData.weather[0].description.toUpperCase());
//       const WEATHER_PROXY = new Proxy(WEATHER_DATA, WEATHER_PROXY_HANDLER);
//       WEATHER_PROXY.temperature = responseData.main.temp;
//       updateWeather(WEATHER_PROXY);
//     })
//     .catch(error => alert(error));
// }
//
// function updateWeather(weatherData){
//   ELEMENTS.ELEMENT_WEATHER_CITY.textContent = weatherData.cityName;
//   ELEMENTS.ELEMENT_WEATHER_DESCRIPTION.textContent = weatherData.description;
//   ELEMENTS.ELEMENT_WEATHER_TEMPERATURE.textContent = weatherData.temperature;
//
//   ELEMENTS.ELEMENT_LOADING_TEXT.style.display = 'none';
//   ELEMENTS.ELEMENT_WEATHER_BOX.style.display = 'block';
// }
