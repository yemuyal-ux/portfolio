import Hero from './sections/Hero'
import About from './sections/About'
import Contact from './sections/Contact'
import Projects from './sections/Projects'
import Education from './sections/Education'
import Skill from './sections/Skill'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ParticleSymbols from './components/ParticleSymbols'
import MainMain from './sections/MainMain'
import { SquiggleSeparator, ZigzagSeparator, WavySeparator } from './components/SectionSeparator'
import './App.css'
import './components/SectionSeparator.css'

function App() {

  return (
    <>
      <ParticleSymbols />
      <MainMain/>
      {/* <Navbar/> */}
      <Hero/>
      <SquiggleSeparator />
      <About/>
      <ZigzagSeparator />
      <Skill/>
      <WavySeparator />
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
