import express from 'express'
import Client from '../models/Client.js'

const router = express.Router()

// Get all clients
router.get('/', async (req, res) => {
  try {
    const clients = await Client.find().sort({ createdAt: -1 })
    res.json(clients)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching clients', error: error.message })
  }
})

// Get single client
router.get('/:id', async (req, res) => {
  try {
    const client = await Client.findById(req.params.id)
    if (!client) {
      return res.status(404).json({ message: 'Client not found' })
    }
    res.json(client)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching client', error: error.message })
  }
})

// Create new client
router.post('/', async (req, res) => {
  try {
    const { name, phone, email, location, status, notes } = req.body

    // Validation
    if (!name || !phone || !email || !location) {
      return res.status(400).json({ message: 'Missing required fields' })
    }

    // Check if client already exists
    const existingClient = await Client.findOne({ $or: [{ phone }, { email }] })
    if (existingClient) {
      return res.status(400).json({ message: 'Client with this phone or email already exists' })
    }

    const newClient = new Client({
      name,
      phone,
      email,
      location,
      status: status || 'Active',
      notes: notes || ''
    })

    const savedClient = await newClient.save()
    res.status(201).json(savedClient)
  } catch (error) {
    res.status(500).json({ message: 'Error creating client', error: error.message })
  }
})

// Update client
router.put('/:id', async (req, res) => {
  try {
    const { name, phone, email, location, status, notes } = req.body

    const client = await Client.findByIdAndUpdate(
      req.params.id,
      {
        name,
        phone,
        email,
        location,
        status,
        notes,
        updatedAt: Date.now()
      },
      { new: true, runValidators: true }
    )

    if (!client) {
      return res.status(404).json({ message: 'Client not found' })
    }

    res.json(client)
  } catch (error) {
    res.status(500).json({ message: 'Error updating client', error: error.message })
  }
})

// Delete client
router.delete('/:id', async (req, res) => {
  try {
    const client = await Client.findByIdAndDelete(req.params.id)

    if (!client) {
      return res.status(404).json({ message: 'Client not found' })
    }

    res.json({ message: 'Client deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Error deleting client', error: error.message })
  }
})

export default router
