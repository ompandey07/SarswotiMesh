import { useEffect, useRef, useState } from "react";
import { ArrowUp, Zap, Volume2, VolumeX, Globe } from "lucide-react";
import Bi from "./Bi";
import { navLinks } from "@/data/content";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import logo from "@/assets/images/Logo.png";
import footerVideo from "@/assets/video/footer.mp4";

export default function Footer() {
  const { setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const year = new Date().getFullYear();
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Footer video autoplay notice:", err);
      });
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <footer className="relative overflow-hidden pt-20 pb-10 border-t border-line transition-colors duration-300">
      {/* Background Video Layer at z-0 (Footer does NOT have solid bg-bg so video is fully visible) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          src={footerVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover opacity-50 filter brightness-110"
        />
        {/* Adaptive translucent backdrop overlay */}
        <div className="absolute inset-0 bg-bg/85 transition-colors duration-300" />
      </div>

      <div className="container-app relative z-10">
        {/* Workshop Production Video Banner & Single Audio Toggle */}
        <div className="mb-14 border border-line bg-surface p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-accent-2 bg-accent-dim text-accent-2">
              <Zap size={22} />
            </div>
            <div>
              <div className="text-xs font-black uppercase tracking-widest text-accent-2">
                <Bi ne="प्रत्यक्ष कारखाना भिडियो" en="Direct Workshop Video" />
              </div>
              <h3 className="text-base sm:text-lg font-black text-ink uppercase tracking-wide">
                <Bi ne="सरस्वती मेश जाली उत्पादन कार्यशाला" en="SARASWOTI MESH JALI WORKSHOP IN ACTION" />
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* SINGLE Audio Mute/Unmute Toggle Button */}
            <button
              type="button"
              onClick={toggleMute}
              className="flex items-center gap-2 border border-accent-2 bg-bg px-4 py-2 text-xs font-black uppercase tracking-wider text-ink hover:border-accent hover:text-accent-2 transition-colors shadow-sm"
            >
              {isMuted ? <VolumeX size={15} className="text-steel-dim" /> : <Volume2 size={15} className="text-accent-2 animate-pulse" />}
              <span>{isMuted ? "UNMUTE AUDIO" : "AUDIO ON"}</span>
            </button>
          </div>
        </div>

        {/* Footer Navigation Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] pb-14 border-b border-line">
          {/* Col 1: Logo & Factory Info */}
          <div>
            <a href="#home" className="inline-block mb-4">
              <img src={logo} alt="Saraswoti Mesh Jali Workshop Logo" className="h-14 w-auto object-contain" />
            </a>
            <div className="text-base font-black leading-snug uppercase font-display-lang">
              <span className="block lang-ne">
                सरस्वती मेश जाली <span className="text-accent-2">म्यानुफ्याक्चरिङ वर्कशप</span>
              </span>
              <span className="block lang-en">
                SARASWOTI MESH JALI <span className="text-accent-2">MANUFACTURING WORKSHOP</span>
              </span>
            </div>
            <div className="mt-4 inline-flex items-center gap-2 border border-line bg-surface px-3.5 py-1.5 text-xs font-bold text-steel">
              <span className="h-2 w-2 bg-accent-2" />
              <Bi ne="भरतपुर, महानगरपालिका, न्युरोड • प्रत्यक्ष कारखाना" en="Bharatpur Metropolitan, Nayaroad • Direct Workshop" />
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-accent-2 mb-4">
              <Bi ne="द्रुत लिङ्कहरू" en="Quick Links" />
            </h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-xs font-bold uppercase tracking-wider text-steel hover:text-accent-2 transition-colors">
                    <Bi ne={l.ne} en={l.en} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Language Selection (Uses Globe Icon - NO EMOJIS per request) */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-accent-2 mb-4">
              <Bi ne="भाषा चयन" en="Language Selection" />
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <button
                  type="button"
                  onClick={() => setLang("ne")}
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-steel hover:text-accent-2 transition-colors"
                >
                  <Globe size={14} className="text-accent-2" />
                  <span>नेपाली (Nepali)</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-steel hover:text-accent-2 transition-colors"
                >
                  <Globe size={14} className="text-accent-2" />
                  <span>English (EN)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Theme Selector */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-accent-2 mb-4">
              <Bi ne="थिम चयन" en="Theme Mode" />
            </h4>
            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={toggleTheme}
                className="inline-flex items-center justify-between px-3.5 py-2.5 border border-line bg-surface text-xs font-extrabold text-ink hover:border-accent-2 transition-colors"
              >
                <span>CURRENT MODE</span>
                <span className="text-accent-2 font-mono uppercase font-black">{theme}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Scroll Top Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs font-bold text-steel-dim">
          <span className="flex items-center gap-2 text-center sm:text-left">
            © {year} Saraswoti Mesh Jali Manufacturing Workshop.{" "}
            <Bi ne="सर्वाधिकार सुरक्षित।" en="All Rights Reserved." />
          </span>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 border border-line bg-surface px-4 py-2 text-xs font-black uppercase text-ink hover:border-accent-2 hover:text-accent-2 transition-colors"
          >
            <ArrowUp size={14} />
            <Bi ne="माथि जानुहोस्" en="BACK TO TOP" />
          </button>
        </div>
      </div>
    </footer>
  );
}
