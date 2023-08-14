import React from "react";
import { kanit } from "../assets/font";

type Props = {};

const AboutMe = (props: Props) => {
  return (
    <section className="w-full py-10" id="about">
      <h2
        className={`${kanit.className} text-2xl md:text-3xl py-10 bg-gradient-to-r from-gray-700 dark:from-slate-300 dark:to-zinc-200 to-slate-700 bg-clip-text text-transparent`}
      >
        About me
      </h2>
      <p>
        Fullstack developer with strong understanding of the latest front-end
        technologies, including NodeJS, MongoDB, React, React Native, NextJS,
        TypeScript and others.
      </p>
      <br />
      <p>
        Quick learner and always eager to expand my skills. I am excited about
        the opportunity to bring my skills and experience to a new challenge.
      </p>
    </section>
  );
};

export default AboutMe;
