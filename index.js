'use strict';

const connect  = require('connect');
const serve = require('serve-static');


const browserify = require('browserify');
const tsify = require('tsify');
const fs = require('fs');

const b = browserify({
    cache: {},
    packageCache: {},
    plugin: 'watchify',
    entries: ['frontend/index.ts']
})
    .plugin(tsify, { noImplicitAny: true })
    .on('error', function (error) { console.error(error.toString()); })
    .on('update', bundle);

bundle();

function bundle() {
    b.bundle().pipe(fs.createWriteStream('public/bundle.js'));
    console.log('bundle updated');
}

const server = connect();

server.use(serve(__dirname + '/public'));

server.listen(9000);

const livereload = require('livereload');
const reload = livereload.createServer();
reload.watch(__dirname + "/public");

console.log("running on http://localhost:9000");
