// import React from 'react'
// import Image from 'next/image'
// import logo from '@/assets/logo.webp'
// import Link from 'next/link'
// const Header = () => {
//     return (
//         <div className=' w-[80%]  mx-auto px-10'>
//             <div className=' flex items-center py-4 '>
//                 <div className='w-[80%]  flex items-center'>
//                     <Image src={logo} alt='logo' width={220} height={220} />
//                 </div>
//                 <div className='w-full flex items-center gap-8'>
//                     <div className=' w-1/3 flex items-center gap-2'>
//                         <div className='flex items-center border-2  p-2 rounded-full border-blue-500'>
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-blue-600">
//                                 <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
//                             </svg>

//                         </div>
//                         <div className='w-full'>
//                             <h1 className='text-sm font-sans font-light'>Call Us:</h1>
//                             <p className='text-sm text-blue-600 font-semibold font-sans'>0512308328-9</p>
//                         </div>
//                     </div>
//                     <div className=' w-1/2 flex items-center gap-2'>
//                         <div className='flex items-center border-2  p-2 rounded-full border-blue-500'>
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-blue-600">
//                                 <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
//                             </svg>

//                         </div>
//                         <div className='w-full'>
//                             <h1 className='text-sm font-light font-sans '>Visit Us:</h1>
//                             <p className='text-sm  text-blue-600 font-semibold font-san-serif'>House No 02, Main Service
//                                 Road, G-16/4, Islamabad</p>
//                         </div>
//                     </div>
//                     <button className='w-1/4 hover:bg-[#498ef3] hover:text-white bg-[#fab60a]  text-black px-5 py-3 text-lg font-md '>
//                         Contact Us
//                     </button>
//                 </div>

//             </div>


//             <nav className="hidden sm:flex items-center justify-center gap-10 py-7 border-t bg-[#008df2] z-10 relative border-gray-200">
//                 <Link href="/" className="text-white hover:text-[#fab60a] font-semibold">
//                     Home
//                 </Link>
//                 <Link href="/about" className="text-white hover:text-[#fab60a] font-semibold">
//                     About
//                 </Link>
//                 <Link href="/services" className="text-white hover:text-[#fab60a] font-semibold">
//                     Services
//                 </Link>
//                 <Link href="/contact" className="text-white hover:text-[#fab60a] font-semibold">
//                     Contact
//                 </Link>
//             </nav>

//         </div>
//     )
// }

// export default Header

'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '@/assets/logo.webp'
import Link from 'next/link'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className='w-full max-w-[1400px] mx-auto px-4 sm:px-10'>
            {/* Header Top Row */}
            <div className='lg:w-full  flex items-center justify-between gap-6 py-6'>
                {/* Logo */}
                <div className='flex items-center'>
                    <Image src={logo} alt='logo' width={220} height={220} />
                </div>

                {/* Desktop Content */}
                <div className='hidden lg:flex w-1/2 items-center justify-center gap-8'>
                    <div className='w-1/3 flex items-center gap-2'>
                        <div className='flex items-center border-2 p-2 rounded-full border-blue-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-blue-600">
                                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className='w-full'>
                            <h1 className='text-sm font-sans font-light'>Call Us:</h1>
                            <p className='text-md text-blue-600 font-semibold font-sans'>0512308328-9</p>
                        </div>
                    </div>
                    <div className='w-1/2 flex items-center gap-2'>
                        <div className='flex items-center border-2 p-2 rounded-full border-blue-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-blue-600">
                                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className='w-full'>
                            <h1 className='text-sm font-light font-sans '>Visit Us:</h1>
                            <p className='text-md    text-blue-600 font-semibold'>House No 02, Main Service Road, G-16/4, Islamabad</p>
                        </div>
                    </div>
                    <button className='w-1/4 hover:bg-[#498ef3] hover:text-white bg-[#fab60a] text-black px-5 py-3 text-lg font-md'>
                        Contact Us
                    </button>
                </div>

                {/* Mobile Menu Icon */}
                <div className='lg:hidden'>
                    <button onClick={() => setMenuOpen(true)}>
                        <svg className='w-8 h-8 text-yellow-400 ' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Desktop Nav */}
            <nav className='hidden lg:flex items-center justify-center gap-10 py-7 border-t bg-[#008df2] z-10 relative border-gray-200'>
                <Link href='/' className='text-white text-xl hover:text-[#fab60a] font-semibold'>Home</Link>
                <Link href='/about' className='text-white text-xl hover:text-[#fab60a] font-semibold'>About</Link>
                <Link href='/services' className='text-white text-xl hover:text-[#fab60a] font-semibold'>Services</Link>
                <Link href='/contact' className='text-white text-xl hover:text-[#fab60a] font-semibold'>Contact</Link>
            </nav>

            
            {menuOpen && (
                <div className=' w-full h-full  fixed inset-0 flex z-50'> 
                    <div className=' w-[20%] backdrop-blur-lg' onClick={() => setMenuOpen(false)}></div>
                    <div className='w-[80%] bg-white p-6 relative flex flex-col'>
                        <div className='flex items-center'>
                            <Image src={logo} alt='logo' width={140} height={140} />
                        </div>
                        <button className='absolute top-4 right-15 text-5xl text-yellow-400' onClick={() => setMenuOpen(false)}>
                            &times;
                        </button>
                        <nav className='mt-16 flex flex-col gap-6 text- text-lg font-semibold'>
                            <Link href='/' onClick={() => setMenuOpen(false)}>Home</Link>
                            <Link href='/about' onClick={() => setMenuOpen(false)}>About</Link>
                            <Link href='/services' onClick={() => setMenuOpen(false)}>Services</Link>
                            <Link href='/contact' onClick={() => setMenuOpen(false)}>Contact</Link>
                        </nav>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Header