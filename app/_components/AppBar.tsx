"use client";
import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function AppBar() {
  const menu = [{ id: "Home", link: "#", icon: faHome }];
  return (
    <section
      className={`fixed flex justify-center items-center appbar bottom-5 w-screen`}
    >
      <div className="flex justify-center items-center px-5 bg-neutral-300 dark:bg-neutral-800 w-5/6 h-14 rounded-3xl">
        <ThemeToggle expanded={false} />
        {menu &&
          menu[0] &&
          menu.map((item) => (
            <Link href={item.link} key={item.id}>
              <FontAwesomeIcon
                icon={item.icon}
                className="text-neutral-500 dark:text-neutral-100"
                size="lg"
              />
            </Link>
          ))}
      </div>
    </section>
  );
}

export default AppBar;
