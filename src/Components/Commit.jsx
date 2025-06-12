


'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ValuesSection from './ValuesSection';

const Commit = () => {
  return (
    <section className="w-full py-10 bg-white">
      <div className="w-full Mycontainer text-center">
        {/* Top Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="border-l-4 border-r-4 border-[#fab60a] inline-block text-[#498ef3] font-medium font-sans px-4 text-sm md:text-base mb-4"
        >
          Our Values: Compassion, Innovation, Trust
        </motion.h2>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-sans text-[#498ef3] mb-4"
        >
          Our <span className="text-[#fab60a]">Commitment</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="font-light text-sm sm:text-base lg:text-[15px] text-gray-600 font-sans max-w-3xl mx-auto leading-relaxed mb-12"
        >
          At HornBill, we are committed to delivering excellence in every aspect of our operations.
          We understand the critical role that reliable medical equipment plays in healthcare delivery.
          Therefore, we only partner with leading manufacturers known for their innovation, quality, and reliability.
        </motion.p>

        {/* Values Section Component (Already Animated) */}
        <ValuesSection />
      </div>
    </section>
  );
};

export default Commit;
