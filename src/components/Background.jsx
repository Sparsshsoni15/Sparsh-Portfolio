import { useCallback, useEffect, useRef, useState } from "react";

const THEME_CONFIG = {
  /* =========================================================
     DEFAULT / DARK THEME
  ========================================================= */

  default: {
    background:
      "linear-gradient(135deg, #030712 0%, #111827 48%, #1e1b4b 100%)",

    particle: "#c4b5fd",
    line: "#a78bfa",
    accent: "#8b5cf6",

    particleOpacity: 0.82,
    lineOpacity: 0.42,

    glow1: "#6366f1",
    glow2: "#8b5cf6",
  },


  /* =========================================================
     RETRO / DARK THEME
  ========================================================= */

  retro: {
    background:
      "linear-gradient(135deg, #17120d 0%, #2b1a0d 48%, #4a2c0f 100%)",

    particle: "#fed7aa",
    line: "#fb923c",
    accent: "#f97316",

    particleOpacity: 0.84,
    lineOpacity: 0.42,

    glow1: "#f97316",
    glow2: "#fb923c",
  },


  /* =========================================================
     CYBERPUNK / DARK THEME
  ========================================================= */

  cyberpunk: {
    background:
      "linear-gradient(135deg, #020617 0%, #0b1120 38%, #1e1045 70%, #30105c 100%)",

    particle: "#67e8f9",
    line: "#22d3ee",
    accent: "#e879f9",

    particleOpacity: 0.88,
    lineOpacity: 0.46,

    glow1: "#22d3ee",
    glow2: "#e879f9",
  },


  /* =========================================================
     VALENTINE / LIGHT THEME
  ========================================================= */

  valentine: {
    background:
      "linear-gradient(135deg, #fff1f6 0%, #f9d4e2 48%, #efb2ca 100%)",

    /* Darker particles for light background */
    particle: "#9f1239",
    line: "#be185d",
    accent: "#e11d48",

    particleOpacity: 0.58,
    lineOpacity: 0.20,

    glow1: "#f472b6",
    glow2: "#fb7185",
  },


  /* =========================================================
     AQUA / LIGHT THEME
  ========================================================= */

  aqua: {
    background:
      "linear-gradient(135deg, #effcff 0%, #d2f2f5 48%, #a9e1e8 100%)",

    /* Darker particles for light background */
    particle: "#155e75",
    line: "#0e7490",
    accent: "#0891b2",

    particleOpacity: 0.58,
    lineOpacity: 0.20,

    glow1: "#67e8f9",
    glow2: "#2dd4bf",
  },
};


function Background() {
  const particlesRef = useRef(null);
  const scriptRef = useRef(null);

  const initialTheme =
    typeof document !== "undefined"
      ? document.documentElement.getAttribute("data-theme") ||
        "default"
      : "default";

  const initialConfig =
    THEME_CONFIG[initialTheme] || THEME_CONFIG.default;

  const [theme, setTheme] = useState(initialTheme);

  const [background, setBackground] = useState(
    initialConfig.background
  );


  /* =========================================================
     GET CURRENT THEME CONFIG
  ========================================================= */

  const getThemeConfig = useCallback(() => {
    const themeName =
      document.documentElement.getAttribute("data-theme") ||
      "default";

    return (
      THEME_CONFIG[themeName] ||
      THEME_CONFIG.default
    );
  }, []);


  /* =========================================================
     DESTROY PARTICLES
  ========================================================= */

  const destroyParticles = useCallback(() => {
    if (window.pJSDom?.length) {
      window.pJSDom.forEach((instance) => {
        try {
          instance?.pJS?.fn?.vendors?.destroypJS?.();
        } catch {
          // Ignore cleanup errors
        }
      });

      window.pJSDom = [];
    }

    if (particlesRef.current) {
      const canvas =
        particlesRef.current.querySelector("canvas");

      if (canvas) {
        canvas.remove();
      }
    }
  }, []);


  /* =========================================================
     INITIALIZE PARTICLES
  ========================================================= */

  const initParticles = useCallback(() => {
    if (
      typeof window === "undefined" ||
      !window.particlesJS ||
      !particlesRef.current
    ) {
      return;
    }

    const config = getThemeConfig();

    setBackground(config.background);

    destroyParticles();

    const isMobile = window.innerWidth < 768;

    window.particlesJS("particles-js", {
      particles: {
        number: {
          value: isMobile ? 55 : 110,

          density: {
            enable: true,
            value_area: isMobile ? 850 : 900,
          },
        },

        color: {
          value: config.particle,
        },

        shape: {
          type: "circle",

          stroke: {
            width: 0.7,
            color: config.accent,
          },
        },

        opacity: {
          value: config.particleOpacity,
          random: true,

          anim: {
            enable: true,
            speed: 0.8,

            opacity_min:
              config.particleOpacity * 0.35,

            sync: false,
          },
        },

        size: {
          value: isMobile ? 1.8 : 2.5,
          random: true,

          anim: {
            enable: true,
            speed: 1.1,
            size_min: 0.7,
            sync: false,
          },
        },

        line_linked: {
          enable: true,

          distance: isMobile ? 125 : 165,

          color: config.line,

          opacity: config.lineOpacity,

          width: 1.2,
        },

        move: {
          enable: true,

          speed: isMobile ? 0.95 : 1.7,

          direction: "none",

          random: true,

          straight: false,

          out_mode: "bounce",

          bounce: true,

          attract: {
            enable: false,
          },
        },
      },


      /* =====================================================
         INTERACTIVITY
      ===================================================== */

      interactivity: {
        detect_on: "canvas",

        events: {
          onhover: {
            enable: true,
            mode: "grab",
          },

          onclick: {
            enable: true,
            mode: "push",
          },

          resize: true,
        },

        modes: {
          grab: {
            distance: 220,

            line_linked: {
              opacity: Math.min(
                config.lineOpacity + 0.32,
                0.75
              ),
            },
          },

          push: {
            particles_nb: isMobile ? 2 : 4,
          },

          repulse: {
            distance: 150,
            duration: 0.4,
          },
        },
      },

      retina_detect: true,
    });
  }, [destroyParticles, getThemeConfig]);


  /* =========================================================
     LOAD PARTICLES.JS + WATCH THEME CHANGES
  ========================================================= */

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const startParticles = () => {
      requestAnimationFrame(() => {
        initParticles();
      });
    };


    if (window.particlesJS) {
      startParticles();
    } else {
      const existingScript = document.querySelector(
        'script[data-particles-js="true"]'
      );

      if (existingScript) {
        existingScript.addEventListener(
          "load",
          startParticles
        );

        scriptRef.current = existingScript;
      } else {
        const script = document.createElement("script");

        script.src =
          "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";

        script.async = true;

        script.dataset.particlesJs = "true";

        script.onload = startParticles;

        document.body.appendChild(script);

        scriptRef.current = script;
      }
    }


    /* =====================================================
       WATCH FOR THEME CHANGES
    ===================================================== */

    const observer = new MutationObserver(() => {
      const newTheme =
        document.documentElement.getAttribute("data-theme") ||
        "default";

      setTheme(newTheme);

      initParticles();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });


    /* =====================================================
       RESIZE
    ===================================================== */

    let resizeTimer;

    const handleResize = () => {
      clearTimeout(resizeTimer);

      resizeTimer = setTimeout(() => {
        initParticles();
      }, 300);
    };

    window.addEventListener(
      "resize",
      handleResize
    );


    /* =====================================================
       CLEANUP
    ===================================================== */

    return () => {
      observer.disconnect();

      window.removeEventListener(
        "resize",
        handleResize
      );

      clearTimeout(resizeTimer);

      destroyParticles();
    };
  }, [destroyParticles, initParticles]);


  /* =========================================================
     CURRENT CONFIG
  ========================================================= */

  const config =
    THEME_CONFIG[theme] ||
    THEME_CONFIG.default;

  const isLightTheme =
    theme === "valentine" ||
    theme === "aqua";


  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        overflow-hidden
      "
      style={{
        zIndex: 0,

        background,

        transition:
          "background 700ms ease",
      }}
    >

      {/* =====================================================
          ANIMATED PARTICLES
      ===================================================== */}

      <div
        id="particles-js"
        ref={particlesRef}
        className="absolute inset-0"
      />


      {/* =====================================================
          MAIN GLOW
      ===================================================== */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[520px]
          w-[520px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          blur-[150px]
        "
        style={{
          background: config.glow1,

          opacity: isLightTheme
            ? 0.055
            : 0.14,
        }}
      />


      {/* =====================================================
          SECONDARY GLOW
      ===================================================== */}

      <div
        className="
          absolute
          -right-40
          top-1/4
          h-[380px]
          w-[380px]
          rounded-full
          blur-[130px]
        "
        style={{
          background: config.glow2,

          opacity: isLightTheme
            ? 0.045
            : 0.11,
        }}
      />


      {/* =====================================================
          BOTTOM GLOW
      ===================================================== */}

      <div
        className="
          absolute
          -bottom-48
          -left-32
          h-[420px]
          w-[420px]
          rounded-full
          blur-[140px]
        "
        style={{
          background: config.accent,

          opacity: isLightTheme
            ? 0.035
            : 0.08,
        }}
      />


      {/* =====================================================
          SOFT VIGNETTE
      ===================================================== */}

      <div
        className="absolute inset-0"
        style={{
          background: isLightTheme
            ? "radial-gradient(circle at center, transparent 42%, rgba(255,255,255,0.16) 100%)"
            : "radial-gradient(circle at center, transparent 28%, rgba(0,0,0,0.18) 100%)",
        }}
      />

    </div>
  );
}

export default Background;