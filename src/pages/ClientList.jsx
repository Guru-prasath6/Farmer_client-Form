import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useClients } from '../context/ClientContext'
import './ClientList.css'

function ClientList() {
  const { clients, loading, error, deleteClient } = useClients()
  const [searchTerm, setSearchTerm] = useState('')
  const [deleteError, setDeleteError] = useState(null)

  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.phone.includes(searchTerm) ||
    client.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this client?')) {
      try {
        await deleteClient(id)
        setDeleteError(null)
      } catch (err) {
        setDeleteError('Failed to delete client. Please check your backend connection.')
      }
    }
  }

  if (loading) {
    return <div className="loading">Loading Clients...</div>
  }

  return (
    <main className="client-list">
      <h1>Client Management</h1>
      
      <div className="client-header">
        <input
          type="text"
          placeholder="Search by name, phone, or location..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Link to="/add-client" className="add-client-btn">+ Add New Client</Link>
      </div>

      {error && <div className="alert error-alert">{error}</div>}
      {deleteError && <div className="alert error-alert">{deleteError}</div>}
      {filteredClients.length === 0 ? (
        <div className="no-clients">No clients found</div>
      ) : (
        <div className="table-responsive">
          <table className="clients-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Location</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredClients.map((client) => (
                <tr key={client.id}>
                  <td className="client-name">
                    <Link to={`/clients/${client.id}`}>{client.name}</Link>
                  </td>
                  <td>{client.phone}</td>
                  <td>{client.email}</td>
                  <td>{client.location}</td>
                  <td>
                    <span className={`status-badge ${client.status.toLowerCase()}`}>
                      {client.status}
                    </span>
                  </td>
                  <td className="actions-cell">
                    <Link to={`/edit-client/${client.id}`} className="btn-edit">✏️ Edit</Link>
                    <button className="btn-delete" onClick={() => handleDelete(client.id)}>🗑️ Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  )
}

export default ClientList
