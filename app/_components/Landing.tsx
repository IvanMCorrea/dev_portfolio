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
    <header className="flex w-full gap-20 justify-center animate-fade-up animate-once">
      <div className="relative w-[25%] max-sm:hidden">
        <Image src="/assets/prog.svg" alt="Working Developer" fill priority />
      </div>
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
              <a
                href={item.url}
                target="_blanck"
                title={item.name}
                key={item.name}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className={`h-12 w-12 hover:scale-110 ${item.color}`}
                />
              </a>
            ))}
        </div>
        <a
          href="assets/cv/CV.docx.pdf"
          download="C.V. Ivan Correa.pdf"
          className="font-semibold bg-gradient-to-r from-fuchsia-500 to-pink-500 py-2 px-4 rounded-md mb-2 text-center uppercase hover:scale-110 transition-all ease-in-out duration-300"
        >
          Download Resume
        </a>
      </section>
    </header>
  );
};

export default Landing;
