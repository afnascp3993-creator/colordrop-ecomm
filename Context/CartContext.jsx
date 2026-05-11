import React, { createContext, useState, useContext } from 'react';

// Create Context
const CartContext = createContext();

// Custom hook to use the CartContext
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if product already exists in cart
      const existingProduct = prevCart.find(item => item.id === product.id);
      
      if (existingProduct) {
        // Increment quantity
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Add new product with initial quantity as 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove product from cart entirely
  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  // Increase or decrease quantity
  const updateQuantity = (id, change) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === id) {
          const newQuantity = item.quantity + change;
          // Don't allow quantity to drop below 1 using this method, though removal handled via trash icon
          return { ...item, quantity: Math.max(1, newQuantity) };
        }
        return item;
      });
    });
  };
    // Clear cart entirely
  const clearCart = () => {
    setCart([]);
  };

  // Compute overall total metrics whenever needed
  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);
  const cartSubtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
     <CartContext.Provider 
      value={{ 
        cart, 
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        cartItemCount, 
        cartSubtotal,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
