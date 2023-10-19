"use client";

import ActiveSectionContext, { useActiveSectionContext } from "@/context/active-section-context";
import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useState } from "react";

import Link from "next/link";
import clsx from "clsx";
import { links } from "@/lib/data";

const Header = () => {

  const {activeSection, setActiveSection} = useActiveSectionContext()
  
  return (
    <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -200, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => {
            return (
              <motion.li
                className="h-3/4 flex flex-between items-center justify-center relative"
                key={link.hash}
                initial={{ y: -700, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-10%", opacity: 1 }}
              >
                <Link
                  className={clsx(
                    "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-white dark:hover:text-gray-300",
                    {
                      "text-gray-950": activeSection === link.name,
                    }
                  )}
                  href={link.hash}
                  onClick={() => setActiveSection(link.name)}
                >
                  {link.name}
                  <AnimatePresence>
                    {link.name === activeSection && (
                      <motion.span
                        className="bg-gray-300 rounded-full absolute inset-0 -z-10 dark:bg-white"
                        layoutId="activeSection"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 0.5, scale: 0.999 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{
                          type: "spring",
                          stiffness: 90,
                          damping: 10,
                          ease: "easeInOut",
                        }}
                      ></motion.span>
                    )}
                  </AnimatePresence>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
