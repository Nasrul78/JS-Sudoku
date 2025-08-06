const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

app.use(cors());

const server = http.createServer(app);
const corsOptions = {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
};

const io = new Server(server, {
    cors: corsOptions
});

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send('Server running!');
});

io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on('chat', (message) => {
        let data = {
            sender: socket.id,
            message: message,
            time: new Date().toLocaleTimeString(),
        };
        io.emit('chat', data);
    });
});

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
