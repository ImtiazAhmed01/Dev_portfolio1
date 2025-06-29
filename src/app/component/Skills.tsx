import { ArrowDown, ArrowLeft, ArrowRight, Atom } from "lucide-react";

export default function Skills() {
    return (
        <div className="lg:px-10 z-20 relative -mt-10">
            <section className="bg-black text-white py-16 px-6 lg:rounded-3xl rounded-2xl">
                <div className="max-w-6xl mx-auto">

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">

                        <div>
                            <div className="flex">
                                <button className="rounded-full border border-white w-8 h-8 flex items-center justify-center hover:bg-white hover:text-black transition">
                                    <ArrowDown size={18} />
                                </button>
                                <button className="border border-white rounded-full px-4 py-1 text-sm mb-4">
                                    Why Choose me
                                </button>
                            </div>

                            <h2 className="text-4xl font-bold leading-snug">
                                My Extensive <br />
                                <span className="text-white">List of Skills</span>
                            </h2>
                        </div>


                        <div className="text-left md:text-right md:max-w-md">
                            <p className="text-sm mb-4">
                                Building the world's best marketing websites. <br />
                                Your trusted partner for strategy, design, and dev.
                            </p>
                            <div className="flex justify-start md:justify-end gap-4">
                                <button className="rounded-full border border-white w-10 h-10 flex items-center justify-center hover:bg-white hover:text-black transition">
                                    <ArrowLeft size={18} />
                                </button>
                                <button className="rounded-full border border-white w-10 h-10 flex items-center justify-center hover:bg-white hover:text-black transition">
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Skills Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="bg-[#1a1a1a] p-6 rounded-2xl hover:scale-105 transition-transform">
                            <Atom className="w-8 h-8 mb-4 text-lime-400" />
                            <h3 className="font-bold text-lg">HTML & CSS</h3>
                            <p className="text-sm text-gray-400 mt-2">
                                Clean and responsive design using modern semantic markup and styling.
                            </p>
                        </div>

                        {/* Card 2 - rotated effect */}
                        <div className="bg-[#1a1a1a] p-6 rounded-2xl transform rotate-[-2deg] hover:scale-105 transition-transform">
                            <Atom className="w-8 h-8 mb-4 text-lime-400" />
                            <h3 className="font-bold text-lg">JavaScript</h3>
                            <p className="text-sm text-gray-400 mt-2">
                                Interactive, dynamic, and fast frontends powered by JS and modern frameworks.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-[#1a1a1a] p-6 rounded-2xl hover:scale-105 transition-transform">
                            <Atom className="w-8 h-8 mb-4 text-lime-400" />
                            <h3 className="font-bold text-lg">Webflow</h3>
                            <p className="text-sm text-gray-400 mt-2">
                                Beautiful no-code solutions built with precision using Webflow tools.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
