import { useState, useRef, useEffect } from "react";

const services = [
  {
    title: "User Interface & Experience Design",
    img: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=700&q=80",
    tags: ["Branding", "Magazine", "Product"],
    desc: "From brand strategy to immersive digital experiences, we offer end-to-end creative solutions that make brands unforgettable.",
  },
  {
    title: "Web Development",
    img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=700&q=80",
    tags: ["Branding", "Module", "UX"],
    desc: "We build fast, scalable, and maintainable websites using modern frameworks and best practices.",
  },
  {
    title: "Search Engine Optimization",
    img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=700&q=80",
    tags: ["SEO", "Analytics"],
    desc: "Dominate search rankings with our data-driven SEO strategies tailored to your business goals.",
  },
  {
    title: "Low-Code Development",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80",
    tags: ["Webflow", "WordPress"],
    desc: "Deliver complex projects faster with Webflow, WordPress, and other modern low-code platforms.",
  },
];

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
      <div
        onClick={onToggle}
        style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "24px 0", cursor: "pointer",
        }}
        onMouseEnter={(e) => e.currentTarget.querySelector(".acc-title").style.color = "#c8f542"}
        onMouseLeave={(e) => e.currentTarget.querySelector(".acc-title").style.color = "#fff"}
      >
        <span
          className="acc-title"
          style={{ fontFamily: "'DM Serif Display', serif", fontSize: "20px", letterSpacing: "-0.5px", transition: "color 0.3s" }}
        >
          {item.title}
        </span>
        <div
          style={{
            width: "36px", height: "36px", borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.08)",
            background: isOpen ? "#c8f542" : "transparent",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.3s",
            transform: isOpen ? "rotate(45deg)" : "none",
            flexShrink: 0,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={isOpen ? "#000" : "#fff"} strokeWidth="2.5">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </div>
      </div>
      <div className={`accordion-body ${isOpen ? "open" : ""}`}>
        <img src={item.img} alt={item.title} style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "12px", marginBottom: "14px" }} />
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", lineHeight: 1.7, marginBottom: "12px" }}>{item.desc}</p>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {item.tags.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: "'Syne', sans-serif", fontSize: "10px", fontWeight: 600,
                letterSpacing: "2px", textTransform: "uppercase",
                border: "1px solid rgba(255,255,255,0.12)", padding: "3px 10px",
                borderRadius: "100px", color: "rgba(255,255,255,0.45)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [openIdx, setOpenIdx] = useState(0);
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" style={{ background: "#0a0a0a", padding: "100px 60px" }}>
      <div
        ref={ref}
        style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px",
          maxWidth: "1300px", margin: "0 auto", alignItems: "start",
          opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}
      >
        {/* Left */}
        <div>
          <div className="section-label">Company Expertise</div>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(30px, 4vw, 50px)", letterSpacing: "-2px", lineHeight: 1.1, marginBottom: "16px" }}>
            What we do best
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px", lineHeight: 1.7, marginBottom: "40px" }}>
            From brand strategy to immersive digital experiences, we offer end-to-end creative solutions.
          </p>
          <a
            href="#contact"
            style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              border: "1px solid rgba(255,255,255,0.12)",
              padding: "14px 28px", borderRadius: "100px",
              fontFamily: "'Syne', sans-serif", fontSize: "13px", fontWeight: 600,
              letterSpacing: "1px", color: "#fff", textDecoration: "none",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#c8f542"; e.currentTarget.style.color = "#c8f542"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "#fff"; }}
          >
            Hire Us Today
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>

        {/* Accordion */}
        <div>
          {services.map((s, i) => (
            <AccordionItem
              key={i}
              item={s}
              isOpen={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
