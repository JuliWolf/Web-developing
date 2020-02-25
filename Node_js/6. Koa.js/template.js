var Koa = require('koa');
var Router = require('koa-router');
var app = new Koa();

var Pug = require('koa-pug');
var pug = new Pug({
    viewPath: './views',
    basedir: './views',
    app: app
});

var _ = new Router();

_.get('/hello', getMessage);
_.get('/dynamic_view', dynamicMessage);

async function getMessage(ctx, next){
    await ctx.render('first_view');
}

async function dynamicMessage(ctx, next){
    await ctx.render('dynamic', {
        name: "TutorialsPoint",
        url: "https://www.tutorialspoint.com"
    });
}

app.use(_.routes())
    .use(_.allowedMethods());
app.listen(3000);