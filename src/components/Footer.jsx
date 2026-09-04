import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Achievements", href: "#achievements" },
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

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative px-4 pb-8 pt-16 lg:px-6">
      <div className="mx-auto max-w-7xl">

        {/* Glass Footer Container */}
        <div
          className="
            theme-border
            relative
            overflow-hidden
            rounded-3xl
            border
            bg-[color-mix(in_srgb,var(--theme-surface)_72%,transparent)]
            px-6
            py-10
            shadow-[0_8px_40px_rgba(0,0,0,0.08)]
            backdrop-blur-xl
            transition-all
            duration-300
            lg:px-10
          "
        >
          {/* Subtle Glow */}
          <div
            className="
              pointer-events-none
              absolute
              -right-32
              -top-32
              h-72
              w-72
              rounded-full
              bg-[var(--theme-primary)]
              opacity-[0.04]
              blur-3xl
            "
          />

          <div className="relative">

            {/* Main Footer */}
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

              {/* Logo / Intro */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <a
                  href="#home"
                  className="
                    theme-text
                    text-lg
                    font-bold
                    tracking-[0.25em]
                    transition-colors
                    duration-300
                    hover:text-[var(--theme-primary)]
                  "
                >
                  SPARSH<span className="theme-primary">.</span>
                </a>

                {/* Fixed supporting text */}
                <p className="mt-3 max-w-sm text-sm leading-6 text-[var(--theme-text-secondary)] opacity-100">
                  Engineering student building with code, AI and creativity.
                </p>
              </motion.div>

              {/* Navigation */}
              <motion.nav
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-wrap items-center gap-2"
              >
                {footerLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="
                      rounded-full
                      border
                      border-transparent
                      px-3
                      py-2
                      text-sm
                      text-[var(--theme-text-secondary)]
                      opacity-100
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
              </motion.nav>

              {/* GitHub */}
              <motion.a
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                href="https://github.com/Sparsshsoni15"
                target="_blank"
                rel="noreferrer"
                className="
                  theme-text
                  theme-border
                  group
                  inline-flex
                  w-fit
                  items-center
                  gap-2
                  rounded-full
                  border
                  bg-[var(--theme-glow)]
                  px-4
                  py-2.5
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-[var(--theme-primary)]
                  hover:bg-[var(--theme-surface-hover)]
                "
              >
                <GitHubIcon size={17} />

                GitHub

                <ArrowUpRight
                  size={14}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </motion.a>
            </div>

            {/* Bottom Divider */}
            <div
              className="
                theme-border
                mt-10
                flex
                flex-col
                gap-3
                border-t
                pt-6
                text-xs
                md:flex-row
                md:items-center
                md:justify-between
              "
            >
              {/* Fixed */}
              <p className="text-[var(--theme-text-secondary)] opacity-100">
                © {currentYear} Sparsh Soni. All rights reserved.
              </p>

              {/* Fixed */}
              <p className="text-[var(--theme-text-secondary)] opacity-100">
                Built with{" "}
                <span className="theme-primary font-medium">React</span> &
                creativity.
              </p>

              <a
                href="#home"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-transparent
                  px-3
                  py-2
                  text-sm
                  text-[var(--theme-text-secondary)]
                  opacity-100
                  transition-all
                  duration-300
                  hover:border-[color-mix(in_srgb,var(--theme-primary)_15%,transparent)]
                  hover:bg-[var(--theme-glow)]
                  hover:text-[var(--theme-primary)]
                "
              >
                Back to top
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;