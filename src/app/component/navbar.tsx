"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TbCloudDownload } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className="bg-white z-50 sticky top-0 shadow-md">
      <header className="text-gray-400 bg-white body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          {/* Logo and Brand Name */}
          <a className="flex title-font font-medium items-center text-black mb-4 md:mb-0">
            <Image
              src={require("../../../public/logo.png")}
              alt="Logo"
              width={100}
              height={100}
              className="w-[52px] h-auto"
            />
            <span className="ml-3 text-xl font-bold">Arfa Shoaib</span>
          </a>

          {/* Navigation Links */}
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center space-x-4">
            <Link
              href={"/"}
              className="mr-4 hover:text-green-700 hover:underline font-medium text-lg"
            >
              Home
            </Link>
            <Link
              href={"#abouts"}
              className="mr-4 hover:text-green-700 hover:underline font-medium text-lg"
            >
              About
            </Link>
            <Link
              href={"#skil"}
              className="mr-4 hover:text-green-700 hover:underline font-medium text-lg"
            >
              Skills
            </Link>
            <Link
              href={"#projects"}
              className="mr-4 hover:text-green-700 hover:underline font-medium text-lg"
            >
              Projects
            </Link>
            <Link
              href={"#contacts"}
              className="mr-4 hover:text-green-700 hover:underline font-medium text-lg"
            >
              Contact
            </Link>
          </nav>

          {/* Download CV Button */}
          <Link href={"cv.pdf"} target="_blank">
            <button className="inline-flex items-center bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-800 rounded text-base text-white">
              Download CV
              <TbCloudDownload className="text-xl ml-2" />
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
