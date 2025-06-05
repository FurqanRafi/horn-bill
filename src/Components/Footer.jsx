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

const Footer = () => {
    return (
        <footer className="bg-[#0095f6] text-white">
            <div className="w-full lg:max-w-6xl px-4  mx-auto py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                
                {/* Logo and Intro */}
                <div>
                    <div className="flex items-center">
                        <Image src={logo} alt="logo" width={220} height={220} />
                    </div>
                    <p className="mt-4 text-sm text-white">
                        At HornBill, we are dedicated to enhancing healthcare through the provision of top-quality medical equipment.
                    </p>
                    <h3 className="mt-4 font-semibold">Follow Us:</h3>
                    <div className="flex gap-4 mt-2">
                        <div className="p-3 rounded-full bg-white">
                            <FaFacebookF className="text-[#0095f6] text-xl" />
                        </div>
                        <div className="p-3 rounded-full bg-white">
                            <FaInstagram className="text-[#0095f6] text-xl" />
                        </div>
                        <div className="p-3 rounded-full bg-white">
                            <FaGoogle className="text-[#0095f6] text-xl" />
                        </div>
                        <div className="p-3 rounded-full bg-white">
                            <FaLinkedinIn className="text-[#0095f6] text-xl" />
                        </div>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-semibold text-white border-b-2 border-yellow-400 inline-block mb-2">Quick Links</h3>
                    <ul className="text-sm space-y-2 mt-2">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Service</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                {/* Service */}
                <div>
                    <h3 className="font-semibold text-white border-b-2 border-yellow-400 inline-block mb-2">Service</h3>
                    <ul className="text-sm space-y-2 mt-2">
                        <li>Urgent Care</li>
                        <li>Dot Testing</li>
                    </ul>
                </div>

                {/* Hours of Operation */}
                <div>
                    <h3 className="font-semibold text-white border-b-2 border-yellow-400 inline-block mb-2">Hours of Operation</h3>
                    <p className="text-sm mt-2">Mon-Fri 8:00am - 7:30pm</p>
                    <p className="text-sm">Sat-Sun 9:00am - 5:00pm</p>
                </div>

                {/* Get In Touch */}
                <div>
                    <h3 className="font-semibold text-white border-b-2 border-yellow-400 inline-block mb-2">Get In Touch</h3>
                    <div className="flex items-center gap-2 mt-2 text-sm">
                        <FaPhoneAlt />
                        <span>051-2308328</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-sm">
                        <FaPhoneAlt />
                        <span>0512308328-9</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-sm">
                        <FaMapMarkerAlt />
                        <span>House No 02, Main Service Road, G-16/4, Islamabad</span>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white text-center py-4 text-sm bg-[#0095f6]">
                © All Rights Reserved 2024 | Develop by DevsRank &nbsp;
                <a href="#" className="underline">Privacy Policy</a> &nbsp;|&nbsp;
                <a href="#" className="underline">Disclaimer</a>
            </div>
        </footer>
    );
};

export default Footer;
