import { useRef, useEffect, useState } from "react";

const posts = [
  {
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&q=80",
    cat: "WEB3",
    title: "Seamless user interfaces, crafted with intent.",
    date: "Nov 07, 2025",
  },
  {
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=700&q=80",
    cat: "Branding",
    title: "From brand strategy to immersive digital experiences.",
    date: "Oct 22, 2025",
  },
  {
    img: "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=700&q=80",
    cat: "Design",
    title: "How we craft digital brands that people love.",
    date: "Sep 15, 2025",
  },
];

function BlogCard({ post, delay }) {
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
        borderRadius: "24px",
        overflow: "hidden",
        background: "#161616",
        border: `1px solid ${hov ? "rgba(200,245,66,0.3)" : "rgba(255,255,255,0.08)"}`,
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : hov ? "translateY(-6px)" : "translateY(30px)",
        transition: "opacity 0.8s ease, transform 0.4s ease, border-color 0.3s",
        cursor: "pointer",
      }}
    >
      <div style={{ overflow: "hidden", aspectRatio: "16/10" }}>
        <img
          src={post.img}
          alt={post.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transform: hov ? "scale(1.06)" : "scale(1)",
            transition: "transform 0.6s ease",
          }}
        />
      </div>
      <div style={{ padding: "28px" }}>
        <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#c8f542", marginBottom: "12px" }}>
          {post.cat}
        </div>
        <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "20px", lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: "12px", color: hov ? "#c8f542" : "#fff", transition: "color 0.3s" }}>
          {post.title}
        </h3>
        <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>
          {post.date}
        </div>
      </div>
    </div>
  );
}

export default function Blog() {
  const headerRef = useRef(null);
  const [headerVis, setHeaderVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setHeaderVis(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (headerRef.current) obs.observe(headerRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="blog" style={{ background: "#111111", padding: "100px 60px" }}>
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
            gap: "16px",
            opacity: headerVis ? 1 : 0,
            transform: headerVis ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          <div>
            <div className="section-label">Insights</div>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(30px, 4vw, 52px)", letterSpacing: "-2px" }}>
              Company blog & updates
            </h2>
          </div>
          <a
            href="#"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.5)",
              textDecoration: "none",
              borderBottom: "1px solid rgba(255,255,255,0.15)",
              paddingBottom: "4px",
              marginBottom: "12px",
              transition: "color 0.3s, border-color 0.3s",
            }}
            onMouseEnter={(e) => { e.target.style.color = "#c8f542"; e.target.style.borderBottomColor = "#c8f542"; }}
            onMouseLeave={(e) => { e.target.style.color = "rgba(255,255,255,0.5)"; e.target.style.borderBottomColor = "rgba(255,255,255,0.15)"; }}
          >
            All Posts →
          </a>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {posts.map((p, i) => (
            <BlogCard key={i} post={p} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
