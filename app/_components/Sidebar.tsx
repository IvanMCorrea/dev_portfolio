"use client";
import React, { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { SidebarToggle } from "./SidebarToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileCode,
  faHome,
  faMicrochip,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function Sidebar() {
  const [expanded, setExpanded] = useState<Boolean>(false);
  const sidebarWidth = expanded ? "w-64" : "w-18";
  const menu = [
    { id: "Home", link: "#", icon: faHome },
    { id: "About", link: "#about", icon: faUser },
    { id: "Technologies", link: "#technologies", icon: faMicrochip },
    { id: "Projects", link: "#projects", icon: faFileCode },
  ];
  return (
    <aside
      className={`fixed flex left-0 top-0 h-screen px-5 py-10 flex-col ${sidebarWidth} bg-neutral-300 dark:bg-neutral-800 items-start justify-between sidebar z-50`}
    >
      <div>
        <SidebarToggle expanded={expanded} setExpanded={setExpanded} />
      </div>
      <div
        className={`flex flex-col grid grid-col 2 gap-5 ${
          !expanded && "items-center grid-col-1 "
        }`}
      >
        {menu &&
          menu[0] &&
          menu.map((item) => (
            <a href={item.link} key={item.id}>
              <FontAwesomeIcon
                icon={item.icon}
                className="text-neutral-500 dark:text-neutral-100 h-5 w-5"
              />
              {expanded && <span className="pl-3">{item.id}</span>}
            </a>
          ))}
      </div>
      <div>
        <ThemeToggle expanded={expanded} />
      </div>
    </aside>
  );
}

export default Sidebar;
