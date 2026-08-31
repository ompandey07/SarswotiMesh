import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2, Zap, Activity, Award } from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "./Reveal";
import Bi from "./Bi";
import { principles } from "@/data/content";

export default function Quality() {
  return (
    <section className="relative py-24 sm:py-32 bg-bg transition-colors duration-300">
      <div className="container-app grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <div className="inline-block border-l-2 border-accent-2 pl-3 py-0.5 text-xs font-extrabold tracking-[0.2em] text-accent-2 uppercase">
            <Bi ne="गुणस्तर" en="Quality" />
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black uppercase tracking-tight text-balance">
            <Bi ne="गुणस्तरलाई प्राथमिकतामा राखेर निर्माण" en="BUILT WITH QUALITY IN MIND" />
          </h2>

          <Stagger className="mt-10 flex flex-col gap-6">
            {principles.map((p) => (
              <StaggerItem key={p.num} className="flex gap-5 border border-line bg-surface p-5 transition-colors hover:border-accent-2">
                <b className="text-xl font-black font-mono text-accent-2 shrink-0 w-8">{p.num}</b>
                <div>
                  <h3 className="text-sm font-extrabold text-ink uppercase tracking-wide font-display-lang">
                    <Bi ne={p.titleNe} en={p.titleEn} />
                  </h3>
                  <p className="mt-1 text-xs text-steel font-medium leading-relaxed">
                    <Bi ne={p.descNe} en={p.descEn} />
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>

        <Reveal type="scale">
          {/* ANIMATED QUALITY INSPECTION SVG VISUALIZER */}
          <div className="relative aspect-square w-full border border-line bg-surface overflow-hidden shadow-2xl p-6 flex flex-col justify-between select-none">
            {/* Background SVG Interlocked Wire Mesh Grid with Pulsing Galvanization Lines */}
            <div className="absolute inset-0 z-0 opacity-40">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="qualityMeshPattern" width="48" height="68" patternUnits="userSpaceOnUse">
                    <path
                      d="M 0 34 L 24 0 L 48 34 L 24 68 Z"
                      fill="none"
                      stroke="var(--color-accent-2)"
                      strokeWidth="1.8"
                      strokeOpacity="0.75"
                    />
                    <path
                      d="M 0 0 L 48 68 M 48 0 L 0 68"
                      fill="none"
                      stroke="var(--color-accent-2)"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                      strokeOpacity="0.35"
                    />
                    <circle cx="24" cy="34" r="3" fill="var(--color-accent-2)" fillOpacity="0.85" />
                  </pattern>
                </defs>

                {/* Animated Mesh Grid Layer */}
                <rect width="100%" height="100%" fill="url(#qualityMeshPattern)" />

                {/* Galvanization Zinc Wave Paths */}
                <motion.path
                  d="M -50 100 Q 150 20, 350 220 T 700 150"
                  fill="none"
                  stroke="var(--color-accent-2)"
                  strokeWidth="3.5"
                  strokeDasharray="14 8"
                  animate={{ strokeDashoffset: [0, -88] }}
                  transition={{ repeat: Infinity, duration: 3.2, ease: "linear" }}
                />
                <motion.path
                  d="M -50 250 Q 200 380, 450 180 T 750 320"
                  fill="none"
                  stroke="var(--color-accent-2)"
                  strokeWidth="2"
                  strokeDasharray="8 6"
                  animate={{ strokeDashoffset: [0, 56] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                />
              </svg>
            </div>

            {/* Sweeping Laser Scanner Beam Line */}
            <motion.div
              className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-accent-2 to-transparent z-10 shadow-[0_0_18px_var(--color-accent-2)]"
              animate={{ top: ["6%", "91%", "6%"] }}
              transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
            >
              <div className="absolute top-0 right-6 bg-accent-2 text-[#0a0c0e] text-[9px] font-mono font-black px-2 py-0.5 -translate-y-full tracking-wider shadow-sm">
                LIVE QUALITY SCANNER ACTIVE
              </div>
            </motion.div>

            {/* Top Header Controls / Telemetry Badge */}
            <div className="relative z-20 flex items-center justify-between border-b border-line/60 pb-3">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-accent-2 animate-pulse" />
                <span className="text-xs font-mono font-black uppercase text-ink tracking-wider">
                  QUALITY INSPECTION METRICS
                </span>
              </div>
              <span className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-amber-300 border border-amber-400/50 bg-amber-500/10 px-2.5 py-0.5">
                <Award size={12} className="text-amber-400" />
                ISO CERTIFIED
              </span>
            </div>

            {/* Animated Technical Inspection Nodes overlay */}
            <div className="relative z-20 grid grid-cols-2 gap-3.5 my-auto">
              {/* Node 1: Zinc Coating */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="border border-accent-2/60 bg-bg/90 backdrop-blur-md p-3.5 shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-extrabold uppercase text-accent-2">ZINC LAYER</span>
                  <Zap size={13} className="text-accent-2" />
                </div>
                <div className="text-lg font-black font-mono text-ink mt-1">275 g/m²</div>
                <div className="text-[10px] font-medium text-steel mt-0.5">
                  <Bi ne="ग्याल्भनाइज्ड जिंक लेप" en="Heavy Hot-Dip Zinc" />
                </div>
              </motion.div>

              {/* Node 2: Tensile Strength */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="border border-accent-2/60 bg-bg/90 backdrop-blur-md p-3.5 shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-extrabold uppercase text-accent-2">TENSILE STRENGTH</span>
                  <Activity size={13} className="text-accent-2" />
                </div>
                <div className="text-lg font-black font-mono text-ink mt-1">550+ MPa</div>
                <div className="text-[10px] font-medium text-steel mt-0.5">
                  <Bi ne="उच्च ताण क्षमता तार" en="High Tensile Steel Core" />
                </div>
              </motion.div>

              {/* Node 3: Weave Precision */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="border border-accent-2/60 bg-bg/90 backdrop-blur-md p-3.5 shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-extrabold uppercase text-accent-2">WEAVE ACCURACY</span>
                  <CheckCircle2 size={13} className="text-accent-2" />
                </div>
                <div className="text-lg font-black font-mono text-ink mt-1">± 0.5 mm</div>
                <div className="text-[10px] font-medium text-steel mt-0.5">
                  <Bi ne="सटीक मेश बुनाइ" en="Uniform Opening Mesh" />
                </div>
              </motion.div>

              {/* Node 4: Rust Protection */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="border border-accent-2/60 bg-bg/90 backdrop-blur-md p-3.5 shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-extrabold uppercase text-accent-2">CORROSION LIFE</span>
                  <Award size={13} className="text-accent-2" />
                </div>
                <div className="text-lg font-black font-mono text-ink mt-1">25+ YRS</div>
                <div className="text-[10px] font-medium text-steel mt-0.5">
                  <Bi ne="दीर्घकालीन खिया-रोधी" en="Rust & Weather Proof" />
                </div>
              </motion.div>
            </div>

            {/* Bottom Technical Status Bar */}
            <div className="relative z-20 border-t border-line/60 pt-3 flex items-center justify-between text-[11px] font-mono">
              <span className="flex items-center gap-1.5 text-steel font-bold">
                <span className="h-2 w-2 rounded-full bg-accent-2 animate-ping" />
                <Bi ne="प्रत्यक्ष कारखाना गुणस्तर परीक्षण" en="FACTORY QUALITY VERIFIED" />
              </span>
              <span className="text-accent-2 font-black">SARASWOTI QC PASS</span>
            </div>

            {/* Wireframe Corner Brackets */}
            <span className="absolute top-0 left-0 h-6 w-6 border-t-2 border-l-2 border-accent-2 z-30" />
            <span className="absolute top-0 right-0 h-6 w-6 border-t-2 border-r-2 border-accent-2 z-30" />
            <span className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-accent-2 z-30" />
            <span className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-accent-2 z-30" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

