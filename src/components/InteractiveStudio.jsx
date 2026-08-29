import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Sliders, ShieldCheck, Zap, ArrowRight, Layers, Ruler } from "lucide-react";
import Bi from "./Bi";

const meshTypes = [
  { id: "chain-link", ne: "चेनलिङ्क ग्याल्भनाइज्ड जाली", en: "Chain-Link Galvanized Jali", baseWeight: 1.4 },
  { id: "poultry", ne: "पोल्ट्री / कृषि जाली", en: "Poultry & Agro Jali", baseWeight: 0.9 },
  { id: "gabion", ne: "गेबियन इन्जिनियरिङ जाली", en: "Heavy Gabion Jali", baseWeight: 2.8 },
  { id: "security", ne: "सुरक्षा तथा सीमाना जाली", en: "Security Perimeter Jali", baseWeight: 1.8 },
];

const wireGauges = [
  { swg: "8 SWG", mm: "4.0mm", weightMult: 2.2, labelNe: "अति बलियो", labelEn: "Heavy-Duty" },
  { swg: "10 SWG", mm: "3.2mm", weightMult: 1.6, labelNe: "औद्योगिक", labelEn: "Industrial" },
  { swg: "12 SWG", mm: "2.5mm", weightMult: 1.2, labelNe: "मानक", labelEn: "Standard" },
  { swg: "14 SWG", mm: "2.0mm", weightMult: 0.9, labelNe: "हल्का", labelEn: "Light" },
];

const holeSizes = [
  { size: '1" x 1"', strokeSpacing: 16, ne: "सुक्ष्म (१ इन्च)", en: "Fine (1 inch)" },
  { size: '2" x 2"', strokeSpacing: 24, ne: "मानक (२ इन्च)", en: "Standard (2 inch)" },
  { size: '3" x 3"', strokeSpacing: 32, ne: "मध्यम (३ इन्च)", en: "Medium (3 inch)" },
  { size: '4" x 4"', strokeSpacing: 40, ne: "ठूलो (४ इन्च)", en: "Large (4 inch)" },
];

export default function InteractiveStudio() {
  const [selectedType, setSelectedType] = useState(meshTypes[0]);
  const [selectedGauge, setSelectedGauge] = useState(wireGauges[1]); // 10 SWG
  const [selectedHole, setSelectedHole] = useState(holeSizes[1]); // 2" x 2"
  const [heightFeet, setHeightFeet] = useState(5);
  const [lengthFeet, setLengthFeet] = useState(50);

  const estimatedWeight = useMemo(() => {
    const area = heightFeet * lengthFeet;
    const weight = area * selectedType.baseWeight * selectedGauge.weightMult * (20 / selectedHole.strokeSpacing);
    return Math.round(weight);
  }, [selectedType, selectedGauge, selectedHole, heightFeet, lengthFeet]);

  // Stroke width for visualizer
  const strokeWidth = useMemo(() => {
    if (selectedGauge.swg.includes("8")) return 3.2;
    if (selectedGauge.swg.includes("10")) return 2.4;
    if (selectedGauge.swg.includes("12")) return 1.8;
    return 1.2;
  }, [selectedGauge]);

  return (
    <section id="studio" className="relative py-24 sm:py-32 bg-bg border-b border-line transition-colors duration-300">
      <div className="container-app">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 border border-accent-2/60 bg-accent-dim px-3.5 py-1 text-xs font-extrabold text-accent-2 uppercase tracking-wider">
              <Sliders size={14} />
              <Bi ne="इन्टरएक्टिभ मेश स्टुडियो" en="INTERACTIVE SPECIFICATION STUDIO" />
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black uppercase tracking-tight text-ink">
              <Bi ne="आफ्नो आवश्यकता अनुसार जाली डिजाइन गर्नुहोस्" en="CUSTOMIZE YOUR MESH SPECIFICATIONS" />
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm font-medium text-steel leading-relaxed">
            <Bi
              ne="तारको मोटाइ, जालीको प्वाल नाप, उचाइ र लम्बाइ छनौट गरी तत्काल अनुमानित तौल र कोटेसन प्राप्त गर्नुहोस्।"
              en="Select wire gauge thickness, mesh opening size, height, and length for real-time weight estimate and custom quotation."
            />
          </p>
        </div>

        {/* Studio Workspace Grid */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 border border-line bg-surface p-6 sm:p-8">
          {/* Controls Column */}
          <div className="flex flex-col gap-8">
            {/* Step 1: Product Type */}
            <div>
              <label className="text-xs font-extrabold uppercase tracking-widest text-accent-2 flex items-center gap-2 mb-3">
                <Layers size={15} />
                <span>1. <Bi ne="जाली प्रकार छनौट गर्नुहोस्" en="SELECT MESH TYPE" /></span>
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                {meshTypes.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setSelectedType(t)}
                    className={`p-3.5 border text-left text-xs font-bold uppercase transition-all ${
                      selectedType.id === t.id
                        ? "border-accent-2 bg-accent-dim text-accent-2 shadow-sm"
                        : "border-line bg-bg text-steel hover:border-steel"
                    }`}
                  >
                    <Bi ne={t.ne} en={t.en} />
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Wire Gauge (SWG) */}
            <div>
              <label className="text-xs font-extrabold uppercase tracking-widest text-accent-2 flex items-center gap-2 mb-3">
                <Zap size={15} />
                <span>2. <Bi ne="तारको मोटाइ (Gauge / SWG)" en="SELECT WIRE GAUGE (SWG)" /></span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {wireGauges.map((g) => (
                  <button
                    key={g.swg}
                    type="button"
                    onClick={() => setSelectedGauge(g)}
                    className={`p-3 border text-center transition-all ${
                      selectedGauge.swg === g.swg
                        ? "border-accent-2 bg-accent-dim text-accent-2"
                        : "border-line bg-bg text-steel hover:border-steel"
                    }`}
                  >
                    <div className="text-sm font-black font-mono">{g.swg}</div>
                    <div className="text-[10px] font-bold text-steel-dim mt-0.5">{g.mm}</div>
                    <div className="text-[9px] font-extrabold uppercase text-accent-2 mt-1">
                      <Bi ne={g.labelNe} en={g.labelEn} />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Mesh Hole Opening Size */}
            <div>
              <label className="text-xs font-extrabold uppercase tracking-widest text-accent-2 flex items-center gap-2 mb-3">
                <Ruler size={15} />
                <span>3. <Bi ne="जालीको प्वाल (Mesh Opening Size)" en="SELECT MESH HOLE SIZE" /></span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {holeSizes.map((h) => (
                  <button
                    key={h.size}
                    type="button"
                    onClick={() => setSelectedHole(h)}
                    className={`p-3 border text-center transition-all ${
                      selectedHole.size === h.size
                        ? "border-accent-2 bg-accent-dim text-accent-2"
                        : "border-line bg-bg text-steel hover:border-steel"
                    }`}
                  >
                    <div className="text-sm font-black font-mono">{h.size}</div>
                    <div className="text-[10px] font-bold text-steel-dim mt-0.5">
                      <Bi ne={h.ne} en={h.en} />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Height & Length Sliders */}
            <div className="grid sm:grid-cols-2 gap-6 pt-2 border-t border-line">
              <div>
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-ink mb-2">
                  <span><Bi ne="जालीको उचाइ" en="Mesh Height" /></span>
                  <span className="font-mono text-accent-2 text-sm font-black">{heightFeet} ft</span>
                </div>
                <input
                  type="range"
                  min={3}
                  max={12}
                  value={heightFeet}
                  onChange={(e) => setHeightFeet(Number(e.target.value))}
                  className="w-full accent-accent-2 h-2 bg-bg border border-line cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-ink mb-2">
                  <span><Bi ne="रोल लम्बाइ" en="Roll Length" /></span>
                  <span className="font-mono text-accent-2 text-sm font-black">{lengthFeet} ft</span>
                </div>
                <input
                  type="range"
                  min={15}
                  max={150}
                  step={5}
                  value={lengthFeet}
                  onChange={(e) => setLengthFeet(Number(e.target.value))}
                  className="w-full accent-accent-2 h-2 bg-bg border border-line cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Dynamic Visualizer & Summary Column */}
          <div className="flex flex-col border border-line bg-bg p-6 justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-line pb-3 mb-4">
                <span className="text-xs font-extrabold uppercase tracking-widest text-ink font-mono">
                  LIVE VISUAL PREVIEW
                </span>
                <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-accent-2 border border-accent-2/40 px-2 py-0.5">
                  <ShieldCheck size={12} />
                  100% GALVANIZED
                </span>
              </div>

              {/* Dynamic 2D Mesh SVG Visualizer */}
              <div className="relative aspect-[16/10] w-full border border-line bg-surface overflow-hidden flex items-center justify-center p-4">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern
                      id="interactiveMeshPattern"
                      width={selectedHole.strokeSpacing}
                      height={selectedHole.strokeSpacing * 1.5}
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d={`M0 ${selectedHole.strokeSpacing * 0.75} L${selectedHole.strokeSpacing / 2} 0 L${selectedHole.strokeSpacing} ${selectedHole.strokeSpacing * 0.75} L${selectedHole.strokeSpacing / 2} ${selectedHole.strokeSpacing * 1.5} Z`}
                        fill="none"
                        stroke="var(--color-accent-2)"
                        strokeWidth={strokeWidth}
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#interactiveMeshPattern)" opacity="0.85" />
                </svg>

                <div className="absolute bottom-2 right-2 border border-line bg-bg/90 px-2.5 py-1 text-[10px] font-mono text-steel font-bold">
                  {selectedGauge.swg} • {selectedHole.size}
                </div>
              </div>
            </div>

            {/* Spec Output Summary Card */}
            <div className="mt-6 border border-accent-2/60 bg-accent-dim p-4">
              <div className="text-[11px] font-bold uppercase tracking-widest text-steel-dim mb-1">
                <Bi ne="अनुमानित विवरण तथा तौल" en="CALCULATED ROLL ESTIMATE" />
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-black text-ink uppercase font-display-lang">
                  <Bi ne={selectedType.ne} en={selectedType.en} />
                </span>
                <span className="text-2xl font-black font-mono text-accent-2">
                  ~{estimatedWeight} KG
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-accent-2/30 text-xs font-bold text-steel">
                <div>
                  <span className="text-steel-dim block text-[10px] uppercase">Dimensions</span>
                  <span>{heightFeet} ft Height × {lengthFeet} ft Roll</span>
                </div>
                <div>
                  <span className="text-steel-dim block text-[10px] uppercase">Specification</span>
                  <span>{selectedGauge.swg} ({selectedGauge.mm})</span>
                </div>
              </div>

              <a
                href="#contact"
                className="mt-4 flex items-center justify-center gap-2 h-12 w-full border border-accent-2 bg-accent-2 text-[#0a0c0e] font-extrabold uppercase tracking-wider hover:bg-accent hover:text-white transition-colors"
              >
                <Bi ne="यी विवरणका साथ अर्डर गर्नुहोस्" en="REQUEST QUOTE WITH THESE SPECS" />
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
