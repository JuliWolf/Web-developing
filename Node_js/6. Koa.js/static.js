var server = require('koa-static');
var Koa = require('koa');
var app = new Koa();

app.use(server('./public'));

app.listen(3000);
