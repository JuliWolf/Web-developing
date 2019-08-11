var fs = require('./get-file');
var log = require('./logs');
var http = require('http');

http.createServer((req, res) => {
    log.info('Download start');
    res.writeHead(200, {'Content-Type': 'image/gif'});
    var file = fs('logo.png');
    file.pipe(res);
    log.info('Download finished');
}).listen(8080);

