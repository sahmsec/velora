"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { equipmentProducts } from "@/lib/data";

export default function FeaturedProducts() {
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
              <div className="relative aspect-[4/5] bg-[#e0dcd0] rounded-3xl overflow-hidden mb-6 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent z-10 pointer-events-none" />
                <Image 
                  src={product.images.sand} 
                  alt={product.name} 
                  fill 
                  className="object-contain p-8 group-hover:scale-105 transition-transform duration-700 z-0" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium tracking-tight">{product.name}</h3>
                  <p className="text-sm text-velora-black/50 capitalize mt-1">{product.category}</p>
                </div>
                <p className="font-medium text-sm">{product.price}</p>
              </div>
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
