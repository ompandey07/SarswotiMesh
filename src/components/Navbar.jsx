import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Globe, Phone, Smartphone, Trophy } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { navLinks } from "@/data/content";
import Bi from "./Bi";
import logo from "@/assets/images/Logo.png";

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-bg/95 backdrop-blur-md border-b border-line shadow-md py-1"
            : "bg-bg/85 backdrop-blur-sm border-b border-line/30 py-1"
        }`}
      >
        {/* Top Header Hotlines Strip - High Contrast Theme Adaptive Layout */}
        <div className="bg-surface border-b border-line py-1.5 text-[11px] font-mono font-bold text-steel shadow-2xs">
          <div className="container-app flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4">
            {/* First in Chitwan Highlight */}
            <div className="flex items-center gap-1.5 text-ink font-black text-center sm:text-left text-[11px] sm:text-xs">
              <Trophy size={13} className="text-accent-2 shrink-0" />
              <span>
                <Bi ne="चितवन, नेपालको पहिलो जाली उद्योग" en="1st Wire Mesh Factory in Chitwan, Nepal" />{" "}
                <strong className="text-accent-2 font-mono font-black">(२५-२८ वर्ष)</strong>
              </span>
            </div>

            {/* Phone Hotlines */}
            <div className="flex items-center flex-wrap justify-center sm:justify-end gap-2.5 sm:gap-4 text-steel text-[10px] sm:text-[11px]">
              <a href="tel:056595345" className="inline-flex items-center gap-1 text-ink hover:text-accent-2 transition-colors">
                <Phone size={11} className="text-accent-2 shrink-0" />
                <span>Landline: <strong className="text-accent-2 font-black">056-595345</strong></span>
              </a>
              <span className="text-steel-dim">•</span>
              <div className="inline-flex items-center gap-1 text-ink">
                <Smartphone size={11} className="text-accent-2 shrink-0" />
                <span>Mob: <a href="tel:9845043095" className="text-accent-2 font-black hover:underline">9845043095</a>, <a href="tel:9845340852" className="text-accent-2 font-black hover:underline">9845340852</a></span>
              </div>
            </div>
          </div>
        </div>

        <div className="container-app flex items-center justify-between pt-1.5">
          {/* Top Left Logo with CSS blend mode for stunning visual integration */}
          <a href="#home" className="flex items-center shrink-0 group">
            <img
              src={logo}
              alt="Saraswoti Mesh Jali Workshop Logo"
              className="h-11 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 mix-blend-multiply dark:mix-blend-screen filter contrast-125 dark:brightness-125 drop-shadow-[0_2px_8px_rgba(201,122,61,0.25)]"
            />
          </a>

          {/* Compact Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 font-display-lang">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-black uppercase tracking-wider text-steel hover:text-accent-2 transition-colors relative group py-1"
              >
                <Bi ne={link.ne} en={link.en} />
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent-2 transition-all duration-250 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle Button - Matching h-9 Height */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle Theme Mode"
              className="flex items-center justify-center h-9 w-9 border border-line bg-surface text-ink hover:border-accent-2 hover:text-accent-2 transition-colors shrink-0"
              title={theme === "dark" ? "Switch to White Light Theme" : "Switch to Black Dark Theme"}
            >
              {theme === "dark" ? <Sun size={17} className="text-amber-400" /> : <Moon size={17} className="text-slate-800" />}
            </button>

            {/* Language Switcher - Height h-9 */}
            <div className="hidden sm:flex items-center h-9 border border-line bg-surface p-0.5 text-xs font-bold shrink-0">
              <span className="px-2 text-steel-dim flex items-center">
                <Globe size={14} className="text-accent-2" />
              </span>
              <button
                type="button"
                onClick={() => setLang("ne")}
                className={`px-3 py-1 h-full flex items-center transition-colors ${
                  lang === "ne" ? "bg-accent-2 text-[#0a0c0e] font-black" : "text-steel hover:text-ink"
                }`}
              >
                नेपाली
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`px-3 py-1 h-full flex items-center transition-colors ${
                  lang === "en" ? "bg-accent-2 text-[#0a0c0e] font-black" : "text-steel hover:text-ink"
                }`}
              >
                EN
              </button>
            </div>

            {/* Mobile Drawer Trigger Button */}
            <button
              type="button"
              aria-label="Menu"
              aria-expanded={drawerOpen}
              onClick={() => setDrawerOpen((v) => !v)}
              className="lg:hidden flex items-center justify-center h-9 w-9 border border-line bg-surface text-ink"
            >
              {drawerOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
              className="fixed top-0 right-0 z-50 h-full w-[82%] max-w-xs bg-surface border-l border-line lg:hidden flex flex-col gap-1 pt-20 px-6 shadow-2xl"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setDrawerOpen(false)}
                  className="py-3.5 border-b border-line text-sm font-black uppercase tracking-wider text-ink hover:text-accent-2 font-display-lang"
                >
                  <Bi ne={link.ne} en={link.en} />
                </a>
              ))}

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-line">
                <span className="text-xs font-bold uppercase text-steel-dim">Theme</span>
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="flex items-center gap-2 px-3 py-1.5 border border-line text-xs font-bold"
                >
                  {theme === "dark" ? <Sun size={15} className="text-amber-400" /> : <Moon size={15} />}
                  <span>{theme === "dark" ? "Dark Mode" : "Light Mode"}</span>
                </button>
              </div>

              <div className="flex items-center gap-1 mt-4 border border-line p-1 text-xs font-bold w-full justify-center">
                <span className="px-2 text-accent-2">
                  <Globe size={15} />
                </span>
                <button
                  type="button"
                  onClick={() => setLang("ne")}
                  className={`flex-1 py-2 text-center ${lang === "ne" ? "bg-accent-2 text-[#0a0c0e] font-black" : "text-steel"}`}
                >
                  नेपाली
                </button>
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`flex-1 py-2 text-center ${lang === "en" ? "bg-accent-2 text-[#0a0c0e] font-black" : "text-steel"}`}
                >
                  English
                </button>
              </div>

              <div className="mt-auto pb-6 pt-4 border-t border-line text-center text-xs font-bold text-steel">
                <span><Bi ne="विकासकर्ता:" en="Developed By" /> </span>
                <a
                  href="https://www.omkumarpandey.com.np/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-2 font-black hover:underline"
                >
                  Om Pandey
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
