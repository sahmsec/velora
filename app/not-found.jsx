import Link from "next/link";
import FloatingNavbar from "@/components/FloatingNavbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="relative bg-velora-sand h-screen w-full overflow-hidden flex flex-col selection:bg-velora-black selection:text-velora-white">
      <FloatingNavbar />
      
      <section className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-9xl md:text-[16rem] font-heading font-medium tracking-tight text-velora-black/5 leading-none mb-0 md:-mb-12">
          404
        </h1>
        <h2 className="text-4xl md:text-6xl font-heading font-medium tracking-tight mb-6 z-10">
          Space Not Found
        </h2>
        <p className="text-velora-black/60 max-w-md text-lg md:text-xl mb-12 z-10">
          The page you are looking for has been moved or no longer exists. Let's get you back to your sanctuary.
        </p>
        
        <Link 
          href="/" 
          className="z-10 bg-velora-black text-velora-white px-10 py-5 rounded-full font-medium hover:bg-black/80 transition-transform hover:scale-105"
        >
          Return Home
        </Link>
      </section>
    </main>
  );
}
