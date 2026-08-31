import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Ruler, ShieldCheck, Scale, Layers, Activity, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";
import Bi from "./Bi";
import ProductCard from "./ProductCard";
import { products, meshSpecifications } from "@/data/content";
import sizeHeroImg from "@/assets/Products/SizeHero.png";

const categories = [
  { id: "all", ne: "सबै उत्पादनहरू", en: "All Core Products" },
  { id: "industrial", ne: "गेबियन बक्स जाली", en: "Gabion Box Jali" },
  { id: "fencing", ne: "चेनलिङ्क कम्पाउण्ड", en: "Chain-Link Compound" },
  { id: "agro", ne: "कुखुरा/पोल्ट्री जाली", en: "Chicken Mesh Poultry" },
];

export default function Products() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProducts = useMemo(() => {
    if (activeTab === "all") return products;
    return products.filter((p) => p.category === activeTab);
  }, [activeTab]);

  return (
    <section id="products" className="relative py-24 sm:py-32 bg-bg-alt border-y border-line transition-colors duration-300">
      <div className="container-app">
        <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-block border-l-2 border-accent-2 pl-3 py-0.5 text-xs font-extrabold tracking-[0.2em] text-accent-2 uppercase">
              <Bi ne="हाम्रा मुख्य उत्पादनहरू" en="Our Core Products" />
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-balance uppercase tracking-tight max-w-xl">
              <Bi ne="प्रयोग अनुसार निर्मित जालीहरू" en="MESH BUILT AROUND ITS PURPOSE" />
            </h2>
            <p className="mt-2 text-xs font-medium text-steel">
              <Bi
                ne="भरतपुर कारखानाबाट उत्पादन गरिएका गेबियन, चेनलिङ्क कम्पाउण्ड र पोल्ट्री जाली।"
                en="Direct factory manufactured Gabion Box, Compound Chain-Link & Chicken Poultry Jali."
              />
            </p>
          </div>

          {/* Interactive Category Filter Bar */}
          <div className="flex flex-wrap items-center gap-2 border border-line bg-surface p-1.5 shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 text-xs font-extrabold uppercase tracking-wider transition-all ${
                  activeTab === cat.id
                    ? "bg-accent-2 text-[#0a0c0e] shadow-sm"
                    : "text-steel hover:text-ink"
                }`}
              >
                <Bi ne={cat.ne} en={cat.en} />
              </button>
            ))}
          </div>
        </Reveal>

        {/* Product Cards Grid with AnimatePresence */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((p) => (
              <motion.div
                key={p.num}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col"
              >
                <ProductCard product={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Official Factory Available Sizes & Weight Specifications Matrix */}
        <Reveal className="mt-16 border border-line bg-surface overflow-hidden shadow-xl">
          {/* Hero Showcase Image Banner for Sizes Section */}
          <div className="relative w-full bg-[#0a0c0e] border-b border-line overflow-hidden group">
            <img
              src={sizeHeroImg}
              alt="Factory Available Mesh Sizes and Gauge Specifications Showcase"
              loading="lazy"
              className="w-full h-auto min-h-[350px] max-h-[850px] object-contain sm:object-cover mx-auto block transition-transform duration-700 ease-out group-hover:scale-[1.01]"
            />
          </div>

          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-line pb-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-black text-accent-2 uppercase tracking-wider">
                  <Ruler size={16} />
                  <Bi ne="उपलब्ध साइज तथा तौल चार्ट" en="AVAILABLE SIZES & WEIGHT CHART" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-ink uppercase tracking-tight mt-1">
                  <Bi ne="जालीका उपलब्ध भ्वाङ (साइज), गेज र तौल" en="HOLE SIZE, WIRE GAUGE & WEIGHT METRICS" />
                </h3>
              </div>
              <span className="text-xs font-mono font-bold text-amber-700 dark:text-amber-300 border border-amber-500/50 bg-amber-500/10 px-3 py-1.5 self-start sm:self-auto flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-amber-600 dark:text-amber-400" />
                100% HEAVY COATED GALVANIZED ZINC
              </span>
            </div>

          {/* Grid of Precision Specification Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {meshSpecifications.map((spec, idx) => {
              const weightVal = parseInt(spec.weightPerSqFt, 10) || 200;
              const densityPct = Math.round((weightVal / 450) * 100);

              return (
                <div
                  key={idx}
                  className="group border border-line bg-bg p-5 hover:border-accent-2 transition-all shadow-xs flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Hole Size & Availability */}
                    <div className="flex items-center justify-between border-b border-line/60 pb-3 mb-4">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 border border-accent-2/40 bg-accent-dim text-accent-2">
                          <Ruler size={16} />
                        </div>
                        <span className="text-base font-black font-mono text-ink tracking-tight">
                          {spec.holeSize}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-500/40 bg-emerald-500/10 px-2 py-0.5 flex items-center gap-1">
                        <CheckCircle2 size={10} />
                        IN STOCK
                      </span>
                    </div>

                    {/* Specification Key-Values */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-bold">
                        <span className="text-steel-dim flex items-center gap-1.5">
                          <Layers size={13} className="text-accent-2" />
                          <Bi ne="तारको मोटाइ" en="Wire Gauge" />
                        </span>
                        <span className="text-ink font-mono bg-surface-2 px-2.5 py-1 border border-line">
                          {spec.gauge}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-xs font-bold">
                        <span className="text-steel-dim flex items-center gap-1.5">
                          <Scale size={13} className="text-amber-600 dark:text-amber-400" />
                          <Bi ne="प्रति वर्ग फिट तौल" en="Weight / Sq.Ft" />
                        </span>
                        <span className="text-amber-700 dark:text-amber-300 font-mono font-black text-sm">
                          {spec.weightPerSqFt} / sq.ft
                        </span>
                      </div>
                    </div>

                    {/* Weight & Density Capacity Visual Meter */}
                    <div className="mt-4 pt-3 border-t border-line/50">
                      <div className="flex justify-between items-center text-[10px] font-mono font-extrabold text-steel-dim mb-1.5">
                        <span className="flex items-center gap-1">
                          <Activity size={12} className="text-accent-2" />
                          MESH DENSITY & LOAD RATING
                        </span>
                        <span className="text-accent-2">{densityPct}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-surface-2 border border-line overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${densityPct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="h-full bg-accent-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
}




