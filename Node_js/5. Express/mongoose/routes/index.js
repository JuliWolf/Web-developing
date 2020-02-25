var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('localhost/test');
var Schema = mongoose.Schema;

var userDataSchema = new Schema({
  title: String,
  content: String,
  author: String
},
    {
      collection: 'user-data'
    });

var UserData = mongoose.model('UserData', userDataSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/get-data', function(req, res, next){
  UserData.find()
      .then(function(docs){
        res.render('index', {items: docs});
      });
});
router.post('/insert', function(req, res, next){
  var item = {
    title: req.body.title,
    content: req.body.content,
    author: req.body.author
  };
  var data = new UserData(item);
  data.save();
  res.redirect('/');
});
router.post('/update', function(req, res, next){
  var id = req.body.id;
  UserData.findById(id, function(err, docs){
    if(err)console.error('Error, no entry found');
    docs.title = res.body.title;
    docs.content = res.body.content;
    docs.author = res.body.author;
    docs.save();
  })
});
router.post('/delete', function(req, res, next){
  var id = req.body.id;
  UserData.findById(id).remove().exec();
});

module.exports = router;
