import React from "react";
import { kanit } from "../layout";
import Image from "next/image";

const Technologies = () => {
  const technologiesData = [
    { title: "React JS", image: "/assets/React.svg" },
    { title: "Node JS", image: "/assets/node-js.svg" },
    { title: "Next JS", image: "/assets/next.svg" },
    { title: "Tailwind CSS", image: "/assets/tailwind_logo.svg" },
    { title: "Material UI", image: "/assets/mui_logo.svg" },
    { title: "Bootstrap", image: "/assets/Bootstrap_logo.svg" },
    { title: "SASS", image: "/assets/Sass_Logo.svg" },
    { title: "Typescript", image: "/assets/typescript_logo.svg" },
    { title: "Javascript", image: "/assets/js_logo.svg" },
    { title: "CCS", image: "/assets/CSS3_logo.svg" },
    { title: "HTML", image: "/assets/HTML5_logo.svg" },
    { title: "NPM", image: "/assets/Npm_logo.svg" },
    { title: "Git", image: "/assets/Git_logo.svg" },
  ];

  return (
    <section className="w-full">
      <h2 className={`${kanit.className} text-2xl md:text-3xl mb-10`}>
        Technologies
      </h2>
      <article className="flex grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-10 justify-between items-center bg-neutral-400 dark:bg-neutral-800 p-5 rounded-3xl my-5">
        {technologiesData &&
          technologiesData[0] &&
          technologiesData.map((tech) => (
            <div
              className=" hover:scale-110 transition duration-300 ease-in-out"
              key={tech.title}
            >
              <Image
                src={tech.image}
                alt={tech.title}
                width={80}
                height={80}
                title={tech.title}
              />
            </div>
          ))}
      </article>
    </section>
  );
};

export default Technologies;