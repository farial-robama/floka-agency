import BirdBanner from "./components/BirdBanner";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Team from "./components/Team";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <BirdBanner />
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
      <Team />
      <Footer />
    </>
  );
}