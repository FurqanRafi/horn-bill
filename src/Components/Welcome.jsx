import Image from 'next/image';
import React from 'react';
import about from '@/assets/aboutpic.webp';

const Welcome = () => {
    return (
        <div className='w-full Mycontainer bg-white py-10'>
            <div className='w-full '>
                <div className='w-full flex flex-col lg:flex-row items-center gap-12'>
                    
                    {/* Text Content */}
                    <div className='w-full lg:w-1/2 flex flex-col gap-6 text-left'>
                        <h1 className="text-[#498ef3] font-sans font-semibold border-l-4 border-[#fab60a] pl-2">
                            About Us
                        </h1>

                        <h2 className='text-3xl md:text-4xl font-normal font-sans text-[#498ef3]'>
                            Welcome to Our <span className='text-[#fab60a]'>HornBill</span>
                        </h2>

                        <p className='text-sm md:text-base text-gray-700 font-light tracking-normal leading-relaxed'>
                            At HornBill, we are dedicated to enhancing healthcare through the provision of top-quality medical equipment. As an authorized distributor in the Pakistan market, we take pride in being a trusted partner for healthcare providers, ensuring that they have access to the best tools to deliver exceptional care.
                        </p>

                        <div className='mt-4'>
                            <button className='text-sm md:text-base bg-[#fab60a] px-6 py-2 rounded hover:text-white hover:bg-[#498ef3] transition-all duration-300'>
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Image */}
                    <div className='w-full lg:w-1/2'>
                        <Image
                            className='w-full h-auto object-cover'
                            src={about}
                            alt="About Pic"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
