import Reveal from "./Reveal";
import Bi from "./Bi";
import { contactInfo } from "@/data/content";

export default function LocationMap() {
  return (
    <section className="relative py-20 sm:py-28 bg-bg transition-colors duration-300">
      <div className="container-app">
        <Reveal className="mb-10">
          <div className="inline-block border-l-2 border-accent-2 pl-3 py-0.5 text-xs font-extrabold tracking-[0.2em] text-accent-2 uppercase">
            <Bi ne="स्थान" en="Location" />
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black uppercase tracking-tight text-balance">
            <Bi ne="हामीलाई भेट्नुहोस्" en="FIND THE WORKSHOP" />
          </h2>
        </Reveal>

        <Reveal type="scale" className="relative overflow-hidden border border-line bg-surface">
          <iframe
            src={contactInfo.mapEmbedUrl}
            className="h-[380px] sm:h-[440px] w-full grayscale-[30%] contrast-[1.05]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Saraswoti Mesh Jali Manufacturing Workshop Location Map"
          />
          <div className="absolute bottom-5 left-5 border border-accent-2 bg-surface/90 backdrop-blur-md px-5 py-3.5 shadow-lg">
            <b className="block text-xs font-black tracking-wider uppercase text-ink font-mono">SARASWOTI MESH JALI WORKSHOP</b>
            <span className="text-xs font-bold text-accent-2 mt-0.5 block">
              <Bi ne="भरतपुर, महानगरपालिका, न्युरोड • प्रत्यक्ष कारखाना" en="Bharatpur Metropolitan, Nayaroad • Direct Workshop" />
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
