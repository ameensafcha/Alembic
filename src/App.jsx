
import { Route, Routes } from 'react-router-dom'
import Projects from './pages/Projects'
import Agents from './pages/Agents'
import Home from './pages/Home'
import Stairs from './components/common/Stairs' // FIX: Sahi component import kar
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav'

const App = () => {
  return (
   <div className='overflow-x-hidden'>
      {/* FIX: Stairs ko App level par mount kar */}
      <Stairs />  
      <Navbar/>

      <FullScreenNav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App