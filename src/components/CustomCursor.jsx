import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const coreRef = useRef(null);
  const orbitRef = useRef(null);
  const glowRef = useRef(null);

  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  // Desktop / mouse only
  useEffect(() => {
    const media = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    const check = () => setEnabled(media.matches);

    check();
    media.addEventListener("change", check);

    return () => media.removeEventListener("change", check);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add("custom-cursor-active");

    const core = coreRef.current;
    const orbit = orbitRef.current;
    const glow = glowRef.current;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let orbitX = mouseX;
    let orbitY = mouseY;

    let glowX = mouseX;
    let glowY = mouseY;

    let animationFrame;

    const handleMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Detect interactive elements
      const interactive = e.target.closest(
        "a, button, input, textarea, select, [role='button']"
      );

      setHovering(Boolean(interactive));

      // Sharp center
      if (core) {
        core.style.transform = `
          translate3d(${mouseX}px, ${mouseY}px, 0)
          translate(-50%, -50%)
        `;
      }
    };

    const handleDown = () => {
      setClicking(true);
    };

    const handleUp = () => {
      setClicking(false);
    };

    const animate = () => {
      // Orbit follows smoothly
      orbitX += (mouseX - orbitX) * 0.16;
      orbitY += (mouseY - orbitY) * 0.16;

      // Glow follows even more smoothly
      glowX += (mouseX - glowX) * 0.09;
      glowY += (mouseY - glowY) * 0.09;

      if (orbit) {
        orbit.style.transform = `
          translate3d(${orbitX}px, ${orbitY}px, 0)
          translate(-50%, -50%)
        `;
      }

      if (glow) {
        glow.style.transform = `
          translate3d(${glowX}px, ${glowY}px, 0)
          translate(-50%, -50%)
        `;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove, {
      passive: true,
    });

    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);

      cancelAnimationFrame(animationFrame);

      document.documentElement.classList.remove(
        "custom-cursor-active"
      );
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      {/* Ambient Glow */}
      <div
        ref={glowRef}
        className={`
          pointer-events-none fixed left-0 top-0 z-[99996]
          rounded-full
          bg-[var(--theme-primary)]
          blur-2xl
          transition-all duration-300
          ${
            hovering
              ? "h-20 w-20 opacity-[0.12]"
              : "h-12 w-12 opacity-[0.07]"
          }
        `}
      />

      {/* Rotating Orbit */}
      <div
        ref={orbitRef}
        className={`
          pointer-events-none fixed left-0 top-0 z-[99998]
          h-9 w-9
          transition-all duration-300 ease-out
          ${
            hovering
              ? "scale-125"
              : "scale-100"
          }
          ${clicking ? "scale-75" : ""}
        `}
      >
        {/* Orbit ring */}
        <div
          className="
            absolute inset-0
            rounded-full
            border border-[var(--theme-primary)]
            opacity-60
            animate-[spin_3s_linear_infinite]
          "
        />

        {/* Orbit accent */}
        <div
          className="
            absolute
            -right-0.5
            top-1/2
            h-1.5
            w-1.5
            -translate-y-1/2
            rounded-full
            bg-[var(--theme-primary)]
            shadow-[0_0_8px_var(--theme-primary)]
          "
        />

        {/* Second accent */}
        <div
          className="
            absolute
            -left-0.5
            top-1/2
            h-1
            w-1
            -translate-y-1/2
            rounded-full
            bg-[var(--theme-primary)]
            opacity-70
          "
        />
      </div>

      {/* Sharp Center Spark */}
      <div
        ref={coreRef}
        className={`
          pointer-events-none fixed left-0 top-0 z-[100000]
          transition-transform duration-150 ease-out
          ${clicking ? "scale-75" : ""}
        `}
      >
        <div className="relative h-3 w-3">

          {/* Vertical */}
          <div
            className="
              absolute left-1/2 top-0
              h-3 w-[1px]
              -translate-x-1/2
              bg-[var(--theme-primary)]
              shadow-[0_0_6px_var(--theme-primary)]
            "
          />

          {/* Horizontal */}
          <div
            className="
              absolute left-0 top-1/2
              h-[1px] w-3
              -translate-y-1/2
              bg-[var(--theme-primary)]
              shadow-[0_0_6px_var(--theme-primary)]
            "
          />

          {/* Center */}
          <div
            className="
              absolute left-1/2 top-1/2
              h-1.5 w-1.5
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[var(--theme-primary)]
              shadow-[0_0_10px_var(--theme-primary)]
            "
          />
        </div>
      </div>
    </>
  );
};

export default CustomCursor;