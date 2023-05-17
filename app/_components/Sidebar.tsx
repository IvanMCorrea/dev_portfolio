"use client";
import React, { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { SidebarToggle } from "./SidebarToggle";

function Sidebar() {
  const [expanded, setExpanded] = useState<Boolean>(false);
  const sidebarWidth = expanded ? "w-24" : "w-12";

  return (
    <aside
      className={`fixed flex left-0 top-0 h-screen py-5 px-3 flex-col ${sidebarWidth}`}
    >
      <SidebarToggle expanded={expanded} setExpanded={setExpanded} />
      <ThemeToggle />
    </aside>
  );
}

export default Sidebar;
