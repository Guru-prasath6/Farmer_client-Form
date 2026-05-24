import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import ClientList from './pages/ClientList'
import ClientDetail from './pages/ClientDetail'
import AddEditClient from './pages/AddEditClient'
import Crops from './pages/Crops'
import CropDetail from './pages/CropDetail'
import Cart from './pages/Cart'
import { ClientProvider } from './context/ClientContext'
import { CartProvider } from './context/CartContext'
import './App.css'

function App() {
  return (
    <ClientProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/clients" element={<ClientList />} />
              <Route path="/clients/:id" element={<ClientDetail />} />
              <Route path="/add-client" element={<AddEditClient />} />
              <Route path="/edit-client/:id" element={<AddEditClient />} />
              <Route path="/crops" element={<Crops />} />
              <Route path="/crops/:id" element={<CropDetail />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </ClientProvider>
  )
}

export default App
