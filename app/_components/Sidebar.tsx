"use client";
import React, { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { SidebarToggle } from "./SidebarToggle";

function Sidebar() {
  const [expanded, setExpanded] = useState<Boolean>(false);
  const sidebarWidth = expanded ? "w-64" : "w-18";

  return (
    <aside
      className={`fixed flex left-0 top-0 h-screen p-5 flex-col ${sidebarWidth} bg-neutral-300 dark:bg-neutral-800 items-start sidebar`}
    >
      <SidebarToggle expanded={expanded} setExpanded={setExpanded} />
      <ThemeToggle expanded={expanded} />
    </aside>
  );
}

export default Sidebar;
