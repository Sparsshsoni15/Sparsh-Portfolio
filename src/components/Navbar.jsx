import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Achievements", href: "#achievements" },
  { label: "Experience", href: "#experience" },
  { label: "Hackathons", href: "#hackathons" },
  { label: "Contributions", href: "#contributions" },
  { label: "Exploring", href: "#exploring" },
  { label: "Contact", href: "#contact" },
];

function GitHubIcon({ size = 16 }) {
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

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-6">
      <nav
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          rounded-2xl
          border
          border-[color-mix(in_srgb,var(--theme-primary)_12%,transparent)]
          bg-[color-mix(in_srgb,var(--theme-surface)_72%,transparent)]
          px-5
          py-3
          shadow-[0_8px_30px_rgba(0,0,0,0.08)]
          backdrop-blur-xl
          transition-all
          duration-300
          lg:px-7
        "
      >
        {/* Logo */}
        <a
          href="#home"
          className="
            theme-text
            text-lg
            font-bold
            tracking-[0.25em]
            transition-colors
            duration-300
          "
        >
          SPARSH<span className="theme-primary">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          <div className="flex items-center gap-0.5">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="
                  theme-muted
                  rounded-full
                  border
                  border-transparent
                  px-2.5
                  py-2
                  text-xs
                  transition-all
                  duration-300
                  hover:border-[color-mix(in_srgb,var(--theme-primary)_15%,transparent)]
                  hover:bg-[var(--theme-glow)]
                  hover:text-[var(--theme-primary)]
                  lg:px-3
                  lg:text-sm
                "
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* GitHub */}
          <a
            href="https://github.com/Sparsshsoni15"
            target="_blank"
            rel="noreferrer"
            className="
              theme-text
              theme-border
              ml-2
              flex
              shrink-0
              items-center
              gap-2
              rounded-full
              border
              bg-[var(--theme-glow)]
              px-4
              py-2
              text-sm
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-[var(--theme-primary)]
              hover:bg-[var(--theme-surface-hover)]
            "
          >
            <GitHubIcon size={16} />
            GitHub
          </a>

          {/* Theme Switcher */}
          <div className="ml-2">
            <ThemeSwitcher />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="
            theme-text
            theme-border
            rounded-xl
            border
            bg-[var(--theme-glow)]
            p-2
            transition-all
            duration-300
            hover:border-[var(--theme-primary)]
            hover:bg-[var(--theme-surface-hover)]
            md:hidden
          "
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {open && (
        <div
          className="
            theme-border
            theme-surface
            mx-auto
            mt-3
            max-w-7xl
            rounded-2xl
            border
            bg-[color-mix(in_srgb,var(--theme-surface)_80%,transparent)]
            p-5
            shadow-[0_12px_40px_rgba(0,0,0,0.12)]
            backdrop-blur-xl
            md:hidden
          "
        >
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="
                  theme-text
                  rounded-xl
                  border
                  border-transparent
                  px-4
                  py-3
                  text-sm
                  transition-all
                  duration-300
                  hover:border-[color-mix(in_srgb,var(--theme-primary)_15%,transparent)]
                  hover:bg-[var(--theme-glow)]
                  hover:text-[var(--theme-primary)]
                "
              >
                {link.label}
              </a>
            ))}

            {/* GitHub */}
            <a
              href="https://github.com/Sparsshsoni15"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="
                theme-text
                theme-border
                mt-2
                flex
                w-fit
                items-center
                gap-2
                rounded-full
                border
                bg-[var(--theme-glow)]
                px-4
                py-2.5
                text-sm
                transition-all
                duration-300
                hover:border-[var(--theme-primary)]
                hover:bg-[var(--theme-surface-hover)]
              "
            >
              <GitHubIcon size={16} />
              GitHub
            </a>

            {/* Theme Switcher */}
            <div className="pt-2">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;