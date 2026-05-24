import FloatingNavbar from "@/components/FloatingNavbar";
import HeroSection from "@/sections/HeroSection";
import FeaturedProducts from "@/sections/FeaturedProducts";
import ShopTheSpace from "@/sections/ShopTheSpace";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Velora | The Architecture of Movement",
  description: "Experience luxury minimal wellness with Velora. Architecturally designed Pilates reformers, strength equipment, and home gym systems crafted for your sanctuary.",
};

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
