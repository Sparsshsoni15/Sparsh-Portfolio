import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const glowRef = useRef(null);

  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  // Enable only on mouse/trackpad devices
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

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add("custom-cursor-active");

    const cursor = cursorRef.current;
    const glow = glowRef.current;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let glowX = mouseX;
    let glowY = mouseY;

    let animationFrame;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Main arrow follows instantly
      if (cursor) {
        cursor.style.transform = `
          translate3d(${mouseX}px, ${mouseY}px, 0)
        `;
      };

      // Detect interactive elements
      const interactive = e.target.closest(
        "a, button, input, textarea, select, [role='button']"
      );

      setHovering(!!interactive);
    };

    const handleMouseDown = () => {
      setClicking(true);
    };

    const handleMouseUp = () => {
      setClicking(false);
    };

    // Soft glow follows slightly behind
    const animateGlow = () => {
      glowX += (mouseX - glowX) * 0.12;
      glowY += (mouseY - glowY) * 0.12;

      if (glow) {
        glow.style.transform = `
          translate3d(${glowX}px, ${glowY}px, 0)
          translate(-50%, -50%)
        `;
      }

      animationFrame = requestAnimationFrame(animateGlow);
    };

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    animationFrame = requestAnimationFrame(animateGlow);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);

      cancelAnimationFrame(animationFrame);

      document.documentElement.classList.remove(
        "custom-cursor-active"
      );
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      {/* Soft Animated Glow */}
      <div
        ref={glowRef}
        className={`
          pointer-events-none fixed left-0 top-0 z-[99998]
          rounded-full
          bg-[var(--theme-primary)]
          blur-xl
          transition-all duration-200
          ${
            hovering
              ? "h-8 w-8 opacity-30"
              : "h-5 w-5 opacity-20"
          }
        `}
      />

      {/* Main Arrow Cursor */}
      <div
        ref={cursorRef}
        className={`
          pointer-events-none fixed left-0 top-0 z-[100000]
          origin-top-left
          transition-transform duration-100 ease-out
          ${
            clicking
              ? "scale-75"
              : hovering
              ? "scale-110"
              : "scale-100"
          }
        `}
      >
        <svg
          width="22"
          height="26"
          viewBox="0 0 22 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_0_5px_var(--theme-primary)]"
        >
          {/* Arrow */}
          <path
            d="M2 1L19.5 17.5L11.5 18.5L8 24.5L5.5 23L9 17L2 1Z"
            fill="var(--theme-primary)"
            stroke="currentColor"
            strokeWidth="1.2"
            className="text-white dark:text-black"
          />
        </svg>
      </div>
    </>
  );
};

export default CustomCursor;