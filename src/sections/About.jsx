import {
  ArrowUpRight,
  Code2,
  Lightbulb,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";
import sparshPhoto from "../assets/sparsh.png";

const stats = [
  {
    value: "2nd",
    label: "Year of Engineering",
  },
  {
    value: "ELCE",
    label: "My Branch",
  },
  {
    value: "Build",
    label: "Current Focus",
  },
];

function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        px-4
        py-20
        sm:px-6
        sm:py-24
        lg:px-10
        lg:py-40
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* =========================================
            SECTION HEADING
        ========================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-10 sm:mb-12 lg:mb-16"
        >
          <div
            className="
              theme-primary
              mb-4
              flex
              items-center
              gap-2.5
              text-[11px]
              uppercase
              tracking-[0.22em]
              sm:mb-5
              sm:gap-3
              sm:text-sm
              sm:tracking-[0.3em]
            "
          >
            <span className="h-px w-7 bg-[var(--theme-primary)] sm:w-10" />
            01 / About
          </div>

          <div
            className="
              flex
              flex-col
              justify-between
              gap-4
              sm:gap-6
              md:flex-row
              md:items-end
            "
          >
            <h2
              className="
                theme-text
                max-w-4xl
                text-[2.15rem]
                font-bold
                leading-[1.08]
                tracking-tight
                sm:text-5xl
                md:text-6xl
              "
            >
              A little about{" "}
              <span
                className="
                  bg-gradient-to-r
                  from-[var(--theme-primary)]
                  to-[var(--theme-secondary)]
                  bg-clip-text
                  text-transparent
                "
              >
                me.
              </span>
            </h2>

            <p
              className="
                max-w-full
                text-[13px]
                leading-6
                text-[var(--theme-text-secondary)]
                sm:max-w-sm
                sm:text-sm
                sm:leading-7
              "
            >
              A student who enjoys learning by building things and figuring
              out how they work.
            </p>
          </div>
        </motion.div>

        {/* =========================================
            MAIN ABOUT CARD
        ========================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="
            theme-border
            theme-surface
            relative
            overflow-hidden
            rounded-2xl
            border
            sm:rounded-3xl
          "
        >
          {/* Background glow */}

          <div
            className="
              pointer-events-none
              absolute
              -right-32
              -top-32
              h-72
              w-72
              rounded-full
              blur-[100px]
              sm:-right-40
              sm:-top-40
              sm:h-96
              sm:w-96
              sm:blur-[120px]
            "
            style={{
              background: "var(--theme-primary)",
              opacity: 0.1,
            }}
          />

          <div className="relative grid lg:grid-cols-[1fr_360px]">

            {/* =====================================
                CONTENT
            ====================================== */}

            <div
              className="
                flex
                flex-col
                justify-between
                p-5
                sm:p-7
                md:p-10
                lg:p-12
              "
            >
              <div>

                {/* INTRO LABEL */}

                <div
                  className="
                    mb-6
                    flex
                    items-center
                    gap-3
                    sm:mb-7
                  "
                >
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      sm:h-10
                      sm:w-10
                    "
                    style={{
                      borderColor:
                        "color-mix(in srgb, var(--theme-primary) 25%, transparent)",
                      background: "var(--theme-glow)",
                    }}
                  >
                    <Code2
                      size={18}
                      className="theme-primary sm:h-[19px] sm:w-[19px]"
                    />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="
                        theme-subtle
                        truncate
                        font-mono
                        text-[9px]
                        uppercase
                        tracking-[0.13em]
                        sm:text-[10px]
                        sm:tracking-[0.2em]
                      "
                    >
                      Electrical & Computer Engineering
                    </p>

                    <p className="theme-secondary-text mt-1 text-xs font-medium sm:text-sm">
                      Learning by building
                    </p>
                  </div>
                </div>

                {/* MAIN HEADING */}

                <h3
                  className="
                    theme-text
                    max-w-3xl
                    text-[1.4rem]
                    font-bold
                    leading-[1.25]
                    sm:text-2xl
                    md:text-3xl
                  "
                >
                  I'm interested in technology,{" "}
                  <span className="theme-primary">
                    but I enjoy building with it even more.
                  </span>
                </h3>

                {/* ABOUT DESCRIPTION */}

                <div
                  className="
                    mt-5
                    max-w-3xl
                    space-y-3.5
                    text-[13px]
                    leading-6
                    text-[var(--theme-text-secondary)]
                    sm:mt-6
                    sm:space-y-4
                    sm:text-sm
                    sm:leading-7
                    md:text-base
                  "
                >
                  <p>
                    I'm Sparsh Soni, a 2nd-year Electrical and Computer
                    Engineering student. I'm currently exploring web
                    development, artificial intelligence and problem solving,
                    while trying to understand the fundamentals behind the
                    things I build.
                  </p>

                  <p>
                    I learn best when I actually build something. Whether it's
                    a small website, a clone of an existing product or an idea
                    of my own, I like experimenting, making mistakes and
                    improving the result along the way.
                  </p>

                  <p>
                    Right now, I'm focused on becoming a better developer,
                    strengthening my programming and DSA skills, and working on
                    projects that are useful, interesting and worth putting
                    out into the real world.
                  </p>
                </div>
              </div>

              {/* =====================================
                  BOTTOM STATEMENT
              ====================================== */}

              <div
                className="
                  theme-border
                  mt-8
                  flex
                  flex-col
                  gap-4
                  border-t
                  pt-6
                  sm:mt-10
                  sm:gap-5
                  sm:pt-7
                  min-[420px]:flex-row
                  min-[420px]:items-center
                  min-[420px]:justify-between
                "
              >
                <div className="flex items-center gap-3">
                  <Sparkles
                    size={15}
                    className="theme-primary shrink-0 sm:h-4 sm:w-4"
                  />

                  <span
                    className="
                      theme-subtle
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-[0.13em]
                      sm:text-[10px]
                      sm:tracking-[0.18em]
                    "
                  >
                    Building. Learning. Improving.
                  </span>
                </div>

                <a
                  href="#work"
                  className="
                    theme-primary
                    group
                    inline-flex
                    items-center
                    gap-2
                    text-xs
                    font-semibold
                    transition-all
                    duration-300
                    hover:gap-3
                    sm:text-sm
                  "
                >
                  Explore my work

                  <ArrowUpRight
                    size={15}
                    className="
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      sm:h-4
                      sm:w-4
                    "
                  />
                </a>
              </div>
            </div>

            {/* =====================================
                PHOTO + STATS
            ====================================== */}

            <div
              className="
                theme-border
                border-t
                lg:border-l
                lg:border-t-0
              "
            >

              {/* =====================================
                  PHOTO
              ====================================== */}

              <div className="p-4 sm:p-6 md:p-8">
                <div className="about-photo-card">
                  <figure
                    className="
                      theme-border
                      relative
                      overflow-hidden
                      rounded-xl
                      border
                      sm:rounded-2xl
                    "
                  >
                    <img
                      src={sparshPhoto}
                      alt="Sparsh Soni"
                      draggable={false}
                      className="
                        block
                        aspect-[4/5]
                        w-full
                        select-none
                        object-cover
                      "
                    />

                    {/* Dark gradient for text readability */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/70
                        via-black/10
                        to-transparent
                      "
                    />

                    {/* NAME + TAGLINE */}

                    <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                      <p
                        className="
                          text-[11px]
                          font-semibold
                          tracking-[0.1em]
                          text-white
                          sm:text-xs
                          sm:tracking-[0.12em]
                        "
                      >
                        SPARSH SONI
                      </p>

                      <p
                        className="
                          mt-0.5
                          text-xs
                          font-semibold
                          text-white
                          sm:mt-1
                          sm:text-sm
                        "
                      >
                        Engineer • Builder • Learner
                      </p>
                    </div>
                  </figure>
                </div>
              </div>

              {/* =====================================
                  QUICK INFO
              ====================================== */}

              <div className="theme-border border-t">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`
                      flex
                      items-center
                      justify-between
                      px-5
                      py-4
                      sm:px-7
                      sm:py-5
                      md:px-8
                      ${
                        index !== stats.length - 1
                          ? "border-b theme-border"
                          : ""
                      }
                    `}
                  >
                    <span className="theme-muted text-xs sm:text-sm">
                      {stat.label}
                    </span>

                    <span className="theme-text text-lg font-bold sm:text-xl">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================
            BOTTOM MINI CARDS
        ========================================== */}

        <div className="mt-4 grid gap-4 sm:mt-6 sm:gap-6 md:grid-cols-2">

          {/* WHAT DRIVES ME */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              theme-border
              theme-surface
              rounded-xl
              border
              p-5
              sm:rounded-2xl
              sm:p-6
            "
          >
            <div className="mb-3 flex items-center gap-3 sm:mb-4">
              <Lightbulb
                size={17}
                className="theme-primary shrink-0 sm:h-[18px] sm:w-[18px]"
              />

              <span className="theme-text text-sm font-semibold">
                What drives me
              </span>
            </div>

            <p
              className="
                text-[13px]
                leading-6
                text-[var(--theme-text-secondary)]
                sm:text-sm
                sm:leading-7
              "
            >
              I enjoy taking an idea, figuring out how to build it and
              gradually turning it into something that actually works.
            </p>
          </motion.div>

          {/* CURRENTLY WORKING ON */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="
              theme-border
              theme-surface
              rounded-xl
              border
              p-5
              sm:rounded-2xl
              sm:p-6
            "
          >
            <div className="mb-3 flex items-center gap-3 sm:mb-4">
              <Code2
                size={17}
                className="theme-primary shrink-0 sm:h-[18px] sm:w-[18px]"
              />

              <span className="theme-text text-sm font-semibold">
                Currently working on
              </span>
            </div>

            <p
              className="
                text-[13px]
                leading-6
                text-[var(--theme-text-secondary)]
                sm:text-sm
                sm:leading-7
              "
            >
              Improving my JavaScript and React skills, practicing DSA and
              exploring how AI can be used to build better applications.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;