var express = require('express');
var request = require('request');
var url = require('url');
var app = express();
app.listen(8080);

app.set('views', __dirname);
app.set('view engine', 'ejs');

var names = {
    'john': 'admin',
    'mike': 'manager',
    'ivan': 'user'
};

app.get('/', (req, res) => {
    res.sendfile(__dirname+'/index.html');
});

// app.get('/user/:name', (req, res) => {
//     var role = '';
//     var name = req.params.name.toLowerCase();
//     if(name in names){
//         role = names[name];
//     }else{
//         role = 'Unknown role';
//     }
//
//     // res.write(role);
//     res.render('user',
//         {
//             name: req.params.name,
//             role: role
//         });
//     res.end();
// });

app.get('/user/:name', (req, res) => {
    var name = req.params.name;
    var options = {
      protocol: 'http',
      host: 'localhost:8082',
      pathname: '/',
      query: {
          user: name
      }
    };
    // var needUrl = 'http://localhost:8082/?name='+name;
    var needUrl = url.format(options);
    request(needUrl, (err, response, body) => {
        // console.log(body);
        var arr = JSON.parse(body)[0];
        res.render('user',
            {
                name: arr.name,
                age: arr.age,
                role: arr.admin,
            });
    });
});