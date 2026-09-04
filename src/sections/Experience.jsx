import {
  BriefcaseBusiness,
  GraduationCap,
  Sparkles,
} from "lucide-react";

import { motion } from "motion/react";

const journey = [
  {
    year: "2026 — Present",
    type: "Leadership",
    title: "Unstop Campus Champion",
    organization: "Unstop",
    description:
      "Representing Unstop on campus while working around competitions, hackathons, workshops, student communities and opportunities.",
    icon: BriefcaseBusiness,
    current: true,
  },
  {
    year: "2026",
    type: "Development",
    title: "Building & Exploring",
    organization: "Personal Projects",
    description:
      "Building modern web experiences while expanding my skills across React, JavaScript, Git, AI and other developer technologies.",
    icon: Sparkles,
    current: true,
  },
  {
    year: "2025 — Present",
    type: "Education",
    title: "Engineering Student",
    organization: "ABES Engineering College",
    description:
      "Learning engineering fundamentals while developing practical skills through projects, coding, technical events and continuous experimentation.",
    icon: GraduationCap,
    current: true,
  },
];

function Experience() {
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
        <div className="relative">

          {/* Timeline line */}
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

          <div className="space-y-8">
            {journey.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                  }}
                  className="relative md:pl-12"
                >
                  {/* Timeline icon */}
                  <div
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
                      md:flex
                    "
                  >
                    <Icon size={14} />
                  </div>

                  <div className="glass-card group relative overflow-hidden rounded-3xl p-7 md:p-9">
                    {/* Glow */}
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

                    <div className="relative grid gap-6 md:grid-cols-[150px_1fr]">

                      {/* Date */}
                      <div>
                        <p className="theme-primary font-mono text-xs font-semibold uppercase tracking-[0.18em]">
                          {item.year}
                        </p>

                        {item.current && (
                          <span
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
                            <span className="h-1.5 w-1.5 rounded-full bg-[var(--theme-primary)]" />
                            Current
                          </span>
                        )}
                      </div>

                      {/* Content */}
                      <div>
                        <div className="mb-3 flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--theme-border)] bg-[var(--theme-glow)] text-[var(--theme-primary)] md:hidden">
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

                        <p className="theme-secondary-text mt-4 max-w-2xl text-sm leading-7 opacity-100">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
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