// var Koa = require('koa');
// var Router = require('koa-router');
// var app = new Koa();
//
// var _ = new Router();
//
// function getMessage() {
//     this.body = "Hello world!";
// }
//
// function allMessage(){
//     this.body = "All HTTP calls regardless of the verb will get this response";
// }
//
// function postMessage() {
//     this.body = "You just called the post method at '/hello'!\n";
// }
//
// _.get('/', () => this.body = "Home page");
// _.get('/hello', getMessage);
// _.post('/hello', postMessage);
// _.all('/test', allMessage);
//
// app.use(_.routes())
//     .use(_.allowedMethods());
// app.listen(3000);


//URL
// var Koa = require('koa');
// var Router = require('koa-router');
// var app = new Koa();
//
// var _ = new Router();
//
// _.get('/:id', sendID);
// // _.get('/things/:name/:id', sendIdAndName);
// _.get('/things/:id[0-9]{5}', sendValidId);
//
// function sendID(req, res) {
//     console.log(req.params.id);
// }
// // function sendIdAndName(req, res){
// //     console.log('id: '+ req.params.id + ' and name: '+ req.params.name);
// // }
// function sendValidId(req, res) {
//     console.log('id: '+ req.params.id);
// }
//
//
// app.use(_.routes())
//     .use(_.allowedMethods());
// app.listen(3000);


//Redirect
var Koa = require('koa');
var Router = require('koa-router');
var app = new Koa();

var _ = new Router();

_.get('/not_found', printErrorMessage);
_.get('/hello', printHelloMessage);

app.use(_.routes())
    .use(_.allowedMethods());
app.use(handle404Errors);

function printErrorMessage(ctx, next) {
    this.status = 404;
    ctx.body = "Sorry we do not have this response";
}

function printHelloMessage(ctx, next) {
    this.status = 200;
    ctx.body = 'Hey there!';
}

function handle404Errors(ctx, next){
    if(404 != this.status) return;
    ctx.redirect('/not_found');
}

app.listen(3000);

