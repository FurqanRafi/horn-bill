import Image from 'next/image';
import React from 'react';
import Service from '@/assets/service.jpg';
import { FaHeartbeat } from 'react-icons/fa';

const Services = () => {
    return (
        <section className="Mycontainer flex justify-center  pb-3   bg-white">
            <div className=" w-full   flex flex-col lg:flex-row  overflow-hidden">

                {/* LEFT IMAGE SIDE */}
                <div className="relative w-full lg:w-1/2 h-[300px] lg:h-auto">
                    <Image
                        src={Service}
                        alt="Service Image"
                        fill
                        className="object-cover w-full"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                </div>

                {/* RIGHT CONTENT SIDE */}
                <div className="w-full lg:w-1/2 bg-[#0094f5] flex flex-col items-start p-8 md:p-12">
                    <p className="text-white font-semibold mb-2 border-l-4 border-[#fab60a] pl-3 text-sm md:text-base">
                        Services
                    </p>
                    <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-snug mb-4">
                        Our Experts Will <span className="text-[#fab60a]">Take Care</span> of You
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4 w-full">
                        {[
                            'Me tioned',
                            'Medical imaging',
                            'ICU equipments',
                            'Hospital furniture',
                            'Patient care products',
                            'Laboratory',
                        ].map((service, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="bg-white p-2 rounded-full text-[#0094f5]">
                                    <FaHeartbeat className="w-8 h-8" />
                                </div>
                                <span className="text-white text-sm md:text-base">{service}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
