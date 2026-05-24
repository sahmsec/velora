import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import FloatingNavbar from "@/components/FloatingNavbar";
import Footer from "@/components/Footer";
import { equipmentProducts } from "@/lib/data";
import AddToCartButton from "./AddToCartButton";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = equipmentProducts.find(p => p.id === id);
  if (!product) return {};
  
  return {
    title: product.name,
    description: `Shop the ${product.name}. Premium ${product.category} equipment designed for your luxury home sanctuary.`,
    openGraph: {
      title: `${product.name} | Velora`,
      description: `Premium ${product.category} equipment for your home sanctuary.`,
      images: [product.images.sand]
    }
  }
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = equipmentProducts.find(p => p.id === id);

  if (!product) {
    notFound();
  }

  // Auto-generate description based on category
  const getCategoryDesc = (category) => {
    switch(category) {
      case 'reformers': return "Engineered for precision and fluid movement, this reformer combines architectural beauty with unmatched structural integrity. Handcrafted using sustainable materials for the ultimate mind-body connection.";
      case 'strength': return "Transform your strength training with tools designed to look as beautiful as they function. Perfect for building lean muscle and enhancing your daily practice without compromising your living space's aesthetic.";
      case 'accessories': return "Essential companions for your daily wellness journey. Crafted from premium materials to elevate your practice and seamlessly integrate into your home sanctuary.";
      case 'cardio': return "Elevate your heart rate with tools designed for high-intensity, low-impact movement. Built for durability and aesthetic perfection, transforming cardiovascular health into an art form.";
      default: return "A premium addition to your home sanctuary, designed to elevate your wellness journey.";
    }
  }

  return (
    <main className="relative bg-velora-sand min-h-screen selection:bg-velora-black selection:text-velora-white pt-32">
      <FloatingNavbar />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-32">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left: Image Showcase */}
          <div className="w-full lg:w-3/5">
            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square bg-[#e0dcd0] rounded-[2rem] overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent z-10 pointer-events-none" />
              <Image 
                src={product.images.sand}
                alt={product.name}
                fill
                className="object-contain p-12 lg:p-24"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="w-full lg:w-2/5 flex flex-col justify-center">
            <div className="mb-4">
              <Link href="/equipment" className="text-sm font-medium text-velora-black/50 hover:text-velora-black transition-colors mb-6 inline-block">
                ← Back to Equipment
              </Link>
              <p className="text-sm uppercase tracking-widest text-velora-black/60 mb-2">{product.category}</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium tracking-tight mb-4">{product.name}</h1>
              <p className="text-2xl mb-8">{product.price}</p>
            </div>

            <div className="prose prose-velora mb-12">
              <p className="text-velora-black/80 text-lg leading-relaxed">
                {getCategoryDesc(product.category)}
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-sm font-medium mb-4">Color Edition</h3>
              <div className="flex gap-4">
                <button className="w-12 h-12 rounded-full border-2 border-velora-black bg-[#e0dcd0] relative overflow-hidden group">
                  <span className="sr-only">Sand</span>
                </button>
                <button className="w-12 h-12 rounded-full border border-velora-black/20 bg-[#111111] relative overflow-hidden group hover:border-velora-black/50 transition-colors">
                  <span className="sr-only">Obsidian</span>
                </button>
              </div>
            </div>

            <div className="pt-8 border-t border-velora-black/10">
              <AddToCartButton product={product} />
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
