import FloatingNavbar from "@/components/FloatingNavbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { journalPosts } from "@/lib/data";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return journalPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = journalPosts.find(p => p.slug === slug);
  if (!post) return {};
  
  // Extract first paragraph for description
  const descriptionText = post.content.find(c => c.type === 'paragraph')?.text || "Velora Journal";
  const shortDesc = descriptionText.length > 150 ? descriptionText.substring(0, 150) + "..." : descriptionText;
  
  return {
    title: post.title,
    description: shortDesc,
    openGraph: {
      title: `${post.title} | Velora Journal`,
      description: shortDesc,
      images: [post.img],
      type: "article",
      publishedTime: post.date,
    }
  }
}

export default async function JournalPost({ params }) {
  const { slug } = await params;
  const post = journalPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="relative bg-velora-sand min-h-screen selection:bg-velora-black selection:text-velora-white pt-24">
      <FloatingNavbar />
      
      <article className="px-6 lg:px-12 max-w-[800px] mx-auto mb-24 pt-12">
        
        <Link href="/journal" className="inline-flex items-center gap-2 text-sm font-medium text-velora-black/50 hover:text-velora-black transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" />
          Back to Journal
        </Link>

        <div className="flex items-center gap-4 text-xs font-medium text-velora-black/50 mb-6">
          <span className="uppercase tracking-wider">{post.category}</span>
          <span className="w-1 h-1 rounded-full bg-velora-black/20" />
          <span>{post.date}</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-heading font-medium tracking-tight mb-12 leading-[1.1]">
          {post.title}
        </h1>

        <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden mb-16 border border-velora-sand-dark/20 bg-velora-sand-dark/10">
          <Image 
            src={post.img} 
            alt={post.title} 
            fill 
            className="object-cover" 
            priority
            sizes="100vw"
          />
        </div>

        <div className="prose prose-lg prose-neutral max-w-none text-velora-black/80">
          {post.content.map((block, index) => {
            if (block.type === "paragraph") {
              return <p key={index} className="mb-6 leading-relaxed">{block.text}</p>;
            }
            if (block.type === "h2") {
              return <h2 key={index} className="text-3xl font-heading font-medium tracking-tight mt-12 mb-6 text-velora-black">{block.text}</h2>;
            }
            if (block.type === "image") {
              return (
                <div key={index} className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden my-12 bg-velora-sand-dark/10">
                  <Image src={block.src} alt={block.alt || "Journal image"} fill className="object-cover" sizes="100vw" />
                </div>
              );
            }
            if (block.type === "quote") {
              return (
                <blockquote key={index} className="border-l-2 border-velora-black pl-6 my-12 text-2xl md:text-3xl font-heading italic text-velora-black">
                  "{block.text}"
                </blockquote>
              );
            }
            return null;
          })}
        </div>

      </article>

      <Footer />
    </main>
  );
}
