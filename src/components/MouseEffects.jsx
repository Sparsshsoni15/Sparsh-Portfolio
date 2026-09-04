"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

function MouseEffects({
  color = "var(--theme-primary)",
  duration = 0.3,
  strokeWidth = 2,
  effectSize = 90,
  rotation = 0,
}) {
  const containerRef = useRef(null);
  const [snipers, setSnipers] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const container = containerRef.current;

      if (!container) return;

      const rect = container.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const id = `${e.timeStamp}-${Math.round(x)}-${Math.round(y)}`;

      setSnipers((prev) => [...prev, { id, x, y }]);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const svgStyle = (x, y) => ({
    position: "absolute",
    left: x - effectSize / 2,
    top: y - effectSize / 2,
    width: effectSize,
    height: effectSize,
    pointerEvents: "none",
    overflow: "visible",
    transform: `rotate(${rotation}deg)`,
    transformOrigin: "center",
  });

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{
        overflow: "visible",
      }}
    >
      {snipers.map((sniper) => (
        <div key={sniper.id}>
          {/* ==============================
              FOUR TARGETING LINES
          ============================== */}

          <svg
            style={svgStyle(sniper.x, sniper.y)}
            ref={(el) => {
              if (!el) return;

              const lines = el.querySelectorAll("line");

              lines.forEach((line, index) => {
                const angle =
                  [0, 90, 180, 270][index] * (Math.PI / 180);

                const centerX = effectSize / 2;
                const centerY = effectSize / 2;

                const lineLength = effectSize * 0.2;

                const startX =
                  centerX + 5 * Math.cos(angle);

                const startY =
                  centerY - 5 * Math.sin(angle);

                const endX =
                  centerX +
                  (5 + lineLength) * Math.cos(angle);

                const endY =
                  centerY -
                  (5 + lineLength) * Math.sin(angle);

                gsap.set(line, {
                  attr: {
                    x1: startX,
                    y1: startY,
                    x2: endX,
                    y2: endY,
                  },
                  strokeWidth,
                });

                gsap.timeline()
                  .to(line, {
                    attr: {
                      x1: endX,
                      y1: endY,
                      x2: endX,
                      y2: endY,
                    },

                    translateX:
                      (5 + lineLength) *
                      Math.cos(angle),

                    translateY:
                      -(5 + lineLength) *
                      Math.sin(angle),

                    duration,
                    ease: "power2.out",
                  })
                  .to(
                    line,
                    {
                      strokeWidth: 0,
                      duration: duration * 0.4,
                      ease: "linear",
                    },
                    duration * 0.6
                  );
              });
            }}
          >
            {[0, 90, 180, 270].map((_, index) => {
              const centerX = effectSize / 2;
              const centerY = effectSize / 2;

              return (
                <line
                  key={index}
                  x1={centerX}
                  y1={centerY}
                  x2={centerX}
                  y2={centerY}
                  stroke={color}
                  strokeWidth={strokeWidth}
                  strokeLinecap="square"
                />
              );
            })}
          </svg>

          {/* ==============================
              EIGHT OUTWARD PARTICLES
          ============================== */}

          {[
            Math.PI / 3,
            (2 * Math.PI) / 3,
            (4 * Math.PI) / 3,
            (5 * Math.PI) / 3,
            Math.PI / 6,
            (5 * Math.PI) / 6,
            (7 * Math.PI) / 6,
            (11 * Math.PI) / 6,
          ].map((angle, index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                left: sniper.x - strokeWidth / 2,
                top: sniper.y - strokeWidth / 2,
                width: strokeWidth,
                height: strokeWidth,
                backgroundColor: color,
                pointerEvents: "none",
                transformOrigin: "center",
                transform: `rotate(${rotation}deg)`,
              }}
              ref={(el) => {
                if (!el || el.dataset.animated) return;

                el.dataset.animated = "true";

                gsap.set(el, {
                  x: 0,
                  y: 0,
                  width: strokeWidth,
                  height: strokeWidth,
                });

                gsap.timeline()
                  .to(el, {
                    x:
                      Math.cos(angle) *
                      (effectSize * 0.4),

                    y:
                      Math.sin(angle) *
                      (effectSize * 0.4),

                    duration,
                    ease: "power2.out",
                  })
                  .to(
                    el,
                    {
                      width: 0,
                      height: 0,
                      duration: duration * 0.4,
                      ease: "linear",

                      onComplete: () => {
                        setSnipers((prev) =>
                          prev.filter(
                            (item) =>
                              item.id !== sniper.id
                          )
                        );
                      },
                    },
                    duration * 0.6
                  );
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default MouseEffects;