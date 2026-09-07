import { useEffect, useLayoutEffect, useRef, useState } from "react";

import {
  ArrowUpRight,
  Award,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const certificates = [
  {
    title: "Machine Learning and Applied AI Internship 2026",
    issuer: "IBM SkillsBuild",
    date: "30 August 2026",
    image: "/certificates/ibm-ml-applied-ai-internship-2026.png",
    link: "#",
    verified: false,
  },

  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "29 August 2026",
    image: "/certificates/ibm-ai-fundamentals.png",
    link:
      "https://www.credly.com/badges/58c83d82-569c-4beb-8394-25ae0c13bc87",
    verified: true,
  },

  {
    title: "Generative AI in Action",
    issuer: "IBM SkillsBuild",
    date: "29 August 2026",
    image: "/certificates/ibm-generative-ai.png",
    link:
      "https://www.credly.com/badges/dcff0034-79ec-4af5-9418-a9db5c493ab8",
    verified: true,
  },

  {
    title: "Make Agentic AI Work for You",
    issuer: "IBM SkillsBuild",
    date: "29 August 2026",
    image: "/certificates/ibm-agentic-ai.png",
    link: "https://www.credly.com/go/c3urvNsH",
    verified: true,
  },

  {
    title: "JavaScript Algorithms & Data Structures V7",
    issuer: "freeCodeCamp",
    date: "13 June 2026",
    image: "/certificates/freecodecamp-javascript.png",
    link:
      "https://www.freecodecamp.org/certification/sparsshsoni15/javascript-algorithms-and-data-structures",
    verified: true,
  },

  {
    title: "Responsive Web Design V8",
    issuer: "freeCodeCamp",
    date: "13 June 2026",
    image: "/certificates/freecodecamp-responsive-web-design.png",
    link:
      "https://www.freecodecamp.org/certification/sparsshsoni15/responsive-web-design",
    verified: true,
  },

  {
    title: "TCS iON Career Edge - IT Primer",
    issuer: "TCS iON",
    date: "21 June 2026",
    image: "/certificates/tcs-ion-career-edge.png",
    link: "#",
    verified: false,
  },

  {
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    date: "18 March 2026",
    image: "/certificates/hackerrank-problem-solving-basic.png",
    link: "#",
    verified: false,
  },

  {
    title: "MATLAB Onramp",
    issuer: "MathWorks",
    date: "7 August 2026",
    image: "/certificates/matlab-onramp.png",
    link: "#",
    verified: false,
  },
];

const INITIAL_VISIBLE = 4;

export default function Achievements() {
  const [showAll, setShowAll] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const showMoreButtonRef = useRef(null);
  const previousButtonTopRef = useRef(null);

  const visibleCertificates = showAll
    ? certificates
    : certificates.slice(0, INITIAL_VISIBLE);

  const selectedCertificate =
    selectedIndex !== null ? certificates[selectedIndex] : null;

  const toggleShowAll = () => {
    if (showMoreButtonRef.current) {
      previousButtonTopRef.current =
        showMoreButtonRef.current.getBoundingClientRect().top;
    }

    setShowAll((current) => !current);
  };

  useLayoutEffect(() => {
    if (
      previousButtonTopRef.current === null ||
      !showMoreButtonRef.current
    ) {
      return;
    }

    const newButtonTop =
      showMoreButtonRef.current.getBoundingClientRect().top;

    const difference =
      newButtonTop - previousButtonTopRef.current;

    if (Math.abs(difference) > 0.5) {
      window.scrollBy(0, difference);
    }

    previousButtonTopRef.current = null;
  }, [showAll]);

  const showPrevious = () => {
    setSelectedIndex((current) => {
      if (current === null) return null;

      return current === 0
        ? certificates.length - 1
        : current - 1;
    });
  };

  const showNext = () => {
    setSelectedIndex((current) => {
      if (current === null) return null;

      return current === certificates.length - 1
        ? 0
        : current + 1;
    });
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  const CertificateCard = ({
    certificate,
    actualIndex,
    delay = 0,
  }) => {
    return (
      <motion.article
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 15,
        }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
          delay,
        }}
        className="group relative overflow-hidden rounded-3xl border transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
        style={{
          backgroundColor: "var(--theme-surface)",
          borderColor: "var(--theme-border)",
        }}
      >
        {/* Certificate Image */}
        <button
          type="button"
          onClick={() => setSelectedIndex(actualIndex)}
          className="relative block w-full cursor-zoom-in text-left"
          aria-label={`View ${certificate.title}`}
        >
          <div
            className="relative aspect-[4/3] overflow-hidden p-3 sm:p-4"
            style={{
              backgroundColor: "var(--theme-surface-hover)",
            }}
          >
            <img
              src={certificate.image}
              alt={certificate.title}
              draggable={false}
              className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.015]"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/30">
              <div className="flex h-12 w-12 scale-90 items-center justify-center rounded-full bg-white/90 text-black opacity-0 shadow-xl transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                <ArrowUpRight size={21} />
              </div>
            </div>

            {/* Number */}
            <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-xs font-bold text-white backdrop-blur-md">
              {String(actualIndex + 1).padStart(2, "0")}
            </div>
          </div>
        </button>

        {/* Certificate Details */}
        <div className="p-6 sm:p-7">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div className="flex items-center gap-2">
              <Award
                size={17}
                className="shrink-0 text-[var(--theme-primary)]"
              />

              <span
                className="text-xs font-semibold uppercase tracking-[0.16em]"
                style={{
                  color: "var(--theme-text-muted)",
                }}
              >
                {certificate.issuer}
              </span>
            </div>

            {certificate.verified && (
              <div
                className="flex shrink-0 items-center gap-1.5 text-xs font-medium text-emerald-500"
                title="Verified credential"
              >
                <CheckCircle2 size={15} />

                <span className="hidden sm:inline">
                  Verified
                </span>
              </div>
            )}
          </div>

          <h3
            className="text-lg font-semibold leading-snug sm:text-xl"
            style={{
              color: "var(--theme-text)",
            }}
          >
            {certificate.title}
          </h3>

          <div className="mt-4 flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
            <span
              style={{
                color: "var(--theme-text-muted)",
              }}
            >
              {certificate.date}
            </span>

            {certificate.link !== "#" && (
              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="inline-flex items-center gap-1.5 font-medium text-[var(--theme-primary)] transition-colors hover:text-[var(--theme-secondary)]"
              >
                Verify
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </motion.article>
    );
  };

  return (
    <section
      id="achievements"
      className="relative overflow-hidden py-24 sm:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full blur-[120px]"
          style={{
            backgroundColor: "var(--theme-primary)",
            opacity: 0.1,
          }}
        />

        <div
          className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full blur-[100px]"
          style={{
            backgroundColor: "var(--theme-primary)",
            opacity: 0.05,
          }}
        />

        <div
          className="absolute right-0 top-1/3 h-[350px] w-[350px] rounded-full blur-[100px]"
          style={{
            backgroundColor: "var(--theme-secondary)",
            opacity: 0.05,
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-6 sm:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span
                className="h-px w-10"
                style={{
                  backgroundColor: "var(--theme-primary)",
                }}
              />

              <span
                className="text-sm font-semibold uppercase tracking-[0.25em]"
                style={{
                  color: "var(--theme-primary)",
                }}
              >
                {String(certificates.length).padStart(2, "0")} Credentials
              </span>
            </div>

            <h2
              className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
              style={{
                color: "var(--theme-text)",
              }}
            >
              Achievements &amp;

              <span
                className="block"
                style={{
                  color: "var(--theme-primary)",
                }}
              >
                Certifications
              </span>
            </h2>
          </div>

          <p
            className="max-w-md text-sm leading-7 sm:text-base"
            style={{
              color: "var(--theme-text-muted)",
            }}
          >
            A collection of certifications and credentials earned
            through continuous learning, technical development and
            hands-on experience.
          </p>
        </div>

        {/* First 4 Certificates */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-2">
          {certificates
            .slice(0, INITIAL_VISIBLE)
            .map((certificate, index) => (
              <CertificateCard
                key={certificate.title}
                certificate={certificate}
                actualIndex={index}
              />
            ))}
        </div>

        {/* Stable scroll anchor */}
        <div
          ref={showMoreButtonRef}
          className="h-0"
          aria-hidden="true"
        />

        {/* Show More Button */}
        {!showAll && certificates.length > INITIAL_VISIBLE && (
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            className="mt-12 flex justify-center"
          >
            <motion.button
              type="button"
              onClick={toggleShowAll}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              aria-expanded={false}
              aria-controls="additional-certificates"
              className="group inline-flex items-center gap-3 rounded-full border px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:shadow-lg"
              style={{
                color: "var(--theme-text)",
                backgroundColor: "var(--theme-surface)",
                borderColor: "var(--theme-border)",
              }}
            >
              <span>
                Show More ({certificates.length - INITIAL_VISIBLE})
              </span>

              <ChevronDown
                size={18}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </motion.button>
          </motion.div>
        )}

        {/* Additional Certificates */}
        <AnimatePresence initial={false}>
          {showAll && (
            <motion.div
              id="additional-certificates"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-2"
            >
              {certificates
                .slice(INITIAL_VISIBLE)
                .map((certificate, index) => (
                  <CertificateCard
                    key={certificate.title}
                    certificate={certificate}
                    actualIndex={index + INITIAL_VISIBLE}
                    delay={index * 0.06}
                  />
                ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Show Less */}
        {showAll && certificates.length > INITIAL_VISIBLE && (
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.4,
            }}
            className="mt-12 flex justify-center"
          >
            <motion.button
              type="button"
              onClick={toggleShowAll}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              aria-expanded={true}
              aria-controls="additional-certificates"
              className="group inline-flex items-center gap-3 rounded-full border px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:shadow-lg"
              style={{
                color: "var(--theme-text)",
                backgroundColor: "var(--theme-surface)",
                borderColor: "var(--theme-border)",
              }}
            >
              <span>Show Less</span>

              <ChevronDown
                size={18}
                className="rotate-180 transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </motion.button>
          </motion.div>
        )}

        {/* Counter */}
        <div className="mt-5 text-center">
          <span
            className="text-xs"
            style={{
              color: "var(--theme-text-muted)",
            }}
          >
            Showing {visibleCertificates.length} of{" "}
            {certificates.length} certifications
          </span>
        </div>
      </div>

      {/* =====================================================
          FULLSCREEN CERTIFICATE VIEWER
          ===================================================== */}
      <AnimatePresence>
        {selectedCertificate && selectedIndex !== null && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-8"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6 sm:top-6"
              aria-label="Close certificate viewer"
            >
              <X size={22} />
            </button>

            {/* Previous */}
            {certificates.length > 1 && (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrevious();
                }}
                className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
                aria-label="Previous certificate"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            {/* Next */}
            {certificates.length > 1 && (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
                aria-label="Next certificate"
              >
                <ChevronRight size={24} />
              </button>
            )}

            {/* Viewer */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
              }}
              transition={{
                duration: 0.25,
              }}
              className="relative flex max-h-[92vh] max-w-[92vw] flex-col items-center"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative flex max-h-[80vh] max-w-[90vw] items-center justify-center overflow-hidden rounded-xl bg-white/5 shadow-2xl">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  draggable={false}
                  className="max-h-[80vh] max-w-[90vw] object-contain"
                />
              </div>

              {/* Viewer Info */}
              <div className="mt-5 max-w-2xl text-center">
                <h3 className="text-lg font-semibold text-white sm:text-xl">
                  {selectedCertificate.title}
                </h3>

                <p className="mt-1 text-sm text-white/60">
                  {selectedCertificate.issuer} •{" "}
                  {selectedCertificate.date}
                </p>

                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-white/40">
                  <span>
                    {selectedIndex + 1} / {certificates.length}
                  </span>

                  <span>•</span>

                  <span className="hidden sm:inline">
                    Use ← → to navigate · Esc to close
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}