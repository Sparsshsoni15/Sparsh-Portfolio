import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Achievements", href: "#achievements" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

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