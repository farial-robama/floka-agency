import { useEffect, useRef, useState } from "react";

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function AnimCounter({ target, duration = 2000 }) {
  const [val, setVal] = useState(0);
  const [ref, visible] = useReveal();
  useEffect(() => {
    if (!visible) return;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setVal(Math.floor(eased * target));
      if (p < 1) requestAnimationFrame(tick);
      else setVal(target);
    };
    requestAnimationFrame(tick);
  }, [visible, target, duration]);
  return <span ref={ref}>{val}</span>;
}

export default function About() {
  const [leftRef, leftVis]   = useReveal();
  const [rightRef, rightVis] = useReveal();

  const revealStyle = (vis, delay = 0) => ({
    opacity: vis ? 1 : 0,
    transform: vis ? "translateY(0)" : "translateY(40px)",
    transition: `opacity 0.9s ${delay}s ease, transform 0.9s ${delay}s ease`,
  });

  return (
    <section id="about" style={{ background: "#111111", padding: "100px 60px" }}>
      <div
        style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "80px", alignItems: "center",
          maxWidth: "1300px", margin: "0 auto",
        }}
      >
        {/* Left text */}
        <div ref={leftRef} style={revealStyle(leftVis)}>
          <div className="section-label">About Us</div>
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(30px, 4vw, 50px)",
              lineHeight: 1.1, letterSpacing: "-2px",
              marginBottom: "24px",
            }}
          >
            Our approach is straightforward — prioritizing functionality, speed, and clarity.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px", lineHeight: 1.8, marginBottom: "36px" }}>
            We design every project with long-term success in mind. From brand strategy to immersive digital experiences, we offer end-to-end creative solutions that make brands unforgettable.
          </p>

          {/* Stat row */}
          <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
            {[
              { target: 8,    suffix: "+",    label: "Years Experience" },
              { target: 1200, suffix: "+",    label: "Happy Clients" },
              { target: 4,    suffix: ".9/5", label: "Avg Rating" },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "52px", lineHeight: 1, letterSpacing: "-2px", color: "#c8f542" }}>
                  <AnimCounter target={s.target} />
                  <span style={{ fontSize: "26px" }}>{s.suffix}</span>
                </div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginTop: "6px" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right image stack */}
        <div ref={rightRef} style={{ ...revealStyle(rightVis, 0.2), position: "relative", height: "480px" }}>
          <div style={{ position: "absolute", right: 0, top: 0, width: "320px", height: "380px", borderRadius: "24px", overflow: "hidden" }}>
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80&auto=format&fit=crop" alt="Team" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ position: "absolute", left: 0, bottom: 0, width: "200px", height: "220px", borderRadius: "12px", overflow: "hidden", border: "4px solid #111111" }}>
            <img src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&q=80&auto=format&fit=crop" alt="Detail" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div
            style={{
              position: "absolute", right: 0, bottom: 0,
              background: "#161616", border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "12px", padding: "20px 24px", maxWidth: "260px",
            }}
          >
            <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: "14px", fontStyle: "italic", lineHeight: 1.6, marginBottom: "12px", color: "#f0ede6" }}>
              "At Floka, we merge strategy, creativity, and technology to shape brands that people love."
            </p>
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}>
              Merizo H. Yelso / CEO
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
