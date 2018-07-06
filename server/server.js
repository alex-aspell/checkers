const express = require('express');
const app = express();
const path = require('path');
const server = require('http') .createServer();
const io = require('socket.io')(server);
const port = process.env.PORT || 5000;

app.use(express.static('dist'));

server.listen(port, () => {
    console.log('Server listening at port ', port);
})

io.on('connection', (socket) => {
    console.log('User connected', new Date().toLocaleTimeString());
    socket.on('disconnect', () => {
        console.log('User disconnected', new Date().toLocaleTimeString());
    });
    socket.on('testEvent', (payload) => {
        console.log(payload);
    });
});
