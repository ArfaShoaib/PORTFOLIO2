"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-green-600">
      <footer className="text-black  body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-black">
            <Image
              src={require("../../../public/logo.png")}
              alt="as"
              width={100}
              height={100}
              className="w-[52px]"
            />
            <span className="ml-3 text-xl">Arfa Shoaib</span>
          </a>
          <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
            © 2024 Arfa Shoaib
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-10 justify-center sm:justify-start">
            <Link
              href={"https://github.com/ArfaShoaib"}
              target="_blank"
              className="text-white"
            >
              <FaGithub className="text-2xl mr-3" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
