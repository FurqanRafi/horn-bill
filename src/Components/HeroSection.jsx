import React from 'react'
import Image from 'next/image'
import banner from '@/assets/banner.webp'

const HeroSection = () => {
  return (
    <div className="w-full relative">
      {/* Background Image */}
      <Image
        src={banner}
        alt="banner"
        className="w-full h-[60vh] sm:h-[50vh] md:h-[80vh] lg:h-screen object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Responsive Container (same as header) */}
      <div className="absolute inset-0 flex items-center justify-center   z-20">
        <div className="w-full px-4 md:px-12  lg:px-20">
          <div className="w-full md:max-w-6xl  max-w-6xl mx-auto">
            <div className=" w-full lg:w-1/2 text-left space-y-6">
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl text-white font-bold leading-tight">
                Better <span className="text-[#008df2]">Healthcare</span> you can get
              </h1>
              <p className="text-white text-sm md:text-base lg:text-lg font-light">
                With years of experience in the medical equipment industry, our team possesses the knowledge and expertise to provide tailored solutions that meet the specific needs of healthcare providers.
              </p>
              <div>
                <button className="text-sm md:text-base bg-[#fab60a] px-6 py-3 rounded hover:text-white hover:bg-[#498ef3] transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
