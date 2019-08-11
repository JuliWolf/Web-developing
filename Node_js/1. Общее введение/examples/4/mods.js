//Экспортируется функция
var h = require('./say-hello');

// Экспортируется объект с методом world
// var w = require('./say-world');

var mod = require('./my-module');

require('./say-hello')();

h();
// w.world();

require('./say-world').world();
mod.foo();
mod.bar();