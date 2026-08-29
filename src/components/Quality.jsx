import Reveal, { Stagger, StaggerItem } from "./Reveal";
import Bi from "./Bi";
import { images, principles } from "@/data/content";

export default function Quality() {
  return (
    <section className="relative py-24 sm:py-32 bg-bg transition-colors duration-300">
      <div className="container-app grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <div className="inline-block border-l-2 border-accent-2 pl-3 py-0.5 text-xs font-extrabold tracking-[0.2em] text-accent-2 uppercase">
            <Bi ne="गुणस्तर" en="Quality" />
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black uppercase tracking-tight text-balance">
            <Bi ne="गुणस्तरलाई प्राथमिकतामा राखेर निर्माण" en="BUILT WITH QUALITY IN MIND" />
          </h2>

          <Stagger className="mt-10 flex flex-col gap-6">
            {principles.map((p) => (
              <StaggerItem key={p.num} className="flex gap-5 border border-line bg-surface p-5 transition-colors hover:border-accent-2">
                <b className="text-xl font-black font-mono text-accent-2 shrink-0 w-8">{p.num}</b>
                <div>
                  <h3 className="text-sm font-extrabold text-ink uppercase tracking-wide font-display-lang">
                    <Bi ne={p.titleNe} en={p.titleEn} />
                  </h3>
                  <p className="mt-1 text-xs text-steel font-medium leading-relaxed">
                    <Bi ne={p.descNe} en={p.descEn} />
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>

        <Reveal type="scale" className="relative aspect-square overflow-hidden border border-line bg-surface">
          <img
            src={images.meshJali.webp}
            alt="Close-up of galvanized wire mesh detail showing manufacturing precision"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
          <span className="absolute top-0 right-0 h-6 w-6 border-t-2 border-r-2 border-accent-2" />
          <span className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-accent-2" />
        </Reveal>
      </div>
    </section>
  );
}
