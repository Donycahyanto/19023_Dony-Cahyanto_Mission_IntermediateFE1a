import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoSvg from '/src/assets/logo.svg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white fixed w-full top-0 left-0 z-50">
            <div
                className="
      mx-auto flex justify-between items-center bg-white transition-all duration-300
      max-w-360 w-full
      h-18.5 
      px-6 
      py-4 
      border-t border-b border-[#F1F1F1]
      shadow-[0px_0px_1px_0px_#3E434A4F,4px_8px_12px_0px_#3E434A26]
      opacity-100
      lg:h-20 
      lg:px-30 
      lg:py-3 
      lg:border-t-0 
      lg:border-b 
      lg:border-[#3A35411F]
      lg:shadow-none
    "
            >
                <div className="block shrink-0">
                    <Link to="/">
                    <img
                        src={logoSvg}
                        alt="videobelajar"
                        className="h-8 w-auto lg:h-9"
                    />
                    </Link>
                </div>

                <div className="hidden lg:flex items-center space-x-9 font-medium text-[16px]">
                    
                        <Link to="/kategori" className="text-text-dark-secondary hover:text-primary transition-colors">
                            Kategori
                        </Link>
                    
                    <div className="flex items-center gap-4">
                        <Link to="/login"
                            className="w-23.5 h-10.5 flex items-center justify-center rounded-[10px] bg-primary text-white hover:bg-primary/90 transition shadow-sm"
                        >
                            Login
                        </Link>
                        <Link to="/register"
                            className="w-29.25 h-10.5 flex items-center justify-center rounded-[10px] border border-primary text-primary hover:bg-primary/5 transition"
                        >
                            Register
                        </Link>
                    </div>
                </div>

                <button
                    className="lg:hidden p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div className="lg:hidden bg-white border-b border-gray-100 shadow-xl absolute w-full left-0 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="flex flex-col p-6 space-y-5 font-medium">
                        
                            <Link to="/kategori" className="block py-2 text-gray-700 hover:text-primary">
                                Kategori
                            </Link>
                        
                        <hr className="border-gray-100" />
                        <li className="flex flex-col gap-3">
                            <a
                                href="/login"
                                className="w-full h-12 flex items-center justify-center rounded-[10px] bg-primary text-white"
                            >
                                Login
                            </a>
                            <a
                                href="/register"
                                className="w-full h-12 flex items-center justify-center rounded-[10px] border border-primary text-primary"
                            >
                                Register
                            </a>
                        </li>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;