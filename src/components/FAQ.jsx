import { useState, useRef, useEffect } from "react";

const faqs = [
  {
    q: "What is artificial intelligence (AI)?",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=700&q=80",
    a: "Explore how we transform ideas into extraordinary digital experiences. Each case study is a testament to our design thinking, strategic approach, and creative execution.",
  },
  {
    q: "How does AI improve business efficiency?",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80",
    a: "AI automates repetitive tasks, provides data-driven insights, and enables personalized customer experiences at scale — dramatically improving operational efficiency.",
  },
  {
    q: "How long does AI implementation take?",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80",
    a: "Implementation timelines vary based on complexity. Simple integrations can take a few weeks, while enterprise-level deployments may require several months.",
  },
  {
    q: "What industries can benefit from AI?",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=700&q=80",
    a: "Healthcare, finance, retail, manufacturing, education — virtually every sector can leverage AI to improve outcomes, reduce costs, and create better experiences.",
  },
  {
    q: "What are the costs of AI solutions?",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&q=80",
    a: "Costs range from subscription tools starting at a few hundred dollars monthly to custom enterprise solutions. We'll help you find the right fit for your budget.",
  },
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
      <div
        onClick={onToggle}
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 0", cursor: "pointer" }}
        onMouseEnter={(e) => e.currentTarget.querySelector(".faq-q").style.color = "#c8f542"}
        onMouseLeave={(e) => e.currentTarget.querySelector(".faq-q").style.color = "#fff"}
      >
        <span className="faq-q" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "18px", letterSpacing: "-0.5px", transition: "color 0.3s" }}>
          {item.q}
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
        <img src={item.img} alt={item.q} style={{ width: "100%", height: "160px", objectFit: "cover", borderRadius: "12px", marginBottom: "14px" }} />
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", lineHeight: 1.75, paddingBottom: "24px" }}>{item.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="faq" style={{ background: "#0a0a0a", padding: "100px 60px" }}>
      <div
        ref={ref}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          maxWidth: "1300px",
          margin: "0 auto",
          alignItems: "start",
          opacity: vis ? 1 : 0,
          transform: vis ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}
      >
        {/* Left */}
        <div>
          <div className="section-label">FAQ</div>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(30px, 4vw, 50px)", letterSpacing: "-2px", lineHeight: 1.1, marginBottom: "16px" }}>
            Have more questions? We've got answers.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px", lineHeight: 1.7, marginBottom: "32px" }}>
            Don't find what you're looking for? Feel free to reach out directly — we'd love to chat.
          </p>
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80"
            alt="FAQ"
            style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", borderRadius: "24px" }}
          />
        </div>

        {/* Right accordions */}
        <div>
          {faqs.map((f, i) => (
            <FaqItem
              key={i}
              item={f}
              isOpen={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
