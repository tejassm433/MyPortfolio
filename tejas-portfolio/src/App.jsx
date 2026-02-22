import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Counters from "./components/Counters"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Counters />
      <Skills />
      <Projects />
      <Contact/>
    </>
  )
}