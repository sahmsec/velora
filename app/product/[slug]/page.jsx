import { products } from "@/sections/FeaturedProducts";
import FloatingNavbar from "@/components/FloatingNavbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { notFound } from "next/navigation";
import FeatureStorytelling from "@/sections/FeatureStorytelling";
import TechnicalSpecs from "@/sections/TechnicalSpecs";
import ProductActions from "./ProductActions";

export default async function ProductPage({ params }) {
  const resolvedParams = await params;
  const product = products.find(p => p.id === resolvedParams.slug);
  
  if (!product) return notFound();

  return (
    <main className="relative bg-velora-sand min-h-screen pt-32">
      <FloatingNavbar />
      
      <section className="px-6 lg:px-12 max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-16 items-start pb-24">
        {/* Gallery */}
        <div className="flex-1 w-full bg-velora-white rounded-3xl aspect-square md:aspect-[4/3] relative flex items-center justify-center p-8 lg:p-16 border border-velora-sand-dark/20">
          <Image 
            src={product.images.sand} 
            alt={product.name} 
            fill 
            priority
            className="object-contain" 
          />
        </div>

        {/* Details & Actions */}
        <div className="w-full lg:w-[480px]">
          <h1 className="text-4xl md:text-5xl font-heading font-medium tracking-tight mb-4">{product.name}</h1>
          <p className="text-xl font-medium mb-8">{product.price}</p>
          
          <p className="text-velora-black/70 leading-relaxed mb-10">
            Experience the precision and luxury of the {product.name}. Designed to bring controlled strength and balance into your space, crafted with premium materials.
          </p>

          <ProductActions product={product} />
        </div>
      </section>

      {/* Show full immersive story if it's the reformer */}
      {product.id === "elite-reformer" && (
        <>
          <FeatureStorytelling />
          <TechnicalSpecs />
        </>
      )}

      <Footer />
    </main>
  );
}
