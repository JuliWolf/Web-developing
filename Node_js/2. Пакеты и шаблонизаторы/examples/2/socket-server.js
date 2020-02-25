
var socket = require('socket.io');
var express = require('express');

var app = express();
var io = socket.listen(app.listen(8080));


app.set('views', __dirname);
app.set('view engine', 'pug');

app.use(express.static(__dirname + '/folder'));


app.get('/', (req, res) => {
    // res.send('Hello socket!');
    // res.sendfile(__dirname+'/index.html');
    res.render('page');
});

io.sockets.on('connection', (client) => {
    // console.log('Connected');

    client.on('message', (data) => {
        // console.log(da ta);
        // folder.emit('hello', {hello: 'Привет '+data});

        //Отправляем сообщение всем, кроме этого пользователя
        // folder.broadcast.emit('hello', {hello: 'Привет от '+ data})

        // io.sockets.emit('hello', {hello: 'Привет всем'});

        client.set('nickname', data);
        client.emit('hello', {hello: 'Привет '+data});
        client.broadcast.emit('hello', {hello: 'Привет от '+ data})
    });

    client.on('disconnect', () => {
        io.sockets.emit('hello', {hello: 'один из нас свалил'});
    });

    client.on('new_message', (data) => {
        client.emit('hello', {hello: 'Привет '+data});
        // folder.get('nickname', (err, oldName) => {
        //     folder.broadcast.emit('hello', {hello: oldName + ' теперь зовут '+ data})
        // });
        // folder.set('nickname', data);

    });
});
