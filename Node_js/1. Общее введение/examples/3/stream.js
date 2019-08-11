var http = require('http').createServer().listen(8080);

http.on('request', (req, res) => {
   res.writeHead(200);
   res.write('Start');
   setTimeout(function() {
       res.write('Finish');

       res.end();
   }, 3000);
    // получить данные и вывести
   req.pipe(res);

   // получить данные, обработать и вывести
   // req.on('data', msg => {
   //     // console.log(msg.toString());
   //     process.stdout.write(msg.toString());
   // });
   // req.on('end', () => {
   //     res.end();
   // })
});

