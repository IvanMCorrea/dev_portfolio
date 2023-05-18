"use client";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export function ThemeToggle({ expanded }: { expanded: Boolean }) {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "dark" && (
        <FontAwesomeIcon
          icon={faSun}
          className="text-neutral-500 dark:text-neutral-100"
          size="xl"
        />
      )}
      {theme === "dark" && expanded && (
        <span className="pl-3">Illuminate your path</span>
      )}
      {theme === "light" && (
        <FontAwesomeIcon
          icon={faMoon}
          className="text-neutral-500 dark:text-neutral-100"
          size="xl"
        />
      )}
      {theme === "light" && expanded && (
        <span className="pl-3">Embrace the Dark</span>
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
