import {
  ArrowUpRight,
  Award,
  ExternalLink,
  ShieldCheck,
  Trophy,
} from "lucide-react";

import { motion } from "motion/react";

// --------------------------------------------------
// TEMPORARY DATA
// Replace these with your real certificates later.
// --------------------------------------------------

const achievements = [
  {
    type: "Certification",
    title: "JavaScript Algorithms & Data Structures",
    issuer: "Certification Platform",
    date: "August 2026",
    description:
      "Successfully completed a certification focused on JavaScript programming, algorithms and data structures.",
    verified: true,
    link: "#",
  },
  {
    type: "Achievement",
    title: "48-Hour Hackathon Participant",
    issuer: "ABTalks",
    date: "2026",
    description:
      "Participated in a live 48-hour hackathon focused on redesigning and building a coding challenge platform.",
    verified: true,
    link: "#",
  },
  {
    type: "Certification",
    title: "Frontend Development",
    issuer: "Certification Platform",
    date: "2026",
    description:
      "Completed a frontend development learning program covering modern web technologies and development practices.",
    verified: true,
    link: "#",
  },
  {
    type: "Achievement",
    title: "Hackathon & Technical Events",
    issuer: "Various Events",
    date: "2026",
    description:
      "Actively participated in technical competitions, hackathons and developer-focused events.",
    verified: true,
    link: "#",
  },
];

function Achievements() {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden px-6 py-32 lg:px-10 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">

        {/* ----------------------------------------
            SECTION HEADING
        ----------------------------------------- */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="theme-primary mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.3em]">
            <span className="h-px w-10 bg-[var(--theme-primary)]" />
            04 / Achievements
          </div>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="theme-text max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Milestones I've{" "}
              <span className="bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-secondary)] bg-clip-text text-transparent">
                earned.
              </span>
            </h2>

            <p className="theme-muted max-w-sm text-sm leading-7">
              Certifications, achievements and milestones that reflect my
              journey of learning, building and growing.
            </p>
          </div>
        </motion.div>

        {/* ----------------------------------------
            ACHIEVEMENT GRID
        ----------------------------------------- */}

        <div className="grid gap-6 md:grid-cols-2">
          {achievements.map((item, index) => {
            const isCertification = item.type === "Certification";

            return (
              <motion.article
                key={`${item.title}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                className="
                  theme-border
                  theme-surface
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  p-7
                  backdrop-blur-sm
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[color-mix(in_srgb,var(--theme-primary)_35%,transparent)]
                  hover:bg-[var(--theme-surface-hover)]
                  md:p-8
                "
              >
                {/* Glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-24
                    -top-24
                    h-64
                    w-64
                    rounded-full
                    bg-[var(--theme-primary)]
                    opacity-0
                    blur-3xl
                    transition-opacity
                    duration-700
                    group-hover:opacity-10
                  "
                />

                <div className="relative">

                  {/* Top row */}

                  <div className="mb-8 flex items-start justify-between gap-4">
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-[color-mix(in_srgb,var(--theme-primary)_25%,transparent)]
                        bg-[var(--theme-glow)]
                      "
                    >
                      {isCertification ? (
                        <Award
                          size={21}
                          className="theme-primary"
                        />
                      ) : (
                        <Trophy
                          size={21}
                          className="theme-primary"
                        />
                      )}
                    </div>

                    {/* Verified badge */}

                    {item.verified && (
                      <div
                        className="
                          flex
                          items-center
                          gap-1.5
                          rounded-full
                          border
                          border-emerald-400/20
                          bg-emerald-400/10
                          px-3
                          py-1.5
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.15em]
                          text-emerald-400
                        "
                      >
                        <ShieldCheck size={13} />
                        Verified
                      </div>
                    )}
                  </div>

                  {/* Type */}

                  <div className="mb-3">
                    <span className="theme-primary font-mono text-[10px] uppercase tracking-[0.2em]">
                      {item.type}
                    </span>
                  </div>

                  {/* Title */}

                  <h3
                    className="
                      theme-text
                      text-2xl
                      font-bold
                      tracking-tight
                      transition-colors
                      duration-300
                      group-hover:text-[var(--theme-primary)]
                    "
                  >
                    {item.title}
                  </h3>

                  {/* Issuer + date */}

                  <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                    <span className="theme-secondary-text font-medium">
                      {item.issuer}
                    </span>

                    <span className="theme-subtle">•</span>

                    <span className="theme-muted">
                      {item.date}
                    </span>
                  </div>

                  {/* Description */}

                  <p className="theme-muted mt-5 text-sm leading-7">
                    {item.description}
                  </p>

                  {/* Bottom action */}

                  <div className="mt-7 flex items-center justify-between gap-4">

                    <span className="theme-subtle font-mono text-[10px] uppercase tracking-[0.18em]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        theme-text
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-[color-mix(in_srgb,var(--theme-primary)_20%,transparent)]
                        bg-[var(--theme-glow)]
                        px-5
                        py-2.5
                        text-sm
                        font-semibold
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-[var(--theme-primary)]
                        hover:bg-[var(--theme-surface-hover)]
                      "
                    >
                      <ExternalLink size={15} />

                      View Certificate

                      <ArrowUpRight
                        size={15}
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-0.5
                          group-hover:-translate-y-0.5
                        "
                      />
                    </a>
                  </div>
                </div>

                {/* Bottom accent line */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-px
                    w-0
                    bg-gradient-to-r
                    from-[var(--theme-primary)]
                    to-[var(--theme-secondary)]
                    transition-all
                    duration-700
                    group-hover:w-full
                  "
                />
              </motion.article>
            );
          })}
        </div>

        {/* ----------------------------------------
            BOTTOM STATEMENT
        ----------------------------------------- */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="theme-border mt-16 border-t pt-8"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="theme-subtle font-mono text-xs uppercase tracking-[0.2em]">
              <span className="theme-primary">✓</span>{" "}
              Continuous growth
            </p>

            <p className="theme-muted text-sm">
              Every milestone is another step forward.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Achievements;