"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import FloatingNavbar from "@/components/FloatingNavbar";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { data, error: signUpError } = await authClient.signUp.email({
      email,
      password,
      name,
    });
    if (signUpError) {
      setError(signUpError.message || "Registration failed");
    } else {
      router.push("/");
      router.refresh();
    }
    setLoading(false);
  };

  const handleGoogleSignIn = () => {
    authClient.signIn.social({ provider: "google", callbackURL: "/" });
  };

  return (
    <main className="relative bg-velora-sand min-h-screen selection:bg-velora-black selection:text-velora-white flex flex-col md:flex-row-reverse">
      <FloatingNavbar />
      
      {/* Right Side: Image */}
      <div className="hidden md:block md:w-1/2 relative h-screen">
        <Image 
          src="/images/reformer_main.png" 
          alt="Register" 
          fill 
          className="object-cover"
          sizes="50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-12 left-12 right-12 text-white">
          <h2 className="text-4xl font-heading font-medium tracking-tight mb-4">Elevate your living space.</h2>
          <p className="text-white/80 max-w-md text-lg">Join the Velora community to gain exclusive access to premium releases and private atelier events.</p>
        </div>
      </div>

      {/* Left Side: Form */}
      <div className="w-full md:w-1/2 h-screen flex items-center justify-center px-6 lg:px-12 pt-24 md:pt-0 bg-velora-white">
        <div className="w-full max-w-md">
          
          <div className="flex mb-12">
            <Sparkles className="w-8 h-8 text-velora-black" />
          </div>
          
          <h1 className="text-4xl font-heading font-medium tracking-tight mb-2">
            Create Account
          </h1>
          <p className="text-velora-black/60 mb-8">
            Join the community.
          </p>

          <button 
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full bg-white border border-velora-sand-dark/30 text-velora-black py-4 rounded-xl font-medium hover:bg-velora-sand/30 transition-colors flex items-center justify-center gap-3 mb-6 shadow-sm"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
            Continue with Google
          </button>

          <div className="relative flex items-center justify-center mb-6">
            <span className="absolute bg-velora-white px-3 text-xs text-velora-black/40">OR EMAIL</span>
            <div className="w-full h-px bg-velora-sand-dark/20"></div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {error && <p className="text-red-500 text-sm bg-red-50 p-3 rounded-xl border border-red-100">{error}</p>}

            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium uppercase tracking-widest text-velora-black/50">Full Name</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-velora-sand-dark/10 border border-transparent rounded-xl px-4 py-4 outline-none focus:border-velora-black focus:bg-white transition-all" 
                placeholder="Jane Doe" 
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium uppercase tracking-widest text-velora-black/50">Email</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-velora-sand-dark/10 border border-transparent rounded-xl px-4 py-4 outline-none focus:border-velora-black focus:bg-white transition-all" 
                placeholder="jane@example.com" 
                required
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium uppercase tracking-widest text-velora-black/50">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-velora-sand-dark/10 border border-transparent rounded-xl px-4 py-4 outline-none focus:border-velora-black focus:bg-white transition-all" 
                placeholder="••••••••" 
                required
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-velora-black text-velora-white py-4 rounded-xl font-medium hover:bg-black/80 transition-all mt-4 disabled:opacity-70 flex justify-center items-center gap-2 group"
            >
              {loading ? "Processing..." : "Create Account"}
              {!loading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
            </button>
          </form>

          <p className="text-sm text-velora-black/60 mt-8">
            Already have an account?
            <Link href="/login" className="font-medium text-velora-black hover:underline underline-offset-4 ml-2">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
