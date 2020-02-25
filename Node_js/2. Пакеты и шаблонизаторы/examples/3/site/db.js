// const insertDocuments = function(db, callback) {
//     // Get the documents collection
//     const collection = db.collection('documents');
//     // Insert some documents
//     collection.insertMany([
//         {a : 1}, {a : 2}, {a : 3}
//     ], function(err, result) {
//         assert.equal(err, null);
//         assert.equal(3, result.result.n);
//         assert.equal(3, result.ops.length);
//         console.log("Inserted 3 documents into the collection");
//         callback(result);
//     });
// }
//
// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
//
// // Connection URL
// const url = 'mongodb://localhost:27017';
//
// // Database Name
// const dbName = 'myproject';
//
// // Use connect method to connect to the server
// MongoClient.connect(url, function(err, client) {
//     assert.equal(null, err);
//     console.log("Connected successfully to server");
//
//     const db = client.db(dbName);
//
//     insertDocuments(db, function() {
//         client.close();
//     });
// });



// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
//
// mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
//
// var shemaCat = new Schema({
//     name: String,
//     age: Number
// });
// shemaCat.methods.say = function(){
//   console.log('Hello from '+ this.get('name'))
// };
//
// var Cat = mongoose.model('Cat', shemaCat);
// // var kitty = new Cat({name: 'Zildjan'});
// // kitty.save(function(err){
// //     if(err) console.log('meow');
// // });
// var murzik = new Cat({name: 'Murzik', age: 5});
// murzik.save(function(err){
//     if(err) console.log('murzik: meow')
// });
//
// var barsik = new Cat({name: 'Barsik', age: 3});
// barsik.save(function(err){
//     if(err) console.log('barsik: meow')
// });
//
// var tuzik = new Cat({name: 'Tuzik', age: 2});
// tuzik.save(function(err){
//     if(err)
//         console.log('tuzik: meow');
//     else
//         tuzik.say();
// });


var User = require('./schema/user').User;
var admin = new User({
    name: 'root',
    password: 'pass@word1'
});

admin.save((err) => {
    if(err) console.dir(err);
});