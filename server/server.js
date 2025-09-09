const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

const allowedOrigins = ['http://localhost:5173', 'http://172.27.206.42:5173'];

app.use(
  cors({
    origin: allowedOrigins,
  })
);

const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    methods: ['GET', 'POST'],
  },
});

app.get('/', (req, res) => {
  res.send('test');
});

let rooms = {};
let users = {};

io.on('connection', (socket) => {
  console.log(`User connected ${socket.id}`);

  socket.on('send-message', (msg) => {
    io.emit('receive-message', `${socket.id.substr(0, 2)}: ${msg}`);
  });

  socket.on('disconnect', () => {
    console.log(`User disconnected ${socket.id}`);
  });
});

const PORT = 3000;
server.listen(PORT, '0.0.0.0', () => {
  console.log('listening to port 3000');
});
