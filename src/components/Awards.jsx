import { useRef, useEffect, useState } from "react";

const awards = [
  { idx: "01", name: "Best Designer Awards", org: "Awwwards", year: "2025" },
  { idx: "02", name: "Peaky UI Designer",    org: "Google",   year: "2024" },
  { idx: "03", name: "Great in UX",          org: "Apple",    year: "2023" },
  { idx: "04", name: "Best Website Pick",    org: "Microsoft",year: "2022" },
  { idx: "05", name: "Nelson UI & UX Designer", org: "Samsung", year: "2021" },
];

function AwardRow({ award, delay }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  const [hov, setHov] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTimeout(() => setVis(true), delay); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex",
        alignItems: "center",
        padding: "28px 0",
        paddingLeft: hov ? "14px" : "0",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        gap: "32px",
        cursor: "default",
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.7s ease, transform 0.7s ease, padding 0.3s ease`,
      }}
    >
      <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "13px", color: "rgba(255,255,255,0.35)", minWidth: "30px" }}>
        {award.idx}
      </div>
      <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "22px", letterSpacing: "-0.5px", flex: 1, color: hov ? "#c8f542" : "#fff", transition: "color 0.3s" }}>
        {award.name}
      </div>
      <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", minWidth: "100px", textAlign: "center" }}>
        {award.org}
      </div>
      <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "20px", color: "rgba(255,255,255,0.35)", minWidth: "60px", textAlign: "right" }}>
        {award.year}
      </div>
    </div>
  );
}

export default function Awards() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="awards" style={{ background: "#0a0a0a", padding: "100px 60px" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <div
          ref={ref}
          style={{
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          <div className="section-label">Driven by passion</div>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(30px, 4vw, 52px)", letterSpacing: "-2px", marginBottom: "56px" }}>
            Recognition that speaks{" "}
            <em style={{ fontStyle: "italic", color: "#c8f542" }}>volumes</em>
          </h2>
        </div>

        <div>
          {awards.map((a, i) => (
            <AwardRow key={i} award={a} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
