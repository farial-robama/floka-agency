import { useEffect, useRef, useState } from "react";

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

const skills = [
  { name: "Solutions", pct: 100 },
  { name: "UI / UX",   pct: 90  },
  { name: "Explore",   pct: 72  },
  { name: "Branding",  pct: 85  },
];

export default function Skills() {
  const [sRef, sVis] = useReveal();
  const [rRef, rVis] = useReveal();

  return (
    <section id="skills" style={{ background: "#0a0a0a", padding: "100px 60px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center", maxWidth: "1300px", margin: "0 auto" }}>

        {/* Skill bars */}
        <div
          ref={sRef}
          style={{
            opacity: sVis ? 1 : 0,
            transform: sVis ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          <div className="section-label">Impressions</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {skills.map((s) => (
              <div key={s.name}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                  <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase" }}>
                    {s.name}
                  </span>
                  <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: "22px", color: "#c8f542" }}>
                    {s.pct}%
                  </span>
                </div>
                <div style={{ height: "3px", background: "rgba(255,255,255,0.08)", borderRadius: "2px", overflow: "hidden" }}>
                  <div
                    className="skill-fill"
                    style={{ width: sVis ? `${s.pct}%` : "0%" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right text */}
        <div
          ref={rRef}
          style={{
            opacity: rVis ? 1 : 0,
            transform: rVis ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.9s 0.2s ease, transform 0.9s 0.2s ease",
          }}
        >
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(28px, 3.5vw, 46px)", lineHeight: 1.15, letterSpacing: "-1.5px", marginBottom: "24px" }}>
            See how our team combines{" "}
            <em style={{ fontStyle: "italic", color: "#c8f542" }}>creativity</em>
            , technology, and strategy.
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.5)", lineHeight: 1.75 }}>
            We bring together diverse talents and deep expertise to craft digital experiences that don't just look beautiful — they perform.
          </p>
        </div>
      </div>
    </section>
  );
}
