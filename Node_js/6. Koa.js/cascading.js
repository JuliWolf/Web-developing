var Koa = require('koa');
var app = new Koa();

// app.use(function (ctx, next){
//     console.log("A new request received at " + Date.now());
// });

//Order

app.use( async (ctx, next) => {
    console.log("I'll be logged first. ");

    //Now we yield to the next middleware
    await next();

    //We'll come back here at the end after all other middlewares have ended
    console.log("I'll be logged last. ");
});

app.use(async(ctx, next) => {
    console.log("I'll be logged second. ");
    await next();
    console.log("I'll be logged fifth. ");
});

app.use(async (ctx, next) =>  {
    console.log("I'll be logged third. ");
    await next();
    console.log("I'll be logged fourth. ");
});


app.listen(3000);
