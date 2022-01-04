const express = require('express');
//var http = require('http');
const path = require('path');

const app = express();
const static = require('serve-static');

app.set('port', process.env.Port || 8080);

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
    console.log("get /")
});

app.use('/public', static(path.join(__dirname, '/public')))

app.listen(app.get('port'), function(){
    console.log('Server is running...');

    
})
/*
var http = require('http')
var fs = require('fs');

var server = http.createServer(onRequest);

function send404Message(response) {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.write("404 Error...");
    response.end();
}

function onRequest(request, response) {
    if (request.method == 'GET') {
        response.writeHead(200, { "Content-Type": "text/html" });
        var url = request.url
        if (request.url == '/') {
            url = '/index.html';
        }
        fs.readFile(__dirname + url, 'UTF-8', function (err, data) {
            response.write(data);
            response.end()
        });

        //fs.createReadStream("./index.html").pipe(response);
    } else {
        //send404Message(response);
    }
}

server.listen(8080, function () {
    console.log('Server is running...');
});*/