"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { IoIosArrowRoundForward } from "react-icons/io";

const Projects = () => {
  return (
    <div id='projects'>
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-2/3 mx-auto">
          <div className="flex flex-wrap -mx-2">
            {/* Static Resume Card */}
            <div className="px-2 w-1/2">
              <div className="group flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative transform transition-transform duration-300 ease-in-out hover:scale-105">
                <Image
                  alt="gallery"
                  src={require("../../../public/resume.png")}
                  layout="fill"
                  objectFit="cover"
                  className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                />
                <div className="text-center relative z-10 w-full group-hover:scale-110 transition-transform duration-300 ease-in-out">
                  <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Static Resume</h2>
                  <p className="leading-relaxed">
                    Static Resume With Hide/Show Skill Toggle Button
                  </p>
                  <Link href={"https://milestone1-2-mocha.vercel.app/"} target='_blank'>
                    <p className="leading-relaxed text-blue-500 hover:underline mt-2 flex items-center justify-center">
                      View More
                      <IoIosArrowRoundForward className="ml-2 w-5 h-5 mt-1" />
                    </p>
                  </Link>
                </div>
              </div>
            </div>
  
            {/* Currency Converter Card */}
            <div className="px-2 w-1/2">
              <div className="group flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative transform transition-transform duration-300 ease-in-out hover:scale-105">
                <Image
                  alt="gallery"
                  src={require("../../../public/cc.png")}
                  layout="fill"
                  objectFit="cover"
                  className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                />
                <div className="text-center relative z-10 w-full group-hover:scale-110 transition-transform duration-300 ease-in-out">
                  <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Currency Converter</h2>
                  <p className="leading-relaxed">
                    I build Currency Converter Using HTML , CSS and Javascript/Typescript.
                  </p>
                  <Link href={"https://currency-converter-by-html-css-and-typescript.vercel.app/"} target='_blank'>
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
    </section>
  </div>

  )
}

export default Projects
