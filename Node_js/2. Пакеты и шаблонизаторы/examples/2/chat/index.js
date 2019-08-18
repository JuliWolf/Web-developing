var express = require('express');
var app = express();
var port = 8080;

app.set('views', __dirname+'/tpl');
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.render('page');
});

var io = require('socket.io').listen(app.listen(port));

var users = {};
function getUsers(obj){
    var tmp = [];
    for(var i in obj){
        tmp.push(obj[i]);
    }
    return tmp.join(', ');
}

io.sockets.on('connection', (client) => {
    // console.log('HERE');
    // client.emit('message', {message: "Добро пожаловать в чат!"});

    client.on('send', (data) => {
        io.sockets.emit('message', {message: data.message});
    });
    client.on('set nickname', (data) => {
        client.nickname = data.name;

        client.emit('message', {'message': '--- Добро пожаловать в чат '+data.name+'! ---'});
        client.broadcast.emit('message', {'message': '--- '+data.name+' присоединился к чату ---'});

        if(Object.keys(users).length > 0){
            var userList = getUsers(users);
            client.emit('message', {'message': '--- Уже в чате: '+ userList+' ---'});
        }else{
            client.emit('message', {'message': '--- Кроме вас в чате никого нет ---'});
        }

        users[client.id] = data.name;
    });

    client.on('disconnect', (data) => {
        if(Object.keys(users).length > 1){
            client.broadcast.emit('message', {'message': '--- '+client.nickname + ' покинул чат ---'});

        }
        delete users[client.id];
    });
});


