import { Outlet } from "react-router"
import Navbar from "../components/Navbar.jsx"

const AppLayout = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <Navbar />
      <main className="flex justify-center flex-1">
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout
