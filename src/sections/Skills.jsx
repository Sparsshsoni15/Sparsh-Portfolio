import { BrainCircuit, Code2, GitBranch, Terminal } from "lucide-react";
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
    title: "Programming",
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
    <div className="group">
      <div className="mb-2 flex items-center justify-between">
        <span className="theme-secondary-text text-sm">
          {name}
        </span>

        <span className="theme-subtle font-mono text-xs">
          {level}%
        </span>
      </div>

      <div className="h-[3px] overflow-hidden rounded-full bg-[var(--theme-border)]">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay,
            ease: "easeOut",
          }}
          className="h-full rounded-full bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-secondary)]"
        />
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section
      id="skills"
      className="relative px-6 py-32 lg:px-10 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="theme-primary mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.3em]">
            <span className="h-px w-10 bg-[var(--theme-primary)]" />
            02 / Skills
          </div>

          <h2 className="theme-text max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Tools I use to{" "}
            <span className="bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-secondary)] bg-clip-text text-transparent">
              bring ideas to life.
            </span>
          </h2>
        </motion.div>

        {/* Main grid */}
        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">

          {/* Skill groups */}
          <div className="grid gap-6 md:grid-cols-2">
            {skillGroups.map((group, groupIndex) => {
              const Icon = group.icon;

              return (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.7,
                    delay: groupIndex * 0.1,
                  }}
                  className="theme-border theme-surface relative overflow-hidden rounded-3xl border p-7 backdrop-blur-sm md:p-8"
                >
                  {/* Header */}
                  <div className="mb-10 flex items-center justify-between">
                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[color-mix(in_srgb,var(--theme-primary)_20%,transparent)] bg-[color-mix(in_srgb,var(--theme-primary)_10%,transparent)]">
                        <Icon
                          size={19}
                          className="theme-primary"
                        />
                      </div>

                      <div>
                        <p className="theme-text font-semibold">
                          {group.title}
                        </p>

                        <p className="theme-subtle font-mono text-[10px] uppercase tracking-[0.2em]">
                          Skill set
                        </p>
                      </div>
                    </div>

                    <span className="theme-subtle font-mono text-xs">
                      0{groupIndex + 1}
                    </span>
                  </div>

                  {/* Skill bars */}
                  <div className="space-y-7">
                    {group.skills.map((skill, index) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        delay={index * 0.08}
                      />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Exploring panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="theme-border theme-surface relative overflow-hidden rounded-3xl border p-8"
          >
            {/* Decorative glow */}
            <div
              className="absolute -right-20 -top-20 h-56 w-56 rounded-full blur-3xl"
              style={{
                background:
                  "color-mix(in srgb, var(--theme-primary) 12%, transparent)",
              }}
            />

            <div className="relative">

              <div className="mb-8 flex items-center justify-between">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[color-mix(in_srgb,var(--theme-primary)_20%,transparent)] bg-[color-mix(in_srgb,var(--theme-primary)_10%,transparent)]">
                  <BrainCircuit
                    size={19}
                    className="theme-primary"
                  />
                </div>

                <span className="theme-subtle flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                  Learning
                </span>
              </div>

              <h3 className="theme-text text-2xl font-bold">
                Currently exploring
              </h3>

              <p className="theme-muted mt-3 text-sm leading-7">
                Technologies and concepts I'm actively learning and
                experimenting with.
              </p>

              <div className="mt-8 space-y-3">
                {exploring.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="theme-border theme-surface flex items-center gap-3 rounded-xl border px-4 py-3"
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{
                        backgroundColor: "var(--theme-primary)",
                      }}
                    />

                    <span className="theme-secondary-text text-sm">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tech strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="theme-border theme-surface mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 rounded-2xl border px-6 py-5"
        >
          <span className="theme-subtle flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em]">
            <GitBranch size={14} />
            Stack
          </span>

          <span className="theme-muted text-sm">React</span>
          <span className="theme-muted text-sm">JavaScript</span>
          <span className="theme-muted text-sm">Tailwind</span>
          <span className="theme-muted text-sm">C++</span>
          <span className="theme-muted text-sm">Git</span>
          <span className="theme-muted text-sm">GitHub</span>
          <span className="theme-muted text-sm">Vite</span>
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;