const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
    }
});

app.use(cors());

app.get('/', (req, res) => {
    res.send('Server running!');
});

io.on('connection', (socket) => {
    console.log('User connected: ', socket.id);
    socket.on('disconnect', (socket) => {
        console.log('User disconnected: ', socket.id);
    });
    // socket logic heree
});

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
