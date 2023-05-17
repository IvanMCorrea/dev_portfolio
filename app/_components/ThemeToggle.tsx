import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="w-6 h-6 mt-5"
    >
      {theme === "dark" && (
        <FontAwesomeIcon icon={faSun} className="text-neutral-100" size="xl" />
      )}
      {theme === "light" && (
        <FontAwesomeIcon icon={faMoon} className="text-neutral-950" size="xl" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
