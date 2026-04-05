const items = [
  { img: "https://randomuser.me/api/portraits/men/32.jpg",  text: '"Great in UI/UX"'              },
  { img: "https://randomuser.me/api/portraits/women/44.jpg", text: '"Best design communicator"'   },
  { img: "https://randomuser.me/api/portraits/men/56.jpg",  text: '"10/10 well recommended"'      },
  { img: "https://randomuser.me/api/portraits/women/68.jpg", text: '"Super speedy website designer"' },
  { img: "https://randomuser.me/api/portraits/men/32.jpg",  text: '"Great in UI/UX"'              },
  { img: "https://randomuser.me/api/portraits/women/44.jpg", text: '"Best design communicator"'   },
  { img: "https://randomuser.me/api/portraits/men/56.jpg",  text: '"10/10 well recommended"'      },
  { img: "https://randomuser.me/api/portraits/women/68.jpg", text: '"Super speedy website designer"' },
];

export default function TextSlip() {
  return (
    <div style={{ background: "#111111", padding: "32px 0", overflow: "hidden", borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="marquee-track">
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              display: "inline-flex", alignItems: "center", gap: "16px",
              padding: "0 32px",
              fontFamily: "'DM Serif Display', serif",
              fontSize: "18px", color: "rgba(255,255,255,0.5)",
              whiteSpace: "nowrap", fontStyle: "italic",
            }}
          >
            <img src={item.img} alt="" style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }} />
            <span style={{ color: "#c8f542", fontStyle: "normal" }}>✦</span>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}
