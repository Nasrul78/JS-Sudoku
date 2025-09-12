import { Link } from "react-router"

const Navbar = ({ userName = "user" }) => {
  return (
    <div className="shadow-sm navbar bg-base-300">
      <div className="navbar-start">
        <h3 className="text-xl font-semibold">Hello, {userName}!</h3>
      </div>
      <div className="space-x-2 navbar-center">
        <Link className="text-4xl font-bold" to="/">
          Sudoku Game
        </Link>
      </div>
      <div className="navbar-end">
        <Link to="settings">
          <svg
            className="w-[44px] h-[44px] text-gray-800 dark:text-white"
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
              strokeWidth="1.5"
              d="M21 13v-2a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L14 4.757V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L4.929 6.343a1 1 0 0 0 0 1.414l.536.536L4.757 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535 1.707.707V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H20a1 1 0 0 0 1-1Z"
            />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
