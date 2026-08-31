import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Work", href: "#work" },
    { label: "GitHub", href: "#github" },
];

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed left-0 right-0 top-0 z-50">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
                <a
                    href="#"
                    className="text-lg font-bold tracking-[0.25em]"
                >
                    SPARSH<span className="text-purple-400">.</span>
                </a>

                <div className="hidden items-center gap-8 md:flex">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-sm text-zinc-400 transition hover:text-white"
                        >
                            {link.label}
                        </a>
                    ))}

                    <a
                        href="https://github.com/Sparsshsoni15"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm transition hover:border-purple-500/50 hover:bg-purple-500/10"
                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.08.78 2.18v3.24c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                        </svg>
                        GitHub
                    </a>
                </div>

                <button
                    onClick={() => setOpen(!open)}
                    className="rounded-lg border border-white/10 p-2 md:hidden"
                    aria-label="Toggle menu"
                >
                    {open ? <X size={20} /> : <Menu size={20} />}
                </button>
            </nav>

            {open && (
                <div className="mx-4 rounded-2xl border border-white/10 bg-black/80 p-5 backdrop-blur-xl md:hidden">
                    <div className="flex flex-col gap-5">
                        {links.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="text-zinc-300 hover:text-white"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}

export default Navbar;