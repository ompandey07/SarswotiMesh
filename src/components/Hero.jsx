import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Grid3x3, ShieldCheck, Zap, Volume2, VolumeX, CheckCircle2, Factory, Sparkles, Cpu } from "lucide-react";
import Bi from "./Bi";
import { images } from "@/data/content";
import heroVideo from "@/assets/video/hero-section.mp4";
import { animate, utils } from "animejs";

export default function Hero() {
  const videoRef = useRef(null);
  const heroRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }

    if (heroRef.current) {
      const items = heroRef.current.querySelectorAll(".hero-animate-el");
      if (items.length) {
        animate(items, {
          translateY: [35, 0],
          opacity: [0, 1],
          delay: utils.stagger(120, { start: 100 }),
          duration: 850,
          ease: "outCubic",
        });
      }
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="home" className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-28 pb-16 transition-colors duration-300">
      {/* Background Video Layer at z-0 */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={images.heroSection.src}
          className="h-full w-full object-cover scale-105 filter brightness-110 contrast-[1.08]"
        />

        {/* High-visibility contrast gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/90 via-bg/50 to-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/95 via-bg/50 to-bg/85" />
      </div>

      {/* Signature Mesh Pattern Grid */}
      <div className="mesh-bg z-0 opacity-20" />

      <div ref={heroRef} className="container-app relative z-10 my-auto py-6">
        {/* Top Notification Bar */}
        <div className="hero-animate-el flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wider">
            {/* FIRST IN CHITWAN HIGHLIGHT BADGE */}
            <div className="flex items-center gap-2 border border-amber-500/60 bg-amber-500/10 dark:bg-amber-500/20 px-3.5 py-1.5 text-amber-800 dark:text-amber-300 shadow-xs font-black">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping bg-amber-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 bg-amber-500" />
              </span>
              <Bi ne="चितवन, नेपालको पहिलो मेश जाली उद्योग" en="1st Wire Mesh Factory in Chitwan, Nepal" />
            </div>

            <div className="hidden sm:flex items-center gap-1.5 text-accent-2 border border-accent-2/40 bg-surface px-3 py-1.5 font-mono font-bold">
              <span>२५-२८ वर्षको अनुभव</span>
              <span className="text-steel-dim">|</span>
              <span>25–28 Years Experience</span>
            </div>

            <div className="hidden lg:flex items-center gap-1.5 text-steel border border-line bg-surface px-3 py-1.5">
              <MapPin size={14} className="text-accent-2" />
              <Bi ne="भरतपुर, न्युरोड • ०५६-५९५३४५" en="Bharatpur Nayaroad • 056-595345" />
            </div>
          </div>

          {/* SINGLE Audio Toggle Button */}
          <button
            type="button"
            onClick={toggleMute}
            className="flex items-center gap-2 border border-accent-2 bg-surface px-4 py-1.5 text-xs font-black uppercase tracking-wider text-ink hover:border-accent hover:text-accent-2 transition-colors shadow-sm ml-auto"
            title={isMuted ? "Unmute Background Sound" : "Mute Sound"}
          >
            {isMuted ? <VolumeX size={15} className="text-steel-dim" /> : <Volume2 size={15} className="text-accent-2 animate-pulse" />}
            <span>{isMuted ? "AUDIO OFF (UNMUTE)" : "AUDIO ON"}</span>
          </button>
        </div>

        {/* 2-Column Split Layout */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          {/* Left Column: Headlines, Lead & Action Buttons */}
          <div>
            <div className="hero-animate-el inline-flex items-center gap-2 border-l-2 border-accent-2 pl-3.5 py-0.5 mb-4 text-xs font-black uppercase tracking-widest text-accent-2">
              <Bi ne="चितवन नेपालको पहिलो ग्याल्भनाइज्ड जाली उद्योग — २५–२८ वर्षको अनुभव" en="FIRST IN CHITWAN, NEPAL • 25–28 YEARS OF MANUFACTURING LEGACY" />
            </div>

            <h1 className="hero-animate-el text-balance text-3xl sm:text-5xl lg:text-[4rem] lg:leading-[1.03] font-black tracking-tight uppercase text-ink">
              <span className="block lang-ne">चितवनको पहिलो जाली उद्योग।</span>
              <span className="block lang-ne text-gradient-accent">२५-२८ वर्षको भरपर्दो निर्माण।</span>
              <span className="block lang-en">FIRST IN CHITWAN, NEPAL.</span>
              <span className="block lang-en text-gradient-accent">25–28 YEARS OF EXCELLENCE.</span>
            </h1>

            {/* Feature Highlight Badges */}
            <div className="hero-animate-el mt-6 flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wider text-steel">
              <span className="border border-amber-500/60 bg-amber-500/10 dark:bg-amber-500/20 text-amber-800 dark:text-amber-300 px-3 py-1 flex items-center gap-1.5 font-black">
                <CheckCircle2 size={13} className="text-amber-600 dark:text-amber-400" />
                First in Chitwan, Nepal
              </span>
              <span className="border border-line bg-surface px-3 py-1 flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-accent-2" />
                25-28 Years Legacy
              </span>
              <span className="border border-line bg-surface px-3 py-1 flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-accent-2" />
                14+ Product Lineups
              </span>
            </div>

            {/* Action Buttons */}
            <div className="hero-animate-el mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#products"
                className="group inline-flex items-center gap-3 h-14 px-8 border border-accent-2 bg-accent-2 text-[#0a0c0e] font-black uppercase tracking-wider hover:bg-accent hover:text-white transition-colors shadow-md"
              >
                <Bi ne="१४+ उत्पादनहरू हेर्नुहोस्" en="Explore All 14 Products" />
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 h-14 px-8 border border-line bg-surface text-ink font-extrabold uppercase tracking-wider hover:border-accent-2 hover:text-accent-2 transition-colors shadow-sm"
              >
                <Bi ne="कोटेसन / अर्डर गर्नुहोस्" en="Request Factory Quote" />
              </a>
            </div>
          </div>

          {/* Right Column: Full-Feel Immersive Animated Wire Mesh SVG Artwork (Unboxed) */}
          <div className="hero-animate-el relative w-full h-[400px] sm:h-[480px] lg:h-[540px] flex items-center justify-center select-none">
            {/* Ambient Glowing Background Atmosphere */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-2/30 via-amber-500/20 to-transparent blur-3xl rounded-full opacity-80 animate-pulse pointer-events-none" />

            {/* DIRECT SVG ARTWORK - FULL FEEL UNBOXED */}
            <svg
              className="w-full h-full drop-shadow-[0_15px_35px_rgba(201,122,61,0.25)] relative z-10"
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Metallic Gold & Bronze Gradients */}
                <linearGradient id="heroWireGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--color-accent-2)" stopOpacity="1" />
                  <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="var(--color-accent-2)" stopOpacity="0.6" />
                </linearGradient>

                {/* Full Wire Mesh Pattern */}
                <pattern id="fullHeroMeshPattern" width="50" height="70" patternUnits="userSpaceOnUse">
                  <path
                    d="M 0 35 L 25 0 L 50 35 L 25 70 Z"
                    fill="none"
                    stroke="var(--color-accent-2)"
                    strokeWidth="1.8"
                    strokeOpacity="0.75"
                  />
                  <circle cx="25" cy="35" r="2.5" fill="var(--color-accent-2)" />
                </pattern>
              </defs>

              {/* Background Full Grid Pattern */}
              <rect width="500" height="500" fill="url(#fullHeroMeshPattern)" opacity="0.35" />

              {/* Concentric Rotating Radar Rings */}
              <motion.g
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                style={{ transformOrigin: "250px 250px" }}
              >
                <circle cx="250" cy="250" r="210" fill="none" stroke="var(--color-accent-2)" strokeWidth="1.5" strokeDasharray="12 8" strokeOpacity="0.4" />
                <circle cx="250" cy="250" r="180" fill="none" stroke="var(--color-accent-2)" strokeWidth="2" strokeDasharray="20 10" strokeOpacity="0.6" />
              </motion.g>

              <motion.g
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
                style={{ transformOrigin: "250px 250px" }}
              >
                <circle cx="250" cy="250" r="145" fill="none" stroke="var(--color-accent-2)" strokeWidth="2.5" strokeDasharray="16 12" strokeOpacity="0.7" />
              </motion.g>

              {/* Central Interlocked 3D Diamond Wire Structure */}
              <g stroke="url(#heroWireGrad)" fill="none">
                {/* Primary Wire Diamond Layers */}
                <path d="M 250 80 L 400 230 L 250 380 L 100 230 Z" strokeWidth="3.5" strokeOpacity="0.95" />
                <path d="M 250 130 L 350 230 L 250 330 L 150 230 Z" strokeWidth="2.8" strokeOpacity="0.8" />
                <path d="M 250 170 L 310 230 L 250 290 L 190 230 Z" strokeWidth="2.2" strokeOpacity="0.65" />

                {/* Structural Cross Weave Lines */}
                <line x1="100" y1="230" x2="400" y2="230" strokeWidth="2" strokeDasharray="8 4" />
                <line x1="250" y1="80" x2="250" y2="380" strokeWidth="2" strokeDasharray="8 4" />
              </g>

              {/* Animated Weaving Strand 1 (Horizontal Wave) */}
              <motion.path
                d="M -50 150 Q 150 50, 250 230 T 550 180"
                fill="none"
                stroke="url(#heroWireGrad)"
                strokeWidth="4"
                strokeDasharray="16 10"
                animate={{ strokeDashoffset: [0, -104] }}
                transition={{ repeat: Infinity, duration: 3.2, ease: "linear" }}
              />

              {/* Animated Weaving Strand 2 (Diagonal Wave) */}
              <motion.path
                d="M -50 320 Q 200 450, 350 230 T 550 350"
                fill="none"
                stroke="url(#heroWireGrad)"
                strokeWidth="3"
                strokeDasharray="14 8"
                animate={{ strokeDashoffset: [0, 88] }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              />

              {/* Radial Expand Pulse Wave */}
              <motion.circle
                cx="250"
                cy="230"
                fill="none"
                stroke="var(--color-accent-2)"
                strokeWidth="2"
                animate={{ r: [30, 210], opacity: [0.95, 0] }}
                transition={{ repeat: Infinity, duration: 3.4, ease: "easeOut" }}
              />

              {/* Electric Resistance Welding Spark Points */}
              <circle cx="250" cy="80" r="5" fill="var(--color-accent-2)" className="animate-ping" />
              <circle cx="400" cy="230" r="5" fill="var(--color-accent-2)" className="animate-ping" />
              <circle cx="250" cy="380" r="5" fill="var(--color-accent-2)" className="animate-ping" />
              <circle cx="100" cy="230" r="5" fill="var(--color-accent-2)" className="animate-ping" />

              <circle cx="250" cy="80" r="6" fill="#f59e0b" />
              <circle cx="400" cy="230" r="6" fill="#f59e0b" />
              <circle cx="250" cy="380" r="6" fill="#f59e0b" />
              <circle cx="100" cy="230" r="6" fill="#f59e0b" />
              <circle cx="250" cy="230" r="8" fill="var(--color-accent-2)" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}


