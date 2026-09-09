import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  Code2,
  Trophy,
  Users,
  X,
} from "lucide-react";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const hackathons = [
  {
    number: "01",
    title: "ViCodathon",
    type: "Hackathon",
    description:
      "Participated in ViCodathon, gaining hands-on experience in problem solving, rapid development and collaborative innovation.",
    tags: ["Development", "Problem Solving", "Teamwork"],
    icon: Code2,
    image: "/hackathons/vicodathon.png",
  },

  {
    number: "02",
    title: "Infinity Hacks",
    type: "Hackathon",
    description:
      "Participated in Infinity Hacks, working on technical challenges while exploring ideas, development and collaborative problem solving.",
    tags: ["Innovation", "Development", "Teamwork"],
    icon: Trophy,
    image: "/hackathons/infinity-hacks.jpeg",
  },

  {
    number: "03",
    title: "HackDevengers",
    type: "Hackathon",
    description:
      "Participated in HackDevengers, gaining experience in building solutions under time constraints and working as part of a team.",
    tags: ["Hackathon", "Problem Solving", "Collaboration"],
    icon: Users,
    image: "/hackathons/hackdevengers.jpeg",
  },
  {
    number: "04",
    title: "DECODE SIH 2026",
    type: "Hackathon",
    description:
        "Participated in DECODE SIH 2026, collaborating with a team to analyze a real-world problem statement and develop an innovative solution under strict time constraints.",
    tags: ["Hackathon", "Problem Solving", "Teamwork"],
    icon: Users,
    image: "/hackathons/decode-sih.jpeg",
},
];

const INITIAL_VISIBLE = 3;

function Hackathons() {
  const [showAll, setShowAll] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const showMoreButtonRef = useRef(null);
  const previousButtonTopRef = useRef(null);

  const visibleHackathons = showAll
    ? hackathons
    : hackathons.slice(0, INITIAL_VISIBLE);

  const hasMore = hackathons.length > INITIAL_VISIBLE;

  const handleToggle = () => {
    if (showMoreButtonRef.current) {
      previousButtonTopRef.current =
        showMoreButtonRef.current.getBoundingClientRect().top;
    }

    setShowAll((prev) => !prev);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (
          showMoreButtonRef.current &&
          previousButtonTopRef.current !== null
        ) {
          const currentTop =
            showMoreButtonRef.current.getBoundingClientRect().top;

          window.scrollBy(
            0,
            currentTop - previousButtonTopRef.current
          );
        }
      });
    });
  };

  /* Certificate viewer keyboard controls */
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!selectedCertificate) return;

      if (event.key === "Escape") {
        setSelectedCertificate(null);
      }

      if (event.key === "ArrowRight") {
        const currentIndex = hackathons.findIndex(
          (item) => item.number === selectedCertificate.number
        );

        const nextCertificate =
          hackathons[currentIndex + 1]?.image
            ? hackathons[currentIndex + 1]
            : null;

        if (nextCertificate) {
          setSelectedCertificate(nextCertificate);
        }
      }

      if (event.key === "ArrowLeft") {
        const currentIndex = hackathons.findIndex(
          (item) => item.number === selectedCertificate.number
        );

        const previousCertificate =
          hackathons[currentIndex - 1]?.image
            ? hackathons[currentIndex - 1]
            : null;

        if (previousCertificate) {
          setSelectedCertificate(previousCertificate);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCertificate]);

  /* Prevent background scrolling while certificate is open */
  useEffect(() => {
    if (selectedCertificate) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCertificate]);

  const openCertificate = (item) => {
    if (item.image) {
      setSelectedCertificate(item);
    }
  };

  const getPreviousCertificate = () => {
    if (!selectedCertificate) return null;

    const currentIndex = hackathons.findIndex(
      (item) => item.number === selectedCertificate.number
    );

    for (let i = currentIndex - 1; i >= 0; i--) {
      if (hackathons[i].image) {
        return hackathons[i];
      }
    }

    return null;
  };

  const getNextCertificate = () => {
    if (!selectedCertificate) return null;

    const currentIndex = hackathons.findIndex(
      (item) => item.number === selectedCertificate.number
    );

    for (let i = currentIndex + 1; i < hackathons.length; i++) {
      if (hackathons[i].image) {
        return hackathons[i];
      }
    }

    return null;
  };

  const previousCertificate = getPreviousCertificate();
  const nextCertificate = getNextCertificate();

  return (
    <>
      <section
        id="hackathons"
        className="relative overflow-hidden px-6 py-32 lg:px-10 lg:py-40"
      >
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <div className="theme-primary mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.3em]">
              <span className="h-px w-10 bg-[var(--theme-primary)]" />
              Hackathons
            </div>

            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <h2 className="theme-text max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Building under{" "}
                <span className="bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-secondary)] bg-clip-text text-transparent">
                  pressure.
                </span>
              </h2>

              <p className="theme-secondary-text max-w-sm text-sm leading-7 opacity-100 md:text-base">
                Hackathons push me to think fast, collaborate better and turn
                ideas into working products.
              </p>
            </div>
          </motion.div>

          {/* Cards */}
          <div className="grid gap-6 lg:grid-cols-3">
            <AnimatePresence initial={false}>
              {visibleHackathons.map((item, index) => {
                const Icon = item.icon;
                const isExtra = index >= INITIAL_VISIBLE;

                return (
                  <motion.article
                    key={item.number}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{
                      duration: 0.7,
                      delay: isExtra
                        ? (index - INITIAL_VISIBLE) * 0.08
                        : index * 0.08,
                    }}
                    className="glass-card group relative overflow-hidden rounded-3xl p-7 md:p-8"
                  >
                    {/* Background glow */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        -right-24
                        -top-24
                        h-56
                        w-56
                        rounded-full
                        bg-[var(--theme-primary)]
                        opacity-0
                        blur-3xl
                        transition-all
                        duration-700
                        group-hover:opacity-10
                      "
                    />

                    <div className="relative">
                      {/* Top */}
                      <div className="flex items-start justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-glow)] text-[var(--theme-primary)] transition-transform duration-300 group-hover:-translate-y-1">
                          <Icon size={20} />
                        </div>

                        <span className="theme-subtle font-mono text-xs">
                          /{item.number}
                        </span>
                      </div>

                      {/* Type */}
                      <p className="theme-primary mt-8 font-mono text-[10px] uppercase tracking-[0.2em]">
                        {item.type}
                      </p>

                      {/* Title */}
                      <h3 className="theme-text mt-3 text-xl font-bold leading-tight transition-colors duration-300 group-hover:text-[var(--theme-primary)]">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="theme-secondary-text mt-4 text-sm leading-7 opacity-100">
                        {item.description}
                      </p>

                      {/* Tags */}
                      <div className="mt-7 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="
                              rounded-full
                              border
                              border-[var(--theme-border)]
                              bg-[var(--theme-glow)]
                              px-3
                              py-1.5
                              font-mono
                              text-[9px]
                              uppercase
                              tracking-[0.12em]
                              text-[var(--theme-text-secondary)]
                            "
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Certificate */}
                      {item.image && (
                        <button
                          type="button"
                          onClick={() => openCertificate(item)}
                          className="
                            mt-7
                            w-full
                            overflow-hidden
                            rounded-2xl
                            border
                            border-[var(--theme-border)]
                            bg-[var(--theme-glow)]
                            text-left
                            transition-all
                            duration-300
                            hover:border-[var(--theme-primary)]
                          "
                        >
                          <div className="relative">
                            <img
                              src={item.image}
                              alt={`${item.title} participation certificate`}
                              className="
                                h-44
                                w-full
                                object-cover
                                object-top
                                opacity-90
                                transition-all
                                duration-500
                                group-hover:opacity-100
                                group-hover:scale-[1.02]
                              "
                            />

                            <div
                              className="
                                absolute
                                inset-0
                                flex
                                items-end
                                bg-gradient-to-t
                                from-black/60
                                via-transparent
                                to-transparent
                                p-4
                              "
                            >
                              <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.15em] text-white backdrop-blur-md">
                                View Certificate
                              </span>
                            </div>
                          </div>
                        </button>
                      )}

                      {/* Bottom */}
                      <div className="mt-8 flex items-center justify-between border-t border-[var(--theme-border)] pt-5">
                        <span className="theme-muted text-xs">
                          Learn • Build • Ship
                        </span>

                        <ArrowUpRight
                          size={16}
                          className="theme-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                        />
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Show More / Show Less */}
          {hasMore && (
            <div
              ref={showMoreButtonRef}
              className="mt-12 flex flex-col items-center"
            >
              <button
                type="button"
                onClick={handleToggle}
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-[var(--theme-border)]
                  bg-[var(--theme-glow)]
                  px-6
                  py-3
                  text-sm
                  font-medium
                  text-[var(--theme-text)]
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-[var(--theme-primary)]
                  hover:text-[var(--theme-primary)]
                "
              >
                <span>{showAll ? "Show Less" : "Show More"}</span>

                {showAll ? (
                  <ChevronUp
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5"
                  />
                ) : (
                  <ChevronDown
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-y-0.5"
                  />
                )}
              </button>

              {/* Counter */}
              <span className="theme-muted mt-4 font-mono text-[10px] uppercase tracking-[0.2em]">
                {showAll
                  ? `${hackathons.length} / ${hackathons.length}`
                  : `${INITIAL_VISIBLE} / ${hackathons.length}`}
              </span>
            </div>
          )}
        </div>
      </section>

      {/* Certificate Fullscreen Viewer */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md md:p-8"
            onClick={() => setSelectedCertificate(null)}
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setSelectedCertificate(null)}
              className="
                absolute
                right-5
                top-5
                z-20
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-black/40
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-[var(--theme-primary)]
                hover:text-[var(--theme-primary)]
              "
              aria-label="Close certificate viewer"
            >
              <X size={20} />
            </button>

            {/* Previous */}
            {previousCertificate && (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setSelectedCertificate(previousCertificate);
                }}
                className="
                  absolute
                  left-4
                  top-1/2
                  z-20
                  flex
                  h-11
                  w-11
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-black/40
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-[var(--theme-primary)]
                  hover:text-[var(--theme-primary)]
                  md:left-8
                "
                aria-label="Previous certificate"
              >
                <ArrowLeft size={20} />
              </button>
            )}

            {/* Next */}
            {nextCertificate && (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setSelectedCertificate(nextCertificate);
                }}
                className="
                  absolute
                  right-4
                  top-1/2
                  z-20
                  flex
                  h-11
                  w-11
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-black/40
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-[var(--theme-primary)]
                  hover:text-[var(--theme-primary)]
                  md:right-8
                "
                aria-label="Next certificate"
              >
                <ArrowRight size={20} />
              </button>
            )}

            {/* Certificate */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative flex max-h-[92vh] max-w-[92vw] items-center justify-center"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={selectedCertificate.image}
                alt={`${selectedCertificate.title} certificate`}
                className="max-h-[88vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Hackathons;