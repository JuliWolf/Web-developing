function foo(){
	console.log("Hello World");
}

// setTimeout - метод, с помощью которого можно отложить выполнение функции
//Первым параметром передается название функции, вторым время через которое будет выполнятся функция в милисекундах

// setTimeout(foo, 2000);


// setInterval - метод с помощью которого задается временной промежуток для выполнения функции
//Первым параметром передается название функции, вторым время через которое будет выполнятся функция в милисекундах

setInterval(foo, 2000);


//Значение, которое возвращается при вызове функции "setTimeout, setInterval", это идентификатор
//функция "clearInterval()" используется, чтобы отменить функции "setTimeout, setInterval"
//значение, которое передается в функцию "clearInterval()" это идентификатор "setTimeout, setInterval"
