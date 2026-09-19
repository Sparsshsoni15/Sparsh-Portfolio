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
          className="mb-8 sm:mb-12 lg:mb-16"
        >
          <div
            className="
              theme-primary
              mb-4
              flex
              items-center
              gap-2
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
              gap-3
              sm:gap-6
              md:flex-row
              md:items-end
            "
          >
            <h2
              className="
                theme-text
                max-w-4xl
                text-[2rem]
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

          <div className="relative">

            {/* =====================================
                MOBILE PHOTO + STATS
                375 / 390 / 430px
            ====================================== */}

            <div className="lg:hidden">

              <div className="p-4 sm:p-6">

                <div className="grid grid-cols-[minmax(0,1fr)_112px] gap-3 sm:grid-cols-[minmax(0,1fr)_125px] sm:gap-4">

                  {/* PHOTO */}

                  <div className="min-w-0">
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

                        {/* Dark gradient */}

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
                              text-[9px]
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
                              text-[10px]
                              font-semibold
                              leading-4
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

                  {/* STATS */}

                  <div
                    className="
                      theme-border
                      flex
                      min-w-0
                      flex-col
                      overflow-hidden
                      rounded-xl
                      border
                      sm:rounded-2xl
                    "
                  >
                    {stats.map((stat, index) => (
                      <div
                        key={stat.label}
                        className={`
                          flex
                          min-h-0
                          flex-1
                          flex-col
                          justify-center
                          px-3
                          py-3
                          sm:px-3.5
                          sm:py-4
                          ${
                            index !== stats.length - 1
                              ? "border-b theme-border"
                              : ""
                          }
                        `}
                      >
                        <span
                          className="
                            theme-text
                            text-lg
                            font-bold
                            leading-none
                            sm:text-xl
                          "
                        >
                          {stat.value}
                        </span>

                        <span
                          className="
                            theme-muted
                            mt-1.5
                            text-[9px]
                            leading-3
                            sm:text-[10px]
                            sm:leading-4
                          "
                        >
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* =====================================
                  MOBILE CONTENT
              ====================================== */}

              <div className="px-5 pb-5 sm:px-7 sm:pb-7">

                {/* INTRO LABEL */}

                <div className="mb-5 flex items-center gap-3 sm:mb-7">
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
                      className="theme-primary"
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
                    space-y-3
                    text-[13px]
                    leading-6
                    text-[var(--theme-text-secondary)]
                    sm:mt-6
                    sm:space-y-4
                    sm:text-sm
                    sm:leading-7
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

                {/* ENGINEERING BADGE */}

                <div className="mt-5 sm:mt-6">
                  <div
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      px-3
                      py-1.5
                      text-[10px]
                      font-medium
                    "
                    style={{
                      borderColor:
                        "color-mix(in srgb, var(--theme-primary) 35%, transparent)",
                      background: "var(--theme-glow)",
                      color: "var(--theme-primary)",
                    }}
                  >
                    <Code2 size={12} />
                    Electrical & Computer Engineering
                  </div>
                </div>

                {/* BOTTOM STATEMENT */}

                <div
                  className="
                    theme-border
                    mt-6
                    flex
                    flex-col
                    gap-4
                    border-t
                    pt-5
                    min-[420px]:flex-row
                    min-[420px]:items-center
                    min-[420px]:justify-between
                    sm:mt-8
                    sm:pt-7
                  "
                >
                  <div className="flex items-center gap-3">
                    <Sparkles
                      size={15}
                      className="theme-primary shrink-0"
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
            </div>

            {/* =====================================
                DESKTOP CONTENT + PHOTO
                EXISTING LAYOUT
            ====================================== */}

            <div className="hidden lg:grid lg:grid-cols-[1fr_360px]">

              {/* =====================================
                  CONTENT
              ====================================== */}

              <div className="flex flex-col justify-between p-12">

                {/* INTRO LABEL */}

                <div>
                  <div className="mb-7 flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl border"
                      style={{
                        borderColor:
                          "color-mix(in srgb, var(--theme-primary) 25%, transparent)",
                        background: "var(--theme-glow)",
                      }}
                    >
                      <Code2
                        size={19}
                        className="theme-primary"
                      />
                    </div>

                    <div>
                      <p className="theme-subtle font-mono text-[10px] uppercase tracking-[0.2em]">
                        Electrical & Computer Engineering
                      </p>

                      <p className="theme-secondary-text mt-1 text-sm font-medium">
                        Learning by building
                      </p>
                    </div>
                  </div>

                  {/* MAIN HEADING */}

                  <h3 className="theme-text max-w-3xl text-3xl font-bold leading-tight">
                    I'm interested in technology,{" "}
                    <span className="theme-primary">
                      but I enjoy building with it even more.
                    </span>
                  </h3>

                  {/* ABOUT DESCRIPTION */}

                  <div
                    className="
                      mt-6
                      max-w-3xl
                      space-y-4
                      text-base
                      leading-7
                      text-[var(--theme-text-secondary)]
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
                      I learn best when I actually build something. Whether
                      it's a small website, a clone of an existing product or
                      an idea of my own, I like experimenting, making mistakes
                      and improving the result along the way.
                    </p>

                    <p>
                      Right now, I'm focused on becoming a better developer,
                      strengthening my programming and DSA skills, and working
                      on projects that are useful, interesting and worth
                      putting out into the real world.
                    </p>
                  </div>
                </div>

                {/* BOTTOM STATEMENT */}

                <div className="theme-border mt-10 flex items-center justify-between gap-5 border-t pt-7">
                  <div className="flex items-center gap-3">
                    <Sparkles
                      size={16}
                      className="theme-primary"
                    />

                    <span className="theme-subtle font-mono text-[10px] uppercase tracking-[0.18em]">
                      Building. Learning. Improving.
                    </span>
                  </div>

                  <a
                    href="#work"
                    className="theme-primary group inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:gap-3"
                  >
                    Explore my work

                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </div>
              </div>

              {/* =====================================
                  PHOTO + STATS
              ====================================== */}

              <div className="theme-border border-l">

                {/* PHOTO */}

                <div className="p-8">
                  <div className="about-photo-card">
                    <figure className="theme-border relative overflow-hidden rounded-2xl border">
                      <img
                        src={sparshPhoto}
                        alt="Sparsh Soni"
                        draggable={false}
                        className="block aspect-[4/5] w-full select-none object-cover"
                      />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                      <div className="absolute bottom-4 left-4">
                        <p className="text-xs font-semibold tracking-[0.12em] text-white">
                          SPARSH SONI
                        </p>

                        <p className="mt-1 text-sm font-semibold text-white">
                          Engineer • Builder • Learner
                        </p>
                      </div>
                    </figure>
                  </div>
                </div>

                {/* STATS */}

                <div className="theme-border border-t">
                  {stats.map((stat, index) => (
                    <div
                      key={stat.label}
                      className={`flex items-center justify-between px-8 py-5 ${
                        index !== stats.length - 1
                          ? "border-b theme-border"
                          : ""
                      }`}
                    >
                      <span className="theme-muted text-sm">
                        {stat.label}
                      </span>

                      <span className="theme-text text-xl font-bold">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
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