import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './Navbar.css'

function Navbar() {
  const { cartCount } = useCart()

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          🌾 Farmer Client Manager
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/clients" className="navbar-link">Clients</Link>
          </li>
          <li className="navbar-item">
            <Link to="/crops" className="navbar-link">Crops</Link>
          </li>
          <li className="navbar-item">
            <Link to="/cart" className="navbar-link">Cart {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}</Link>
          </li>
          <li className="navbar-item">
            <Link to="/add-client" className="navbar-link add-btn">+ Add Client</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
