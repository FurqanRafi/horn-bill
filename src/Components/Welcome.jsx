import Image from 'next/image';
import React from 'react';
import about from '@/assets/aboutpic.webp';

const Welcome = () => {
    return (
        <div className='w-full px-4 md:px-10 lg:px-20 flex flex-col lg:flex-row items-center justify-center gap-10 pt-10 pb-20'>
            <div className='w-full lg:w-[80%] flex flex-col lg:flex-row items-center gap-20 justify-center'>
                <div className='w-full lg:w-1/2 flex flex-col gap-6 text-left'>
                    <h1 className="text-[#498ef3] font-sans font-semibold inline-block 
               border-l-4 pl-2 border-[#fab60a] 
               lg:border-l-4 lg:pl-2 
               ">
                        About Us
                    </h1>
                    <h1 className='text-3xl md:text-4xl font-sans font-normal text-left text-[#498ef3]'>
                        Welcome to Our <span className='text-[#fab60a]'>HornBill</span>
                    </h1>
                    <p className='font-light text-sm tracking-normal leading-5.5 font-sans t text-gray-700'>
                        At HornBill, we are dedicated to enhancing healthcare through the provision of top-quality medical equipment. As an authorized distributor in the Pakistan market, we take pride in being a trusted partner for healthcare providers, ensuring that they have access to the best tools to deliver exceptional care.
                    </p>
                    <div className='flex justify-start mt-4'>
                        <button className='text-lg bg-[#fab60a]  px-6 py-2 rounded hover:text-white hover:bg-[#498ef3] transition-all duration-300'>
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
    );
};

export default Welcome;
