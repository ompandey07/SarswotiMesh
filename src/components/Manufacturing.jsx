import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";
import Bi from "./Bi";
import { processSteps } from "@/data/content";

export default function Manufacturing() {
  const trackRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.75", "end 0.4"],
  });
  const fillWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="manufacturing" className="relative py-24 sm:py-32 bg-bg-alt border-b border-line transition-colors duration-300">
      <div className="container-app">
        <Reveal className="mb-16">
          <div className="inline-block border-l-2 border-accent-2 pl-3 py-0.5 text-xs font-extrabold tracking-[0.2em] text-accent-2 uppercase">
            <Bi ne="निर्माण प्रक्रिया" en="Manufacturing Process" />
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black uppercase tracking-tight text-balance">
            <Bi ne="हामी कसरी निर्माण गर्छौं" en="HOW WE MAKE IT" />
          </h2>
        </Reveal>

        <div ref={trackRef} className="relative">
          <div className="absolute top-5 left-0 right-0 h-px bg-line-strong hidden md:block">
            <motion.div className="h-full bg-accent-2" style={{ width: fillWidth }} />
          </div>

          <div className="grid gap-8 md:grid-cols-6">
            {processSteps.map((s, i) => (
              <ProcessStep key={s.num} step={s} index={i} total={processSteps.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ step }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
      className="flex flex-col items-start md:items-center md:text-center gap-3 border border-line bg-surface p-4 transition-colors hover:border-accent-2"
    >
      <div className="flex h-10 w-10 items-center justify-center border border-accent-2 bg-accent-dim text-xs font-black font-mono text-accent-2">
        {step.num}
      </div>
      <h3 className="text-xs font-bold uppercase tracking-wider text-ink font-display-lang">
        <Bi ne={step.ne} en={step.en} />
      </h3>
    </motion.div>
  );
}
