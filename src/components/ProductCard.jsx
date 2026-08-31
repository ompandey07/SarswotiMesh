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
      className="group border border-line bg-surface overflow-hidden transition-colors hover:border-accent-2 h-full flex flex-col justify-between"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-line bg-surface-2 flex-shrink-0">
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
        <span className="absolute top-3 left-3 text-xl font-black text-white/60 drop-shadow-md select-none font-mono bg-bg/60 backdrop-blur-xs px-2 py-0.5 border border-line">
          #{product.num}
        </span>
        
        {product.highlightEn && (
          <span className="absolute top-3 right-3 border border-accent-2/60 bg-accent-2/90 backdrop-blur-xs px-2.5 py-1 text-[10px] font-black uppercase text-[#0a0c0e] tracking-wider font-mono shadow-sm">
            <Bi ne={product.highlightNe} en={product.highlightEn} />
          </span>
        )}
      </div>

      <div className="p-5 flex items-center justify-center text-center flex-1 min-h-[76px] bg-surface">
        <h3 className="text-base font-black text-ink uppercase tracking-wide">
          <Bi ne={product.titleNe} en={product.titleEn} className="font-display-lang" />
        </h3>
      </div>
    </motion.div>
  );
}
