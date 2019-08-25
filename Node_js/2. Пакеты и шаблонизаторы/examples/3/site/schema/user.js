var crypto = require('crypto');
var db = require('../ext/db');
var schemaUser = new db.Schema({
   name: {
       type: String,
       required: true,
       unique: true
   },
    hash: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    iteration: {
      type: Number,
      require: true
    },
    created: {
       type: Date,
        default: Date.now()
    }
});
schemaUser.methods.getHash = function(password){
    var c =  crypto.createHmac('sha1', this.salt);
    for(var i = 0; i < this.iteration; i++){
        c = c.update(password);
    }
    return c.digest('hex');
};
schemaUser.methods.checkPassword = function(data){
    return this.getHash(data) === this.hash;
};

schemaUser.virtual('password')
    .set(function(data){
        this.iteration = parseInt(Math.random()* 10+1);
        this.salt = String(Math.random());
        this.hash = this.getHash(data);
    })
    .get(function(){
        return this.hash;
    });

exports.User = db.model('User', schemaUser);


// var salt = String(Math.random());
// var pass = '1234';
// var iteration = parseInt(Math.random()* 10+1);
// var res = getHash(pass, salt, iteration);

// console.log(res);
//
// function getHash(password, salt, iteration){
//     var c =  crypto.createHmac('sha1', salt);
//     for(var i = 0; i < iteration; i++){
//         c = c.update(password);
//     }
//     return c.digest('hex');
//     // update(password).digest('hex');
// }
