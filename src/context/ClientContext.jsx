import axios from 'axios'
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const ClientContext = createContext()
const API_BASE = import.meta.env.VITE_API_BASE || '/api'

const sampleClients = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    phone: '9876543210',
    email: 'rajesh@example.com',
    location: 'Punjab',
    status: 'Active',
    notes: 'Prefers morning calls',
    totalOrders: 12,
    totalSpent: 45000
  },
  {
    id: 2,
    name: 'Amit Patel',
    phone: '9876543211',
    email: 'amit@example.com',
    location: 'Gujarat',
    status: 'Active',
    notes: '',
    totalOrders: 8,
    totalSpent: 32000
  },
  {
    id: 3,
    name: 'Suresh Singh',
    phone: '9876543212',
    email: 'suresh@example.com',
    location: 'Haryana',
    status: 'Inactive',
    notes: 'Follow up next month',
    totalOrders: 5,
    totalSpent: 18000
  },
  {
    id: 4,
    name: 'Vikram Sharma',
    phone: '9876543213',
    email: 'vikram@example.com',
    location: 'Rajasthan',
    status: 'Active',
    notes: '',
    totalOrders: 15,
    totalSpent: 56000
  },
  {
    id: 5,
    name: 'Priya Verma',
    phone: '9876543214',
    email: 'priya@example.com',
    location: 'Madhya Pradesh',
    status: 'Active',
    notes: '',
    totalOrders: 10,
    totalSpent: 42000
  },
  {
    id: 6,
    name: 'Deepak Singh',
    phone: '9876543215',
    email: 'deepak@example.com',
    location: 'Uttar Pradesh',
    status: 'Inactive',
    notes: '',
    totalOrders: 3,
    totalSpent: 11000
  }
]

function ClientProvider({ children }) {
  const [clients, setClients] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [backendAvailable, setBackendAvailable] = useState(true)

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get(`${API_BASE}/clients`)
        setClients(response.data)
        setBackendAvailable(true)
      } catch (err) {
        console.error('Error fetching clients:', err)
        setError('Unable to load clients from backend. Showing sample data.')
        setBackendAvailable(false)
        setClients(sampleClients)
      } finally {
        setLoading(false)
      }
    }

    fetchClients()
  }, [])

  const getErrorMessage = (err) => {
    if (err?.response?.data?.message) {
      return err.response.data.message
    }
    if (err?.message) {
      return err.message
    }
    return 'Unknown backend error'
  }

  const addClient = async (clientData) => {
    const localClient = {
      ...clientData,
      id: Date.now(),
      totalOrders: 0,
      totalSpent: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    try {
      const response = await axios.post(`${API_BASE}/clients`, clientData)
      setClients((prev) => [response.data, ...prev])
      setBackendAvailable(true)
      return response.data
    } catch (err) {
      const message = getErrorMessage(err)
      console.error('Error adding client:', message)

      if (err.response) {
        // Backend is reachable but rejected the request
        throw new Error(message)
      }

      // Only fallback locally when the backend is truly unreachable
      setError('Unable to save client to backend. Working locally until the API is back online.')
      setBackendAvailable(false)
      setClients((prev) => [localClient, ...prev])
      return localClient
    }
  }

  const updateClient = async (clientId, updatedData) => {
    try {
      const response = await axios.put(`${API_BASE}/clients/${clientId}`, updatedData)
      setClients((prev) => prev.map((client) =>
        String(client.id) === String(clientId) ? response.data : client
      ))
      setBackendAvailable(true)
      return response.data
    } catch (err) {
      const message = getErrorMessage(err)
      console.error('Error updating client:', message)

      if (err.response) {
        throw new Error(message)
      }

      setError('Unable to update client on backend. Local changes are still preserved.')
      setBackendAvailable(false)
      setClients((prev) => prev.map((client) =>
        String(client.id) === String(clientId) ? { ...client, ...updatedData, updatedAt: new Date() } : client
      ))
      return { ...updatedData, id: clientId }
    }
  }

  const deleteClient = async (clientId) => {
    try {
      await axios.delete(`${API_BASE}/clients/${clientId}`)
      setClients((prev) => prev.filter((client) => String(client.id) !== String(clientId)))
      setBackendAvailable(true)
    } catch (err) {
      const message = getErrorMessage(err)
      console.error('Error deleting client:', message)

      if (err.response) {
        throw new Error(message)
      }

      setError('Unable to delete client from backend. Removed locally for now.')
      setBackendAvailable(false)
      setClients((prev) => prev.filter((client) => String(client.id) !== String(clientId)))
    }
  }

  const stats = useMemo(() => {
    const totalClients = clients.length
    const activeClients = clients.filter((client) => client.status === 'Active').length
    const totalOrders = clients.reduce((sum, client) => sum + (client.totalOrders || 0), 0)
    const revenue = clients.reduce((sum, client) => sum + (client.totalSpent || 0), 0)
    return { totalClients, activeClients, totalOrders, revenue }
  }, [clients])

  return (
    <ClientContext.Provider value={{ clients, loading, error, backendAvailable, addClient, updateClient, deleteClient, stats }}>
      {children}
    </ClientContext.Provider>
  )
}

function useClients() {
  const context = useContext(ClientContext)
  if (!context) {
    throw new Error('useClients must be used within ClientProvider')
  }
  return context
}

export { ClientProvider, useClients }
