"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function ProductActions({ product }) {
  const [activeColor, setActiveColor] = useState(product.colors[0]);
  const { addToCart } = useCart();

  return (
    <div>
      <div className="mb-10">
        <h3 className="text-sm font-medium mb-3 capitalize">Color: {activeColor.name}</h3>
        <div className="flex gap-3">
          {product.colors.map((color) => (
            <button 
              key={color.name}
              onClick={() => setActiveColor(color)}
              className={`w-10 h-10 rounded-full border-2 ${activeColor.name === color.name ? 'border-velora-black' : 'border-transparent'} flex items-center justify-center transition-transform hover:scale-110`}
            >
              <span className="w-8 h-8 rounded-full block border border-black/10" style={{ backgroundColor: color.hex }} />
            </button>
          ))}
        </div>
      </div>

      <button 
        onClick={() => addToCart(product, activeColor)}
        className="w-full bg-velora-black text-velora-white py-4 rounded-xl font-medium hover:bg-black/80 transition-colors flex items-center justify-center gap-2"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 7 4.42-4.42"/><path d="m22 7-4.42-4.42"/><path d="M12 22V7"/><path d="m5 14 7 7 7-7"/></svg>
        Add to Cart
      </button>
    </div>
  );
}
