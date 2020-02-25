// MODULES
var http = require('http'); //core module node.js
//We can create our modules
var module1 = require('./module1');

//We can export all at once
var module2 = require('./module2');
function onRequest(req, res){
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.write(module1.myString);
    module2.myFunction();
    res.end();
}
http.createServer(onRequest).listen(8080);


