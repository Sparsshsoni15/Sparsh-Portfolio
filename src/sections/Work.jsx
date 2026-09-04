import { ArrowUpRight, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

const projects = [
  {
    number: "01",
    title: "ABTalks",
    category: "Hackathon Project",
    description:
      "A redesigned coding challenge platform with a modern student dashboard, challenge interface and engaging learning experience.",
    tech: ["React", "Tailwind CSS", "Vite"],
    demo: "#",
    github: "#",
  },
  {
    number: "02",
    title: "Amazon Clone",
    category: "Frontend Project",
    description:
      "A responsive e-commerce interface inspired by Amazon, built to practice modern frontend development, layouts and reusable components.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "#",
    github: "#",
  },
  {
    number: "03",
    title: "Spotify Clone",
    category: "Web Development",
    description:
      "A music streaming interface inspired by Spotify, focused on responsive design, interactive UI and modern frontend techniques.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "#",
    github: "#",
  },
  {
    number: "04",
    title: "Tourist Guide Website",
    category: "Web Project",
    description:
      "A tourism-focused website designed to help users explore destinations through a clean and visually engaging interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "#",
    github: "#",
  },
];

function GitHubIcon({ size = 17 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.13c-3.2.7-3.88-1.35-3.88-1.35-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18A10.9 10.9 0 0 1 12 6.12c.97 0 1.95.13 2.86.38 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .3.2.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function Work() {
  return (
    <section
      id="work"
      className="relative overflow-hidden px-6 py-32 lg:px-10 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="theme-primary mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em]">
            <span className="h-px w-10 bg-[var(--theme-primary)]" />
            03 / Selected Work
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <h2 className="theme-text text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Things I've{" "}
              <span className="bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-secondary)] bg-clip-text text-transparent">
                built.
              </span>
            </h2>

            {/* Theme-aware section description */}
            <p className="max-w-xl text-sm leading-7 text-[var(--theme-text-secondary)] opacity-100 md:text-base lg:justify-self-end">
              A selection of projects where I experiment with code, design,
              AI and modern web technologies.
            </p>
          </div>
        </motion.div>

        {/* PROJECTS */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              whileHover={{ y: -6 }}
              className="
                glass-card
                group
                relative
                overflow-hidden
                rounded-3xl
                p-7
                transition-all
                duration-500
                md:p-8
              "
            >
              {/* TOP GLOW */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  h-64
                  w-64
                  rounded-full
                  opacity-0
                  blur-3xl
                  transition-opacity
                  duration-700
                  group-hover:opacity-20
                "
                style={{
                  background: "var(--theme-primary)",
                }}
              />

              {/* PROJECT NUMBER */}
              <div className="relative mb-8 flex items-center justify-between">
                <span
                  className="
                    font-mono
                    text-xs
                    font-semibold
                    tracking-[0.2em]
                  "
                  style={{
                    color: "var(--theme-primary)",
                  }}
                >
                  / {project.number}
                </span>

                <span className="theme-subtle font-mono text-[10px] uppercase tracking-[0.18em]">
                  {project.category}
                </span>
              </div>

              {/* PROJECT CONTENT */}
              <div className="relative">
                <h3
                  className="
                    theme-text
                    text-3xl
                    font-black
                    tracking-tight
                    transition-colors
                    duration-300
                    group-hover:text-[var(--theme-primary)]
                    md:text-4xl
                  "
                >
                  {project.title}
                </h3>

                <p className="theme-muted mt-5 max-w-2xl text-sm leading-7 md:text-base">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="
                        rounded-full
                        border
                        px-3
                        py-1.5
                        font-mono
                        text-[10px]
                        uppercase
                        tracking-[0.08em]
                      "
                      style={{
                        color: "var(--theme-secondary-text)",
                        background:
                          "color-mix(in srgb, var(--theme-primary) 7%, transparent)",
                        borderColor:
                          "color-mix(in srgb, var(--theme-primary) 18%, transparent)",
                      }}
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* ACTIONS */}
                <div className="mt-9 flex flex-wrap items-center gap-3 border-t pt-6 theme-border">
                  {project.demo !== "#" ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        px-5
                        py-2.5
                        text-sm
                        font-semibold
                        transition-all
                        duration-300
                        hover:-translate-y-1
                      "
                      style={{
                        color: "var(--theme-text)",
                        background:
                          "color-mix(in srgb, var(--theme-primary) 12%, transparent)",
                        borderColor:
                          "color-mix(in srgb, var(--theme-primary) 30%, transparent)",
                      }}
                    >
                      Live Demo
                      <ArrowUpRight size={15} />
                    </a>
                  ) : (
                    <span
                      className="
                        inline-flex
                        cursor-default
                        items-center
                        gap-2
                        rounded-full
                        border
                        px-5
                        py-2.5
                        text-sm
                        font-semibold
                      "
                      style={{
                        color: "var(--theme-text)",
                        background:
                          "color-mix(in srgb, var(--theme-primary) 10%, transparent)",
                        borderColor:
                          "color-mix(in srgb, var(--theme-primary) 22%, transparent)",
                      }}
                    >
                      Live Demo
                      <ArrowUpRight size={15} />
                    </span>
                  )}

                  {project.github !== "#" ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        theme-text
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        px-5
                        py-2.5
                        text-sm
                        font-semibold
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-[var(--theme-primary)]
                      "
                      style={{
                        borderColor:
                          "color-mix(in srgb, var(--theme-primary) 18%, transparent)",
                      }}
                    >
                      <GitHubIcon size={16} />
                      Source Code
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span
                      className="
                        theme-subtle
                        inline-flex
                        cursor-default
                        items-center
                        gap-2
                        rounded-full
                        border
                        px-5
                        py-2.5
                        text-sm
                        font-semibold
                      "
                      style={{
                        borderColor:
                          "color-mix(in srgb, var(--theme-primary) 15%, transparent)",
                      }}
                    >
                      <GitHubIcon size={16} />
                      Source Code
                    </span>
                  )}
                </div>
              </div>

              {/* BOTTOM ACCENT */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-px
                  w-0
                  transition-all
                  duration-700
                  group-hover:w-full
                "
                style={{
                  background:
                    "linear-gradient(to right, var(--theme-primary), var(--theme-secondary))",
                }}
              />
            </motion.article>
          ))}
        </div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="theme-border mt-16 border-t pt-8"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

            {/* FIXED: readable outside-card text */}
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--theme-text-secondary)] opacity-100">
              <span className="theme-primary">↳</span>{" "}
              More projects in progress
            </p>

            {/* FIXED: readable outside-card text */}
            <p className="text-sm text-[var(--theme-text-secondary)] opacity-100">
              Building, learning and shipping continuously.
            </p>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Work;