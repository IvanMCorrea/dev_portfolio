import Image from "next/image";
import React from "react";
import { kanit } from "../assets/font";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Landing = () => {
  const links = [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/ivanmcorrea/",
      icon: faLinkedin,
      color: "text-[#0A66C2]",
    },
    {
      name: "Github",
      url: "https://github.com/IvanMCorrea",
      icon: faGithub,
      color: "",
    },
  ];
  return (
    <header className="flex w-full gap-20 justify-center">
      <Image
        src="/assets/prog.svg"
        alt="Working Developer"
        width={250}
        height={250}
        priority
      />
      <section className="max-w-md flex flex-col gap-2">
        <h1
          className={`${kanit.className} text-4xl md:text-5xl font-semibold bg-gradient-to-r from-gray-700 to-slate-700 dark:from-slate-300 dark:to-zinc-200 bg-clip-text text-transparent`}
        >
          Ivan Correa
        </h1>
        <span
          className={`${kanit.className} text-2xl md:text-3xl bg-gradient-to-r from-gray-700 to-slate-700 dark:from-slate-300 dark:to-zinc-200 bg-clip-text text-transparent`}
        >
          Full Stack Developer
        </span>
        <div className="flex gap-3 items-center">
          {links &&
            links[0] &&
            links.map((item) => (
              <a href={item.url} target="_blanck" title={item.name}>
                <FontAwesomeIcon
                  icon={item.icon}
                  className={`h-12 w-12 hover:scale-110 ${item.color}`}
                />
              </a>
            ))}
        </div>
      </section>
    </header>
  );
};

export default Landing;
