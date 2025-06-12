

'use client'
import React from 'react'
import Image from 'next/image'
import banner from '@/assets/banner.webp'
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <div className="w-full lg:mt-[-76] relative">
      <Image
        src={banner}
        alt="banner"
        className="w-full h-[60vh] sm:h-[50vh] md:h-[80vh] lg:h-screen object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="w-full Mycontainer">
          <div className="w-full">
            {/* Animated Text Content */}
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="w-full lg:w-1/2 xl:w-[60%] text-left space-y-6"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-white font-bold leading-tight">
                Better <span className="text-[#008df2]">Healthcare</span> <br /> you can get
              </h1>
              <p className="text-white text-sm md:text-base lg:text-lg font-light">
                With years of experience in the medical equipment industry, our team possesses the knowledge and expertise to provide tailored solutions that meet the specific needs of healthcare providers.
              </p>
              <div>
                <button className="cursor-pointer text-sm md:text-base bg-[#fab60a] px-6 py-3 rounded hover:text-white hover:bg-[#498ef3] transition duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
