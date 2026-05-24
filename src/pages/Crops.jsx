import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './Crops.css'

function Crops() {
  const { addToCart } = useCart()
  const [crops, setCrops] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching crop data with real-time updates
    setTimeout(() => {
      setCrops([
        {
          id: 1,
          name: 'Wheat',
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
          price: '₹500/kg',
          unitPrice: 500,
          status: 'Ready',
          quantity: 1200,
          season: 'Winter',
          yield: '45 tons/acre',
          health: 'Excellent'
        },
        {
          id: 2,
          name: 'Rice',
          image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop',
          price: '₹450/kg',
          unitPrice: 450,
          status: 'Growing',
          quantity: 800,
          season: 'Monsoon',
          yield: '38 tons/acre',
          health: 'Good'
        },
        {
          id: 3,
          name: 'Corn',
          image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop',
          price: '₹350/kg',
          unitPrice: 350,
          status: 'Ready',
          quantity: 1500,
          season: 'Summer',
          yield: '52 tons/acre',
          health: 'Excellent'
        },
        {
          id: 4,
          name: 'Soybean',
          image: 'https://images.unsplash.com/photo-1625246333333-1e43a80fdf36?w=400&h=300&fit=crop',
          price: '₹600/kg',
          unitPrice: 600,
          status: 'Growing',
          quantity: 600,
          season: 'Summer',
          yield: '35 tons/acre',
          health: 'Good'
        },
        {
          id: 5,
          name: 'Sugarcane',
          image: 'https://images.unsplash.com/photo-1590080876383-5a1d12c59b1e?w=400&h=300&fit=crop',
          price: '₹250/kg',
          unitPrice: 250,
          status: 'Growing',
          quantity: 2000,
          season: 'Year-round',
          yield: '65 tons/acre',
          health: 'Excellent'
        },
        {
          id: 6,
          name: 'Cotton',
          image: 'https://images.unsplash.com/photo-1592921870789-4c1017266635?w=400&h=300&fit=crop',
          price: '₹700/kg',
          unitPrice: 700,
          status: 'Harvesting',
          quantity: 400,
          season: 'Winter',
          yield: '25 tons/acre',
          health: 'Good'
        }
      ])
      setLoading(false)
    }, 500)
  }, [])

  if (loading) {
    return <div className="loading">Loading Crops...</div>
  }

  return (
    <main className="crops-page">
      <div className="page-header">
        <h1>🌾 Crops Inventory</h1>
        <p className="subtitle">Real-time crop management and pricing</p>
      </div>

      <div className="stats-bar">
        <div className="stat">
          <span className="stat-label">Total Crops</span>
          <span className="stat-value">{crops.length}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Ready to Harvest</span>
          <span className="stat-value">{crops.filter(c => c.status === 'Ready').length}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Growing</span>
          <span className="stat-value">{crops.filter(c => c.status === 'Growing').length}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Total Quantity</span>
          <span className="stat-value">{crops.reduce((sum, c) => sum + c.quantity, 0)}</span>
        </div>
      </div>

      <div className="crops-grid">
        {crops.map(crop => (
          <div className="crop-card" key={crop.id}>
            <Link to={`/crops/${crop.id}`} className="crop-link">
              <div className="crop-image">
                <img src={crop.image} alt={crop.name} />
                <span className={`status-badge ${crop.status.toLowerCase()}`}>
                  {crop.status}
                </span>
              </div>
              <div className="crop-info">
                <h3>{crop.name}</h3>
                <p className="price">{crop.price}</p>
                <div className="crop-details">
                  <div className="detail">
                    <span className="label">Qty:</span>
                    <span className="value">{crop.quantity} kg</span>
                  </div>
                  <div className="detail">
                    <span className="label">Health:</span>
                    <span className="health-badge">{crop.health}</span>
                  </div>
                </div>
                <div className="crop-season">
                  <span className="season-badge">{crop.season}</span>
                </div>
              </div>
            </Link>
            <button
              className="add-cart-btn"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addToCart(crop)
              }}
            >
              + Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Crops
