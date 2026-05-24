import React from 'react'
import { useParams, Link } from 'react-router-dom'
import './HerbDetail.css'

function HerbDetail() {
  const { id } = useParams()

  const herbsData = {
    1: {
      id: 1,
      name: 'Basil',
      image: 'https://images.unsplash.com/photo-1599599810604-40df08bc9770?w=600&h=400&fit=crop',
      price: '₹200/kg',
      status: 'Fresh',
      quantity: 50,
      type: 'Culinary',
      benefits: 'Anti-inflammatory',
      freshness: 'Premium',
      harvest: 'Daily',
      description: 'Sweet basil with aromatic leaves, perfect for cooking and teas.',
      uses: ['Culinary seasoning', 'Tea infusions', 'Aromatherapy'],
      nutrients: ['Vitamin K', 'Manganese', 'Iron', 'Calcium'],
      storageLife: '7-10 days (fresh)',
      origin: 'Kerala, India',
      certification: 'Organic certified'
    },
    2: {
      id: 2,
      name: 'Mint',
      image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd64b48?w=600&h=400&fit=crop',
      price: '₹150/kg',
      status: 'Fresh',
      quantity: 80,
      type: 'Medicinal',
      benefits: 'Digestive aid',
      freshness: 'Premium',
      harvest: 'Bi-daily',
      description: 'Fresh spearmint leaves with strong cooling effect and digestive properties.',
      uses: ['Tea and beverages', 'Digestive aid', 'Culinary use'],
      nutrients: ['Menthol', 'Vitamin A', 'Antioxidants'],
      storageLife: '10-14 days (fresh)',
      origin: 'Himachal Pradesh, India',
      certification: 'Organic certified'
    },
    3: {
      id: 3,
      name: 'Turmeric',
      image: 'https://images.unsplash.com/photo-1596040707882-a1d4e01c4629?w=600&h=400&fit=crop',
      price: '₹300/kg',
      status: 'Processing',
      quantity: 120,
      type: 'Medicinal',
      benefits: 'Anti-cancer properties',
      freshness: 'Organic',
      harvest: 'Seasonal',
      description: 'Golden turmeric root with powerful curcumin content for health benefits.',
      uses: ['Medicinal powder', 'Curry spice', 'Anti-inflammatory', 'Beauty masks'],
      nutrients: ['Curcumin', 'Potassium', 'Manganese', 'Iron'],
      storageLife: '6-12 months (dried)',
      origin: 'Telangana, India',
      certification: 'Organic certified'
    },
    4: {
      id: 4,
      name: 'Ginger',
      image: 'https://images.unsplash.com/photo-1596040707882-a1d4e01c4629?w=600&h=400&fit=crop',
      price: '₹250/kg',
      status: 'Fresh',
      quantity: 100,
      type: 'Culinary',
      benefits: 'Immune booster',
      freshness: 'Premium',
      harvest: 'Seasonal',
      description: 'Fresh ginger root with warming properties and immune-boosting benefits.',
      uses: ['Culinary ingredient', 'Herbal tea', 'Digestive aid', 'Cold remedy'],
      nutrients: ['Gingerol', 'Vitamin C', 'Magnesium', 'Potassium'],
      storageLife: '3-4 weeks (refrigerated)',
      origin: 'Assam, India',
      certification: 'Organic certified'
    },
    5: {
      id: 5,
      name: 'Cilantro',
      image: 'https://images.unsplash.com/photo-1546617622-6e0a4ec3f5f2?w=600&h=400&fit=crop',
      price: '₹180/kg',
      status: 'Fresh',
      quantity: 60,
      type: 'Culinary',
      benefits: 'Heavy metal detox',
      freshness: 'Premium',
      harvest: 'Continuous',
      description: 'Fresh coriander leaves used for detoxification and culinary purposes.',
      uses: ['Culinary garnish', 'Detox agent', 'Curry ingredient', 'Salads'],
      nutrients: ['Vitamin K', 'Vitamin A', 'Antioxidants', 'Minerals'],
      storageLife: '5-7 days (refrigerated)',
      origin: 'Punjab, India',
      certification: 'Organic certified'
    },
    6: {
      id: 6,
      name: 'Oregano',
      image: 'https://images.unsplash.com/photo-1534694328720-28e90a3e3fef?w=600&h=400&fit=crop',
      price: '₹350/kg',
      status: 'Dried',
      quantity: 40,
      type: 'Culinary',
      benefits: 'Antioxidant rich',
      freshness: 'Organic Dried',
      harvest: 'Seasonal',
      description: 'Premium dried oregano with strong antioxidant properties.',
      uses: ['Italian cooking', 'Pizza seasoning', 'Tea', 'Medicinal'],
      nutrients: ['Carvacrol', 'Thymol', 'Antioxidants', 'Vitamin K'],
      storageLife: '1-3 years (dried)',
      origin: 'Himachal Pradesh, India',
      certification: 'Organic certified'
    },
    7: {
      id: 7,
      name: 'Ashwagandha',
      image: 'https://images.unsplash.com/photo-1588080876496-8d51f45625d1?w=600&h=400&fit=crop',
      price: '₹400/kg',
      status: 'Processing',
      quantity: 70,
      type: 'Ayurvedic',
      benefits: 'Stress relief',
      freshness: 'Organic',
      harvest: 'Seasonal',
      description: 'Ancient Ayurvedic herb for stress management and vitality.',
      uses: ['Stress reduction', 'Energy boost', 'Sleep aid', 'Immunity'],
      nutrients: ['Withanolides', 'Alkaloids', 'Minerals'],
      storageLife: '2-3 years (dried)',
      origin: 'Rajasthan, India',
      certification: 'Organic Ayurvedic certified'
    },
    8: {
      id: 8,
      name: 'Thyme',
      image: 'https://images.unsplash.com/photo-1534694328720-28e90a3e3fef?w=600&h=400&fit=crop',
      price: '₹320/kg',
      status: 'Dried',
      quantity: 35,
      type: 'Culinary',
      benefits: 'Cough relief',
      freshness: 'Organic Dried',
      harvest: 'Seasonal',
      description: 'Organic dried thyme with respiratory support benefits.',
      uses: ['Cough remedy', 'Culinary herb', 'Tea infusion', 'Respiratory aid'],
      nutrients: ['Thymol', 'Carvacrol', 'Vitamin C'],
      storageLife: '1-2 years (dried)',
      origin: 'Himachal Pradesh, India',
      certification: 'Organic certified'
    }
  }

  const herb = herbsData[id]

  if (!herb) {
    return <div className="not-found">Herb not found</div>
  }

  return (
    <main className="herb-detail">
      <Link to="/herbs" className="back-link">← Back to Herbs</Link>

      <div className="detail-header">
        <div className="herb-image-large">
          <img src={herb.image} alt={herb.name} />
          <span className={`status-badge ${herb.status.toLowerCase()}`}>{herb.status}</span>
        </div>
        <div className="herb-header-info">
          <h1>{herb.name}</h1>
          <p className="description">{herb.description}</p>
          <div className="price-section">
            <span className="price">{herb.price}</span>
            <span className="benefit-indicator">{herb.benefits}</span>
          </div>
        </div>
      </div>

      <div className="details-grid">
        <div className="detail-card">
          <h3>📊 Availability</h3>
          <div className="info-item">
            <span className="label">Quantity:</span>
            <span className="value">{herb.quantity} kg</span>
          </div>
          <div className="info-item">
            <span className="label">Type:</span>
            <span className="value">{herb.type}</span>
          </div>
          <div className="info-item">
            <span className="label">Harvest:</span>
            <span className="value">{herb.harvest}</span>
          </div>
        </div>

        <div className="detail-card">
          <h3>🌾 Origin & Quality</h3>
          <div className="info-item">
            <span className="label">Origin:</span>
            <span className="value">{herb.origin}</span>
          </div>
          <div className="info-item">
            <span className="label">Freshness:</span>
            <span className="value">{herb.freshness}</span>
          </div>
          <div className="info-item">
            <span className="label">Certification:</span>
            <span className="value">{herb.certification}</span>
          </div>
        </div>

        <div className="detail-card">
          <h3>📦 Storage</h3>
          <div className="info-item">
            <span className="label">Storage Life:</span>
            <span className="value">{herb.storageLife}</span>
          </div>
        </div>

        <div className="detail-card">
          <h3>🥗 Uses</h3>
          <ul className="uses-list">
            {herb.uses.map((use, idx) => (
              <li key={idx}>{use}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="nutrients-section">
        <h3>🧬 Key Nutrients</h3>
        <div className="nutrients-grid">
          {herb.nutrients.map((nutrient, idx) => (
            <span key={idx} className="nutrient-badge">{nutrient}</span>
          ))}
        </div>
      </div>

      <div className="actions-section">
        <button className="action-btn">🛒 Add to Cart</button>
        <button className="action-btn">📊 View Analytics</button>
        <button className="action-btn">📧 Contact Supplier</button>
        <button className="action-btn">💬 Customer Reviews</button>
      </div>
    </main>
  )
}

export default HerbDetail
