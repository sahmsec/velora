import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f0f0f0] text-[#111111] pt-24 pb-8 px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto relative z-10">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between mb-16">
          
          {/* Top Left: Title & Contact */}
          <div className="mb-16 lg:mb-0 max-w-xl">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-[1.1] mb-12">
              Pilates Reformer & Gym Systems.<br />
              <span className="text-[#111111]/40">Designed for living spaces.</span>
            </h2>
            <div className="flex flex-wrap items-center gap-8 text-sm font-medium">
              <a href="mailto:hello@velora.com" className="hover:underline underline-offset-4">hello@velora.com</a>
              <a href="tel:+14155550118" className="hover:underline underline-offset-4">+1 (415) 555 0118</a>
            </div>
          </div>

          {/* Top Right: Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-24">
            <div className="flex flex-col gap-4">
              <h3 className="text-xs text-[#111111]/40 mb-2">Equipment</h3>
              <Link href="/equipment" className="text-sm font-medium hover:text-[#111111]/60 transition-colors">Reformers</Link>
              <Link href="/equipment" className="text-sm font-medium hover:text-[#111111]/60 transition-colors">Strength Machines</Link>
              <Link href="/equipment" className="text-sm font-medium hover:text-[#111111]/60 transition-colors">Home Gym Systems</Link>
              <Link href="/equipment" className="text-sm font-medium hover:text-[#111111]/60 transition-colors">Accessories</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xs text-[#111111]/40 mb-2">Support</h3>
              <Link href="#" className="text-sm font-medium hover:text-[#111111]/60 transition-colors">Delivery</Link>
              <Link href="#" className="text-sm font-medium hover:text-[#111111]/60 transition-colors">Installation</Link>
              <Link href="#" className="text-sm font-medium hover:text-[#111111]/60 transition-colors">Warranty</Link>
              <Link href="#" className="text-sm font-medium hover:text-[#111111]/60 transition-colors">Service</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xs text-[#111111]/40 mb-2">Studio</h3>
              <Link href="#" className="text-sm font-medium hover:text-[#111111]/60 transition-colors">Visit</Link>
              <Link href="#" className="text-sm font-medium hover:text-[#111111]/60 transition-colors">Press</Link>
              <Link href="#" className="text-sm font-medium hover:text-[#111111]/60 transition-colors">Warranty</Link>
              <Link href="#" className="text-sm font-medium hover:text-[#111111]/60 transition-colors">Atelier</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xs text-[#111111]/40 mb-2">Community</h3>
              <Link href="#" className="text-sm font-medium hover:text-[#111111]/60 transition-colors">Events</Link>
              <Link href="#" className="text-sm font-medium hover:text-[#111111]/60 transition-colors">Workshops</Link>
              <Link href="#" className="text-sm font-medium hover:text-[#111111]/60 transition-colors">Forums</Link>
              <Link href="#" className="text-sm font-medium hover:text-[#111111]/60 transition-colors">Ambassadors</Link>
            </div>
          </div>
        </div>

        {/* Middle Section: Watermark Logo */}
        <div className="flex items-center justify-center pointer-events-none select-none mb-16 overflow-hidden">
          <div className="relative flex items-center justify-center w-full max-w-[1200px]">
            <span className="text-[12vw] leading-none font-bold tracking-[0.15em] uppercase text-[#111111]/5">
              Velora
            </span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs font-medium text-[#111111]/40 gap-4">
          <div className="flex gap-6">
            <Link href="#" className="hover:text-[#111111]/80 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#111111]/80 transition-colors">Terms and Conditions</Link>
          </div>
          <div>
            © 2026 Velora. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
