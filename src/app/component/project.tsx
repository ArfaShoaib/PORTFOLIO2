"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const Projects = () => {
  return (
    <div id="projects">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              My Projects
            </h1>
            <div className="flex mt-4 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>
          <div className="container px-5 py-25 mx-auto flex flex-wrap">
            <div className="lg:w-2/3 mx-auto">
              <div className="flex flex-wrap -mx-2">
                {/* Static Resume Card */}
                <div className="px-5 w-full sm:w-1/2 mb-6">
                  <div className="group flex flex-wrap w-full bg-gray-100 py-16 sm:py-24 px-6 sm:px-10 relative transform transition-transform duration-300 ease-in-out hover:scale-105">
                    <Image
                      alt="Static Resume"
                      src={require("../../../public/resume.png")}
                      layout="fill"
                      objectFit="cover"
                      className="w-full object-cover h-full opacity-25 absolute inset-0"
                    />
                    <div className="text-center relative z-10 w-full group-hover:scale-110 transition-transform duration-300 ease-in-out">
                      <h2 className="text-xl text-gray-900 font-medium title-font mb-2">
                        Static Resume
                      </h2>
                      <p className="leading-relaxed">
                        Static Resume With Hide/Show Skill Toggle Button
                      </p>
                      <Link
                        href={"https://milestone1-2-mocha.vercel.app/"}
                        target="_blank"
                      >
                        <p className="leading-relaxed text-blue-500 hover:underline mt-2 flex items-center justify-center">
                          View More
                          <IoIosArrowRoundForward className="ml-2 w-5 h-5 mt-1" />
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Currency Converter Card */}
                <div className="px-5 w-full sm:w-1/2 mb-6">
                  <div className="group flex flex-wrap w-full bg-gray-100 py-16 sm:py-24 px-6 sm:px-10 relative transform transition-transform duration-300 ease-in-out hover:scale-105">
                    <Image
                      alt="Currency Converter"
                      src={require("../../../public/cc.png")}
                      layout="fill"
                      objectFit="cover"
                      className="w-full object-cover h-full opacity-25 absolute inset-0"
                    />
                    <div className="text-center relative z-10 w-full group-hover:scale-110 transition-transform duration-300 ease-in-out">
                      <h2 className="text-xl text-gray-900 font-medium title-font mb-2">
                        Currency Converter
                      </h2>
                      <p className="leading-relaxed">
                        I built a Currency Converter using HTML, CSS, and
                        JavaScript/TypeScript.
                      </p>
                      <Link
                        href={
                          "https://currency-converter-by-html-css-and-typescript.vercel.app/"
                        }
                        target="_blank"
                      >
                        <p className="leading-relaxed text-blue-500 hover:underline mt-2 flex items-center justify-center">
                          View More
                          <IoIosArrowRoundForward className="ml-1 w-5 h-5 mt-1" />
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
