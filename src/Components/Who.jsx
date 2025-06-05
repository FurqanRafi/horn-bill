import React from 'react'
import Cards from './Cards'

const Who = () => {
  return (
    <section className="w-full  bg-white py-12 px-4">
      <div className="w-full Mycontainer  flex flex-col items-center text-center space-y-6">
        
        <h2 className="border-l-4 border-r-4 border-[#fab60a] text-[#498ef3] px-4 py-1 font-medium text-sm sm:text-base">
          Who We Are
        </h2>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#498ef3]">
          Who We <span className="text-[#fab60a]">Are</span>
        </h1>

        <p className="text-gray-700 text-sm sm:text-base max-w-3xl font-light">
          HornBill is a comprehensive supplier of a wide range of medical equipment, catering to various needs within the healthcare industry. Our portfolio includes:
        </p>
      </div>

      {/* Cards Section */}
      <div className="mt-10">
        <Cards />
      </div>
    </section>
  )
}

export default Who
