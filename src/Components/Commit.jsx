import React from 'react'
import ValuesSection from './ValuesSection'

const Commit = () => {
  return (
    <section className="w-full  py-10   bg-white">
      <div className="w-full Mycontainer  text-center">
        {/* Top Headline */}
        <h2 className="border-l-4 border-r-4 border-[#fab60a] inline-block text-[#498ef3] font-medium font-sans px-4 text-sm md:text-base mb-4">
          Our Values: Compassion, Innovation, Trust
        </h2>

        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-sans text-[#498ef3] mb-4">
          Our <span className="text-[#fab60a]">Commitment</span>
        </h1>

        {/* Description */}
        <p className="font-light text-sm sm:text-base lg:text-[15px] text-gray-600 font-sans max-w-3xl mx-auto leading-relaxed mb-12">
          At HornBill, we are committed to delivering excellence in every aspect of our operations.
          We understand the critical role that reliable medical equipment plays in healthcare delivery.
          Therefore, we only partner with leading manufacturers known for their innovation, quality, and reliability.
        </p>

        {/* Values Section Component */}
        <ValuesSection />
      </div>
    </section>
  )
}

export default Commit
