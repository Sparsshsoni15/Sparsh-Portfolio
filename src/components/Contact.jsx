import { Mail, Send } from "lucide-react";
import { motion } from "motion/react";

function GitHubIcon({ size = 22 }) {
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

function LinkedInIcon({ size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.59 0 4.25 2.36 4.25 5.43v6.31ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.1 20.45H3.54V9H7.1v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z" />
    </svg>
  );
}

function ContactCard({ icon, label, value, href, accent = "primary" }) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25 }}
      className="theme-border theme-surface group flex items-center gap-5 rounded-2xl border p-5 transition-all duration-300 hover:border-[var(--theme-primary)]"
    >
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${
          accent === "purple"
            ? "border-purple-500/20 bg-purple-500/10 text-purple-400"
            : accent === "blue"
              ? "border-cyan-500/20 bg-cyan-500/10 text-cyan-400"
              : "border-[var(--theme-primary)] bg-[var(--theme-glow)] theme-primary"
        }`}
      >
        {icon}
      </div>

      <div className="min-w-0">
        <p className="theme-subtle text-xs font-medium">
          {label}
        </p>

        <p className="theme-text mt-1 truncate text-sm font-semibold transition-colors duration-300 group-hover:text-[var(--theme-primary)]">
          {value}
        </p>
      </div>
    </motion.a>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-32 lg:px-10 lg:py-40"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[var(--theme-primary)] opacity-10 blur-[130px]" />

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="theme-text text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Let's build something{" "}
            <span className="bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-secondary)] bg-clip-text text-transparent">
              together.
            </span>
          </h2>

          <p className="theme-muted mx-auto mt-5 max-w-2xl text-sm leading-7 md:text-base">
            I'm always open to learning, collaborating, and connecting with
            people who are passionate about technology.
          </p>
        </motion.div>

        {/* Main Contact Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* LEFT — Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <ContactCard
              icon={<Mail size={21} />}
              label="Email"
              value="sparsshsoni15@gmail.com"
              href="mailto:sparsshsoni15@gmail.com"
            />

            <ContactCard
              icon={<GitHubIcon size={21} />}
              label="GitHub"
              value="Sparsshsoni15"
              href="https://github.com/Sparsshsoni15"
              accent="purple"
            />

            <ContactCard
              icon={<LinkedInIcon size={21} />}
              label="LinkedIn"
              value="sparsshsoni15"
              href="https://www.linkedin.com/"
              accent="blue"
            />
          </motion.div>

          {/* RIGHT — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="theme-border theme-surface rounded-3xl border p-6 md:p-8"
          >
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5"
            >
              {/* Name */}
              <div>
                <label className="theme-text mb-2 block text-xs font-semibold">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="theme-border theme-input w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-[var(--theme-primary)] focus:ring-1 focus:ring-[var(--theme-primary)]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="theme-text mb-2 block text-xs font-semibold">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="theme-border theme-input w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-[var(--theme-primary)] focus:ring-1 focus:ring-[var(--theme-primary)]"
                />
              </div>

              {/* Message */}
              <div>
                <label className="theme-text mb-2 block text-xs font-semibold">
                  Message
                </label>

                <textarea
                  rows="4"
                  placeholder="Tell me about your idea or just say hi..."
                  className="theme-border theme-input w-full resize-none rounded-xl border px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-[var(--theme-primary)] focus:ring-1 focus:ring-[var(--theme-primary)]"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1"
                style={{
                  background:
                    "linear-gradient(90deg, var(--theme-primary), var(--theme-secondary))",
                  boxShadow: "0 0 30px var(--theme-glow)",
                }}
              >
                <Send
                  size={17}
                  className="transition-transform duration-300 group-hover:-rotate-12"
                />

                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="theme-subtle font-mono text-[10px] uppercase tracking-[0.25em]">
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