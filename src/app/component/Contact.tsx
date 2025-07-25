import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import ShareButton from './ShareButton';
import SecondaryShareButton from './SecondaryShareButton';


const fadeInStagger: Variants = {
    hidden: (custom: number) => ({
        opacity: 0,
        y: 40,
    }),
    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: custom * 0.2,
            duration: 0.6,
            ease: 'easeOut',
        },
    }),
};

export default function Contact() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <style>
                {`
          .about-gradient {
            position: absolute;
            top: 500px;
            left: -100px;
            width: 150%;
            height: 60%;
            background: radial-gradient(
              circle at bottom right,  
              rgba(204, 255, 2, 1) 30%, 
              rgba(204, 255, 2, 1) 25%, 
              rgba(200, 255, 205, 0.5) 65%, 
              rgba(86, 255, 255, 0.1) 80%
            );
            filter: blur(68px);
            pointer-events: none;
            z-index: 0;
          }
        `}
            </style>

            <motion.div
                className="about-gradient"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            />

            <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center lg:items-start justify-between z-10">

                {/* Left Side */}
                <motion.div
                    className="flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0 lg:w-1/2 pr-0 lg:pr-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0}
                    variants={fadeInStagger}
                >
                    <button className="flex items-center hover:bg-black hover:text-white rounded-full mb-8 transition">
                        <ShareButton
                            text="Contact"
                            icon={<ArrowDown size={18} />}
                            iconPosition="left"
                            border="border-black"
                        />
                    </button>

                    <motion.h1
                        className="text-4xl md:text-6xl font-bold leading-tight mb-6"
                        variants={fadeInStagger}
                        custom={1}
                    >
                        Interested in <span className="bg-white text-black px-2 rounded">work</span> together?
                    </motion.h1>

                    <motion.p
                        className="max-w-md text-gray-400 mb-8"
                        variants={fadeInStagger}
                        custom={2}
                    >
                        We start every new client interaction with an in-depth discovery
                        call where we get to know each other.
                    </motion.p>

                    <motion.div variants={fadeInStagger} custom={3}>
                        <SecondaryShareButton
                            text="Schedule a Call"
                            iconSrc="https://img.icons8.com/ios/50/phone--v1.png"
                            onClick={() => console.log("Start Project Clicked!")}
                        />
                    </motion.div>
                </motion.div>

                {/* Right Side - Form */}
                <motion.div
                    className="bg-black rounded-3xl p-8 shadow-xl lg:w-1/2 xl:w-[600px] flex flex-col items-start text-left relative overflow-hidden"
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full p-4 mb-4 text-white border-b border-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full p-4 mb-4 text-white border-b border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                    <textarea
                        placeholder="Describe your project"
                        className="w-full p-4 mb-6 text-white border-b border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
                    ></textarea>

                    <div className="flex flex-col sm:flex-row w-full justify-between items-center gap-4 mb-8">
                        <SecondaryShareButton
                            text="Send"
                            iconSrc="https://img.icons8.com/?size=100&id=2837&format=png&color=000000"
                            onClick={() => console.log("Send Clicked!")}
                            className="border-white text-white"
                        />
                        <SecondaryShareButton
                            text="Contact me"
                            iconSrc="https://img.icons8.com/?size=100&id=mtfWz20b5AxB&format=png&color=000000"
                            onClick={() => console.log("Contact Me Clicked!")}
                            className="border-white text-white"
                        />
                    </div>

                    <div className="w-full flex flex-col sm:flex-row mt-4 border-t border-gray-700 pt-6 gap-5">
                        <span className="text-gray-400 mb-4 sm:mb-0">@williamrey</span>
                        <div className="flex gap-4">
                            <div className="w-10 h-[1px] bg-white mt-3 ml-3"></div>
                            <a href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="text-2xl rounded-full hover:scale-110 transition bg-white" />
                            </a>
                            <a href="https://www.instagram.com/imtiaz_ahmed_ar/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="text-2xl rounded-full hover:scale-110 transition bg-white" />
                            </a>
                            <a href="https://www.facebook.com/imtiaz.ahmedar" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="text-2xl rounded-full hover:scale-110 transition bg-white" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
