

'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import about from '@/assets/about.jpg'
import Welcome from '@/Components/Welcome'
import Vision from '@/Components/Vision'
import Who from '@/Components/Who'
import Commit from '@/Components/Commit'

const page = () => {
  return (
    <div className="w-full relative">
      {/* Banner Section */}
      <div className="w-full h-[50vh] lg:h-[80vh] relative lg:mt-[-76]">
        <Image src={about} alt="Aboutbanner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />

        {/* Animated Heading */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-center px-4 max-w-3xl w-full h-full">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="text-white text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
          >
            About Us
          </motion.h1>
        </div>
      </div>

      {/* Other Sections */}
      <Welcome />
      <Vision />
      <Who />
      <Commit />
    </div>
  )
}

export default page
