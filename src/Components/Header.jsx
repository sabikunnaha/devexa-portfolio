
import logo from '../assets/logo-1.png'
const Header = () => {
    return (
        <header className="p-4 bg-gray-100 text-gray-800 fixed z-50 w-full ">
            <div className="container flex justify-between h-16 mx-auto">
                <nav className="hidden md:flex items-center gap-6 text-sm  p-4 rounded-full">
                    {[
                        ["Home", "/"],
                        ["About", "#about"],
                        ["service", "#service"],
                    ].map(([label, href]) => (
                        <a key={label} href={href} className="hover:opacity-80 font-semibold">
                            {label}
                        </a>
                    ))}
                </nav>
                <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                    <img className='w-20' src={logo} alt="" />
                </a>
                <div className="flex items-center md:space-x-4">
                     <a href="#team" className="hover:text-blue-300 font-semibold">Our team</a>
                    <a href="#contact" className="px-4 py-2  bg-gradient-to-br from-blue-100 to-blue-400 font-semibold rounded-md shadow-sm hover:bg-indigo-700">Get in touch</a>
                </div>
                <button title="Open menu" type="button" className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;