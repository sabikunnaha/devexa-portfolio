import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-[#dbeafe]/70 to-blue-400 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Devexa</h2>
            <p className="mt-3 text-gray-800">
              Providing reliable IT solutions and digital services to help your business grow.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-800">
              <li><a href="#" className="hover:text-blue-400">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#service" className="hover:text-blue-400">Services</a></li>
              <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">We availble</h3>
            <div className="text-gray-800 ">
            <p>phone number</p>
            <p>Email Address</p>
            <p>Website Link</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} Devexa. All rights reserved.</p>
         
        </div>
      </div>
    </footer>
    );
};

export default Footer;