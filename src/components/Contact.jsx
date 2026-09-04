import { Mail, Send } from "lucide-react";
import { motion } from "motion/react";

function GitHubIcon({ size = 20 }) {
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

function LinkedInIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.67H9.35V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.3ZM5.34 7.41a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.57V8.98H3.56v11.47ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
    </svg>
  );
}

function ContactCard({ icon, title, value, href }) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
      whileHover={{ y: -4 }}
      className="glass-card group flex items-center gap-4 rounded-2xl p-5 transition-all duration-300"
    >
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
        style={{
          color: "var(--theme-primary)",
          background:
            "color-mix(in srgb, var(--theme-primary) 12%, transparent)",
          border:
            "1px solid color-mix(in srgb, var(--theme-primary) 28%, transparent)",
        }}
      >
        {icon}
      </div>

      <div className="min-w-0">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--theme-text-secondary)] opacity-100">
          {title}
        </p>

        <p className="theme-text mt-1 truncate text-sm font-medium">
          {value}
        </p>
      </div>
    </motion.a>
  );
}

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-32 lg:px-10 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="theme-primary mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em]">
            <span
              className="h-px w-10"
              style={{ background: "var(--theme-primary)" }}
            />
            05 / Contact
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <h2 className="theme-text text-4xl font-black tracking-tight md:text-5xl lg:text-6xl">
              Let's build something{" "}
              <span className="bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-secondary)] bg-clip-text text-transparent">
                together.
              </span>
            </h2>

            {/* Fixed: theme-aware supporting text */}
            <p className="max-w-xl text-sm leading-7 text-[var(--theme-text-secondary)] opacity-100 md:text-base lg:justify-self-end">
              Have an idea, opportunity or just want to connect? Feel free to
              reach out.
            </p>
          </div>
        </motion.div>

        {/* Contact Layout */}
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <ContactCard
              icon={<Mail size={20} />}
              title="Email"
              value="sparsshsoni15@gmail.com"
              href="mailto:sparsshsoni15@gmail.com"
            />

            <ContactCard
              icon={<GitHubIcon size={20} />}
              title="GitHub"
              value="github.com/Sparsshsoni15"
              href="https://github.com/Sparsshsoni15"
            />

            <ContactCard
              icon={<LinkedInIcon size={20} />}
              title="LinkedIn"
              value="Connect with me"
              href="https://www.linkedin.com/"
            />

            <div className="glass-card rounded-2xl p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--theme-text-secondary)] opacity-100">
                Availability
              </p>

              <div className="mt-3 flex items-center gap-2">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{
                    background: "var(--theme-primary)",
                    boxShadow: "0 0 10px var(--theme-primary)",
                  }}
                />

                <span className="theme-text text-sm font-semibold">
                  Open to opportunities
                </span>
              </div>

              {/* Fixed: theme-aware supporting text */}
              <p className="mt-3 text-sm leading-6 text-[var(--theme-text-secondary)] opacity-100">
                Interested in internships, collaborations, projects and
                learning opportunities.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-3xl p-7 md:p-9"
          >
            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-semibold text-[var(--theme-text-secondary)] opacity-100"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="theme-input w-full rounded-xl border theme-border px-4 py-3.5 text-sm transition-all duration-300 focus:border-[var(--theme-primary)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-semibold text-[var(--theme-text-secondary)] opacity-100"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="theme-input w-full rounded-xl border theme-border px-4 py-3.5 text-sm transition-all duration-300 focus:border-[var(--theme-primary)]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-xs font-semibold text-[var(--theme-text-secondary)] opacity-100"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  className="theme-input w-full rounded-xl border theme-border px-4 py-3.5 text-sm transition-all duration-300 focus:border-[var(--theme-primary)]"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-semibold text-[var(--theme-text-secondary)] opacity-100"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell me a little about your idea..."
                  className="theme-input w-full resize-none rounded-xl border theme-border px-4 py-3.5 text-sm leading-6 transition-all duration-300 focus:border-[var(--theme-primary)]"
                />
              </div>

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
                style={{
                  background:
                    "linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))",
                  boxShadow: "0 0 30px var(--theme-glow)",
                }}
              >
                Send Message

                <Send
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              {/* Fixed: theme-aware supporting text */}
              <p className="text-center text-[11px] text-[var(--theme-text-secondary)] opacity-100">
                This form is currently UI-only. A backend/email service can be
                connected later.
              </p>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;