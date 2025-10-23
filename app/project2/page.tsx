"use client";

import React, { useRef, useLayoutEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Stars, Sparkles, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ChevronDown, Compass, Landmark, Crown, Waves } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// --- 3D Components ---

// Abstract Eiffel Tower
function EiffelTower({ opacity = 1, ...props }) {
  const groupRef = useRef(null);
  const materialProps = {
    color: "#b8860b", // Dark Goldenrod
    roughness: 0.3,
    metalness: 0.8,
    wireframe: true,
    transparent: true,
    opacity: opacity,
  };

  return (
    <group ref={groupRef} {...props}>
      {/* Base */}
      <mesh position={[0, -4, 0]}>
        <cylinderGeometry args={[3, 6, 4, 4, 1, true]} />
        <meshStandardMaterial {...materialProps} side={THREE.DoubleSide} />
      </mesh>
      {/* Mid section */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[1.5, 2.8, 4.5, 4, 1, true]} />
        <meshStandardMaterial {...materialProps} side={THREE.DoubleSide} />
      </mesh>
      {/* Top section */}
      <mesh position={[0, 3.5, 0]}>
        <cylinderGeometry args={[0.1, 1.4, 5, 4, 1, true]} />
        <meshStandardMaterial {...materialProps} side={THREE.DoubleSide} />
      </mesh>
      {/* Spire / Antenna */}
      <mesh position={[0, 6.5, 0]}>
        <cylinderGeometry args={[0.01, 0.1, 1, 8]} />
        <meshStandardMaterial color="#ffd700" metalness={1} roughness={0.1} transparent opacity={opacity} />
      </mesh>
      <Sparkles count={50} scale={12} size={2} speed={0.4} opacity={0.5 * opacity} color="#ffd700" />
    </group>
  );
}

// Abstract Versailles Gates
function VersaillesGates({ opacity = 1, ...props }) {
  const group = useRef();
  
  // Create array of fence posts
  const posts = Array.from({ length: 11 }, (_, i) => i - 5);

  return (
    <group ref={group} {...props}>
      {posts.map((x, i) => (
        <group key={i} position={[x * 1.2, 0, 0]}>
          {/* Post */}
          <mesh position={[0, 0, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.4, 6 + Math.sin(i) * 0.5, 0.4]} />
            <meshStandardMaterial 
              color="#FFD700" 
              metalness={0.9} 
              roughness={0.1} 
              transparent 
              opacity={opacity} 
            />
          </mesh>
          {/* Ornate Top */}
          <mesh position={[0, 3 + Math.sin(i) * 0.25 + 0.3, 0]}>
            <sphereGeometry args={[0.35, 16, 16]} />
            <meshStandardMaterial color="#ffffff" metalness={1} roughness={0} transparent opacity={opacity} />
          </mesh>
        </group>
      ))}
      {/* Floor Reflection Hint */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3.1, 5]}>
        <planeGeometry args={[20, 20]} />
        <MeshDistortMaterial 
          speed={1} 
          distort={0.4} 
          color="#1a1a1a" 
          roughness={0.1} 
          metalness={0.8}
          transparent
          opacity={opacity * 0.8}
        />
      </mesh>
    </group>
  );
}

// Abstract Mont Saint-Michel
function MontSaintMichel({ opacity = 1, ...props }) {
  return (
    <group {...props}>
      {/* The Island Base */}
      <mesh position={[0, -2, 0]}>
        <coneGeometry args={[5, 4, 7]} />
        <meshStandardMaterial color="#555" roughness={0.9} flatShading transparent opacity={opacity} />
      </mesh>
      {/* The Abbey Base */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[1.5, 3, 3, 8]} />
        <meshStandardMaterial color="#e2d8b3" roughness={0.5} transparent opacity={opacity} />
      </mesh>
      {/* The Abbey Spire */}
      <mesh position={[0, 3, 0]}>
        <coneGeometry args={[0.5, 4, 8]} />
        <meshStandardMaterial color="#e2d8b3" roughness={0.5} transparent opacity={opacity} />
      </mesh>
      {/* Golden Statue Top */}
      <mesh position={[0, 5.1, 0]}>
        <octahedronGeometry args={[0.3, 0]} />
        <meshStandardMaterial color="gold" emissive="gold" emissiveIntensity={2} transparent opacity={opacity} />
      </mesh>

      {/* Water */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3.8, 0]}>
        <circleGeometry args={[20, 32]} />
        <MeshDistortMaterial
          color="#1e3a8a"
          roughness={0.1}
          metalness={0.8}
          distort={0.3}
          speed={2}
          transparent
          opacity={opacity * 0.8}
        />
      </mesh>
    </group>
  );
}

// --- Scene Orchestrator ---
function Scene({ scrollTriggerRef }) {
  const { camera, scene } = useThree();
  const eiffelRef = useRef();
  const versaillesRef = useRef();
  const msmRef = useRef();
  const lightRef = useRef();

  useLayoutEffect(() => {
    if (!scrollTriggerRef.current) return;

    // Initial Camera Setup
    camera.position.set(0, -8, 10);
    camera.lookAt(0, 4, 0);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollTriggerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      },
    });

    // --- PHASE 1: PARIS (0% - 30%) ---
    tl.to(camera.position, { x: 0, y: 2, z: 14, duration: 3, ease: "power1.inOut" }, 0);
    tl.to(camera.position, { x: 5, z: 10, duration: 3, ease: "sine.inOut" }, 0);
    tl.to(eiffelRef.current.rotation, { y: -Math.PI * 0.5, duration: 3, ease: "none" }, 0);
    
    // --- TRANSITION 1: TO VERSAILLES (30% - 40%) ---
    tl.to(eiffelRef.current.position, { y: -30, duration: 2, ease: "power2.in" }, 3);
    tl.to(eiffelRef.current.scale, { x: 0.1, y: 0.1, z: 0.1, duration: 2 }, 3);
    
    tl.fromTo(versaillesRef.current.position, 
      { y: -20 }, 
      { y: -1, duration: 2, ease: "power3.out" }, 
      3.5
    );
    tl.fromTo(versaillesRef.current.rotation, { y: Math.PI / 4 }, { y: 0, duration: 2 }, 3.5);
    tl.to(camera.position, { x: 0, y: 1, z: 10, duration: 2, ease: "power2.inOut" }, 3.5);

    // --- PHASE 2: VERSAILLES (40% - 65%) ---
    // Move camera "through" the gates
    tl.to(camera.position, { z: 0, y: 0.5, duration: 3, ease: "none" }, 5.5);
    tl.to(versaillesRef.current.position, { z: 5, duration: 3, ease: "none" }, 5.5);


    // --- TRANSITION 2: TO MSM (65% - 75%) ---
    tl.to(versaillesRef.current.position, { y: 20, opacity: 0, duration: 2, ease: "power2.in" }, 8);
    
    tl.fromTo(msmRef.current.position,
      { y: -50, scale: 0.5 },
      { y: -1, scale: 1, duration: 3, ease: "elastic.out(1, 0.75)" },
      8.5
    );
    tl.to(camera.position, { x: 0, y: 2, z: 18, duration: 2, ease: "power2.out" }, 8.5);

    // --- PHASE 3: MONT SAINT-MICHEL (75% - 100%) ---
    // Spiral up
    tl.to(camera.position, { x: 8, z: 8, y: 4, duration: 3, ease: "sine.inOut" }, 11);
    tl.to(msmRef.current.rotation, { y: Math.PI * 0.4, duration: 3, ease: "none" }, 11);
    tl.to(camera.position, { x: 0, z: 12, y: 8, duration: 2, ease: "sine.inOut" }, 14);


  }, [camera, scrollTriggerRef]);

  // Subtle camera drift for liveness
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    camera.position.x += Math.sin(t * 0.5) * 0.02;
    camera.position.y += Math.cos(t * 0.5) * 0.02;
    
    // Always look slightly above origin to keep landmarks centered
    camera.lookAt(0, 2, 0);
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <spotLight 
        ref={lightRef}
        position={[10, 20, 10]} 
        angle={0.3} 
        penumbra={1} 
        intensity={2} 
        castShadow 
        color="#ffeedd"
      />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#aaccff" />
      
      <Environment preset="sunset" />
      <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />

      <EiffelTower ref={eiffelRef} position={[0, 0, 0]} rotation={[0, Math.PI / 4, 0]} />
      <VersaillesGates ref={versaillesRef} position={[0, -50, 0]} />
      <MontSaintMichel ref={msmRef} position={[0, -50, 0]} />
    </>
  );
}

// --- Main Component ---
export default function FranceJourney() {
  const mainContainerRef = useRef(null);

  // GSAP UI Animations
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate sections fading in and out based on scroll position
      gsap.utils.toArray('.content-section').forEach((section: any, i) => {
        gsap.fromTo(section, 
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: section,
              start: "top center+=100",
              end: "bottom center-=100",
              toggleActions: "play reverse play reverse",
              scrub: true,
            }
          }
        );
      });

      // Hero specific
      gsap.fromTo('#hero-text', { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 2, delay: 0.5, ease: "power3.out" });

    }, mainContainerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainContainerRef} className="bg-neutral-950 text-[#e2d8b3] font-sans overflow-x-hidden">
      
      {/* Fixed 3D Background */}
      <div className="fixed top-0 left-0 w-full h-screen z-0">
        <Canvas shadows dpr={[1, 2]} gl={{ antialias: true, alpha: false }}>
          <color attach="background" args={['#0a0a0a']} />
          <fog attach="fog" args={['#0a0a0a', 15, 55]} />
          <React.Suspense fallback={null}>
             <Scene scrollTriggerRef={mainContainerRef} />
          </React.Suspense>
        </Canvas>
      </div>

      {/* Scrollable Content Track (Invisible height driver) */}
      <div className="relative z-10">
        
        {/* Hero Section (0% scroll) */}
        <section className="h-screen flex flex-col items-center justify-center text-center p-6 relative">
          <div id="hero-text" className="max-w-4xl mx-auto space-y-6 mix-blend-difference">
            <div className="flex items-center justify-center gap-3 text-[#b8860b] mb-4">
               <Compass size={32} />
               <span className="uppercase tracking-[0.5em] text-sm font-bold">Immersive Expedition</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-[#e2d8b3]">
              France:
              <br />
              A Journey Beyond Time
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              Scroll to begin your companion voyage through the beating heart of history.
            </p>
          </div>
          <div className="absolute bottom-12 animate-bounce">
            <ChevronDown size={36} className="text-[#b8860b] opacity-80" />
          </div>
        </section>

        {/* Spacer for scroll timing */}
        <div className="h-[50vh]" />

        {/* Paris Section (approx 20% scroll) */}
        <section className="h-screen flex items-center p-6 content-section md:justify-end md:pr-24">
          <div className="max-w-lg bg-black/40 backdrop-blur-md p-10 rounded-sm border-l-2 border-[#b8860b] shadow-2xl">
            <Landmark className="mb-6 text-[#b8860b]" size={40} />
            <h2 className="text-4xl font-serif mb-4 text-white">The Iron Lady & <br/> The Heart of Paris</h2>
            <p className="text-lg text-gray-200 leading-relaxed mb-4">
              Constructed in 1889, the Eiffel Tower was initially criticized by Paris's artists. Today, it stands as the eternal symbol of romance and engineering marvel, watching over the Seine as it winds past Notre-Dame and the Louvre.
            </p>
            <span className="text-sm text-[#b8860b] uppercase tracking-widest font-semibold">
              Elevation: 330 Meters
            </span>
          </div>
        </section>

        {/* Spacer */}
        <div className="h-[100vh]" />

        {/* Versailles Section (approx 50% scroll) */}
        <section className="h-screen flex items-center p-6 content-section md:justify-start md:pl-24">
          <div className="max-w-lg bg-black/40 backdrop-blur-md p-10 rounded-sm border-r-2 border-[#b8860b] shadow-2xl text-right md:text-left">
            <div className="flex justify-end md:justify-start">
                <Crown className="mb-6 text-[#b8860b]" size={40} />
            </div>
            <h2 className="text-4xl font-serif mb-4 text-white">Royal Splendor of Versailles</h2>
            <p className="text-lg text-gray-200 leading-relaxed mb-4">
              The opulent vision of Louis XIV. Through these golden gates lies the Hall of Mirrors, where treaties were signed and history was forged in reflection. A testament to absolute monarchy and artistic grandeur.
            </p>
            <span className="text-sm text-[#b8860b] uppercase tracking-widest font-semibold">
              Visitors: 15 Million / Year
            </span>
          </div>
        </section>

        {/* Spacer */}
        <div className="h-[100vh]" />

        {/* Mont Saint-Michel Section (approx 80% scroll) */}
        <section className="h-screen flex items-center justify-center p-6 content-section">
          <div className="max-w-2xl text-center bg-black/30 backdrop-blur-lg p-12 rounded-full border border-[#b8860b]/30 shadow-2xl">
            <Waves className="mx-auto mb-6 text-[#b8860b]" size={40} />
            <h2 className="text-5xl font-serif mb-6 text-white">The Legend of the Tides</h2>
            <p className="text-xl text-gray-200 leading-relaxed">
              Defying the sea for centuries, Mont Saint-Michel is a marvel of medieval architecture. At high tide, it becomes an island, separated from the world—a spiritual fortress rising from the waters of Normandy.
            </p>
          </div>
        </section>

        {/* Final Spacer to allow full scroll completion */}
        <div className="h-[150vh]" />
        
        <footer className="h-[50vh] flex items-end justify-center pb-12 bg-gradient-to-t from-black to-transparent">
             <p className="text-gray-500 uppercase tracking-widest text-sm">Fin du Voyage</p>
        </footer>

      </div>
    </div>
  );
}
