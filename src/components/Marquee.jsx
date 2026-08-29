import Bi from "./Bi";
import { marqueeItems } from "@/data/content";

export default function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems];
  return (
    <div className="relative overflow-hidden border-y border-line bg-surface py-4 transition-colors duration-300">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {doubled.map((m, i) => (
          <span key={i} className="flex items-center gap-3 text-xs font-black uppercase tracking-wider text-steel shrink-0">
            <Bi ne={m.ne} en={m.en} className="font-display-lang" />
            <span className="text-accent-2 font-mono">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
