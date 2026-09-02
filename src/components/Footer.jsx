import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { motion } from "motion/react";

const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
];

function Footer() {
    return (
        <footer className="theme-border border-t px-6 py-10 lg:px-10">
            <div className="mx-auto max-w-7xl">

                <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">

                    {/* Logo */}
                    <motion.a
                        href="#home"
                        whileHover={{ y: -2 }}
                        className="theme-text text-lg font-bold tracking-[0.25em]"
                    >
                        SPARSH
                        <span className="theme-primary">.</span>
                    </motion.a>

                    {/* Navigation */}
                    <nav className="flex flex-wrap gap-x-6 gap-y-3">
                        {links.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="theme-muted text-sm transition-colors duration-300 hover:text-[var(--theme-primary)]"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Socials */}
                    <div className="flex items-center gap-3">

                        <a
                            href="https://github.com/Sparsshsoni15"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            className="theme-text theme-border theme-surface flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-1 hover:border-[var(--theme-primary)] hover:bg-[var(--theme-surface-hover)]"
                        >
                            <Github size={17} />
                        </a>

                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            className="theme-text theme-border theme-surface flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-1 hover:border-[var(--theme-primary)] hover:bg-[var(--theme-surface-hover)]"
                        >
                            <Linkedin size={17} />
                        </a>

                        <a
                            href="#home"
                            aria-label="Back to top"
                            className="theme-text theme-border theme-surface flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-1 hover:border-[var(--theme-primary)] hover:bg-[var(--theme-surface-hover)]"
                        >
                            <ArrowUpRight
                                size={17}
                                className="-rotate-45"
                            />
                        </a>

                    </div>
                </div>

                {/* Copyright */}
                <div className="theme-border mt-8 flex flex-col gap-3 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="theme-subtle text-xs">
                        © {new Date().getFullYear()} Sparsh Soni. All rights reserved.
                    </p>

                    <p className="theme-subtle font-mono text-[10px] uppercase tracking-[0.2em]">
                        Built with React
                    </p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;