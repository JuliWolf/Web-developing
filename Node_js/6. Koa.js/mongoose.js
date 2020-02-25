var Koa = require('koa');
var Router = require('koa-router');
var app = new Koa();
var Pug = require('koa-pug');
var bodyParser = require('koa-bodyparser');
var mongo = require('mongoose');
var pug = new Pug({
    viewPath: './views',
    basedir: './views',
    app: app
});
var _ = new Router();
mongo.connect('mongodb://localhost/test', { useNewUrlParser: true , useUnifiedTopology: true});

var personSchema = mongo.Schema({
    name: String,
    age: Number,
    nationality: String
});

var Person = mongo.model("Person", personSchema);
app.use(bodyParser({
    onerror: function (err, ctx) {
        ctx.throw('body parse error', 422);
    }
}));

_.get('/mongo', getPerson);
_.post('/mongodb', createPerson);

async function getPerson(ctx, next){
    try{
        await ctx.render('mongo');
        await next();
    }catch(err){
        ctx.status(err.response.status);
        return ctx.send(err.message);
    }

}

async function createPerson(ctx, next){
    try{
        let personInfo = ctx.request.body;
        console.log(ctx.request)
        if(!personInfo.name || !personInfo.age || !personInfo.nationality){
            ctx.render('show_message', {message: "Sorry you provided wrong info", type: 'error'});
        }else{
            var newPerson = new Person({
                name: personInfo.name,
                age: personInfo.age,
                nationality: personInfo.nationality
            });
            newPerson.save(function(err, res){
                if(err){
                    ctx.render('show_message', {message: 'Database error', type: 'error'});
                }else{
                    ctx.render('show_message', {message: "New person added", type: 'success', person: personInfo});
                }
            });
        }
    }catch(err){
        ctx.status(err.response.status);
        return ctx.send(err.message);
    }

}

app.use(_.routes())
    .use(_.allowedMethods());
app.listen(3000);