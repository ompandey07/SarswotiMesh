import { useEffect, useRef } from "react";
import Reveal, { Stagger, StaggerItem } from "./Reveal";
import Bi from "./Bi";
import { images, stats } from "@/data/content";
import { animateCounter } from "@/lib/animeUtils";

export default function About() {
  const statValRef = useRef(null);

  useEffect(() => {
    if (statValRef.current) {
      animateCounter(statValRef.current, 0, 10, "+", 1800);
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
        </Reveal>

        <Reveal>
          <div className="inline-block border-l-2 border-accent-2 pl-3 py-0.5 text-xs font-extrabold tracking-[0.2em] text-accent-2 uppercase">
            <Bi ne="हाम्रोबारे" en="About the Workshop" />
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black leading-tight text-balance uppercase tracking-tight">
            <span className="block lang-ne">यहीँ निर्माण। वास्तविक प्रयोगका लागि तयार।</span>
            <span className="block lang-en">MADE HERE. BUILT FOR REAL WORLD USE.</span>
          </h2>
          <p className="mt-5 text-steel leading-relaxed font-medium">
            <Bi
              ne="Saraswoti Mesh Jali Manufacturing Workshop भरतपुरमा अवस्थित एक स्थानीय निर्माण एकाइ हो, जसले सुरक्षा, कृषि, निर्माण र पूर्वाधार क्षेत्रका लागि भरपर्दो वायर मेश समाधान उत्पादन गर्दछ। हामी प्रत्येक प्रयोगको आवश्यकता अनुसार जाली डिजाइन र निर्माण गर्न ध्यान दिन्छौं।"
              en="Saraswoti Mesh Jali Manufacturing Workshop is a local manufacturing unit based in Bharatpur, focused on producing reliable wire mesh solutions for security, agriculture, construction and infrastructure applications. Every mesh is shaped around the real-world need it will serve."
            />
          </p>

          <Stagger className="mt-10 grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <StaggerItem key={i} className="border border-line bg-surface p-5 transition-colors hover:border-accent-2">
                <b className="block text-2xl sm:text-3xl font-black text-accent-2 font-mono">
                  {i === 0 ? (
                    <span ref={statValRef}>10+</span>
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
