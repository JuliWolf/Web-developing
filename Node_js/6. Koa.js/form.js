var Koa = require('koa');
var Router = require('koa-router');
var bodyParser = require('koa-body');
var app = new Koa();

var Pug = require('koa-pug');
var pug = new Pug({
    viewPath: './views',
    basedir: './views',
    app: app
});

var _ = new Router();

app.use(bodyParser({
    formidable: {uploadDir: './uploads'},
    multipart: true,
    urlencoded: true
}));

_.get('/', renderForm);
_.post('/', handleForm);

async function renderForm(ctx, next){
    await ctx.render('form');
}

async function handleForm(ctx, next){
    console.log(ctx.request.body);
    console.log(ctx.req.body);
    ctx.body = ctx.request.body;
}

app.use(_.routes())
    .use(_.allowedMethods());
app.listen(3000);