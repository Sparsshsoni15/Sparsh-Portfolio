import { useRef, useEffect, useCallback } from "react";

const MouseEffects = ({
  sparkColor,
  sparkSize = 10,
  sparkRadius = 18,
  sparkCount = 8,
  duration = 400,
  easing = "ease-out",
  extraScale = 1.2,
}) => {
  const canvasRef = useRef(null);
  const sparksRef = useRef([]);

  // ============================================
  // GET ACTUAL THEME COLOR
  // ============================================

  const getThemeColor = useCallback(() => {
    if (sparkColor && !sparkColor.includes("var(")) {
      return sparkColor;
    }

    const rootStyles =
      getComputedStyle(document.documentElement);

    const primary =
      rootStyles
        .getPropertyValue("--theme-primary")
        .trim();

    return primary || "#8B5CF6";
  }, [sparkColor]);

  // ============================================
  // CANVAS SETUP
  // ============================================

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr =
        window.devicePixelRatio || 1;

      canvas.width =
        window.innerWidth * dpr;

      canvas.height =
        window.innerHeight * dpr;

      canvas.style.width =
        `${window.innerWidth}px`;

      canvas.style.height =
        `${window.innerHeight}px`;

      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );
    };

    resizeCanvas();

    window.addEventListener(
      "resize",
      resizeCanvas
    );

    return () => {
      window.removeEventListener(
        "resize",
        resizeCanvas
      );
    };
  }, []);

  // ============================================
  // EASING
  // ============================================

  const easeFunc = useCallback(
    (t) => {
      switch (easing) {
        case "linear":
          return t;

        case "ease-in":
          return t * t;

        case "ease-in-out":
          return t < 0.5
            ? 2 * t * t
            : -1 + (4 - 2 * t) * t;

        default:
          return t * (2 - t);
      }
    },
    [easing]
  );

  // ============================================
  // ANIMATION
  // ============================================

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let animationId;

    const draw = (timestamp) => {
      ctx.clearRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
      );

      const currentColor =
        getThemeColor();

      sparksRef.current =
        sparksRef.current.filter(
          (spark) => {
            const elapsed =
              timestamp -
              spark.startTime;

            if (elapsed >= duration) {
              return false;
            }

            const progress =
              elapsed / duration;

            const eased =
              easeFunc(progress);

            const distance =
              eased *
              sparkRadius *
              extraScale;

            const lineLength =
              sparkSize *
              (1 - eased);

            const x1 =
              spark.x +
              distance *
                Math.cos(
                  spark.angle
                );

            const y1 =
              spark.y +
              distance *
                Math.sin(
                  spark.angle
                );

            const x2 =
              spark.x +
              (distance +
                lineLength) *
                Math.cos(
                  spark.angle
                );

            const y2 =
              spark.y +
              (distance +
                lineLength) *
                Math.sin(
                  spark.angle
                );

            // ==================================
            // SPARK STYLE
            // ==================================

            ctx.save();

            ctx.strokeStyle =
              currentColor;

            ctx.lineWidth = 2;

            ctx.lineCap = "round";

            ctx.shadowBlur = 8;

            ctx.shadowColor =
              currentColor;

            ctx.beginPath();

            ctx.moveTo(x1, y1);

            ctx.lineTo(x2, y2);

            ctx.stroke();

            ctx.restore();

            return true;
          }
        );

      animationId =
        requestAnimationFrame(draw);
    };

    animationId =
      requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(
        animationId
      );
    };
  }, [
    sparkSize,
    sparkRadius,
    sparkCount,
    duration,
    easeFunc,
    extraScale,
    getThemeColor,
  ]);

  // ============================================
  // CLICK HANDLER
  // ============================================

  useEffect(() => {
    const handleClick = (e) => {
      const now =
        performance.now();

      const newSparks =
        Array.from(
          {
            length: sparkCount,
          },
          (_, i) => ({
            x: e.clientX,
            y: e.clientY,

            angle:
              (2 * Math.PI * i) /
              sparkCount,

            startTime: now,
          })
        );

      sparksRef.current.push(
        ...newSparks
      );
    };

    window.addEventListener(
      "click",
      handleClick
    );

    return () => {
      window.removeEventListener(
        "click",
        handleClick
      );
    };
  }, [sparkCount]);

  // ============================================
  // CANVAS
  // ============================================

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        display: "block",
        pointerEvents: "none",
        userSelect: "none",
        zIndex: 99999,
      }}
    />
  );
};

export default MouseEffects;