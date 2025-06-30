// import React from 'react';
// import ShareButton from './ShareButton';
// import { ArrowDown } from 'lucide-react';

// export default function WorkProcess() {
//     <ShareButton text="Contact" icon={<ArrowDown size={18} />} />

//     return (
//         <div className='md:px-4 lg:px-8'>
//             <section className="min-h-screen rounded-2xl bg-black text-white flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
//                 <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center mb-12 px-4">

//                     <div className="mb-8 md:mb-0">

//                         <ShareButton
//                             text="Contact"
//                             icon={<ArrowDown size={18} />}
//                             iconPosition="left"
//                             border="border-white"

//                         />
//                     </div>


//                     <h1 className="text-4xl md:text-6xl font-bold leading-tight text-center md:text-right">
//                         My Work Process
//                     </h1>
//                 </div>


//                 <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">

//                     <div className="bg-gray-900 rounded-3xl p-8 flex flex-col items-start text-left shadow-lg">
//                         <div className="flex justify-between items-center w-full mb-4">
//                             <span className="bg-teal-200 text-black px-4 py-2 rounded-full font-semibold">
//                                 Discovery
//                             </span>
//                             <span className="ml-[350px]">→</span> <a href="#" className="flex items-center text-gray-400 hover:text-white transition border-b">Read More
//                             </a>
//                         </div>
//                         <p className="text-gray-300">
//                             We start every new client interaction with an in-depth discovery call where we get
//                             to know each other, discuss your current and future objectives, and recommend the
//                             best course of action.
//                         </p>
//                     </div>


//                     <div className="bg-lime-400 text-black rounded-3xl p-8 flex flex-col items-start text-left shadow-lg relative overflow-hidden rotate-3 transform origin-top-left">

//                         <div className="flex justify-between items-center w-full mb-4">
//                             <span className="bg-black text-white px-4 py-2 rounded-full font-semibold">
//                                 Strategy
//                             </span>

//                             <span className="ml-[350px]">→</span> <a href="#" className="flex items-center text-gray-700 hover:text-black transition border-b">Read More
//                             </a>
//                         </div>
//                         <p>
//                             Every end-to-end project of ours begins with a bespoke pre-build strategy. From brand ID
//                             consultation to in-depth client reviews we're here to set the stage for success.
//                         </p>

//                     </div>

//                     <div className="bg-gray-900 rounded-3xl p-8 flex flex-col items-start text-left shadow-lg">
//                         <div className="flex justify-between items-center w-full mb-4">
//                             <span className="bg-teal-200 text-black px-4 py-2 rounded-full font-semibold">
//                                 Design
//                             </span>
//                             <span className="ml-[350px]">→</span> <a href="#" className="flex items-center text-gray-400 hover:text-white transition border-b">Read More
//                             </a>
//                         </div>
//                         <p className="text-gray-300">
//                             After we have a comprehensive understanding of your brand, we'll be ready to move onto design.
//                             Each page or will be designed, reviewed, and given your stamp of approval.
//                         </p>
//                     </div>

//                     <div className="bg-gray-900 rounded-3xl p-8 flex flex-col items-start text-left shadow-lg">
//                         <div className="flex justify-between items-center w-full mb-4">
//                             <span className="bg-teal-200 text-black px-4 py-2 rounded-full font-semibold">
//                                 Build
//                             </span>
//                             <span className="ml-[350px]">→</span> <a href="#" className="flex items-center text-gray-400 hover:text-white transition border-b">Read More
//                             </a>
//                         </div>
//                         <p className="text-gray-300">
//                             Whether we've just finished designing your new site or you're handing off finished designs for us to
//                             develop in Webflow, we're here to apply our trusted development process to your project.
//                         </p>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }
import React from 'react';
import { motion } from 'framer-motion';
import ShareButton from './ShareButton';
import { ArrowDown } from 'lucide-react';

export default function WorkProcess() {
    return (
        <div className='md:px-4 lg:px-8'>
            <section className="min-h-screen rounded-2xl bg-black text-white flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

                <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center mb-12 px-4">
                    <div className="mb-8 md:mb-0">
                        <ShareButton
                            text="Contact"
                            icon={<ArrowDown size={18} />}
                            iconPosition="left"
                            border="border-white"
                        />
                    </div>

                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold leading-tight text-center md:text-right"
                    >
                        My Work Process
                    </motion.h1>
                </div>

                <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gray-900 rounded-3xl p-8 flex flex-col items-start text-left shadow-lg"
                    >
                        <div className="flex justify-between items-center w-full mb-4">
                            <span className="bg-teal-200 text-black px-4 py-2 rounded-full font-semibold">
                                Discovery
                            </span>
                            <span className="ml-[350px]">→</span>
                            <a href="#" className="flex items-center text-gray-400 hover:text-white transition border-b">Read More</a>
                        </div>
                        <p className="text-gray-300">
                            We start every new client interaction with an in-depth discovery call where we get
                            to know each other, discuss your current and future objectives, and recommend the
                            best course of action.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="bg-lime-400 text-black rounded-3xl p-8 flex flex-col items-start text-left shadow-lg relative overflow-hidden rotate-3 transform origin-top-left"
                    >
                        <div className="flex justify-between items-center w-full mb-4">
                            <span className="bg-black text-white px-4 py-2 rounded-full font-semibold">
                                Strategy
                            </span>
                            <span className="ml-[350px]">→</span>
                            <a href="#" className="flex items-center text-gray-700 hover:text-black transition border-b">Read More</a>
                        </div>
                        <p>
                            Every end-to-end project of ours begins with a bespoke pre-build strategy. From brand ID
                            consultation to in-depth client reviews we're here to set the stage for success.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-gray-900 rounded-3xl p-8 flex flex-col items-start text-left shadow-lg"
                    >
                        <div className="flex justify-between items-center w-full mb-4">
                            <span className="bg-teal-200 text-black px-4 py-2 rounded-full font-semibold">
                                Design
                            </span>
                            <span className="ml-[350px]">→</span>
                            <a href="#" className="flex items-center text-gray-400 hover:text-white transition border-b">Read More</a>
                        </div>
                        <p className="text-gray-300">
                            After we have a comprehensive understanding of your brand, we'll be ready to move onto design.
                            Each page will be designed, reviewed, and given your stamp of approval.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        viewport={{ once: true }}
                        className="bg-gray-900 rounded-3xl p-8 flex flex-col items-start text-left shadow-lg"
                    >
                        <div className="flex justify-between items-center w-full mb-4">
                            <span className="bg-teal-200 text-black px-4 py-2 rounded-full font-semibold">
                                Build
                            </span>
                            <span className="ml-[350px]">→</span>
                            <a href="#" className="flex items-center text-gray-400 hover:text-white transition border-b">Read More</a>
                        </div>
                        <p className="text-gray-300">
                            Whether we've just finished designing your new site or you're handing off finished designs for us to
                            develop in Webflow, we're here to apply our trusted development process to your project.
                        </p>
                    </motion.div>

                </div>
            </section>
        </div>
    );
}
