"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { equipmentProducts } from "@/lib/data";
import { useCart } from "@/context/CartContext";

export default function FeaturedProducts() {
  const { addToCart } = useCart();
  const featured = equipmentProducts.slice(0, 4);

  return (
    <section className="py-32 px-6 lg:px-12 bg-velora-sand text-velora-black">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-heading font-medium tracking-tight mb-6"
            >
              Featured Equipment
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-velora-black/70 text-lg md:text-xl"
            >
              Architecturally designed fitness tools for your home.
            </motion.p>
          </div>
          <Link href="/equipment" className="hidden md:inline-flex items-center justify-center border border-velora-sand-dark/50 hover:border-velora-black px-8 py-4 rounded-full font-medium transition-colors whitespace-nowrap">
            View All Equipment
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featured.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link href={`/equipment/${product.id}`} className="block">
                <div className="relative aspect-[4/5] bg-[#e0dcd0] rounded-3xl overflow-hidden mb-6 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent z-10 pointer-events-none" />
                  <Image 
                    src={product.images.sand} 
                    alt={product.name} 
                    fill 
                    className="object-contain p-8 group-hover:scale-105 transition-transform duration-700 z-0" 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-3 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-20">
                    <button 
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToCart(product, "sand"); }}
                      className="bg-velora-black text-velora-white px-8 py-3 rounded-full text-sm font-medium whitespace-nowrap hover:bg-velora-black/80 transition-colors shadow-lg"
                    >
                      Add to Cart
                    </button>
                    <span 
                      className="bg-velora-white text-velora-black px-8 py-3 rounded-full text-sm font-medium whitespace-nowrap text-center hover:bg-gray-100 transition-colors shadow-lg"
                    >
                      View Details
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium tracking-tight">{product.name}</h3>
                    <p className="text-sm text-velora-black/50 capitalize mt-1">{product.category}</p>
                  </div>
                  <p className="font-medium text-sm">{product.price}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center md:hidden">
          <Link href="/equipment" className="inline-flex w-full items-center justify-center border border-velora-sand-dark/50 hover:border-velora-black px-8 py-4 rounded-full font-medium transition-colors">
            View All Equipment
          </Link>
        </div>

      </div>
    </section>
  );
}
