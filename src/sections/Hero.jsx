import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24"
    >
      <div className="mx-auto w-full max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-purple-400"
        >
          <span className="h-px w-10 bg-purple-500" />
          Hey, I'm
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="max-w-5xl text-6xl font-black leading-[0.9] tracking-[-0.05em] sm:text-7xl md:text-8xl lg:text-[9rem]"
        >
          SPARSH
          <br />
          <span className="bg-gradient-to-r from-purple-300 via-violet-500 to-blue-500 bg-clip-text text-transparent">
            SONI
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 max-w-2xl"
        >
          <p className="text-xl font-medium text-zinc-200 md:text-2xl">
            Engineering Student{" "}
            <span className="text-purple-400">×</span> Developer
          </p>

          <p className="mt-4 max-w-xl text-base leading-7 text-zinc-500 md:text-lg">
            I build digital experiences, solve problems, and explore the
            intersection of software, AI and technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#work"
            className="group flex items-center gap-3 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-purple-400"
          >
            View My Work
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

          <a
            href="https://github.com/Sparsshsoni15"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-purple-400 hover:bg-purple-500/10"
          >
            GitHub
          </a>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-xs uppercase tracking-[0.25em] text-zinc-600"
        >
          <span>Scroll to explore</span>
          <ArrowDown size={16} className="animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;