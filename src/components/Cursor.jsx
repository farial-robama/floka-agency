import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef   = useRef(null);
  const followerRef = useRef(null);
  let mx = 0, my = 0, fx = 0, fy = 0;

  useEffect(() => {
    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      cursorRef.current.style.left = mx + "px";
      cursorRef.current.style.top  = my + "px";
    };

    let raf;
    const animate = () => {
      fx += (mx - fx) * 0.12;
      fy += (my - fy) * 0.12;
      followerRef.current.style.left = fx + "px";
      followerRef.current.style.top  = fy + "px";
      raf = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      cursorRef.current.style.transform   = "translate(-50%,-50%) scale(2.5)";
      followerRef.current.style.transform = "translate(-50%,-50%) scale(1.5)";
    };
    const onLeave = () => {
      cursorRef.current.style.transform   = "translate(-50%,-50%) scale(1)";
      followerRef.current.style.transform = "translate(-50%,-50%) scale(1)";
    };

    document.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);

    document.querySelectorAll("a, button, .portfolio-item, .team-card, .blog-card").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef}   className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  );
}
