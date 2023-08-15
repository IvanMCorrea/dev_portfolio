"use client";
import React, { Fragment, useState } from "react";
import { kanit } from "../assets/font";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface Project {
  title: string;
  description: string;
  image: string;
  deploy: string;
  front: string;
  back?: string;
  tech: Tech[];
  destacado?: Boolean;
}
interface Tech {
  src: string;
  title: string;
}

const Projects = () => {
  const techs: { [key: string]: Tech } = {
    //? Front
    next: {
      src: "/assets/logos/nextjs_logo.svg",
      title: "NextJS",
    },
    react: {
      src: "/assets/logos/React.svg",
      title: "ReactJS",
    },
    vue: {
      src: "/assets/logos/vue_logo.svg",
      title: "VueJS",
    },
    ts: {
      src: "/assets/logos/typescript_logo.svg",
      title: "TypeScript",
    },
    js: {
      src: "/assets/logos/js_logo.svg",
      title: "JavaScript",
    },
    css: {
      src: "/assets/logos/CSS3_logo.svg",
      title: "CSS",
    },
    sass: {
      src: "/assets/logos/Sass_Logo.svg",
      title: "SASS",
    },
    html: {
      src: "/assets/logos/HTML5_logo.svg",
      title: "HTML",
    },
    //? Back
    node: {
      src: "/assets/logos/node-js.svg",
      title: "NodeJS",
    },
    express: {
      src: "/assets/logos/express_logo.svg",
      title: "Express",
    },
    /* adonis: "", */
    //? DB
    mongo: {
      src: "/assets/logos/mongodb_logo.svg",
      title: "MongoDB",
    },
    //? UI Frameworks
    mui: {
      src: "/assets/logos/mui_logo.svg",
      title: "Material UI",
    },
    tailwind: {
      src: "/assets/logos/tailwind_logo.svg",
      title: "Tailwind CSS",
    },
    bootstrap: {
      src: "/assets/logos/Bootstrap_logo.svg",
      title: "Bootstrap",
    },
    chakra: {
      src: "/assets/logos/chakra.svg",
      title: "Chakra UI",
    },
  };

  const projects: Project[] = [
    //? MATESITO
    {
      title: "Matesito Ecommerce",
      description:
        "Final project for the Coderhouse React course. The project involves building an e-commerce site using various modern web development tools. The site includes functionalities such as product listing, cart management, and checkout.",
      image: "/assets/projects/matesito.png",
      deploy: "https://superlative-crisp-fce7b4.netlify.app/",
      front: "https://github.com/IvanMCorrea/E-commerce",
      back: "",
      /* "React, CSS, SASS & HTML" */
      tech: [techs.react, techs.sass, techs.css],
      destacado: true,
    },
    //? ARCANE
    {
      title: "Arcane",
      description:
        "Final Project for Javascript course of CoderHouse. This project replicates the arcane launch page as a netflix series",
      image: "/assets/projects/arcane.png",
      deploy: "https://ivanmcorrea.github.io/Arcane/",
      front: "https://github.com/IvanMCorrea/Arcane",
      back: "",
      /* "Javascript, CSS, SASS & HTML" */
      tech: [techs.js, techs.sass, techs.css, techs.html],
      destacado: true,
    },
    //? POKEMON
    {
      title: "Pokemon: Origins",
      description:
        "Final Project for Coderhouse in the Web Development course. Here I review the basics of html and css for the creation of a website",
      image: "/assets/projects/pokemon.png",
      deploy: "https://superlative-crisp-fce7b4.netlify.app/",
      front: "https://github.com/IvanMCorrea/E-commerce",
      back: "",
      /* "Bootstrap, CSS, SASS & HTML" */
      tech: [techs.bootstrap, techs.sass, techs.css, techs.html],
      destacado: true,
    },
    //? GOOGLE SHEETS
    {
      title: "Google Sheets Viewer",
      description:
        "Google Sheets Viewer is a web application that allows users to visualize data from Google Sheets in a tabular format similar to Excel. It offers a user-friendly interface where data can be easily filtered by product name. With its streamlined design, users can quickly access and analyze specific information with just a few clicks.",
      image: "/assets/projects/gsheet.png",
      deploy: "https://gestion-gsheet.vercel.app/",
      front: "https://github.com/IvanMCorrea/gestion_gsheet",
      /* "React, Typescript, Tailwind, Next, Chakra" */
      tech: [techs.next, techs.react, techs.ts, techs.chakra],
    },
    //? DOLLAR EXCHANGE
    {
      title: "Exchange App",
      description: "App to convert ARS to dollars using the dolarsi api",
      image: "/assets/projects/exchange.png",
      deploy: "https://exchange-app-theta.vercel.app/",
      front: "https://github.com/IvanMCorrea/exchange-app",
      /* "React, Typescript, Tailwind, Next" */
      tech: [techs.next, techs.react, techs.ts, techs.tailwind],
    },
    //? ERP
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
      tech: [techs.react, techs.mui, techs.mongo, techs.node, techs.express],
    },
    //? RICK & MORTY
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
      ],
    },
    //? SCRAPPER
    {
      title: "Football League Scrapper",
      description:
        "Challenge with scrapper to get data for Argentina´s football league.",
      image: "/assets/projects/scrapper.png",
      deploy: "https://shimmering-gnome-28eda6.netlify.app/",
      front: "https://github.com/IvanMCorrea/challenge1_front",
      back: "https://github.com/IvanMCorrea/challenge1_back",
      /* "MongoDB, Node, Express, CSS & HTML" */
      tech: [
        techs.mongo,
        techs.node,
        techs.express,
        techs.js,
        techs.css,
        techs.html,
      ],
    },
  ];

  const [selected, setSelected] = useState<Tech | null>(null);

  const [filteredProjects, setFilteredProjects] = useState<Project[] | null>(
    projects
  );

  const handleSelect = (tech: Tech) => {
    if (selected && selected.title === tech.title) {
      setSelected(null);
      setFilteredProjects(projects);
    } else {
      setSelected(tech);
      let filtered = projects.filter((project) => project.tech?.includes(tech));
      setFilteredProjects(filtered);
    }
  };

  return (
    <section className="w-full py-10" id="projects">
      <h2
        className={`${kanit.className} text-2xl md:text-3xl py-10 bg-gradient-to-r from-gray-700 dark:from-slate-300 dark:to-zinc-200 to-slate-700 bg-clip-text text-transparent`}
      >
        Projects
      </h2>
      <article className=" bg-neutral-100 dark:bg-neutral-800 p-5 rounded-3xl my-5">
        <h3 className="text-center mb-5">Filter by technology</h3>
        <div className="flex grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-10 justify-between items-center">
          {Object.keys(techs).map((key: string) => (
            <div onClick={() => handleSelect(techs[key])} key={key}>
              <Image
                src={techs[key].src}
                width={48}
                height={48}
                alt={techs[key].title}
                title={techs[key].title}
                className={`hover:scale-125 transition-all ease-in-out duration-300 cursor-pointer ${
                  selected &&
                  selected.title !== techs[key].title &&
                  "opacity-50"
                }`}
              />
            </div>
          ))}
        </div>
      </article>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProjects &&
          filteredProjects[0] &&
          filteredProjects.map((item, index) => (
            <article
              key={index}
              className="flex flex-col grow bg-neutral-100 dark:bg-neutral-800 p-4 rounded-3xl"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={1920}
                height={1080}
                className=" rounded-xl"
              />
              <h4 className={`${kanit.className} text-xl md:text-xl my-3`}>
                {item.title}
                {item.destacado && (
                  <FontAwesomeIcon
                    icon={faStar}
                    size="xs"
                    className="text-purple-600 dark:text-yellow-400 ml-2"
                  />
                )}
              </h4>
              <div className="flex gap-3 my-2 flex-wrap">
                {item.tech?.map((tech, indx) => (
                  <Image
                    src={tech.src}
                    width={24}
                    height={24}
                    alt={tech.title}
                    title={tech.title}
                    key={indx}
                    className="hover:scale-125 transition-all ease-in-out duration-300"
                  />
                ))}
              </div>
              <p className="flex grow">{item.description}</p>
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
          ))}
      </div>
    </section>
  );
};

export default Projects;
