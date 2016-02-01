'use strict';

const connect  = require('connect');
const serve = require('serve-static');

const server = connect();

server.use(serve(__dirname + '/public'));

server.listen(9000);

const livereload = require('livereload');
server = livereload.createServer();
server.watch(__dirname + "/public");

console.log("running on http://localhost:9000");
