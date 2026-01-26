"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { equipmentProducts } from "@/lib/data";

export default function ShopTheSpace() {
  const { addToCart } = useCart();
  
  const hotspots = [
    { 
      id: "elite-reformer", 
      top: "75%", 
      left: "45%", 
      label: "Elite Reformer" 
    },
    { 
      id: "premium-mat", 
      top: "60%", 
      left: "75%", 
      label: "Premium Mat" 
    }
  ];

  const handleQuickAdd = (productId) => {
    const product = equipmentProducts.find(p => p.id === productId);
    if (product) addToCart(product, "sand");
  };

  return (
    <section className="py-24 px-6 lg:px-12 max-w-[1600px] mx-auto" id="selected">
      <div className="flex justify-between items-end mb-10">
        <div>
          <p className="text-xs font-medium tracking-widest uppercase text-velora-black/50 mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-velora-black/50" />
            Spaces
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-medium tracking-tight">
            Shop the Space
          </h2>
        </div>
      </div>

      <div className="w-full aspect-[4/3] md:aspect-[21/9] rounded-3xl overflow-hidden relative border border-velora-sand-dark/20">
        <Image 
          src="/images/new_lifestyle_bundle.png" 
          alt="Shop the space" 
          fill 
          className="object-cover"
        />
        
        {/* Hotspots */}
        {hotspots.map((spot, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="absolute z-10 group"
            style={{ top: spot.top, left: spot.left }}
          >
            {/* The Dot */}
            <button 
              onClick={() => handleQuickAdd(spot.id)}
              className="w-10 h-10 bg-velora-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform relative"
            >
              <Plus className="w-5 h-5" />
              <span className="absolute inset-0 rounded-full border border-velora-white animate-ping" />
            </button>
            
            {/* Hover Label */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none w-[120px] bg-velora-white/90 backdrop-blur-sm p-2 rounded-lg shadow-xl text-center">
              <p className="text-xs font-medium">{spot.label}</p>
              <p className="text-[10px] text-velora-black/60 mt-0.5">Quick Add</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
