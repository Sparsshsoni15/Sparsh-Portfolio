import { useEffect, useState } from "react";

const themes = [
  {
    name: "Default",
    value: "default",
    icon: "◉",
  },
  {
    name: "Retro",
    value: "retro",
    icon: "▣",
  },
  {
    name: "Cyberpunk",
    value: "cyberpunk",
    icon: "⚡",
  },
  {
    name: "Valentine",
    value: "valentine",
    icon: "♥",
  },
  {
    name: "Aqua",
    value: "aqua",
    icon: "◈",
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
        className="
          cursor-pointer
          appearance-none
          rounded-full
          border border-white/10
          bg-white/[0.04]
          px-5 py-2.5
          pr-10
          text-sm
          text-zinc-300
          outline-none
          backdrop-blur-md
          transition-all
          duration-300
          hover:border-purple-500/40
          hover:bg-purple-500/10
          focus:border-purple-500/50
        "
        aria-label="Choose website theme"
      >
        {themes.map((item) => (
          <option
            key={item.value}
            value={item.value}
            className="bg-zinc-950 text-white"
          >
            {item.icon} {item.name}
          </option>
        ))}
      </select>

      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-purple-400">
        ▼
      </span>
    </div>
  );
}

export default ThemeSwitcher;