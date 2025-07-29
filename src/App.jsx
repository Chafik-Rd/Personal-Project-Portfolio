import { Home } from "./components/Home"
import { Navbar } from "./components/Navbar"

function App() {

  return (
    <div className="min-h-screen flex flex-col bg-linear-to-br from-mutedBlue-300 to-mutedBlue-200">
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App
