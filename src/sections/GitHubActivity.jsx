import { useEffect, useState } from "react";

import {
  Activity,
  ArrowUpRight,
  GitBranch,
  GitCommitHorizontal,
  Star,
} from "lucide-react";

import { motion } from "motion/react";

const GITHUB_USERNAME = "Sparsshsoni15";

function GitHubActivity() {
  const [events, setEvents] = useState([]);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const loadGithubData = async () => {
      try {
        const [eventsResponse, reposResponse] = await Promise.all([
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=6`
          ),
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
          ),
        ]);

        if (!eventsResponse.ok || !reposResponse.ok) {
          throw new Error("GitHub API request failed");
        }

        const eventsData = await eventsResponse.json();
        const reposData = await reposResponse.json();

        if (!cancelled) {
          setEvents(Array.isArray(eventsData) ? eventsData : []);
          setRepos(Array.isArray(reposData) ? reposData : []);
        }
      } catch (error) {
        console.error("GitHub API Error:", error);

        if (!cancelled) {
          setEvents([]);
          setRepos([]);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadGithubData();

    return () => {
      cancelled = true;
    };
  }, []);

  const formatEvent = (event) => {
    const repoName =
      event?.repo?.name?.split("/")[1] || "repository";

    switch (event?.type) {
      case "PushEvent":
        return {
          icon: GitCommitHorizontal,
          title: "Pushed code",
          description: `Updated ${repoName}`,
        };

      case "CreateEvent":
        return {
          icon: GitBranch,
          title: "Created",
          description: repoName,
        };

      case "WatchEvent":
        return {
          icon: Star,
          title: "Starred",
          description: repoName,
        };

      default:
        return {
          icon: Activity,
          title: "GitHub activity",
          description: repoName,
        };
    }
  };

  return (
    <section
      id="github"
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
            GitHub Activity
          </div>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="theme-text max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Code in{" "}
              <span className="bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-secondary)] bg-clip-text text-transparent">
                motion.
              </span>
            </h2>

            <p className="theme-secondary-text max-w-sm text-sm leading-7 opacity-100 md:text-base">
              A glimpse into my public GitHub activity, repositories and
              continuous building.
            </p>
          </div>
        </motion.div>

        {/* Main Grid */}
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Activity */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-3xl p-7 md:p-9"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="theme-primary font-mono text-[10px] uppercase tracking-[0.2em]">
                  Recent Activity
                </p>

                <h3 className="theme-text mt-2 text-2xl font-bold">
                  What I've been coding
                </h3>
              </div>

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--theme-border)] bg-[var(--theme-glow)] text-[var(--theme-primary)]">
                <Activity size={19} />
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {loading ? (
                <>
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="h-16 animate-pulse rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-glow)]"
                    />
                  ))}
                </>
              ) : events.length > 0 ? (
                events.slice(0, 5).map((event) => {
                  const activity = formatEvent(event);
                  const Icon = activity.icon;

                  return (
                    <div
                      key={event.id}
                      className="
                        flex
                        items-center
                        gap-4
                        rounded-2xl
                        border
                        border-[var(--theme-border)]
                        bg-[var(--theme-glow)]
                        p-4
                        transition-all
                        duration-300
                        hover:border-[var(--theme-border-strong)]
                      "
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[var(--theme-border)] text-[var(--theme-primary)]">
                        <Icon size={16} />
                      </div>

                      <div className="min-w-0">
                        <p className="theme-text text-sm font-semibold">
                          {activity.title}
                        </p>

                        <p className="theme-secondary-text mt-0.5 truncate text-xs opacity-100">
                          {activity.description}
                        </p>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="rounded-2xl border border-[var(--theme-border)] p-5">
                  <p className="theme-text text-sm font-semibold">
                    GitHub activity will appear here.
                  </p>

                  <p className="theme-secondary-text mt-2 text-sm leading-6 opacity-100">
                    Visit the profile below to explore repositories and
                    contributions.
                  </p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Repositories */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-3xl p-7 md:p-9"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="theme-primary font-mono text-[10px] uppercase tracking-[0.2em]">
                  Repositories
                </p>

                <h3 className="theme-text mt-2 text-2xl font-bold">
                  Recent work
                </h3>
              </div>

              <GitBranch
                size={22}
                className="theme-primary"
              />
            </div>

            <div className="mt-8 space-y-3">
              {loading ? (
                <>
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="h-14 animate-pulse rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-glow)]"
                    />
                  ))}
                </>
              ) : repos.length > 0 ? (
                repos.slice(0, 5).map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      gap-4
                      rounded-2xl
                      border
                      border-[var(--theme-border)]
                      bg-[var(--theme-glow)]
                      p-4
                      transition-all
                      duration-300
                      hover:border-[var(--theme-border-strong)]
                    "
                  >
                    <div className="min-w-0">
                      <p className="theme-text truncate text-sm font-semibold transition-colors group-hover:text-[var(--theme-primary)]">
                        {repo.name}
                      </p>

                      <div className="mt-1 flex items-center gap-3">
                        <span className="theme-muted text-[10px]">
                          {repo.language || "Code"}
                        </span>

                        <span className="theme-muted flex items-center gap-1 text-[10px]">
                          <Star size={10} />
                          {repo.stargazers_count}
                        </span>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={15}
                      className="theme-muted shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                ))
              ) : (
                <p className="theme-secondary-text text-sm opacity-100">
                  Repositories will appear here.
                </p>
              )}
            </div>

            {/* Profile button */}
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className="
                mt-6
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-2xl
                border
                border-[var(--theme-border-strong)]
                px-5
                py-3.5
                text-sm
                font-semibold
                text-[var(--theme-text)]
                transition-all
                duration-300
                hover:border-[var(--theme-primary)]
                hover:text-[var(--theme-primary)]
              "
            >
              <GitBranch size={17} />
              View GitHub Profile
              <ArrowUpRight size={15} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default GitHubActivity;