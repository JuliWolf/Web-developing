var express = require('express');
var engine = require('ejs-locals');
var http = require('http');
var path = require('path');
var conf = require('./config');
var log = require('./ext/log');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();

// app.use((req, res) => {
//     console.log('HERE-1');
//     next();
// });
// app.use((req, res) => {
//     console.log('HERE-2');
//     next();
// });
// app.use((req, res) => {
//     console.log('HERE-3');
//     next();
// });

app.set('trust proxy', 1);
app.engine('ejs', engine);
app.set('views', path.join(__dirname, conf.get('app-view')));
app.set('view engine', conf.get('app-engine'));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(session({
    secret: conf.get('session:secret'),
    key: conf.get('session:key'),
    cookie: conf.get('session:cookie'),
}));

app.use(express.static(path.join(__dirname, conf.get('app-static'))));
require('./routes')(app);

app.use(function(req, res, next){
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

if('development' == app.get('env')){

    app.use(function(err, req, res, next){
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err,
            title: 'Ошибка'
        });
    });
    // app.use(express.errorHandler());
}else{
    app.use(function(err, req, res, next){
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {},
            title: 'Ошибка'
        });

    });
}
app.get('/testlog', (req, res) => {
    log.info('Hello from log');
    res.end('TEST LOG');
});
// app.get('/', routes.index);
// app.get('/users', user.list);

http.createServer(app).listen(conf.get('port'), () => {
    console.log('Express server listening on port ' + conf.get('port'));
});