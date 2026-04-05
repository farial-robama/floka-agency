import { useEffect, useRef, useState } from "react";

const works = [
  { img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80", cats: ["Branding", "UX"],             name: "Aldan Branding",  year: "2025", wide: true  },
  { img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=700&q=80",  cats: ["Product", "UX"],              name: "Vision Driven",   year: "2025", wide: false },
  { img: "https://images.unsplash.com/photo-1618004912476-29818d81ae2e?w=700&q=80", cats: ["Web", "Dev"],               name: "Web3 Crypto",     year: "2024", wide: false },
  { img: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=700&q=80", cats: ["Branding", "Module"],       name: "Brand Elevate",   year: "2024", wide: false },
  { img: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=700&q=80", cats: ["UI", "UX"],                 name: "Design System",   year: "2023", wide: false },
];

function PortfolioCard({ item, delay }) {
  const ref = useRef(null);
  const [vis, setVis]   = useState(false);
  const [hov, setHov]   = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setTimeout(() => setVis(true), delay); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        gridColumn: item.wide ? "1 / 3" : "auto",
        borderRadius: "24px",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        background: "#161616",
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      <img
        src={item.img}
        alt={item.name}
        style={{
          width: "100%",
          aspectRatio: item.wide ? "16/7" : "4/3",
          objectFit: "cover",
          display: "block",
          transition: "transform 0.6s ease",
          transform: hov ? "scale(1.05)" : "scale(1)",
        }}
      />
      {/* Overlay */}
      <div
        style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)",
          opacity: hov ? 1 : 0,
          transition: "opacity 0.4s",
          display: "flex", alignItems: "flex-end", padding: "28px",
        }}
      >
        <div>
          <div style={{ display: "flex", gap: "8px", marginBottom: "8px", flexWrap: "wrap" }}>
            {item.cats.map((c) => (
              <span
                key={c}
                style={{
                  fontFamily: "'Syne', sans-serif", fontSize: "10px", fontWeight: 700,
                  letterSpacing: "2px", textTransform: "uppercase",
                  background: "rgba(200,245,66,0.15)", color: "#c8f542",
                  border: "1px solid rgba(200,245,66,0.3)",
                  padding: "3px 10px", borderRadius: "100px",
                }}
              >
                {c}
              </span>
            ))}
          </div>
          <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "22px", letterSpacing: "-0.5px" }}>{item.name}</div>
          <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.5)", marginTop: "4px" }}>{item.year}</div>
        </div>
      </div>

      {/* Arrow */}
      <div
        style={{
          position: "absolute", top: "20px", right: "20px",
          width: "42px", height: "42px", borderRadius: "50%",
          background: "#c8f542",
          display: "flex", alignItems: "center", justifyContent: "center",
          transform: hov ? "scale(1)" : "scale(0)",
          transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" style={{ background: "#111111", padding: "100px 60px" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", maxWidth: "1300px", margin: "0 auto 48px" }}>
        <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(48px, 7vw, 100px)", lineHeight: 0.9, letterSpacing: "-3px" }}>
          port<br />
          <em style={{ fontStyle: "italic", color: "#c8f542" }}>folio</em>
        </h2>
        <a
          href="#"
          style={{
            fontFamily: "'Syne', sans-serif", fontSize: "13px", fontWeight: 600,
            color: "rgba(255,255,255,0.5)", textDecoration: "none",
            borderBottom: "1px solid rgba(255,255,255,0.15)",
            paddingBottom: "4px", marginBottom: "12px",
            transition: "color 0.3s, border-color 0.3s",
          }}
          onMouseEnter={(e) => { e.target.style.color = "#c8f542"; e.target.style.borderColor = "#c8f542"; }}
          onMouseLeave={(e) => { e.target.style.color = "rgba(255,255,255,0.5)"; e.target.style.borderColor = "rgba(255,255,255,0.15)"; }}
        >
          More Works →
        </a>
      </div>

      <p style={{ maxWidth: "1300px", margin: "0 auto 48px", color: "rgba(255,255,255,0.5)", fontSize: "15px" }}>
        Strategy to build powerful digital solutions.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >
        {works.map((w, i) => (
          <PortfolioCard key={i} item={w} delay={i * 80} />
        ))}
      </div>
    </section>
  );
}
