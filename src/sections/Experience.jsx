import {
  BriefcaseBusiness,
  GraduationCap,
  Sparkles,
  Trophy,
  Users,
  BrainCircuit,
  Code2,
} from "lucide-react";

import { motion, useScroll, useSpring } from "motion/react";
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
    offset: ["start 75%", "end 25%"],
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
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
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

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Base timeline line */}
          <div
            className="
              absolute
              left-[15px]
              top-2
              hidden
              h-[calc(100%-8px)]
              w-px
              bg-[var(--theme-border-strong)]
              md:block
            "
          />

          {/* Animated timeline progress */}
          <motion.div
            style={{ scaleY: smoothProgress }}
            initial={{ scaleY: 0 }}
            className="
              absolute
              left-[14px]
              top-2
              hidden
              h-[calc(100%-8px)]
              w-[3px]
              origin-top
              rounded-full
              bg-gradient-to-b
              from-[var(--theme-primary)]
              to-[var(--theme-secondary)]
              shadow-[0_0_14px_var(--theme-glow)]
              md:block
            "
          />

          <div className="space-y-8">
            {journey.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={`${item.title}-${index}`}
                  initial={{
                    opacity: 0,
                    x: -30,
                    y: 12,
                    scale: 0.97,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative md:pl-12"
                >
                  {/* Timeline Icon */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.5,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.5,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.07 + 0.1,
                      type: "spring",
                      stiffness: 220,
                      damping: 16,
                    }}
                    className="
                      absolute
                      left-0
                      top-6
                      hidden
                      h-8
                      w-8
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
                      group-hover:scale-110
                      group-hover:shadow-[0_0_18px_var(--theme-glow)]
                      md:flex
                    "
                  >
                    <Icon size={14} />

                    {/* Current pulse */}
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
                          scale: [1, 1.65, 1],
                          opacity: [0.55, 0, 0.55],
                        }}
                        transition={{
                          duration: 2.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    )}
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    whileHover={{
                      y: -5,
                      scale: 1.008,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 280,
                      damping: 22,
                    }}
                    className="
                      glass-card
                      relative
                      overflow-hidden
                      rounded-3xl
                      p-7
                      md:p-9
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

                    {/* Subtle inner border */}
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

                    <div className="relative grid gap-6 md:grid-cols-[150px_1fr]">
                      {/* Date */}
                      <div>
                        <motion.p
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.07 + 0.15,
                          }}
                          className="theme-primary font-mono text-xs font-semibold uppercase tracking-[0.18em]"
                        >
                          {item.year}
                        </motion.p>

                        {item.current && (
                          <motion.span
                            initial={{
                              opacity: 0,
                              scale: 0.85,
                            }}
                            whileInView={{
                              opacity: 1,
                              scale: 1,
                            }}
                            viewport={{
                              once: true,
                              amount: 0.5,
                            }}
                            transition={{
                              duration: 0.45,
                              delay: index * 0.07 + 0.25,
                            }}
                            className="
                              mt-3
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
                          </motion.span>
                        )}
                      </div>

                      {/* Content */}
                      <div>
                        <div className="mb-3 flex items-center gap-3">
                          {/* Mobile icon */}
                          <motion.div
                            whileHover={{
                              rotate: 5,
                              scale: 1.08,
                            }}
                            className="
                              flex
                              h-9
                              w-9
                              items-center
                              justify-center
                              rounded-xl
                              border
                              border-[var(--theme-border)]
                              bg-[var(--theme-glow)]
                              text-[var(--theme-primary)]
                              md:hidden
                            "
                          >
                            <Icon size={16} />
                          </motion.div>

                          <p className="theme-muted font-mono text-[10px] uppercase tracking-[0.2em]">
                            {item.type}
                          </p>
                        </div>

                        <h3
                          className="
                            theme-text
                            text-xl
                            font-bold
                            tracking-tight
                            transition-colors
                            duration-300
                            group-hover:text-[var(--theme-primary)]
                            md:text-2xl
                          "
                        >
                          {item.title}
                        </h3>

                        <p className="theme-primary mt-1 text-sm font-medium">
                          {item.organization}
                        </p>

                        <p className="theme-secondary-text mt-4 max-w-2xl text-sm leading-7 opacity-100">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;