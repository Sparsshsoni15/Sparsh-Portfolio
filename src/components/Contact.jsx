import { ArrowUpRight, Mail } from "lucide-react";
import { motion } from "motion/react";

function GitHubIcon({ size = 17 }) {
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

function LinkedInIcon({ size = 17 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.47v6.28h-.04ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.56V8.99H3.56v11.46ZM22.22 0H1.78C.8 0 0 .8 0 1.78v20.44C0 23.2.8 24 1.78 24h20.44c.98 0 1.78-.8 1.78-1.78V1.78C24 .8 23.2 0 22.22 0Z" />
        </svg>
    );
}

function Contact() {
    return (
        <section
            id="contact"
            className="relative overflow-hidden px-6 py-32 lg:px-10 lg:py-40"
        >
            <div className="mx-auto max-w-7xl">

                {/* Background glow */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--theme-primary)] opacity-10 blur-[120px]" />

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="mb-14"
                >
                    <div className="theme-primary mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.3em]">
                        <span className="h-px w-10 bg-[var(--theme-primary)]" />
                        04 / Contact
                    </div>

                    <h2 className="theme-text max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        Let's build something{" "}
                        <span className="bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-secondary)] bg-clip-text text-transparent">
                            together.
                        </span>
                    </h2>

                    <p className="theme-muted mt-6 max-w-2xl text-base leading-8 md:text-lg">
                        Have an idea, project or opportunity in mind?
                        I'd love to hear about it and see what we can create.
                    </p>
                </motion.div>

                {/* Contact card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                    className="theme-border theme-surface relative overflow-hidden rounded-3xl border p-8 backdrop-blur-sm md:p-12"
                >
                    {/* Card glow */}
                    <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[var(--theme-primary)] opacity-10 blur-3xl" />

                    <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">

                        {/* Email CTA */}
                        <div>
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--theme-primary)] bg-[var(--theme-glow)]">
                                <Mail
                                    size={21}
                                    className="theme-primary"
                                />
                            </div>

                            <p className="theme-subtle font-mono text-xs uppercase tracking-[0.2em]">
                                Get in touch
                            </p>

                            <a
                                href="mailto:sparsshsoni15@gmail.com"
                                className="theme-text mt-3 inline-flex items-center gap-2 text-xl font-semibold transition-colors duration-300 hover:text-[var(--theme-primary)] md:text-2xl"
                            >
                                sparsshsoni15@gmail.com

                                <ArrowUpRight
                                    size={20}
                                    className="transition-transform duration-300"
                                />
                            </a>

                            <p className="theme-muted mt-4 max-w-xl text-sm leading-7">
                                I'm always open to interesting projects,
                                collaborations, internships and opportunities
                                to learn and build something meaningful.
                            </p>
                        </div>

                        {/* Social links */}
                        <div className="flex flex-wrap gap-3">

                            {/* GitHub */}
                            <a
                                href="https://github.com/Sparsshsoni15"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                                className="theme-text theme-border theme-surface inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-[var(--theme-primary)] hover:bg-[var(--theme-surface-hover)]"
                            >
                                <GitHubIcon size={17} />
                                GitHub
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                                className="theme-text theme-border theme-surface inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-[var(--theme-primary)] hover:bg-[var(--theme-surface-hover)]"
                            >
                                <LinkedInIcon size={17} />
                                LinkedIn
                            </a>

                        </div>
                    </div>
                </motion.div>

                {/* Bottom statement */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-16 text-center"
                >
                    <p className="theme-subtle font-mono text-xs uppercase tracking-[0.25em]">
                        Open to opportunities
                    </p>

                    <p className="theme-muted mt-3 text-sm">
                        Let's turn ideas into something real.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}

export default Contact;