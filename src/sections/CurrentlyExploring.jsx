import {
  BrainCircuit,
  Database,
  GitBranch,
  Layers3,
  Sparkles,
} from "lucide-react";

import { motion } from "motion/react";

const exploring = [
  {
    title: "Advanced JavaScript",
    description:
      "Going deeper into JavaScript concepts, patterns and better ways of building applications.",
    icon: Sparkles,
    progress: "Deepening",
  },
  {
    title: "React & Modern Frontend",
    description:
      "Exploring better component architecture, animations, UI systems and modern frontend practices.",
    icon: Layers3,
    progress: "Building",
  },
  {
    title: "Node.js",
    description:
      "Moving beyond frontend development and learning how backend systems and APIs work.",
    icon: Database,
    progress: "Exploring",
  },
  {
    title: "DSA",
    description:
      "Improving problem-solving skills through algorithms, data structures and regular practice.",
    icon: GitBranch,
    progress: "Practicing",
  },
  {
    title: "AI & Developer Tools",
    description:
      "Experimenting with AI-powered workflows and tools that can make development faster and smarter.",
    icon: BrainCircuit,
    progress: "Experimenting",
  },
];

function CurrentlyExploring() {
  return (
    <section
      id="exploring"
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
            Currently Exploring
          </div>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="theme-text max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Still{" "}
              <span className="bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-secondary)] bg-clip-text text-transparent">
                learning.
              </span>
            </h2>

            <p className="theme-secondary-text max-w-sm text-sm leading-7 opacity-100 md:text-base">
              Technology never stops moving. Neither does my curiosity.
            </p>
          </div>
        </motion.div>

        {/* Exploring cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {exploring.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.06,
                }}
                className="
                  glass-card
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  p-6
                  transition-transform
                  duration-300
                  hover:-translate-y-1
                "
              >
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-44
                    w-44
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

                  {/* Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--theme-border)] bg-[var(--theme-glow)] text-[var(--theme-primary)]">
                      <Icon size={19} />
                    </div>

                    <span className="rounded-full border border-[var(--theme-border)] bg-[var(--theme-glow)] px-3 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--theme-primary)]">
                      {item.progress}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="theme-text mt-6 text-lg font-bold transition-colors duration-300 group-hover:text-[var(--theme-primary)]">
                    {item.title}
                  </h3>

                  <p className="theme-secondary-text mt-3 text-sm leading-7 opacity-100">
                    {item.description}
                  </p>

                  {/* Progress line */}
                  <div className="mt-6 h-px w-full overflow-hidden bg-[var(--theme-border)]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${45 + index * 8}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: 0.2 + index * 0.08,
                      }}
                      className="h-full bg-[var(--theme-primary)]"
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col gap-2 border-l border-[var(--theme-primary)] pl-5"
        >
          <p className="theme-primary font-mono text-xs uppercase tracking-[0.2em]">
            Keep learning
          </p>

          <p className="theme-secondary-text text-sm leading-6 opacity-100">
            Every new concept is another tool I can use to build something
            better.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default CurrentlyExploring;