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

_.get('/files', renderForm);
_.post('/upload', handleForm);

async function renderForm(ctx, next){
    await ctx.render('file_upload');
}

async function handleForm(ctx, next){
    console.log("Files: ", ctx.request.files);
    console.log("Fields: ", ctx.request.fields);
    ctx.body = "Receive your data!";
}

app.use(_.routes())
    .use(_.allowedMethods());
app.listen(3000);