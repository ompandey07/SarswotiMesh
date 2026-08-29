import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Bi from "./Bi";

export default function ProductCard({ product }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 });

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      whileHover={{ y: -5 }}
      className="group border border-line bg-surface overflow-hidden transition-colors hover:border-accent-2"
    >
      <div className="relative aspect-[4/3] overflow-hidden border-b border-line bg-surface-2">
        <img
          src={product.image.webp}
          alt={product.alt}
          loading="lazy"
          width={1920}
          height={1072}
          style={product.objectPosition ? { objectPosition: product.objectPosition } : undefined}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-80" />
        <span className="absolute top-3 left-3 text-2xl font-black text-ink-dim/30 select-none font-mono">#{product.num}</span>
        
        {/* Wireframe Corner Accents */}
        <div className="absolute top-2 right-2 text-accent-2/60 text-xs font-mono select-none">+</div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-black text-ink uppercase tracking-wide">
          <Bi ne={product.titleNe} en={product.titleEn} className="font-display-lang" />
        </h3>
        <p className="mt-2 text-xs text-steel leading-relaxed font-medium">
          <Bi ne={product.descNe} en={product.descEn} />
        </p>
        <a
          href="#contact"
          className="mt-5 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-accent-2 group/link"
        >
          <Bi ne="विवरण तथा अर्डर" en="VIEW & ORDER" />
          <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
}
