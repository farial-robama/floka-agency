import { useState, useCallback } from "react";
import Cursor       from "./components/Cursor";
import Loader       from "./components/Loader";
import BirdBanner   from "./components/BirdBanner";
import Navbar       from "./components/Navbar";
import Hero         from "./components/Hero";
import Marquee      from "./components/Marquee";
import About        from "./components/About";
import Skills       from "./components/Skills";
import Portfolio    from "./components/Portfolio";
import Services     from "./components/Services";
import TextSlip     from "./components/TextSlip";
import Facts        from "./components/Facts";
import CTA          from "./components/CTA";
import Testimonials from "./components/Testimonials";
import Contact      from "./components/Contact";
import Awards       from "./components/Awards";
import Team         from "./components/Team";
import FAQ          from "./components/FAQ";
import Blog         from "./components/Blog";
import Footer       from "./components/Footer";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const onLoaded = useCallback(() => setLoaded(true), []);

  return (
    <>
      <Cursor />
      {!loaded && <Loader onDone={onLoaded} />}
      <BirdBanner />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Portfolio />
      <Services />
      <TextSlip />
      <Facts />
      <CTA />
      <Testimonials />
      <Contact />
      <Awards />
      <Team />
      <FAQ />
      <Blog />
      <Footer />
    </>
  );
}
