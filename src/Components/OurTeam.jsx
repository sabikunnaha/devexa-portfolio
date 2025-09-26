import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";


const OurTeam = () => {

    const team = [
        {
            name: "Alex Grinfield",
            role: "programming guru",
            img: "https://via.placeholder.com/300x300.png?text=Alex",
            socials: [
                { icon: <FaFacebookF />, link: "#" },
                { icon: <FaTwitter />, link: "#" },
                { icon: <FaInstagram />, link: "#" },
            ],
        },
        {
            name: "Ann Richmond",
            role: "creative leader",
            img: "https://via.placeholder.com/300x300.png?text=Ann",
            socials: [
                { icon: <FaFacebookF />, link: "#" },
                { icon: <FaTwitter />, link: "#" },
                { icon: <FaInstagram />, link: "#" },
            ],
        },
        {
            name: "Jeffrey Brown",
            role: "manager",
            img: "https://via.placeholder.com/300x300.png?text=Jeffrey",
            socials: [
                { icon: <FaFacebookF />, link: "#" },
                { icon: <FaTwitter />, link: "#" },
                { icon: <FaInstagram />, link: "#" },
            ],
        },
    ];

    return (
        <div className="bg-white min-h-screen px-6 py-12">
            {/* Title */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-2">Our Team</h2>
                <div className="w-12 h-1 bg-gray-900 mx-auto mb-4"></div>
                <p className="text-gray-600 text-sm max-w-xl mx-auto">
                    Sample text. Click to select the text box. Click again or double click to start editing the text.
                </p>
                <p className="text-gray-500 text-sm mt-2">
                    Images from <a href="#" className="text-blue-500 underline">Freepik</a>
                </p>
            </div>


            {/* Team Section */}
            <div className="relative flex justify-center items-center">
                {/* blue bar background */}
                <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-16 bg-gradient-to-b from-blue-200 to-blue-400 z-0"></div>


                {/* Team Cards */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 z-10">
                    {team.map((member, index) => (
                        <div key={index} className={`text-center ${index === 1 ? "mt-16" : index === 2 ? "mt-24" : "mt-0"
                            }`}>
                            <div className="bg-white shadow-md overflow-hidden">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-64 h-64 object-cover"
                                />
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-gray-900">{member.name}</h3>
                            <p className="text-gray-500 text-sm mb-3">{member.role}</p>
                            <div className="flex justify-center gap-4 text-blue-500 text-lg">
                                {member.socials.map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.link}
                                        className="hover:text-blue-600"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurTeam;