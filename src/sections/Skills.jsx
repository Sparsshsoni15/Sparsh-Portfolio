import { Code2, GitBranch, Terminal } from "lucide-react";
import { motion } from "motion/react";

const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 78 },
      { name: "React", level: 72 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    title: "Programming & Tools",
    icon: Terminal,
    skills: [
      { name: "C++", level: 75 },
      { name: "JavaScript", level: 78 },
      { name: "Git", level: 82 },
      { name: "GitHub", level: 85 },
    ],
  },
];

const exploring = [
  "Artificial Intelligence",
  "Node.js",
  "Data Structures & Algorithms",
  "APIs",
];

function SkillBar({ name, level, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -15 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay }}
      className="space-y-2"
    >
      <div className="flex items-center justify-between">
        <span className="theme-secondary-text text-sm font-medium">
          {name}
        </span>

        <span className="theme-muted font-mono text-xs">
          {level}%
        </span>
      </div>

      <div
        className="h-1.5 overflow-hidden rounded-full"
        style={{
          background:
            "color-mix(in srgb, var(--theme-primary) 10%, transparent)",
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 1,
            delay: delay + 0.1,
            ease: "easeOut",
          }}
          className="h-full rounded-full"
          style={{
            background:
              "linear-gradient(90deg, var(--theme-primary), var(--theme-secondary))",
            boxShadow: "0 0 12px var(--theme-glow)",
          }}
        />
      </div>
    </motion.div>
  );
}

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-32 lg:px-10 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
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
            02 / Skills
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <h2 className="theme-text text-4xl font-black tracking-tight md:text-5xl lg:text-6xl">
                Things I{" "}
                <span className="bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-secondary)] bg-clip-text text-transparent">
                  work with.
                </span>
              </h2>
            </div>

            {/* Theme-aware section description */}
            <p className="max-w-xl text-sm leading-7 text-[var(--theme-text-secondary)] opacity-100 md:text-base lg:justify-self-end">
              A growing toolkit built through projects, experimentation and
              consistent learning.
            </p>
          </div>
        </motion.div>

        {/* Main Skills */}
        <div className="grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group, groupIndex) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: groupIndex * 0.12,
                }}
                className="glass-card group relative overflow-hidden rounded-3xl p-7 md:p-9"
              >
                {/* Glow */}
                <div
                  className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full blur-3xl opacity-10 transition-opacity duration-500 group-hover:opacity-20"
                  style={{
                    background: "var(--theme-primary)",
                  }}
                />

                <div className="relative">

                  {/* Card Header */}
                  <div className="mb-8 flex items-center gap-4">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl"
                      style={{
                        color: "var(--theme-primary)",
                        background:
                          "color-mix(in srgb, var(--theme-primary) 12%, transparent)",
                        border:
                          "1px solid color-mix(in srgb, var(--theme-primary) 30%, transparent)",
                      }}
                    >
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    <div>
                      <p className="theme-subtle font-mono text-[10px] uppercase tracking-[0.2em]">
                        Toolkit
                      </p>

                      <h3 className="theme-text mt-1 text-xl font-bold">
                        {group.title}
                      </h3>
                    </div>
                  </div>

                  {/* Skill Bars */}
                  <div className="space-y-6">
                    {group.skills.map((skill, index) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        delay={groupIndex * 0.12 + index * 0.08}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Currently Exploring */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="glass-card mt-6 rounded-3xl p-7 md:p-9"
        >
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">

            <div>
              <div className="theme-primary mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em]">
                <GitBranch size={14} />
                Currently Exploring
              </div>

              <h3 className="theme-text text-2xl font-bold">
                Always learning.
              </h3>

              {/* Theme-aware paragraph */}
              <p className="mt-3 max-w-md text-sm leading-6 text-[var(--theme-text-secondary)] opacity-100">
                Technology keeps changing, so I'm continuously exploring new
                tools and concepts to improve what I can build.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 md:justify-end">
              {exploring.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -3 }}
                  className="theme-text theme-border rounded-full border px-4 py-2.5 text-sm transition-all duration-300"
                  style={{
                    background:
                      "color-mix(in srgb, var(--theme-primary) 7%, transparent)",
                  }}
                >
                  <span
                    className="mr-2 inline-block h-1.5 w-1.5 rounded-full"
                    style={{
                      background: "var(--theme-primary)",
                      boxShadow: "0 0 8px var(--theme-primary)",
                    }}
                  />
                  {item}
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;