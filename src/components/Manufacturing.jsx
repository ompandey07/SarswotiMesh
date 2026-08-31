import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Settings, Cpu, CheckCircle2, Scissors, PackageCheck, Truck, Zap } from "lucide-react";
import Reveal from "./Reveal";
import Bi from "./Bi";
import { processSteps } from "@/data/content";

const stepIcons = [
  Settings,      // 01 Wire Prep
  Cpu,           // 02 Mesh Formation
  CheckCircle2,  // 03 Quality Check
  Scissors,      // 04 Cutting & Finishing
  PackageCheck,  // 05 Packing
  Truck,         // 06 Delivery
];

const stepDescs = [
  { ne: "उच्च क्षमता भएको ग्याल्भनाइज्ड जिंक कोटेड तारको संकलन र तयारी।", en: "Selection & uncoiling of high-tensile galvanized GI wire." },
  { ne: "कम्प्युटर चालित मेसिनबाट स्वचालित चेनलिङ्क तथा गेबियन बुनाई।", en: "Automated machine weaving of interlocking chain-link & gabion mesh." },
  { ne: "तारको मोटाइ, गेज र जिंक लेयर (Micrometer Check) परीक्षण।", en: "Micrometer SWG gauge check & hot-dip zinc coating inspection." },
  { ne: "आवश्यक नाप अनुसार रोल काट्ने र किनारहरू सुरक्षित मोड्ने कार्य।", en: "Precision shearing & secure edge twisting per order specs." },
  { ne: "ओस रोधी र सुरक्षित ढुवानीका लागि भारी प्लास्टिक स्ट्र्यापिङ।", en: "Moisture-proof wrapping & heavy-duty industrial bundle strapping." },
  { ne: "भरतपुर कारखानाबाट देशभरका निर्माण स्थलहरूमा प्रत्यक्ष ढुवानी।", en: "Direct dispatch from Bharatpur factory to project sites across Nepal." },
];

function CreativeFactoryVisualizer({ activeIndex }) {
  return (
    <div className="relative aspect-[21/9] sm:aspect-[24/7] w-full border border-line bg-surface overflow-hidden mb-12 flex items-center justify-center p-4 sm:p-6 select-none shadow-xl group">
      {/* Background Factory Grid Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="factoryGrid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="var(--color-line-strong)" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#factoryGrid)" />
      </svg>

      {/* Interactive Machine Animation SVG */}
      <svg className="w-full h-full z-10" viewBox="0 0 800 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Step 1: Wire Spools Feeder */}
        <g opacity={activeIndex === 0 ? 1 : 0.65} className="transition-opacity duration-500">
          <motion.circle
            cx="100"
            cy="120"
            r="38"
            stroke="var(--color-accent-2)"
            strokeWidth="4"
            strokeDasharray="12 6"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          />
          <circle cx="100" cy="120" r="16" fill="var(--color-surface-2)" stroke="var(--color-accent-2)" strokeWidth="2" />
          <text x="100" y="182" textAnchor="middle" fill="var(--color-accent-2)" fontSize="11" fontWeight="bold" fontFamily="monospace">
            1. GI WIRE SPOOL
          </text>
        </g>

        {/* Wire Strand Paths from Spool to Weaver */}
        <motion.path
          d="M 138 120 L 300 120"
          stroke="var(--color-accent-2)"
          strokeWidth="3"
          strokeDasharray="8 6"
          animate={{ strokeDashoffset: [0, -28] }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
        <motion.path
          d="M 135 100 Q 220 90, 300 110"
          stroke="var(--color-accent-2)"
          strokeWidth="2"
          strokeDasharray="6 4"
          animate={{ strokeDashoffset: [0, -20] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
        />

        {/* Step 2: Automated Computerized Weaver Machine */}
        <g opacity={activeIndex === 1 ? 1 : 0.7} className="transition-opacity duration-500">
          <rect x="300" y="60" width="200" height="120" rx="4" fill="var(--color-surface-2)" stroke="var(--color-accent-2)" strokeWidth="2" />
          
          {/* Mechanical Weaver Shuttling Arm */}
          <motion.rect
            x="320"
            y="75"
            width="24"
            height="90"
            fill="var(--color-accent-2)"
            animate={{ x: [320, 450, 320] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          />

          {/* Interlocked Wire Mesh Pattern emerging */}
          <path d="M 330 90 L 350 110 L 330 130 L 310 110 Z M 350 110 L 370 130 L 350 150 L 330 130 Z" fill="none" stroke="var(--color-accent-2)" strokeWidth="2" />
          <text x="400" y="205" textAnchor="middle" fill="var(--color-accent-2)" fontSize="12" fontWeight="900" fontFamily="monospace">
            2. AUTOMATED WEAVER
          </text>
        </g>

        {/* Step 3: Laser Quality Scanner */}
        <g opacity={activeIndex === 2 ? 1 : 0.65} className="transition-opacity duration-500">
          <line x1="530" y1="40" x2="530" y2="200" stroke="var(--color-accent-2)" strokeWidth="1.5" strokeDasharray="4 4" />
          <motion.line
            x1="530"
            y1="50"
            x2="530"
            y2="190"
            stroke="#10b981"
            strokeWidth="4"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
          />
          <circle cx="530" cy="120" r="6" fill="#10b981" />
          <text x="530" y="220" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold" fontFamily="monospace">
            3. LASER ZINC TEST
          </text>
        </g>

        {/* Step 4, 5 & 6: Finished Mesh Roll Accumulator */}
        <g opacity={activeIndex >= 3 ? 1 : 0.65} className="transition-opacity duration-500">
          <motion.circle
            cx="680"
            cy="120"
            r="44"
            fill="var(--color-surface-2)"
            stroke="var(--color-accent-2)"
            strokeWidth="3"
            strokeDasharray="16 8"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          />
          <circle cx="680" cy="120" r="22" fill="var(--color-surface)" stroke="var(--color-accent-2)" strokeWidth="2" />
          <text x="680" y="185" textAnchor="middle" fill="var(--color-accent-2)" fontSize="11" fontWeight="bold" fontFamily="monospace">
            4-6. PACKING & DISPATCH
          </text>
        </g>

        {/* Connecting Process Flow Path */}
        <motion.path
          d="M 500 120 L 636 120"
          stroke="var(--color-accent-2)"
          strokeWidth="3"
          strokeDasharray="8 6"
          animate={{ strokeDashoffset: [0, -28] }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
      </svg>

      {/* Floating Active Stage Badge */}
      <div className="absolute top-3 right-3 flex items-center gap-2 border border-accent-2/40 bg-bg/90 backdrop-blur-md px-3 py-1 font-mono text-[10px] font-bold text-accent-2 shadow-sm">
        <Zap size={12} className="text-accent-2 animate-bounce" />
        <span>STAGE {activeIndex + 1}: {processSteps[activeIndex]?.en?.toUpperCase()}</span>
      </div>
    </div>
  );
}

export default function Manufacturing() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.75", "end 0.4"],
  });
  const fillWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="manufacturing" className="relative py-24 sm:py-32 bg-bg-alt border-b border-line transition-colors duration-300">
      <div className="container-app">
        <Reveal className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-block border-l-2 border-accent-2 pl-3 py-0.5 text-xs font-extrabold tracking-[0.2em] text-accent-2 uppercase">
              <Bi ne="निर्माण प्रक्रिया" en="Manufacturing Process" />
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black uppercase tracking-tight text-balance">
              <Bi ne="हामी कसरी निर्माण गर्छौं" en="HOW WE MAKE IT" />
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm font-medium text-steel leading-relaxed">
            <Bi
              ne="तार तयारीदेखि कम्प्युटरकृत बुनाई, जिंक परीक्षण, फिनिसिङ र सुरक्षित डेलिभरीसम्मको ६-चरणीय प्रक्रिया।"
              en="Our precision 6-stage manufacturing workflow from wire uncoiling to computerized weaving, zinc testing & site dispatch."
            />
          </p>
        </Reveal>

        {/* Creative Automated Workshop Assembly Visualizer */}
        <Reveal>
          <CreativeFactoryVisualizer activeIndex={activeIndex} />
        </Reveal>

        {/* Interactive Step Cards Track */}
        <div ref={trackRef} className="relative mt-8">
          <div className="absolute top-6 left-0 right-0 h-0.5 bg-line-strong hidden md:block">
            <motion.div className="h-full bg-accent-2" style={{ width: fillWidth }} />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {processSteps.map((s, i) => {
              const IconComponent = stepIcons[i] || Settings;
              const isSelected = activeIndex === i;

              return (
                <button
                  key={s.num}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  onMouseEnter={() => setActiveIndex(i)}
                  className={`flex flex-col items-start text-left gap-3 border p-4 transition-all duration-300 ${
                    isSelected
                      ? "border-accent-2 bg-surface shadow-md scale-[1.02]"
                      : "border-line bg-surface/60 hover:border-steel"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className={`flex h-9 w-9 items-center justify-center border text-xs font-black font-mono transition-colors ${
                      isSelected ? "border-accent-2 bg-accent-2 text-[#0a0c0e]" : "border-line bg-surface-2 text-steel"
                    }`}>
                      {s.num}
                    </div>
                    <IconComponent size={16} className={isSelected ? "text-accent-2" : "text-steel-dim"} />
                  </div>

                  <div>
                    <h3 className={`text-xs font-extrabold uppercase tracking-wider font-display-lang transition-colors ${
                      isSelected ? "text-accent-2" : "text-ink"
                    }`}>
                      <Bi ne={s.ne} en={s.en} />
                    </h3>
                    <p className="mt-1.5 text-[11px] font-medium text-steel leading-normal line-clamp-3">
                      <Bi ne={stepDescs[i].ne} en={stepDescs[i].en} />
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

