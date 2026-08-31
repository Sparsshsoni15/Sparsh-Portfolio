import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "motion/react";

const projects = [
  {
    number: "01",
    title: "ABTalks",
    description:
      "A redesigned 60-day coding challenge platform focused on helping students track their progress and stay consistent.",
    tags: ["React", "Tailwind CSS", "Vite"],
    type: "Featured Project",
    github: "https://github.com/Sparsshsoni15",
  },
  {
    number: "02",
    title: "Amazon Clone",
    description:
      "An e-commerce interface recreated from scratch to practice responsive layouts, reusable components and modern frontend development.",
    tags: ["HTML", "CSS", "JavaScript"],
    type: "Frontend",
    github: "https://github.com/Sparsshsoni15",
  },
  {
    number: "03",
    title: "Spotify Clone",
    description:
      "A modern music streaming interface built as a frontend project while experimenting with interactive UI and component-based development.",
    tags: ["React", "JavaScript", "CSS"],
    type: "Frontend",
    github: "https://github.com/Sparsshsoni15",
  },
  {
    number: "04",
    title: "Tourist Guide",
    description:
      "A travel-focused web experience designed to help users discover destinations through a clean and interactive interface.",
    tags: ["HTML", "CSS", "JavaScript"],
    type: "Web Experience",
    github: "https://github.com/Sparsshsoni15",
  },
];

function Work() {
  return (
    <section
      id="work"
      className="relative px-6 py-32 lg:px-10 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-purple-400">
            <span className="h-px w-10 bg-purple-500" />
            03 / Work
          </div>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Things I've{" "}
              <span className="bg-gradient-to-r from-purple-300 to-blue-500 bg-clip-text text-transparent">
                built.
              </span>
            </h2>

            <p className="max-w-sm text-sm leading-7 text-zinc-500">
              A collection of experiments, projects and ideas I've turned
              into working digital experiences.
            </p>
          </div>
        </motion.div>

        {/* Projects */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] ${
                index === 0 ? "p-8 md:p-12" : "p-7 md:p-9"
              }`}
            >
              {/* Background glow */}
              <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-purple-600/0 blur-3xl transition-all duration-700 group-hover:bg-purple-600/10" />

              <div className="relative grid gap-8 md:grid-cols-[90px_1fr_auto] md:items-center">

                {/* Number */}
                <div className="font-mono text-sm text-zinc-700">
                  /{project.number}
                </div>

                {/* Content */}
                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-purple-300">
                      {project.type}
                    </span>
                  </div>

                  <h3
                    className={`font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-purple-200 ${
                      index === 0
                        ? "text-3xl md:text-4xl"
                        : "text-2xl md:text-3xl"
                    }`}
                  >
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-500 md:text-base">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-white/5 bg-black/20 px-3 py-1.5 font-mono text-[11px] text-zinc-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-all duration-300 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-white"
                  >
                    <Github size={18} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition-all duration-300 hover:-translate-y-1 hover:bg-purple-400"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>

              {/* Bottom line */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-700 group-hover:w-full" />
            </motion.article>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.02] p-7 md:flex-row md:items-center md:p-8"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">
              More on GitHub
            </p>

            <p className="mt-2 text-lg font-medium text-zinc-300">
              More experiments are waiting there.
            </p>
          </div>

          <a
            href="https://github.com/Sparsshsoni15"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-purple-500/40 hover:bg-purple-500/10"
          >
            <Github size={17} />
            View GitHub
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Work;