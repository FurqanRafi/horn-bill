import Image from 'next/image';
import React from 'react';
import {
    FaFacebookF,
    FaInstagram,
    FaGoogle,
    FaLinkedinIn,
    FaPhoneAlt,
    FaMapMarkerAlt,
} from 'react-icons/fa';
import logo from '@/assets/logo.webp';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-[#0095f6] text-white mt-10">
            <div className="w-full Mycontainer py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

                {/* Logo and Intro */}
                <div>
                    <Link href='/' className="flex items-center">
                        <Image src={logo} alt="logo" width={220} height={220} />
                    </Link>
                    <p className="mt-4 text-sm text-white">
                        At HornBill, we are dedicated to enhancing healthcare through the provision of top-quality medical equipment.
                    </p>
                    <h3 className="mt-4 font-semibold">Follow Us:</h3>
                    <div className="flex gap-4 mt-2">
                        <div className="p-3 rounded-full bg-white hover:bg-yellow-400 cursor-pointer">
                            <FaFacebookF className="text-[#0095f6] hover:text-white text-xl" />
                        </div>
                        <div className="p-3 rounded-full bg-white hover:bg-yellow-400 cursor-pointer">
                            <FaInstagram className="text-[#0095f6] hover:text-white text-xl" />
                        </div>
                        <div className="p-3 rounded-full bg-white hover:bg-yellow-400 cursor-pointer">
                            <FaGoogle className="text-[#0095f6] hover:text-white text-xl" />
                        </div>
                        <div className="p-3 rounded-full bg-white hover:bg-yellow-400 cursor-pointer" >
                            <FaLinkedinIn className="text-[#0095f6] hover:text-white text-xl" />
                        </div>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-semibold text-lg text-white border-b-2 border-yellow-400 inline-block mb-2">Quick Links</h3>
                    <ul className="text-sm space-y-2 mt-2 flex flex-col">
                        
                        <Link href='/' className=' hover:text-[#fab60a] font-medium '>Home</Link>
                        <Link href='/about' className=' hover:text-[#fab60a] font-medium '>About</Link>
                        <Link href='/services' className=' hover:text-[#fab60a] font-medium '>Services</Link>
                        <Link href='/contact' className=' hover:text-[#fab60a] font-medium '>Contact</Link>
                    </ul>
                </div>

                {/* Service */}
                <div>
                    <h3 className="font-semibold text-lg text-white border-b-2 border-yellow-400 inline-block mb-2">Service</h3>
                    <ul className="text-sm space-y-2 mt-2">
                        <li className='cursor-pointer hover:text-yellow-400'>Urgent Care</li>
                        <li className='cursor-pointer hover:text-yellow-400'>Dot Testing</li>
                    </ul>
                </div>

                {/* Hours of Operation */}
                <div>
                    <h3 className="font-semibold text-lg text-white border-b-2 border-yellow-400 inline-block mb-2">Hours of Operation</h3>
                    <p className="text-sm mt-2">Mon-Fri 8:00am - 7:30pm</p>
                    <p className="text-sm">Sat-Sun 9:00am - 5:00pm</p>
                </div>

                {/* Get In Touch */}
                <div>
                    <h3 className="font-semibold text-lg text-white border-b-2 border-yellow-400 inline-block mb-2">Get In Touch</h3>
                    <div className="flex items-center gap-2 mt-2 text-sm hover:text-yellow-400 cursor-pointer">
                        <FaPhoneAlt />
                        <span>051-2308328</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-sm hover:text-yellow-400 cursor-pointer">
                        <FaPhoneAlt />
                        <span>0512308328-9</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-sm hover:text-yellow-400 cursor-pointer">
                        <FaMapMarkerAlt />
                        <span>House No 02, Main Service Road, G-16/4, Islamabad</span>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t  border-white text-center py-4 text-sm md:px-6 bg-[#0095f6]">
                <div className='w-full Mycontainer' >
                    © All Rights Reserved 2024 | Develop by DevsRank &nbsp;
                    <a href="#" className="underline">Privacy Policy</a> &nbsp;|&nbsp;
                    <a href="#" className="underline">Disclaimer</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
