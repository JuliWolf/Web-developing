var fs = require('fs');
// var content = fs.readFileSync('file.txt');
fs.readFile('file.txt', (err, content) => {
    console.log(decodeURIComponent(content));
});

console.log('The end');