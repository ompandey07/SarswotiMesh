import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import Bi from "./Bi";
import ProductCard from "./ProductCard";
import { products } from "@/data/content";

const categories = [
  { id: "all", ne: "सबै उत्पादनहरू (१४)", en: "All Products (14)" },
  { id: "fencing", ne: "घेराबार तथा सुरक्षा", en: "Fencing & Security" },
  { id: "agro", ne: "कृषि तथा पोल्ट्री", en: "Agro & Poultry" },
  { id: "industrial", ne: "औद्योगिक तथा सिभिल मेश", en: "Industrial & Sheet Mesh" },
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
              <Bi ne="हाम्रा उत्पादनहरू" en="Our Core Products" />
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-balance uppercase tracking-tight max-w-xl">
              <Bi ne="प्रयोग अनुसार निर्मित जाली" en="MESH BUILT AROUND ITS PURPOSE" />
            </h2>
            <p className="mt-2 text-xs font-medium text-steel">
              <Bi
                ne="प्रत्येक उत्पादनको नाम र स्वरूप अनुसार भरतपुर कारखानाबाट निर्मित विविध ग्याल्भनाइज्ड जाली।"
                en="Complete range of direct factory manufactured wire mesh products from our workshop."
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
              >
                <ProductCard product={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

