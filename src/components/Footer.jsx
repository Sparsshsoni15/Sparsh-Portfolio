import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
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

                        {/* GitHub */}
                        <a
                            href="https://github.com/Sparsshsoni15"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            className="theme-text theme-border theme-surface flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-1 hover:border-[var(--theme-primary)] hover:bg-[var(--theme-surface-hover)]"
                        >
                            <GitHubIcon size={17} />
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            className="theme-text theme-border theme-surface flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-1 hover:border-[var(--theme-primary)] hover:bg-[var(--theme-surface-hover)]"
                        >
                            <LinkedInIcon size={17} />
                        </a>

                        {/* Back to top */}
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
