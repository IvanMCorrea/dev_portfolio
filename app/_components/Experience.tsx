import React from "react";

const Experience = () => {
  return (
    <section className="w-full py-10" id="experience">
      <div className="container mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden h-full">
          <div
            className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
            style={{ left: "50%" }}
          ></div>
          {/* <!-- left timeline --> */}
          {/* <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg">3</h1>
            </div>
            <article className="order-1 bg-neutral-400 dark:bg-neutral-800 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-xl">Mustang Cloud</h3>
              <p className="text-sm font-medium leading-snug tracking-wide text-opacity-100">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </article>
          </div> */}
          {/* <!-- right timeline --> */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-neutral-400 shadow-xl w-4 h-4 rounded-full">
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
            <div className="z-20 flex items-center order-1 bg-neutral-400 shadow-xl w-4 h-4 rounded-full">
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

          {/* <!-- right timeline --> */}
          {/* <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
            </div>
            <div className="order-1 bg-neutral-400 dark:bg-neutral-800 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">
                Lorem Ipsum
              </h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Experience;
