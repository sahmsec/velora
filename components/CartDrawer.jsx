"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function CartDrawer() {
  const { isDrawerOpen, setIsDrawerOpen, cartItems, updateQuantity, removeFromCart, subtotal, isMounted } = useCart();
  const { data: session } = authClient.useSession();
  const router = useRouter();

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsDrawerOpen(false)}
            className="fixed inset-0 bg-velora-black/40 backdrop-blur-sm z-[60]"
          />
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-velora-white z-[70] flex flex-col shadow-2xl border-l border-velora-sand-dark/20"
          >
            <div className="flex items-center justify-between p-6 border-b border-velora-sand-dark/20">
              <h2 className="text-xl font-heading font-medium flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                Your Cart
              </h2>
              <button onClick={() => setIsDrawerOpen(false)} className="p-2 hover:bg-velora-sand rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-velora-black/50">
                  <ShoppingBag className="w-12 h-12 mb-4 opacity-50" />
                  <p>Your cart is empty.</p>
                  <button onClick={() => setIsDrawerOpen(false)} className="mt-4 text-velora-black underline underline-offset-4">Continue Shopping</button>
                </div>
              ) : (
                cartItems.map((item, idx) => (
                  <div key={`${item.id}-${item.color.name}-${idx}`} className="flex gap-4">
                    <div className="w-24 h-24 rounded-xl bg-velora-sand flex items-center justify-center relative overflow-hidden shrink-0">
                      <Image 
                        src={item.images[item.color.name]} 
                        alt={item.name} 
                        fill 
                        className="object-contain p-2"
                        style={{ filter: item.color.filter || "none" }}
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="font-medium">{item.name}</h3>
                          <button onClick={() => removeFromCart(item.id, item.color.name)} className="text-velora-black/40 hover:text-velora-black transition-colors">
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xs text-velora-black/60 capitalize mt-1">Color: {item.color.name}</p>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center gap-3 border border-velora-sand-dark/50 rounded-lg px-2 py-1">
                          <button onClick={() => updateQuantity(item.id, item.color.name, item.quantity - 1)} className="hover:opacity-60 transition-opacity">
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-medium w-4 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.color.name, item.quantity + 1)} className="hover:opacity-60 transition-opacity">
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="font-medium text-sm">{item.price}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="p-6 border-t border-velora-sand-dark/20 bg-velora-sand/30">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-velora-black/70">Subtotal</span>
                  <span className="text-xl font-medium">${subtotal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                </div>
                <button 
                  onClick={() => {
                    if (!session) {
                      setIsDrawerOpen(false);
                      router.push("/login");
                    } else {
                      // Placeholder for real checkout
                      alert("Proceeding to secure checkout!");
                    }
                  }}
                  className="w-full bg-velora-black text-velora-white py-4 rounded-xl font-medium hover:bg-black/80 transition-colors"
                >
                  Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
