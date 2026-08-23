import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiMenu as Menu, FiX as X } from 'react-icons/fi'

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

  return (
    <header className="site-header">
      <div className="container nav-row">
        <Link to="/" className="brand">The Covenant Nation <span className="branch">Jesutedo</span></Link>

        <nav className={`nav ${open ? 'open' : ''}`} aria-label="Main navigation">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/plan-visit" className="btn primary" onClick={() => setOpen(false)}>Plan Your Visit</Link>
        </nav>

        <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}
