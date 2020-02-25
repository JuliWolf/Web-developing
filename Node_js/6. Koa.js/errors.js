var Koa = require('koa');
var app = new Koa();

app.use(async function (ctx, next){
    try {
        await next();
    }catch(err){
        this.status = err.status || 500;
        ctx.body = err.message;
        ctx.app.emit('error', err, this);
    }
});

app.use(function (ctx, next){
    ctx.throw('Error Message', 500);
});

app.listen(3000);