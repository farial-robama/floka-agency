import { useState, useRef, useEffect } from "react";

function useReveal() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, vis];
}

const inputStyle = {
  width: "100%",
  background: "#161616",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "12px",
  padding: "14px 18px",
  color: "#fff",
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "14px",
  outline: "none",
  transition: "border-color 0.3s",
  display: "block",
};

function FormInput({ label, type = "text", placeholder, as = "input", rows }) {
  const [focused, setFocused] = useState(false);
  const El = as;
  return (
    <div style={{ marginBottom: "20px" }}>
      <label
        style={{
          display: "block",
          fontFamily: "'Syne', sans-serif",
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "2px",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.45)",
          marginBottom: "10px",
        }}
      >
        {label}
      </label>
      <El
        type={type}
        placeholder={placeholder}
        rows={rows}
        style={{
          ...inputStyle,
          borderColor: focused ? "#c8f542" : "rgba(255,255,255,0.08)",
          resize: as === "textarea" ? "vertical" : undefined,
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
}

export default function Contact() {
  const [budget, setBudget] = useState(3000);
  const [leftRef, leftVis] = useReveal();
  const [rightRef, rightVis] = useReveal();
  const [submitted, setSubmitted] = useState(false);

  const pct = ((budget - 1000) / 9000) * 100;

  return (
    <section id="contact" style={{ background: "#111111", padding: "100px 60px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >
        {/* Left info */}
        <div
          ref={leftRef}
          style={{
            opacity: leftVis ? 1 : 0,
            transform: leftVis ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          <div className="section-label">Get in Touch</div>
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(30px, 4vw, 50px)",
              letterSpacing: "-2px",
              lineHeight: 1.1,
              marginBottom: "40px",
            }}
          >
            Tell us about your project
          </h2>

          {[
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c8f542" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
                </svg>
              ),
              label: "Talk to us",
              value: "+123 456 789 00",
            },
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c8f542" strokeWidth="1.5">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                </svg>
              ),
              label: "Post Address",
              value: "541 Melville Ave, Palo Alto, CA 94301, United States",
            },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                gap: "16px",
                alignItems: "flex-start",
                marginBottom: "20px",
                padding: "24px",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                background: "#161616",
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
                  width: "44px",
                  height: "44px",
                  borderRadius: "10px",
                  background: "rgba(200,245,66,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.45)",
                    marginBottom: "4px",
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: "18px",
                    lineHeight: 1.4,
                  }}
                >
                  {item.value}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right form */}
        <div
          ref={rightRef}
          style={{
            opacity: rightVis ? 1 : 0,
            transform: rightVis ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.9s 0.2s ease, transform 0.9s 0.2s ease",
          }}
        >
          <h3
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "28px",
              letterSpacing: "-1px",
              marginBottom: "28px",
            }}
          >
            Have a project in mind?
          </h3>

          {/* Budget slider */}
          <div style={{ marginBottom: "28px" }}>
            <label
              style={{
                display: "block",
                fontFamily: "'Syne', sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)",
                marginBottom: "14px",
              }}
            >
              Budget
            </label>
            <input
              type="range"
              min="1000"
              max="10000"
              step="500"
              value={budget}
              onChange={(e) => setBudget(+e.target.value)}
              style={{
                background: `linear-gradient(90deg, #c8f542 ${pct}%, rgba(255,255,255,0.08) ${pct}%)`,
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontFamily: "'Syne', sans-serif",
                fontSize: "11px",
                color: "rgba(255,255,255,0.4)",
                marginTop: "8px",
              }}
            >
              <span>$1,000</span>
              <span>$10,000</span>
            </div>
            <div
              style={{
                textAlign: "center",
                fontFamily: "'DM Serif Display', serif",
                fontSize: "26px",
                color: "#c8f542",
                marginTop: "6px",
              }}
            >
              ${budget.toLocaleString()}
            </div>
          </div>

          {/* Service select */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                fontFamily: "'Syne', sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)",
                marginBottom: "10px",
              }}
            >
              Service
            </label>
            <select
              style={{
                ...inputStyle,
                cursor: "pointer",
                appearance: "none",
              }}
            >
              {["Consultancy", "Game Design", "Product Design", "Web Design", "SEO", "Branding"].map(
                (s) => <option key={s}>{s}</option>
              )}
            </select>
          </div>

          <FormInput label="Your Name" placeholder="John Doe" />
          <FormInput label="Email Address" type="email" placeholder="hello@company.com" />
          <FormInput label="Project Details" as="textarea" rows={3} placeholder="Tell us about your project..." />

          {submitted ? (
            <div
              style={{
                width: "100%",
                padding: "16px",
                borderRadius: "12px",
                background: "rgba(200,245,66,0.12)",
                border: "1px solid rgba(200,245,66,0.3)",
                color: "#c8f542",
                fontFamily: "'Syne', sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                textAlign: "center",
                letterSpacing: "1px",
              }}
            >
              ✓ Message sent! We'll be in touch soon.
            </div>
          ) : (
            <button
              onClick={() => setSubmitted(true)}
              style={{
                width: "100%",
                background: "#c8f542",
                color: "#0a0a0a",
                padding: "16px",
                borderRadius: "12px",
                fontFamily: "'Syne', sans-serif",
                fontSize: "14px",
                fontWeight: 700,
                cursor: "pointer",
                border: "none",
                letterSpacing: "1px",
                transition: "all 0.3s",
                marginTop: "4px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(200,245,66,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Let's Talk →
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
