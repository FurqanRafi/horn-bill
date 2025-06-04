import Image from 'next/image'
import React from 'react'
import services from '@/assets/services.jpg'
import Services from '@/Components/Services'


const page = () => {
  return (
    <div className="w-full">


      <div className="w-full h-[80vh] relative -mt-20 mb-20">
        <Image src={services} alt="Aboutbanner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Services
          </h1>
        </div>
      </div>



      <Services />


    </div>
  )
}

export default page