
//make connection

var socket = io.connect('http://localhost:4000');
 // query dom
var smg = document.getElementById('smg');
  handle = document.getElementById('handle'),
  btn = document.getElementById('send'),
 output = document.getElementById('output'),
 feedback = document.getElementById('feedback');
//console.log(smg);

//emit event
btn.addEventListener('click', function() {
	socket.emit('chat', {
		smg:smg.value,
		 handle:handle.value
	});
	
});

// typing event
smg.addEventListener('keypress',function(){
	socket.emit('typing', handle.value);
});
// listner
socket.on('chat', function(data){
	feedback.innerHTML= "";

		output.innerHTML += '<p><strong>'+data.handle +':</strong>' + data.smg + '</p>'; 

	
 
  //output.innerHTML = '<p>' + data.handle + '</p>';

});
 
 //echpp

 socket.on('typing', function(data){
 	feedback.innerHTML = '<p><em>' + data + 'is typing...</em></p>';

 });