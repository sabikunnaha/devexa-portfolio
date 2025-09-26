 import about from "../assets/work-img.jpg";


const About = () => {
    return (
        <section id="about" className=" mx-auto dark:bg-gray-100 px-6 pt-20 pb-12 min-h-screen">
            {/* About Company Section */}
            <h2 className="text-3xl font-bold text-gray-900 max-w-7xl mx-auto my-6">ABOUT DEVEXA </h2>

            {/* Vision & Mission */}
            <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-7xl mx-auto">
                {/* about devexa */}
                <div className="w-lg">
                    <p className="text-gray-700 leading-relaxed mb-10">
                       <span className="text-lg font-semibold  "> Devexa IT Ltd.</span> is a forward-thinking technology company dedicated to delivering innovative IT solutions that empower businesses to thrive in the digital era. We specialize in creating scalable, secure, and user-friendly systems that help organizations streamline operations, enhance productivity, and achieve sustainable growth.With a team of passionate tech experts, we combine creativity, technical expertise, and strategic thinking to provide solutions that truly make an impact.
                    </p>
                </div>
                {/* Vision */}
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">OUR VISION</h3>
                    <p className="text-gray-700 leading-relaxed">
                       To set the benchmark for excellence in technology services worldwide by delivering innovative, secure, and future-ready solutions that empower businesses, accelerate digital transformation, and create lasting value in a rapidly evolving global economy.
                    </p>
                   <hr className="my-8 border-t-2 border-gray-200  mx-auto" />
                </div>
                
                {/* About image */}
                <div>
                    <img className="w-md" src={about} alt="" />
                </div>

                {/* Mission */}
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">OUR MISSION</h3>
                    <p className="text-gray-700 leading-relaxed">
                        To empower businesses through innovative, secure, and scalable technology solutions that drive digital transformation, enhance operational efficiency, and create sustainable value. We are committed to delivering excellence by combining cutting-edge technology with strategic insight, ensuring our clients stay ahead in an ever-evolving digital landscape.
                    </p>
                </div>
            </div>

            {/* Core Values Box */}
            <div className="bg-gradient-to-b from-[#dbeafe]/70 to-blue-400 max-w-5xl mx-auto rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    FOUR CORE BUSINESS VALUES
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Value 1 */}
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                            Excellent in Working
                        </h4>
                        <p className="text-gray-600 text-sm">
                            Delivering high-quality performance in all aspects of our business.
                        </p>
                    </div>

                    {/* Value 2 */}
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                            Unlimited Innovation
                        </h4>
                        <p className="text-gray-600 text-sm">
                            Driving growth through continuous creativity and new solutions.
                        </p>
                    </div>

                    {/* Value 3 */}
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                            Grow Through People
                        </h4>
                        <p className="text-gray-600 text-sm">
                            Empowering our team and clients to achieve sustainable success.
                        </p>
                    </div>

                    {/* Value 4 */}
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                            Customer-first
                        </h4>
                        <p className="text-gray-600 text-sm">
                            Customer-first focus and Security and Reliability form the foundation of Devexa IT
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
