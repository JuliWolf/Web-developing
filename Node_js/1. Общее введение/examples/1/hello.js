var http = require('http');
var fs = require('fs');

function foo(req, res){
    res.writeHead(200,
        {'Content-type': 'text/html; charset=utf-8'});
    res.write('Hello, World!');
    setTimeout(function(){
        res.write('Hello, is done!');
        res.end('The end');
    }, 5000);
    fs.readFile('index.html', (error, content) => {
        res.write(decodeURIComponent(content))
    });
}

var app = http.createServer(foo);
app.listen(8080);
console.log('Listening on  8080...');
