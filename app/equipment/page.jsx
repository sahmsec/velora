"use client";

import Image from "next/image";
import Link from "next/link";
import FloatingNavbar from "@/components/FloatingNavbar";
import Footer from "@/components/Footer";
import { equipmentProducts } from "@/lib/data";

export default function EquipmentPage() {
  return (
    <main className="relative bg-velora-sand min-h-screen selection:bg-velora-black selection:text-velora-white pt-32">
      <FloatingNavbar />
      
      <section className="px-6 lg:px-12 max-w-[1600px] mx-auto mb-24">
        <div className="mb-16 border-b border-velora-sand-dark/20 pb-8">
          <h1 className="text-4xl md:text-6xl font-heading font-medium tracking-tight mb-4">All Equipment</h1>
          <p className="text-velora-black/60 max-w-xl text-lg">
            Explore our complete collection of premium, design-forward fitness equipment crafted for your sanctuary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-x-8 md:gap-y-16">
          {equipmentProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-[#e0dcd0] mb-6 flex items-center justify-center">
                {/* Subtle gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent z-10 pointer-events-none" />
                <Image 
                  src={product.images.sand} 
                  alt={product.name} 
                  fill 
                  className="object-contain p-8 group-hover:scale-105 transition-transform duration-700 z-0" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-medium tracking-tight">{product.name}</h3>
                  <p className="text-sm text-velora-black/50 capitalize mt-1">{product.category}</p>
                </div>
                <p className="font-medium">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
