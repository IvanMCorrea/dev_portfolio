import Image from "next/image";
import React from "react";

type Props = {};

const Projects = (props: Props) => {
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
    },
    {
      title: "Arcane",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "/prog.svg",
    },
  ];
  return (
    <section>
      <div className="grid grid-cols-3 gap-5">
        {projects[0] &&
          projects.map(
            (item) =>
              !item.destacado && (
                <article>
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
    </section>
  );
};

export default Projects;
