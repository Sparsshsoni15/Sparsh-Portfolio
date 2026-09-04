import { useEffect, useState } from "react";

const themes = [
  { name: "default", label: "Default", icon: "◐" },
  { name: "retro", label: "Retro", icon: "◈" },
  { name: "cyberpunk", label: "Cyberpunk", icon: "☢" },
  { name: "valentine", label: "Valentine", icon: "♥" },
  { name: "aqua", label: "Aqua", icon: "≈" },
];

function ThemeSwitcher() {
  const [theme, setTheme] = useState("default");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const savedTheme =
      localStorage.getItem("portfolio-theme") || "default";

    setTheme(savedTheme);

    document.documentElement.setAttribute(
      "data-theme",
      savedTheme
    );
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme
    );

    localStorage.setItem(
      "portfolio-theme",
      theme
    );
  }, [theme]);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    setOpen(false);
  };

  const currentTheme =
    themes.find((item) => item.name === theme) || themes[0];

  return (
    <div className="relative">
      {/* Theme Button */}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="
          flex items-center gap-2
          rounded-full
          px-4 py-2.5
          text-xs font-semibold
          uppercase tracking-[0.12em]
          transition-all duration-300
          focus:outline-none
        "
        style={{
          color: "var(--theme-text)",
          background: "var(--theme-switcher-bg)",
          border: "1px solid var(--theme-primary)",
          boxShadow: "0 0 18px var(--theme-glow)",
        }}
      >
        <span className="text-sm">
          {currentTheme.icon}
        </span>

        <span>
          {currentTheme.label}
        </span>

        <svg
          width="11"
          height="11"
          viewBox="0 0 2048 2048"
          fill="currentColor"
          className={`
            ml-1
            opacity-80
            transition-transform duration-300
            ${open ? "rotate-180" : ""}
          `}
          aria-hidden="true"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z" />
        </svg>
      </button>

      {/* Dropdown */}

      {open && (
        <div
          className="
            absolute
            right-0
            top-full
            z-50
            mt-2
            w-52
            overflow-hidden
            rounded-2xl
            p-2
          "
          style={{
            background: "var(--theme-dropdown-bg)",
            border: "1px solid var(--theme-border-strong)",
            boxShadow:
              "0 15px 45px rgba(0,0,0,0.18), 0 0 30px var(--theme-glow)",
          }}
          role="listbox"
        >
          {themes.map((item) => {
            const isActive = theme === item.name;

            return (
              <button
                key={item.name}
                type="button"
                role="option"
                aria-selected={isActive}
                onClick={() =>
                  handleThemeChange(item.name)
                }
                className="
                  flex w-full
                  items-center gap-3
                  rounded-xl
                  px-3 py-2.5
                  text-left text-sm
                  transition-all duration-200
                "
                style={{
                  color: isActive
                    ? "var(--theme-active-text)"
                    : "var(--theme-text)",
                  background: isActive
                    ? "var(--theme-primary)"
                    : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background =
                      "var(--theme-surface-hover)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background =
                      "transparent";
                  }
                }}
              >
                <span className="w-5 text-center">
                  {item.icon}
                </span>

                <span>{item.label}</span>

                {isActive && (
                  <span className="ml-auto text-xs">
                    ✓
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ThemeSwitcher;