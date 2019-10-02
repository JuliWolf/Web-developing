var credentials = {name: 'Julia', pass: '123'};

var Koa = require('koa');
var Router = require('koa-router');
var auth = require('koa-basic-auth');
var app = new Koa();

var _ = new Router();

app.use(async function(ctx, next){
    try{
        await next();
    }catch(err){
        if(401 == err.status){
            ctx.status = 401;
            ctx.set('WWW-Authenticate', 'Basic');
            ctx.body = 'You have o access here';
        }else{
            throw err;
        }
    }
});

_.get('/protected', auth(credentials), async function(ctx, next){
    ctx.body = 'You have access to the protected area';
    await next();
});

_.get('/unprotected', async function(ctx, next){
    ctx.body = 'Anyone can access this area';
    await next();
});

app.use(_.routes())
    .use(_.allowedMethods());
app.listen(3000);