"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TechnicalSpecs() {
  const specs = [
    { label: "Overall Length", value: "246 cm" },
    { label: "Carriage Height", value: "38.5 cm" },
    { label: "Overall Width", value: "77 cm" },
    { label: "Maximum Height", value: "73.5 cm" },
    { label: "Frame Height", value: "24 cm" },
    { label: "Net Weight", value: "88 kg" },
  ];

  return (
    <section className="py-24 px-6 lg:px-12 max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
      <div className="flex-1 w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] relative rounded-3xl overflow-hidden bg-velora-sand-dark/20">
        <Image 
          src="/images/reformer_main.png" 
          alt="Technical Details" 
          fill 
          className="object-cover scale-[1.3] md:scale-150 origin-left"
        />
      </div>
      
      <div className="flex-1 w-full">
        <p className="text-xs font-medium tracking-widest uppercase text-velora-black/50 mb-4 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-velora-black/50" />
          Specifications
        </p>
        <h2 className="text-3xl md:text-5xl font-heading font-medium tracking-tight mb-6">
          Precision in Every Dimension
        </h2>
        <p className="text-velora-black/70 mb-12 max-w-lg leading-relaxed">
          Elite Reformer is designed with measured proportions, stable construction, and refined mechanical balance. Built to support controlled movement while maintaining a clean presence within modern living spaces.
        </p>

        <div className="bg-velora-white rounded-3xl p-8 lg:p-12 border border-velora-sand-dark/30 shadow-sm">
          <div className="flex items-center gap-3 mb-8 border-b border-velora-sand-dark/20 pb-4">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            <span className="font-medium">Technical Details</span>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10">
            {specs.map((spec, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p className="text-sm font-medium mb-1">{spec.label}</p>
                <p className="text-sm text-velora-black/60">{spec.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
