import {
  ArrowUpRight,
  Download,
  Mail,
} from "lucide-react";

import {
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";

function Hero() {
  // ============================================
  // CODE CARD - CURSOR FOLLOWING TILT + GLOW
  // ============================================

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothRotateX = useSpring(rotateX, {
    stiffness: 220,
    damping: 22,
    mass: 0.5,
  });

  const smoothRotateY = useSpring(rotateY, {
    stiffness: 220,
    damping: 22,
    mass: 0.5,
  });

  // Cursor-following glow position
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);

  const smoothGlowX = useSpring(glowX, {
    stiffness: 180,
    damping: 25,
  });

  const smoothGlowY = useSpring(glowY, {
    stiffness: 180,
    damping: 25,
  });

  const handleCardMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // --------------------------------------------
    // 3D TILT
    // --------------------------------------------

    const maxTilt = 5;

    const rotateYValue =
      ((x - centerX) / centerX) * maxTilt;

    const rotateXValue =
      -((y - centerY) / centerY) * maxTilt;

    rotateY.set(rotateYValue);
    rotateX.set(rotateXValue);

    // --------------------------------------------
    // CURSOR FOLLOWING GLOW
    // --------------------------------------------

    glowX.set(x);
    glowY.set(y);
  };

  const handleCardMouseLeave = () => {
    // Smoothly reset tilt
    rotateX.set(0);
    rotateY.set(0);

    // Move glow back towards center
    glowX.set(0);
    glowY.set(0);
  };

  return (
    <section
      id="home"
      className="
        relative flex min-h-screen items-center
        overflow-hidden px-6 pb-16 pt-28
        sm:px-8 lg:px-12
      "
    >
      <div
        className="
          mx-auto grid w-full max-w-7xl
          items-center gap-14
          lg:grid-cols-[0.9fr_1.1fr]
          lg:gap-16
        "
      >
        {/* =========================
            LEFT SIDE
        ========================= */}

        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="relative z-10"
        >
          {/* Intro */}

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
              duration: 0.6,
            }}
            className="
              mb-6 font-mono text-sm
              sm:text-base
            "
            style={{
              color: "var(--theme-secondary)",
            }}
          >
            Hi, I'm Sparsh Soni 👋
          </motion.p>

          {/* Heading */}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.18,
              duration: 0.7,
            }}
            className="
              max-w-[680px]
              text-[3.5rem]
              font-black
              leading-[0.93]
              tracking-[-0.055em]
              sm:text-6xl
              md:text-7xl
              lg:text-[4.55rem]
              xl:text-[5.2rem]
            "
            style={{
              color: "var(--theme-text)",
            }}
          >
            Engineering
            <br />
            Student
            <br />
            building with
            <br />

            <span
              className="
                inline-block
                bg-gradient-to-r
                from-[var(--theme-secondary)]
                via-[var(--theme-primary)]
                to-[var(--theme-secondary)]
                bg-[length:200%_auto]
                bg-clip-text
                text-transparent
              "
              style={{
                animation:
                  "heroGradient 5s ease infinite",
              }}
            >
              Code, AI &
              <br />
              Creativity.
            </span>
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.7,
            }}
            className="
              mt-7 max-w-[620px]
              text-sm leading-6
              sm:text-base sm:leading-7
            "
            style={{
              color: "var(--theme-text-muted)",
            }}
          >
            I'm a 2nd-year Electrical and Computer
            Engineering (ELCE) student passionate about
            Web Development, Artificial Intelligence,
            and Problem Solving. I enjoy learning new
            technologies and turning ideas into
            real-world projects.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.7,
            }}
            className="
              mt-8 flex flex-wrap
              items-center gap-3
            "
          >
            {/* View Work */}

            <motion.a
              href="#work"
              whileHover={{
                y: -3,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                inline-flex items-center
                gap-2 rounded-xl
                px-6 py-3.5
                text-sm font-bold
              "
              style={{
                color: "#ffffff",
                background:
                  "linear-gradient(135deg, var(--theme-secondary), var(--theme-primary))",
                boxShadow:
                  "0 10px 35px var(--theme-glow)",
              }}
            >
              View My Work
              <ArrowUpRight size={17} />
            </motion.a>

            {/* Resume */}

            <motion.a
              href="/resume.pdf"
              download
              whileHover={{
                y: -3,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                inline-flex items-center
                gap-2 rounded-xl
                border px-6 py-3.5
                text-sm font-semibold
              "
              style={{
                color: "var(--theme-text)",
                background:
                  "var(--theme-surface)",
                borderColor:
                  "var(--theme-border-strong)",
              }}
            >
              <Download size={17} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Icons */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.6,
            }}
            className="mt-7 flex items-center gap-3"
          >
            {/* GitHub */}

            <motion.a
              href="https://github.com/Sparsshsoni15"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              whileHover={{
                y: -3,
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-xl border
              "
              style={{
                color: "var(--theme-text-secondary)",
                background:
                  "var(--theme-surface)",
                borderColor:
                  "var(--theme-border)",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.35-3.87-1.35-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.75.11 3.04.73.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.38-5.25 5.67.41.35.78 1.04.78 2.1v3.11c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
            </motion.a>

            {/* LinkedIn */}

            <motion.a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              whileHover={{
                y: -3,
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-xl border
              "
              style={{
                color: "var(--theme-text-secondary)",
                background:
                  "var(--theme-surface)",
                borderColor:
                  "var(--theme-border)",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.68H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.48v6.27ZM5.32 7.41a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.54 20.45H7.1V8.98H3.54v11.47ZM22.23 0H1.77C.79 0 0 .78 0 1.74v20.52C0 23.22.79 24 1.77 24h20.46C23.21 24 24 23.22 24 22.26V1.74C24 .78 23.21 0 22.23 0Z" />
              </svg>
            </motion.a>

            {/* Email */}

            <motion.a
              href="mailto:sparsshsoni15@gmail.com"
              aria-label="Email"
              whileHover={{
                y: -3,
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-xl border
              "
              style={{
                color: "var(--theme-text-secondary)",
                background:
                  "var(--theme-surface)",
                borderColor:
                  "var(--theme-border)",
              }}
            >
              <Mail size={18} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* =========================
            RIGHT CODE CARD
        ========================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: 45,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            delay: 0.2,
            duration: 0.9,
            ease: "easeOut",
          }}
          className="
            relative mx-auto
            w-full max-w-[680px]
          "
        >
          {/* Outer Glow */}

          <motion.div
            animate={{
              opacity: [0.08, 0.15, 0.08],
              scale: [0.98, 1.03, 0.98],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute -inset-10
              rounded-[3rem]
              blur-3xl
            "
            style={{
              background:
                "var(--theme-primary)",
            }}
          />

          {/* Status Badge */}

          <motion.div
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.9,
              duration: 0.6,
            }}
            className="
              absolute -right-1 -top-8
              z-20 rounded-2xl
              border px-5 py-3
              backdrop-blur-xl
              sm:-right-4
            "
            style={{
              color: "var(--theme-text)",
              background:
                "color-mix(in srgb, var(--theme-surface) 90%, transparent)",
              borderColor:
                "var(--theme-border-strong)",
              boxShadow:
                "0 15px 45px var(--theme-glow)",
            }}
          >
            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.12em]
              "
              style={{
                color:
                  "var(--theme-text-muted)",
              }}
            >
              Currently
            </p>

            <p
              className="mt-1 text-xs font-bold sm:text-sm"
              style={{
                color:
                  "var(--theme-text)",
              }}
            >
              Building & Learning
            </p>
          </motion.div>

          {/* =========================
              CODE WINDOW
          ========================= */}

          <motion.div
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            style={{
              rotateX: smoothRotateX,
              rotateY: smoothRotateY,
              transformPerspective: 1200,
              background:
                "color-mix(in srgb, var(--theme-bg-secondary) 92%, var(--theme-surface) 8%)",
              borderColor:
                "var(--theme-border-strong)",
              boxShadow:
                "0 25px 70px rgba(0,0,0,0.22), 0 0 50px var(--theme-glow)",
            }}
            className="
              group relative
              overflow-hidden
              rounded-[1.35rem]
              border
              will-change-transform
            "
          >
            {/* =====================================
                CURSOR FOLLOWING GLOW
            ====================================== */}

            <motion.div
              className="
                pointer-events-none
                absolute
                z-0
                h-64
                w-64
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                blur-3xl
                opacity-0
                transition-opacity
                duration-300
                group-hover:opacity-25
              "
              style={{
                left: smoothGlowX,
                top: smoothGlowY,
                background:
                  "var(--theme-primary)",
              }}
            />

            {/* Subtle Inner Glow */}

            <div
              className="
                pointer-events-none
                absolute inset-0
                z-0
                rounded-[1.35rem]
                opacity-40
              "
              style={{
                background:
                  "radial-gradient(circle at 50% 0%, var(--theme-glow), transparent 55%)",
              }}
            />

            {/* Header */}

            <div
              className="
                relative z-10
                flex items-center
                justify-between
                border-b px-5 py-4
              "
              style={{
                borderColor:
                  "var(--theme-border)",
                background:
                  "color-mix(in srgb, var(--theme-surface) 70%, transparent)",
              }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{
                    background: "#ff5f57",
                  }}
                />

                <span
                  className="h-3 w-3 rounded-full"
                  style={{
                    background: "#febc2e",
                  }}
                />

                <span
                  className="h-3 w-3 rounded-full"
                  style={{
                    background: "#28c840",
                  }}
                />
              </div>

              <span
                className="
                  font-mono text-[10px]
                  font-semibold
                  tracking-[0.08em]
                  sm:text-xs
                "
                style={{
                  color:
                    "var(--theme-text-muted)",
                }}
              >
                sparsh.tsx
              </span>

              <span
                className="text-[10px]"
                style={{
                  color:
                    "var(--theme-primary)",
                }}
              >
                ●
              </span>
            </div>

            {/* Code */}

            <div
              className="
                relative z-10
                min-h-[390px]
                overflow-hidden
                px-5 py-7
                font-mono text-[11px]
                leading-[2.05]
                sm:px-7
                sm:text-[13px]
                md:text-[14px]
              "
            >
              <div>
                <span
                  style={{
                    color:
                      "var(--theme-primary)",
                  }}
                >
                  const
                </span>{" "}

                <span
                  style={{
                    color:
                      "var(--theme-secondary)",
                  }}
                >
                  sparsh
                </span>{" "}

                <span
                  style={{
                    color:
                      "var(--theme-text-muted)",
                  }}
                >
                  =
                </span>{" "}

                <span
                  style={{
                    color:
                      "var(--theme-text)",
                  }}
                >
                  {"{"}
                </span>
              </div>

              <div className="pl-5 sm:pl-6">
                <span
                  style={{
                    color:
                      "var(--theme-secondary)",
                  }}
                >
                  role
                </span>

                <span
                  style={{
                    color:
                      "var(--theme-text-muted)",
                  }}
                >
                  :
                </span>{" "}

                <span
                  style={{
                    color:
                      "var(--theme-primary)",
                  }}
                >
                  "Engineering Student"
                </span>
                ,
              </div>

              <div className="pl-5 sm:pl-6">
                <span
                  style={{
                    color:
                      "var(--theme-secondary)",
                  }}
                >
                  year
                </span>

                <span
                  style={{
                    color:
                      "var(--theme-text-muted)",
                  }}
                >
                  :
                </span>{" "}

                <span
                  style={{
                    color:
                      "var(--theme-primary)",
                  }}
                >
                  "2nd Year"
                </span>
                ,
              </div>

              <div className="pl-5 sm:pl-6">
                <span
                  style={{
                    color:
                      "var(--theme-secondary)",
                  }}
                >
                  branch
                </span>

                <span
                  style={{
                    color:
                      "var(--theme-text-muted)",
                  }}
                >
                  :
                </span>{" "}

                <span
                  style={{
                    color:
                      "var(--theme-primary)",
                  }}
                >
                  "ELCE"
                </span>
                ,
              </div>

              <div className="pl-5 sm:pl-6">
                <span
                  style={{
                    color:
                      "var(--theme-secondary)",
                  }}
                >
                  passions
                </span>

                <span
                  style={{
                    color:
                      "var(--theme-text-muted)",
                  }}
                >
                  : [
                </span>
              </div>

              <div className="pl-10 sm:pl-12">
                <span
                  style={{
                    color:
                      "var(--theme-primary)",
                  }}
                >
                  "Web Development"
                </span>
                ,
              </div>

              <div className="pl-10 sm:pl-12">
                <span
                  style={{
                    color:
                      "var(--theme-primary)",
                  }}
                >
                  "Artificial Intelligence"
                </span>
                ,
              </div>

              <div className="pl-10 sm:pl-12">
                <span
                  style={{
                    color:
                      "var(--theme-primary)",
                  }}
                >
                  "Problem Solving"
                </span>
                ,
              </div>

              <div className="pl-5 sm:pl-6">
                <span
                  style={{
                    color:
                      "var(--theme-text-muted)",
                  }}
                >
                  ],
                </span>
              </div>

              <div className="pl-5 sm:pl-6">
                <span
                  style={{
                    color:
                      "var(--theme-secondary)",
                  }}
                >
                  currently
                </span>

                <span
                  style={{
                    color:
                      "var(--theme-text-muted)",
                  }}
                >
                  :
                </span>{" "}

                <span
                  style={{
                    color:
                      "var(--theme-primary)",
                  }}
                >
                  "Learning React & DSA"
                </span>
                ,
              </div>

              <div className="pl-5 sm:pl-6">
                <span
                  style={{
                    color:
                      "var(--theme-secondary)",
                  }}
                >
                  status
                </span>

                <span
                  style={{
                    color:
                      "var(--theme-text-muted)",
                  }}
                >
                  :
                </span>{" "}

                <span
                  style={{
                    color:
                      "var(--theme-primary)",
                  }}
                >
                  "Open to collaborate"
                </span>
                ,
              </div>

              <div
                style={{
                  color:
                    "var(--theme-text)",
                }}
              >
                {"};"}
              </div>

              <div className="h-5" />

              <div>
                <span
                  style={{
                    color:
                      "var(--theme-primary)",
                  }}
                >
                  return
                </span>{" "}

                <span
                  style={{
                    color:
                      "var(--theme-secondary)",
                  }}
                >
                  &lt;Future
                </span>{" "}

                <span
                  style={{
                    color:
                      "var(--theme-text)",
                  }}
                >
                  dreams=
                </span>

                <span
                  style={{
                    color:
                      "var(--theme-primary)",
                  }}
                >
                  {"{sparsh}"}
                </span>{" "}

                <span
                  style={{
                    color:
                      "var(--theme-secondary)",
                  }}
                >
                  /&gt;
                </span>
              </div>

              {/* Blinking Cursor */}

              <motion.span
                animate={{
                  opacity: [1, 0, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  ml-1 inline-block
                  h-4 w-[2px]
                  align-middle
                "
                style={{
                  background:
                    "var(--theme-primary)",
                }}
              />
            </div>

            {/* Footer */}

            <div
              className="
                relative z-10
                flex items-center
                justify-between
                border-t px-5 py-3.5
                sm:px-7
              "
              style={{
                borderColor:
                  "var(--theme-border)",
                background:
                  "color-mix(in srgb, var(--theme-surface) 60%, transparent)",
              }}
            >
              <div className="flex items-center gap-2">
                <motion.span
                  animate={{
                    scale: [1, 1.25, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="h-2 w-2 rounded-full"
                  style={{
                    background:
                      "var(--theme-primary)",
                    boxShadow:
                      "0 0 12px var(--theme-primary)",
                  }}
                />

                <span
                  className="
                    font-mono text-[10px]
                    sm:text-xs
                  "
                  style={{
                    color:
                      "var(--theme-text-muted)",
                  }}
                >
                  always_learning.exe
                </span>
              </div>

              <span
                className="font-mono text-[10px] sm:text-xs"
                style={{
                  color:
                    "var(--theme-text-subtle)",
                }}
              >
                100%
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}

      <motion.a
        href="#about"
        animate={{
          y: [0, 7, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute bottom-7
          left-1/2
          hidden -translate-x-1/2
          items-center gap-2
          text-[10px]
          font-semibold
          uppercase
          tracking-[0.18em]
          md:flex
        "
        style={{
          color:
            "var(--theme-text-subtle)",
        }}
      >
        <span
          className="
            flex h-8 w-5
            items-start
            justify-center
            rounded-full
            border pt-1.5
          "
          style={{
            borderColor:
              "var(--theme-border-strong)",
          }}
        >
          <span
            className="h-1.5 w-1 rounded-full"
            style={{
              background:
                "var(--theme-primary)",
            }}
          />
        </span>

        Scroll
      </motion.a>

      <style>{`
        @keyframes heroGradient {
          0% {
            background-position: 0% 50%;
          }

          50% {
            background-position: 100% 50%;
          }

          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;