"use client";

import { useCart } from "@/context/CartContext";

export default function AddToCartButton({ product }) {
  const { addToCart } = useCart();

  return (
    <button 
      onClick={() => addToCart(product, "sand")}
      className="w-full bg-velora-black text-velora-white py-5 rounded-full text-lg font-medium hover:bg-velora-black/80 transition-colors"
    >
      Add to Cart — {product.price}
    </button>
  );
}
