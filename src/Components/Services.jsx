
import Image from 'next/image'
import React from 'react'
import Service from '@/assets/service.jpg'
import { FaHeartbeat } from "react-icons/fa";

const Services = () => {
    return (
        <div className='w-full    flex items-center justify-center mb-20'>
            <div className='lg:w-[80%] w-full   lg:h-full  flex flex-col lg:flex-row items-center'>
                <div
                    className="left lg:w-1/2 lg:h-[480px] w-full h-[300px] bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${Service.src})` }}
                ></div>
                <div className='right w-full lg:w-1/2 lg:h-full bg-[#0094f5] flex flex-col items-start p-8 md:p-10'>

                    <p className="text-white font-semibold mb-1 border-l-3 border-[#fab60a] pl-2  ">Services</p>
                    <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
                        Our Experts Will <span className="text-[#fab60a]">Take Care</span> of You
                    </h2>


                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-6">
                        {[
                            "Me tioned",
                            "Medical imaging",
                            "ICU equipments",
                            "Hospital furniture",
                            "Patient care products",
                            "Laboratory",
                        ].map((service, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="bg-white  p-2 rounded-full text-[#0094f5]">
                                    <FaHeartbeat className="w-10 h-10" />
                                </div>
                                <span className="text-white text-sm md:text-base">{service}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div >
        </div >

    )
}

export default Services