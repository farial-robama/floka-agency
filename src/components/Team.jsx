import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const designTeam = [
  { name: "Nicolas K. Ellington", role: "Founder",     img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "Carlos E. Ashcroft",   role: "CEO",         img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" },
  { name: "Leonardo F. Ashton",   role: "UX Designer", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
  { name: "Ricardo P. Winslow",   role: "UI Designer", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
];

const devTeam = [
  { name: "Adrian T. Carrington", role: "Tech Lead",    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" },
  { name: "Marcus J. Remington",  role: "Backend Dev",  img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400&q=80" },
  { name: "Victor L. Harrington", role: "Frontend Dev", img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&q=80" },
  { name: "Samuel R. Worthington",role: "DevOps",       img: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&q=80" },
];

function TeamCard({ member, i }) {
  const [hov, setHov] = useState(false);
  const ref = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTimeout(() => setVis(true), i * 100); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [i]);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        borderRadius: "24px",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        background: "#161616",
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.8s ease, transform 0.8s ease`,
      }}
    >
      <img
        src={member.img}
        alt={member.name}
        style={{
          width: "100%",
          aspectRatio: "3/4",
          objectFit: "cover",
          display: "block",
          filter: hov ? "grayscale(0%)" : "grayscale(25%)",
          transform: hov ? "scale(1.05)" : "scale(1)",
          transition: "filter 0.5s, transform 0.5s",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0, left: 0, right: 0,
          padding: "20px",
          background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)",
        }}
      >
        <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "18px", letterSpacing: "-0.5px" }}>
          {member.name}
        </div>
        <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "#c8f542", marginTop: "2px" }}>
          {member.role}
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  const [activeTab, setActiveTab] = useState("design");
  const gridRef = useRef(null);

  const team = activeTab === "design" ? designTeam : devTeam;

  const switchTab = (tab) => {
    if (tab === activeTab) return;
    gsap.to(gridRef.current, {
      opacity: 0, y: 20, duration: 0.25,
      onComplete: () => {
        setActiveTab(tab);
        gsap.to(gridRef.current, { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" });
      },
    });
  };

  const headerRef = useRef(null);
  const [headerVis, setHeaderVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setHeaderVis(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (headerRef.current) obs.observe(headerRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="team" style={{ background: "#111111", padding: "100px 60px" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>

        {/* Header */}
        <div
          ref={headerRef}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "56px",
            flexWrap: "wrap",
            gap: "24px",
            opacity: headerVis ? 1 : 0,
            transform: headerVis ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          <div>
            <div className="section-label">Our Avengers</div>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(30px, 4vw, 52px)", letterSpacing: "-2px" }}>
              Meet our team
            </h2>
          </div>

          {/* Tabs */}
          <div
            style={{
              display: "flex",
              gap: "4px",
              background: "#161616",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "100px",
              padding: "4px",
            }}
          >
            {[{ key: "design", label: "Design Team" }, { key: "dev", label: "Dev Team" }].map((t) => (
              <button
                key={t.key}
                onClick={() => switchTab(t.key)}
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  padding: "8px 18px",
                  borderRadius: "100px",
                  cursor: "pointer",
                  border: "none",
                  background: activeTab === t.key ? "#c8f542" : "transparent",
                  color: activeTab === t.key ? "#0a0a0a" : "rgba(255,255,255,0.45)",
                  transition: "all 0.3s",
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
          }}
        >
          {team.map((m, i) => (
            <TeamCard key={m.name} member={m} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
