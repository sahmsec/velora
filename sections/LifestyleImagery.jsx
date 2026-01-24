"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function LifestyleImagery() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section className="py-24 px-6 lg:px-12 max-w-[1600px] mx-auto" ref={ref}>
      <div className="flex justify-between items-end mb-10">
        <div>
          <p className="text-xs font-medium tracking-widest uppercase text-velora-black/50 mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-velora-black/50" />
            Product Details
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-medium tracking-tight">
            Designed to Live With You
          </h2>
        </div>
        <p className="hidden md:block max-w-xs text-sm text-velora-black/60 text-right">
          Hover through each detail to discover the seamless fusion of performance, comfort, and aesthetics.
        </p>
      </div>

      <div className="w-full aspect-[4/3] md:aspect-[21/9] rounded-3xl overflow-hidden relative border border-velora-sand-dark/20">
        <motion.div className="w-full h-[120%] relative -top-[10%]" style={{ y }}>
          <Image 
            src="/images/reformer_lifestyle.png" 
            alt="Lifestyle usage" 
            fill 
            className="object-cover"
          />
        </motion.div>
        
        {/* Detail Card Overlay */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-6 right-6 md:bottom-12 md:right-12 bg-velora-white/95 backdrop-blur-md p-4 md:p-6 rounded-2xl w-[90%] md:w-80 shadow-2xl flex gap-4 items-center"
        >
          <div className="flex-1">
            <h4 className="font-medium mb-1">Padded Carriage</h4>
            <p className="text-xs text-velora-black/60">Smooth cushioned surface for steady movement and comfort.</p>
          </div>
          <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 relative rounded-lg overflow-hidden bg-velora-sand">
            <Image src="/images/reformer_main.png" alt="Detail" fill className="object-cover scale-[2] object-center" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
