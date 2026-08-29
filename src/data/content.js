// Only the hero image needs a JPEG fallback (used as the <video> poster,
// which some older browsers require as a plain raster format). Every other
// image is only ever rendered as WebP, so we don't ship an unused JPEG twin.
import meshJaliWebp from "@/assets/images/mesh-jali.webp";
import poultryJaliWebp from "@/assets/images/poultry-jali.webp";
import gabionJaliWebp from "@/assets/images/gabion-jali.webp";
import manufacturingWorkshopWebp from "@/assets/images/manufacturing-workshop.webp";
import heroSection from "@/assets/images/hero-section.jpg";
import heroSectionWebp from "@/assets/images/hero-section.webp";

export const images = {
  meshJali: { webp: meshJaliWebp },
  poultryJali: { webp: poultryJaliWebp },
  gabionJali: { webp: gabionJaliWebp },
  manufacturingWorkshop: { webp: manufacturingWorkshopWebp },
  heroSection: { src: heroSection, webp: heroSectionWebp },
};

export const navLinks = [
  { href: "#home", ne: "गृहपृष्ठ", en: "Home" },
  { href: "#about", ne: "हाम्रोबारे", en: "About" },
  { href: "#products", ne: "उत्पादनहरू", en: "Products" },
  { href: "#applications", ne: "प्रयोगहरू", en: "Applications" },
  { href: "#manufacturing", ne: "निर्माण प्रक्रिया", en: "Manufacturing" },
  { href: "#contact", ne: "सम्पर्क", en: "Contact" },
];

export const heroTechItems = [
  {
    icon: "mesh",
    titleNe: "ग्याल्भनाइज्ड वायर मेश",
    titleEn: "Heavy Galvanized Wire Mesh",
    descNe: "उच्च क्षमता, खिया नलाग्ने र दीर्घकालीन स्थायित्व",
    descEn: "High-tensile, rust-resistant & durable engineering",
  },
  {
    icon: "security",
    titleNe: "सुरक्षा तथा घेराबार जाली",
    titleEn: "Security & Perimeter Fencing",
    descNe: "घर, खेतबारी, उद्योग र भवन सुरक्षाको लागि आदर्श",
    descEn: "Ideal for boundary enclosures, industrial & farm protection",
  },
  {
    icon: "gabion",
    titleNe: "गेबियन र इन्जिनियरिङ संरचना",
    titleEn: "Gabion & Retaining Solutions",
    descNe: "नदी नियन्त्रण, पहाडी पहिरो रोकथाम र पूर्वाधार",
    descEn: "River control, erosion barrier & retaining structures",
  },
];

export const stats = [
  { value: "10+", ne: "उत्पादन प्रकार", en: "Product Types" },
  { value: "100%", ne: "निर्माणमा केन्द्रित", en: "Manufacturing Focus" },
  { valueNe: "गुणस्तर", valueEn: "Quality", ne: "प्रेरित उत्पादन", en: "Driven Production" },
  { valueNe: "नेपाल", valueEn: "Nepal", ne: "स्थानीय निर्माण", en: "Local Manufacturing" },
];

export const products = [
  {
    num: "01",
    image: images.meshJali,
    alt: "Galvanized mesh jali manufactured for fencing and construction applications",
    titleNe: "मेश जाली",
    titleEn: "Mesh Jali",
    descNe: "बार लगाउने, निर्माण र सामान्य प्रयोजनका लागि टिकाउ वायर मेश समाधान।",
    descEn: "Durable wire mesh solutions for fencing, construction and general-purpose applications.",
  },
  {
    num: "02",
    image: images.poultryJali,
    alt: "Galvanized poultry jali for agricultural and poultry enclosure applications",
    titleNe: "पोल्ट्री जाली",
    titleEn: "Poultry Jali",
    descNe: "पोल्ट्री फार्म, पशु खोर र कृषि प्रयोगका लागि सुक्ष्म ग्याल्भनाइज्ड मेश।",
    descEn: "Fine galvanized mesh designed for poultry farms, animal enclosures and agricultural applications.",
  },
  {
    num: "03",
    image: images.gabionJali,
    alt: "Gabion jali used for stone-filled civil engineering and retaining structures",
    titleNe: "गेबियन जाली",
    titleEn: "Gabion Jali",
    descNe: "गेबियन संरचना, रिटेनिङ वाल र क्षयकरण नियन्त्रणका लागि बलियो मेश समाधान।",
    descEn: "Strong mesh solutions for gabion structures, retaining walls and erosion protection.",
  },
  {
    num: "04",
    image: images.meshJali,
    alt: "Galvanized chain link security jali for boundary and industrial fencing",
    objectPosition: "70% 30%",
    titleNe: "सुरक्षा जाली",
    titleEn: "Security Jali",
    descNe: "सीमाना, व्यावसायिक तथा औद्योगिक क्षेत्रका लागि भरपर्दो बार लगाउने समाधान।",
    descEn: "Reliable fencing solutions for boundaries, commercial properties and industrial areas.",
  },
];

export const applications = [
  { num: "01", titleNe: "सुरक्षा", titleEn: "Security", descNe: "सीमाना बार र सम्पत्ति सुरक्षाका लागि।", descEn: "Boundary fencing and property protection." },
  { num: "02", titleNe: "कृषि", titleEn: "Agriculture", descNe: "पोल्ट्री तथा पशु खोरका लागि।", descEn: "Poultry and animal enclosures." },
  { num: "03", titleNe: "निर्माण", titleEn: "Construction", descNe: "निर्माण तथा संरचनात्मक प्रयोगका लागि।", descEn: "Construction and structural applications." },
  {
    num: "04",
    titleNe: "सिभिल इन्जिनियरिङ",
    titleEn: "Civil Engineering",
    descNe: "गेबियन प्रणाली, रिटेनिङ संरचना र क्षयकरण नियन्त्रण।",
    descEn: "Gabion systems, retaining structures and erosion protection.",
  },
];

export const processSteps = [
  { num: "01", ne: "तार तयारी", en: "Wire Preparation" },
  { num: "02", ne: "मेश निर्माण", en: "Mesh Formation" },
  { num: "03", ne: "गुणस्तर जाँच", en: "Quality Check" },
  { num: "04", ne: "काट्ने र फिनिसिङ", en: "Cutting & Finishing" },
  { num: "05", ne: "प्याकिङ", en: "Packing" },
  { num: "06", ne: "डेलिभरी", en: "Delivery" },
];

export const principles = [
  { num: "01", titleNe: "टिकाउपन", titleEn: "Durability", descNe: "लामो समयसम्म व्यावहारिक प्रयोगका लागि डिजाइन गरिएको।", descEn: "Designed for long-lasting, practical use." },
  { num: "02", titleNe: "परिशुद्धता", titleEn: "Precision", descNe: "निरन्तर र सटीक मेश निर्माण प्रक्रिया।", descEn: "Consistent manufacturing and mesh formation." },
  { num: "03", titleNe: "भरपर्दोपन", titleEn: "Reliability", descNe: "वास्तविक प्रयोगलाई ध्यानमा राखेर बनाइएका समाधान।", descEn: "Solutions designed around real applications." },
];

export const marqueeItems = [
  { ne: "स्थानीय उत्पादन", en: "LOCAL MANUFACTURING" },
  { ne: "गुणस्तरीय सामग्री", en: "QUALITY MATERIALS" },
  { ne: "कस्टम समाधान", en: "CUSTOM SOLUTIONS" },
  { ne: "टिकाउ उत्पादन", en: "DURABLE PRODUCTS" },
  { ne: "भरपर्दो सेवा", en: "RELIABLE SERVICE" },
];

export const productOptions = [
  { value: "mesh-jali", ne: "मेश जाली", en: "Mesh Jali" },
  { value: "poultry-jali", ne: "पोल्ट्री जाली", en: "Poultry Jali" },
  { value: "gabion-jali", ne: "गेबियन जाली", en: "Gabion Jali" },
  { value: "security-jali", ne: "सुरक्षा जाली", en: "Security Jali" },
  { value: "custom", ne: "अन्य / कस्टम", en: "Other / Custom" },
];

export const contactInfo = {
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.845918957861!2d84.4116120760855!3d27.691156726204206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fb00520d2d3f%3A0x5919d333adc7d0cb!2sSaraswoti%20Mesh%20Jali%20Manufacturing%20Workshop!5e0!3m2!1sen!2snp!4v1787332198154!5m2!1sen!2snp",
};
