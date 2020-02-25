// var events = require('events');
// var EventEmitter = events.EventEmitter;
//
// var test = new EventEmitter();
// test.on('myEvent', onMyEvent);
//
// function onMyEvent(param){
//     // console.log(param);
//
//     // console.log(param.name);
//     // console.log(param.age);
//
//     console.log(arguments[0], arguments[1])
// }
//
// // test.emit('myEvent', 'Test number one');
// // test.emit('myEvent', 'Test number one');
//
// // test.emit('myEvent', {name: 'John', age: '25'});
//
// test.emit('myEvent', 'one', 'two');

var event = require('Node_js/1. Общее введение/examples/2/events').EventEmitter;

var logger = new event();
var users = [],
    msgs = [];

logger.on('login', (name) => {
    console.log('New user:', name);
    users.push(name);
});

logger.on('message', (msg) => {
    console.log('New message:', msg);
    msgs.push(msg);
});

logger.on('getUsers', () => {
    console.log('-----------\nUsers:\n-------');
    console.log(users.join('\n'));
});

logger.on('getMsgs', () => {
    console.log('-----------\nMessages:\n-------');
    console.log(msgs.join('\n'));
});

logger.emit('login', 'John');
logger.emit('message', 'Hello from John');

logger.emit('login', 'Mike');
logger.emit('message', 'Hello from Mike');

logger.emit('getUsers');
logger.emit('getMsgs');