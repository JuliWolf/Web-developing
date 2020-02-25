var Koa = require('koa');
var app = new Koa();

var path = require('path');
var staticCache = require('koa-static-cache');

app.use(staticCache(path.join(__dirname, 'public'), {
    maxAge: 365 * 24 * 60 * 60
}));
app.listen(3000);