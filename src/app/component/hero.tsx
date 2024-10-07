import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="text-gray-400 bg-gray-50 body-font">
      <div className="container mx-auto flex px-5 py-16 md:py-24 md:flex-row flex-col items-center">
        {/* Left Section - Text Content */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
            I am
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: [
                  "Arfa Shoaib",
                  "Front-end Developer",
                  "Content Writer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="w-[40%] h-[5px] bg-green-300 mb-6"></div>
          <p className="mb-8 leading-relaxed">
            I am a beginner frontend developer eager to learn and build my
            skills in web development. I am passionate about creating engaging
            user interfaces and gaining hands-on experience in frontend
            technologies like HTML, CSS, JavaScript, TypeScript, Next.js, and
            frameworks. As I embark on my journey, I am focused on expanding my
            knowledge and becoming proficient in creating responsive and dynamic
            websites.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link href="#contacts">
              <button className="inline-flex text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-800 rounded text-lg">
                Contact
              </button>
            </Link>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            src={require("../../../public/pro1.jpg")}
            alt="profile image"
            width={500}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
