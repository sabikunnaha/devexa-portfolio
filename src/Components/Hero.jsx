import React, { useEffect, useState } from "react";
import bg from "../assets/bg.jpg";

const Hero = () => {

    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const titles = [
        'Secure Payment & IT Solutions',
        'Secure. Scalable. Smart IT Solutions',
        'Custom software for business automation',
        'E-Commerce Solutions',
        'E-Learning Solutions',
        'AI-powered business insights'
    ];

    useEffect(() => {
        const currentTitle = titles[currentIndex];
        const typingSpeed = isDeleting ? 50 : 100;

        const timeout = setTimeout(() => {
            if (!isDeleting && displayText === currentTitle) {
                // Pause at the end before deleting
                setTimeout(() => setIsDeleting(true), 2000);
                return;
            }

            if (isDeleting && displayText === '') {
                setIsDeleting(false);
                setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
                return;
            }

            if (isDeleting) {
                setDisplayText(currentTitle.substring(0, displayText.length - 1));
            } else {
                setDisplayText(currentTitle.substring(0, displayText.length + 1));
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayText, currentIndex, isDeleting, titles]);
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                {/* Overlay (only bottom half) */}
                <div className="absolute inset-0">
                    {/* Top half clear */}
                    <div className="h-1/2 mt-5">
                        <div className=" flex flex-col justify-center items-center pt-8">
                            <h2 className="font-semibold text-gray-900 text-lg">Devexa IT Ltd.</h2>

                            <div className="h-20 flex items-center justify-center mb-8">
                                <h2 className="text-2xl md:text-4xl dark:text-white text-gray-800 font-semibold">
                                    {displayText}
                                    <span className="animate-pulse text-gray-800">|</span>
                                </h2>
                            </div>
                            <div className="text-xs text-gray-500"></div>
                        </div>
                    </div>



                    {/* Bottom half gradient overlay */}
                    <div className="h-1/2 bg-gradient-to-b from-[#dbeafe]/70 to-blue-400"></div>
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center px-4 min-h-screen">
                {/* Hexagon */}
                <div className="relative w-80 h-96 flex items-center justify-center">
                    {/* Hexagon shape */}
                    <div className="absolute inset-0 clip-hexagon bg-white shadow-xl"></div>

                    {/* Inside Content */}
                    <div className="relative text-center p-8">
                        <h1 className="text-4xl text-gray-900 font-bold">COMPANY</h1>
                        <h2 className="text-3xl text-gray-900 font-bold mt-2">PROFILE</h2>
                        <p className="mt-4 text-lg text-sky-600 font-medium">
                            YOUR BUSINESS SOLUTION <br /> IN TECHNOLOGY SERVICES
                        </p>
                        <div className="mt-6 bg-gray-900 text-white px-6 py-2 rounded-md inline-block">
                            2030
                        </div>
                    </div>
                </div>

                {/* Bottom Info */}
                <div className="mt-12 grid grid-cols-3 gap-8 text-white max-w-3xl text-center">
                    <div>
                        <p className="font-bold">CONTACT</p>
                        <p className="text-sm">+88 123 543 0100</p>
                        <p className="text-sm">youremail@email.com</p>
                    </div>
                    <div>
                        <p className="font-bold">YOUR COMPANY NAME</p>
                        <p className="text-sm">www.companywebsite.com</p>
                    </div>
                    <div>
                        <p className="font-bold">LOCATION</p>
                        <p className="text-sm">
                            Pleasant View Street No 70 <br />
                            West Nolia City, LN Design
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
