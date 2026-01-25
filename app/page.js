import FloatingNavbar from "@/components/FloatingNavbar";
import HeroSection from "@/sections/HeroSection";
import FeaturedProducts from "@/sections/FeaturedProducts";
import ShopTheSpace from "@/sections/ShopTheSpace";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-velora-sand min-h-screen selection:bg-velora-black selection:text-velora-white">
      <FloatingNavbar />
      
      <HeroSection />
      
      <FeaturedProducts />
      
      <ShopTheSpace />

      <Footer />
    </main>
  );
}
