

'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import services from '@/assets/services.jpg'
import Services from '@/Components/Services'

const page = () => {
  return (
    <div className="w-full relative">
      <div className="w-full h-[50vh] lg:h-[80vh] relative lg:mt-[-76] mb-10">
        <Image src={services} alt="Services Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="text-white text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
          >
            Services
          </motion.h1>
        </div>
      </div>

      <Services />
    </div>
  )
}

export default page
