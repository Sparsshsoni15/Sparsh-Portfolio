import {
  ArrowUpRight,
  Code2,
  Trophy,
  Users,
} from "lucide-react";

import { motion } from "motion/react";

const hackathons = [
  {
    number: "01",
    title: "ABTalks 48-Hour Hackathon",
    type: "48-Hour Hackathon",
    description:
      "Participated in a live hackathon focused on redesigning and building a coding challenge platform with a modern developer experience.",
    tags: ["React", "Tailwind CSS", "Vite"],
    icon: Code2,
  },
  {
    number: "02",
    title: "Technical Hackathons",
    type: "Competitive Building",
    description:
      "Exploring problem-solving, product thinking and rapid development through hackathons and technical competitions.",
    tags: ["Problem Solving", "Development", "Teamwork"],
    icon: Trophy,
  },
  {
    number: "03",
    title: "Collaborative Tech Events",
    type: "Community",
    description:
      "Taking part in developer communities and technical activities to learn from others, collaborate and build better solutions.",
    tags: ["Collaboration", "Learning", "Community"],
    icon: Users,
  },
];

function Hackathons() {
  return (
    <section
      id="hackathons"
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
            Hackathons
          </div>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="theme-text max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Building under{" "}
              <span className="bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-secondary)] bg-clip-text text-transparent">
                pressure.
              </span>
            </h2>

            <p className="theme-secondary-text max-w-sm text-sm leading-7 opacity-100 md:text-base">
              Hackathons push me to think fast, collaborate better and turn
              ideas into working products.
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {hackathons.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                className="glass-card group relative overflow-hidden rounded-3xl p-7 md:p-8"
              >
                {/* Background glow */}
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
                    transition-all
                    duration-700
                    group-hover:opacity-10
                  "
                />

                <div className="relative">

                  {/* Top */}
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-glow)] text-[var(--theme-primary)] transition-transform duration-300 group-hover:-translate-y-1">
                      <Icon size={20} />
                    </div>

                    <span className="theme-subtle font-mono text-xs">
                      /{item.number}
                    </span>
                  </div>

                  {/* Type */}
                  <p className="theme-primary mt-8 font-mono text-[10px] uppercase tracking-[0.2em]">
                    {item.type}
                  </p>

                  {/* Title */}
                  <h3 className="theme-text mt-3 text-xl font-bold leading-tight transition-colors duration-300 group-hover:text-[var(--theme-primary)]">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="theme-secondary-text mt-4 text-sm leading-7 opacity-100">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          rounded-full
                          border
                          border-[var(--theme-border)]
                          bg-[var(--theme-glow)]
                          px-3
                          py-1.5
                          font-mono
                          text-[9px]
                          uppercase
                          tracking-[0.12em]
                          text-[var(--theme-text-secondary)]
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom */}
                  <div className="mt-8 flex items-center justify-between border-t border-[var(--theme-border)] pt-5">
                    <span className="theme-muted text-xs">
                      Learn • Build • Ship
                    </span>

                    <ArrowUpRight
                      size={16}
                      className="theme-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Hackathons;