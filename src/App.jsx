import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import InteractiveStudio from "./components/InteractiveStudio";
import About from "./components/About";
import Products from "./components/Products";
import Applications from "./components/Applications";
import GabionStory from "./components/GabionStory";
import Manufacturing from "./components/Manufacturing";
import Quality from "./components/Quality";
import CustomCTA from "./components/CustomCTA";
import Contact from "./components/Contact";
import LocationMap from "./components/LocationMap";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg text-ink transition-colors duration-300">
      <div className="grain fixed" />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <InteractiveStudio />
        <About />
        <Products />
        <Applications />
        <GabionStory />
        <Manufacturing />
        <Quality />
        <CustomCTA />
        <Contact />
        <LocationMap />
      </main>
      <Footer />
    </div>
  );
}
