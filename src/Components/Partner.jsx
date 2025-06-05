// import Image from 'next/image'
// import React from 'react'
// import team from '@/assets/team.jpg'
// import { FaHeartbeat } from "react-icons/fa";
// import CEO from '@/assets/CEO.webp'
// import CTO from '@/assets/CTO.webp'

// const Partner = () => {
//     return (
//         <div className="w-full  min-h-[40vh] flex justify-center ">
//             <div className="w-full lg:w-[76%] h-auto  bg-[#498ef3] flex flex-col lg:flex-row items-center relative ">

//                 {/* Left Section */}
//                 <div className="w-full lg:w-[35%] h-ful md:h-[300px] lg:h-full relative flex items-center justify-center">
//                     <Image src={team} alt="team" className='w-full h-full object-cover' />
//                     {/* Background Overlay */}
//                     <div className="absolute inset-0 bg-[#498ef3]/50 z-0"></div>

//                     {/* Icon + Heading */}
//                     <div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[40%] z-10 flex flex-col items-center gap-5">
//                         <div className="bg-[#fab60a] p-4 rounded-full">
//                             <FaHeartbeat className="lg:text-4xl text-3xl text-[#498ef3]" />
//                         </div>
//                         <h1 className="text-xl md:text-2xl px-5 lg:text-4xl  w-full text-white font-bold font-sans text-center">
//                             With a Touch of Kindness
//                         </h1>
//                     </div>
//                 </div>

//                 {/* Right Section */}
//                 <div className="w-full lg:ml-20  lg:w-1/2 lg:h-full flex flex-col md:flex-row items-center  justify-center gap-6 md:gap-10 lg:gap-30
//                  py-6 ">
//                     {[
//                         { name: "Mudassar Iqbal", role: "CEO", image: CEO },
//                         { name: "Engr. Mudassar Iqbal", role: "CTO", image: CTO },
//                         { name: "Mr. Ali Raza", role: "CFO", image: CEO },
//                     ].map((person, i) => (
//                             <div key={i} className="flex flex-col items-center justify-center text-center">
//                                 <div className="w-15 h-15 md:w-18 md:h-18 rounded-full bg-white overflow-hidden">
//                                     <Image src={person.image} alt={person.name} className="w-full h-full object-center" />
//                                 </div>
//                                 <h1 className="text-base md:text-lg lg:text-[16px] font-medium font-sans text-white     mt-2">
//                                     {person.name}
//                                 </h1>
//                                 <h2 className="text-sm md:text-base font-sans text-[#fab60a]">{person.role}</h2>
//                             </div>
//                         ))}
//                 </div>
//             </div>
//         </div>

        
//     )
// }

// export default Partner

import Image from 'next/image'
import React from 'react'
import team from '@/assets/team.jpg'
import { FaHeartbeat } from "react-icons/fa";
import CEO from '@/assets/CEO.webp'
import CTO from '@/assets/CTO.webp'

const Partner = () => {
    return (
        <div className='w-full flex items-center justify-center'>
            <div className="w-full max-w-6xl mx-auto  bg-white py-10 flex justify-center">
            {/* This wrapper now matches header width */}
            <div className="w-full lg:w-full bg-[#498ef3] flex flex-col lg:flex-row items-stretch  overflow-hidden">

                {/* Left Section */}
                <div className="w-full lg:w-1/2 h-72 md:h-96 lg:h-auto relative flex items-center justify-center">
                    <Image src={team} alt="team" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-[#498ef3]/50 z-0" />
                    <div className="absolute inset-0 z-10 flex flex-col justify-center items-center px-4 text-center gap-4">
                        <div className="bg-[#fab60a] p-4 rounded-full">
                            <FaHeartbeat className="text-3xl md:text-4xl text-[#498ef3]" />
                        </div>
                        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white font-sans leading-tight">
                            With a Touch of Kindness
                        </h1>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full lg:w-full flex items-center justify-center py-10 px-4 sm:px-6 md:px-8 lg:px-10">
                    <div className="w-full flex flex-col md:flex-row items-center px-8 justify-between gap-8">
                        {[
                            { name: "Mudassar Iqbal", role: "CEO", image: CEO },
                            { name: "Engr. Mudassar Iqbal", role: "CTO", image: CTO },
                            { name: "Mr. Ali Raza", role: "CFO", image: CEO },
                        ].map((person, i) => (
                            <div key={i} className="flex flex-col items-center text-center">
                                <div className="w-[16vw] h-[16vw] lg:w-[4vw] lg:h-[4vw] rounded-full bg-white overflow-hidden">
                                    <Image src={person.image} alt={person.name} className="w-full h-full object-fill" />
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
