import Navbar from "./Navbar";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa";
import SecondaryShareButton from "./SecondaryShareButton";

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


            <div className="md:px-16 lg:px-32 mx-auto mt-20">
                <div className="absolute left-2  top-1/2 mt-32 -translate-y-1/2 flex flex-col items-center gap-8">
                    <div className="ml-42">
                        <a href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="text-2xl mt hover:scale-110 transition -rotate-90" />
                        </a>
                        <a href="https://www.instagram.com/imtiaz_ahmed_ar/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-2xl hover:scale-110 transition mt-3 -rotate-90" />
                        </a>
                        <a href="https://www.facebook.com/imtiaz.ahmedar" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="text-2xl hover:scale-110 transition mt-3 -rotate-90" />
                        </a>
                        <div className="w-[1px] h-10 bg-black mt-2 ml-3"></div>
                    </div>
                    <div className="rotate-270 -mt-24 text-sm font-mono">@williamsrey</div>

                </div>

                <div className="">

                    <div className="mt-6 pl-20 ml-60 text-xl">
                        <p>Building the world’s best marketing websites for over a decade.</p>
                        <p>Your trusted partner for strategy, design, and dev.</p>
                    </div>


                    <div className="mt-6 flex items-center gap-6">

                        <button className=" ml-[320px] flex items-center gap-2 transition">
                            <SecondaryShareButton
                                text="Schedule a Call"
                                iconSrc="https://img.icons8.com/ios/50/phone--v1.png"
                                onClick={() => console.log("Start Project Clicked!")}
                                className="border-black "
                            />

                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
}
