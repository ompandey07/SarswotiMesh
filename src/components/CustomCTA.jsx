import { motion } from "framer-motion";
import Reveal from "./Reveal";
import Bi from "./Bi";

function CustomSpecSvgVisualizer() {
  return (
    <div className="relative aspect-[4/3] w-full border border-line bg-surface overflow-hidden flex items-center justify-center p-4 sm:p-6 select-none group shadow-xl">
      {/* Background Blueprint Grid Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="customBlueprintGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--color-line-strong)" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#customBlueprintGrid)" />
      </svg>

      {/* Main Technical Blueprint SVG Visualizer */}
      <svg className="w-full h-full z-10" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="customDiamondMesh" width="32" height="48" patternUnits="userSpaceOnUse">
            <path
              d="M 0 24 L 16 0 L 32 24 L 16 48 Z"
              fill="none"
              stroke="var(--color-accent-2)"
              strokeWidth="2"
              strokeOpacity="0.8"
            />
          </pattern>
        </defs>

        {/* Dynamic Mesh Pattern Box */}
        <rect x="50" y="40" width="300" height="210" fill="url(#customDiamondMesh)" opacity="0.9" />

        {/* Animated Laser Scanning Beam */}
        <motion.line
          x1="50"
          y1="40"
          x2="350"
          y2="40"
          stroke="#10b981"
          strokeWidth="3"
          animate={{ y1: [40, 250, 40], y2: [40, 250, 40] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />

        {/* Height Dimension Line (Left Side) */}
        <g stroke="var(--color-accent-2)" strokeWidth="1.5">
          <line x1="25" y1="40" x2="25" y2="250" strokeDasharray="4 3" />
          <line x1="18" y1="40" x2="32" y2="40" />
          <line x1="18" y1="250" x2="32" y2="250" />
        </g>
        <text x="15" y="145" textAnchor="middle" fill="var(--color-accent-2)" fontSize="10" fontWeight="900" fontFamily="monospace" transform="rotate(-90 15 145)">
          CUSTOM HEIGHT (3ft - 12ft)
        </text>

        {/* Width Dimension Line (Bottom Side) */}
        <g stroke="var(--color-accent-2)" strokeWidth="1.5">
          <line x1="50" y1="275" x2="350" y2="275" strokeDasharray="4 3" />
          <line x1="50" y1="268" x2="50" y2="282" />
          <line x1="350" y1="268" x2="350" y2="282" />
        </g>
        <text x="200" y="292" textAnchor="middle" fill="var(--color-accent-2)" fontSize="10" fontWeight="900" fontFamily="monospace">
          CUSTOM ROLL LENGTH (15ft - 200ft)
        </text>

        {/* Gauge Caliper Measurement Box (Top Right Corner) */}
        <g opacity="0.95">
          <rect x="230" y="55" width="110" height="34" fill="var(--color-surface-2)" stroke="var(--color-accent-2)" strokeWidth="1.5" rx="2" />
          <circle cx="245" cy="72" r="5" fill="var(--color-accent-2)" />
          <text x="256" y="70" fill="var(--color-accent-2)" fontSize="9" fontWeight="bold" fontFamily="monospace">
            GAUGE / SWG
          </text>
          <text x="256" y="81" fill="var(--color-ink)" fontSize="9" fontWeight="900" fontFamily="monospace">
            8# - 14# (4mm-2mm)
          </text>
        </g>

        {/* Hole Opening Pitch Dimension Box (Center) */}
        <g opacity="0.95">
          <rect x="65" y="195" width="120" height="34" fill="var(--color-surface-2)" stroke="var(--color-accent-2)" strokeWidth="1.5" rx="2" />
          <text x="75" y="209" fill="var(--color-accent-2)" fontSize="9" fontWeight="bold" fontFamily="monospace">
            HOLE OPENING
          </text>
          <text x="75" y="221" fill="var(--color-ink)" fontSize="9" fontWeight="900" fontFamily="monospace">
            0.75" to 3.0" INCH
          </text>
        </g>
      </svg>

      {/* Floating CAD Badge */}
      <span className="absolute top-3 left-3 border border-line bg-surface-2 px-2.5 py-1 text-[9px] font-black uppercase text-accent-2 tracking-wider font-mono shadow-xs">
        BHARATPUR WORKSHOP BLUEPRINT
      </span>
    </div>
  );
}

export default function CustomCTA() {
  return (
    <section className="relative py-24 sm:py-32 bg-bg-alt border-y border-line transition-colors duration-300">
      <div className="container-app grid lg:grid-cols-2 gap-14 items-center">
        <Reveal type="scale">
          <CustomSpecSvgVisualizer />
        </Reveal>

        <Reveal>
          <div className="inline-block border-l-2 border-accent-2 pl-3 py-0.5 text-xs font-extrabold tracking-[0.2em] text-accent-2 uppercase">
            <Bi ne="कस्टम समाधान" en="Custom Solutions" />
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black uppercase tracking-tight text-balance">
            <span className="block lang-ne">तपाईंलाई कस्टम जाली समाधान चाहिन्छ?</span>
            <span className="block lang-en">NEED A CUSTOM MESH SOLUTION?</span>
          </h2>
          <p className="mt-5 text-steel leading-relaxed font-medium">
            <Bi
              ne="आफूलाई चाहिने जालीको प्रकार, नाप र प्रयोग हामीलाई बताउनुहोस्। हाम्रो टिमले तपाईंको लागि उपयुक्त समाधान पहिचान गर्न मद्दत गर्नेछ।"
              en="Tell us your required mesh type, gauge thickness, dimensions and application. Our manufacturing workshop in Bharatpur will produce exact specifications."
            />
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center h-14 px-8 border border-accent-2 bg-accent-2 text-[#0a0c0e] font-extrabold uppercase tracking-wider hover:bg-accent hover:text-white transition-colors shadow-md"
          >
            <Bi ne="कोटेसन माग्नुहोस्" en="Request a Quote" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

