const express = require('express');
const app = express();
const path = require('path');
const server = require('http') .createServer();
const io = require('socket.io')(server);
const port = process.env.PORT || 5000;

server.listen(port, () => {
    console.log('Server listening at port ', port);
})