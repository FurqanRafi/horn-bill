import Image from 'next/image'
import React from 'react'
import vision from '@/assets/vision.webp'

const Vision = () => {
    return (
        <div className="w-full flex items-center justify-center py-8">
            <div className="w-full lg:w-[80%] flex flex-col lg:flex-row items-center gap-8 px-4">
                
                {/* Left: Image */}
                <div className="w-full lg:w-1/2">
                    <Image src={vision} alt="Vision" className="w-full h-auto object-cover" />
                </div>

                {/* Right: Text */}
                <div className="w-full lg:w-1/2 text-left lg:p-10 font-sans ">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#498ef3]  inline-block ">
                        Our <span className="text-[#fab60a]">Vision</span>
                    </h2>
                    <p className="text-sm font-light mt-4 font-sans text-gray-700 leading-relaxed">
                        Our vision is to be the leading provider of medical equipment in Pakistan, renowned for our commitment to quality, innovation, and customer satisfaction. We aim to empower healthcare providers with the tools they need to improve patient outcomes and advance the standards of healthcare.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Vision
