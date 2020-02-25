var url = require('url');
var request = require('request');
var express = require('express');
var ejs = require('ejs');

const MY_IP = '192.168.0.20';

var app = express();
app.listen(8080);
app.set('views', __dirname);

// https://swapi.co/api/planets/?search=Alderaan

app.get('/:search', (req, response) => {
    var search = req.params.search;
    var options = {
        protocol: 'https',
        host: 'swapi.co/api',
        pathname: '/planets',
        query: {
            search: search
        }
    };
    var searchURL = url.format(options);
    request(searchURL, (err, res, body) => {
        var planets = JSON.parse(body);
        // console.log(planets);
        response.render('google-search.ejs', {
            planets: planets.results,
            keyword: search
        });
    })
});
