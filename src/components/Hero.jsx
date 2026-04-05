import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const titleRef = useRef(null);
  const ctaRef = useRef(null);
  const imgRef = useRef(null);
  const descRef = useRef(null);
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);

  useEffect(() => {
    gsap.from(titleRef.current.children, {
      y: 130,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "power4.out",
      delay: 0.2,
    });

    gsap.from(ctaRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.9,
      delay: 0.8,
      ease: "power3.out",
    });

    gsap.fromTo(
      imgRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.1, delay: 0.5, ease: "power3.out" }
    );

    gsap.from(descRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      delay: 1,
      ease: "power3.out",
    });

    gsap.to(blob1Ref.current, {
      y: -30,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(blob2Ref.current, {
      y: 30,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    const onScroll = () => {
      gsap.set(blob1Ref.current, { y: window.scrollY * 0.3 });
      gsap.set(blob2Ref.current, { y: window.scrollY * 0.2 });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const blobStyle1 = {
    position: "absolute",
    top: "-100px",
    right: "-100px",
    width: "600px",
    height: "600px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(200,245,66,0.12) 0%, transparent 70%)",
    filter: "blur(120px)",
    pointerEvents: "none",
  };

  const blobStyle2 = {
    position: "absolute",
    bottom: "100px",
    left: "200px",
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(255,107,53,0.08) 0%, transparent 70%)",
    filter: "blur(120px)",
    pointerEvents: "none",
  };

  function handleCtaEnter(e) {
    e.currentTarget.style.background = "#fff";
    e.currentTarget.style.transform = "translateY(-3px)";
    e.currentTarget.style.boxShadow = "0 20px 40px rgba(200,245,66,0.2)";
  }

  function handleCtaLeave(e) {
    e.currentTarget.style.background = "#c8f542";
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "none";
  }

  function handleImgEnter(e) {
    e.target.style.transform = "scale(1.06)";
  }

  function handleImgLeave(e) {
    e.target.style.transform = "scale(1)";
  }

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        padding: "160px 60px 100px",
        display: "flex",
        alignItems: "flex-end",
        position: "relative",
        overflow: "hidden",
        background: "#0a0a0a",
      }}
    >
      <div ref={blob1Ref} style={blobStyle1} />
      <div ref={blob2Ref} style={blobStyle2} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "flex-end",
          width: "100%",
          maxWidth: "1300px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* LEFT COLUMN */}
        <div>
          <div
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "5px",
              textTransform: "uppercase",
              color: "#c8f542",
              marginBottom: "24px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span
              style={{
                display: "block",
                width: "32px",
                height: "1px",
                background: "#c8f542",
              }}
            />
            Studio
          </div>

          <div
            ref={titleRef}
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(72px, 9vw, 140px)",
              lineHeight: 0.88,
              letterSpacing: "-4px",
              marginBottom: "40px",
              overflow: "hidden",
            }}
          >
            <span style={{ display: "block" }}>Almond</span>
            <span
              style={{
                display: "block",
                fontStyle: "italic",
                color: "#c8f542",
              }}
            >
              D. Nelsi
            </span>
          </div>

          <a
            ref={ctaRef}
            href="#contact"
            onMouseEnter={handleCtaEnter}
            onMouseLeave={handleCtaLeave}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              background: "#c8f542",
              color: "#0a0a0a",
              padding: "16px 32px",
              borderRadius: "100px",
              fontFamily: "'Syne', sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              textDecoration: "none",
              transition: "all 0.3s",
              letterSpacing: "0.5px",
            }}
          >
            {"Let's Talk"}
            <span>→</span>
          </a>
        </div>

        {/* RIGHT COLUMN */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "28px",
            alignItems: "flex-end",
          }}
        >
          <div
            ref={imgRef}
            style={{
              width: "280px",
              height: "330px",
              borderRadius: "24px",
              overflow: "hidden",
              position: "relative",
              background: "#1a1a1a",
              opacity: 0,
              flexShrink: 0,
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80&auto=format&fit=crop"
              alt="Creative Studio"
              onError={(e) => {
                e.target.src = "https://picsum.photos/seed/floka/600/700";
              }}
              onMouseEnter={handleImgEnter}
              onMouseLeave={handleImgLeave}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                transition: "transform 0.6s",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "16px",
                left: "16px",
                background: "rgba(10,10,10,0.85)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.1)",
                padding: "7px 14px",
                borderRadius: "100px",
                fontFamily: "'Syne', sans-serif",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              Head of Idea
            </div>
          </div>

          <p
            ref={descRef}
            style={{
              fontSize: "15px",
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.75,
              maxWidth: "320px",
              textAlign: "right",
            }}
          >
            No cookie-cutter websites. No fluff. Just real tools and smart
            strategies to grow your business and elevate your brand.
          </p>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div
          className="scroll-line"
          style={{
            width: "1px",
            height: "60px",
            background: "linear-gradient(to bottom, #c8f542, transparent)",
          }}
        />
        <span
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "10px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.4)",
            writingMode: "vertical-rl",
          }}
        >
          scroll
        </span>
      </div>
    </section>
  );
}