export default function BirdBanner() {
  const items = [
    "Pixel-Perfect Websites",
    "Bold Digital Strategy",
    "Award-Winning Design",
    "Creative Innovation",
    "Immersive Experiences",
    "Brand Identity",
    "UI/UX Excellence",
    "Pixel-Perfect Websites",
    "Bold Digital Strategy",
    "Award-Winning Design",
    "Creative Innovation",
    "Immersive Experiences",
    "Brand Identity",
    "UI/UX Excellence",
  ];

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        height: "38px",
        background: "#c8f542",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="bird-track">
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "20px",
              fontFamily: "'Syne', sans-serif",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#0a0a0a",
              padding: "0 36px",
              whiteSpace: "nowrap",
            }}
          >
            {item}
            <span style={{ opacity: 0.5, fontSize: "9px" }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
