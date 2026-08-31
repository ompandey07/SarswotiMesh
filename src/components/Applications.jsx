import { useMemo } from "react";
import { motion } from "framer-motion";
import Reveal, { Stagger, StaggerItem } from "./Reveal";
import Bi from "./Bi";
import { applications } from "@/data/content";

function ApplicationSvgVisualizer({ num }) {
  if (num === "01") {
    // Security Perimeter Mesh Wave SVG
    return (
      <div className="relative aspect-[16/9] w-full border-b border-line bg-surface-2 overflow-hidden flex items-center justify-center p-3 select-none group/svg">
        <svg className="w-full h-full" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="securityMeshPattern" width="20" height="30" patternUnits="userSpaceOnUse">
              <path d="M0 15 L10 0 L20 15 L10 30 Z" fill="none" stroke="var(--color-accent-2)" strokeWidth="1.5" strokeOpacity="0.35" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#securityMeshPattern)" />
          
          {/* Animated Sine Security Defense Wave */}
          <motion.path
            d="M -10 60 Q 40 10, 90 60 T 190 60 T 290 60"
            fill="none"
            stroke="var(--color-accent-2)"
            strokeWidth="2.5"
            strokeDasharray="8 6"
            animate={{ strokeDashoffset: [0, -56] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
          />
          <motion.path
            d="M -10 60 Q 40 110, 90 60 T 190 60 T 290 60"
            fill="none"
            stroke="var(--color-accent-2)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            strokeOpacity="0.6"
            animate={{ strokeDashoffset: [0, 48] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          />

          {/* Security Pulse Nodes */}
          <circle cx="40" cy="60" r="3.5" fill="var(--color-accent-2)" />
          <circle cx="140" cy="60" r="3.5" fill="var(--color-accent-2)" />
        </svg>
        <span className="absolute bottom-2 right-2 text-[9px] font-mono font-bold text-accent-2 border border-accent-2/40 bg-bg/80 backdrop-blur-xs px-2 py-0.5">
          SECURITY MESH WAVES
        </span>
      </div>
    );
  }

  if (num === "02") {
    // Agriculture & Poultry Netting Wave SVG
    return (
      <div className="relative aspect-[16/9] w-full border-b border-line bg-surface-2 overflow-hidden flex items-center justify-center p-3 select-none group/svg">
        <svg className="w-full h-full" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexPoultryPattern" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M6 0 L18 0 L24 12 L18 24 L6 24 L0 12 Z" fill="none" stroke="var(--color-accent-2)" strokeWidth="1.2" strokeOpacity="0.35" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexPoultryPattern)" />

          {/* Animated Farm Protection Canopy Wave */}
          <motion.path
            d="M 0 35 C 50 85, 100 5, 200 65"
            fill="none"
            stroke="var(--color-accent-2)"
            strokeWidth="2.5"
            animate={{ d: ["M 0 35 C 50 85, 100 5, 200 65", "M 0 55 C 50 15, 100 95, 200 45", "M 0 35 C 50 85, 100 5, 200 65"] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
        </svg>
        <span className="absolute bottom-2 right-2 text-[9px] font-mono font-bold text-accent-2 border border-accent-2/40 bg-bg/80 backdrop-blur-xs px-2 py-0.5">
          AGRO CANOPY WAVES
        </span>
      </div>
    );
  }

  if (num === "03") {
    // Structural Construction Welded Mesh Wave SVG
    return (
      <div className="relative aspect-[16/9] w-full border-b border-line bg-surface-2 overflow-hidden flex items-center justify-center p-3 select-none group/svg">
        <svg className="w-full h-full" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="gridWeldedPattern" width="18" height="18" patternUnits="userSpaceOnUse">
              <rect width="18" height="18" fill="none" stroke="var(--color-accent-2)" strokeWidth="1.4" strokeOpacity="0.35" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridWeldedPattern)" />

          {/* Animated Structural Tensile Load Wave */}
          <motion.path
            d="M -10 40 L 50 80 L 110 30 L 170 90 L 210 40"
            fill="none"
            stroke="var(--color-accent-2)"
            strokeWidth="2.5"
            strokeDasharray="6 4"
            animate={{ strokeDashoffset: [0, -50] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />
        </svg>
        <span className="absolute bottom-2 right-2 text-[9px] font-mono font-bold text-accent-2 border border-accent-2/40 bg-bg/80 backdrop-blur-xs px-2 py-0.5">
          STRUCTURAL LOAD WAVES
        </span>
      </div>
    );
  }

  // num === "04" Civil Engineering Gabion Retaining & Erosion Wave SVG
  return (
    <div className="relative aspect-[16/9] w-full border-b border-line bg-surface-2 overflow-hidden flex items-center justify-center p-3 select-none group/svg">
      <svg className="w-full h-full" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="waterFlowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-accent-2)" stopOpacity="0.2" />
            <stop offset="50%" stopColor="var(--color-accent-2)" stopOpacity="0.95" />
            <stop offset="100%" stopColor="var(--color-accent-2)" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Gabion Box Wire Grid Base */}
        <path d="M 10 20 L 70 20 L 70 100 L 10 100 Z M 70 20 L 120 40 L 120 110 L 70 100 Z" fill="none" stroke="var(--color-accent-2)" strokeWidth="1.5" strokeOpacity="0.4" />
        <path d="M 10 60 L 70 60 M 40 20 L 40 100 M 70 60 L 120 75" fill="none" stroke="var(--color-accent-2)" strokeWidth="1" strokeOpacity="0.25" />

        {/* Animated River Riverbank Water Erosion Control Waves */}
        <motion.path
          d="M 60 25 Q 110 80, 200 35"
          fill="none"
          stroke="url(#waterFlowGrad)"
          strokeWidth="3"
          animate={{ d: ["M 60 25 Q 110 80, 200 35", "M 60 45 Q 110 20, 200 55", "M 60 25 Q 110 80, 200 35"] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
        />
        <motion.path
          d="M 70 55 Q 120 105, 200 65"
          fill="none"
          stroke="var(--color-accent-2)"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          animate={{ strokeDashoffset: [0, -40] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
        />
      </svg>
      <span className="absolute bottom-2 right-2 text-[9px] font-mono font-bold text-accent-2 border border-accent-2/40 bg-bg/80 backdrop-blur-xs px-2 py-0.5">
        GABION EROSION WAVES
      </span>
    </div>
  );
}

export default function Applications() {
  return (
    <section id="applications" className="relative py-24 sm:py-32 bg-bg transition-colors duration-300">
      <div className="container-app">
        <Reveal className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-block border-l-2 border-accent-2 pl-3 py-0.5 text-xs font-extrabold tracking-[0.2em] text-accent-2 uppercase">
              <Bi ne="प्रयोगहरू" en="Applications" />
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black uppercase tracking-tight text-balance">
              <Bi ne="विभिन्न प्रयोगका लागि निर्माण" en="BUILT FOR MANY APPLICATIONS" />
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm font-medium text-steel leading-relaxed">
            <Bi
              ne="सुरक्षा घेराबार, कृषि तथा पोल्ट्री, कङ्क्रिट निर्माण र तटबन्ध गेबियन इन्जिनियरिङका विविध प्रयोगहरू।"
              en="Engineered for perimeter security, agricultural enclosures, structural concrete reinforcement, and river erosion control."
            />
          </p>
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {applications.map((a) => (
            <StaggerItem key={a.num}>
              <div className="h-full border border-line bg-surface overflow-hidden transition-all duration-300 hover:border-accent-2 flex flex-col justify-between group shadow-xs">
                {/* Animated Mesh Wave Visualizer SVG Header */}
                <ApplicationSvgVisualizer num={a.num} />

                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="text-2xl font-black font-mono text-accent-2">#{a.num}</div>
                    <h3 className="mt-2 text-base font-extrabold text-ink uppercase tracking-wide font-display-lang">
                      <Bi ne={a.titleNe} en={a.titleEn} />
                    </h3>
                    <p className="mt-2 text-xs font-medium text-steel leading-relaxed">
                      <Bi ne={a.descNe} en={a.descEn} />
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

