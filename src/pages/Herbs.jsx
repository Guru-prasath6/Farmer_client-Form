import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Herbs.css'

function Herbs() {
  const [herbs, setHerbs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching herb data with real-time updates
    setTimeout(() => {
      setHerbs([
        {
          id: 1,
          name: 'Basil',
          image: 'https://images.unsplash.com/photo-1599599810604-40df08bc9770?w=400&h=300&fit=crop',
          price: '₹200/kg',
          status: 'Fresh',
          quantity: 50,
          type: 'Culinary',
          benefits: 'Anti-inflammatory',
          freshness: 'Premium',
          harvest: 'Daily'
        },
        {
          id: 2,
          name: 'Mint',
          image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd64b48?w=400&h=300&fit=crop',
          price: '₹150/kg',
          status: 'Fresh',
          quantity: 80,
          type: 'Medicinal',
          benefits: 'Digestive aid',
          freshness: 'Premium',
          harvest: 'Bi-daily'
        },
        {
          id: 3,
          name: 'Turmeric',
          image: 'https://images.unsplash.com/photo-1596040707882-a1d4e01c4629?w=400&h=300&fit=crop',
          price: '₹300/kg',
          status: 'Processing',
          quantity: 120,
          type: 'Medicinal',
          benefits: 'Anti-cancer properties',
          freshness: 'Organic',
          harvest: 'Seasonal'
        },
        {
          id: 4,
          name: 'Ginger',
          image: 'https://images.unsplash.com/photo-1596040707882-a1d4e01c4629?w=400&h=300&fit=crop',
          price: '₹250/kg',
          status: 'Fresh',
          quantity: 100,
          type: 'Culinary',
          benefits: 'Immune booster',
          freshness: 'Premium',
          harvest: 'Seasonal'
        },
        {
          id: 5,
          name: 'Cilantro',
          image: 'https://images.unsplash.com/photo-1546617622-6e0a4ec3f5f2?w=400&h=300&fit=crop',
          price: '₹180/kg',
          status: 'Fresh',
          quantity: 60,
          type: 'Culinary',
          benefits: 'Heavy metal detox',
          freshness: 'Premium',
          harvest: 'Continuous'
        },
        {
          id: 6,
          name: 'Oregano',
          image: 'https://images.unsplash.com/photo-1534694328720-28e90a3e3fef?w=400&h=300&fit=crop',
          price: '₹350/kg',
          status: 'Dried',
          quantity: 40,
          type: 'Culinary',
          benefits: 'Antioxidant rich',
          freshness: 'Organic Dried',
          harvest: 'Seasonal'
        },
        {
          id: 7,
          name: 'Ashwagandha',
          image: 'https://images.unsplash.com/photo-1588080876496-8d51f45625d1?w=400&h=300&fit=crop',
          price: '₹400/kg',
          status: 'Processing',
          quantity: 70,
          type: 'Ayurvedic',
          benefits: 'Stress relief',
          freshness: 'Organic',
          harvest: 'Seasonal'
        },
        {
          id: 8,
          name: 'Thyme',
          image: 'https://images.unsplash.com/photo-1534694328720-28e90a3e3fef?w=400&h=300&fit=crop',
          price: '₹320/kg',
          status: 'Dried',
          quantity: 35,
          type: 'Culinary',
          benefits: 'Cough relief',
          freshness: 'Organic Dried',
          harvest: 'Seasonal'
        }
      ])
      setLoading(false)
    }, 500)
  }, [])

  if (loading) {
    return <div className="loading">Loading Herbs...</div>
  }

  return (
    <main className="herbs-page">
      <div className="page-header">
        <h1>🌿 Herbs & Medicinal Plants</h1>
        <p className="subtitle">Premium herbs for culinary and medicinal use</p>
      </div>

      <div className="stats-bar">
        <div className="stat">
          <span className="stat-label">Total Herbs</span>
          <span className="stat-value">{herbs.length}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Fresh Stock</span>
          <span className="stat-value">{herbs.filter(h => h.status === 'Fresh').length}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Processing</span>
          <span className="stat-value">{herbs.filter(h => h.status === 'Processing').length}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Total Quantity</span>
          <span className="stat-value">{herbs.reduce((sum, h) => sum + h.quantity, 0)} kg</span>
        </div>
      </div>

      <div className="herbs-grid">
        {herbs.map(herb => (
          <Link to={`/herbs/${herb.id}`} key={herb.id} className="herb-card">
            <div className="herb-image">
              <img src={herb.image} alt={herb.name} />
              <span className={`status-badge ${herb.status.toLowerCase()}`}>
                {herb.status}
              </span>
            </div>
            <div className="herb-info">
              <h3>{herb.name}</h3>
              <p className="price">{herb.price}</p>
              <div className="herb-details">
                <div className="detail">
                  <span className="label">Type:</span>
                  <span className="value">{herb.type}</span>
                </div>
                <div className="detail">
                  <span className="label">Qty:</span>
                  <span className="value">{herb.quantity} kg</span>
                </div>
              </div>
              <div className="herb-benefits">
                <span className="benefit-badge">{herb.benefits}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}

export default Herbs
