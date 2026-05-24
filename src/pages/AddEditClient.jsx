import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useClients } from '../context/ClientContext'
import './AddEditClient.css'

function AddEditClient() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { clients, loading: clientsLoading, error: clientError, backendAvailable, addClient, updateClient } = useClients()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    status: 'Active',
    notes: ''
  })
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [saveError, setSaveError] = useState(null)

  useEffect(() => {
    if (id && !clientsLoading) {
      const existingClient = clients.find((client) => String(client.id) === String(id))
      if (existingClient) {
        setFormData({
          name: existingClient.name,
          phone: existingClient.phone,
          email: existingClient.email,
          location: existingClient.location,
          status: existingClient.status,
          notes: existingClient.notes || ''
        })
      }
    }
  }, [id, clients, clientsLoading])

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    if (!/^[6-9]\d{9}$/.test(formData.phone)) newErrors.phone = 'Invalid phone number'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email'
    if (!formData.location.trim()) newErrors.location = 'Location is required'
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validateForm()

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setLoading(true)
    setSaveError(null)

    try {
      if (id) {
        await updateClient(id, formData)
        alert('Client updated successfully!')
      } else {
        await addClient(formData)
        alert('Client added successfully!')
      }
      navigate('/clients')
    } catch (err) {
      console.error('Save error:', err)
      setSaveError(err?.message || 'Save failed. Please check the backend connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="add-edit-client">
      {(clientError || saveError) && (
        <div className="form-alert error-alert">
          {saveError || clientError}
        </div>
      )}
      {!backendAvailable && (
        <div className="form-alert warning-alert">
          Backend is not available. Changes will be stored locally until the connection is restored.
        </div>
      )}
      <div className="back-link">
        <Link to="/clients">← Back to Clients</Link>
      </div>

      <div className="form-container">
        <h1>{id ? 'Edit Client' : 'Add New Client'}</h1>
        
        <form onSubmit={handleSubmit} className="client-form">
          <div className="form-section">
            <h2>Basic Information</h2>
            
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter client's full name"
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="9876543210"
                  className={errors.phone ? 'error' : ''}
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="client@example.com"
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="location">Location *</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter city/region"
                  className={errors.location ? 'error' : ''}
                />
                {errors.location && <span className="error-message">{errors.location}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="status">Status</label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2>Additional Information</h2>
            
            <div className="form-group">
              <label htmlFor="notes">Notes</label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Add any notes or special instructions..."
                rows="4"
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={() => navigate('/clients')}>
              Cancel
            </button>
            <button type="submit" className="btn-submit" disabled={loading}>
              {loading ? 'Saving...' : id ? 'Update Client' : 'Add Client'}
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default AddEditClient
