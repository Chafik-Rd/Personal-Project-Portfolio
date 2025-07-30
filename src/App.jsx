import { AboutMe } from "./components/AboutMe"
import { Home } from "./components/Home"
import { Navbar } from "./components/Navbar"
import { Project } from "./components/Projects"
import { Skills } from "./components/Skills"

function App() {

  return (
    <div className="min-h-screen bg-linear-to-br from-mutedBlue-300 to-mutedBlue-200">
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Skills/>
      <Project/>
    </div>
  )
}

export default App
