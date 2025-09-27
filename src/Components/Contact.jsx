import { useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Youtube, MessageCircle } from 'lucide-react';
import bg from "../assets/c-logo.jpg";
const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        console.log('Form submitted:', formData);
        // Handle form submission here
        alert('Message sent successfully!');
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };
    return (
        <div id='contact' className="min-h-screen bg-gradient-to-b from-[#dbeafe]/70 to-blue-400 text-gray-900 relative overflow-hidden pt-24">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:`url(${bg})`,
                }}
            ></div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#dbeafe]/70 to-blue-400"></div>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                {/* Geometric Background Pattern */}
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="geometric" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <circle cx="20" cy="20" r="2" fill="#6B7280" opacity="0.3" />
                            <circle cx="50" cy="35" r="1.5" fill="#6B7280" opacity="0.2" />
                            <circle cx="80" cy="60" r="2.5" fill="#6B7280" opacity="0.15" />
                            <circle cx="30" cy="70" r="1" fill="#6B7280" opacity="0.25" />
                            <circle cx="70" cy="15" r="1.8" fill="#6B7280" opacity="0.2" />
                            <line x1="15" y1="25" x2="35" y2="45" stroke="#6B7280" strokeWidth="0.5" opacity="0.1" />
                            <line x1="60" y1="10" x2="75" y2="25" stroke="#6B7280" strokeWidth="0.3" opacity="0.1" />
                            <line x1="25" y1="75" x2="45" y2="85" stroke="#6B7280" strokeWidth="0.4" opacity="0.1" />
                            <polygon points="85,45 90,35 95,45 90,55" fill="#6B7280" opacity="0.1" />
                            <polygon points="40,15 45,5 50,15 45,25" fill="#6B7280" opacity="0.08" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#geometric)" />
                </svg>

                {/* Additional floating circles */}
                <div className="absolute top-20 left-20 w-32 h-32 border border-gray-600 rounded-full opacity-30"></div>
                <div className="absolute top-40 right-32 w-24 h-24 border border-gray-600 rounded-full opacity-20"></div>
                <div className="absolute bottom-32 left-40 w-16 h-16 border border-gray-600 rounded-full opacity-25"></div>
                <div className="absolute bottom-20 right-20 w-20 h-20 border border-gray-600 rounded-full opacity-15"></div>
                <div className="absolute top-1/2 left-1/4 w-28 h-28 border border-gray-600 rounded-full opacity-20"></div>

                {/* Hexagonal patterns */}
                <div className="absolute top-32 right-1/4 w-12 h-12 opacity-10">
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                        <path d="M17.5 12L12 4.5L6.5 12L12 19.5L17.5 12Z" stroke="#6B7280" strokeWidth="1" />
                    </svg>
                </div>

                <div className="absolute bottom-40 right-40 w-16 h-16 opacity-8">
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                        <path d="M17.5 12L12 4.5L6.5 12L12 19.5L17.5 12Z" stroke="#6B7280" strokeWidth="0.8" />
                    </svg>
                </div>

                {/* Grid lines */}
                <div className="absolute inset-0">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#6B7280" strokeWidth="0.3" opacity="0.1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>
            </div>

            <div className="relative z-10 container mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Section - Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <h1 className="text-5xl font-bold text-gray-900 mb-12">Contact Us</h1>

                            <div className="space-y-8">
                                {/* Address */}
                                <div className="flex items-start space-x-4">
                                    <MapPin className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-gray-900 leading-relaxed">
                                            Your address, 23/6, Your address, Dhaka-1207, Bangladesh
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start space-x-4">
                                    <Phone className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-gray-900">
                                            +880-2-58151538, +880-2-58151542, +880-2-485431377, +880-2-47615029
                                        </p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start space-x-4">
                                    <Mail className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-gray-900">info@devexa-bd.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Contact Form */}
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700 z-20 w-full">
                        <div className="space-y-6">
                            {/* Name Field */}
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full bg-transparent border-b-2 border-gray-600 focus:border-white py-3 px-0 text-white placeholder-gray-400 focus:outline-none transition-colors duration-300"
                                />
                            </div>

                            {/* Email Field */}
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full bg-transparent border-b-2 border-gray-600 focus:border-white py-3 px-0 text-white placeholder-gray-400 focus:outline-none transition-colors duration-300"
                                />
                            </div>

                            {/* Subject Field */}
                            <div>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full bg-transparent border-b-2 border-gray-600 focus:border-white py-3 px-0 text-white placeholder-gray-400 focus:outline-none transition-colors duration-300"
                                />
                            </div>

                            {/* Message Field */}
                            <div>
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full bg-transparent border-b-2 border-gray-600 focus:border-white py-3 px-0 text-white placeholder-gray-400 focus:outline-none resize-none transition-colors duration-300"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4">
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    className=" bg-gradient-to-b from-[#dbeafe]/70 to-blue-400 text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-200 transition-colors duration-300 transform hover:scale-105"
                                >
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Media Icons */}
                <div className="fixed bottom-6 right-6 flex flex-col space-y-4">
                    <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors duration-300 transform hover:scale-110">
                        <Facebook className="w-5 h-5 text-white" />
                    </a>
                    <a href="#" className="bg-blue-400 hover:bg-blue-500 p-3 rounded-full transition-colors duration-300 transform hover:scale-110">
                        <Twitter className="w-5 h-5 text-white" />
                    </a>
                    <a href="#" className="bg-blue-700 hover:bg-blue-800 p-3 rounded-full transition-colors duration-300 transform hover:scale-110">
                        <Linkedin className="w-5 h-5 text-white" />
                    </a>
                    <a href="#" className="bg-red-600 hover:bg-red-700 p-3 rounded-full transition-colors duration-300 transform hover:scale-110">
                        <Youtube className="w-5 h-5 text-white" />
                    </a>
                    <a href="#" className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition-colors duration-300 transform hover:scale-110">
                        <MessageCircle className="w-5 h-5 text-white" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;