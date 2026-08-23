import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Discipleship from './pages/Discipleship'
import Sermons from './pages/Sermons'
import Events from './pages/Events'
import Contact from './pages/Contact'
import PlanVisit from './pages/PlanVisit'
import Units from './pages/Units'

function App(){
  return (
    <BrowserRouter>
      <div className="site-root">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/discipleship" element={<Discipleship />} />
          <Route path="/sermons" element={<Sermons />} />
          <Route path="/units" element={<Units />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/plan-visit" element={<PlanVisit />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App