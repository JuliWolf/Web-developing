var winston = require('winston');
var logger = winston.createLogger({
    transports: [
        new (winston.transports.Console)({
            colorize: 'true',
            label: 'LABEL'
        }),
        new (winston.transports.File)({
            filename: __dirname+'/app.log'
        })
    ]
});


module.exports = logger;