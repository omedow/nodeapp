//console.log('hello app');
var express = require('express');
var socket = require('socket.io');
//app setup
var app=express();
var server= app.listen(4000, function() {
	console.log("listen to requestn port 4000");
});

// serving static files
app.use(express.static('public'));

//socket set up
var io = socket(server);

//listen to event
io.on('connection', function(socket){
	console.log("made socket connection", socket.id);

	 socket.on('chat', function(data){
		io.sockets.emit('chat', data);
		//console.log(data);

	});
//tying
socket.on('typing', function(data){
	socket.broadcast.emit('typing', data);
	//console.log(data);


});
});