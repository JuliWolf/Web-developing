var fs = require('fs');
var http = require('http').createServer().listen(8080);

http.on('request', (req, res) => {
    res.writeHead(200);
    // var newFile = fs.createWriteStream('file-2.txt');
    // var newFile = fs.createWriteStream('file-3.txt');
    var newFile = fs.createWriteStream('file-4.txt');

    //file-2
    // req.pipe(newFile);

    req.on('data', (data) => {
        // file-3
        // data = 'NEW: ' + data;
        // newFile.write(data);

        // file-4
        var buffer = newFile.write(data);
        if(!buffer) {
            console.log('Pause');
            req.pause();
        }
    });
    // file-4
    newFile.on('drain', () => {
        req.resume();
    });

    req.on('end', () => {
        res.end('Uploaded!');
    });
});

