import { useEffect, useState } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";

const themes = ["light", "dark"];

const ThemeToggle = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <div className="inline-flex items-center p-[1px] rounded-3xl  bg-emphasis dark:bg-emphasis-dark">
      {themes.map((t) => {
        const checked = t === theme;
        return (
          <button
            key={t}
            className={`cursor-pointer rounded-3xl p-2 ${
              checked ? "bg-primary text-zinc-900" : ""
            }`}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {t === "light" ? (
              <IoSunny className="h-5 w-5" />
            ) : (
              <IoMoon className="h-5 w-5" />
            )}
          </button>
        );
      })}
    </div>
  ) : (
    <div />
  );
};

export default ThemeToggle;
