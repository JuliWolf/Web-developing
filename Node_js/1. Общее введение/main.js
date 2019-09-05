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

// require('fs'); // подключение модуля
// fs.readFileSync('file.txt') //Синхронно прочитать файл

// *** node read_file.js

// *** node hello.js // создание своего сервера


//*******************-События-***********************

// var server = http.createServer();
// server.on('request', function(req, res){});
// server.on('close', function(){});

// *** node events.js
// *** node events-1.js


// EventEmitter
// const eventEmitter = require('events').EventEmitter()
// eventEmitter.on('start', () => {
//     console.log('started')
// })
// eventEmitter.emit('start')//'start'


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


//*******************-Build an HTTP server-***********************

// const http = require('http');
// const port = 3000;
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World\n');
// });
//
// server.listen(port, () => {
//     console.log('Server running at http://${hostname}:${port}/');
// });


//*******************-Making HTTP request-***********************

//GET request
// const https = require('https');
// const options = {
//     hostname: 'flaviocopes.com',
//     port: 443,
//     path: '/todos',
//     method: 'GET'
// };
//
// const req = https.request(options, (res) => {
//     console.log('statusCode: ${res.statusCode}');
//
//     res.on('data', (d) => {
//         process.stdout.write(d);
//     });
// });
// req.on('error', (error) => {
//     console.error(error);
// });


//POST request
// const https = require('https');
// const data = JSON.stringify({
//     todo: 'Buy the milk'
// });
//
// const options = {
//     hostname: 'flaviocopes.com',
//     port: 443,
//     path: '/todos',
//     mathod: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Content-Length': data.length
//     }
// };
//
// const req = https.request(options, (res) => {
//     console.log('statusCode: ${res.statusCode}');
//
//     res.on('data', d => {
//         process.stdout.write(d);
//     });
// });
// req.on('error', error => {
//     console.error(error);
// });
// req.write(data);
// req.end();


//AXIOS request
// const axios = require('axios');
// const getBreeds = async () => {
//     try{
//         return await axios.get('https://dog.ceo/api/breeds/list/all');
//     }catch(error){
//         console.error(error);
//     }
// };
//
// const countBreeds = async () => {
//     const breeds = await getBreeds()
//
//     if(breeds.data.message){
//         console.log('Got ${Object.entries(breeds.data.message).length} breeds');
//     }
// };
//
// countBreeds()