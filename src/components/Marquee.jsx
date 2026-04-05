const items = ["Strategy","Creativity","Innovation","Design","Development","Branding",
                "Strategy","Creativity","Innovation","Design","Development","Branding"];

export default function Marquee() {
  return (
    <div style={{ background: "#c8f542", overflow: "hidden", padding: "0" }}>
      <div className="marquee-track">
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              display: "inline-flex", alignItems: "center", gap: "24px",
              padding: "18px 40px",
              fontFamily: "'DM Serif Display', serif",
              fontSize: "22px", color: "#0a0a0a", whiteSpace: "nowrap",
            }}
          >
            {item}
            <span style={{ fontSize: "12px", opacity: 0.45 }}>✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
