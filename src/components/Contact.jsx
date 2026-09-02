import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";

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
                                    className="transition-transform duration-300 group-hover:translate-x-1"
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
                                className="theme-text theme-border theme-surface inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-[var(--theme-primary)] hover:bg-[var(--theme-surface-hover)]"
                            >
                                <Github size={17} />
                                GitHub
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="theme-text theme-border theme-surface inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-[var(--theme-primary)] hover:bg-[var(--theme-surface-hover)]"
                            >
                                <Linkedin size={17} />
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