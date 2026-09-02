import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const projects = [
    {
        number: "01",
        title: "ABTalks",
        description:
            "A redesigned 60-day coding challenge platform focused on helping students track their progress and stay consistent.",
        tags: ["React", "Tailwind CSS", "Vite"],
        type: "Featured Project",
        github: "YOUR_ABTALKS_REPO_URL",
        live: "YOUR_ABTALKS_LIVE_URL",
    },
    {
        number: "02",
        title: "Amazon Clone",
        description:
            "An e-commerce interface recreated from scratch to practice responsive layouts, reusable components and modern frontend development.",
        tags: ["HTML", "CSS", "JavaScript"],
        type: "Frontend",
        github: "YOUR_AMAZON_CLONE_REPO_URL",
        live: "YOUR_AMAZON_CLONE_LIVE_URL",
    },
    {
        number: "03",
        title: "Spotify Clone",
        description:
            "A modern music streaming interface built as a frontend project while experimenting with interactive UI and component-based development.",
        tags: ["React", "JavaScript", "CSS"],
        type: "Frontend",
        github: "YOUR_SPOTIFY_CLONE_REPO_URL",
        live: "YOUR_SPOTIFY_CLONE_LIVE_URL",
    },
    {
        number: "04",
        title: "Tourist Guide",
        description:
            "A travel-focused web experience designed to help users discover destinations through a clean and interactive interface.",
        tags: ["HTML", "CSS", "JavaScript"],
        type: "Web Experience",
        github: "YOUR_TOURIST_GUIDE_REPO_URL",
        live: "YOUR_TOURIST_GUIDE_LIVE_URL",
    },
];

function GitHubIcon({ size = 18 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.08.78 2.18v3.24c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
        </svg>
    );
}

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
                    <div className="theme-primary mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.3em]">
                        <span className="bg-[var(--theme-primary)] h-px w-10" />
                        03 / Work
                    </div>

                    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                        <h2 className="theme-text max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                            Things I've{" "}
                            <span className="bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-secondary)] bg-clip-text text-transparent">
                                built.
                            </span>
                        </h2>

                        <p className="theme-muted max-w-sm text-sm leading-7">
                            A collection of experiments, projects and ideas I've
                            turned into working digital experiences.
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
                            className={`theme-border theme-surface group relative overflow-hidden rounded-3xl border ${
                                index === 0
                                    ? "p-8 md:p-12"
                                    : "p-7 md:p-9"
                            }`}
                        >
                            {/* Background glow */}
                            <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[var(--theme-primary)] opacity-0 blur-3xl transition-all duration-700 group-hover:opacity-10" />

                            <div className="relative grid gap-8 md:grid-cols-[90px_1fr_auto] md:items-center">

                                {/* Number */}
                                <div className="theme-subtle font-mono text-sm">
                                    /{project.number}
                                </div>

                                {/* Content */}
                                <div>
                                    <div className="mb-3 flex flex-wrap items-center gap-3">
                                        <span className="theme-primary rounded-full border border-[color-mix(in_srgb,var(--theme-primary)_20%,transparent)] bg-[color-mix(in_srgb,var(--theme-primary)_10%,transparent)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em]">
                                            {project.type}
                                        </span>
                                    </div>

                                    <h3
                                        className={`theme-text font-bold tracking-tight transition-colors duration-300 group-hover:text-[var(--theme-primary)] ${
                                            index === 0
                                                ? "text-3xl md:text-4xl"
                                                : "text-2xl md:text-3xl"
                                        }`}
                                    >
                                        {project.title}
                                    </h3>

                                    <p className="theme-muted mt-4 max-w-2xl text-sm leading-7 md:text-base">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="theme-muted rounded-lg border border-[var(--theme-border)] bg-[var(--theme-surface)] px-3 py-1.5 font-mono text-[11px]"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex flex-wrap items-center gap-3">

                                    {/* GitHub */}
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={`View ${project.title} on GitHub`}
                                        className="theme-text theme-border theme-surface inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--theme-primary)] hover:bg-[var(--theme-surface-hover)]"
                                    >
                                        <GitHubIcon size={16} />
                                        <span>GitHub</span>
                                    </a>

                                    {/* Live Demo */}
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={`View live ${project.title}`}
                                        className="theme-text inline-flex items-center gap-2 rounded-full border border-[var(--theme-primary)] bg-[var(--theme-primary)] px-5 py-2.5 text-sm font-semibold shadow-[0_0_20px_color-mix(in_srgb,var(--theme-primary)_25%,transparent)] transition-all duration-300 hover:-translate-y-1 hover:brightness-110"
                                    >
                                        <span>Live Demo</span>

                                        <ArrowUpRight
                                            size={16}
                                            className="transition-transform duration-300 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5"
                                        />
                                    </a>

                                </div>
                            </div>

                            {/* Bottom line */}
                            <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-secondary)] transition-all duration-700 group-hover:w-full" />
                        </motion.article>
                    ))}
                </div>

                {/* GitHub CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="theme-border theme-surface mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl border p-7 md:flex-row md:items-center md:p-8"
                >
                    <div>
                        <p className="theme-subtle font-mono text-xs uppercase tracking-[0.2em]">
                            More on GitHub
                        </p>

                        <p className="theme-secondary-text mt-2 text-lg font-medium">
                            More experiments are waiting there.
                        </p>
                    </div>

                    <a
                        href="https://github.com/Sparsshsoni15"
                        target="_blank"
                        rel="noreferrer"
                        className="theme-text group inline-flex items-center gap-3 rounded-full border border-[var(--theme-border)] px-6 py-3 text-sm font-semibold transition-all duration-300 hover:border-[var(--theme-primary)] hover:bg-[var(--theme-glow)]"
                    >
                        <GitHubIcon size={17} />
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