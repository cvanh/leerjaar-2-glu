const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = 8070;

app.use(express.static('public'));


io.on('connection', (socket) => {
  socket.on('control', msg => {
    io.emit('control', msg);
  });
});

http.listen(port, () => {
  console.log(`server draait op port: ${port}`);
});