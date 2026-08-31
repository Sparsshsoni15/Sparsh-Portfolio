import { ArrowUpRight, Code2, Cpu, Layers3, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  {
    value: "10+",
    label: "Projects Built",
    icon: Code2,
  },
  {
    value: "∞",
    label: "Things to Learn",
    icon: Sparkles,
  },
  {
    value: "24/7",
    label: "Curiosity",
    icon: Cpu,
  },
];

function About() {
  return (
    <section id="about" className="relative px-6 py-32 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-purple-400">
            <span className="h-px w-10 bg-purple-500" />
            01 / About
          </div>

          <h2 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            I don't just{" "}
            <span className="text-zinc-500">write code.</span>
            <br />
            I build things that{" "}
            <span className="bg-gradient-to-r from-purple-300 to-blue-500 bg-clip-text text-transparent">
              matter.
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">

          {/* Main about card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-8 backdrop-blur-sm md:p-12"
          >
            {/* Decorative glow */}
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl transition-all duration-700 group-hover:bg-purple-600/20" />

            <div className="relative">
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10">
                  <Layers3 size={19} className="text-purple-400" />
                </div>

                <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Who I am
                </span>
              </div>

              <p className="max-w-3xl text-xl leading-9 text-zinc-300 md:text-2xl md:leading-10">
                I'm an engineering student and developer who enjoys turning
                ideas into{" "}
                <span className="text-white">real digital experiences.</span>
              </p>

              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-500">
                My journey started with curiosity about how things work and
                gradually turned into a passion for software development,
                problem solving and emerging technologies. I'm constantly
                experimenting, learning and building.
              </p>

              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-500">
                Currently, I'm exploring{" "}
                <span className="text-purple-300">
                  web development, AI and computer science
                </span>{" "}
                while building projects that push my skills further.
              </p>

              <a
                href="#work"
                className="group/link mt-10 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-purple-300"
              >
                Explore my work
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                />
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-purple-500/[0.04]"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <Icon
                      size={20}
                      className="text-zinc-600 transition-colors group-hover:text-purple-400"
                    />

                    <span className="font-mono text-xs text-zinc-700">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="text-4xl font-bold tracking-tight text-white">
                    {stat.value}
                  </div>

                  <div className="mt-2 text-sm text-zinc-500">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 border-t border-white/10 pt-8"
        >
          <p className="max-w-3xl font-mono text-sm leading-7 text-zinc-600">
            <span className="text-purple-500">&gt;</span> Always building.
            Always learning. Always looking for the next problem worth solving.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default About;