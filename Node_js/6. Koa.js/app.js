var koa = require('koa');
var app = new koa();

// app.use(function* () {
//     this.body = "Hello World";
// });
//
// app.listen(3000, function(){
//     console.log('Server running on http://localhost:3000');
// });

//Generators

app.use(function* (next) {
    console.log("1");
    yield next;
});

app.use(function* (next) {
    console.log("2");
    yield next;
});

app.use(function* (next) {
    console.log("3");
    yield next;

    console.log('4');
});

app.use(function* (next) {
    console.log("5");

    this.body = "Hello Generators";

    console.log("6");
});

app.listen(3000);
//1 2 3 5 6 4