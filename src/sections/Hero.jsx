import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24"
        >
            <div className="mx-auto w-full max-w-6xl">

                {/* INTRO */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.3em] theme-primary"
                >
                    <span
                        className="h-px w-10"
                        style={{ background: "var(--theme-primary)" }}
                    />

                    Hey, I'm
                </motion.div>


                {/* NAME */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.15 }}
                    className="theme-heading max-w-5xl text-6xl font-black ..."
                >
                    SPARSH
                    <br />

                    <span className="theme-gradient-text">
                        SONI
                    </span>
                </motion.h1>


                {/* DESCRIPTION */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="mt-8 max-w-2xl"
                >
                    <p className="theme-text text-xl font-medium md:text-2xl">
                        Engineering Student{" "}
                        <span className="theme-primary">×</span>{" "}
                        Developer
                    </p>

                    <p className="theme-muted mt-4 max-w-xl text-base leading-7 md:text-lg">
                        I build digital experiences, solve problems, and explore the
                        intersection of software, AI and technology.
                    </p>
                </motion.div>


                {/* BUTTONS */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-10 flex flex-wrap gap-4"
                >

                    {/* WORK BUTTON */}
                    <a
                        href="#work"
                        className="group inline-flex items-center gap-3 rounded-full px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1"
                        style={{
                            background:
                                "linear-gradient(90deg, var(--theme-primary), var(--theme-secondary))",
                            boxShadow:
                                "0 0 35px var(--theme-glow)",
                        }}
                    >
                        <span>View My Work</span>

                        <ArrowUpRight
                            size={18}
                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                    </a>


                    {/* GITHUB */}
                    <a
                        href="https://github.com/Sparsshsoni15"
                        target="_blank"
                        rel="noreferrer"
                        className="theme-border theme-surface flex items-center gap-3 rounded-full border px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-1"
                    >
                        GitHub
                    </a>

                </motion.div>


                {/* SCROLL */}
                <motion.a
                    href="#about"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="theme-muted absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-xs uppercase tracking-[0.25em]"
                >
                    <span>Scroll to explore</span>

                    <ArrowDown
                        size={16}
                        className="animate-bounce theme-primary"
                    />
                </motion.a>

            </div>
        </section>
    );
}

export default Hero;