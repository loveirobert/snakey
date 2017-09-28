var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

const state = [];

io.on('connection', function (socket) {
    console.log('somebody connected')
    socket.emit('pop', {hello: 'world'});

    socket.on('entered', function (m) {
        console.log(m);
        io.emit("entered", m);

    });

    socket.on('state_update', function (m) {
        console.log(m);
        io.emit('state_update', m);
    });
});

server.listen(3001);