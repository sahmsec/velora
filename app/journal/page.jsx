import FloatingNavbar from "@/components/FloatingNavbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { journalPosts } from "@/lib/data";

export default function JournalPage() {
  return (
    <main className="relative bg-velora-sand min-h-screen pt-32 selection:bg-velora-black selection:text-velora-white">
      <FloatingNavbar />
      
      <section className="px-6 lg:px-12 max-w-[1600px] mx-auto mb-24">
        <div className="mb-16 border-b border-velora-sand-dark/20 pb-8">
          <h1 className="text-5xl md:text-7xl font-heading font-medium tracking-tight mb-6">Journal</h1>
          <p className="text-velora-black/70 max-w-xl text-lg">Stories, guides, and insights on movement, design, and premium wellness living.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {journalPosts.map(post => (
            <Link href={`/journal/${post.slug}`} key={post.id} className="group cursor-pointer">
              <article>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 border border-velora-sand-dark/20 bg-velora-sand-dark/10">
                  <Image 
                    src={post.img} 
                    alt={post.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="flex items-center gap-4 text-xs font-medium text-velora-black/50 mb-3">
                  <span className="uppercase tracking-wider">{post.category}</span>
                  <span className="w-1 h-1 rounded-full bg-velora-black/20" />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-2xl font-heading font-medium tracking-tight group-hover:underline underline-offset-4">{post.title}</h3>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
