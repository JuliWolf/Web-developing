
// Принципы модульного программирования

// 1. Инкапсулированные модули
//  - Все, что происходит с модулем является частью модуля
//  - Нет глобальных переменных
//  - Если модуль отвечает больше чем за одну операцию, то необходимо разделить его на 1
// 1. Разделение обязанностей
// 3. Сухой код "Don't Repeat Yourself"
// 4. Эффективное использование DOM
//  - Минимизировать поиск элементов(кешировать поиск элементов)
// 5. Экономия памяти
//  - Все события могут быть отменены




/*********************************************************************************************************/
//Исходный код первый вариант

// Чтобы избавиться от глобальных переменных можно использовать анонимную самовызывающуюся функцию
	// (function(){
	// 	var people =[];
	// 	var template = $("#people-template").html();

	// 	$("#peopleModule").find("button").on("click", function(){
	// 		people.push($("#peopleModule").find("input").val());
	// 		$("#peopleModule").find("input").val("");
	// 		// data for mutache template
	// 		var data ={
	// 			people: people,
	// 		};
	// 		$("#peopleModule").find("ul").html(Mustache.render(template, data));
	// 	});

	// 	$("#peopleModule").find("ul").delegate("i.del", "click", function(e){
	// 		var $remove = $(e.target).closest("li");
	// 		var i = $("#peopleModule").find("ul").find("li").index($remove);

	// 		$remove.remove();

	// 		people.splice(i, 1);
	// 	});
	// })()



// Первый вариант записи - АСФ, которая используется как локальная область видимости

	// (function(){
	// 	var people = {
	// 		people: ["Will", "John"],
	// 		init: function(){
	// 			this.cacheDom();
	// 			this.bindEvents();
	// 			this.render();
	// 		},
	// 		cacheDom: function(){
	// 			this.$el = $("#peopleModule");
	// 			this.$button = this.$el.find("button");
	// 			this.$input = this.$el.find("input");
	// 			this.$ul = this.$el.find("ul");
	// 			this.template = this.$el.find("#people-template").html();
	// 		},
	// 		bindEvents: function(){
	// 			this.$button.on("click", this.addPerson.bind(this));
	// 			this.$ul.delegate("i.del", "click", this.deletePerson.bind(this));
	// 		},
	// 		render: function(){
	// 			var data ={
	// 				people: this.people,
	// 			};
	// 			this.$ul.html(Mustache.render(this.template, data));
	// 		},
	// 		addPerson: function(value){
	// 			this.people.push(value || this.$input.val());
	// 			this.render();
	// 			this.$input.val("");
	// 		}, 
	// 		deletePerson: function(event){
	// 			var $remove = $(event.target).closest("li");
	// 			var i = this.$ul.find("li").index($remove);
	// 			this.people.splice(i, 1);
	// 			this.render();
	// 		}
	// 	};
	// 	people.init();
		
	// })()

/*********************************************************************************************************/

// Дать возможность пользоваться только теми методами, которые необходимы пользователю, заурыв доступ к остальным
// Обращение к другим модулям

	// var events = {
	// 	events: {},
	// 	on: function (eventName, fn){
	// 		this.events[eventName] = this.events[eventName] || [];
	// 		this.events[eventName].push(fn);
	// 	},
	// 	off: function(eventName, fn){
	// 		if(this.events[eventName]){
	// 			for (var i = 0; i < this.events[eventName].length;){
	// 				if(this.events[eventName][i] === fn){
	// 					this.events[eventName].splice(i, 1);
	// 					break;
	// 				}
	// 			};
	// 		}
	// 	},
	// 	emit: function (eventName, data){
	// 		if(this.events[eventName]){
	// 			this.events[eventName].forEach(function(fn){
	// 				fn(data);
	// 			});
	// 		}
	// 	}
	// };


	// var stats = (function(){
	// 	var people = 0;

	// 	// cache DOM
	// 	var $stats = $("#statsModule");
	// 	var template = $("#stats-template").html();

	// 	events.on("peopleChanged", setPeople)
	// 	render();

	// 	function render(){
	// 		$stats.html(Mustache.render(template, {people: people}));
	// 	}

	// 	function setPeople(newPeople) {
	// 		people = newPeople;
	// 		render();
	// 	}

	// 	function destroy(){
	// 		$stats.remove();
	// 		events.off("peopleChanged", setPeople);
	// 	}

	// 	return{
	// 		destroy: destroy
	// 	}

	// })();


	// var people = (function(){
	//     var people = ['Will', 'Steve'];

	//     //cache DOM
	//     var $el = $('#peopleModule');
	//     var $button = $el.find('button');
	//     var $input = $el.find('input');
	//     var $ul = $el.find('ul');
	//     var template = $el.find('#people-template').html();

	//     //bind events
	//     $button.on('click', addPerson);
	//     $ul.delegate('i.del', 'click', deletePerson);

	//     _render();

	//     function _render() {
	//     	$ul.html(Mustache.render(template, {people: people}));
	// 		events.emit("peopleChanged", people.length);
	//     }

	//     function addPerson(value) {
	//         var name = (typeof value === "string") ? value : $input.val();
	//         people.push(name);
	//         _render();
	//         $input.val('');
	//     }

	//     function deletePerson(event) {
	//     	var i;
	//     	if(typeof event === "number"){
	//     		i = "event";
	//     	}else{
	// 	        var $remove = $(event.target).closest('li');
	// 	        i = $ul.find('li').index($remove);    		
	//     	}

	//         people.splice(i, 1);
	//         _render();
	//     }

	//     return {
	//         addPerson: addPerson,
	//         deletePerson: deletePerson
	//     };

	// })();


/*********************************************************************************************************/

// classical prototypal


function inherits(ctor, superCtor) {
	ctor.super_ = superCtor;
	ctor.prototype = Object.create(superCtor.prototype, {
    	constructor: {
    		value: ctor,
    		enumerable: false,
    		writable: true,
    		configurable: true
    	}
	});
}

var Person = function(name){
	this.name = name;
};

Person.prototype.sayName = function(){
	console.log("Hi my name is " + this.name);
}
Person.prototype.shoutName = function(){
	console.log("Hi my name is " + this.name + "!");
}


var john = new Person();
var bobby = new Person();

var Musician = function(name, instrument){
	Musician.super_.call(this.name)
	this.instrument = instrument;
}

inherits(Musician, Person);

Musician.prototype.getInstrument = function(){
	console.log(this.instrument);
}

Musician.prototype.shoutName = function(){
	console.log("DUDE! my name is " + this.name + "!!!!!!!")
}
var julia = new Musician("julia", "trombone");
julia.sayName();//julia

// julia.getInstrument();//instrument // будет искать сначала у "Musician", если там нет, то пойдет искть выше
// julia.shoutName();//DUDE! my name....  


// delete Musician.prototype.shoutName 

// julia.shoutName();//Будет искать у родителей



/*********************************************************************************************************/

// classical prototypal 

// var human = {
// 	species: "human",
// 	create: function(values){
// 		var instance = Object.create(this);
// 		Object.keys(values).forEach(function(key){
// 			instance[key] = values[key];
// 		});
// 		return instance;
// 	},
// 	saySpecies: function(){
// 		console.log(this.species);
// 	},
// 	sayName: function(){
// 		console.log(this.name);
// 	}
// };

// var musician = Object.create(human);
// musician.species = "musician";
// musician.playInstrument = function(){
// 	console.log("plays " + this.instrument);
// };
// console.log(musician);


// var will = musician.create({
// 	name: "Will",
// 	instrument: "Drums"
// });
// console.log(will.playInstrument())
















