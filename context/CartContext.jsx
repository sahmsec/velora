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

  const addToCart = (product, color) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id && item.color.name === color.name);
      if (existing) {
        return prev.map(item => 
          item.id === product.id && item.color.name === color.name 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, color, quantity: 1 }];
    });
    setIsDrawerOpen(true);
  };

  const removeFromCart = (productId, colorName) => {
    setCartItems(prev => prev.filter(item => !(item.id === productId && item.color.name === colorName)));
  };

  const updateQuantity = (productId, colorName, newQuantity) => {
    if (newQuantity < 1) return removeFromCart(productId, colorName);
    setCartItems(prev => prev.map(item => 
      item.id === productId && item.color.name === colorName 
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
