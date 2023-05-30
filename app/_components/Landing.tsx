import Image from "next/image";
import React from "react";
import github from "../../public/assets/github.svg";
import { kanit } from "../assets/font";

const Landing = () => {
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
          <a href="https://github.com/IvanMCorrea" target="_blanck">
            <Image
              src={github}
              alt="github"
              width={40}
              height={40}
              className="hover:scale-110 transition duration-300 ease-in-out"
            />
          </a>
          <a href="https://www.linkedin.com/in/ivanmcorrea/" target="_blanck">
            <img
              src="/assets/linkedin.svg"
              alt="Github"
              width={40}
              height={40}
              className="hover:scale-110 transition duration-300 ease-in-out"
            />
          </a>
        </div>
      </section>
    </header>
  );
};

export default Landing;
