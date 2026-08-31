import { useEffect, useRef } from "react";
import { Trophy } from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "./Reveal";
import Bi from "./Bi";
import { images, stats } from "@/data/content";
import { animateCounter } from "@/lib/animeUtils";

export default function About() {
  const statValRef = useRef(null);

  useEffect(() => {
    if (statValRef.current) {
      animateCounter(statValRef.current, 0, 28, "+", 1800);
    }
  }, []);

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-bg transition-colors duration-300">
      <div className="container-app grid lg:grid-cols-2 gap-14 items-center">
        <Reveal type="scale" className="relative aspect-[4/5] sm:aspect-[16/11] border border-line bg-surface overflow-hidden">
          <img
            src={images.manufacturingWorkshop.webp}
            alt="Wire mesh manufacturing workshop and production facility"
            className="h-full w-full object-cover"
            loading="lazy"
            width={1920}
            height={1072}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
          <span className="absolute top-0 left-0 h-6 w-6 border-t-2 border-l-2 border-accent-2" />
          <span className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-accent-2" />
          
          {/* Highlight Banner on Image */}
          <div className="absolute bottom-4 left-4 right-4 border border-amber-500/60 bg-surface/90 backdrop-blur-md p-3.5 shadow-lg">
            <div className="flex items-center gap-2 text-xs font-black text-amber-700 dark:text-amber-300 uppercase tracking-wide">
              <Trophy size={14} className="text-amber-600 dark:text-amber-400 shrink-0" />
              <Bi ne="चितवन, नेपालको पहिलो मेश जाली उद्योग" en="1st Wire Mesh Manufacturer in Chitwan, Nepal" />
            </div>
            <p className="text-[11px] text-steel font-medium mt-1">
              <Bi ne="२५-२८ वर्षको लगातार निर्माण अनुभव र भरपर्दो सेवा।" en="Building trust across Nepal with 25-28 years of dedicated craftsmanship." />
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="inline-block border-l-2 border-accent-2 pl-3 py-0.5 text-xs font-extrabold tracking-[0.2em] text-accent-2 uppercase">
            <Bi ne="हाम्रोबारे" en="About the Workshop" />
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black leading-tight text-balance uppercase tracking-tight">
            <span className="block lang-ne">चितवनको पहिलो जाली उद्योग। २५–२८ वर्षको निर्माण अनुभव।</span>
            <span className="block lang-en">FIRST IN CHITWAN, NEPAL. 25–28 YEARS LEGACY.</span>
          </h2>
          <p className="mt-5 text-steel leading-relaxed font-medium">
            <Bi
              ne="Saraswoti Mesh Jali Manufacturing Workshop भरतपुरमा अवस्थित चितवन, नेपालको पहिलो मेश जाली निर्माण उद्योग हो। २५-२८ वर्षभन्दा बढीको अनुभवका साथ हामीले सुरक्षा, कृषि, निर्माण र पूर्वाधार क्षेत्रका लागि उच्च गुणस्तरीय ग्याल्भनाइज्ड जाली उत्पादन गर्दै आएका छौं।"
              en="Saraswoti Mesh Jali Manufacturing Workshop is the pioneer and first wire mesh manufacturing factory established in Chitwan, Nepal. Backed by over 25-28 years of experience, we specialize in high-tensile galvanized wire mesh, anti-climb fencing, razor wire, and custom industrial solutions."
            />
          </p>

          <Stagger className="mt-10 grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <StaggerItem key={i} className="border border-line bg-surface p-5 transition-colors hover:border-accent-2">
                <b className="block text-2xl sm:text-3xl font-black text-accent-2 font-mono">
                  {i === 0 ? (
                    <span>25-28+</span>
                  ) : (
                    s.value ?? <Bi ne={s.valueNe} en={s.valueEn} />
                  )}
                </b>
                <span className="mt-1 block text-xs font-bold uppercase tracking-wider text-steel-dim">
                  <Bi ne={s.ne} en={s.en} />
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>
      </div>
    </section>
  );
}

