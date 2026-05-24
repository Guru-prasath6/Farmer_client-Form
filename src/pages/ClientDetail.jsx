import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useClients } from '../context/ClientContext'
import './ClientDetail.css'

function ClientDetail() {
  const { id } = useParams()
  const { clients, loading } = useClients()
  const client = clients.find((item) => String(item.id) === String(id))

  if (loading) {
    return <div className="loading">Loading Client Details...</div>
  }

  if (!client) {
    return <div className="not-found">Client not found</div>
  }

  return (
    <main className="client-detail">
      <div className="back-link">
        <Link to="/clients">← Back to Clients</Link>
      </div>

      <div className="detail-header">
        <div className="client-avatar">{client.name.charAt(0)}</div>
        <div className="client-info">
          <h1>{client.name}</h1>
          <span className={`status-badge ${client.status.toLowerCase()}`}>{client.status}</span>
        </div>
        <div className="header-actions">
          <Link to={`/edit-client/${client.id}`} className="btn-edit">✏️ Edit</Link>
          <button className="btn-call">☎️ Call</button>
        </div>
      </div>

      <div className="details-grid">
        <div className="detail-section">
          <h2>Contact Information</h2>
          <div className="detail-item">
            <span className="label">Phone:</span>
            <span className="value">{client.phone}</span>
          </div>
          <div className="detail-item">
            <span className="label">Email:</span>
            <span className="value">{client.email}</span>
          </div>
          <div className="detail-item">
            <span className="label">Location:</span>
            <span className="value">{client.location}</span>
          </div>
        </div>

        <div className="detail-section">
          <h2>Statistics</h2>
          <div className="detail-item">
            <span className="label">Member Since:</span>
            <span className="value">{client.joinDate}</span>
          </div>
          <div className="detail-item">
            <span className="label">Total Orders:</span>
            <span className="value">{client.totalOrders}</span>
          </div>
          <div className="detail-item">
            <span className="label">Total Spent:</span>
            <span className="value highlight">₹{client.totalSpent.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className="actions-section">
        <h2>Quick Actions</h2>
        <div className="actions-buttons">
          <button className="action-btn">📧 Send Email</button>
          <button className="action-btn">💬 Send SMS</button>
          <button className="action-btn">📦 View Orders</button>
          <button className="action-btn">💳 View Invoices</button>
        </div>
      </div>

      <div className="orders-section">
        <h2>Recent Orders</h2>
        <div className="orders-table">
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#ORD001</td>
                <td>2024-01-15</td>
                <td>₹5,000</td>
                <td><span className="status-badge active">Delivered</span></td>
              </tr>
              <tr>
                <td>#ORD002</td>
                <td>2024-01-10</td>
                <td>₹3,500</td>
                <td><span className="status-badge active">Delivered</span></td>
              </tr>
              <tr>
                <td>#ORD003</td>
                <td>2024-01-05</td>
                <td>₹4,200</td>
                <td><span className="status-badge active">Delivered</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}

export default ClientDetail
