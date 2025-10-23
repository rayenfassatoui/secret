"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import {
  ArrowRight,
  Play,
  ChevronRight,
  Command,
  Cpu,
  Globe,
  Zap,
  Menu,
  X
} from 'lucide-react';
import Link from 'next/link';

// --- Utility Components ---

const ShinyButton = ({ children, icon: Icon, primary = false }: { children: React.ReactNode, icon?: any, primary?: boolean }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ease-out
        ${primary 
          ? 'bg-white text-black shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] hover:shadow-[0_0_60px_-5px_rgba(255,255,255,0.7)]'
          : 'bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20'
        }`}
    >
      {children}
      {Icon && <Icon className={`w-5 h-5 transition-transform group-hover:translate-x-1`} />}
      {primary && <div className="absolute inset-0 rounded-full bg-white blur-md -z-10 opacity-70 group-hover:opacity-100 transition-opacity" />}
    </motion.button>
  );
};

// --- Background Effects ---

const AuroraBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-50 bg-[#030014]">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      <motion.div
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.2, 1],
          rotate: [0, 20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-purple-600/20 blur-[120px] mix-blend-screen"
      />
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
          x: [0, 50, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[10%] right-[0%] w-[60%] h-[60%] rounded-full bg-indigo-600/20 blur-[120px] mix-blend-screen"
      />
      <motion.div
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute bottom-[0%] left-[20%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[100px] mix-blend-screen"
      />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
    </div>
  );
};

const FloatingParticles = () => {
  // Simulated particles for brevity without heavy canvas
  const particles = Array.from({ length: 20 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-40">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            opacity: Math.random() * 0.5 + 0.2,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [null, Math.random() * -100],
            x: [null, (Math.random() - 0.5) * 50],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

// --- Navigation ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4 bg-black/50 backdrop-blur-xl border-b border-white/10' : 'py-6 bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-shadow">
            <Zap className="w-6 h-6 text-black fill-black" />
          </div>
          <span className="text-2xl font-bold text-white tracking-tight">NEXUS</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {['Features', 'Solutions', 'Vision', 'Pricing'].map((item) => (
            <a key={item} href="#" className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full" />
            </a>
          ))}
          <Link href="/project1" className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group">
            Project1
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full" />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="px-6 py-2.5 text-sm font-medium text-white hover:bg-white/10 rounded-full transition-colors">
            Log in
          </button>
          <button className="px-6 py-2.5 text-sm font-medium bg-white text-black rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_20px_-5px_rgba(255,255,255,0.5)]">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className={`md:hidden overflow-hidden bg-black/90 backdrop-blur-xl border-b border-white/10`}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {['Features', 'Solutions', 'Vision', 'Pricing'].map((item) => (
            <a key={item} href="#" className="text-lg font-medium text-white/80 hover:text-white transition-colors">
              {item}
            </a>
          ))}
          <Link href="/project1" className="text-lg font-medium text-white/80 hover:text-white transition-colors">
            Project1
          </Link>
          <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
            <button className="w-full py-3 text-center font-medium text-white border border-white/20 rounded-full">
              Log in
            </button>
            <button className="w-full py-3 text-center font-medium bg-white text-black rounded-full">
              Get Started
            </button>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

// --- Hero Visual (Simulated 3D Interface) ---

const HeroVisual3D = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const rotateX = useSpring(useTransform(scrollY, [0, 1000], [20, 0]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(scrollY, [0, 1000], [-15, 0]), { stiffness: 100, damping: 30 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    mouseX.set((clientX - left - width / 2) / 25);
    mouseY.set((clientY - top - height / 2) / 25);
  };

  const rotateXMouse = useSpring(useTransform(mouseY, [-20, 20], [20, -20]), { stiffness: 150, damping: 20 });
  const rotateYMouse = useSpring(useTransform(mouseX, [-20, 20], [-20, 20]), { stiffness: 150, damping: 20 });

  return (
    <motion.div
      className="relative w-full max-w-2xl perspective-1000 h-[500px] md:h-[600px] flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      initial={{ opacity: 0, scale: 0.8, rotateX: 30 }}
      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
    >
      {/* Main Interface Card */}
      <motion.div
        style={{ rotateX: rotateXMouse, rotateY: rotateYMouse }}
        className="relative w-full h-full bg-black/40 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-[0_0_100px_-30px_rgba(120,119,198,0.5)] overflow-hidden p-6 flex flex-col"
      >
        {/* Fake UI Header */}
        <div className="flex items-center justify-between mb-8 opacity-50">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex gap-4 text-xs font-mono text-white">
            <span>CPU: 12%</span>
            <span>MEM: 4.2GB</span>
          </div>
        </div>

        {/* Fake Graphs/Data - Abstract Representation */}
        <div className="flex-1 grid grid-cols-3 gap-4">
          <div className="col-span-2 bg-white/5 rounded-xl p-4 border border-white/5 flex flex-col justify-end group overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="h-32 flex items-end gap-1">
              {[40, 60, 35, 80, 65, 85, 45, 60, 75, 90, 55, 70].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 1.5, delay: 0.8 + i * 0.05, ease: "easeOut" }}
                  className="flex-1 bg-gradient-to-t from-indigo-500 to-purple-400 rounded-t-sm opacity-80"
                />
              ))}
            </div>
            <div className="mt-4 h-2 w-1/2 bg-white/10 rounded-full" />
            <div className="mt-2 h-2 w-1/3 bg-white/10 rounded-full" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex-1 bg-white/5 rounded-xl border border-white/5 p-4 relative overflow-hidden">
                <Globe className="text-purple-400/50 absolute -bottom-4 -right-4 w-24 h-24" />
                <div className="text-2xl font-bold text-white">98.2%</div>
                <div className="text-xs text-white/50">Global Uptime</div>
            </div>
            <div className="flex-1 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl border border-white/10 p-4 flex items-center justify-center">
                 <Cpu className="w-12 h-12 text-white/80" />
            </div>
          </div>
        </div>

        <div className="mt-6 h-16 bg-white/5 rounded-xl border border-white/5 flex items-center px-4 justify-between">
           <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Command className="w-4 h-4 text-blue-400" />
              </div>
              <div className="h-2 w-24 bg-white/20 rounded-full" />
           </div>
           <div className="flex gap-1">
              {[1,2,3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-white/20" />)}
           </div>
        </div>

      </motion.div>

      {/* Floating Elements around the main card for depth */}
      <motion.div 
        style={{ y: useTransform(scrollY, [0, 500], [0, -50]), x: -20, rotate: -5 }}
        className="absolute -left-12 top-1/4 w-48 h-48 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl -z-10 shadow-2xl p-4 flex flex-col justify-between"
        animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
              <Zap className="w-4 h-4 text-yellow-400" />
          </div>
          <div className="space-y-2">
              <div className="h-2 w-full bg-white/10 rounded-full" />
              <div className="h-2 w-2/3 bg-white/10 rounded-full" />
          </div>
      </motion.div>
      
      <motion.div 
        style={{ y: useTransform(scrollY, [0, 500], [0, 80]), x: 20, rotate: 5 }}
        className="absolute -right-16 -bottom-12 w-56 h-36 bg-indigo-950/40 backdrop-blur-xl border border-indigo-500/20 rounded-2xl z-20 shadow-2xl flex items-center justify-center"
        animate={{ y: [0, 15, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
          <div className="text-center">
             <div className="text-3xl font-bold text-white tracking-tighter">+450%</div>
             <div className="text-sm text-indigo-200">Efficiency Boost</div>
          </div>
      </motion.div>
    </motion.div>
  );
};

// --- Main Page Component ---

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#030014] text-white overflow-x-hidden selection:bg-purple-500/30">
      <AuroraBackground />
      <FloatingParticles />
      <Navbar />

      <main className="relative pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-8 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col items-start z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium text-white/80">v3.0 is now live</span>
              <ChevronRight className="w-4 h-4 text-white/50" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[1.1] mb-6"
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">
                Design
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
                The Future.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl text-white/60 max-w-xl mb-10 leading-relaxed"
            >
              Unleash unparalleled creativity with tools that defy convention. 
              Build breathtaking, high-performance experiences that leave a lasting 
              impact on every visitor.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <ShinyButton primary icon={ArrowRight}>Start Creating</ShinyButton>
              <ShinyButton icon={Play}>Watch Showreel</ShinyButton>
            </motion.div>

            {/* Trust Badge / Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="mt-16 pt-8 border-t border-white/10 w-full max-w-md flex flex-col gap-4"
            >
              <p className="text-sm text-white/40 uppercase tracking-widest font-semibold">Trusted by visionaries at</p>
              <div className="flex items-center gap-8 opacity-50 grayscale mix-blend-screen">
                 {/* Placeholder Logos matching the aesthetic */}
                 <div className="h-6 w-24 bg-white/20 rounded animate-pulse" />
                 <div className="h-8 w-8 bg-white/20 rounded-full animate-pulse" />
                 <div className="h-6 w-20 bg-white/20 rounded animate-pulse" />
                 <div className="h-6 w-28 bg-white/20 rounded animate-pulse" />
              </div>
            </motion.div>
          </div>

          {/* Right Content - 3D Visual */}
          <div className="relative z-10 perspective-1000 md:-ml-12 lg:ml-0">
             <HeroVisual3D />
          </div>

        </div>
      </main>
      
      {/* Gradient Fade at bottom to blend if more content were added */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030014] to-transparent pointer-events-none" />
    </div>
  );
}
