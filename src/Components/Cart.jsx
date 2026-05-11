import React from 'react';
import { useCart } from "../../Context/CartContext";
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartSubtotal } = useCart();

  return (
    <div className="cart-page-container">
      <h1 className="cart-title">Your Cart</h1>
      
      {cart.length === 0 ? (
        <div className="empty-cart-message">
          <p>Your cart is currently empty.</p>
          <Link to="/products" className="continue-shopping-btn">Continue Shopping</Link>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items-section">
            <div className="cart-headers">
              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Total</span>
            </div>
            
            <div className="cart-items-list">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-info">
                    <img src={item.img} alt={item.name} />
                    <div>
                      <h4>{item.name}</h4>
                      <p className="item-desc">{item.description}</p>
                      <button className="remove-item-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                  </div>
                  
                  <div className="cart-item-price">$ {item.price}</div>
                  
                  <div className="cart-item-quantity">
                    <button onClick={() => updateQuantity(item.id, -1)} disabled={item.quantity <= 1}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                  
                  <div className="cart-item-total">$ {item.price * item.quantity}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="cart-summary-section">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>$ {cartSubtotal}</span>
            </div>
            <div className="summary-row">
              <span>Tax (5%)</span>
              <span>$ {(cartSubtotal * 0.05).toFixed(2)}</span>
            </div>
            <div className="summary-row total-row">
              <span>Total</span>
              <span>$ {(cartSubtotal * 1.05).toFixed(2)}</span>
            </div>
            <Link to="/checkout" className="checkout-btn" style={{textAlign: 'center', display: 'block', textDecoration: 'none'}}>Proceed to Checkout</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
