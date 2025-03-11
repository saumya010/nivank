import About from "./components/About";
import Discover from "./components/Discover";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Offering from "./components/Offering";
import Transform from "./components/Transform";
import Why from "./components/Why";
import Location from "./components/Location";

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <About />
    <Transform />
    <Offering />
    <Discover />
    <Gallery />
    <Why />
    <FAQ />
    <Location />
    <Footer />
    </>
  );
}
