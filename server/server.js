const express = require("express")
const http = require("http")
const { Server } = require("socket.io")
const cors = require("cors")

const app = express()
const server = http.createServer(app)

app.use(
  cors({
    origin: "*",
  })
)

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
})

app.get("/", (req, res) => {
  res.send("Server is running!")
})

let rooms = {}

io.on("connection", (socket) => {
  // Connected
  console.log(`User connected ${socket.id}`)

  // Create room
  socket.on("create-room", ({ roomId, name }) => {
    if (rooms[roomId]) {
      socket.emit("create-error", `Room ${roomId} already exists`)
    } else {
      const player = { id: socket.id, name, role: "operator" }
      rooms[roomId] = [player]

      socket.join(roomId)
      socket.roomId = roomId
      socket.emit("room-created", player)

      console.log("Room created:", rooms)
    }
  })

  // Join Room
  socket.on("join-room", ({ roomId, name }) => {
    if (!rooms[roomId]) {
      socket.emit("join-error", `Room not found: ${roomId}`)
    } else if (rooms[roomId].some((p) => p.id === socket.id)) {
      socket.emit("room-joined", roomId)
    } else {
      const player = { id: socket.id, name, role: "member" }
      rooms[roomId].push(player)

      socket.join(roomId)
      socket.roomId = roomId
      socket.emit("room-joined", roomId)
      io.to(roomId).emit("player-joined", player)

      console.log(rooms)
    }
  })

  // Message
  socket.on("send-message", ({ msg, name }) => {
    io.to(socket.roomId).emit("receive-message", `${name}: ${msg}`)
  })

  // Disconnected
  socket.on("disconnect", () => {
    console.log(`User disconnected ${socket.id}`)
  })
})

const PORT = 3000
server.listen(PORT, "0.0.0.0", () => {
  console.log("listening to port 3000")
})
