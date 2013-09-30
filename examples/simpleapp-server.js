
var angularserver = require('../lib/main.js');
var path = require('path');
var fs = require('fs');

var templateFile = path.join(__dirname, 'simpleapp.html');

var template = fs.readFileSync(templateFile, {encoding:'utf8'});

var server = angularserver.createServer(
    template,
    [
        path.join(__dirname, 'angular.js'),
        path.join(__dirname, 'angular-route.js'),
        path.join(__dirname, 'simpleapp.js')
    ],
    [
        'simpleapp'
    ]
);

server.listen(9008);
