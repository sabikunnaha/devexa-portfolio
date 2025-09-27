import { useState } from "react";
import logo from '../assets/logo-1.png'

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="p-4 bg-gray-100 text-gray-800 fixed z-50 w-full">
            <div className="container flex justify-between items-center h-16 mx-auto">

                {/* Logo */}
                <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center">
                    <img className="w-20" src={logo} alt="Logo" />
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6 text-sm">
                    {[
                        ["Home", "/"],
                        ["About", "#about"],
                        ["Service", "#service"],
                        ["Our team", "#team"],
                        ["Contact", "#contact"],
                    ].map(([label, href]) => (
                        <a
                            key={label}
                            href={href}
                            className="hover:opacity-80 font-semibold"
                        >
                            {label}
                        </a>
                    ))}
                </nav>

                {/* CTA Button (Desktop only) */}
                <div className="hidden md:flex items-center space-x-4">
                    <a href="#contact" className="px-4 py-2 bg-gradient-to-br from-blue-100 to-blue-400 font-semibold rounded-md shadow-sm hover:bg-indigo-700">
                        Get in touch
                    </a>
                </div>

                {/* Hamburger button (Mobile only) */}
                <button
                    title="Open menu"
                    type="button"
                    className="p-2 md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 text-gray-800"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-100 border-t border-gray-300">
                    <nav className="flex flex-col items-center gap-4 py-4">
                        {[
                            ["Home", "/"],
                            ["About", "#about"],
                            ["Service", "#service"],
                            ["Our team", "#team"],
                            ["Contact", "#contact"],
                        ].map(([label, href]) => (
                            <a
                                key={label}
                                href={href}
                                className="hover:text-blue-500 font-semibold"
                                onClick={() => setIsOpen(false)} // menu auto-close on click
                            >
                                {label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="px-4 py-2 bg-gradient-to-br from-blue-100 to-blue-400 font-semibold rounded-md shadow-sm hover:bg-indigo-700"
                            onClick={() => setIsOpen(false)}
                        >
                            Get in touch
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;