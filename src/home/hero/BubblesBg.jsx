import { useState, useRef, useLayoutEffect, useCallback } from "react";

export default function HeroBubbles() {
  const containerRef = useRef(null);
  const [bubbles, setBubbles] = useState([]);

  // Generate bubbles ONCE
  const createBubbles = useCallback((width, height) => {
    const targetCellW = 60; 
    const targetCellH = 50;

    const cols = Math.max(3, Math.floor(width / targetCellW));
    const rows = Math.max(3, Math.floor(height / targetCellH));

    const items = [];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const cellLeft = (c / cols) * 100;
        const cellTop = (r / rows) * 100;
        const cellW = 100 / cols;
        const cellH = 100 / rows;

        const left = cellLeft + Math.random() * cellW;
        const top = cellTop + Math.random() * cellH;

        const size = 1 + Math.random() * 3;
        const blur = Math.random() * 2;
        const opacity = 0.2 + Math.random() * 0.4;

        const radius = `${50 + Math.random() * 40}% / ${50 + Math.random() * 40}%`;

        items.push({
          left: `${left}%`,
          top: `${top}%`,
          size: `${size}px`,
          radius,
          blur: `${blur}px`,
          opacity,
          duration: `${4 + Math.random() * 2}s`,
          delay: `${-Math.random() * 2}s`,
        });
      }
    }

    return items;
  }, []);

  // Measure hero ONCE, generate bubbles ONCE
  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const generated = createBubbles(rect.width, rect.height);
    setBubbles(generated);
  }, [createBubbles]);

  return (
    <div ref={containerRef} className="hero-bubbles">
      {bubbles.map((b, i) => (
        <div
          key={i}
          className="bubble"
          style={{
            left: b.left,
            top: b.top,
            width: b.size,
            height: b.size,
            borderRadius: b.radius,
            filter: `blur(${b.blur})`,
            opacity: b.opacity,
            animationDuration: b.duration,
            animationDelay: b.delay,
          }}
        />
      ))}
    </div>
  );
}
