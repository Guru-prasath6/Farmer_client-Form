import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './Cart.css'

function Cart() {
  const { cartItems, cartCount, cartTotal, updateQuantity, removeFromCart, clearCart } = useCart()
  const [orderMessage, setOrderMessage] = useState('')

  const handlePlaceOrder = () => {
    clearCart()
    setOrderMessage('Order placed successfully! Your cart is now empty.')
  }

  return (
    <main className="cart-page">
      <div className="page-header">
        <div>
          <h1>🛒 Cart</h1>
          <p className="subtitle">Review selected crops before placing your farm order.</p>
        </div>
        <div className="cart-meta">
          <span>{cartCount} item{cartCount !== 1 ? 's' : ''}</span>
          <span>Total: ₹{cartTotal.toLocaleString()}</span>
        </div>
      </div>
      {orderMessage && <div className="order-message">{orderMessage}</div>}

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <Link to="/crops" className="primary-btn">Add Crops to Cart</Link>
        </div>
      ) : (
        <div className="cart-layout">
          <section className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <div className="item-title">
                    <h3>{item.name}</h3>
                    <span className="price">₹{item.unitPrice.toLocaleString()} / kg</span>
                  </div>
                  <p>{item.status} • {item.season}</p>
                  <div className="quantity-control">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>
                <div className="item-actions">
                  <span className="item-total">₹{(item.unitPrice * item.quantity).toLocaleString()}</span>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </section>

          <aside className="cart-summary">
            <div className="summary-card">
              <h2>Order Summary</h2>
              <div className="summary-row">
                <span>Items</span>
                <span>{cartCount}</span>
              </div>
              <div className="summary-row total-row">
                <span>Total</span>
                <span>₹{cartTotal.toLocaleString()}</span>
              </div>
              <button className="primary-btn" onClick={handlePlaceOrder}>Place Order</button>
              <button className="secondary-btn" onClick={clearCart}>Clear Cart</button>
              <Link to="/crops" className="secondary-btn outline">Continue Shopping</Link>
            </div>
          </aside>
        </div>
      )}
    </main>
  )
}

export default Cart
