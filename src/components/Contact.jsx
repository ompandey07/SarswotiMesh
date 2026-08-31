import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Check, Trophy } from "lucide-react";
import Reveal from "./Reveal";
import Bi from "./Bi";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { productOptions } from "@/data/content";

const infoItems = [
  {
    icon: MapPin,
    titleNe: "ठेगाना",
    titleEn: "Location",
    valueNe: "भरतपुर, महानगरपालिका, न्युरोड, चितवन, नेपाल",
    valueEn: "Bharatpur Metropolitan, Nayaroad, Chitwan, Nepal",
  },
  {
    icon: Phone,
    titleNe: "ल्यान्डलाइन फोन",
    titleEn: "Landline Telephone",
    value: "056-595345",
    link: "tel:056595345",
  },
  {
    icon: Phone,
    titleNe: "मोबाइल अर्डर हटलाइन",
    titleEn: "Mobile Order Hotlines",
    value: "9845043095, 9845340852",
    link: "tel:9845043095",
  },
  {
    icon: Mail,
    titleNe: "इमेल",
    titleEn: "Email",
    value: "info@saraswotimesh.com",
    link: "mailto:info@saraswotimesh.com",
  },
  {
    icon: Clock,
    titleNe: "खुल्ने समय",
    titleEn: "Opening Hours",
    value: "Sun - Fri: 8:00 AM - 6:00 PM",
  },
];

export default function Contact() {
  const { lang } = useLanguage();
  const [sent, setSent] = useState(false);
  const [product, setProduct] = useState("anti-climb");

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
    setTimeout(() => setSent(false), 2400);
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-bg transition-colors duration-300">
      <div className="container-app grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
        <Reveal>
          <div className="inline-block border-l-2 border-accent-2 pl-3 py-0.5 text-xs font-extrabold tracking-[0.2em] text-accent-2 uppercase">
            <Bi ne="सम्पर्क तथा अर्डर" en="Contact & Factory Order" />
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black uppercase tracking-tight text-balance">
            <span className="block lang-ne">चितवनको पहिलो जाली उद्योगसँग जोडिनुहोस्।</span>
            <span className="block lang-en">CONNECT WITH CHITWAN'S FIRST MESH FACTORY.</span>
          </h2>

          <div className="mt-4 border border-amber-500/60 bg-amber-500/10 dark:bg-amber-500/20 p-3.5 flex items-center gap-3">
            <Trophy size={18} className="text-amber-600 dark:text-amber-400 shrink-0" />
            <div>
              <div className="text-xs font-black text-amber-800 dark:text-amber-300 uppercase tracking-wide">
                <Bi ne="चितवन, नेपालको पहिलो मेश जाली उद्योग" en="1st Wire Mesh Factory in Chitwan, Nepal" />
              </div>
              <p className="text-[11px] text-steel font-medium mt-0.5">
                <Bi ne="२५-२८ वर्षको निरन्तर विश्वास र उत्कृष्ट गुणस्तर।" en="Serving construction & infrastructure for 25-28+ years." />
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4">
            {infoItems.map((it, idx) => (
              <div key={idx} className="flex items-start gap-4 border border-line bg-surface p-4 transition-colors hover:border-accent-2">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-accent-2 bg-accent-dim text-accent-2">
                  <it.icon size={17} />
                </div>
                <div>
                  <b className="block text-xs font-extrabold uppercase tracking-wider text-ink font-display-lang">
                    <Bi ne={it.titleNe} en={it.titleEn} />
                  </b>
                  {it.link ? (
                    <a href={it.link} className="text-xs font-mono font-bold text-accent-2 hover:underline mt-0.5 block">
                      {it.value}
                    </a>
                  ) : (
                    <span className="text-xs font-medium text-steel mt-0.5 block">
                      {it.valueNe ? <Bi ne={it.valueNe} en={it.valueEn} /> : it.value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal type="scale">
          <form onSubmit={handleSubmit} className="border border-line bg-surface p-7 sm:p-9 shadow-md">
            <div className="border-b border-line pb-4 mb-6">
              <h3 className="text-lg font-black text-ink uppercase tracking-wide">
                <Bi ne="कोटेसन फारम" en="DIRECT QUOTE REQUEST" />
              </h3>
              <p className="text-xs text-steel mt-1">
                <Bi ne="तपाईंको आवश्यकता अनुसार प्रत्यक्ष कारखानामार्फत अर्डर गर्नुहोस्।" en="Direct factory orders custom to your gauge and dimension." />
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="name" className="text-xs font-extrabold uppercase tracking-wider text-steel mb-2 block">
                  <Bi ne="नाम" en="Name" />
                </Label>
                <Input id="name" name="name" required placeholder="Full Name" />
              </div>
              <div>
                <Label htmlFor="phone" className="text-xs font-extrabold uppercase tracking-wider text-steel mb-2 block">
                  <Bi ne="फोन" en="Phone" />
                </Label>
                <Input id="phone" name="phone" type="tel" required placeholder="Phone Number" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 mt-5">
              <div>
                <Label htmlFor="email" className="text-xs font-extrabold uppercase tracking-wider text-steel mb-2 block">
                  <Bi ne="इमेल" en="Email" />
                </Label>
                <Input id="email" name="email" type="email" placeholder="email@example.com" />
              </div>
              <div>
                <Label htmlFor="product" className="text-xs font-extrabold uppercase tracking-wider text-steel mb-2 block">
                  <Bi ne="उत्पादन" en="Product" />
                </Label>
                <Select value={product} onValueChange={setProduct} name="product">
                  <SelectTrigger id="product">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent border-radius="0">
                    {productOptions.map((o) => (
                      <SelectItem key={o.value} value={o.value}>
                        {lang === "ne" ? o.ne : o.en}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mt-5">
              <Label htmlFor="message" className="text-xs font-extrabold uppercase tracking-wider text-steel mb-2 block">
                <Bi ne="सन्देश" en="Message" />
              </Label>
              <Textarea id="message" name="message" placeholder="Specify mesh height, width, gauge thickness or purpose..." />
            </div>

            <Button type="submit" size="lg" className="mt-6 w-full h-14">
              <AnimatePresence mode="wait" initial={false}>
                {sent ? (
                  <motion.span
                    key="sent"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="flex items-center gap-2 text-white font-extrabold uppercase"
                  >
                    <Check size={18} />
                    {lang === "ne" ? "सफलतापूर्वक पठाइयो" : "QUOTE REQUEST SENT"}
                  </motion.span>
                ) : (
                  <motion.span key="send" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}>
                    <Bi ne="सोधपुछ पठाउनुहोस्" en="Submit Quote Inquiry" />
                  </motion.span>
                )}
              </AnimatePresence>
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
