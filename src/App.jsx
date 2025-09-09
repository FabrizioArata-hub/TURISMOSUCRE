import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Events from './pages/Events'
import Artisans from './pages/Artisans'
import Map from './pages/Map'
import About from './pages/About'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eventos" element={<Events />} />
          <Route path="/artesanias" element={<Artisans />} />
          <Route path="/mapa" element={<Map />} />
          <Route path="/acerca" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
