"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

const slides = [
  { id: 1, src: "/images/hero_slider_1.png", alt: "Luxury Pilates Reformer Studio" },
  { id: 2, src: "/images/hero_slider_2.png", alt: "Minimalist Wellness Environment" },
  { id: 3, src: "/images/hero_slider_3.png", alt: "Premium Fitness Detail" }
];

export default function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 }, [
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: false })
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-velora-black">
      {/* Slider */}
      <div className="absolute inset-0 z-0" ref={emblaRef}>
        <div className="flex h-full touch-pan-y">
          {slides.map((slide) => (
            <div key={slide.id} className="relative flex-[0_0_100%] h-full min-w-0">
              <Image 
                src={slide.src} 
                alt={slide.alt} 
                fill 
                priority
                className="object-cover brightness-[0.6] scale-105"
                sizes="100vw"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div className="text-center px-6 text-velora-white max-w-4xl mt-16 pointer-events-auto">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs md:text-sm tracking-[0.2em] uppercase font-medium mb-6 text-velora-white/80"
          >
            Elevate Your Movement Space
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-medium tracking-tight leading-[1.1] mb-12"
          >
            Precision in<br/>Every Repetition.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/equipment" className="inline-block bg-velora-white text-velora-black px-10 py-4 rounded-full font-medium hover:bg-velora-sand transition-colors shadow-xl">
              Shop Collection
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-0 right-0 z-20 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-12 h-1 rounded-full transition-all duration-500 ${
              index === selectedIndex ? "bg-velora-white" : "bg-velora-white/30 hover:bg-velora-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
