var http = require('http');

var server = http.createServer().listen(8080);

server.on('request', (req, res) => {
    if(req.url == '/stop'){
        req.connection.destroy();
        server.close();
    }else{
        res.writeHead(200);
        res.write('Hello from Node.js');
        res.end();
    }
});

server.on('request', (req, res) => {
    var x = require('url').parse(req.url, true); // параметр true делает из get запроса объект
    console.log(x);
    console.log('Request:', req.method, req.url);// узнать что запрашивал
    console.log('Status', res.statusCode);
});

server.on('connection', (req, res) => {
    console.log('...');
});

server.on('close', (req, res) => {
    console.log('The end');
});
server.on('listening', function(){
    console.log('Listen port 8080...');
});