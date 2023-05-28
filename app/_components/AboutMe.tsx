import React from "react";
import { kanit } from "../assets/font";

type Props = {};

const AboutMe = (props: Props) => {
  return (
    <section className="w-full py-10" id="about">
      <h2 className={`${kanit.className} text-2xl md:text-3xl py-10`}>
        About me
      </h2>
      <p>
        I have had the opportunity to work on various projects, ranging from
        small mobile apps to large-scale e-commerce platforms. I have developed
        a strong understanding of the latest front-end technologies, including,
        NodeJs, MongoDB, React Native, and others.
      </p>
      <br />
      <p>
        I am a quick learner and I am always eager to expand my skill set by
        experimenting with new technologies and techniques. I am excited about
        the opportunity to bring my skills and experience to a new challenge.
      </p>
    </section>
  );
};

export default AboutMe;
