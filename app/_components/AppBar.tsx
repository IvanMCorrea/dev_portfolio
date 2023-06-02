import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faFileCode,
  faHome,
  faMicrochip,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function AppBar() {
  const menu = [
    { id: "Home", link: "#", icon: faHome },
    { id: "About", link: "#about", icon: faUser },
    { id: "Exp", link: "#experience", icon: faBriefcase },
    { id: "Tech", link: "#technologies", icon: faMicrochip },
    { id: "Projects", link: "#projects", icon: faFileCode },
  ];
  return (
    <section
      className={`fixed flex justify-center items-center appbar bottom-5 w-screen`}
    >
      <div className="flex justify-evenly items-center px-5 bg-neutral-100 dark:bg-neutral-800 w-5/6 h-20 rounded-3xl">
        {menu &&
          menu[0] &&
          menu.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              className="flex flex-col w-20 text-center"
            >
              <FontAwesomeIcon
                icon={item.icon}
                className="text-neutral-500 dark:text-neutral-100 mb-1"
                size="lg"
              />
              <span className="text-sm">{item.id}</span>
            </Link>
          ))}
        <ThemeToggle expanded={false} appbar={true} />
      </div>
    </section>
  );
}

export default AppBar;
