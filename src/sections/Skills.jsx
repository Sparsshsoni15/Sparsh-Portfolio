import { BrainCircuit, Code2, Database, GitBranch, Terminal } from "lucide-react";
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
        <span className="text-sm text-zinc-300">{name}</span>
        <span className="font-mono text-xs text-zinc-600">
          {level}%
        </span>
      </div>

      <div className="h-[3px] overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay,
            ease: "easeOut",
          }}
          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
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
          <div className="mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-purple-400">
            <span className="h-px w-10 bg-purple-500" />
            02 / Skills
          </div>

          <h2 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Tools I use to{" "}
            <span className="bg-gradient-to-r from-purple-300 to-blue-500 bg-clip-text text-transparent">
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
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 md:p-8"
                >
                  <div className="mb-10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10">
                        <Icon size={19} className="text-purple-400" />
                      </div>

                      <div>
                        <p className="font-semibold text-white">
                          {group.title}
                        </p>
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                          Skill set
                        </p>
                      </div>
                    </div>

                    <span className="font-mono text-xs text-zinc-700">
                      0{groupIndex + 1}
                    </span>
                  </div>

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
            className="relative overflow-hidden rounded-3xl border border-purple-500/20 bg-purple-500/[0.035] p-8"
          >
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-purple-600/10 blur-3xl" />

            <div className="relative">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10">
                  <BrainCircuit
                    size={19}
                    className="text-purple-400"
                  />
                </div>

                <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                  Learning
                </span>
              </div>

              <h3 className="text-2xl font-bold">
                Currently exploring
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-500">
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
                    className="flex items-center gap-3 rounded-xl border border-white/5 bg-black/20 px-4 py-3"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                    <span className="text-sm text-zinc-300">
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
          className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 rounded-2xl border border-white/5 bg-white/[0.015] px-6 py-5"
        >
          <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-zinc-700">
            <GitBranch size={14} />
            Stack
          </span>

          <span className="text-sm text-zinc-500">React</span>
          <span className="text-sm text-zinc-500">JavaScript</span>
          <span className="text-sm text-zinc-500">Tailwind</span>
          <span className="text-sm text-zinc-500">C++</span>
          <span className="text-sm text-zinc-500">Git</span>
          <span className="text-sm text-zinc-500">GitHub</span>
          <span className="text-sm text-zinc-500">Vite</span>
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;