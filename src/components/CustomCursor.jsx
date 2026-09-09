import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const trailRefs = useRef([]);

    const mouseRef = useRef({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
    });

    const positionRef = useRef({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
    });

    const [enabled, setEnabled] = useState(false);
    const [isInteractive, setIsInteractive] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(
            "(hover: hover) and (pointer: fine)"
        );

        const update = () => {
            setEnabled(mediaQuery.matches);
        };

        update();

        mediaQuery.addEventListener("change", update);

        return () => {
            mediaQuery.removeEventListener("change", update);
        };
    }, []);

    useEffect(() => {
        if (!enabled) return;

        document.documentElement.classList.add("custom-cursor-active");

        const cursor = cursorRef.current;
        const particles = trailRefs.current;

        const mouse = mouseRef.current;
        const position = positionRef.current;

        // Trail starts behind the cursor
        const trail = Array.from({ length: 10 }, () => ({
            x: mouse.x,
            y: mouse.y,
        }));

        let animationFrame;

        const handleMouseMove = (event) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;

            const interactive = event.target.closest(
                "a, button, input, textarea, select, [role='button']"
            );

            setIsInteractive(Boolean(interactive));
        };

        const animate = () => {
            // Smooth cursor movement
            position.x += (mouse.x - position.x) * 0.28;
            position.y += (mouse.y - position.y) * 0.28;

            if (cursor) {
                cursor.style.transform = `
          translate3d(
            ${position.x}px,
            ${position.y}px,
            0
          )
        `;
            }

            /*
              TRAIL:
              First particle follows the cursor,
              remaining particles follow the previous particle.
              This makes the tail extend BELOW/BEHIND the cursor.
            */

            trail[0].x +=
                (position.x - trail[0].x) * 0.22;

            trail[0].y +=
                (position.y - trail[0].y) * 0.22;

            for (let i = 1; i < trail.length; i++) {
                trail[i].x +=
                    (trail[i - 1].x - trail[i].x) * 0.20;

                trail[i].y +=
                    (trail[i - 1].y - trail[i].y) * 0.20;
            }

            particles.forEach((particle, index) => {
                if (!particle) return;

                const size = Math.max(
                    1.2,
                    4.8 - index * 0.42
                );

                const opacity = Math.max(
                    0.04,
                    0.7 - index * 0.07
                );

                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.opacity = opacity;

                particle.style.transform = `
          translate3d(
            ${trail[index].x}px,
            ${trail[index].y}px,
            0
          )
          translate(-50%, -50%)
        `;
            });

            animationFrame = requestAnimationFrame(animate);
        };

        window.addEventListener(
            "mousemove",
            handleMouseMove,
            { passive: true }
        );

        animationFrame = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener(
                "mousemove",
                handleMouseMove
            );

            cancelAnimationFrame(animationFrame);

            document.documentElement.classList.remove(
                "custom-cursor-active"
            );
        };
    }, [enabled]);

    if (!enabled) return null;

    return (
        <>
            {/* =========================
          SPARKLING TRAIL
      ========================== */}
            <div className="pointer-events-none fixed inset-0 z-[99997]">
                {Array.from({ length: 10 }).map((_, index) => (
                    <span
                        key={index}
                        ref={(element) => {
                            trailRefs.current[index] = element;
                        }}
                        className="pointer-events-none fixed left-0 top-0 rounded-full"
                        style={{
                            opacity: 0,
                            background: "var(--theme-primary)",
                            boxShadow:
                                "0 0 8px var(--theme-primary), 0 0 16px var(--theme-primary)",
                            willChange: "transform, opacity",
                        }}
                    />
                ))}
            </div>

            {/* =========================
          CUSTOM SHARP CURSOR
      ========================== */}
            <div
                ref={cursorRef}
                className={`
          pointer-events-none fixed left-0 top-0
          z-[100000]
          transition-opacity duration-150
          ${isInteractive ? "opacity-0" : "opacity-100"}
        `}
                style={{
                    transformOrigin: "0 0",
                    willChange: "transform",
                }}
            >
                <svg
                    width="16"
                    height="20"
                    viewBox="0 0 20 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        overflow: "visible",
                    }}
                >
                    <path
                        d="
      M1.2 0.8
      L1.2 19.8
      L6.4 15.2
      L10.4 24.8
      L13.1 23.6
      L9.1 14
      L16.2 14
      L1.2 0.8
      Z
    "
                        fill="var(--theme-primary)"
                        stroke="#0A0A0A"
                        strokeWidth="1.1"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </>
    );
};

export default CustomCursor;