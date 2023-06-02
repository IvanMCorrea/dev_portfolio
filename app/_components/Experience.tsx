import React from "react";
import { kanit } from "../assets/font";

const Experience = () => {
  return (
    <section className="w-full py-10" id="experience">
      <h2
        className={`${kanit.className} text-2xl md:text-3xl py-10 bg-gradient-to-r from-gray-700 dark:from-slate-300 dark:to-zinc-200 to-slate-700 bg-clip-text text-transparent`}
      >
        Experience
      </h2>
      <div className="container mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden h-full">
          <div
            className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
            style={{ left: "50%" }}
          ></div>
          {/* <!-- right timeline --> */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gradient-to-r from-fuchsia-600 to-purple-600 shadow-xl w-4 h-4 rounded-full">
              <h1 className="mx-auto font-semibold text-lg"></h1>
            </div>
            <article className="order-1 bg-neutral-400 dark:bg-neutral-800 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <div className="flex justify-between items-end mb-3">
                <h3 className=" font-bold text-xl">Eiche Chile</h3>
                <span className="text-sm">08/2022 a 05/2023</span>
              </div>
              <ul className="text-sm leading-snug tracking-wide text-opacity-100">
                <li className="mb-2">
                  • Frontend design using React, React Native and Vue
                  frameworks.
                </li>
                <li className="mb-2">
                  • Handle backend in Node with Adonis and Express frameworks.
                </li>
                <li className="mb-2">
                  • Collaborate with other developers and designers to deliver
                  high-quality projects on time and respecting customer
                  requirements.
                </li>
              </ul>
            </article>
          </div>

          {/* <!-- left timeline --> */}
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gradient-to-r from-fuchsia-600 to-purple-600 shadow-xl w-4 h-4 rounded-full">
              <h1 className="mx-auto font-semibold text-lg"></h1>
            </div>
            <article className="order-1 bg-neutral-400 dark:bg-neutral-800 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <div className="flex justify-between items-end mb-3">
                <h3 className=" font-bold text-xl">Casa Butera</h3>
                <span className="text-sm">12/2013 a 12/2022</span>
              </div>
              <ul className="text-sm font-medium leading-snug tracking-wide text-opacity-100">
                <li className="mb-2">
                  • Publication of products and sale in Mercado Libre.
                </li>
                <li className="mb-2">
                  • Creation and maintenance of Website and profile in Google
                  “My Business”.
                </li>
                <li className="mb-2">
                  • Content creation and updating of social networks.
                </li>
                <li className="mb-2">• Stock configuration in Excel.</li>
                <li className="mb-2">• Billing.</li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
