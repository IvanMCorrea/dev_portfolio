"use client";
import React, { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { SidebarToggle } from "./SidebarToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function Sidebar() {
  const [expanded, setExpanded] = useState<Boolean>(false);
  const sidebarWidth = expanded ? "w-64" : "w-18";
  const menu = [{ id: "Home", link: "#", icon: faHome }];
  return (
    <aside
      className={`fixed flex left-0 top-0 h-screen px-5 py-10 flex-col ${sidebarWidth} bg-neutral-300 dark:bg-neutral-800 items-start justify-between sidebar`}
    >
      <div>
        <SidebarToggle expanded={expanded} setExpanded={setExpanded} />
      </div>
      <div>
        {menu &&
          menu[0] &&
          menu.map((item) => (
            <Link href={item.link} key={item.id}>
              <FontAwesomeIcon
                icon={item.icon}
                className="text-neutral-500 dark:text-neutral-100"
                size="lg"
              />
              {expanded && <span className="pl-3">{item.id}</span>}
            </Link>
          ))}
      </div>
      <div>
        <ThemeToggle expanded={expanded} />
      </div>
    </aside>
  );
}

export default Sidebar;
