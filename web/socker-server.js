var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

const state = [];

io.on('connection', function(){ 
  console.log('somebody connected')
  io.emit('pop', { hello: 'world' });
 });

 io.on('event', function(m){ 
  console.log(m);
 }); 
server.listen(3001);