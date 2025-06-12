


'use client';
import React from 'react'
import Cards from './Cards'
import { motion } from 'framer-motion'

const Who = () => {
  return (
    <section className="w-full bg-white py-12 px-4">
      <div className="w-full Mycontainer flex flex-col items-center text-center space-y-6">

        {/* Animated Tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-l-4 border-r-4 border-[#fab60a] text-[#498ef3] px-4 py-1 font-medium text-sm sm:text-base"
        >
          Who We Are
        </motion.h2>

        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#498ef3]"
        >
          Who We <span className="text-[#fab60a]">Are</span>
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-gray-700 text-sm sm:text-base max-w-3xl font-light"
        >
          HornBill is a comprehensive supplier of a wide range of medical equipment, catering to various needs within the healthcare industry. Our portfolio includes:
        </motion.p>
      </div>

      {/* Cards Section Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-10"
      >
        <Cards />
      </motion.div>
    </section>
  )
}

export default Who
