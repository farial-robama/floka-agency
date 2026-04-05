const footerCols = [
  {
    title: "Company",
    links: ["About Us", "Our Team", "Careers", "Contact"],
  },
  {
    title: "Services",
    links: ["UI/UX Design", "Web Development", "SEO", "Branding"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  },
];

const socials = ["Dribbble", "Behance", "LinkedIn", "Twitter"];

export default function Footer() {
  return (
    <footer style={{ background: "#0a0a0a", padding: "60px 60px 32px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>

        {/* Top */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "60px", flexWrap: "wrap", gap: "40px" }}>
          <div>
            <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "32px", letterSpacing: "-1px", marginBottom: "12px" }}>
              floka<span style={{ color: "#c8f542" }}>.</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "14px", maxWidth: "280px", lineHeight: 1.65 }}>
              We design every project with long-term success in mind, delivering solutions that make brands unforgettable.
            </p>
          </div>

          <div style={{ display: "flex", gap: "60px", flexWrap: "wrap" }}>
            {footerCols.map((col) => (
              <div key={col.title}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: "16px" }}>
                  {col.title}
                </div>
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    style={{ display: "block", fontSize: "14px", color: "rgba(255,255,255,0.45)", marginBottom: "10px", textDecoration: "none", transition: "color 0.3s" }}
                    onMouseEnter={(e) => (e.target.style.color = "#c8f542")}
                    onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.45)")}
                  >
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.08)", flexWrap: "wrap", gap: "12px" }}>
          <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)" }}>
            ©2025{" "}
            <a href="#" style={{ color: "#c8f542", textDecoration: "none" }}>
              Case-Themes™
            </a>{" "}
            Studio. All rights reserved.
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            {socials.map((s) => (
              <a
                key={s}
                href="#"
                style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", textDecoration: "none", transition: "color 0.3s" }}
                onMouseEnter={(e) => (e.target.style.color = "#c8f542")}
                onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.35)")}
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
