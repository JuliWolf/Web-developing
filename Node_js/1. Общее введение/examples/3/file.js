var fs = require('fs');

// var file = fs.createReadStream('file.txt');
// var newFile = fs.createWriteStream('file-1.txt');

// // содержимое файла file.txt копируется в новый файл ile-1.txt
// file.pipe(newFile);

// var file = fs.createReadStream('index.html');

// file.on('data', (txt) => {
//     // console.log(txt.toString());
//     // process.stdout.write(txt.toString());
//
// });

// file.pipe(process.stdout);


var http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'image/gif'});
    var file = fs.createReadStream('logo.png');
    file.pipe(res);
}).listen(8080);

