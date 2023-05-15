"use client";

import {useTheme} from "next-themes";
import Image from "next/image";


export function ThemeToggle() {
  const {setTheme, theme} = useTheme();

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === 'dark' && <Image
          src="/sun.svg"
          alt="toggle light mode"
          width={24}
          height={24}
        />}
      {theme === 'light' && <Image
          src="/moon.svg"
          alt="toggle dark mode"
          width={24}
          height={24}
        />}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}