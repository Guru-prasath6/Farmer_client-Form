import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './CropDetail.css'

function CropDetail() {
  const { id } = useParams()
  const { addToCart } = useCart()

  const cropsData = {
    1: {
      id: 1,
      name: 'Wheat',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
      price: '₹500/kg',
      unitPrice: 500,
      status: 'Ready',
      quantity: 1200,
      season: 'Winter',
      yield: '45 tons/acre',
      health: 'Excellent',
      description: 'High-quality wheat variety with excellent protein content.',
      plantedDate: '2025-10-15',
      expectedHarvest: '2026-03-20',
      location: 'Punjab',
      pestControl: 'Organic methods used',
      soilQuality: 'Rich in nitrogen and potassium',
      waterUsage: '450mm annually'
    },
    2: {
      id: 2,
      name: 'Rice',
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=400&fit=crop',
      price: '₹450/kg',
      unitPrice: 450,
      status: 'Growing',
      quantity: 800,
      season: 'Monsoon',
      yield: '38 tons/acre',
      health: 'Good',
      description: 'Premium long-grain rice variety perfect for commercial use.',
      plantedDate: '2025-06-01',
      expectedHarvest: '2025-11-15',
      location: 'Haryana',
      pestControl: 'Integrated pest management',
      soilQuality: 'Well-drained loamy soil',
      waterUsage: '1000mm during season'
    },
    3: {
      id: 3,
      name: 'Corn',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop',
      price: '₹350/kg',
      unitPrice: 350,
      status: 'Ready',
      quantity: 1500,
      season: 'Summer',
      yield: '52 tons/acre',
      health: 'Excellent',
      description: 'High-yielding corn variety resistant to common pests.',
      plantedDate: '2025-04-10',
      expectedHarvest: '2025-09-25',
      location: 'Madhya Pradesh',
      pestControl: 'Chemical-free',
      soilQuality: 'Fertile with good drainage',
      waterUsage: '600mm during season'
    },
    4: {
      id: 4,
      name: 'Soybean',
      image: 'https://images.unsplash.com/photo-1625246333333-1e43a80fdf36?w=600&h=400&fit=crop',
      price: '₹600/kg',
      unitPrice: 600,
      status: 'Growing',
      quantity: 600,
      season: 'Summer',
      yield: '35 tons/acre',
      health: 'Good',
      description: 'Protein-rich soybean variety with high market demand.',
      plantedDate: '2025-05-20',
      expectedHarvest: '2025-10-30',
      location: 'Gujarat',
      pestControl: 'Organic farming',
      soilQuality: 'Well-structured soil',
      waterUsage: '500mm during season'
    },
    5: {
      id: 5,
      name: 'Sugarcane',
      image: 'https://images.unsplash.com/photo-1590080876383-5a1d12c59b1e?w=600&h=400&fit=crop',
      price: '₹250/kg',
      unitPrice: 250,
      status: 'Growing',
      quantity: 2000,
      season: 'Year-round',
      yield: '65 tons/acre',
      health: 'Excellent',
      description: 'Sweet variety sugarcane for premium sugar production.',
      plantedDate: '2025-01-05',
      expectedHarvest: '2026-06-15',
      location: 'Karnataka',
      pestControl: 'Integrated management',
      soilQuality: 'Deep, fertile soil',
      waterUsage: '1200mm annually'
    },
    6: {
      id: 6,
      name: 'Cotton',
      image: 'https://images.unsplash.com/photo-1592921870789-4c1017266635?w=600&h=400&fit=crop',
      price: '₹700/kg',
      unitPrice: 700,
      status: 'Harvesting',
      quantity: 400,
      season: 'Winter',
      yield: '25 tons/acre',
      health: 'Good',
      description: 'High-grade cotton fiber for textile industry.',
      plantedDate: '2025-06-15',
      expectedHarvest: '2025-12-20',
      location: 'Maharashtra',
      pestControl: 'Bt cotton technology',
      soilQuality: 'Well-drained black soil',
      waterUsage: '800mm during season'
    }
  }

  const crop = cropsData[id]

  if (!crop) {
    return <div className="not-found">Crop not found</div>
  }

  return (
    <main className="crop-detail">
      <Link to="/crops" className="back-link">← Back to Crops</Link>

      <div className="detail-header">
        <div className="crop-image-large">
          <img src={crop.image} alt={crop.name} />
          <span className={`status-badge ${crop.status.toLowerCase()}`}>{crop.status}</span>
        </div>
        <div className="crop-header-info">
          <h1>{crop.name}</h1>
          <p className="description">{crop.description}</p>
          <div className="price-section">
            <span className="price">{crop.price}</span>
            <span className="health-indicator">{crop.health}</span>
          </div>
        </div>
      </div>

      <div className="details-grid">
        <div className="detail-card">
          <h3>📊 Production Info</h3>
          <div className="info-item">
            <span className="label">Quantity:</span>
            <span className="value">{crop.quantity} kg</span>
          </div>
          <div className="info-item">
            <span className="label">Expected Yield:</span>
            <span className="value">{crop.yield}</span>
          </div>
          <div className="info-item">
            <span className="label">Season:</span>
            <span className="value">{crop.season}</span>
          </div>
        </div>

        <div className="detail-card">
          <h3>📅 Timeline</h3>
          <div className="info-item">
            <span className="label">Planted:</span>
            <span className="value">{crop.plantedDate}</span>
          </div>
          <div className="info-item">
            <span className="label">Expected Harvest:</span>
            <span className="value">{crop.expectedHarvest}</span>
          </div>
          <div className="info-item">
            <span className="label">Location:</span>
            <span className="value">{crop.location}</span>
          </div>
        </div>

        <div className="detail-card">
          <h3>🌍 Soil & Water</h3>
          <div className="info-item">
            <span className="label">Soil Quality:</span>
            <span className="value">{crop.soilQuality}</span>
          </div>
          <div className="info-item">
            <span className="label">Water Usage:</span>
            <span className="value">{crop.waterUsage}</span>
          </div>
        </div>

        <div className="detail-card">
          <h3>🛡️ Pest Management</h3>
          <div className="info-item">
            <span className="label">Method:</span>
            <span className="value">{crop.pestControl}</span>
          </div>
        </div>
      </div>

      <div className="actions-section">
        <button className="action-btn" onClick={() => addToCart(crop)}>💰 Add to Cart</button>
        <button className="action-btn">📧 Contact Farmer</button>
        <button className="action-btn">📈 Market Price</button>
      </div>
    </main>
  )
}

export default CropDetail
