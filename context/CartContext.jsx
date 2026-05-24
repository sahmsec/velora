"use client";

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const savedCart = localStorage.getItem("velora_cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("velora_cart", JSON.stringify(cartItems));
    }
  }, [cartItems, isMounted]);

  const getColorKey = (color) => typeof color === 'string' ? color : (color?.name || 'sand');

  const addToCart = (product, color) => {
    setCartItems(prev => {
      const colorKey = getColorKey(color);
      const existing = prev.find(item => item.id === product.id && getColorKey(item.color) === colorKey);
      if (existing) {
        return prev.map(item => 
          item.id === product.id && getColorKey(item.color) === colorKey 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, color: colorKey, quantity: 1 }];
    });
    setIsDrawerOpen(true);
  };

  const removeFromCart = (productId, color) => {
    const colorKey = getColorKey(color);
    setCartItems(prev => prev.filter(item => !(item.id === productId && getColorKey(item.color) === colorKey)));
  };

  const updateQuantity = (productId, color, newQuantity) => {
    const colorKey = getColorKey(color);
    if (newQuantity < 1) return removeFromCart(productId, colorKey);
    setCartItems(prev => prev.map(item => 
      item.id === productId && getColorKey(item.color) === colorKey 
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  const subtotal = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
    return sum + (price * item.quantity);
  }, 0);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      isDrawerOpen,
      setIsDrawerOpen,
      subtotal,
      totalItems,
      isMounted
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
