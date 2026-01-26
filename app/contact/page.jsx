// app/contact/page.jsx
import FloatingNavbar from "@/components/FloatingNavbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="relative bg-velora-sand min-h-screen pt-32 selection:bg-velora-black selection:text-velora-white">
      <FloatingNavbar />
      
      <section className="px-6 lg:px-12 max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32 mb-24">
        <div className="flex-1">
          <h1 className="text-5xl md:text-7xl font-heading font-medium tracking-tight mb-8">Get in touch.</h1>
          <p className="text-velora-black/70 text-lg mb-12">Whether you're inquiring about our equipment, booking a viewing, or need support with your order, our dedicated team is here to assist you.</p>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xs font-medium uppercase tracking-widest text-velora-black/50 mb-2">Showroom</h3>
              <p className="font-medium">100 Premium Way, Suite 400<br/>Copenhagen, Denmark</p>
            </div>
            <div>
              <h3 className="text-xs font-medium uppercase tracking-widest text-velora-black/50 mb-2">Contact</h3>
              <p className="font-medium">hello@velora.com<br/>+45 12 34 56 78</p>
            </div>
            <div>
              <h3 className="text-xs font-medium uppercase tracking-widest text-velora-black/50 mb-2">Hours</h3>
              <p className="font-medium">Mon - Fri: 9am - 6pm<br/>Sat: 10am - 4pm</p>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full max-w-xl">
          <form className="bg-velora-white p-8 md:p-12 rounded-3xl border border-velora-sand-dark/20 shadow-sm flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Name</label>
              <input type="text" className="bg-velora-sand-dark/10 border border-velora-sand-dark/30 rounded-xl px-4 py-3 outline-none focus:border-velora-black transition-colors" placeholder="Jane Doe" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Email</label>
              <input type="email" className="bg-velora-sand-dark/10 border border-velora-sand-dark/30 rounded-xl px-4 py-3 outline-none focus:border-velora-black transition-colors" placeholder="jane@example.com" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Message</label>
              <textarea rows="4" className="bg-velora-sand-dark/10 border border-velora-sand-dark/30 rounded-xl px-4 py-3 outline-none focus:border-velora-black transition-colors resize-none" placeholder="How can we help?"></textarea>
            </div>
            <button type="button" className="w-full bg-velora-black text-velora-white py-4 rounded-xl font-medium hover:bg-black/80 transition-colors mt-4">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
