"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function FeatureStorytelling() {
  const containerRef = useRef(null);

  const features = [
    { num: "01", title: "Smooth Resistance", desc: "Fluid tension for controlled daily movement.", top: "30%", left: "10%" },
    { num: "02", title: "Stable Frame", desc: "Solid timber construction keeps every session grounded and secure.", top: "60%", left: "40%" },
    { num: "03", title: "Soft Support", desc: "Padded surfaces provide comfort through focused, repeated movement.", top: "75%", left: "5%" },
    { num: "04", title: "Adjustable Training Angles", desc: "Integrated rails, straps, and pulleys allow movement variations for different body positions and training levels.", top: "65%", left: "65%" },
  ];

  return (
    <section className="py-24 px-6 lg:px-12 max-w-[1600px] mx-auto overflow-hidden" ref={containerRef}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center mb-20"
      >
        <p className="text-xs font-medium tracking-widest uppercase text-velora-black/50 mb-6 flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-velora-black/50" />
          Features
        </p>
        <h2 className="text-3xl md:text-5xl font-heading font-medium tracking-tight leading-tight">
          Elite Reformer is designed to support smooth resistance, stable alignment, and refined daily movement.
        </h2>
      </motion.div>

      <div className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-3xl overflow-hidden bg-velora-sand-dark/20">
        <Image 
          src="/images/reformer_hotspots.png" 
          alt="Reformer usage" 
          fill 
          className="object-cover scale-105"
        />
        
        {/* Desktop Absolute Cards */}
        <div className="hidden lg:block absolute inset-0">
          {features.map((feat, i) => (
            <motion.div
              key={feat.num}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="absolute bg-velora-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl w-64"
              style={{ top: feat.top, left: feat.left }}
            >
              <span className="text-xs text-velora-black/40 mb-2 block">{feat.num}</span>
              <h4 className="font-medium mb-1">{feat.title}</h4>
              <p className="text-sm text-velora-black/70">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Grid Cards */}
      <div className="lg:hidden mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {features.map((feat, i) => (
          <motion.div
            key={feat.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-velora-white p-6 rounded-2xl shadow-sm border border-velora-sand-dark/30"
          >
            <span className="text-xs text-velora-black/40 mb-2 block">{feat.num}</span>
            <h4 className="font-medium mb-1">{feat.title}</h4>
            <p className="text-sm text-velora-black/70">{feat.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
