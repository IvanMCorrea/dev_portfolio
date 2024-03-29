import React from "react";
import { kanit } from "../assets/font";

const Experience = () => {
  const jobs = [
    {
      title: "Eiche Chile",
      position: "Fullstack Developer",
      technologies: "",
      description: (
        <ul className="text-sm leading-snug tracking-wide text-opacity-100 list-disc">
          <li className="mb-2">
            Frontend design using React, React Native and Vue frameworks.
          </li>
          <li className="mb-2">
            Handle backend in Node with Adonis and Express frameworks.
          </li>
          <li className="mb-2">
            Collaborate with other developers and designers to deliver
            high-quality projects on time and respecting customer requirements.
          </li>
        </ul>
      ),
      from_to: "08/2022 - 05/2023",
    },
    {
      title: "Casa Butera",
      position: "Ecommerce Manager",
      technologies: "",
      description: (
        <ul className="text-sm leading-snug tracking-wide text-opacity-100 list-disc">
          <li>Create Fishing Industry Ecommerce Website</li>
          <li className="mb-2">
            Configure Mercado Libre account and it´s publications.
          </li>
          <li className="mb-2">Handle social media accounts.</li>
          <li className="mb-2">Content creation.</li>
          <li className="mb-2">Stock configuration in Excel.</li>
          <li className="mb-2">Billing.</li>
        </ul>
      ),
      from_to: "12/2013 - 12/2022",
    },
  ];

  return (
    <section className="w-full py-10" id="experience">
      <h2
        className={`${kanit.className} text-2xl md:text-3xl py-10 bg-gradient-to-r from-gray-700 dark:from-slate-300 dark:to-zinc-200 to-slate-700 bg-clip-text text-transparent`}
      >
        Experience
      </h2>
      <div className="container mx-auto w-full h-full">
        <div className="max-sm:hidden relative wrap overflow-hidden h-full">
          <div
            className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
            style={{ left: "50%" }}
          ></div>
          {jobs.map((job, index) => (
            <div
              key={index}
              className={`flex mb-8 justify-between items-center w-full ${
                index % 2 === 0
                  ? "right-timeline"
                  : "left-timeline flex-row-reverse"
              }`}
            >
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gradient-to-r from-fuchsia-600 to-purple-600 shadow-xl w-4 h-4 rounded-full">
                <h1 className="mx-auto font-semibold text-lg"></h1>
              </div>
              <article
                className={`order-1 bg-neutral-100 dark:bg-neutral-800 rounded-lg shadow-xl w-5/12 px-6 py-4 ${
                  index % 2 === 0
                    ? "animate-fade-right animate-once"
                    : "animate-fade-left animate-once"
                }`}
              >
                <div className="flex justify-between items-end mb-2">
                  <h3 className="font-bold text-xl">{job.title}</h3>
                  <span className="text-sm font-medium">{job.from_to}</span>
                </div>
                <h5 className="font-semibold text-md mb-2">{job.position}</h5>
                {job.description && job.description}
              </article>
            </div>
          ))}
        </div>
        <div className="relative sm:hidden h-full">
          {jobs.map((job, index) => (
            <article
              className="bg-neutral-100 dark:bg-neutral-800 p-5 rounded-3xl my-5"
              key={index}
            >
              <div className="flex justify-between items-end mb-1">
                <h3 className="font-bold text-xl">{job.title}</h3>
                <span className="text-sm mb-2 font-medium">{job.from_to}</span>
              </div>
              <h5 className="font-semibold text-md mb-2">{job.position}</h5>
              {job.description && job.description}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
