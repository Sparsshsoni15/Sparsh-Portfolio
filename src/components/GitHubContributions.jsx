import {
  ArrowUpRight,
  ExternalLink,
  GitBranch,
} from "lucide-react";

import { motion } from "motion/react";

import { useEffect, useMemo, useState } from "react";

const GITHUB_USERNAME = "Sparsshsoni15";

const API_URL = `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}`;

function GitHubContributions() {
  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);

  // =========================================================
  // FETCH GITHUB CONTRIBUTION DATA
  // =========================================================

  useEffect(() => {
    let cancelled = false;

    const loadContributions = async () => {
      try {
        const response = await fetch(API_URL, {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(
            "Failed to load GitHub contributions"
          );
        }

        const data = await response.json();

        if (!cancelled) {
          const allContributions = Array.isArray(
            data.contributions
          )
            ? data.contributions
            : [];

          const sorted = [...allContributions].sort(
            (a, b) =>
              new Date(a.date).getTime() -
              new Date(b.date).getTime()
          );

          setContributions(sorted);
          setLastUpdated(new Date());
        }
      } catch (error) {
        console.error(
          "GitHub Contributions Error:",
          error
        );

        if (!cancelled) {
          setContributions([]);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    // Initial fetch
    loadContributions();

    // Refresh every 5 minutes
    const interval = setInterval(
      loadContributions,
      5 * 60 * 1000
    );

    // Refresh when tab becomes visible
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        loadContributions();
      }
    };

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange
    );

    // Refresh when window gets focus
    const handleFocus = () => {
      loadContributions();
    };

    window.addEventListener("focus", handleFocus);

    return () => {
      cancelled = true;

      clearInterval(interval);

      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );

      window.removeEventListener(
        "focus",
        handleFocus
      );
    };
  }, []);

  // =========================================================
  // BUILD GITHUB STYLE CALENDAR
  //
  // 7 rows:
  // Sunday
  // Monday
  // Tuesday
  // Wednesday
  // Thursday
  // Friday
  // Saturday
  //
  // Every column = one week
  // =========================================================

  const calendar = useMemo(() => {
    if (!contributions.length) {
      return {
        weeks: [],
        visibleTotal: 0,
      };
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Last 365 days including today
    const oneYearAgo = new Date(today);

    oneYearAgo.setDate(
      oneYearAgo.getDate() - 364
    );

    // Only actual dates from last 365 days
    const latestDays = contributions.filter((day) => {
      const date = new Date(
        `${day.date}T00:00:00`
      );

      return (
        date >= oneYearAgo &&
        date <= today
      );
    });

    if (!latestDays.length) {
      return {
        weeks: [],
        visibleTotal: 0,
      };
    }

    // Fast lookup
    const contributionMap = new Map(
      latestDays.map((day) => [
        day.date,
        day,
      ])
    );

    // Sunday of first visible week
    const firstDate = new Date(
      `${latestDays[0].date}T00:00:00`
    );

    const startDate = new Date(firstDate);

    startDate.setDate(
      startDate.getDate() -
        startDate.getDay()
    );

    // Saturday of current week
    const endDate = new Date(today);

    endDate.setDate(
      endDate.getDate() +
        (6 - endDate.getDay())
    );

    // Build every calendar day
    const allDays = [];

    const cursor = new Date(startDate);

    while (cursor <= endDate) {
      const year = cursor.getFullYear();

      const month = String(
        cursor.getMonth() + 1
      ).padStart(2, "0");

      const day = String(
        cursor.getDate()
      ).padStart(2, "0");

      const dateString =
        `${year}-${month}-${day}`;

      const existing =
        contributionMap.get(dateString);

      allDays.push(
        existing || {
          date: dateString,
          count: 0,
          level: 0,
        }
      );

      cursor.setDate(
        cursor.getDate() + 1
      );
    }

    // Split into Sunday -> Saturday weeks
    const weeks = [];

    for (
      let i = 0;
      i < allDays.length;
      i += 7
    ) {
      weeks.push(
        allDays.slice(i, i + 7)
      );
    }

    // Real contribution total
    const visibleTotal =
      latestDays.reduce(
        (sum, day) =>
          sum + Number(day.count || 0),
        0
      );

    return {
      weeks,
      visibleTotal,
    };
  }, [contributions]);

  // =========================================================
  // MONTH LABELS
  //
  // IMPORTANT:
  // Month labels use the EXACT SAME column index
  // as the contribution grid.
  // =========================================================

  const monthLabels = useMemo(() => {
    if (!calendar.weeks.length) {
      return [];
    }

    const labels = [];

    calendar.weeks.forEach(
      (week, weekIndex) => {
        if (!week.length) return;

        // Find the 1st day of a month inside this week
        const monthStart = week.find((day) => {
          const date = new Date(
            `${day.date}T00:00:00`
          );

          return date.getDate() === 1;
        });

        if (!monthStart) return;

        const date = new Date(
          `${monthStart.date}T00:00:00`
        );

        const key =
          `${date.getFullYear()}-${date.getMonth()}`;

        // Prevent duplicates
        if (
          labels.some(
            (item) => item.key === key
          )
        ) {
          return;
        }

        labels.push({
          key,
          index: weekIndex,
          label: date.toLocaleString(
            "en-US",
            {
              month: "short",
            }
          ),
        });
      }
    );

    return labels;
  }, [calendar.weeks]);

  // =========================================================
  // CONTRIBUTION COLORS
  // =========================================================

  const getLevelClass = (level) => {
    switch (Number(level)) {
      case 1:
        return "bg-[var(--theme-primary)] opacity-25";

      case 2:
        return "bg-[var(--theme-primary)] opacity-45";

      case 3:
        return "bg-[var(--theme-primary)] opacity-70";

      case 4:
        return "bg-[var(--theme-primary)] opacity-100";

      default:
        return "bg-[var(--theme-glow)] opacity-100";
    }
  };

  // =========================================================
  // DATE FORMAT
  // =========================================================

  const formatDate = (dateString) => {
    const date = new Date(
      `${dateString}T00:00:00`
    );

    return date.toLocaleDateString(
      "en-US",
      {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      }
    );
  };

  // =========================================================
  // MAP SIZE
  //
  // These values are ONLY for making the map larger.
  // Month labels and cells use the same grid columns.
  // =========================================================

  const CELL_SIZE = 16;
  const CELL_GAP = 5;

  const gridTemplateColumns = `repeat(${Math.max(
    calendar.weeks.length,
    53
  )}, ${CELL_SIZE}px)`;

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <section
      id="contributions"
      className="relative overflow-hidden px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* =====================================================
            HEADING
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-10"
        >
          <div className="theme-primary mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.3em]">
            <span className="h-px w-10 bg-[var(--theme-primary)]" />
            GitHub Contributions
          </div>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="theme-text text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Building{" "}
                <span className="bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-secondary)] bg-clip-text text-transparent">
                  consistently.
                </span>
              </h2>

              <p className="theme-secondary-text mt-5 max-w-2xl text-sm leading-7 opacity-100 md:text-base">
                A real-time snapshot of my coding
                activity and consistency throughout
                the year.
              </p>
            </div>

            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit items-center gap-2 rounded-xl border border-[var(--theme-border)] px-4 py-2.5 text-sm font-semibold text-[var(--theme-text)] transition-all duration-300 hover:border-[var(--theme-primary)] hover:text-[var(--theme-primary)]"
            >
              <GitBranch size={16} />

              GitHub Profile

              <ExternalLink
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </motion.div>

        {/* =====================================================
            CONTRIBUTION CARD
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
          }}
          className="glass-card overflow-hidden rounded-3xl p-6 md:p-8"
        >

          {/* ===================================================
              STATS
          =================================================== */}

          <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

            <div>
              <p className="theme-muted text-xs uppercase tracking-[0.2em]">
                Last 12 months
              </p>

              <h3 className="theme-text mt-2 text-2xl font-bold">
                {loading
                  ? "Loading..."
                  : `${calendar.visibleTotal} contributions`}
              </h3>

              {lastUpdated && !loading && (
                <p className="theme-muted mt-1 text-[10px]">
                  Live data · Updated{" "}
                  {lastUpdated.toLocaleTimeString(
                    [],
                    {
                      hour: "2-digit",
                      minute: "2-digit",
                    }
                  )}
                </p>
              )}
            </div>

            {/* Legend */}

            <div className="flex items-center gap-2">
              <span className="theme-muted text-xs">
                Less
              </span>

              {[0, 1, 2, 3, 4].map(
                (level) => (
                  <span
                    key={level}
                    className={`h-3.5 w-3.5 rounded-[4px] ${getLevelClass(
                      level
                    )}`}
                  />
                )
              )}

              <span className="theme-muted text-xs">
                More
              </span>
            </div>
          </div>

          {/* ===================================================
              HEATMAP
          =================================================== */}

          <div className="overflow-x-auto pb-4">

            <div className="min-w-[1120px]">

              {/* =================================================
                  MONTH LABELS

                  SAME GRID AS CONTRIBUTION COLUMNS
              ================================================= */}

              <div className="mb-3 flex">

                {/* Empty space for weekday labels */}

                <div className="w-7 shrink-0" />

                <div
                  className="grid"
                  style={{
                    gridTemplateColumns,
                    columnGap: `${CELL_GAP}px`,
                  }}
                >
                  {calendar.weeks.map(
                    (_, weekIndex) => {
                      const month =
                        monthLabels.find(
                          (item) =>
                            item.index ===
                            weekIndex
                        );

                      return (
                        <div
                          key={`month-${weekIndex}`}
                          className="relative h-5"
                        >
                          {month && (
                            <span className="absolute left-0 whitespace-nowrap text-[11px] font-medium text-[var(--theme-text-muted)]">
                              {month.label}
                            </span>
                          )}
                        </div>
                      );
                    }
                  )}
                </div>
              </div>

              {/* =================================================
                  GRID
              ================================================= */}

              <div className="flex">

                {/* =================================================
                    WEEKDAY LABELS
                ================================================= */}

                <div
                  className="mr-2 flex w-7 shrink-0 flex-col justify-between"
                  style={{
                    height: `${7 * CELL_SIZE + 6 * CELL_GAP}px`,
                  }}
                >
                  <span className="theme-muted text-[9px]">
                    Sun
                  </span>

                  <span className="theme-muted text-[9px]">
                    Tue
                  </span>

                  <span className="theme-muted text-[9px]">
                    Thu
                  </span>

                  <span className="theme-muted text-[9px]">
                    Sat
                  </span>
                </div>

                {/* =================================================
                    CONTRIBUTION COLUMNS
                ================================================= */}

                <div
                  className="grid"
                  style={{
                    gridTemplateColumns,
                    columnGap: `${CELL_GAP}px`,
                  }}
                >
                  {loading ? (
                    Array.from({
                      length: 53,
                    }).map(
                      (_, weekIndex) => (
                        <div
                          key={weekIndex}
                          className="flex flex-col"
                          style={{
                            rowGap: `${CELL_GAP}px`,
                          }}
                        >
                          {Array.from({
                            length: 7,
                          }).map(
                            (_, dayIndex) => (
                              <div
                                key={dayIndex}
                                style={{
                                  width: `${CELL_SIZE}px`,
                                  height: `${CELL_SIZE}px`,
                                }}
                                className="animate-pulse rounded-[4px] bg-[var(--theme-glow)]"
                              />
                            )
                          )}
                        </div>
                      )
                    )
                  ) : calendar.weeks.length > 0 ? (
                    calendar.weeks.map(
                      (
                        week,
                        weekIndex
                      ) => (
                        <div
                          key={`week-${weekIndex}`}
                          className="flex flex-col"
                          style={{
                            rowGap: `${CELL_GAP}px`,
                          }}
                        >
                          {week.map(
                            (day) => (
                              <motion.div
                                key={day.date}
                                initial={{
                                  opacity: 0,
                                  scale: 0.65,
                                }}
                                whileInView={{
                                  opacity: 1,
                                  scale: 1,
                                }}
                                viewport={{
                                  once: true,
                                  amount: 0.5,
                                }}
                                transition={{
                                  duration: 0.15,
                                  delay:
                                    weekIndex *
                                    0.008,
                                }}
                                title={`${formatDate(
                                  day.date
                                )} — ${
                                  day.count
                                } contribution${
                                  Number(
                                    day.count
                                  ) === 1
                                    ? ""
                                    : "s"
                                }`}
                                style={{
                                  width: `${CELL_SIZE}px`,
                                  height: `${CELL_SIZE}px`,
                                }}
                                className={`
                                  cursor-pointer
                                  rounded-[4px]
                                  transition-all
                                  duration-200
                                  hover:scale-125
                                  hover:ring-2
                                  hover:ring-[var(--theme-primary)]
                                  hover:ring-offset-1
                                  hover:ring-offset-[var(--theme-bg)]
                                  ${getLevelClass(
                                    day.level
                                  )}
                                `}
                              />
                            )
                          )}
                        </div>
                      )
                    )
                  ) : (
                    <div className="theme-secondary-text py-4 text-sm">
                      GitHub contribution
                      data is currently
                      unavailable.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* ===================================================
              BOTTOM
          =================================================== */}

          <div className="mt-8 flex flex-col justify-between gap-4 border-t border-[var(--theme-border)] pt-6 sm:flex-row sm:items-center">

            <p className="theme-muted text-xs">
              Contributions include commits,
              pull requests, issues and other
              GitHub activity.
            </p>

            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className="theme-primary inline-flex items-center gap-1.5 text-xs font-semibold transition-opacity hover:opacity-70"
            >
              View on GitHub
              <ArrowUpRight size={13} />
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

export default GitHubContributions;