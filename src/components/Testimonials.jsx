import { useState, useRef, useEffect } from "react";

const testimonials = [
  {
    badge: "Great design solutions",
    quote: "As we continued to use their tool and found more use cases, our feature requests quickly found their way into their backlog. Exceptional communication throughout.",
    name: "Nicolas K. Ellington",
    role: "IT Specialist",
  },
  {
    badge: "Great design solutions",
    quote: "As we continued to use their tool and found more use cases, our feature requests quickly found their way into their backlog. The team is incredibly talented.",
    name: "Julian T. Beaumont",
    role: "IT Specialist",
  },
  {
    badge: "Great design solutions",
    quote: "Working with Floka transformed our digital presence completely. They exceeded every expectation and delivered on time, every single time.",
    name: "Felipe D. Hawthorne",
    role: "IT Specialist",
  },
  {
    badge: "Great design solutions",
    quote: "Their design sensibility is unmatched. Every pixel is intentional, every interaction feels natural. Truly world-class work from a world-class team.",
    name: "Javier C. Emerson",
    role: "IT Specialist",
  },
];

export default function Testimonials() {
  const [pos, setPos] = useState(0);
  const trackRef = useRef(null);
  const sectionRef = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const cardWidth = () => {
    if (!trackRef.current) return 0;
    const card = trackRef.current.querySelector(".testi-card");
    return card ? card.offsetWidth + 24 : 0;
  };

  const slide = (dir) => {
    const maxPos = testimonials.length - (window.innerWidth > 768 ? 2 : 1);
    setPos((p) => Math.max(0, Math.min(p + dir, maxPos)));
  };

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${pos * cardWidth()}px)`;
    }
  }, [pos]);

  return (
    <section
      id="testimonials"
      style={{ background: "#0a0a0a", padding: "100px 60px" }}
    >
      <div
        ref={sectionRef}
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          opacity: vis ? 1 : 0,
          transform: vis ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}
      >
        <div className="section-label">User Feedbacks</div>
        <h2
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(30px, 4vw, 50px)",
            letterSpacing: "-2px",
            lineHeight: 1.1,
            marginBottom: "56px",
            maxWidth: "600px",
          }}
        >
          Accelerating growth, unlocking new potential. Let's build together.
        </h2>

        {/* Slider */}
        <div style={{ overflow: "hidden" }}>
          <div
            ref={trackRef}
            style={{
              display: "flex",
              gap: "24px",
              transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="testi-card"
                style={{
                  minWidth: "calc(50% - 12px)",
                  background: "#1a1a1a",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "24px",
                  padding: "40px",
                  flexShrink: 0,
                  transition: "border-color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(200,245,66,0.3)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")
                }
              >
                <div
                  style={{
                    display: "inline-block",
                    background: "rgba(200,245,66,0.1)",
                    border: "1px solid rgba(200,245,66,0.25)",
                    color: "#c8f542",
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    padding: "4px 12px",
                    borderRadius: "100px",
                    marginBottom: "20px",
                  }}
                >
                  {t.badge}
                </div>
                <p
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: "18px",
                    lineHeight: 1.65,
                    fontStyle: "italic",
                    marginBottom: "28px",
                    color: "#f0ede6",
                  }}
                >
                  "{t.quote}"
                </p>
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "14px",
                    fontWeight: 600,
                  }}
                >
                  {t.name}
                </div>
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.45)",
                    letterSpacing: "1px",
                    marginTop: "4px",
                  }}
                >
                  {t.role}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div style={{ display: "flex", gap: "12px", marginTop: "40px" }}>
          {[
            {
              dir: -1,
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              ),
            },
            {
              dir: 1,
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              ),
            },
          ].map(({ dir, icon }) => (
            <button
              key={dir}
              onClick={() => slide(dir)}
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.12)",
                background: "transparent",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#c8f542";
                e.currentTarget.style.color = "#c8f542";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                e.currentTarget.style.color = "#fff";
              }}
            >
              {icon}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
