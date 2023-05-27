"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { kanit } from "../layout";

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
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

  const projects = [
    {
      title: "Arcane",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "/prog.svg",
      destacado: true,
    },
    {
      title: "Arcane",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "/prog.svg",
      destacado: true,
    },
    {
      title: "Arcane",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "/prog.svg",
    },
    {
      title: "Arcane",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "/prog.svg",
      destacado: true,
    },
    {
      title: "Arcane",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "/prog.svg",
    },
    {
      title: "Arcane",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "/prog.svg",
    },
  ];

  return (
    <section className="w-full py-10" id="projects">
      <h2 className={`${kanit.className} text-2xl md:text-3xl mb-10`}>
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
                        width={100}
                        height={100}
                        priority
                      />
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
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
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 bg-neutral-400 dark:bg-neutral-800 p-5 rounded-3xl">
        {projects[0] &&
          projects.map(
            (item, index) =>
              !item.destacado && (
                <article key={index}>
                  <Image
                    src={item.image}
                    alt="Working Developer"
                    width={100}
                    height={100}
                    priority
                  />
                  <h3 className="font-bold my-2">{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              )
          )}
      </div>
    </section>
  );
};

export default Projects;
