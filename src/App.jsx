
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Projects from './pages/Projects'
import Agents from './pages/Agents'
import Home from './pages/Home'
import Stairs from './components/common/Stairs'
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav'
import { openNavAnimation, closeNavAnimation } from './utils/animations'

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const openNav = () => openNavAnimation(() => setIsNavOpen(true))
  const closeNav = () => closeNavAnimation(() => setIsNavOpen(false))

  return (
    <div className='overflow-x-hidden'>
      <Stairs />
      <Navbar onOpen={openNav} />
      {isNavOpen && <FullScreenNav onClose={closeNav} onNavClose={() => setIsNavOpen(false)} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App
