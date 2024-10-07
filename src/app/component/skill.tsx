import React from "react";
import { IoIosCheckboxOutline } from "react-icons/io";

const Skill = () => {
  return (
    <div className="bg-gray-100" id="skil">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              My Skills
            </h1>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            {/* HTML Card */}
            <div className="p-4 md:w-1/3 w-full flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <IoIosCheckboxOutline className="text-xl font-bold w-20 h-10" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  HTML
                </h2>
              </div>
            </div>

            {/* CSS Card */}
            <div className="p-4 md:w-1/3 w-full flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <IoIosCheckboxOutline className="text-xl font-bold w-20 h-10" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  CSS
                </h2>
              </div>
            </div>

            {/* JavaScript/TypeScript Card */}
            <div className="p-4 md:w-1/3 w-full flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <IoIosCheckboxOutline className="text-xl font-bold w-20 h-10" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  JavaScript/TypeScript
                </h2>
              </div>
            </div>

            {/* Next.js Card */}
            <div className="p-4 md:w-1/3 w-full flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <IoIosCheckboxOutline className="text-xl font-bold w-20 h-10" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Next.js
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;
