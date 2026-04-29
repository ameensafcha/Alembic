
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Projects from './pages/Projects'
import Agents from './pages/Agents'
import Home from './pages/Home'
import Stairs from './components/common/Stairs'
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav'
const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <div className='overflow-x-hidden'>
      <Stairs />
      <Navbar onOpen={() => setIsNavOpen(true)} />
      <FullScreenNav isNavOpen={isNavOpen} onClose={() => setIsNavOpen(false)} onNavClose={() => setIsNavOpen(false)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App
