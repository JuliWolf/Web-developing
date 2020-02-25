var http = require('http');

var makeRequest = function(message){
    console.log('Request start');

    var options = {
        host: 'localhost',
        port: '8080',
        path: '/',
        method: 'POST'
    };

    var request = http.request(options, res => {
        console.log('Response start');
        res.on('data', data => {
            console.log(data.toString());
        });
    });

    request.write(message);
    request.end();
};

// makeRequest('Hello world!');

module.exports = makeRequest;
