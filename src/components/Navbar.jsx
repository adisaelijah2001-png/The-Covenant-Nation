import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FiMenu as Menu, FiX as X } from 'react-icons/fi'

const logo = new URL('../assets/Church Logo.png', import.meta.url).href

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/units', label: 'Church Units' },
  { to: '/services', label: 'Services' },
  { to: '/discipleship', label: 'Discipleship' },
  { to: '/sermons', label: 'Sermons' },
  { to: '/events', label: 'Events' },
  { to: '/contact', label: 'Contact' }
]

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const aboutActive = ['/about','/services','/discipleship'].includes(location.pathname)

  return (
    <header className="site-header">
      <div className="container nav-row">
        <Link to="/" className="brand" onClick={() => setOpen(false)} aria-label="Go to home page">
          <img src={logo} alt="Church Logo" className="brand-logo" />
        </Link>

        <nav className={`nav ${open ? 'open' : ''}`} aria-label="Main navigation">
          <NavLink to="/" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>

          <div className={`dropdown ${aboutActive ? 'active' : ''}`}> 
            <div className="dropdown-toggle" onClick={() => setOpen(!open)}>
              <NavLink to="/about" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink>
              <span className="caret">▾</span>
            </div>
            <div className="dropdown-menu">
              <NavLink to="/services" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Services</NavLink>
              <NavLink to="/discipleship" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Discipleship</NavLink>
            </div>
          </div>

          <NavLink to="/sermons" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Sermons</NavLink>
          <NavLink to="/units" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Church Unit</NavLink>
          <NavLink to="/events" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Events</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink>
        </nav>

        <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}
