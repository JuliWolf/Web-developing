// 1. Node js это платформа для создания легко маштабируемых сетевых приложений.
// 1. Движок Chrome v8
// 3. Движок + библиотеки(модули)

// node - чтобы зайти в node в консоли

// var obj = {a: 'b', b: 'c'};
// Object.prototype.c = 'd';
// obj;
// Object.keys(obj); // получить все ключи объекта

// typeof [] //object
// Array.isArray(25) // false
// Array.isArray([]) // true

// *** node console_example.js

// equire('fs'); // подключение модуля
// fs.readFileSync('file.txt') //Синхронно прочитать файл

// *** node read_file.js

// *** node hello.js // создание своего сервера


//*******************-События-***********************

// var server = http.createServer();
// server.on('request', function(req, res){});
// server.on('close', function(){});

// *** node events.js
// *** node events-1.js



//*******************-NextTick-***********************

// we instruct the engine to invoke this function at the end of the current operation
// process.nectTick()

//Execute some piece of code as soon as possible
// setImmediate()


//*******************-Потоки-***********************

// *** node stream.js
// *** node file.js
// *** node upload.js


//*******************-Модули-***********************

// require('http'); //http.js

// *** node say-hello.js
// *** node say-world.js
// *** node mods.js

// *** node my-module.js

// *** node course.js
// *** node test-1.js

// *** node server.js
// *** node make-request.js
// *** node folder.js

// *** node lab-4.js
// *** node get-file.js


//*******************-Express-***********************

// *** node server.js
// *** node app.js
