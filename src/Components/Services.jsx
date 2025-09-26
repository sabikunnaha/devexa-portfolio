import {
    Code,
    Globe,
    ShoppingCart,
    GraduationCap,
    Brain,
    Server,
    Shield,
    Wifi,
    Zap,
    Target,
    Wrench
} from 'lucide-react';

const Services = () => {

    const services = [
        {
            id: 1,
            title: "Software Development",
            icon: Code,
            description: "Custom software solutions tailored to your business needs. We develop scalable, secure, and user-friendly applications using cutting-edge technologies and best practices in software engineering."
        },
        {
            id: 2,
            title: "Web Development",
            icon: Globe,
            description: "Professional web development services from responsive websites to complex web applications. We create modern, fast-loading, and SEO-optimized websites that drive business growth."
        },
        {
            id: 3,
            title: "E-Commerce Solutions",
            icon: ShoppingCart,
            description: "Complete e-commerce platforms with secure payment gateways, inventory management, and customer relationship tools to help you sell online effectively and efficiently."
        },
        {
            id: 4,
            title: "E-Learning Solutions",
            icon: GraduationCap,
            description: "Interactive learning management systems and educational platforms designed to enhance online education with engaging content delivery and progress tracking capabilities."
        },
        {
            id: 5,
            title: "AI Solutions",
            icon: Brain,
            description: "Artificial Intelligence and machine learning solutions to automate processes, analyze data insights, and create intelligent systems that drive innovation and efficiency."
        },
        {
            id: 6,
            title: "IT Infrastructure",
            icon: Server,
            description: "Comprehensive IT infrastructure services including network setup, cloud migration, server management, and system optimization for reliable and scalable operations."
        },
        {
            id: 7,
            title: "Security Solutions",
            icon: Shield,
            description: "Advanced cybersecurity services to protect your digital assets, including threat assessment, security audits, firewall setup, and ongoing security monitoring and maintenance."
        },
        {
            id: 8,
            title: "IoT Solutions",
            icon: Wifi,
            description: "Internet of Things solutions connecting devices and systems to enable smart automation, real-time monitoring, and data-driven decision making for modern businesses."
        },
        {
            id: 9,
            title: "Power Solutions",
            icon: Zap,
            description: "Reliable power management systems including UPS solutions, backup power systems, and energy-efficient infrastructure to ensure uninterrupted business operations."
        },
        {
            id: 10,
            title: "Consulting & Strategy",
            icon: Target,
            description: "Strategic IT consulting services to help businesses align technology with their goals, optimize processes, and make informed decisions for digital transformation."
        },
        {
            id: 11,
            title: "Maintenance & Support",
            icon: Wrench,
            description: "24/7 technical support and maintenance services ensuring your systems run smoothly with regular updates, troubleshooting, and performance optimization."
        }
    ];
    return (
        <div id='service' className="min-h-screen pb-0 pt-16 dark:bg-gray-100">
            <div className='h-1/2 '>
                <div className="">
                    {/* Header Section */}
                    <div className=" max-w-7xl mx-auto px-6">
                        <h1 className="text-4xl font-bold text-gray-800 py-10">SERVICES OFFERED</h1>
                        <p className="text-gray-600 leading-relaxed pt-5 pb-14">
                            We provide comprehensive technology solutions to help businesses thrive in the digital age. Our expert team delivers innovative,
                            scalable <br />and secure services tailored to meet your specific requirements and drive sustainable growth.
                        </p>
                    </div>

                    {/* Two Column Section */}
                    <div className='bg-gradient-to-b from-gray-100 to-gray-300'>
                        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto pb-40  p-6">
                            {/* What We Do Column */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-6">WHAT WE DO</h2>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    We specialize in delivering end-to-end technology solutions that transform businesses and drive digital innovation.
                                    From custom software development to AI-powered solutions, our comprehensive services cover every aspect of modern
                                    technology needs including web development, e-commerce platforms, cybersecurity, and IT infrastructure management.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Our team of experienced professionals works closely with clients to understand their unique challenges and deliver
                                    tailored solutions that not only meet current requirements but also scale with future growth. We combine technical
                                    expertise with strategic thinking to ensure maximum return on technology investments.
                                </p>
                            </div>

                            {/* Why Choose Us Column */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-6">WHY CHOOSE US</h2>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    With years of industry experience and a proven track record of successful project deliveries, we bring unmatched
                                    expertise and reliability to every engagement. Our agile development approach ensures faster time-to-market while
                                    maintaining the highest quality standards and security protocols throughout the development lifecycle.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    We provide ongoing support and maintenance to ensure your systems continue to perform optimally. Our client-centric
                                    approach, competitive pricing, and commitment to innovation make us the ideal technology partner for businesses
                                    looking to leverage technology for competitive advantage and sustainable growth.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Services Cards Section */}
            <div className='relative'>
                {/* Blue Background */}
                <div className='h-1/2 bg-gradient-to-b from-blue-200 to-blue-400 px-6'>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {services.map((service) => (
                            <div key={service.id} className=" pb-18">
                                {/* Icon wrapper */}
                                <div className="relative mb-6 -mt-16 flex justify-center">
                                    <div className="w-32 h-32 bg-white rounded-lg shadow-lg flex items-center justify-center hover:border-blue-300 transition-colors duration-300">
                                        <div className="w-24 h-24 border-2 border-blue-500 rounded-lg flex items-center justify-center transform rotate-45 hover:scale-105 transition-transform duration-300">
                                            <service.icon className="w-12 h-12 text-gray-900 transform -rotate-45" />
                                        </div>
                                    </div>
                                </div>
                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{service.title}</h3>
                                <p className="text-gray-700 leading-relaxed text-sm text-center">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;