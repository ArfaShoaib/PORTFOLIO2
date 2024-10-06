"use client";
import Image from "next/image";
import Hero from "./component/hero";
import About from "./component/about";
import Skill from "./component/skill";
import Projects from "./component/project";
import ContactPAge from "./component/contact";

export default function Home() {
  return (
   <div>
    <Hero/>
    <About/>
    <Skill/>
    <Projects/>
    <ContactPAge/>
   </div>
  );
}
