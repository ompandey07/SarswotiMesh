// Only the hero image needs a JPEG fallback (used as the <video> poster,
// which some older browsers require as a plain raster format). Every other
// image is only ever rendered as WebP, so we don't ship an unused JPEG twin.
import meshJaliWebp from "@/assets/images/mesh-jali.webp";
import poultryJaliWebp from "@/assets/images/poultry-jali.webp";
import gabionJaliWebp from "@/assets/images/gabion-jali.webp";
import manufacturingWorkshopWebp from "@/assets/images/manufacturing-workshop.webp";
import heroSection from "@/assets/images/hero-section.jpg";
import heroSectionWebp from "@/assets/images/hero-section.webp";

// Active Products directory imports
import gabionBox from "@/assets/Products/Gabion Box.jpeg";
import chainLinkCompound from "@/assets/Products/Chain Link Mesh Jali Compound Fencing.jpeg";
import compoundChainLinkAd from "@/assets/Products/Compound Chain Link Fence — Premium Advertisement.jpeg";
import chickenMeshPoultry from "@/assets/Products/Chicken Mesh Poultry Jali.jpeg";

export const images = {
  meshJali: { webp: meshJaliWebp },
  poultryJali: { webp: poultryJaliWebp },
  gabionJali: { webp: gabionJaliWebp },
  manufacturingWorkshop: { webp: manufacturingWorkshopWebp },
  heroSection: { src: heroSection, webp: heroSectionWebp },
  gabionBox: { webp: gabionBox },
  chainLinkCompound: { webp: chainLinkCompound },
  compoundChainLinkAd: { webp: compoundChainLinkAd },
  chickenMeshPoultry: { webp: chickenMeshPoultry },
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
    titleNe: "चेनलिङ्क मेश जाली कम्पाउण्ड",
    titleEn: "Chain Link Mesh Jali Compound",
    descNe: "उच्च ताण क्षमता, भारी ग्याल्भनाइज्ड घेराबार जाली",
    descEn: "Heavy-duty perimeter compound fencing for all boundaries",
  },
  {
    icon: "security",
    titleNe: "गेबियन बक्स जाली",
    titleEn: "Gabion Box Jali",
    descNe: "माटो थेग्ने पर्खाल र सिभिल पूर्वाधारका लागि ढुकुटी जाली",
    descEn: "Stone-filled cages for retaining walls & riverbank control",
  },
  {
    icon: "gabion",
    titleNe: "कुखुरा / पोल्ट्री जाली",
    titleEn: "Chicken Mesh Poultry Jali",
    descNe: "पोल्ट्री फार्म तथा साना खोरका लागि सुक्ष्म ग्याल्भनाइज्ड जाली",
    descEn: "High-density fine mesh for poultry farming & agriculture",
  },
];

export const stats = [
  { value: "25-28+", ne: "वर्षको निर्माण अनुभव", en: "Years Manufacturing Legacy" },
  { valueNe: "१st", valueEn: "1st", ne: "चितवन, नेपालमा पहिलो", en: "First Wire Mesh Factory in Chitwan" },
  { valueNe: "प्रत्यक्ष", valueEn: "Direct", ne: "कारखाना मूल्य", en: "Direct Workshop Production" },
  { valueNe: "१००%", valueEn: "100%", ne: "ग्याल्भनाइज्ड गुणस्तर", en: "Heavy Zinc Galvanized" },
];

// Official Factory Available Sizes & Weight Specifications
export const meshSpecifications = [
  {
    holeSize: "0.75 x 0.75 inch",
    holeSizeNe: "०.७५ x ०.७५ इन्च",
    gauge: "13# Heavy Coated",
    gaugeNe: "१३# हेभी कोटेड",
    weightPerSqFt: "450 gm",
    weightNe: "४५० ग्राम / वर्ग फिट",
  },
  {
    holeSize: "1 x 1 inch",
    holeSizeNe: "१ x १ इन्च",
    gauge: "13# Heavy Coated",
    gaugeNe: "१३# हेभी कोटेड",
    weightPerSqFt: "330 gm",
    weightNe: "३३० ग्राम / वर्ग फिट",
  },
  {
    holeSize: "1.5 x 1.5 inch",
    holeSizeNe: "१.५ x १.५ इन्च",
    gauge: "10# Heavy Coated",
    gaugeNe: "१०# हेभी कोटेड",
    weightPerSqFt: "380 gm",
    weightNe: "३८० ग्राम / वर्ग फिट",
  },
  {
    holeSize: "2 x 2 inch",
    holeSizeNe: "२ x २ इन्च",
    gauge: "10# Heavy Coated",
    gaugeNe: "१०# हेभी कोटेड",
    weightPerSqFt: "280 gm",
    weightNe: "२८० ग्राम / वर्ग फिट",
  },
  {
    holeSize: "2.5 x 2.5 inch",
    holeSizeNe: "२.५ x २.५ इन्च",
    gauge: "10# Heavy Coated",
    gaugeNe: "१०# हेभी कोटेड",
    weightPerSqFt: "250 gm",
    weightNe: "२५० ग्राम / वर्ग फिट",
  },
  {
    holeSize: "3 x 3 inch",
    holeSizeNe: "३ x ३ इन्च",
    gauge: "10# Heavy Coated",
    gaugeNe: "१०# हेभी कोटेड",
    weightPerSqFt: "200 gm",
    weightNe: "२०० ग्राम / वर्ग फिट",
  },
];

export const products = [
  {
    num: "01",
    id: "gabion-box",
    image: images.gabionBox,
    alt: "Gabion Box wire container for retaining walls and slope protection",
    titleNe: "गेबियन बक्स जाली",
    titleEn: "Gabion Box Jali",
    descNe: "माटो थेग्ने पर्खाल, नदी नियन्त्रण, तटबन्ध र पहिरो रोकथामका लागि ढुङ्गा भर्ने बलियो ग्याल्भनाइज्ड बक्स जाली।",
    descEn: "Heavy-duty stone-filled wire mesh cages engineered for retaining walls, riverbank embankment & slope erosion control.",
    category: "industrial",
    highlightNe: "सिभिल गेबियन",
    highlightEn: "Civil Heavy Gabion",
    availableSpecs: [
      { size: "1.5x1.5 inch", gauge: "10# Heavy Coated", weight: "380 gm / sq.ft" },
      { size: "2x2 inch", gauge: "10# Heavy Coated", weight: "280 gm / sq.ft" },
      { size: "2.5x2.5 inch", gauge: "10# Heavy Coated", weight: "250 gm / sq.ft" },
      { size: "3x3 inch", gauge: "10# Heavy Coated", weight: "200 gm / sq.ft" },
    ],
  },
  {
    num: "02",
    id: "chain-link-compound",
    image: images.chainLinkCompound,
    alt: "Chain Link Mesh Jali Compound Fencing for perimeter boundary security",
    titleNe: "चेनलिङ्क मेश जाली कम्पाउण्ड",
    titleEn: "Chain Link Mesh Jali Compound",
    descNe: "घर, जग्गा, कम्पाउण्ड, उद्योग र कृषि क्षेत्र घेराबारका लागि उच्च ताण क्षमता भएको ग्याल्भनाइज्ड मेश जाली।",
    descEn: "Heavy-duty galvanized woven wire mesh fencing for residential boundaries, industrial compounds & commercial enclosures.",
    category: "fencing",
    highlightNe: "कम्पाउण्ड फेन्सिङ",
    highlightEn: "Compound Fencing",
    availableSpecs: [
      { size: "0.75x0.75 inch", gauge: "13# Heavy Coated", weight: "450 gm / sq.ft" },
      { size: "1x1 inch", gauge: "13# Heavy Coated", weight: "330 gm / sq.ft" },
      { size: "1.5x1.5 inch", gauge: "10# Heavy Coated", weight: "380 gm / sq.ft" },
      { size: "2x2 inch", gauge: "10# Heavy Coated", weight: "280 gm / sq.ft" },
      { size: "2.5x2.5 inch", gauge: "10# Heavy Coated", weight: "250 gm / sq.ft" },
      { size: "3x3 inch", gauge: "10# Heavy Coated", weight: "200 gm / sq.ft" },
    ],
  },
  {
    num: "03",
    id: "chicken-mesh-poultry",
    image: images.chickenMeshPoultry,
    alt: "Chicken Mesh Poultry Jali for poultry farm and livestock protection",
    titleNe: "कुखुरा / पोल्ट्री जाली (चिकन मेश)",
    titleEn: "Chicken Mesh Poultry Jali",
    descNe: "पोल्ट्री फार्म, कुखुरा पालन र साना पशु खोर निर्माणका लागि सुक्ष्म प्वाल भएको ग्याल्भनाइज्ड नेटिङ जाली।",
    descEn: "High-density fine opening galvanized wire netting specifically designed for poultry farms & livestock enclosures.",
    category: "agro",
    highlightNe: "पोल्ट्री विशेष",
    highlightEn: "Poultry & Farm Grade",
    availableSpecs: [
      { size: "0.75x0.75 inch", gauge: "13# Heavy Coated", weight: "450 gm / sq.ft" },
      { size: "1x1 inch", gauge: "13# Heavy Coated", weight: "330 gm / sq.ft" },
    ],
  },
  {
    num: "04",
    id: "compound-chain-link-ad",
    image: images.compoundChainLinkAd,
    alt: "Premium Compound Chain Link Fence advertisement and factory showcase",
    titleNe: "प्रिमियम कम्पाउण्ड चेनलिङ्क फेन्स",
    titleEn: "Premium Compound Chain-Link Fence",
    descNe: "प्रत्यक्ष भरतपुर कारखानाबाट उच्च गुणस्तरीय जिंक कोटेड कम्पाउण्ड घेराबार जाली अर्डर गर्नुहोस्।",
    descEn: "Direct workshop pricing for premium galvanized compound chain-link fencing with custom sizing options.",
    category: "fencing",
    highlightNe: "कारखाना अर्डर",
    highlightEn: "Direct Workshop Order",
    availableSpecs: [
      { size: "1.5x1.5 inch", gauge: "10# Heavy Coated", weight: "380 gm / sq.ft" },
      { size: "2x2 inch", gauge: "10# Heavy Coated", weight: "280 gm / sq.ft" },
      { size: "3x3 inch", gauge: "10# Heavy Coated", weight: "200 gm / sq.ft" },
    ],
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
  { num: "03", titleNe: "भरपर्दोपन", titleEn: "Reliability", descNe: "वास्तविक प्रयोगलाई ध्यानमा राखेर बनाइएका समाधान।", descNe: "Solutions designed around real applications." },
];

export const marqueeItems = [
  { ne: "चितवन, नेपालको पहिलो मेश जाली उद्योग", en: "FIRST WIRE MESH FACTORY IN CHITWAN, NEPAL" },
  { ne: "२५–२८ वर्षको निर्माण अनुभव", en: "25-28+ YEARS MANUFACTURING EXPERIENCE" },
  { ne: "ग्याल्भनाइज्ड उच्च गुणस्तर", en: "100% HEAVY GALVANIZED STEEL" },
  { ne: "ल्यान्डलाइन: ०५६-५९५३४५", en: "LANDLINE: 056-595345" },
  { ne: "मोबाइल: ९८४५०४३०९५ / ९८४५३४०८५२", en: "MOBILE: 9845043095 / 9845340852" },
];

export const productOptions = [
  { value: "gabion-box", ne: "गेबियन बक्स जाली", en: "Gabion Box Jali" },
  { value: "chain-link-compound", ne: "चेनलिङ्क मेश जाली कम्पाउण्ड", en: "Chain Link Mesh Jali Compound" },
  { value: "chicken-mesh-poultry", ne: "कुखुरा / पोल्ट्री जाली (चिकन मेश)", en: "Chicken Mesh Poultry Jali" },
  { value: "compound-chain-link-ad", ne: "प्रिमियम कम्पाउण्ड चेनलिङ्क फेन्स", en: "Premium Compound Chain-Link Fence" },
  { value: "custom-specification", ne: "कस्टम अर्डर / फरक साइज", en: "Custom Specification Order" },
];

export const contactInfo = {
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.845918957861!2d84.4116120760855!3d27.691156726204206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fb00520d2d3f%3A0x5919d333adc7d0cb!2sSaraswoti%20Mesh%20Jali%20Manufacturing%20Workshop!5e0!3m2!1sen!2snp!4v1787332198154!5m2!1sen!2snp",
};


