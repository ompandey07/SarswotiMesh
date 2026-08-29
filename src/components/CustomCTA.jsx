import Reveal from "./Reveal";
import Bi from "./Bi";
import { images } from "@/data/content";

export default function CustomCTA() {
  return (
    <section className="relative py-24 sm:py-32 bg-bg-alt border-y border-line transition-colors duration-300">
      <div className="container-app grid lg:grid-cols-2 gap-14 items-center">
        <Reveal type="scale" className="relative aspect-[4/3] overflow-hidden border border-line bg-surface">
          <img
            src={images.meshJali.webp}
            alt="Wire mesh sample used to illustrate custom mesh dimension requirements"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
          <span className="absolute left-6 top-1/2 -translate-y-1/2 h-2/3 w-px bg-accent-2/60" />
          <span className="absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-bold tracking-widest text-accent-2">
            <Bi ne="उचाइ" en="HEIGHT" />
          </span>
          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 w-2/3 h-px bg-accent-2/60" />
          <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-widest text-accent-2">
            <Bi ne="चौडाइ" en="WIDTH" />
          </span>
          <span className="absolute top-4 right-4 border border-accent-2/60 bg-accent-dim px-3 py-1 text-[10px] font-bold tracking-widest text-accent-2 uppercase">
            <Bi ne="तार व्यास" en="WIRE DIAMETER" />
          </span>
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
            className="mt-8 inline-flex items-center h-14 px-8 border border-accent-2 bg-accent-2 text-[#0a0c0e] font-extrabold uppercase tracking-wider hover:bg-accent hover:text-white transition-colors"
          >
            <Bi ne="कोटेसन माग्नुहोस्" en="Request a Quote" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
