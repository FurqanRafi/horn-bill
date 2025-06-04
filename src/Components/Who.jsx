import React from 'react'
import Cards from './Cards'

const Who = () => {
    return (
        <div className='w-full mt-1 mb-10 lg:mb-0  lg:h-screen'>
            <div className="w-full px-4 md:px-12 lg:px-20 flex items-center justify-center">
                <div className="w-full max-w-5xl flex flex-col items-center gap-4 mt-20 text-center">
                    <h1 className="border-l-4 border-r-4 border-[#fab60a] text-[#498ef3] font-medium font-sans px-4 text-sm md:text-base">
                        Who we Are
                    </h1>

                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-normal font-sans text-[#498ef3]">
                        Who We <span className="text-[#fab60a]">Are</span>
                    </h1>

                    <p className="font-light text-sm md:text-base lg:text-sm w-[95%] md:w-[90%] lg:w-[85%] text-gray-700 font-sans tracking-normal">
                        HornBill is a comprehensive supplier of a wide range of medical equipment, catering to various needs within the healthcare industry. Our portfolio includes:
                    </p>
                </div>
            </div>


            <Cards />

        </div>
    )
}

export default Who