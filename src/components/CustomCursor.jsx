import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  // Enable only on devices having a real mouse
  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    const checkDevice = () => {
      setEnabled(mediaQuery.matches);
    };

    checkDevice();

    mediaQuery.addEventListener("change", checkDevice);

    return () => {
      mediaQuery.removeEventListener("change", checkDevice);
    };
  }, []);

  // Cursor movement
  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add("custom-cursor-active");

    const dot = dotRef.current;
    const ring = ringRef.current;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let ringX = mouseX;
    let ringY = mouseY;

    let animationFrame;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Inner dot follows instantly
      if (dot) {
        dot.style.transform = `
          translate3d(${mouseX}px, ${mouseY}px, 0)
          translate(-50%, -50%)
        `;
      };

      // Detect interactive elements
      const interactiveElement = e.target.closest(
        "a, button, input, textarea, select, [role='button']"
      );

      setHovering(!!interactiveElement);
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.14;
      ringY += (mouseY - ringY) * 0.14;

      if (ring) {
        ring.style.transform = `
          translate3d(${ringX}px, ${ringY}px, 0)
          translate(-50%, -50%)
        `;
      }

      animationFrame = requestAnimationFrame(animateRing);
    };

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    animationFrame = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);

      document.documentElement.classList.remove(
        "custom-cursor-active"
      );
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      {/* Outer Ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[99999]"
      >
        <div
          className={`
            h-9 w-9 rounded-full
            border border-purple-400
            transition-all duration-200 ease-out
            shadow-[0_0_15px_rgba(168,85,247,0.35)]
            ${
              hovering
                ? "h-14 w-14 border-purple-300 bg-purple-500/10 shadow-[0_0_30px_rgba(168,85,247,0.55)]"
                : ""
            }
          `}
        />
      </div>

      {/* Center Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[100000]"
      >
        <div
          className={`
            h-1.5 w-1.5 rounded-full
            bg-purple-400
            shadow-[0_0_10px_rgba(168,85,247,0.9)]
            transition-transform duration-200
            ${hovering ? "scale-75" : "scale-100"}
          `}
        />
      </div>
    </>
  );
};

export default CustomCursor;