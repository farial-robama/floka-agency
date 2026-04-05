import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const titleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // GSAP animation on mount
    gsap.from(titleRef.current.children, {
      y: 120,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "power4.out",
    });
    gsap.from(ctaRef.current, {
      y: 30,
      opacity: 0,
      delay: 0.6,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-end px-16 pb-20 relative overflow-hidden">
      <div className="grid grid-cols-2 gap-16 w-full max-w-6xl mx-auto">
        <div>
          <p className="text-accent text-xs tracking-widest uppercase mb-6">Studio</p>
          <h1 ref={titleRef} className="font-serif text-9xl leading-none tracking-tight mb-10 overflow-hidden">
            <span className="block">Almond</span>
            <span className="block italic text-accent">D. Nelsi</span>
          </h1>
          <a ref={ctaRef} href="#contact" className="inline-flex items-center gap-3 bg-accent text-black px-8 py-4 rounded-full font-bold transition hover:-translate-y-1">
            Let's Talk →
          </a>
        </div>
      </div>
    </section>
  );
}