const express = require('express');
const http = require('http');
const socketIO = require('socket.io-client');
const path = require('path');
const net = require('net');
var app = express();




app.get("/", (req, res) => {
	res.send("Hello");
});


app.listen(4000, () => {
	console.log('SERVER UP');

	let io = socketIO("http://localhost:3000");
	io.on('connect', function () {
		console.log("Connection established");
		io.emit('changeName', "Mohan");
	});


});