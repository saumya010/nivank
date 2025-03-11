import About from "./components/About";
import Discover from "./components/Discover";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Offering from "./components/Offering";
import Transform from "./components/Transform";
import Why from "./components/Why";

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
    <Footer />
    </>
  );
}
