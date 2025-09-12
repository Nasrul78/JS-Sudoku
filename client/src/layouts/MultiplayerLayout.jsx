import { Outlet, useLocation, useNavigate } from "react-router"
import { useLayoutEffect, useState } from "react"
import { io } from "socket.io-client"
import Navbar from "../components/Navbar.jsx"
import Chat from "../components/Chat.jsx"

let socket

const MultiplayerLayout = () => {
  const [messages, setMessages] = useState([])
  const [name, setName] = useState("guest")
  const [error, setError] = useState(["", ""])
  const navigate = useNavigate()
  const location = useLocation()

  useLayoutEffect(() => {
    // socket = io.connect('http://172.27.206.42:3000');
    socket = io.connect("192.168.1.4:3000")

    socket.on("create-error", (msg) => {
      setError(["create-room", msg])
      console.log(`Failed to join: ${msg}`)
    })

    socket.on("room-joined", (msg) => {
      console.log(`Successfully joined room: ${msg}`)
      navigate(`/lobby/${msg}`)
    })

    socket.on("join-error", (msg) => {
      setError(["join-error", msg])
      console.log(`Failed to join: ${msg}`)
    })

    socket.on("player-joined", (msg) => {
      console.log(`New player joined: ${msg}`)
    })

    socket.on("receive-message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg])
    })
  }, [])

  const handleClick = (msg, setMsg) => {
    socket.emit("send-message", { msg, name })
    setMsg("")
  }

  const createRoom = (roomId) => socket.emit("create-room", { roomId, name })

  const joinRoom = (roomId) => socket.emit("join-room", { roomId, name })

  return (
    <div className="flex flex-col justify-center min-h-screen">
      <Navbar />
      <main className="flex flex-col justify-center flex-1 align-middle">
        <div className="flex justify-center gap-4">
          <Outlet context={{ createRoom, joinRoom, name, setName, error }} />
          {(location.pathname.includes("/lobby/") &&
            !location.pathname.includes("/lobby/create")) ||
          location.pathname.includes("/game/") ? (
            <Chat messages={messages} handleClick={handleClick} />
          ) : null}
        </div>
      </main>
    </div>
  )
}

export default MultiplayerLayout
