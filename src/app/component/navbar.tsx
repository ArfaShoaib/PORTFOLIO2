"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TbCloudDownload } from "react-icons/tb";


const Navbar = () => {
  return (
    <div className="bg-white z-50 sticky top-0">
      <header className="text-gray-400 bg-white body-font">
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-black mb-4 md:mb-0">
            <Image
              src={require("../../../public/logo.png")}
              alt="as"
              width={100}
              height={100}
              className="w-[52px]"
            />
            <span className="ml-3 text-xl font-bold">
              Arfa Shoaib
            </span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-11 hover:text-green-700 hover:underline font text-1xl">
              Home
            </Link>
            <Link href={"#abouts"} className="mr-11 hover:text-green-700 hover:underline font text-1xl">
              About
            </Link>
            <Link href={"#skil"} className="mr-11 hover:text-green-700 hover:underline font text-1xl">
              Skills
            </Link>
            <Link href={"#projects"} className="mr-11 hover:text-green-700 hover:underline font text-1xl">
              Projects
            </Link>
            <Link href={"#contacts"} className="mr-11 hover:text-green-700 hover:underline font text-1xl">
              Contact
            </Link>
          </nav>
          <Link href={"cv.pdf"} target="_blank">
          <button className="inline-flex items-center bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-green-800 rounded text-base mt-4 md:mt-0 text-white">
            Download CV
            <TbCloudDownload className="text-xl ml-2"/>
          </button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
