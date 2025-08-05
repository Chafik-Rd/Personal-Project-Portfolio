import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"

export const Layout = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-mutedBlue-300 to-mutedBlue-200">
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
