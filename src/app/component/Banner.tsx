import Navbar from "./Navbar";
import { FaFacebook, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

export default function Banner() {
    return (
        <div
            className="relative bg-white bg-cover bg-center h-[774px] w-full text-black overflow-hidden"
            style={{
                backgroundImage: "url('/images/9f0312342ccde1b50233bde5a875618e944ac805.png')",
            }}
        >
            <Navbar />
            <h1 className="text-8xl font-bold leading-tight  px-32 mx-auto mt-20">
                Trusted <span className="bg-black text-white px-2 rounded-xl">Partner</span> for
                <br />
                Your Website <span className="bg-black text-white px-2 rounded-xl">Develop.</span>
            </h1>

            {/* Social Icons Vertical */}


            {/* Center Content */}
            <div className="md:px-16 lg:px-32 mx-auto mt-20">
                <div className="absolute left-2  top-1/2 mt-32 -translate-y-1/2 flex flex-col items-center gap-8">
                    <div className="ml-42">
                        <a href="https://github.com/ImtiazAhmed01" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-2xl mt hover:scale-110 transition" />
                        </a>
                        <a href="https://www.linkedin.com/in/imtiaz-ahmed-25a357201" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-2xl hover:scale-110 transition mt-3" />
                        </a>
                        <a href="https://www.facebook.com/imtiaz.ahmedar" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="text-2xl hover:scale-110 transition mt-3" />
                        </a>
                        <div className="w-[1px] h-10 bg-black mt-2 ml-3"></div>
                    </div>
                    <div className="rotate-90 -mt-24 text-sm font-mono">@williamsrey</div>

                </div>

                <div className="">
                    {/* Subtext Box */}
                    <div className="mt-6 pl-20 ml-60 text-xl">
                        <p>Building the world’s best marketing websites for over a decade.</p>
                        <p>Your trusted partner for strategy, design, and dev.</p>
                    </div>

                    {/* Avatars and Schedule Button */}
                    <div className="mt-6 flex items-center gap-6">
                        {/* Avatars */}

                        {/* Call Button */}
                        <button className=" ml-[320px] flex items-center gap-2 border-2 border-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition">
                            <FaPhone />
                            <span>Schedule a Call</span>
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
}
