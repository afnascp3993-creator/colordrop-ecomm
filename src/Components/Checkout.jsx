import React, { useState } from 'react';
import { useCart } from '../../Context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const { cart, cartSubtotal, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    paymentMethod: 'card'
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // Simulate order placement
    setTimeout(() => {
      setOrderPlaced(true);
      if (clearCart) {
        clearCart();
      }
    }, 1000);
  };

  if (orderPlaced) {
    return (
      <div className="checkout-success-container">
        <div className="success-icon">✓</div>
        <h1>Order Placed Successfully!</h1>
        <p>Thank you for your purchase, {formData.firstName}. We will send a confirmation email to {formData.email} shortly.</p>
        <Link to="/products" className="continue-shopping-btn">Continue Shopping</Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="cart-page-container">
        <div className="empty-cart-message">
          <p>Your cart is empty. You cannot proceed to checkout.</p>
          <Link to="/products" className="continue-shopping-btn">Return to Shop</Link>
        </div>
      </div>
    );
  }

  const tax = cartSubtotal * 0.05;
  const total = cartSubtotal + tax;

  return (
    <div className="checkout-page-container">
      <div className="checkout-layout">
        {/* Left Side - Form */}
        <div className="checkout-form-section">
          <h2>Checkout</h2>
          <form onSubmit={handlePlaceOrder}>
            
            <div className="form-group-section">
              <h3>Contact Information</h3>
              <div className="form-row">
                <div className="input-group">
                  <label>First Name</label>
                  <input type="text" name="firstName" required value={formData.firstName} onChange={handleChange} />
                </div>
                <div className="input-group">
                  <label>Last Name</label>
                  <input type="text" name="lastName" required value={formData.lastName} onChange={handleChange} />
                </div>
              </div>
              <div className="form-row">
                <div className="input-group">
                  <label>Email Address</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} />
                </div>
                <div className="input-group">
                  <label>Phone Number</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} />
                </div>
              </div>
            </div>

            <div className="form-group-section">
              <h3>Shipping Address</h3>
              <div className="input-group">
                <label>Street Address</label>
                <input type="text" name="address" required value={formData.address} onChange={handleChange} />
              </div>
              <div className="form-row">
                <div className="input-group">
                  <label>City</label>
                  <input type="text" name="city" required value={formData.city} onChange={handleChange} />
                </div>
                <div className="input-group">
                  <label>State / Province</label>
                  <input type="text" name="state" required value={formData.state} onChange={handleChange} />
                </div>
                <div className="input-group">
                  <label>Zip / Postal Code</label>
                  <input type="text" name="zip" required value={formData.zip} onChange={handleChange} />
                </div>
              </div>
            </div>

            <div className="form-group-section">
              <h3>Payment Method</h3>
              <div className="payment-options">
                <label className="radio-label">
                  <input type="radio" name="paymentMethod" value="card" checked={formData.paymentMethod === 'card'} onChange={handleChange} />
                  Credit / Debit Card
                </label>
                <label className="radio-label">
                  <input type="radio" name="paymentMethod" value="cod" checked={formData.paymentMethod === 'cod'} onChange={handleChange} />
                  Cash on Delivery
                </label>
              </div>
              
              {formData.paymentMethod === 'card' && (
                <div className="card-details">
                   <div className="input-group">
                      <label>Card Number</label>
                      <input type="text" placeholder="XXXX XXXX XXXX XXXX" />
                   </div>
                   <div className="form-row">
                      <div className="input-group">
                        <label>Expiry Date</label>
                        <input type="text" placeholder="MM/YY" />
                      </div>
                      <div className="input-group">
                        <label>CVV</label>
                        <input type="text" placeholder="123" />
                      </div>
                   </div>
                </div>
              )}
            </div>

            <button type="submit" className="place-order-btn">Place Order - ₹ {total.toFixed(2)}</button>
          </form>
        </div>

        {/* Right Side - Summary */}
        <div className="checkout-summary-section">
          <h3>Order Summary</h3>
          <div className="checkout-items">
            {cart.map((item, index) => (
              <div key={index} className="checkout-item">
                <div className="checkout-item-img">
                  <img src={item.image || item.img} alt={item.name} />
                  <span className="checkout-item-qty">{item.quantity}</span>
                </div>
                <div className="checkout-item-info">
                  <h4>{item.name}</h4>
                  <p>{item.type || item.category}</p>
                </div>
                <div className="checkout-item-price">
                  ₹ {item.price * item.quantity}
                </div>
              </div>
            ))}
          </div>

          <div className="checkout-totals">
             <div className="checkout-row">
               <span>Subtotal</span>
               <span>₹ {cartSubtotal.toFixed(2)}</span>
             </div>
             <div className="checkout-row">
               <span>Tax (5%)</span>
               <span>₹ {tax.toFixed(2)}</span>
             </div>
             <div className="checkout-row">
               <span>Shipping</span>
               <span>Free</span>
             </div>
             <div className="checkout-row checkout-final-total">
               <span>Total</span>
               <span>₹ {total.toFixed(2)}</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
