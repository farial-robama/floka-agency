import { useEffect, useState } from "react";

const links = [
  { label: "Home",      href: "#hero" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services",  href: "#services" },
  { label: "Team",      href: "#team" },
  { label: "Blog",      href: "#blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navStyle = {
    position: "fixed",
    top: "38px",
    left: 0,
    right: 0,
    zIndex: 999,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: scrolled ? "14px 60px" : "22px 60px",
    background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
    backdropFilter: scrolled ? "blur(20px)" : "none",
    borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
    transition: "all 0.4s ease",
  };

  return (
    <>
      <nav style={navStyle}>
        {/* Logo */}
        <a
          href="#hero"
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "26px",
            letterSpacing: "-1px",
            color: "#fff",
            textDecoration: "none",
          }}
        >
          floka<span style={{ color: "#c8f542" }}>.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.5px",
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#fff")}
              onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.5)")}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:flex"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "13px",
            fontWeight: 600,
            background: "#c8f542",
            color: "#0a0a0a",
            padding: "10px 24px",
            borderRadius: "100px",
            textDecoration: "none",
            transition: "all 0.3s",
            letterSpacing: "0.5px",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "#fff";
            e.target.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "#c8f542";
            e.target.style.transform = "translateY(0)";
          }}
        >
          Let's Talk
        </a>

        {/* Hamburger */}
        <button
          className="flex md:hidden flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "24px",
                height: "1.5px",
                background: "#fff",
                transition: "all 0.3s",
                transform:
                  menuOpen
                    ? i === 0
                      ? "rotate(45deg) translate(5px,5px)"
                      : i === 2
                      ? "rotate(-45deg) translate(5px,-5px)"
                      : "scaleX(0)"
                    : "none",
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            top: "38px",
            background: "#0a0a0a",
            zIndex: 998,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "32px",
          }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "36px",
                color: "#fff",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#c8f542")}
              onMouseLeave={(e) => (e.target.style.color = "#fff")}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
