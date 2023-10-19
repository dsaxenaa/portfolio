"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-[1.5rem] max-w-[50rem] text-center leading-8 sm:mb-15 scroll-mt-28"
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">Hello visitor, my name is <span className="font-bold">Divyansh Saxena </span> 
      and I recently graduated from Graphic Era University(Dehradun) with a degree in Bachelor's in Technology
      in <span className="font-bold">Computer Science and Engineering</span>. My interest has always been in web development, about how apps and websites are made.
      I have several projects in full-stack development and also did internships.
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect, trying to learn from my mistakes and learning about new technologies. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and MySQL and others. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">Apart from coding,</span>, I enjoy playing
        video games, reading, drawing and  watching movies. I also enjoy{" "}
        <span className="font-medium">learning about new things</span>. 
      </p>
    </motion.section>
  );
}