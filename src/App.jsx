
import { useState, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import Projects from './pages/Projects'
import Agents from './pages/Agents'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Stairs from './components/common/Stairs'
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav'
import Footer from './components/Footer'

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className='overflow-x-hidden'>
      <Stairs />
      <Navbar onOpen={() => setIsNavOpen(true)} />
      <FullScreenNav isNavOpen={isNavOpen} onClose={() => setIsNavOpen(false)} onNavClose={() => setIsNavOpen(false)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
