import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Mercury from './pages/Mercury.jsx'
import Venus from './pages/Venus.jsx'
import Earth from './pages/Earth.jsx'
import Mars from './pages/Mars.jsx'
import Jupiter from './pages/Jupiter.jsx'
import Saturn from './pages/Saturn.jsx'
import Uranus from './pages/Uranus.jsx'
import Neptune from './pages/Neptune.jsx'
import Moon from './pages/Moon.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mercury" element={<Mercury />} />
        <Route path="/venus" element={<Venus />} />
        <Route path="/earth" element={<Earth />} />
        <Route path="/mars" element={<Mars />} />
        <Route path="/jupiter" element={<Jupiter />} />
        <Route path="/saturn" element={<Saturn />} />
        <Route path="/uranus" element={<Uranus />} />
        <Route path="/neptune" element={<Neptune />} />
        <Route path="/moon" element={<Moon />} />
      </Routes>
    </div>
  )
}

export default App
