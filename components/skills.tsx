"use client";

import React, { useState } from 'react';

import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView('Skills');
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const generateRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  };

  return (
    <section
      id="skills"
      ref={ref}
      className=" max-w-[53rem] scroll-mt-28 text-center sm:mb-10"
    >

      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-3 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className={`rounded-xl px-5 py-3 text-black border border-gray-200 dark:bg-gray-200/80 `}
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(-1)}
            whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.70 }}
              style={{
                backgroundColor: hoveredIndex === index ? `${generateRandomColor()}` : '',
                color: hoveredIndex === index ? 'white' : '',
              }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
      
    </section>
  );
}
