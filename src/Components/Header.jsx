
'use client';
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '@/assets/logo.webp'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const pathname = usePathname();
    return (
        <div className='w-full'>
            {/* Header Top Row with animation */}
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.09, ease: 'easeOut' }}
                className='lg:w-full Mycontainer flex items-center justify-between py-6'
            >
                {/* Logo */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                >
                    <Link href='/' className='flex items-center'>
                        <Image src={logo} alt='logo' width={211} height={211} className='w-37 lg:w-[211px] h-auto' />
                    </Link>
                </motion.div>

                <div className='hidden lg:flex items-center justify-end gap-3 '>
                    {/* Call Us Section */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className='w-1/4 flex items-center justify-end gap-2 cursor-pointer'
                    >
                        <div className='flex items-center border-2 p-2 rounded-full border-blue-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="size-4 text-blue-600" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className='w-full'>
                            <h1 className='text-sm font-sans font-light'>Call Us:</h1>
                            <p className='text-md text-blue-600 font-semibold font-sans '>0512308328-9</p>
                        </div>
                    </motion.div>

                    {/* Address Section */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className='w-1/3 flex items-center gap-2 cursor-pointer'
                    >
                        <div className='flex items-center border-2 p-2 rounded-full border-blue-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="size-4 text-blue-600 " viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className='w-full'>
                            <h1 className='text-sm font-light font-sans'>Visit Us:</h1>
                            <p className='text-md text-blue-600 font-semibold '>House No 02, Main Service Road, G-16/4, Islamabad</p>
                        </div>
                    </motion.div>

                    {/* Contact Button */}
                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: '#498ef3', color: '#fff' }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className='w-1/4 bg-[#fab60a] text-black px-5 py-3 text-lg font-md cursor-pointer'
                    >
                        Contact Us
                    </motion.button>
                </div>

                {/* Mobile Menu Icon */}
                <div className='lg:hidden'>
                    <button onClick={() => setMenuOpen(true)}>
                        <svg className='w-8 h-8 text-yellow-400' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
                        </svg>
                    </button>
                </div>
            </motion.div>

            {/* Desktop Nav */}
            <nav className='hidden Mycontainer lg:flex items-center justify-center gap-20 py-6 border-t bg-[#008df2] z-10 relative border-gray-200'>
                {['/', '/about', '/services', '/contact'].map((href, i) => {
                    const isActive = pathname === href;
                    return (
                        <Link
                            key={i}
                            href={href}
                            className={`text-xl font-medium cursor-pointer transition duration-300 ease-in-out ${isActive ? 'text-[#fab60a] scale-105' : 'text-white hover:text-[#fab60a] hover:scale-105'
                                }`}
                        >
                            {href === '/' ? 'Home' : href.slice(1).charAt(0).toUpperCase() + href.slice(2)}
                        </Link>
                    );
                })}
            </nav>

            {/* Mobile Nav with Smooth Blur & Transition */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className='fixed inset-0 z-50 flex'
                    >
                        {/* Smooth Blur Background */}
                        <motion.div
                            initial={{ backdropFilter: 'blur(0px)', opacity: 0 }}
                            animate={{ backdropFilter: 'blur(8px)', opacity: 1 }}
                            exit={{ backdropFilter: 'blur(0px)', opacity: 0 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            className='absolute inset-0 bg-black/30'
                            onClick={() => setMenuOpen(false)}
                        />
                        {/* Slide-in Menu */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            className='relative ml-auto w-[80%] bg-white p-6 flex flex-col shadow-xl z-50'
                        >
                            <div className='flex items-center'>
                                <Image src={logo} alt='logo' width={140} height={140} />
                            </div>
                            <button className='absolute top-4 right-6 text-5xl text-yellow-400' onClick={() => setMenuOpen(false)}>
                                &times;
                            </button>
                            <nav className='mt-10 flex flex-col gap-6 text-lg font-semibold'>
                                {['/', '/about', '/services', '/contact'].map((href, i) => {
                                    const isActive = pathname === href;
                                    return (
                                        <Link
                                            key={i}
                                            href={href}
                                            onClick={() => setMenuOpen(false)}
                                            className={`transition duration-300 ${isActive ? 'text-[#fab60a]' : 'text-black hover:text-[#fab60a]'
                                                }`}
                                        >
                                            {href === '/' ? 'Home' : href.slice(1).charAt(0).toUpperCase() + href.slice(2)}
                                        </Link>
                                    );
                                })}
                            </nav>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Header
