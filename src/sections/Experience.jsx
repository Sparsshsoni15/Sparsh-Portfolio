import {
  BriefcaseBusiness,
  GraduationCap,
  Sparkles,
  Trophy,
  Users,
  BrainCircuit,
  Code2,
  ArrowDown,
  Milestone,
} from "lucide-react";

import {
  motion,
  useScroll,
  useSpring,
} from "motion/react";

import { useRef } from "react";

const journey = [
  {
    year: "2025",
    type: "Education",
    title: "Engineering Journey Begins",
    organization: "ABES Engineering College",
    description:
      "Started my B.Tech journey in Electrical and Computer Engineering, building a strong foundation in engineering, programming and technology.",
    icon: GraduationCap,
    current: true,
  },
  {
    year: "2025 — 2026",
    type: "Learning",
    title: "Programming & Web Development",
    organization: "Self Learning",
    description:
      "Learned C++ and explored web development while building a strong foundation in programming. Along the way, I also started exploring the rapidly evolving field of Artificial Intelligence.",
    icon: Code2,
    current: false,
  },
  {
    year: "2026",
    type: "Development",
    title: "DSA & Advanced Web Development",
    organization: "Personal Learning",
    description:
      "Started my Data Structures and Algorithms journey while going deeper into web development, learning technologies like React, Node.js and modern development tools.",
    icon: BrainCircuit,
    current: true,
  },
  {
    year: "2026",
    type: "Hackathons",
    title: "Hackathons & Building Projects",
    organization: "ViCoDathon • Infinity Hacks • HackDevengers",
    description:
      "Started participating in hackathons and technical competitions, gaining experience in problem solving, teamwork and building solutions under time constraints. Also built ABTalks as a project.",
    icon: Trophy,
    current: false,
  },
  {
    year: "April 2026 — Present",
    type: "Community",
    title: "Joined TRISHUL",
    organization: "TRISHUL — The Defence Aspirants' Society",
    description:
      "Joined TRISHUL at ABES as a member, becoming part of a student community focused on discipline, leadership, teamwork and defence aspirations.",
    icon: Users,
    current: true,
  },
  {
    year: "June 2026 — Present",
    type: "Campus Leadership",
    title: "ABTalks Campus Ambassador",
    organization: "ABTalksOnAI",
    description:
      "Joined ABTalksOnAI as a Campus Ambassador, contributing to student outreach and promoting learning opportunities around technology and AI.",
    icon: BriefcaseBusiness,
    current: true,
  },
  {
    year: "August 2026 — Present",
    type: "Leadership",
    title: "Multiple Campus Roles",
    organization: "MyGov • Unstop • Internshala",
    description:
      "Took on multiple student leadership roles as a MyGov Campus Ambassador, Unstop Campus Champion and Internshala Student Partner, expanding my experience in community building, communication and student engagement.",
    icon: Users,
    current: true,
  },
  {
    year: "August 2026 — Present",
    type: "Internship",
    title: "Machine Learning & Applied AI Intern",
    organization: "BharatCares",
    description:
      "Currently working as a Machine Learning and Applied AI Intern through BharatCares, gaining practical exposure to machine learning and applied AI.",
    icon: Sparkles,
    current: true,
  },
];

function Experience() {
  const timelineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 72%", "end 28%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.35,
  });

  return (
    <section
      id="experience"
      className="relative overflow-hidden px-6 py-32 lg:px-10 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        {/* =========================================================
            HEADING
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="theme-primary mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.3em]">
            <span className="h-px w-10 bg-[var(--theme-primary)]" />
            Journey
          </div>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="theme-text max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Where I've{" "}
              <span className="bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-secondary)] bg-clip-text text-transparent">
                been.
              </span>
            </h2>

            <p className="theme-secondary-text max-w-sm text-sm leading-7 opacity-100 md:text-base">
              A timeline of the experiences, learning and opportunities that
              are shaping my journey as a developer.
            </p>
          </div>
        </motion.div>

        {/* =========================================================
            TIMELINE
        ========================================================= */}

        <div
          ref={timelineRef}
          className="relative mx-auto max-w-6xl"
        >
          {/* ---------------------------------------------------------
              DESKTOP BASE LINE
          --------------------------------------------------------- */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              hidden
              h-full
              w-px
              -translate-x-1/2
              bg-[var(--theme-border-strong)]
              md:block
            "
          />

          {/* ---------------------------------------------------------
              DESKTOP ANIMATED PROGRESS LINE
          --------------------------------------------------------- */}

          <motion.div
            style={{ scaleY: smoothProgress }}
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              hidden
              h-full
              w-[3px]
              origin-top
              -translate-x-1/2
              rounded-full
              bg-gradient-to-b
              from-[var(--theme-primary)]
              to-[var(--theme-secondary)]
              shadow-[0_0_16px_var(--theme-glow)]
              md:block
            "
          />

          {/* ---------------------------------------------------------
              MOBILE BASE LINE
          --------------------------------------------------------- */}

          <div
            className="
              pointer-events-none
              absolute
              left-[15px]
              top-0
              block
              h-[calc(100%-100px)]
              w-px
              bg-[var(--theme-border-strong)]
              md:hidden
            "
          />

          {/* ---------------------------------------------------------
              MOBILE ANIMATED LINE
          --------------------------------------------------------- */}

          <motion.div
            style={{ scaleY: smoothProgress }}
            className="
              pointer-events-none
              absolute
              left-[14px]
              top-0
              block
              h-[calc(100%-100px)]
              w-[3px]
              origin-top
              rounded-full
              bg-gradient-to-b
              from-[var(--theme-primary)]
              to-[var(--theme-secondary)]
              shadow-[0_0_14px_var(--theme-glow)]
              md:hidden
            "
          />

          {/* =========================================================
              JOURNEY ITEMS
          ========================================================= */}

          <div className="space-y-16 md:space-y-24">
            {journey.map((item, index) => {
              const Icon = item.icon;
              const isRight = index % 2 === 0;

              return (
                <motion.article
                  key={`${item.title}-${index}`}
                  initial={{
                    opacity: 0,
                    x: isRight ? 45 : -45,
                    y: 20,
                    scale: 0.96,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.75,
                    delay: 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative md:grid md:grid-cols-2"
                >
                  {/* =================================================
                      DESKTOP CENTER NODE
                  ================================================= */}

                  <div
                    className="
                      absolute
                      left-1/2
                      top-8
                      z-30
                      hidden
                      -translate-x-1/2
                      md:block
                    "
                  >
                    <motion.div
                      initial={{
                        scale: 0,
                        opacity: 0,
                      }}
                      whileInView={{
                        scale: 1,
                        opacity: 1,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.5,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 240,
                        damping: 18,
                        delay: 0.15,
                      }}
                      className="
                        relative
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[var(--theme-primary)]
                        bg-[var(--theme-bg)]
                        text-[var(--theme-primary)]
                        shadow-[0_0_0_rgba(0,0,0,0)]
                        transition-all
                        duration-500
                        group-hover:shadow-[0_0_20px_var(--theme-glow)]
                      "
                    >
                      {/* =================================================
                          MILESTONE PARTICLE BURST
                      ================================================= */}

                      <motion.div
                        aria-hidden="true"
                        className="pointer-events-none absolute left-1/2 top-1/2 z-50 h-0 w-0"
                        initial="hidden"
                        whileInView="show"
                        viewport={{
                          once: true,
                          amount: 0.5,
                        }}
                      >
                        {[...Array(10)].map((_, particleIndex) => {
                          const angle =
                            (particleIndex / 10) * Math.PI * 2;

                          const distance = 42;

                          return (
                            <motion.span
                              key={particleIndex}
                              className="
                                absolute
                                left-1/2
                                top-1/2
                                h-1
                                w-1
                                -translate-x-1/2
                                -translate-y-1/2
                                rounded-full
                                bg-[var(--theme-primary)]
                                shadow-[0_0_8px_var(--theme-primary)]
                              "
                              variants={{
                                hidden: {
                                  x: 0,
                                  y: 0,
                                  opacity: 0,
                                  scale: 0,
                                },

                                show: {
                                  x: Math.cos(angle) * distance,
                                  y: Math.sin(angle) * distance,
                                  opacity: [0, 1, 0],
                                  scale: [0, 1.5, 0],
                                  transition: {
                                    duration: 0.8,
                                    delay:
                                      0.25 +
                                      particleIndex * 0.035,
                                    ease: "easeOut",
                                  },
                                },
                              }}
                            />
                          );
                        })}
                      </motion.div>

                      <Icon size={16} />

                      {item.current && (
                        <motion.span
                          aria-hidden="true"
                          className="
                            pointer-events-none
                            absolute
                            inset-0
                            rounded-full
                            border
                            border-[var(--theme-primary)]
                          "
                          animate={{
                            scale: [1, 1.6, 1],
                            opacity: [0.5, 0, 0.5],
                          }}
                          transition={{
                            duration: 2.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      )}
                    </motion.div>
                  </div>

                  {/* =================================================
                      CONNECTING HORIZONTAL LINE
                  ================================================= */}

                  <motion.div
                    initial={{
                      scaleX: 0,
                      opacity: 0,
                    }}
                    whileInView={{
                      scaleX: 1,
                      opacity: 1,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.15,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.25,
                      ease: "easeOut",
                    }}
                    className={
                      isRight
                        ? `
                          pointer-events-none
                          absolute
                          left-1/2
                          top-[47px]
                          hidden
                          h-px
                          w-[calc(50%_-_20px)]
                          origin-left
                          bg-gradient-to-r
                          from-[var(--theme-primary)]
                          to-[var(--theme-border-strong)]
                          md:block
                        `
                        : `
                          pointer-events-none
                          absolute
                          right-1/2
                          top-[47px]
                          hidden
                          h-px
                          w-[calc(50%_-_20px)]
                          origin-right
                          bg-gradient-to-l
                          from-[var(--theme-primary)]
                          to-[var(--theme-border-strong)]
                          md:block
                        `
                    }
                  />

                  {/* =================================================
                      LEFT CARD
                  ================================================= */}

                  {!isRight && (
                    <>
                      <div className="hidden pr-14 md:block">
                        <motion.div
                          whileHover={{
                            y: -7,
                            scale: 1.012,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 280,
                            damping: 22,
                          }}
                          className="
                            glass-card
                            group
                            relative
                            overflow-hidden
                            rounded-3xl
                            p-7
                            md:p-8
                          "
                        >
                          {/* Hover Glow */}

                          <div
                            className="
                              pointer-events-none
                              absolute
                              -left-24
                              -top-24
                              h-56
                              w-56
                              rounded-full
                              bg-[var(--theme-primary)]
                              opacity-0
                              blur-3xl
                              transition-opacity
                              duration-700
                              group-hover:opacity-10
                            "
                          />

                          {/* Inner Border */}

                          <div
                            className="
                              pointer-events-none
                              absolute
                              inset-0
                              rounded-3xl
                              border
                              border-transparent
                              transition-colors
                              duration-500
                              group-hover:border-[var(--theme-border-strong)]
                            "
                          />

                          <div className="relative">
                            <div className="mb-4 flex items-center gap-3">
                              <p className="theme-primary font-mono text-xs font-semibold uppercase tracking-[0.18em]">
                                {item.year}
                              </p>

                              {item.current && (
                                <CurrentBadge />
                              )}
                            </div>

                            <div className="mb-3 flex items-center gap-3">
                              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--theme-border)] bg-[var(--theme-glow)] text-[var(--theme-primary)]">
                                <Icon size={16} />
                              </div>

                              <p className="theme-muted font-mono text-[10px] uppercase tracking-[0.2em]">
                                {item.type}
                              </p>
                            </div>

                            <h3 className="theme-text text-xl font-bold tracking-tight transition-colors duration-300 group-hover:text-[var(--theme-primary)] md:text-2xl">
                              {item.title}
                            </h3>

                            <p className="theme-primary mt-1 text-sm font-medium">
                              {item.organization}
                            </p>

                            <p className="theme-secondary-text mt-4 text-sm leading-7 opacity-100">
                              {item.description}
                            </p>
                          </div>
                        </motion.div>
                      </div>

                      {/* Empty right side */}

                      <div className="hidden md:block" />
                    </>
                  )}

                  {/* =================================================
                      RIGHT CARD
                  ================================================= */}

                  {isRight && (
                    <>
                      {/* Empty left side */}

                      <div className="hidden md:block" />

                      <div className="hidden pl-14 md:block">
                        <motion.div
                          whileHover={{
                            y: -7,
                            scale: 1.012,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 280,
                            damping: 22,
                          }}
                          className="
                            glass-card
                            group
                            relative
                            overflow-hidden
                            rounded-3xl
                            p-7
                            md:p-8
                          "
                        >
                          {/* Hover Glow */}

                          <div
                            className="
                              pointer-events-none
                              absolute
                              -right-24
                              -top-24
                              h-56
                              w-56
                              rounded-full
                              bg-[var(--theme-primary)]
                              opacity-0
                              blur-3xl
                              transition-opacity
                              duration-700
                              group-hover:opacity-10
                            "
                          />

                          {/* Inner Border */}

                          <div
                            className="
                              pointer-events-none
                              absolute
                              inset-0
                              rounded-3xl
                              border
                              border-transparent
                              transition-colors
                              duration-500
                              group-hover:border-[var(--theme-border-strong)]
                            "
                          />

                          <div className="relative">
                            <div className="mb-4 flex items-center gap-3">
                              <p className="theme-primary font-mono text-xs font-semibold uppercase tracking-[0.18em]">
                                {item.year}
                              </p>

                              {item.current && (
                                <CurrentBadge />
                              )}
                            </div>

                            <div className="mb-3 flex items-center gap-3">
                              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--theme-border)] bg-[var(--theme-glow)] text-[var(--theme-primary)]">
                                <Icon size={16} />
                              </div>

                              <p className="theme-muted font-mono text-[10px] uppercase tracking-[0.2em]">
                                {item.type}
                              </p>
                            </div>

                            <h3 className="theme-text text-xl font-bold tracking-tight transition-colors duration-300 group-hover:text-[var(--theme-primary)] md:text-2xl">
                              {item.title}
                            </h3>

                            <p className="theme-primary mt-1 text-sm font-medium">
                              {item.organization}
                            </p>

                            <p className="theme-secondary-text mt-4 text-sm leading-7 opacity-100">
                              {item.description}
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    </>
                  )}

                  {/* =================================================
                      MOBILE CARD
                  ================================================= */}

                  <div className="relative pl-12 md:hidden">
                    <motion.div
                      whileTap={{
                        scale: 0.995,
                      }}
                      className="
                        glass-card
                        group
                        relative
                        overflow-hidden
                        rounded-3xl
                        p-6
                      "
                    >
                      {/* Mobile Hover Glow */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          -right-20
                          -top-20
                          h-48
                          w-48
                          rounded-full
                          bg-[var(--theme-primary)]
                          opacity-0
                          blur-3xl
                          transition-opacity
                          duration-700
                          group-active:opacity-10
                        "
                      />

                      <div className="relative">
                        <div className="mb-4 flex flex-wrap items-center gap-3">
                          <p className="theme-primary font-mono text-xs font-semibold uppercase tracking-[0.16em]">
                            {item.year}
                          </p>

                          {item.current && (
                            <CurrentBadge />
                          )}
                        </div>

                        <div className="mb-3 flex items-center gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[var(--theme-border)] bg-[var(--theme-glow)] text-[var(--theme-primary)]">
                            <Icon size={16} />
                          </div>

                          <p className="theme-muted font-mono text-[10px] uppercase tracking-[0.18em]">
                            {item.type}
                          </p>
                        </div>

                        <h3 className="theme-text text-xl font-bold tracking-tight md:text-2xl">
                          {item.title}
                        </h3>

                        <p className="theme-primary mt-1 text-sm font-medium">
                          {item.organization}
                        </p>

                        <p className="theme-secondary-text mt-4 text-sm leading-7 opacity-100">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* =========================================================
              JOURNEY ENDING
          ========================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="
              relative
              mt-20
              flex
              flex-col
              items-center
              text-center
              md:mt-28
            "
          >
            {/* Desktop endpoint */}

            <div
              className="
                absolute
                -top-8
                hidden
                h-16
                w-px
                bg-gradient-to-b
                from-[var(--theme-secondary)]
                to-transparent
                md:block
              "
            />

            {/* Animated endpoint */}

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                rotate: [0, 45, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                mt-2
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                border
                border-[var(--theme-primary)]
                bg-[var(--theme-glow)]
                text-[var(--theme-primary)]
                shadow-[0_0_22px_var(--theme-glow)]
              "
            >
              <Milestone
                size={19}
                className="-rotate-45"
              />

              <motion.span
                aria-hidden="true"
                className="
                  absolute
                  inset-[-7px]
                  rounded-xl
                  border
                  border-[var(--theme-primary)]
                "
                animate={{
                  scale: [0.85, 1.15, 0.85],
                  opacity: [0.35, 0, 0.35],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            <p className="theme-primary mt-7 font-mono text-[10px] font-semibold uppercase tracking-[0.28em]">
              Journey continues
            </p>

            <h3 className="theme-text mt-2 text-xl font-bold md:text-2xl">
              Still building. Still learning.
            </h3>

            <p className="theme-secondary-text mt-3 max-w-md text-sm leading-7 opacity-100">
              The story is still being written — one project, opportunity and
              experience at a time.
            </p>

            <motion.div
              animate={{
                y: [0, 6, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="theme-primary mt-5"
            >
              <ArrowDown size={17} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CURRENT BADGE
========================================================= */

function CurrentBadge() {
  return (
    <span
      className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-[var(--theme-border)]
        bg-[var(--theme-glow)]
        px-3
        py-1
        font-mono
        text-[9px]
        uppercase
        tracking-[0.16em]
        text-[var(--theme-primary)]
      "
    >
      <motion.span
        className="h-1.5 w-1.5 rounded-full bg-[var(--theme-primary)]"
        animate={{
          scale: [1, 1.35, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      Current
    </span>
  );
}

export default Experience;