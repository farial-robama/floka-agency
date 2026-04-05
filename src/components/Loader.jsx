import { useEffect, useState } from "react";

export default function Loader({ onDone }) {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 15;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(onDone, 400);
      }
      setPct(Math.floor(current));
    }, 100);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#0a0a0a",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <div
        style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "52px",
          letterSpacing: "-2px",
          color: "#fff",
        }}
      >
        floka
        <span style={{ color: "#c8f542" }}>.</span>
      </div>

      <div
        style={{
          width: "200px",
          height: "2px",
          background: "rgba(255,255,255,0.08)",
          borderRadius: "2px",
          overflow: "hidden",
        }}
      >
        <div className="loader-progress" />
      </div>

      <div
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "12px",
          color: "rgba(255,255,255,0.45)",
          letterSpacing: "3px",
        }}
      >
        {pct}%
      </div>
    </div>
  );
}
