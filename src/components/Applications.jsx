import Reveal, { Stagger, StaggerItem } from "./Reveal";
import Bi from "./Bi";
import { applications } from "@/data/content";

export default function Applications() {
  return (
    <section id="applications" className="relative py-24 sm:py-32 bg-bg transition-colors duration-300">
      <div className="container-app">
        <Reveal className="mb-14">
          <div className="inline-block border-l-2 border-accent-2 pl-3 py-0.5 text-xs font-extrabold tracking-[0.2em] text-accent-2 uppercase">
            <Bi ne="प्रयोगहरू" en="Applications" />
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black uppercase tracking-tight text-balance">
            <Bi ne="विभिन्न प्रयोगका लागि निर्माण" en="BUILT FOR MANY APPLICATIONS" />
          </h2>
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {applications.map((a) => (
            <StaggerItem key={a.num}>
              <div className="h-full border border-line bg-surface p-7 transition-all duration-300 hover:border-accent-2">
                <div className="text-3xl font-black font-mono text-accent-2/40">#{a.num}</div>
                <h3 className="mt-4 text-base font-extrabold text-ink uppercase tracking-wide font-display-lang">
                  <Bi ne={a.titleNe} en={a.titleEn} />
                </h3>
                <p className="mt-2 text-xs font-medium text-steel leading-relaxed">
                  <Bi ne={a.descNe} en={a.descEn} />
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
