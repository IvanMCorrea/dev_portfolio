"use client";
import "keen-slider/keen-slider.min.css";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { kanit } from "../assets/font";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState<Number>(0);
  const [loaded, setLoaded] = useState<Boolean>(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slides: { origin: "center", perView: 1, spacing: 20 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  function Arrow(props: { left?: boolean; onClick: (e: any) => void }) {
    return (
      <svg
        onClick={props.onClick}
        className={`arrow text-neutral-800 dark:text-neutral-300 ${
          props.left ? "-left-10" : "-right-10"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path
            fill="currentColor"
            d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
          />
        )}
        {!props.left && (
          <path
            fill="currentColor"
            d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"
          />
        )}
      </svg>
    );
  }
  //TODO: Add techs with icons
  const techs = {
    //? Front
    react: (
      <img
        src="https://icongr.am/devicon/react-original.svg?size=128&color=currentColor"
        width={24}
        height={24}
        className="hover:scale-110 transition-all ease-in-out duration-300"
        title="ReactJS"
      />
    ),
    vue: (
      <img
        src="https://icongr.am/devicon/vuejs-original.svg?size=128&color=currentColor"
        width={24}
        height={24}
        className="hover:scale-110 transition-all ease-in-out duration-300"
        title="VueJS"
      />
    ),
    ts: (
      <img
        src="https://icongr.am/devicon/typescript-original.svg?size=128&color=currentColor"
        width={24}
        height={24}
        className="hover:scale-110 transition-all ease-in-out duration-300"
        title="TypeScript"
      />
    ),
    js: (
      <img
        src="https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor"
        width={24}
        height={24}
        className="hover:scale-110 transition-all ease-in-out duration-300"
        title="JavaScript"
      />
    ),
    css: (
      <img
        src="https://icongr.am/devicon/css3-original.svg?size=128&color=currentColor"
        width={24}
        height={24}
        className="hover:scale-110 transition-all ease-in-out duration-300"
        title="CSS"
      />
    ),
    sass: (
      <img
        src="https://icongr.am/devicon/sass-original.svg?size=128&color=currentColor"
        width={24}
        height={24}
        className="hover:scale-110 transition-all ease-in-out duration-300"
        title="SASS"
      />
    ),
    html: (
      <img
        src="https://icongr.am/devicon/html5-original.svg?size=128&color=currentColor"
        width={24}
        height={24}
        className="hover:scale-110 transition-all ease-in-out duration-300"
        title="HTML"
      />
    ),
    //? Back
    node: (
      <img
        src="https://icongr.am/devicon/nodejs-original.svg?size=128&color=currentColor"
        width={24}
        height={24}
        className="hover:scale-110 transition-all ease-in-out duration-300"
        title="NodeJS"
      />
    ),
    express: (
      <img
        src="https://icongr.am/devicon/express-original.svg?size=128&color=currentColor"
        alt="Express"
        className="hover:scale-110 transition-all ease-in-out duration-300"
        width={24}
        height={24}
        title="Express"
      />
    ),
    adonis: "",
    //? DB
    mongo: (
      <img
        src="https://icongr.am/devicon/mongodb-original.svg?size=128&color=currentColor"
        width={24}
        height={24}
        className="hover:scale-110 transition-all ease-in-out duration-300"
        title="MongoDB"
      />
    ),
    //? UI Frameworks
    mui: (
      <Image
        src="/assets/logos/mui_logo.svg"
        alt="Material UI"
        className="hover:scale-110 transition-all ease-in-out duration-300"
        width={24}
        height={24}
        title="Material UI"
      />
    ),
    tailwind: (
      <Image
        src="/assets/logos/tailwind_logo.svg"
        alt="Tailwind CSS"
        className="hover:scale-110 transition-all ease-in-out duration-300"
        width={24}
        height={24}
        title="Tailwind CSS"
      />
    ),
    bootstrap: (
      <Image
        src="/assets/logos/Bootstrap_logo.svg"
        alt="Bootstrap"
        className="hover:scale-110 transition-all ease-in-out duration-300"
        width={24}
        height={24}
        title="Bootstrap"
      />
    ),
  };
  const projects = [
    {
      title: "Matesito Ecommerce",
      description:
        "Final project for the Coderhouse React course. The project involves building an e-commerce site using various modern web development tools. The site includes functionalities such as product listing, cart management, and checkout.",
      image: "/assets/projects/matesito.png",
      deploy: "https://superlative-crisp-fce7b4.netlify.app/",
      front: "https://github.com/IvanMCorrea/E-commerce",
      back: "",
      /* "React, CSS, SASS & HTML" */
      tech: [techs.react, techs.sass, techs.css, techs.html],
      destacado: true,
    },
    {
      title: "Arcane",
      description: "Final Proyect for Javascript course of CoderHouse.",
      image: "/assets/projects/arcane.png",
      deploy: "https://ivanmcorrea.github.io/Arcane/",
      front: "https://github.com/IvanMCorrea/Arcane",
      back: "",
      /* "Javascript, CSS, SASS & HTML" */
      tech: [techs.js, techs.sass, techs.css, techs.html],
      destacado: true,
    },
    {
      title: "Pokemon: Origins",
      description:
        "Final Project for Coderhouse in the Web Development course.",
      image: "/assets/projects/pokemon.png",
      deploy: "https://superlative-crisp-fce7b4.netlify.app/",
      front: "https://github.com/IvanMCorrea/E-commerce",
      back: "",
      /* "Bootstrap, CSS, SASS & HTML" */
      tech: [techs.bootstrap, techs.sass, techs.css, techs.html],
      destacado: true,
    },
    {
      title: "ERP (Enterprise Resource Planning)",
      description:
        "A business-focused app designed to efficiently manage employees, customers, expenses, and incomes. It includes organization and optimization of crucial business operations. (In progress)",
      image: "/assets/projects/erp.png",
      deploy:
        "https://64582eab15dd3400087f7496--zingy-dragon-3e07ec.netlify.app/#/login",
      front: "https://github.com/IvanMCorrea/ERP",
      back: "https://github.com/IvanMCorrea/ERP_back",
      /* "React, MUI (Material UI), MongoDB, Node & Express" */
      tech: [
        techs.react,
        techs.mui,
        techs.mongo,
        techs.node,
        techs.express,
        techs.css,
        techs.html,
      ],
    },
    {
      title: "Rick & Morty Social Network",
      description:
        "The application is a social media platform based on the popular TV show Rick & Morty, where users can create an account, log in, and create and view posts made by other users.",
      image: "/assets/projects/network.png",
      deploy: "https://red-social-nu.vercel.app/#/login",
      front: "https://github.com/IvanMCorrea/RedSocial",
      back: "https://github.com/IvanMCorrea/RedSocialBackend",
      /* "React, Typescript, Tailwind, MongoDB, Node & Express" */
      tech: [
        techs.react,
        techs.ts,
        techs.tailwind,
        techs.mongo,
        techs.node,
        techs.express,
        techs.css,
        techs.html,
      ],
    },
    {
      title: "Football League Scrapper",
      description:
        "Challenge with scrapper to get data for Argentina´s football league.",
      image: "/assets/projects/scrapper.png",
      deploy: "https://shimmering-gnome-28eda6.netlify.app/",
      front: "https://github.com/IvanMCorrea/challenge1_front",
      back: "https://github.com/IvanMCorrea/challenge1_back",
      /* "MongoDB, Node, Express, CSS & HTML" */
      tech: [techs.mongo, techs.node, techs.express, techs.css, techs.html],
    },
  ];

  return (
    <section className="w-full py-10" id="projects">
      <h2
        className={`${kanit.className} text-2xl md:text-3xl py-10 bg-gradient-to-r from-gray-700 dark:from-slate-300 dark:to-zinc-200 to-slate-700 bg-clip-text text-transparent`}
      >
        Projects
      </h2>
      <div className="mb-10">
        <div className="navigation-wrapper">
          <div ref={sliderRef} className="mb-5 flex overflow-hidden">
            {projects[0] &&
              projects.map(
                (item, index) =>
                  item.destacado && (
                    <article
                      className={`keen-slider__slide number-slide${index} text-center`}
                      key={index}
                    >
                      <Image
                        src={item.image}
                        alt="Working Developer"
                        width={500}
                        height={250}
                        className="mx-auto mb-5"
                      />
                      <h4
                        className={`${kanit.className} text-xl md:text-2xl mb-3`}
                      >
                        {item.title}
                      </h4>
                      <div className="flex gap-3 my-2 justify-center">
                        {item.tech?.map((tech) => tech)}
                      </div>
                      <p>{item.description}</p>
                      <div className="my-5">
                        {item.deploy && (
                          <Link
                            href={item.deploy}
                            target="_blanck"
                            className="bg-gradient-to-r from-fuchsia-500 to-pink-500 py-2 px-4 rounded-md mr-2 text-center uppercase hover:scale-110 transition-all ease-in-out duration-300 font-semibold"
                          >
                            Deploy
                          </Link>
                        )}
                        {item.front && (
                          <Link
                            href={item.front}
                            target="_blanck"
                            className="bg-gradient-to-r from-blue-600 to-violet-600 py-2 px-4 rounded-md mr-2 text-center uppercase hover:scale-110 transition-all ease-in-out duration-300 font-semibold"
                          >
                            Frontend Code
                          </Link>
                        )}
                        {item.back && (
                          <Link
                            href={item.back}
                            target="_blanck"
                            className="bg-gradient-to-r from-emerald-500 to-emerald-900 py-2 px-4 rounded-md text-center uppercase hover:scale-110 transition-all ease-in-out duration-300 font-semibold"
                          >
                            Backend Code
                          </Link>
                        )}
                      </div>
                    </article>
                  )
              )}
          </div>
          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
              />

              <Arrow
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
              />
            </>
          )}
        </div>
        {loaded && instanceRef.current && (
          <div className="dots">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={"dot" + (currentSlide === idx ? " active" : "")}
                ></button>
              );
            })}
          </div>
        )}
      </div>
      <h3
        className={`${kanit.className} text-xl md:text-2xl py-10 bg-gradient-to-r from-gray-700 dark:from-slate-300 dark:to-zinc-200 to-slate-700 bg-clip-text text-transparent`}
      >
        More projects
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 bg-neutral-100 dark:bg-neutral-800 p-10 rounded-3xl">
        {projects[0] &&
          projects.map(
            (item, index) =>
              !item.destacado && (
                <article key={index}>
                  <Image
                    src={item.image}
                    alt="Working Developer"
                    width={280}
                    height={150}
                  />
                  <h4 className={`${kanit.className} text-xl md:text-xl my-3`}>
                    {item.title}
                  </h4>
                  <div className="flex gap-3 my-2 flex-wrap">
                    {item.tech?.map((tech) => tech)}
                  </div>
                  <p>{item.description}</p>
                  <div className="my-5 flex flex-col">
                    {item.deploy && (
                      <Link
                        href={item.deploy}
                        target="_blanck"
                        className="bg-gradient-to-r from-fuchsia-500 to-pink-500 py-2 px-4 rounded-md mb-2 text-center uppercase hover:scale-110 transition-all ease-in-out duration-300 font-semibold"
                      >
                        Deploy
                      </Link>
                    )}
                    {item.front && (
                      <Link
                        href={item.front}
                        target="_blanck"
                        className="bg-gradient-to-r from-blue-600 to-violet-600 py-2 px-4 rounded-md mb-2 text-center uppercase hover:scale-110 transition-all ease-in-out duration-300 font-semibold"
                      >
                        Frontend Code
                      </Link>
                    )}
                    {item.back && (
                      <Link
                        href={item.back}
                        target="_blanck"
                        className="bg-gradient-to-r from-emerald-500 to-emerald-900 py-2 px-4 rounded-md text-center uppercase hover:scale-110 transition-all ease-in-out duration-300 font-semibold"
                      >
                        Backend Code
                      </Link>
                    )}
                  </div>
                </article>
              )
          )}
      </div>
    </section>
  );
};

export default Projects;
