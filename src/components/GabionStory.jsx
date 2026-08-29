import Reveal from "./Reveal";
import Bi from "./Bi";
import { images } from "@/data/content";

export default function GabionStory() {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden border-y border-line bg-bg transition-colors duration-300">
      <div className="absolute inset-0">
        <img
          src={images.gabionJali.webp}
          alt="Gabion jali retaining wall structure used in civil engineering"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/85 to-bg/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/60" />
      </div>

      <div className="container-app relative z-10">
        <Reveal className="max-w-xl">
          <div className="inline-flex items-center border border-accent-2/60 bg-accent-dim px-4 py-1 text-xs font-bold text-accent-2 uppercase tracking-wider">
            <Bi ne="सिभिल इन्जिनियरिङ" en="Civil Engineering" />
          </div>
          <h2 className="mt-5 text-3xl sm:text-4xl font-black uppercase tracking-tight text-balance">
            <span className="block lang-ne">सम्हाल्ने बलियो संरचना।</span>
            <span className="block lang-en">STRENGTH THAT HOLDS.</span>
          </h2>
          <p className="mt-5 text-steel leading-relaxed font-medium">
            <Bi
              ne="गेबियन जाली ढुङ्गा भरिने बाकसहरू निर्माण गर्न प्रयोग गरिन्छ, जुन माटो थेग्ने पर्खाल, नदी किनार सुदृढीकरण र क्षयकरण नियन्त्रण संरचनामा प्रयोग हुन्छ। जालीको बुनाइले संरचनालाई लामो समयसम्म आकार र बल कायम राख्न मद्दत गर्दछ।"
              en="Gabion jali is used to build stone-filled wire cages for retaining walls, riverbank reinforcement and erosion-control structures. The mesh weave is designed to hold its shape and load over time in real civil engineering applications."
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
