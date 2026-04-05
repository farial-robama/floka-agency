import { useRef, useEffect, useState } from "react";

export default function CTA() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="cta"
      style={{ background: "#111111", padding: "120px 60px", textAlign: "center", position: "relative", overflow: "hidden" }}
    >
      {/* Blob */}
      <div style={{
        position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)",
        width: "500px", height: "500px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(200,245,66,0.1) 0%, transparent 70%)",
        filter: "blur(100px)", pointerEvents: "none",
      }} />

      <div
        ref={ref}
        style={{
          position: "relative", maxWidth: "800px", margin: "0 auto",
          opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}
      >
        <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: "24px" }}>
          next can be you.
        </div>
        <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(56px, 9vw, 120px)", lineHeight: 0.88, letterSpacing: "-4px", marginBottom: "48px" }}>
          let's <em style={{ fontStyle: "italic", color: "#c8f542" }}>talk</em>
        </h2>

        <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
          <a
            href="#contact"
            style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              background: "#c8f542", color: "#0a0a0a",
              padding: "18px 36px", borderRadius: "100px",
              fontFamily: "'Syne', sans-serif", fontSize: "14px", fontWeight: 700,
              textDecoration: "none", transition: "all 0.3s", letterSpacing: "0.5px",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.transform = "translateY(-3px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#c8f542"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Start a Project
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>

          <a
            href="https://www.youtube.com/watch?v=SF4aHwxHtZ0"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: "12px",
              border: "1px solid rgba(255,255,255,0.12)",
              padding: "18px 36px", borderRadius: "100px",
              fontFamily: "'Syne', sans-serif", fontSize: "14px", fontWeight: 600,
              color: "#fff", textDecoration: "none", transition: "all 0.3s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#c8f542"; e.currentTarget.style.color = "#c8f542"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "#fff"; }}
          >
            <div style={{ width: "44px", height: "44px", borderRadius: "50%", border: "1px solid currentColor", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21" /></svg>
            </div>
            Play Reel
          </a>
        </div>
      </div>
    </section>
  );
}
