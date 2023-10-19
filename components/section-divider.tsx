"use client"

import React from 'react'
import {motion} from "framer-motion"

const SectionDivider = () => {
  return (
    <motion.div className='bg-gray-300  m-[5rem] h-[7rem] w-1 rounded-full hidden sm:block dark:bg-opacity-20'
    initial={{opacity:0.1 , y:200}}
    animate={{opacity:1, y:0}}
    transition={{delay:1.5}}>
    </motion.div>
  )
}

export default SectionDivider