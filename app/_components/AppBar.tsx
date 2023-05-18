"use client";
import React, { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

function AppBar() {
  const [expanded, setExpanded] = useState<Boolean>(false);

  return (
    <section
      className={`fixed flex justify-center items-center bottom-5 w-5/6 h-14 px-5 bg-neutral-300 dark:bg-neutral-800 appbar`}
    >
      <ThemeToggle expanded={expanded} />
    </section>
  );
}

export default AppBar;
