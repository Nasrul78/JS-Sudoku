import { useEffect, useState } from "react"
import { Link, useOutletContext } from "react-router"
import NameModal from "../../components/NameModal"
import JoinModal from "../../components/JoinModal"

const Lobby = () => {
  const { joinRoom, name, setName, error } = useOutletContext()

  useEffect(() => {
    if (!localStorage.getItem("name")) {
      document.getElementById("nameModal").showModal()
    } else {
      setName(localStorage.getItem("name"))
    }
  }, [])

  return (
    <div className="flex flex-col justify-center gap-4 p-4 min-w-48">
      <h2 className="font-semibold text-center text-8xl">Lobby</h2>
      <div className="flex flex-col gap-2">
        <Link
          className="min-w-full mx-auto text-4xl bg-green-500 btn rounded-xl min-h-18"
          to="/lobby/create"
        >
          Create Lobby
        </Link>
        <button
          className="min-w-full mx-auto text-4xl bg-blue-500 btn rounded-xl min-h-18"
          onClick={() => document.getElementById("joinModal").showModal()}
        >
          Join Lobby
        </button>
      </div>

      <NameModal setName={setName} />
      <JoinModal joinRoom={joinRoom} name={name} error={error} />
    </div>
  )
}

export default Lobby
