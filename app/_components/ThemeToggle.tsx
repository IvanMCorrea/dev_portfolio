"use client";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export function ThemeToggle({
  expanded,
  appbar,
}: {
  expanded: Boolean;
  appbar?: Boolean;
}) {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className={`${appbar && "flex flex-col w-20 text-center"}`}>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "dark" && (
          <FontAwesomeIcon
            icon={faSun}
            className="text-neutral-500 dark:text-neutral-100 h-5 w-5"
          />
        )}
        {theme === "light" && (
          <FontAwesomeIcon
            icon={faMoon}
            className="text-neutral-500 dark:text-neutral-100 h-5 w-5"
          />
        )}
      </button>
      {(theme === "dark" && expanded) || (theme === "dark" && appbar) ? (
        <span className={`${!appbar && "pl-3"} ${appbar && "text-sm"}`}>
          Light mode
        </span>
      ) : null}
      {(theme === "light" && expanded) || (theme === "light" && appbar) ? (
        <span className={`${!appbar && "pl-3"} ${appbar && "text-sm"}`}>
          Dark mode
        </span>
      ) : null}
      <span className="sr-only">Toggle theme</span>
    </div>
  );
}
