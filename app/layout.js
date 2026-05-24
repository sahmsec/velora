import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: "%s | Velora",
    default: "Velora | Premium Wellness & Reformer Fitness",
  },
  description: "Experience luxury minimal wellness with Velora. Architecturally designed Pilates reformers, strength equipment, and home gym systems crafted for your sanctuary.",
  keywords: ["Pilates Reformer", "Luxury Home Gym", "Fitness Equipment", "Wellness", "Design", "Velora"],
  openGraph: {
    title: "Velora | Premium Wellness",
    description: "Architecturally designed Pilates reformers and home gym systems.",
    url: "https://velora.vercel.app",
    siteName: "Velora",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Velora | Premium Wellness",
    description: "Architecturally designed Pilates reformers and home gym systems.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-velora-sand text-velora-black">
        <CartProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
