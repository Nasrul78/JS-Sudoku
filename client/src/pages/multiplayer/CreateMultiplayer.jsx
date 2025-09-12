import { useState } from "react"
import { useOutletContext, Link } from "react-router"

const CreateMultiplayer = () => {
  const [roomId, setRoomId] = useState("")
  const { createRoom } = useOutletContext()

  const handleClick = (e) => {
    if (roomId) {
      createRoom(roomId)
    } else {
      e.preventDefault()
      alert("Room ID cannot be empty!")
    }
  }

  return (
    <div className="flex flex-col justify-center gap-4 p-4 min-w-48">
      <h2 className="text-4xl font-bold text-center">Create Multiplayer</h2>
      <input
        className="input"
        type="text"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
        placeholder="Create Room ID"
      />
      <Link
        className="text-xl bg-green-500 btn min-h-12"
        to={roomId ? `/lobby/${roomId}` : "#"}
        onClick={handleClick}
      >
        Create
      </Link>
    </div>
  )
}

export default CreateMultiplayer
