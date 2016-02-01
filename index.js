'use strict';

var connect  = require('connect');
var serve = require('serve-static');

var server = connect();

server.use(serve(__dirname + '/public'));

server.listen(9000);

var livereload = require('livereload');
server = livereload.createServer();
server.watch(__dirname + "/public");

console.log("running on http://localhost:9000");
