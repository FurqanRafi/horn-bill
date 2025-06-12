

'use client';

import Image from 'next/image';
import React from 'react';
import vision from '@/assets/vision.webp';
import { motion } from 'framer-motion';

const Vision = () => {
    return (
        <section className="w-full Mycontainer flex justify-center py-10 bg-white">
            <div className="w-full flex flex-col lg:flex-row items-center gap-8">
                
                {/* Left: Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2"
                >
                    <Image
                        src={vision}
                        alt="Vision"
                        className="w-full h-auto object-cover"
                    />
                </motion.div>

                {/* Right: Text */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2 text-left lg:p-6"
                >
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#498ef3]">
                        Our <span className="text-[#fab60a]">Vision</span>
                    </h2>
                    <p className="text-sm font-light mt-4 text-gray-700 leading-relaxed">
                        Our vision is to be the leading provider of medical equipment in Pakistan, renowned for our commitment to quality, innovation, and customer satisfaction. We aim to empower healthcare providers with the tools they need to improve patient outcomes and advance the standards of healthcare.
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default Vision;
