const models = require('../models');
let validator = require('validator');

const validateCreateUserFields = function(errors, res){
    if(!validator.isEmail(res.body.email)){
        errors["email"] = "Please use a valid email.";
    }
    if(!validator.isAscii(res.body.password)){
        errors["password"] = "Invalid character in password, please try another one";
    }
    if(!validator.isLength(res.body.password, {min: 8, max: 25})){
        errors["password"] = "Please ensure that your password has a minimum 8 characters";
    }
};

exports.validateUser = function(errors, req){
    return new Promise(function(resolve, reject){
        validateCreateUserFields(errors, req);
        return models.User.findOne({
            where: {
                email: req.body.email
            }
        }).then(u => {
            if(u !== null){
                errors["email"] = "Email is already in use. Please login or reset your password";
            }
            resolve(errors);
        })
    })

}