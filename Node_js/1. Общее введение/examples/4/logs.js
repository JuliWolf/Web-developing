var warn = function(msg){
    console.lo('Warning: ', msg);
};

var info = function(msg){
    console.log('Info: ', msg);
};

var error = function(msg){
    console.log('Error: ', msg);
};

exports.warn = warn;
exports.info = info;
exports.error = error;