

'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import about from '@/assets/aboutpic.webp'

const Welcome = () => {
  return (
    <div className="w-full Mycontainer bg-white py-10">
      <div className="w-full">
        <div className="w-full flex flex-col lg:flex-row items-center gap-12">
          
          {/* Text Content with motion */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col gap-6 text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-[#498ef3] font-sans font-semibold border-l-4 border-[#fab60a] pl-2">
              About Us
            </h1>

            <h2 className="text-3xl md:text-4xl font-normal font-sans text-[#498ef3]">
              Welcome to Our <span className="text-[#fab60a]">HornBill</span>
            </h2>

            <p className="text-sm md:text-base text-gray-700 font-light tracking-normal leading-relaxed">
              At HornBill, we are dedicated to enhancing healthcare through the provision of top-quality medical equipment. As an authorized distributor in the Pakistan market, we take pride in being a trusted partner for healthcare providers, ensuring that they have access to the best tools to deliver exceptional care.
            </p>

            <div className="mt-4">
              <button className="text-sm md:text-base bg-[#fab60a] px-6 py-2 rounded hover:text-white hover:bg-[#498ef3] transition-all duration-300 cursor-pointer">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Image with motion */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              className="w-full h-auto object-cover"
              src={about}
              alt="About Pic"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Welcome

