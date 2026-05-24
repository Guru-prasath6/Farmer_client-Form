import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'

function Dashboard() {
  const [stats, setStats] = useState({
    totalClients: 0,
    activeClients: 0,
    totalOrders: 0,
    revenue: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching dashboard stats from API
    setTimeout(() => {
      setStats({
        totalClients: 24,
        activeClients: 18,
        totalOrders: 156,
        revenue: 45000
      })
      setLoading(false)
    }, 500)
  }, [])

  if (loading) {
    return <div className="loading">Loading Dashboard...</div>
  }

  return (
    <main className="dashboard">
      <h1>Dashboard</h1>
      <p className="subtitle">Farmer Client Management System Overview</p>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <div className="stat-content">
            <h3>Total Clients</h3>
            <p className="stat-value">{stats.totalClients}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div className="stat-content">
            <h3>Active Clients</h3>
            <p className="stat-value">{stats.activeClients}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📦</div>
          <div className="stat-content">
            <h3>Total Orders</h3>
            <p className="stat-value">{stats.totalOrders}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">💰</div>
          <div className="stat-content">
            <h3>Total Revenue</h3>
            <p className="stat-value">₹{stats.revenue.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <div className="dashboard-section">
        <h2>Quick Menu</h2>
        <div className="menu-grid">
          <Link to="/clients" className="menu-card">
            <span className="menu-icon">👥</span>
            <div>
              <h3>Client Book</h3>
              <p>View and manage farmer clients.</p>
            </div>
          </Link>
          <Link to="/crops" className="menu-card">
            <span className="menu-icon">🌾</span>
            <div>
              <h3>Crops</h3>
              <p>Browse crop stock and add items to cart.</p>
            </div>
          </Link>
          <Link to="/cart" className="menu-card">
            <span className="menu-icon">🛒</span>
            <div>
              <h3>Cart</h3>
              <p>Review your selected crop orders.</p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Dashboard
