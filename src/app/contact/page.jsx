import Image from 'next/image'
import React from 'react'
import contact from '@/assets/contactus.jpg'
import Contact from '@/Components/Contact'


const page = () => {
  return (
    <div className="w-full ">


            <div className="w-full h-[50vh] mb-20 lg:h-[80vh] relative lg:mt-[-76]">
                <Image src={contact} alt="ContactUs" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center  text-center px-4 max-w-3xl w-full h-full">
                <h1 className="text-white text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    Contact Us
                </h1>
                <p className="text-gray-100 text-sm sm:text-base md:text-lg leading-relaxed">
                    Thank you for considering HornBill for your medical equipment needs. We look forward to the opportunity to serve you and contribute to the success of your healthcare facility. For more information about our products and services, please feel free to contact us.
                </p>
            </div>
            </div>
            
            <Contact />
           

        </div>
  )
}

export default page