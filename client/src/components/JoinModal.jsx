import { useEffect, useState, useOutletContext } from "react"

const JoinModal = ({ joinRoom, name, error }) => {
  const [errorMessage, setErrorMessage] = useState()
  const [buttonClicked, setButtonClicked] = useState(false)
  const [roomId, setRoomId] = useState("")

  const handleClick = (e) => {
    if (!roomId) {
      e.preventDefault()
      setButtonClicked(true)
    } else {
      joinRoom(roomId, name)
    }
  }

  useEffect(() => {
    if (error[0] === "join-error") {
      setErrorMessage(error[1])
    }
  }, [error])

  useEffect(() => {
    if (roomId) {
      setErrorMessage("")
      setButtonClicked(false)
    }
  }, [roomId])

  useEffect(() => {
    if (!roomId && buttonClicked) {
      setErrorMessage("Room ID cannot be empty!")
    }
  }, [buttonClicked])

  return (
    <dialog id="joinModal" className="modal">
      <div className="flex flex-col gap-4 p-4 modal-box">
        <form method="dialog">
          <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="text-lg font-bold">Enter room ID to join:</h3>

        <input
          className="input"
          type="text"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          placeholder="Enter room ID..."
        />
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

        <button
          className="text-xl bg-green-500 btn min-h-12"
          onClick={handleClick}
        >
          Join
        </button>
      </div>
    </dialog>
  )
}

export default JoinModal
