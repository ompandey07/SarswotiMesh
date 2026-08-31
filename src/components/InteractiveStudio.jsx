import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Sliders, ShieldCheck, Zap, ArrowRight, Layers, Ruler, Weight } from "lucide-react";
import Bi from "./Bi";

const meshTypes = [
  { id: "chain-link", ne: "चेनलिङ्क कम्पाउण्ड जाली", en: "Chain-Link Compound Jali", baseMult: 1.0 },
  { id: "gabion", ne: "गेबियन बक्स जाली", en: "Gabion Box Jali", baseMult: 1.0 },
  { id: "poultry", ne: "कुखुरा / पोल्ट्री जाली", en: "Chicken Mesh Poultry Jali", baseMult: 1.0 },
  { id: "custom", ne: "कस्टम घेराबार जाली", en: "Custom Perimeter Mesh", baseMult: 1.0 },
];

const holeSizes = [
  {
    size: '0.75" x 0.75"',
    strokeSpacing: 14,
    weightGm: 450,
    gaugeNum: "13#",
    gaugeStr: "13# Heavy Coated",
    defaultGaugeId: "13swg",
    ne: "०.७५ x ०.७५ इन्च (४५० ग्राम/वर्ग फिट)",
    en: "0.75x0.75 inch (450g/sq.ft)",
  },
  {
    size: '1" x 1"',
    strokeSpacing: 18,
    weightGm: 330,
    gaugeNum: "13#",
    gaugeStr: "13# Heavy Coated",
    defaultGaugeId: "13swg",
    ne: "१ x १ इन्च (३३० ग्राम/वर्ग फिट)",
    en: "1x1 inch (330g/sq.ft)",
  },
  {
    size: '1.5" x 1.5"',
    strokeSpacing: 24,
    weightGm: 380,
    gaugeNum: "10#",
    gaugeStr: "10# Heavy Coated",
    defaultGaugeId: "10swg",
    ne: "१.५ x १.५ इन्च (३८० ग्राम/वर्ग फिट)",
    en: "1.5x1.5 inch (380g/sq.ft)",
  },
  {
    size: '2" x 2"',
    strokeSpacing: 28,
    weightGm: 280,
    gaugeNum: "10#",
    gaugeStr: "10# Heavy Coated",
    defaultGaugeId: "10swg",
    ne: "२ x २ इन्च (२८० ग्राम/वर्ग फिट)",
    en: "2x2 inch (280g/sq.ft)",
  },
  {
    size: '2.5" x 2.5"',
    strokeSpacing: 34,
    weightGm: 250,
    gaugeNum: "10#",
    gaugeStr: "10# Heavy Coated",
    defaultGaugeId: "10swg",
    ne: "२.५ x २.५ इन्च (२५० ग्राम/वर्ग फिट)",
    en: "2.5x2.5 inch (250g/sq.ft)",
  },
  {
    size: '3" x 3"',
    strokeSpacing: 40,
    weightGm: 200,
    gaugeNum: "10#",
    gaugeStr: "10# Heavy Coated",
    defaultGaugeId: "10swg",
    ne: "३ x ३ इन्च (२०० ग्राम/वर्ग फिट)",
    en: "3x3 inch (200g/sq.ft)",
  },
];

const wireGauges = [
  { id: "10swg", swg: "10# (3.2mm)", mm: "3.2mm", weightMult: 1.0, labelNe: "१०# हेभी कोटेड", labelEn: "10# Heavy Coated" },
  { id: "13swg", swg: "13# (2.3mm)", mm: "2.3mm", weightMult: 1.0, labelNe: "१३# हेभी कोटेड", labelEn: "13# Heavy Coated" },
  { id: "8swg", swg: "8# (4.0mm)", mm: "4.0mm", weightMult: 1.25, labelNe: "८# अझै भारी", labelEn: "8# Extra Heavy" },
  { id: "12swg", swg: "12# (2.6mm)", mm: "2.6mm", weightMult: 0.92, labelNe: "१२# मानक", labelEn: "12# Standard" },
];

export default function InteractiveStudio() {
  const [selectedType, setSelectedType] = useState(meshTypes[0]);
  const [selectedHole, setSelectedHole] = useState(holeSizes[2]); // 1.5" x 1.5"
  const [selectedGauge, setSelectedGauge] = useState(wireGauges[0]); // 10# Heavy Coated
  const [heightFeet, setHeightFeet] = useState(5);
  const [lengthFeet, setLengthFeet] = useState(50);

  function handleHoleSelect(h) {
    setSelectedHole(h);
    const targetGauge = wireGauges.find((g) => g.id === h.defaultGaugeId);
    if (targetGauge) {
      setSelectedGauge(targetGauge);
    }
  }

  const estimatedWeightKg = useMemo(() => {
    const areaSqFt = heightFeet * lengthFeet;
    const weightPerSqFtGm = selectedHole.weightGm * selectedGauge.weightMult * selectedType.baseMult;
    const totalWeightKg = (areaSqFt * weightPerSqFtGm) / 1000;
    return totalWeightKg.toFixed(1);
  }, [selectedType, selectedHole, selectedGauge, heightFeet, lengthFeet]);

  const currentWeightPerSqFt = useMemo(() => {
    return Math.round(selectedHole.weightGm * selectedGauge.weightMult);
  }, [selectedHole, selectedGauge]);

  // Stroke width for visualizer
  const strokeWidth = useMemo(() => {
    if (selectedGauge.id === "8swg") return 3.4;
    if (selectedGauge.id === "10swg") return 2.6;
    if (selectedGauge.id === "12swg") return 2.0;
    return 1.4;
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
              ne="जालीको भ्वाङ (साइज), तारको मोटाइ (गेज), उचाइ र लम्बाइ छानेर प्रति वर्ग फिट तौल र कुल रोल तौल अनुमान गर्नुहोस्।"
              en="Select mesh hole size, wire gauge SWG, height, and length to accurately calculate weight per sq.ft and total roll weight."
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

            {/* Step 2: Mesh Hole Opening Size */}
            <div>
              <label className="text-xs font-extrabold uppercase tracking-widest text-accent-2 flex items-center gap-2 mb-3">
                <Ruler size={15} />
                <span>2. <Bi ne="जालीको भ्वाङ साइज छनौट गर्नुहोस् (Hole Size)" en="SELECT MESH HOLE SIZE" /></span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {holeSizes.map((h) => (
                  <button
                    key={h.size}
                    type="button"
                    onClick={() => handleHoleSelect(h)}
                    className={`p-3 border text-center transition-all ${
                      selectedHole.size === h.size
                        ? "border-accent-2 bg-accent-dim text-accent-2 shadow-sm"
                        : "border-line bg-bg text-steel hover:border-steel"
                    }`}
                  >
                    <div className="text-sm font-black font-mono">{h.size}</div>
                    <div className="text-[10px] font-bold text-amber-700 dark:text-amber-300 mt-0.5">{h.weightGm} gm / sq.ft</div>
                    <div className="text-[9px] font-extrabold uppercase text-steel-dim mt-0.5">{h.gaugeStr}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Wire Gauge (SWG) */}
            <div>
              <label className="text-xs font-extrabold uppercase tracking-widest text-accent-2 flex items-center gap-2 mb-3">
                <Zap size={15} />
                <span>3. <Bi ne="तारको मोटाइ (Wire Gauge / SWG)" en="SELECT WIRE GAUGE (SWG)" /></span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {wireGauges.map((g) => (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => setSelectedGauge(g)}
                    className={`p-3 border text-center transition-all ${
                      selectedGauge.id === g.id
                        ? "border-accent-2 bg-accent-dim text-accent-2 shadow-sm"
                        : "border-line bg-bg text-steel hover:border-steel"
                    }`}
                  >
                    <div className="text-sm font-black font-mono">{g.swg}</div>
                    <div className="text-[9px] font-extrabold uppercase text-accent-2 mt-1">
                      <Bi ne={g.labelNe} en={g.labelEn} />
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
                  100% HEAVY GALVANIZED
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
              <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-steel-dim mb-1">
                <Bi ne="गणना गरिएको रोल विवरण तथा तौल" en="CALCULATED ROLL SPEC & WEIGHT" />
                <Weight size={14} className="text-accent-2" />
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-black text-ink uppercase font-display-lang">
                  <Bi ne={selectedType.ne} en={selectedType.en} />
                </span>
                <span className="text-2xl font-black font-mono text-accent-2">
                  ~{estimatedWeightKg} KG
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-accent-2/30 text-xs font-bold text-steel">
                <div>
                  <span className="text-steel-dim block text-[10px] uppercase">Dimensions & Area</span>
                  <span>{heightFeet}ft × {lengthFeet}ft ({heightFeet * lengthFeet} sq.ft)</span>
                </div>
                <div>
                  <span className="text-steel-dim block text-[10px] uppercase">Hole Size & Weight</span>
                  <span className="text-accent-2 font-mono">{selectedHole.size} ({currentWeightPerSqFt} gm/sq.ft)</span>
                </div>
              </div>

              <a
                href="#contact"
                className="mt-4 flex items-center justify-center gap-2 h-12 w-full border border-accent-2 bg-accent-2 text-[#0a0c0e] font-extrabold uppercase tracking-wider hover:bg-accent hover:text-white transition-colors shadow-md"
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

