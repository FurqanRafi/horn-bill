import React from 'react'
import banner from '@/assets/banner.webp'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className='w-full h-screen' >

      <div className="w-full relative mt-[-80px]">

        <Image
          src={banner}
          alt="banner"
          className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen object-cover"
          priority
        />


        <div className="absolute inset-0 bg-black/60" />
      </div>



      <div className="absolute top-1/2 left-0 transform  -translate-y-[20%] w-full px-4 sm:px-8 md:px-16  lg:px-24">
        <div className="w-full lg:w-1/2 flex flex-col gap-6  text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight font-bold">
            Better <span className="text-[#008df2]">Healthcare</span> you can get
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg font-light">
            With years of experience in the medical equipment industry, our team possesses the knowledge and expertise to provide tailored solutions that meet the specific needs of healthcare providers.
          </p>
          <div className="flex justify-start">
            <button className="text-lg bg-[#fab60a] px-6 py-3 rounded hover:text-white hover:bg-[#498ef3] transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>



    </div>
  )
}

export default HeroSection