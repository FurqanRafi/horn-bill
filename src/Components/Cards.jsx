import Image from 'next/image'
import React from 'react'
import { FaHeartbeat } from "react-icons/fa";

const Cards = () => {
    return (
        <div className='w-full flex items-center justify-center '>
            <div className='cards w-full lg:w-[80%]  flex items-center gap-2  '>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10  lg:p-9">
                    <div className="border border-gray-200  p-6 text-center shadow-[0_0_6px_rgba(0,0,0,0.05)]">
                        <div className="flex justify-center items-center mb-4 mt-10 ">
                            <div className='bg-[#498ef3] rounded-full px-4 py-4'><FaHeartbeat className='text-5xl text-white' /></div>
                        </div>
                        <h3 className="text-lg font-sans font-medium mb-2">ICU Equipment</h3>
                        <p className="text-sm font-light font-sans  text-black mb-18 ">
                            From advanced ventilators to patient monitors, we supply critical care equipment that ensures patient safety and supports healthcare professionals in delivering optimal care.
                        </p>
                    </div>
                    <div className=" border border-gray-200  p-6 text-center shadow-[0_0_6px_rgba(0,0,0,0.05)]">
                        <div className="flex justify-center mb-4 mt-10">
                            <div className='bg-[#498ef3] rounded-full px-4 py-4'><FaHeartbeat className='text-5xl text-white' /></div>
                        </div>
                        <h3 className="text-lg font-sans font-medium mb-2">Imaging Equipment</h3>
                        <p className="text-sm font-light  font-sans">
                            Our range includes state-of-the-art imaging solutions such as MRI machines, CT scanners, ultrasound devices, and X-ray systems, which provide accurate diagnostics and enhance treatment outcomes.
                        </p>
                    </div>
                    <div className="border border-gray-200  p-6 text-center shadow-[0_0_6px_rgba(0,0,0,0.05)]">
                        <div className="flex justify-center mb-4 mt-10">
                            <div className='bg-[#498ef3] rounded-full px-4 py-4'><FaHeartbeat className='text-5xl text-white' /></div>
                        </div>
                        <h3 className="text-lg font-sans font-medium mb-2">Hospital Furniture</h3>
                        <p className="text-sm font-light text-black font-sans">
                            We offer a variety of hospital furniture designed for comfort, functionality, and durability, including hospital beds, bedside cabinets, and overbed tables, all crafted to support patient recovery and improve workflow efficiency for healthcare staff.
                        </p>
                    </div>
                    <div className="border border-gray-200  p-6 text-center shadow-[0_0_6px_rgba(0,0,0,0.05)] flex flex-col items-center  ">
                        <div className="flex justify-center mb-4 mt-10">
                            <div className='bg-[#498ef3] rounded-full px-4 py-4'><FaHeartbeat className='text-5xl text-white' /></div>
                        </div>
                        <h3 className="text-lg font-sans font-medium mb-2">Patient Care Products</h3>
                        <p className="text-sm font-light  font-sans">
                            From infusion pumps to patient transport systems, our patient care products are designed to enhance the quality of care and ensure patient comfort and safety.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards