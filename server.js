'use strict';

var express = require('express');
var app = express();
var http = require("http");
var net = require("net");
var ip = require("ipware")().get_ip;

app.use(function (req, res) {

   var ipInfo = ip(req);
var IP = ipInfo['clientIp'];
var lan = req.acceptsLanguages(lang);
var lang = lan[0];
var head = req.headers;
var software = head['user-agent']

var onlyWin = software.match(/.*?\((.*?)\).*/)[1];
        res.send({"ipaddress": IP, "language": lang, "software": onlyWin});
    });
    


app.listen(process.env.PORT || 3000, function () {
    console.log('Listening on port ' + process.env.PORT + '...');
});