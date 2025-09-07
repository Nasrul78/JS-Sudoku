const io = require('socket.io')(3000, {
  cors: { origin: '*' },
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
