"use client";


import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  ExternalLink, 
  Code2, 
  Palette, 
  Terminal, 
  Cpu, 
  Globe, 
  ArrowUpRight,
  MapPin,
  Briefcase,
  Coffee,
  Moon,
  Sun
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- Utils ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Data ---
const PROJECTS = [
  {
    title: "Neon Nexus",
    description: "A decentralized trading platform with real-time WebSocket data visualization and AI-driven predictive analytics.",
    tags: ["Next.js", "TypeScript", "Solana", "Tailwind"],
    link: "#",
    github: "#",
    featured: true
  },
  {
    title: "Vapor UI",
    description: "An open-source React component library focusing on glassmorphism and highly animated interactive primitives.",
    tags: ["React", "Framer Motion", "Storybook"],
    link: "#",
    github: "#",
    featured: true
  },
  {
    title: "Chronos CLI",
    description: "A Rust-based command line tool for developers to track time spent on different git branches automatically.",
    tags: ["Rust", "Clap", "SQLite"],
    link: "#",
    github: "#",
    featured: false
  },
  {
    title: "Aether Notes",
    description: "Minimalist markdown note-taking app with end-to-end encryption and local-first sync architecture.",
    tags: ["Electron", "React", "CRDTs"],
    link: "#",
    github: "#",
    featured: false
  }
];

const SKILLS = [
  { name: "Frontend", icon: <Globe className="w-4 h-4" />, tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { name: "Backend", icon: <Terminal className="w-4 h-4" />, tools: ["Node.js", "PostgreSQL", "Redis", "Go", "GraphQL"] },
  { name: "Design", icon: <Palette className="w-4 h-4" />, tools: ["Figma", "UI/UX Principles", "Design Systems"] }
];

// --- Animations ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

// --- Components ---

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300",
        scrolled ? "bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50" : "bg-transparent"
      )}
    >
      <div className="text-zinc-100 font-bold text-xl tracking-tighter flex items-center gap-2">
        <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
          <span className="text-white text-sm">A.D</span>
        </div>
      </div>
      <div className="flex items-center gap-6 text-sm font-medium text-zinc-400">
        <a href="#about" className="hover:text-zinc-100 transition-colors hidden sm:block">About</a>
        <a href="#projects" className="hover:text-zinc-100 transition-colors hidden sm:block">Projects</a>
        <a href="#contact" className="hover:text-zinc-100 transition-colors">Contact</a>
        <button className="bg-zinc-100 text-zinc-900 px-4 py-2 rounded-full font-semibold hover:bg-indigo-500 hover:text-white transition-all">
          Resume
        </button>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 pt-20 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-[128px] -z-10" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-violet-500/10 rounded-full blur-[128px] -z-10" />

      <div className="max-w-5xl mx-auto w-full">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-2 text-indigo-400 font-medium tracking-wide uppercase text-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
            </span>
            Available for work
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-zinc-100 leading-[1.1]">
            Crafting digital <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
              experiences.
            </span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="max-w-2xl text-lg md:text-xl text-zinc-400 leading-relaxed">
            I'm Alex Doe, a full-stack engineer focused on building accessible, 
            high-performance web applications with meticulous attention to design and detail.
          </motion.p>

          <motion.div variants={fadeInUp} className="pt-8 flex flex-wrap gap-4">
            <a 
              href="#projects"
              className="flex items-center gap-2 bg-zinc-100 text-zinc-950 px-6 py-3 rounded-full font-semibold hover:bg-indigo-500 hover:text-white transition-all group"
            >
              See my work
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <div className="flex items-center gap-4 px-6">
              <a href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 text-sm"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-800 to-zinc-500/0" />
      </motion.div>
    </section>
  );
};

const BentoGrid = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100">About Me</h2>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]"
        >
          {/* Main Bio Tile */}
          <motion.div 
            variants={fadeInUp}
            className="md:col-span-2 md:row-span-2 bg-zinc-900/50 border border-zinc-800/50 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             
             <div className="relative z-10">
              <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center mb-4">
                <Coffee className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-zinc-100 mb-4">More than just code</h3>
              <p className="text-zinc-400 leading-relaxed">
                I bridge the gap between engineering and design. With 5+ years of experience, I've helped startups launch products from zero to one, and assisted established companies in scaling their frontend architecture. I'm passionate about open source, UI library design, and developer experience.
              </p>
             </div>
          </motion.div>

          {/* Location Tile */}
          <motion.div 
            variants={fadeInUp}
            className="bg-zinc-900/50 border border-zinc-800/50 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <MapPin className="w-8 h-8 text-emerald-400/80" />
             <div>
               <p className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">Based in</p>
               <p className="text-lg font-medium text-zinc-200">San Francisco, CA</p>
             </div>
          </motion.div>

          {/* Experience Tile */}
          <motion.div 
            variants={fadeInUp}
            className="bg-zinc-900/50 border border-zinc-800/50 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <Briefcase className="w-8 h-8 text-blue-400/80" />
             <div>
               <p className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">Experience</p>
               <p className="text-lg font-medium text-zinc-200">5+ Years</p>
             </div>
          </motion.div>

          {/* Tech Stack Tile */}
          <motion.div 
            variants={fadeInUp}
            className="md:col-span-2 bg-zinc-900/50 border border-zinc-800/50 rounded-3xl p-8 relative overflow-hidden group flex flex-col justify-center"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             
             <div className="relative z-10">
               <h4 className="text-sm uppercase tracking-wider text-zinc-500 font-semibold mb-6">Current Stack</h4>
               <div className="flex flex-wrap gap-3">
                 {["React", "Next.js", "TypeScript", "Tailwind", "Node.js", "PostgreSQL"].map((tech) => (
                   <span key={tech} className="px-4 py-2 bg-zinc-800/50 text-zinc-300 rounded-full text-sm font-medium border border-zinc-700/50">
                     {tech}
                   </span>
                 ))}
               </div>
             </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-zinc-950/50">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4"
        >
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100">Selected Work</h2>
            <p className="text-zinc-400 mt-2">A collection of projects I've built recently.</p>
          </div>
          <a href="#" className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 text-sm font-medium transition-colors">
            View Github <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-colors"
            >
              <div className="aspect-video w-full bg-zinc-800 relative overflow-hidden">
                {/* Placeholder for project image with a subtle gradient pattern instead of just gray */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-700 via-zinc-800 to-zinc-900">
                   <div className="w-full h-full opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4=')]" />
                </div>
                {/* Mockup Content Placeholder */}
                <div className="absolute inset-4 mt-8 bg-zinc-950/50 border border-zinc-700/50 rounded-t-lg shadow-2xl translate-y-4 group-hover:translate-y-2 transition-transform duration-500" />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-zinc-100 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <a href={project.github} className="text-zinc-400 hover:text-zinc-100 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.link} className="text-zinc-400 hover:text-zinc-100 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <p className="text-zinc-400 mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-zinc-800 text-zinc-300 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-indigo-900/20 to-zinc-900/50 border border-indigo-500/10 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
        {/* Decorative blurs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-500/20 blur-[100px] -z-10" />
        
        <motion.div
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative z-10 flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-100 mb-6">
            Let's work together.
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mb-8">
            Currently available for freelance work or full-time positions. 
            Drop me a line if you have a project in mind.
          </p>
          
          <a 
            href="mailto:hello@example.com"
            className="flex items-center gap-3 bg-zinc-100 text-zinc-950 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.4)]"
          >
            <Mail className="w-5 h-5" />
            Say Hello
          </a>

          <div className="mt-16 flex items-center gap-6">
             <a href="#" className="p-3 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 hover:text-white hover:border-zinc-600 transition-all hover:scale-110">
               <Github className="w-5 h-5" />
             </a>
             <a href="#" className="p-3 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/50 transition-all hover:scale-110">
               <Linkedin className="w-5 h-5" />
             </a>
             <a href="#" className="p-3 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 hover:text-[#1D9BF0] hover:border-[#1D9BF0]/50 transition-all hover:scale-110">
               <Twitter className="w-5 h-5" />
             </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-8 px-6 border-t border-zinc-900 text-center md:flex md:justify-between md:items-center max-w-5xl mx-auto text-zinc-500 text-sm">
    <p>© {new Date().getFullYear()} Alex Doe. All rights reserved.</p>
    <p className="mt-2 md:mt-0">
      Built with <span className="text-zinc-200">Next.js</span> & <span className="text-zinc-200">Tailwind</span>
    </p>
  </footer>
);

// --- Main Page Component ---
export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Alex Doe | Software Engineer</title>
        <meta name="description" content="Modern portfolio for a full-stack software engineer." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-zinc-950 min-h-screen text-zinc-200 selection:bg-indigo-500/30 overflow-hidden">
        <Nav />
        <Hero />
        <BentoGrid />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
