import { useEffect, useRef, useState } from "react";

function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, vis];
}

function AnimCounter({ target }) {
  const [val, setVal] = useState(0);
  const [ref, vis] = useReveal();
  useEffect(() => {
    if (!vis) return;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / 2000, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setVal(Math.floor(eased * target));
      if (p < 1) requestAnimationFrame(tick);
      else setVal(target);
    };
    requestAnimationFrame(tick);
  }, [vis, target]);
  return <span ref={ref}>{val}</span>;
}

const facts = [
  { val: null, counter: 2,  suffix: "k+", desc: "Successful projects, each crafted for real-world results." },
  { val: "4.9/5", desc: "Average client satisfaction score across all engagements." },
  { val: null, counter: 50, suffix: "+",  desc: "Countries served worldwide, across 6 continents." },
  { val: null, counter: 12, suffix: "+",  desc: "International design awards won since founding." },
];

export default function Facts() {
  const [lRef, lVis] = useReveal();
  const [rRef, rVis] = useReveal();

  return (
    <section id="facts" style={{ background: "#0a0a0a", padding: "100px 60px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "80px", alignItems: "center", maxWidth: "1300px", margin: "0 auto" }}>

        {/* Image */}
        <div
          ref={lRef}
          style={{
            borderRadius: "24px", overflow: "hidden", height: "480px",
            opacity: lVis ? 1 : 0, transform: lVis ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=700&q=80" alt="Team" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>

        {/* Right */}
        <div
          ref={rRef}
          style={{
            opacity: rVis ? 1 : 0, transform: rVis ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.9s 0.2s ease, transform 0.9s 0.2s ease",
          }}
        >
          <div className="section-label">Fun Facts</div>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.1, letterSpacing: "-1.5px", marginBottom: "48px" }}>
            Consistently delivering impactful results through design and functionality.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            {facts.map((f, i) => (
              <div
                key={i}
                style={{
                  padding: "28px", border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "12px", background: "#1a1a1a",
                  transition: "border-color 0.3s, transform 0.3s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#c8f542"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "48px", lineHeight: 1, letterSpacing: "-2px", color: "#c8f542" }}>
                  {f.val ? f.val : <><AnimCounter target={f.counter} />{f.suffix}</>}
                </div>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", marginTop: "10px", lineHeight: 1.5 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
