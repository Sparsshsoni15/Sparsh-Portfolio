import { useEffect, useRef, useState } from "react";

const themes = [
  {
    name: "default",
    label: "Default",
    icon: "◐",
  },
  {
    name: "retro",
    label: "Retro",
    icon: "◈",
  },
  {
    name: "cyberpunk",
    label: "Cyberpunk",
    icon: "☢",
  },
  {
    name: "valentine",
    label: "Valentine",
    icon: "♥",
  },
  {
    name: "aqua",
    label: "Aqua",
    icon: "≈",
  },
];

function ThemeSwitcher() {
  const [theme, setTheme] = useState(
    localStorage.getItem("portfolio-theme") || "default"
  );

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectedTheme =
    themes.find((item) => item.name === theme) || themes[0];

  return (
    <div ref={dropdownRef} className="relative">
      {/* Theme Button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="Select theme"
        aria-expanded={open}
        className="theme-text theme-border theme-surface flex min-w-[170px] items-center justify-between gap-3 rounded-full border px-4 py-2.5 text-sm font-medium backdrop-blur-md outline-none transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--theme-primary)]"
      >
        <span className="flex items-center gap-2">
          <span className="text-base">{selectedTheme.icon}</span>
          <span>{selectedTheme.label}</span>
        </span>

        <span
          className={`theme-muted text-xs transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="theme-border theme-surface absolute right-0 top-full z-[100] mt-2 w-full min-w-[170px] overflow-hidden rounded-2xl border p-1.5 shadow-2xl backdrop-blur-xl">
          {themes.map((item) => {
            const isActive = theme === item.name;

            return (
              <button
                key={item.name}
                type="button"
                onClick={() => {
                  setTheme(item.name);
                  setOpen(false);
                }}
                className={`theme-text flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-all duration-200 ${
                  isActive
                    ? "bg-[var(--theme-primary)] text-white"
                    : "hover:bg-[var(--theme-surface-hover)]"
                }`}
              >
                <span className="text-base">{item.icon}</span>

                <span>{item.label}</span>

                {isActive && (
                  <span className="ml-auto text-xs text-white">✓</span>
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