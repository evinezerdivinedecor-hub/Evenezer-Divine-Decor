// context/CartContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    try {
      const raw = localStorage.getItem('evinezer_cart');
      if (raw) setCart(JSON.parse(raw));
    } catch (e) {}
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem('evinezer_cart', JSON.stringify(cart));
    } catch (e) {}
  }, [cart]);

  const addItem = (item) => {
    setCart((prev) => {
      const idx = prev.findIndex((p) => p.id === item.id);
      if (idx > -1) {
        const copy = [...prev];
        copy[idx].quantity += item.quantity || 1;
        return copy;
      }
      return [...prev, { ...item, quantity: item.quantity || 1 }];
    });
  };

  const updateQty = (id, qty) => {
    setCart((prev) => prev.map((p) => (p.id === id ? { ...p, quantity: qty } : p)));
  };

  const removeItem = (id) => setCart((prev) => prev.filter((p) => p.id !== id));
  const clearCart = () => setCart([]);

  const totalQuantity = cart.reduce((s, i) => s + (i.quantity || 0), 0);
  const totalPrice = cart.reduce((s, i) => s + (i.price || 0) * (i.quantity || 0), 0);

  return (
    <CartContext.Provider value={{ cart, addItem, updateQty, removeItem, clearCart, totalQuantity, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
