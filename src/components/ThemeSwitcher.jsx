import { useEffect, useState } from "react";

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

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <div className="relative">
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        aria-label="Select theme"
        className="cursor-pointer appearance-none rounded-full border border-white/10 bg-white/5 px-4 py-2.5 pr-9 text-sm text-white backdrop-blur-md outline-none transition-all duration-300 hover:border-purple-500/50"
      >
        {themes.map((item) => (
          <option
            key={item.name}
            value={item.name}
            className="bg-zinc-900 text-white"
          >
            {item.icon} {item.label}
          </option>
        ))}
      </select>

      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400">
        ▼
      </span>
    </div>
  );
}

export default ThemeSwitcher;