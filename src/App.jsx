import { AboutMe } from "./components/AboutMe"
import { Contact } from "./components/Contact"
import { Experience } from "./components/Experience"
import { LandingPage } from "./components/LandingPage"
import { Navbar } from "./components/Navbar"
import { Project } from "./components/Projects"
import { Skills } from "./components/Skills"


function App() {


  return (
    <div className="min-h-screen bg-linear-to-br from-mutedBlue-300 to-mutedBlue-200">
      <Navbar/>
      <LandingPage/>
      <AboutMe/>
      <Project/>
      <Skills/>
      <Experience/>
      <Contact/>
    </div>
  )
}

export default App
