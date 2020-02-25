var Koa = require('koa');
var Router = require('koa-router');
var cookie = require('koa-cookie');
var session = require('koa-session');

var app = new Koa();
var _ = new Router();
app.keys = ['Shh, its a secret!'];
app.use(session(app));

// _.get('/', setCookie);

// async function setCookie(ctx, next){
//     ctx.cookies.set('foo', 'bar', {httpOnly: false});
//     console.log(ctx.cookies);
// }

app.use(async (ctx, next) => {
    var n = ctx.session.views || 0;
    ctx.session.views = ++n;

    if(n === 1){
        ctx.body = 'Welcome here for the first time!';
    }else{
        ctx.body = "You've visited this page " + n + " times!";
    }
});

app.use(_.routes())
    .use(_.allowedMethods());
app.listen(3000);