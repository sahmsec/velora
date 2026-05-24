"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import LogoIcon from "@/components/LogoIcon";
import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { User, LogOut } from "lucide-react";

export default function FloatingNavbar() {
  const { totalItems, setIsDrawerOpen } = useCart();
  const [mounted, setMounted] = useState(false);
  const { data: session } = authClient.useSession();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-5 bg-velora-white/80 backdrop-blur-md border-b border-velora-sand-dark/20"
    >
      <Link href="/" className="flex items-center gap-2 group">
        <LogoIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
        <span className="text-xl font-heading font-medium tracking-tight">Velora</span>
      </Link>

      <div className="hidden md:flex items-center gap-10 text-sm font-medium">
        <Link href="/" className="hover:text-velora-sand-dark transition-colors">Home</Link>
        <Link href="/equipment" className="hover:text-velora-sand-dark transition-colors">Equipment</Link>
        <Link href="/journal" className="hover:text-velora-sand-dark transition-colors">Journal</Link>
        <Link href="/contact" className="hover:text-velora-sand-dark transition-colors">Contact</Link>
      </div>

      <div className="flex items-center gap-4">
        {session ? (
          <div className="hidden md:flex items-center gap-4 text-sm font-medium mr-4">
            <span className="text-velora-black/70 flex items-center gap-2">
              <User className="w-4 h-4"/> 
              {session.user?.name?.split(' ')[0] || "Account"}
            </span>
            <button onClick={() => authClient.signOut()} className="hover:text-velora-sand-dark transition-colors" title="Sign Out">
              <LogOut className="w-4 h-4"/>
            </button>
          </div>
        ) : (
          <Link href="/login" className="hidden md:block text-sm font-medium hover:text-velora-sand-dark transition-colors mr-2">
            Sign In
          </Link>
        )}
        <button 
          onClick={() => setIsDrawerOpen(true)}
          className="flex items-center gap-2 hover:text-velora-sand-dark transition-colors font-medium text-sm relative"
        >
          <ShoppingBag className="w-5 h-5" />
          {mounted && totalItems > 0 && (
            <span className="absolute -top-1 -right-2 bg-velora-black text-velora-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </motion.nav>
  );
}
