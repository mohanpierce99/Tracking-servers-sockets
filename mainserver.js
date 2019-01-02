const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

let sockets = [];

io.on('connection', function (socket) {
	console.log("Socket entered");

	socket.on('changeName', function (data) {
		socket.name = data;
		console.log(socket.name + " has changed");
	});

	socket.on('disconnect', function () {
		console.log(socket.name + " has disconnected");
	});

});

server.listen(3000, () => {
	console.log('SERVER UP ON PORT 3000')
});