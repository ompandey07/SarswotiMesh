// Only the hero image needs a JPEG fallback (used as the <video> poster,
// which some older browsers require as a plain raster format). Every other
// image is only ever rendered as WebP, so we don't ship an unused JPEG twin.
import meshJaliWebp from "@/assets/images/mesh-jali.webp";
import poultryJaliWebp from "@/assets/images/poultry-jali.webp";
import gabionJaliWebp from "@/assets/images/gabion-jali.webp";
import manufacturingWorkshopWebp from "@/assets/images/manufacturing-workshop.webp";
import heroSection from "@/assets/images/hero-section.jpg";
import heroSectionWebp from "@/assets/images/hero-section.webp";

// Products directory imports
import antiClimbFence from "@/assets/Products/Anti Climb Fence.webp";
import bindingWire from "@/assets/Products/Binding Wire.webp";
import concertinaFencing from "@/assets/Products/Concertina Fencing.jpeg";
import expandedMetal from "@/assets/Products/Expanded Metal.webp";
import fencingWire from "@/assets/Products/Fencing Wire.webp";
import fiberGlassMesh from "@/assets/Products/Fiber Glass Mesh.webp";
import giWire from "@/assets/Products/GI Wire.webp";
import hexagonalWire from "@/assets/Products/Hexagonal Wire Netting.webp";
import pvcHexagonal from "@/assets/Products/PVC Hexagonal Fencing.webp";
import perforatedSheet from "@/assets/Products/Perforated Sheet.webp";
import powderCoatedFence from "@/assets/Products/Powder Coated Fence.webp";
import vBendFence from "@/assets/Products/V Bend Fence.webp";
import weldedWireMesh from "@/assets/Products/Welded Wire Mesh.jpeg";
import galvanizedFinish from "@/assets/Products/galvanized finish.jpeg";

export const images = {
  meshJali: { webp: meshJaliWebp },
  poultryJali: { webp: poultryJaliWebp },
  gabionJali: { webp: gabionJaliWebp },
  manufacturingWorkshop: { webp: manufacturingWorkshopWebp },
  heroSection: { src: heroSection, webp: heroSectionWebp },
  antiClimbFence: { webp: antiClimbFence },
  bindingWire: { webp: bindingWire },
  concertinaFencing: { webp: concertinaFencing },
  expandedMetal: { webp: expandedMetal },
  fencingWire: { webp: fencingWire },
  fiberGlassMesh: { webp: fiberGlassMesh },
  giWire: { webp: giWire },
  hexagonalWire: { webp: hexagonalWire },
  pvcHexagonal: { webp: pvcHexagonal },
  perforatedSheet: { webp: perforatedSheet },
  powderCoatedFence: { webp: powderCoatedFence },
  vBendFence: { webp: vBendFence },
  weldedWireMesh: { webp: weldedWireMesh },
  galvanizedFinish: { webp: galvanizedFinish },
};

export const contactPhones = {
  landline: "056-595345",
  mobiles: ["9845043095", "9845340852"],
  displayLandline: "056-595345",
  displayMobile: "9845043095, 9845340852",
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
  { value: "25-28+", ne: "वर्षको निर्माण अनुभव", en: "Years Manufacturing Legacy" },
  { valueNe: "१st", valueEn: "1st", ne: "चितवन, नेपालमा पहिलो", en: "First Wire Mesh Factory in Chitwan" },
  { value: "14+", ne: "उत्पादन प्रकार", en: "Product Variations" },
  { valueNe: "१००%", valueEn: "100%", ne: "ग्याल्भनाइज्ड गुणस्तर", en: "Heavy Galvanized Steel" },
];

export const products = [
  {
    num: "01",
    image: images.antiClimbFence,
    alt: "Anti Climb Security Fence panel for high security perimeter protection",
    titleNe: "एन्टी क्लाइम्ब सेक्युरिटी फेन्स",
    titleEn: "Anti-Climb Security Fence",
    descNe: "चढ्न र काट्न नसकिने सुक्ष्म प्वाल भएको उच्च सुरक्षा मेश प्यानल।",
    descEn: "High-security rigid mesh panels designed with narrow openings to prevent climbing and cutting.",
    category: "fencing",
    highlightNe: "उच्च सुरक्षा",
    highlightEn: "High Security",
  },
  {
    num: "02",
    image: images.bindingWire,
    alt: "Galvanized Binding Wire roll for construction and rebar tying",
    titleNe: "ग्याल्भनाइज्ड बाइन्डिङ वायर",
    titleEn: "Galvanized Binding Wire",
    descNe: "निर्माण तथा ढलान बाँध्नका लागि लचिलो र टिकाउ ग्याल्भनाइज्ड तार।",
    descEn: "Flexible and durable zinc-coated wire essential for construction tying and rebar binding.",
    category: "agro",
    highlightNe: "निर्माण मानक",
    highlightEn: "Construction Grade",
  },
  {
    num: "03",
    image: images.concertinaFencing,
    alt: "Concertina Razor Wire Fencing for top boundary defense",
    titleNe: "कन्सर्टिना रेजर ब्लेड फेन्स",
    titleEn: "Concertina Razor Wire Fencing",
    descNe: "अत्यधिक सुरक्षा घेराबारका लागि उच्च घनत्वको कन्सर्टिना ब्लेड जाली।",
    descEn: "High-density helical razor barbed wire engineered for top-tier perimeter defense.",
    category: "fencing",
    highlightNe: "अधिकतम सुरक्षा",
    highlightEn: "Max Protection",
  },
  {
    num: "04",
    image: images.expandedMetal,
    alt: "Expanded Metal Sheet Mesh for heavy duty flooring and guards",
    titleNe: "एक्सप्यान्डेड मेटल मेश",
    titleEn: "Expanded Metal Sheet Mesh",
    descNe: "ढाँचाबद्ध डाइमन्ड आकारको बलियो मेटल मेश शिट।",
    descEn: "Rigid diamond-pattern steel mesh sheet formed without welds for industrial flooring and grates.",
    category: "industrial",
    highlightNe: "भारी भार क्षमता",
    highlightEn: "Heavy Duty",
  },
  {
    num: "05",
    image: images.fencingWire,
    alt: "Galvanized Chain Link Fencing Wire for boundary enclosures",
    titleNe: "चेनलिङ्क ग्याल्भनाइज्ड फेन्सिङ",
    titleEn: "Galvanized Chain Link Fencing",
    descNe: "घर, जग्गा र कृषि क्षेत्र घेराबारका लागि बहुउपयोगी जाली।",
    descEn: "Versatile woven steel wire mesh for residential, agricultural, and commercial perimeter enclosures.",
    category: "fencing",
    highlightNe: "लोकप्रिय उत्पादन",
    highlightEn: "Best Seller",
  },
  {
    num: "06",
    image: images.fiberGlassMesh,
    alt: "Alkali resistant Fiber Glass Mesh for plaster reinforcement",
    titleNe: "फाइबर ग्लास मेश",
    titleEn: "Fiber Glass Mesh",
    descNe: "प्लास्टर र गारो सुदृढीकरणका लागि प्रयोग हुने फाइबर मेश।",
    descEn: "High-tensile synthetic mesh designed for plaster reinforcement and thermal insulation.",
    category: "industrial",
    highlightNe: "प्लास्टर सुदृढीकरण",
    highlightEn: "Plaster & Wall",
  },
  {
    num: "07",
    image: images.giWire,
    alt: "Heavy Galvanized GI Wire coil in multiple SWG gauges",
    titleNe: "ग्याल्भनाइज्ड (GI) वायर",
    titleEn: "Heavy Zinc GI Wire",
    descNe: "विभिन्न SWG गेजमा उपलब्ध उच्च गुणस्तरीय ग्याल्भनाइज्ड आइरन तार।",
    descEn: "Premium heavy-coated galvanized iron wire available in multiple SWG gauges for diverse applications.",
    category: "agro",
    highlightNe: "शुद्ध जिंक कोटेड",
    highlightEn: "Pure Zinc Coated",
  },
  {
    num: "08",
    image: images.hexagonalWire,
    alt: "Hexagonal Wire Netting for poultry farms and agricultural protection",
    titleNe: "हेक्सागोनल पोल्ट्री जाली",
    titleEn: "Hexagonal Wire Netting",
    descNe: "पोल्ट्री फार्म र बगैँचा सुरक्षाका लागि हेक्सागोनल जाली।",
    descEn: "Flexible woven hexagonal wire netting engineered for poultry farming and animal enclosures.",
    category: "agro",
    highlightNe: "पोल्ट्री विशेष",
    highlightEn: "Poultry Special",
  },
  {
    num: "09",
    image: images.pvcHexagonal,
    alt: "PVC Coated Hexagonal Fencing for anti-corrosion protection",
    titleNe: "PVC कोटेड हेक्सागोनल जाली",
    titleEn: "PVC Coated Hexagonal Fencing",
    descNe: "मौसम र खियाबाट दोब्बर सुरक्षा दिने PVC लेमिनेटेड जाली।",
    descEn: "Corrosion-proof PVC laminated steel mesh offering double weather resistance and longevity.",
    category: "fencing",
    highlightNe: "मौसम रोधी",
    highlightEn: "Weather Proof",
  },
  {
    num: "10",
    image: images.perforatedSheet,
    alt: "Perforated Metal Sheet for ventilation and architectural screening",
    titleNe: "पर्फारेटेड मेटल शिट",
    titleEn: "Perforated Metal Sheet",
    descNe: "भेन्टिलेसन र फिल्टरेशनका लागि प्वाल पारिएका पर्फारेटेड शिट।",
    descEn: "Precision punched metal sheets for ventilation, filtration, acoustic panels and architectural design.",
    category: "industrial",
    highlightNe: "आर्किटेक्चरल शिट",
    highlightEn: "Architectural Sheet",
  },
  {
    num: "11",
    image: images.powderCoatedFence,
    alt: "Powder Coated Security Fence for premium residential fencing",
    titleNe: "पाउडर कोटेड सेक्युरिटी फेन्स",
    titleEn: "Powder Coated Security Fence",
    descNe: "आकर्षक र लामो समयसम्म टिक्ने पाउडर कोटेड सुरक्षा फेन्स।",
    descEn: "Premium powder-coated protective fencing panels featuring high aesthetics and anti-scratch finish.",
    category: "fencing",
    highlightNe: "प्रिमियम फिनिश",
    highlightEn: "Premium Finish",
  },
  {
    num: "12",
    image: images.vBendFence,
    alt: "3D V-Bend Security Fence Panel for structural strength",
    titleNe: "V-ब्यान्ड ३D सेक्युरिटी फेन्स",
    titleEn: "3D V-Bend Security Fence Panel",
    descNe: "३D V-आकारको अतिरिक्त बल प्रदान गर्ने आधुनिक सुरक्षा फेन्स।",
    descEn: "Engineered 3D V-bend reinforcement structure delivering enhanced lateral strength and security.",
    category: "fencing",
    highlightNe: "३D बलियो प्यानल",
    highlightEn: "3D Rigid Panel",
  },
  {
    num: "13",
    image: images.weldedWireMesh,
    alt: "Welded Wire Mesh grid for structural reinforcement and cages",
    titleNe: "वेल्डेड वायर मेश",
    titleEn: "Heavy Welded Wire Mesh",
    descNe: "कङ्क्रिट ढलान र औद्योगिक सुरक्षाका लागि इलेक्ट्रिक वेल्डेड मेश।",
    descEn: "Electric resistance welded steel wire grid for concrete reinforcement, security cages and barriers.",
    category: "industrial",
    highlightNe: "औद्योगिक ग्रेड",
    highlightEn: "Industrial Grade",
  },
  {
    num: "14",
    image: images.galvanizedFinish,
    alt: "Galvanized Finish Mesh for severe environment protection",
    titleNe: "ग्याल्भनाइज्ड फिनिश भारी जाली",
    titleEn: "Galvanized Finish Heavy Mesh",
    descNe: "अत्यधिक टिकाउ र खिया-रोधी ग्याल्भनाइज्ड फिनिसिङ मेश।",
    descEn: "Heavy-duty hot-dip galvanized finish mesh designed for extreme outdoor durability and load capacity.",
    category: "industrial",
    highlightNe: "हट-डिप ग्याल्भनाइज्ड",
    highlightEn: "Hot-Dip Galvanized",
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
  { ne: "चितवन, नेपालको पहिलो मेश जाली उद्योग", en: "FIRST WIRE MESH FACTORY IN CHITWAN, NEPAL" },
  { ne: "२५–२८ वर्षको निर्माण अनुभव", en: "25-28+ YEARS MANUFACTURING EXPERIENCE" },
  { ne: "ग्याल्भनाइज्ड उच्च गुणस्तर", en: "100% HEAVY GALVANIZED STEEL" },
  { ne: "ल्यान्डलाइन: ०५६-५९५३४५", en: "LANDLINE: 056-595345" },
  { ne: "मोबाइल: ९८४५०४३०९५ / ९८४५३४०८५२", en: "MOBILE: 9845043095 / 9845340852" },
];

export const productOptions = [
  { value: "anti-climb", ne: "एन्टी क्लाइम्ब फेन्स", en: "Anti-Climb Fence" },
  { value: "chain-link", ne: "चेनलिङ्क ग्याल्भनाइज्ड जाली", en: "Chain Link Fencing" },
  { value: "concertina", ne: "कन्सर्टिना रेजर ब्लेड फेन्स", en: "Concertina Razor Wire" },
  { value: "welded-mesh", ne: "वेल्डेड वायर मेश", en: "Welded Wire Mesh" },
  { value: "expanded-metal", ne: "एक्सप्यान्डेड मेटल मेश", en: "Expanded Metal Sheet" },
  { value: "hexagonal-poultry", ne: "हेक्सागोनल पोल्ट्री जाली", en: "Hexagonal Poultry Netting" },
  { value: "pvc-hexagonal", ne: "PVC कोटेड हेक्सागोनल जाली", en: "PVC Coated Hexagonal Fencing" },
  { value: "v-bend-3d", ne: "V-ब्यान्ड ३D फेन्स", en: "3D V-Bend Fence" },
  { value: "binding-gi-wire", ne: "ग्याल्भनाइज्ड / बाइन्डिङ वायर", en: "Galvanized / Binding Wire" },
  { value: "custom", ne: "अन्य / कस्टम", en: "Other / Custom Specification" },
];

export const contactInfo = {
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.845918957861!2d84.4116120760855!3d27.691156726204206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fb00520d2d3f%3A0x5919d333adc7d0cb!2sSaraswoti%20Mesh%20Jali%20Manufacturing%20Workshop!5e0!3m2!1sen!2snp!4v1787332198154!5m2!1sen!2snp",
};

