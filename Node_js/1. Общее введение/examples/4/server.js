var http = require('http');


http.createServer((req, res) => {
    console.log('Server listen');
    res.writeHead(200);
    req.on('data', data => {
       console.log('Request: ', data.toString());
       res.write('Write: ' + data.toString());
    });

    req.on('end', () => {
        console.log('The end');
    });
    // res.end('The end');
}).listen(8080);
