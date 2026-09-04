import {
  ArrowUpRight,
  Code2,
  Lightbulb,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";
import sparshPhoto from "../assets/sparsh.png";

const stats = [
  {
    value: "10+",
    label: "Projects Built",
  },
  {
    value: "∞",
    label: "Things to Learn",
  },
  {
    value: "24/7",
    label: "Curiosity",
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-32 lg:px-10 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="theme-primary mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.3em]">
            <span className="h-px w-10 bg-[var(--theme-primary)]" />
            01 / About
          </div>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="theme-text max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              A little about{" "}
              <span className="bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-secondary)] bg-clip-text text-transparent">
                me.
              </span>
            </h2>

            {/* Theme-aware supporting text */}
            <p
              className="
                max-w-sm
                text-sm
                leading-7
                text-[var(--theme-text-secondary)]
                opacity-100
              "
            >
              Learning, experimenting and building one idea at a time.
            </p>
          </div>
        </motion.div>

        {/* MAIN ABOUT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="theme-border theme-surface relative overflow-hidden rounded-3xl border"
        >
          {/* Background glow */}
          <div
            className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full blur-[120px]"
            style={{
              background: "var(--theme-primary)",
              opacity: 0.1,
            }}
          />

          <div className="relative grid lg:grid-cols-[1fr_360px]">

            {/* CONTENT */}
            <div className="flex flex-col justify-between p-7 md:p-10 lg:p-12">
              <div>

                <div className="mb-7 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl border"
                    style={{
                      borderColor:
                        "color-mix(in srgb, var(--theme-primary) 25%, transparent)",
                      background: "var(--theme-glow)",
                    }}
                  >
                    <Code2
                      size={19}
                      className="theme-primary"
                    />
                  </div>

                  <div>
                    <p className="theme-subtle font-mono text-[10px] uppercase tracking-[0.2em]">
                      Engineering Student
                    </p>

                    <p className="theme-secondary-text mt-1 text-sm font-medium">
                      Building with curiosity
                    </p>
                  </div>
                </div>

                <h3 className="theme-text max-w-3xl text-2xl font-bold leading-tight md:text-3xl">
                  I enjoy turning ideas into{" "}
                  <span className="theme-primary">
                    useful digital experiences.
                  </span>
                </h3>

                {/* ABOUT DESCRIPTION */}
                <div
                  className="
                    mt-6
                    max-w-3xl
                    space-y-4
                    text-sm
                    leading-7
                    md:text-base
                    text-[var(--theme-text-secondary)]
                    opacity-100
                  "
                >
                  <p>
                    I'm Sparsh Soni, a 2nd-year Electrical and Computer
                    Engineering student with a growing interest in web
                    development, artificial intelligence and problem solving.
                  </p>

                  <p>
                    I like exploring new technologies, building projects and
                    understanding how things work. For me, every project is an
                    opportunity to learn something new and improve the way I
                    build.
                  </p>

                  <p>
                    I'm currently focused on strengthening my development
                    skills while experimenting with ideas that combine
                    technology and creativity.
                  </p>
                </div>
              </div>

              {/* BOTTOM STATEMENT */}
              <div className="theme-border mt-10 flex flex-col gap-5 border-t pt-7 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <Sparkles
                    size={16}
                    className="theme-primary"
                  />

                  <span className="theme-subtle font-mono text-[10px] uppercase tracking-[0.18em]">
                    Always learning
                  </span>
                </div>

                <a
                  href="#work"
                  className="theme-primary group inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:gap-3"
                >
                  Explore my work

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>

            {/* PHOTO + STATS */}
            <div className="theme-border border-t lg:border-l lg:border-t-0">

              {/* PHOTO */}
              <div className="p-6 md:p-8">
                <div className="about-photo-card">
                  <figure className="relative overflow-hidden rounded-2xl border theme-border">
                    <img
                      src={sparshPhoto}
                      alt="Sparsh Soni"
                      draggable={false}
                      className="block aspect-[4/5] w-full select-none object-cover"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4">
                      <p className="text-xs font-medium text-white/70">
                        SPARSH SONI
                      </p>

                      <p className="mt-1 text-sm font-semibold text-white">
                        Engineer • Builder • Learner
                      </p>
                    </div>
                  </figure>
                </div>
              </div>

              {/* STATS */}
              <div className="theme-border border-t">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`flex items-center justify-between px-7 py-5 md:px-8 ${
                      index !== stats.length - 1
                        ? "border-b theme-border"
                        : ""
                    }`}
                  >
                    <span className="theme-muted text-sm">
                      {stat.label}
                    </span>

                    <span className="theme-text text-xl font-bold">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* BOTTOM MINI CARDS */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">

          {/* WHAT DRIVES ME */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="theme-border theme-surface rounded-2xl border p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <Lightbulb
                size={18}
                className="theme-primary"
              />

              <span className="theme-text text-sm font-semibold">
                What drives me
              </span>
            </div>

            <p
              className="
                text-sm
                leading-7
                text-[var(--theme-text-secondary)]
                opacity-100
              "
            >
              Curiosity, consistency and the excitement of seeing an idea
              become something real.
            </p>
          </motion.div>

          {/* CURRENTLY EXPLORING */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="theme-border theme-surface rounded-2xl border p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <Code2
                size={18}
                className="theme-primary"
              />

              <span className="theme-text text-sm font-semibold">
                Currently exploring
              </span>
            </div>

            <p
              className="
                text-sm
                leading-7
                text-[var(--theme-text-secondary)]
                opacity-100
              "
            >
              React, modern frontend development, APIs, artificial
              intelligence and problem solving.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;