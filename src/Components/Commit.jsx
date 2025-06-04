import React from 'react'
import ValuesSection from './ValuesSection'

const Commit = () => {
  return (
    <div className='w-full mt-1 mb-10 lg:mb-10  lg:h-screen '>
            <div className="w-full px-4 md:px-12 lg:px-20 flex items-center justify-center">
                <div className="w-full max-w-5xl flex flex-col items-center gap-4 mt-20 text-center">
                    <h1 className="border-l-4 border-r-4 border-[#fab60a] text-[#498ef3] font-medium font-sans px-4 text-sm md:text-base">
                        Our Values: Compassion, Innovation, Trust
                    </h1>

                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-normal font-sans text-[#498ef3]">
                        Our <span className="text-[#fab60a]">Commitment</span>
                    </h1>

                    <p className="font-light text-sm md:text-base lg:text-sm w-[95%] md:w-[90%] lg:w-[85%] text-gray-600 font-sans tracking-normal">
                    At HornBill, we are committed to delivering excellence in every aspect of our operations. We understand the critical role that reliable medical equipment plays in healthcare delivery. Therefore, we only partner with leading manufacturers known for their innovation, quality, and reliability.
                    </p>
                </div>
            </div>
            <ValuesSection />
        </div>
  )
}

export default Commit