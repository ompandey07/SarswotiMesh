import { useEffect, useRef, useState } from "react";
import { ArrowRight, MapPin, Grid3x3, ShieldCheck, Mountain, Zap, Volume2, VolumeX, CheckCircle2, Factory, Layers } from "lucide-react";
import Bi from "./Bi";
import { heroTechItems, images, products } from "@/data/content";
import heroVideo from "@/assets/video/hero-section.mp4";
import { animate, utils } from "animejs";

const iconMap = {
  mesh: Grid3x3,
  security: ShieldCheck,
  gabion: Mountain,
};

const heroShowcases = [
  {
    id: "mesh-01",
    image: images.meshJali.webp,
    titleNe: "ग्याल्भनाइज्ड चेनलिङ्क मेश जाली",
    titleEn: "Galvanized Chain-Link Mesh Jali",
    descNe: "घर, खेतबारी र उद्योग सुरक्षाको लागि भारी क्षमताको जाली।",
    descEn: "Heavy-duty perimeter fencing for homes, farms & industrial security.",
    tag: "8–14 SWG Wire",
  },
  {
    id: "gabion-02",
    image: images.gabionJali.webp,
    titleNe: "सिभिल गेबियन रिटेनिङ जाली",
    titleEn: "Civil Gabion Retaining Jali",
    descNe: "माटो थेग्ने पर्खाल, नदी किनार र पहिरो रोकथामका लागि।",
    descEn: "Stone-filled wire cages for retaining walls & riverbank erosion control.",
    tag: "Heavy Zinc Galvanized",
  },
  {
    id: "poultry-03",
    image: images.poultryJali.webp,
    titleNe: "सुक्ष्म ग्याल्भनाइज्ड पोल्ट्री जाली",
    titleEn: "Fine Galvanized Poultry Jali",
    descNe: "पोल्ट्री फार्म र पशु खोर निर्माणका लागि सुक्ष्म मेश।",
    descEn: "High-density fine mesh for poultry farms & livestock enclosures.",
    tag: "Fine Opening Mesh",
  },
  {
    id: "workshop-04",
    image: images.manufacturingWorkshop.webp,
    titleNe: "भरतपुर प्रत्यक्ष म्यानुफ्याक्चरिङ वर्कशप",
    titleEn: "Bharatpur Direct Manufacturing Facility",
    descNe: "न्युरोड भरतपुरमा अत्याधुनिक मेसिनरीद्वारा प्रत्यक्ष उत्पादन।",
    descEn: "Direct workshop production with heavy machinery in Bharatpur Nayaroad.",
    tag: "Direct Factory",
  },
];

export default function Hero() {
  const videoRef = useRef(null);
  const heroRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [activeShowcase, setActiveShowcase] = useState(heroShowcases[0]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }

    if (heroRef.current) {
      const items = heroRef.current.querySelectorAll(".hero-animate-el");
      if (items.length) {
        animate(items, {
          translateY: [35, 0],
          opacity: [0, 1],
          delay: utils.stagger(120, { start: 100 }),
          duration: 850,
          ease: "outCubic",
        });
      }
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="home" className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-28 pb-16 transition-colors duration-300">
      {/* Background Video Layer at z-0 */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={images.heroSection.src}
          className="h-full w-full object-cover scale-105 filter brightness-110 contrast-[1.08]"
        />

        {/* High-visibility contrast gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/90 via-bg/50 to-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/95 via-bg/50 to-bg/85" />
      </div>

      {/* Signature Mesh Pattern Grid */}
      <div className="mesh-bg z-0 opacity-20" />

      <div ref={heroRef} className="container-app relative z-10 my-auto py-6">
        {/* Top Notification Bar */}
        <div className="hero-animate-el flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wider">
            <div className="flex items-center gap-2 border border-accent-2/60 bg-accent-dim px-3.5 py-1.5 text-accent-2 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping bg-accent-2 opacity-75" />
                <span className="relative inline-flex h-2 w-2 bg-accent-2" />
              </span>
              <Bi ne="प्रत्यक्ष कारखाना उत्पादन" en="Direct Workshop Manufacturing" />
            </div>

            <div className="hidden sm:flex items-center gap-1.5 text-steel border border-line bg-surface/90 px-3 py-1.5">
              <MapPin size={14} className="text-accent-2" />
              <Bi ne="भरतपुर, नेपाल — न्युरोड" en="Bharatpur, Nepal — Nayaroad" />
            </div>

            <div className="hidden md:flex items-center gap-1.5 text-steel-dim border border-line bg-surface/90 px-3 py-1.5">
              <Zap size={13} className="text-accent-2" />
              <Bi ne="१००% ग्याल्भनाइज्ड वायर मेश" en="100% Galvanized Steel Mesh" />
            </div>
          </div>

          {/* SINGLE Audio Toggle Button */}
          <button
            type="button"
            onClick={toggleMute}
            className="flex items-center gap-2 border border-accent-2 bg-surface px-4 py-1.5 text-xs font-black uppercase tracking-wider text-ink hover:border-accent hover:text-accent-2 transition-colors shadow-sm ml-auto"
            title={isMuted ? "Unmute Background Sound" : "Mute Sound"}
          >
            {isMuted ? <VolumeX size={15} className="text-steel-dim" /> : <Volume2 size={15} className="text-accent-2 animate-pulse" />}
            <span>{isMuted ? "AUDIO OFF (UNMUTE)" : "AUDIO ON"}</span>
          </button>
        </div>

        {/* 2-Column Split Layout */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          {/* Left Column: Headlines, Lead & Action Buttons */}
          <div>
            <div className="hero-animate-el inline-block border-l-2 border-accent-2 pl-3.5 py-0.5 mb-4 text-xs font-black uppercase tracking-widest text-accent-2">
              <Bi ne="नेपालको अग्रणी ग्याल्भनाइज्ड जाली उद्योग" en="NEPAL'S INDUSTRIAL WIRE MESH MANUFACTURER" />
            </div>

            <h1 className="hero-animate-el text-balance text-3xl sm:text-5xl lg:text-[4rem] lg:leading-[1.03] font-black tracking-tight uppercase text-ink">
              <span className="block lang-ne">बलियो जाली।</span>
              <span className="block lang-ne text-gradient-accent">दीर्घकालसम्मको भरपर्दो निर्माण।</span>
              <span className="block lang-en">PRECISE WIRE MESH.</span>
              <span className="block lang-en text-gradient-accent">BUILT FOR GENERATIONS.</span>
            </h1>

            <p className="hero-animate-el mt-5 max-w-xl text-base sm:text-lg text-steel font-medium leading-relaxed">
              <Bi
                ne="सुरक्षा, निर्माण, कृषि तथा पूर्वाधारका लागि अत्याधुनिक मेसिनरीबाट निर्मित ग्याल्भनाइज्ड जाली समाधान। भरतपुर, नेपालमा प्रत्यक्ष निर्माण।"
                en="Heavy-duty galvanized wire mesh engineered with maximum tensile strength for security fencing, agriculture, and civil infrastructure. Direct workshop production in Bharatpur, Nepal."
              />
            </p>

            {/* Feature Highlight Badges */}
            <div className="hero-animate-el mt-6 flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wider text-steel">
              <span className="border border-line bg-surface px-3 py-1 flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-accent-2" />
                Heavy Zinc Coating
              </span>
              <span className="border border-line bg-surface px-3 py-1 flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-accent-2" />
                Custom SWG Gauges
              </span>
              <span className="border border-line bg-surface px-3 py-1 flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-accent-2" />
                Retaining & Gabion
              </span>
            </div>

            {/* Action Buttons */}
            <div className="hero-animate-el mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#products"
                className="group inline-flex items-center gap-3 h-14 px-8 border border-accent-2 bg-accent-2 text-[#0a0c0e] font-black uppercase tracking-wider hover:bg-accent hover:text-white transition-colors shadow-md"
              >
                <Bi ne="उत्पादनहरू हेर्नुहोस्" en="Explore Products" />
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 h-14 px-8 border border-line bg-surface text-ink font-extrabold uppercase tracking-wider hover:border-accent-2 hover:text-accent-2 transition-colors shadow-sm"
              >
                <Bi ne="कोटेसन माग्नुहोस्" en="Request Quote" />
              </a>
            </div>

            {/* 4 Live Metric Stats Grid in Hero */}
            <div className="hero-animate-el mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-line">
              <div className="border border-line bg-surface p-3 text-center">
                <div className="text-xl font-black font-mono text-accent-2">10+ YRS</div>
                <div className="text-[10px] font-bold uppercase text-steel-dim mt-0.5">Manufacturing</div>
              </div>
              <div className="border border-line bg-surface p-3 text-center">
                <div className="text-xl font-black font-mono text-accent-2">100%</div>
                <div className="text-[10px] font-bold uppercase text-steel-dim mt-0.5">Galvanized</div>
              </div>
              <div className="border border-line bg-surface p-3 text-center">
                <div className="text-xl font-black font-mono text-accent-2">500+</div>
                <div className="text-[10px] font-bold uppercase text-steel-dim mt-0.5">Projects</div>
              </div>
              <div className="border border-line bg-surface p-3 text-center">
                <div className="text-xl font-black font-mono text-accent-2">DIRECT</div>
                <div className="text-[10px] font-bold uppercase text-steel-dim mt-0.5">Workshop</div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Product & Workshop Showcase Gallery Card */}
          <div className="hero-animate-el border border-line bg-surface p-6 shadow-2xl flex flex-col gap-5">
            <div className="flex items-center justify-between border-b border-line pb-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase text-accent-2 tracking-wider">
                <Layers size={16} />
                <span>EXECUTIVE PRODUCT SHOWCASE</span>
              </div>
              <span className="text-[10px] font-mono font-bold text-steel-dim border border-line px-2 py-0.5">
                BHARATPUR, NEPAL
              </span>
            </div>

            {/* Large Active Product Image Frame */}
            <div className="aspect-[16/10] w-full border border-line overflow-hidden relative bg-surface-2">
              <img
                src={activeShowcase.image}
                alt={activeShowcase.titleEn}
                className="h-full w-full object-cover transition-all duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/95 via-transparent to-transparent" />
              <span className="absolute top-3 right-3 border border-accent-2 bg-accent-dim px-3 py-1 text-[10px] font-black uppercase text-accent-2 font-mono">
                {activeShowcase.tag}
              </span>
              <div className="absolute bottom-3 left-3 right-3">
                <h3 className="text-sm font-black text-ink uppercase tracking-wide">
                  <Bi ne={activeShowcase.titleNe} en={activeShowcase.titleEn} />
                </h3>
                <p className="text-[11px] text-steel font-medium mt-0.5 line-clamp-1">
                  <Bi ne={activeShowcase.descNe} en={activeShowcase.descEn} />
                </p>
              </div>
            </div>

            {/* Interactive Showcase Selector Cards */}
            <div className="grid grid-cols-4 gap-2">
              {heroShowcases.map((sc) => (
                <button
                  key={sc.id}
                  type="button"
                  onClick={() => setActiveShowcase(sc)}
                  className={`aspect-[4/3] border overflow-hidden transition-all ${
                    activeShowcase.id === sc.id
                      ? "border-accent-2 ring-1 ring-accent-2 opacity-100"
                      : "border-line opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={sc.image} alt={sc.titleEn} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>

            {/* Workshop Direct Guarantee Callout */}
            <div className="border border-line bg-bg p-3 flex items-center justify-between text-xs font-bold">
              <span className="text-steel flex items-center gap-1.5">
                <Factory size={15} className="text-accent-2" />
                <span>DIRECT FACTORY PRICING • NO MIDDLEMEN</span>
              </span>
              <a href="#products" className="text-accent-2 font-black hover:underline uppercase text-[10px]">
                VIEW ALL →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
