

// import Image from 'next/image'
// import React from 'react'
// import team from '@/assets/team.jpg'
// import { FaHeartbeat } from "react-icons/fa";
// import CEO from '@/assets/CEO.webp'
// import CTO from '@/assets/CTO.webp'

// const Partner = () => {
//     return (
//         <div className='w-full  flex items-center justify-center'>
//             <div className="w-full    bg-white  flex justify-center">
//             {/* This wrapper now matches header width */}
//             <div className="w-full Mycontainer  bg-[#498ef3] flex flex-col lg:flex-row items-stretch  overflow-hidden">

//                 {/* Left Section */}
//                 <div className="w-full lg:w-1/2 h-72 md:h-96 lg:h-auto relative flex items-center justify-center">
//                     <Image src={team} alt="team" className="w-full h-full object-cover" />
//                     <div className="absolute inset-0 bg-[#498ef3]/50 z-0" />
//                     <div className="absolute inset-0 z-10 flex flex-col justify-center items-center px-4 text-center gap-4">
//                         <div className="bg-[#fab60a] p-4 rounded-full">
//                             <FaHeartbeat className="text-3xl md:text-4xl text-[#498ef3]" />
//                         </div>
//                         <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold lg:px-4 text-white font-sans leading-tight">
//                             With a Touch of Kindness
//                         </h1>
//                     </div>
//                 </div>

//                 {/* Right Section */}
//                 <div className="w-full Mycontainer flex items-center justify-center py-15 px-4 sm:px-6 md:px-10 lg:px-15 ">
//                     <div className="w-full flex flex-col md:flex-row items-center px-5 justify-between gap-8 ">
//                         {[
//                             { name: "Mudassar Iqbal", role: "CEO", image: CEO },
//                             { name: "Engr. Mudassar Iqbal", role: "CTO", image: CTO },
//                             { name: "Mr. Ali Raza", role: "CFO", image: CEO },
//                         ].map((person, i) => (
//                             <div key={i} className="flex flex-col items-center text-center  ">
//                                 <div className="w-[24vw] h-[24vw] lg:w-[4vw] lg:h-[4vw] rounded-full bg-white overflow-hidden">
//                                     <Image src={person.image} alt={person.name} className="w-full h-full object-cover object-top" />
//                                 </div>
//                                 <h1 className="text-base md:text-lg font-medium text-white mt-3">
//                                     {person.name}
//                                 </h1>
//                                 <h2 className="text-sm md:text-base text-[#fab60a]">{person.role}</h2>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </div>
//     )
// }

// export default Partner

import Image from 'next/image'
import React from 'react'
import team from '@/assets/team.jpg'
import { FaHeartbeat } from "react-icons/fa"
import CEO from '@/assets/CEO.webp'
import CTO from '@/assets/CTO.webp'

const Partner = () => {
  return (
    <div className='w-full flex items-center justify-center'>
      <div className="w-full bg-white flex justify-center">
        {/* Main container */}
        <div className="w-full Mycontainer bg-[#498ef3] flex flex-col lg:flex-row items-stretch overflow-hidden">

          {/* Left Section */}
          <div className="w-full lg:w-1/2 h-72 md:h-96 lg:h-auto relative flex items-center justify-center">
            <Image src={team} alt="team" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#498ef3]/50 z-0" />
            <div className="absolute inset-0 z-10 flex flex-col justify-center items-center px-4 text-center gap-4">
              <div className="bg-[#fab60a] p-4 rounded-full">
                <FaHeartbeat className="text-3xl md:text-4xl text-[#498ef3]" />
              </div>
              <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold lg:px-4 text-white font-sans leading-tight">
                With a Touch of Kindness
              </h1>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full Mycontainer flex items-center justify-center py-15 px-4 sm:px-6 md:px-10 lg:px-15">
            <div className="w-full flex flex-col md:flex-row items-center px-5 justify-between gap-8">
              {[
                { name: "Mudassar Iqbal", role: "CEO", image: CEO },
                { name: "Engr. Mudassar Iqbal", role: "CTO", image: CTO },
                { name: "Mr. Ali Raza", role: "CFO", image: CEO },
              ].map((person, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  {/* Zoom Effect on Hover */}
                  <div className="w-[24vw] h-[24vw] lg:w-[4vw] lg:h-[4vw] rounded-full bg-white overflow-hidden group">
                    <Image
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover object-top transform transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h1 className="text-base md:text-lg font-medium text-white mt-3">
                    {person.name}
                  </h1>
                  <h2 className="text-sm md:text-base text-[#fab60a]">{person.role}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partner
