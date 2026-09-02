import {
  ArrowUpRight,
  Code2,
  Cpu,
  Layers3,
  Sparkles,
} from "lucide-react";

import { motion } from "motion/react";

const stats = [
  {
    value: "10+",
    label: "Projects Built",
    icon: Code2,
  },
  {
    value: "∞",
    label: "Things to Learn",
    icon: Sparkles,
  },
  {
    value: "24/7",
    label: "Curiosity",
    icon: Cpu,
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative px-6 py-32 lg:px-10 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          {/* Section label */}
          <div className="theme-primary mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.3em]">
            <span className="h-px w-10 bg-[var(--theme-primary)]" />
            01 / About
          </div>

          {/* Heading */}
          <h2 className="theme-text max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            I don't just{" "}
            <span className="theme-muted">
              write code.
            </span>
            <br />
            I build things that{" "}
            <span className="bg-gradient-to-r from-purple-300 to-blue-500 bg-clip-text text-transparent">
              matter.
            </span>
          </h2>
        </motion.div>

        {/* Main content grid */}
        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">

          {/* Main about card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="
              theme-border
              theme-surface
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              p-8
              backdrop-blur-sm
              md:p-12
            "
          >
            {/* Decorative glow */}
            <div
              className="
                absolute
                -right-24
                -top-24
                h-64
                w-64
                rounded-full
                bg-[var(--theme-glow)]
                blur-3xl
                transition-all
                duration-700
                group-hover:opacity-80
              "
            />

            <div className="relative">

              {/* Card heading */}
              <div className="mb-8 flex items-center gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-[color-mix(in_srgb,var(--theme-primary)_20%,transparent)]
                    bg-[color-mix(in_srgb,var(--theme-primary)_10%,transparent)]
                  "
                >
                  <Layers3
                    size={19}
                    className="theme-primary"
                  />
                </div>

                <span className="theme-muted font-mono text-xs uppercase tracking-[0.2em]">
                  Who I am
                </span>
              </div>

              {/* Main paragraph */}
              <p className="theme-secondary-text max-w-3xl text-xl leading-9 md:text-2xl md:leading-10">
                I'm an engineering student and developer who enjoys turning
                ideas into{" "}
                <span className="theme-text font-medium">
                  real digital experiences.
                </span>
              </p>

              {/* Description */}
              <p className="theme-muted mt-6 max-w-2xl text-base leading-8">
                My journey started with curiosity about how things work and
                gradually turned into a passion for software development,
                problem solving and emerging technologies. I'm constantly
                experimenting, learning and building.
              </p>

              {/* Current learning */}
              <p className="theme-muted mt-6 max-w-2xl text-base leading-8">
                Currently, I'm exploring{" "}
                <span className="theme-primary font-medium">
                  web development, AI and computer science
                </span>{" "}
                while building projects that push my skills further.
              </p>

              {/* Explore work */}
              <a
                href="#work"
                className="
                  theme-text
                  group/link
                  mt-10
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  transition-colors
                  duration-300
                  hover:text-[var(--theme-primary)]
                "
              >
                Explore my work

                <ArrowUpRight
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover/link:translate-x-1
                    group-hover/link:-translate-y-1
                  "
                />
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
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
                    duration-300
                    hover:-translate-y-1
                    hover:border-[color-mix(in_srgb,var(--theme-primary)_30%,transparent)]
                    hover:bg-[var(--theme-surface-hover)]
                  "
                >
                  {/* Icon + number */}
                  <div className="mb-8 flex items-center justify-between">
                    <Icon
                      size={20}
                      className="
                        theme-subtle
                        transition-colors
                        duration-300
                        group-hover:text-[var(--theme-primary)]
                      "
                    />

                    <span className="theme-subtle font-mono text-xs">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Stat value */}
                  <div className="theme-text text-4xl font-bold tracking-tight">
                    {stat.value}
                  </div>

                  {/* Stat label */}
                  <div className="theme-muted mt-2 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="theme-border mt-20 border-t pt-8"
        >
          <p className="theme-subtle max-w-3xl font-mono text-sm leading-7">
            <span className="theme-primary">&gt;</span>{" "}
            Always building. Always learning. Always looking for the next
            problem worth solving.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default About;