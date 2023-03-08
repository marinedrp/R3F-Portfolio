import About from "./1-About/About"
import Projects from "./2-Projects/Projects"
import Skills from "./3-Skills/Skills"
import Contact from "./4-Contact/Contact"


function Overlay() {
  return (
    <div className='main-div'>
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default Overlay