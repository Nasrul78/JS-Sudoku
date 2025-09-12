import { useState } from "react"

const Chat = ({ messages, handleClick }) => {
  const [msg, setMsg] = useState("")

  return (
    <div className="flex justify-center p-2 bg-base-200 rounded-3xl">
      <div className="flex flex-col p-4 border-4 w-72 h-96 bg-base-100 rounded-2xl border-base-300">
        <h3 className="text-2xl font-semibold">Chat Room</h3>
        <ul className="flex-1 p-2 overflow-y-auto border-4 border-base-200 rounded-xl">
          {messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
        <div className="flex mt-2">
          <input
            className="input"
            type="text"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder="Enter text..."
          />
          <button
            className="cursor-pointer"
            onClick={() => handleClick(msg, setMsg)}
          >
            <svg
              className="w-[36px] h-[36px] text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M4.248 19C3.22 15.77 5.275 8.232 12.466 8.232V6.079a1.025 1.025 0 0 1 1.644-.862l5.479 4.307a1.108 1.108 0 0 1 0 1.723l-5.48 4.307a1.026 1.026 0 0 1-1.643-.861v-2.154C5.275 13.616 4.248 19 4.248 19Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
export default Chat
