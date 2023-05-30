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
        className={`arrow ${props.left ? "-left-14" : "-right-14"}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    );
  }

  const projects = [
    {
      title: "Matesito Ecommerce",
      description:
        "Final project for the Coderhouse React course. The project involves building an e-commerce site using various modern web development tools. The site includes functionalities such as product listing, cart management, and checkout.",
      image: "/assets/projects/matesito.png",
      deploy: "https://superlative-crisp-fce7b4.netlify.app/",
      front: "https://github.com/IvanMCorrea/E-commerce",
      back: "",
      tech: "React, CSS, SASS & HTML",
      destacado: true,
    },
    {
      title: "Arcane",
      description: "Final Proyect for Javascript course of CoderHouse.",
      image: "/assets/projects/arcane.png",
      deploy: "https://ivanmcorrea.github.io/Arcane/",
      front: "https://github.com/IvanMCorrea/Arcane",
      back: "",
      tech: "Javascript, CSS, SASS & HTML",
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
      tech: "Bootstrap, CSS, SASS & HTML",
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
      tech: "React, MUI (Material UI), MongoDB, Node & Express",
    },
    {
      title: "Rick & Morty Social Network",
      description:
        "The application is a social media platform based on the popular TV show Rick & Morty, where users can create an account, log in, and create and view posts made by other users.",
      image: "/assets/projects/network.png",
      deploy: "https://red-social-nu.vercel.app/#/login",
      front: "https://github.com/IvanMCorrea/RedSocial",
      back: "https://github.com/IvanMCorrea/RedSocialBackend",
      tech: "React, Typescript, Tailwind, MongoDB, Node & Express",
    },
    {
      title: "Football League Scrapper",
      description:
        "Challenge with scrapper to get data for Argentina´s football league.",
      image: "/assets/projects/scrapper.png",
      deploy: "https://shimmering-gnome-28eda6.netlify.app/",
      front: "https://github.com/IvanMCorrea/challenge1_front",
      back: "https://github.com/IvanMCorrea/challenge1_back",
      tech: "MongoDB, Node, Express, CSS & HTML",
    },
  ];

  return (
    <section className="w-full py-10" id="projects">
      <h2 className={`${kanit.className} text-2xl md:text-3xl py-10`}>
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
                      className={`keen-slider__slide number-slide${index}`}
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
                      <p>{item.description}</p>
                      <div className="my-5">
                        {item.deploy && (
                          <Link
                            href={item.deploy}
                            target="_blanck"
                            className="bg-blue-400 dark:bg-blue-800 py-2 px-4 rounded-md mr-2 text-center"
                          >
                            Deploy
                          </Link>
                        )}
                        {item.front && (
                          <Link
                            href={item.front}
                            target="_blanck"
                            className="bg-blue-400 dark:bg-blue-800 py-2 px-4 rounded-md mr-2 text-center"
                          >
                            Frontend Code
                          </Link>
                        )}
                        {item.back && (
                          <Link
                            href={item.back}
                            target="_blanck"
                            className="bg-green-400 dark:bg-green-800 py-2 px-4 rounded-md text-center"
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
      <h3 className={`${kanit.className} text-xl md:text-2xl py-10`}>
        More projects
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 bg-neutral-400 dark:bg-neutral-800 p-5 rounded-3xl">
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
                  <h4 className={`${kanit.className} text-lg md:text-xl my-3`}>
                    {item.title}
                  </h4>
                  <p>{item.description}</p>
                  <div className="my-5 flex flex-col">
                    {item.deploy && (
                      <Link
                        href={item.deploy}
                        target="_blanck"
                        className="bg-blue-400 dark:bg-blue-800 py-2 px-4 rounded-md mb-2 text-center"
                      >
                        Deploy
                      </Link>
                    )}
                    {item.front && (
                      <Link
                        href={item.front}
                        target="_blanck"
                        className="bg-blue-400 dark:bg-blue-800 py-2 px-4 rounded-md mb-2 text-center"
                      >
                        Frontend Code
                      </Link>
                    )}
                    {item.back && (
                      <Link
                        href={item.back}
                        target="_blanck"
                        className="bg-green-400 dark:bg-green-800 py-2 px-4 rounded-md text-center"
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
