'use client'

import React, { useState, useCallback } from "react";
import dynamic from 'next/dynamic';
import Link from "next/link";
import Categorydropdown from "../Categorydropdown/Categorydropdown";

// Dynamically import icons to reduce initial load
const FaPhoneAlt = dynamic(() => import("react-icons/fa").then(mod => mod.FaPhoneAlt), { ssr: false });
const FaWhatsapp = dynamic(() => import("react-icons/fa").then(mod => mod.FaWhatsapp), { ssr: false });
const MdEmail = dynamic(() => import("react-icons/md").then(mod => mod.MdEmail), { ssr: false });

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = useCallback(() => {
        setMobileMenuOpen(prevState => !prevState);
    }, []);

    return (
        <>
            <nav className="bg-gray-800 text-white sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <Link href="/fast-track-pro-bootcamps" className="flex items-center py-5 px-2">
                            <button aria-label="Pro Bootcamps 2024" className="bg-[#FFBA4A] font-bold text-black px-3 text-sm py-2 md:px-5 md:text-xs">
                                Pro Bootcamps 2024
                            </button>
                        </Link>

                        <div className="hidden lg:flex items-center space-x-4 lg:text-xs xl:text-sm">
                            <Link href="https://eraflip.com/" target="_blank" className="py-5 px-3 hover:underline">
                                Amazon Services
                            </Link>
                            <Link href="https://www.pnygenius.com/" target="_blank" className="py-5 px-3 hover:underline">
                                Kids Courses
                            </Link>
                            <Link href="https://www.joinpnypink.com/" target="_blank" className="py-5 px-3 hover:underline">
                                Female Courses
                            </Link>
                            <Link href="/flyers" className="py-5 px-3 hover:underline">
                                E-Flyers
                            </Link>
                            <Link href="/training-schedule" className="py-5 px-3 hover:underline">
                                Training Schedule
                            </Link>
                            <Link href="/pny-training-fee-structure" className="py-5 px-3 hover:underline">
                                Fee Structure
                            </Link>
                        </div>

                        <button aria-label="Toggle Mobile Menu" className="lg:hidden p-3" onClick={toggleMobileMenu}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className={isMobileMenuOpen ? "lg:hidden" : "hidden"}>
                    <Link href="https://eraflip.com/" target="_blank" className="block py-4 px-6 text-sm hover:bg-gray-700" onClick={toggleMobileMenu}>
                        Amazon Services
                    </Link>
                    <Link href="https://www.pnygenius.com/" target="_blank" className="block py-4 px-6 text-sm hover:bg-gray-700" onClick={toggleMobileMenu}>
                        Kids Courses
                    </Link>
                    <Link href="https://www.joinpnypink.com/" target="_blank" className="block py-4 px-6 text-sm hover:bg-gray-700" onClick={toggleMobileMenu}>
                        Female Courses
                    </Link>
                    <Link href="/flyers" className="block py-4 px-6 text-sm hover:bg-gray-700" onClick={toggleMobileMenu}>
                        E-Flyers
                    </Link>
                    <Link href="/training-schedule" className="block py-4 px-6 text-sm hover:bg-gray-700" onClick={toggleMobileMenu}>
                        Training Schedule
                    </Link>
                    <Link href="/pny-training-fee-structure" className="block py-4 px-6 text-sm hover:bg-gray-700" onClick={toggleMobileMenu}>
                        Fee Structure
                    </Link>
                </div>
            </nav>

            <nav className="flex flex-col border-t border-white border-opacity-30 p-4 gap-4 md:flex-row md:gap-10 justify-center items-center bg-gray-700 bg-opacity-80 text-white">
                <Link href="https://pnyc.pk" target="_blank">
                    <button aria-label="PNY Conference" className="bg-green-400 font-bold text-black px-3 text-sm py-2 md:px-5 md:text-xs">
                        PNY Conference
                    </button>
                </Link>
                <span className="flex gap-3 items-center">
                    <FaPhoneAlt className="mt-1" />
                    UAN - 03041111774
                </span>
                <span className="flex gap-3 items-center">
                    <MdEmail className="mt-1" />
                    info@pnytrainings.com
                </span>
                <span className="flex gap-3 items-center">
                    <FaWhatsapp className="mt-1" />
                    0321-9533335
                </span>

                <Categorydropdown/>
            </nav>
          

        </>
    );
};

export default Navbar;
