
const data =[
    {
        serveros: '0',
        gsver:"10.10.14.4",
        jobrunnerid: 33419
    },
    {
        serveros: '0',
        gsver:"10.10.11.16",
        jobrunnerid: 33421

    },
    {
        serveros: '0',
        gsver:"10.9.35.5",
        jobrunnerid: 32657

    },
    {
        serveros: '0',
        gsver:"10.10.12.2",
        jobrunnerid: 23918

    },
    {
        serveros: '0',
        gsver:"10.10.14.6",
        jobrunnerid: 30735

    },
    {
        serveros: '0',
        gsver:"10.9.1.5",
        jobrunnerid: 34144

    },
    {
        serveros: '0',
        gsver:"10.9.1.5",
        jobrunnerid: 34135

    },
    {
        serveros: '0',
        gsver:"10.9.1.5",
        jobrunnerid: 34133

    },
    {
        serveros: '0',
        gsver:"10.9.1.5",
        jobrunnerid: 34132

    },
    {
        serveros: '0',
        gsver:"10.9.1.5",
        jobrunnerid: 34131

    },
    {
        serveros: '0',
        gsver:"10.9.1.5",
        jobrunnerid: 34130

    }
];
const https = require('https');
const request = require('request');
const url = 'http://jobsserver.com/api/get-jobs';

for(var key in data){
    console.log(data[key]);
    request.post({
        'timeout': 120 * 60 * 1000,
        'method': 'post',
        'content-type': 'application/json',
        'json': true,
        'url': url,
        'body': data[key]
    }, function(err,httpResponse,body){
        console.log("error: "+ err);
    });
}
