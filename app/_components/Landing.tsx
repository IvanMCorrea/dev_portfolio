import Image from "next/image";
import React from "react";
import github from "../../public/github.svg";
import { kanit } from "../layout";

type Props = {};

const Landing = (props: Props) => {
  return (
    <header className="flex w-full gap-20 justify-center">
      <Image
        src="/prog.svg"
        alt="Working Developer"
        width={250}
        height={250}
        priority
      />
      <section className="max-w-md flex flex-col gap-3">
        <h1 className={`${kanit.className} text-4xl md:text-5xl`}>
          Ivan Correa
        </h1>
        <span className={`${kanit.className} text-2xl md:text-3xl`}>
          Full Stack Developer
        </span>
        <div className="flex gap-2">
          <Image
            src={github}
            alt="github"
            width={40}
            height={40}
            className="text-neutral-900 dark:text-neutral-100"
          />
          <img
            src="/linkedin.svg"
            alt="Github"
            width={40}
            height={40}
            className="text-blue-600"
          />
        </div>
      </section>
    </header>
  );
};

export default Landing;
