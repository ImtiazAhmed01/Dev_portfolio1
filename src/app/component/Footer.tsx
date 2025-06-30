import React from 'react';

export default function Footer() {
    return (
        <div className='md:px-4 lg:px-8'>
            <footer className="bg-black text-white rounded-xl py-16 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between items-start">
                    <div className="mb-10 md:mb-0 text-3xl font-bold">
                        DEVLOP.ME
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12 text-left lg:pl-52">
                        <div className="col-span-full md:col-span-1 lg:col-span-2 xl:col-span-3 mb-8 md:mb-0">
                            <h2 className="text-4xl lg:text-6xl lg:pl-60 font-bold mb-4 md:ml-auto">As you can</h2>
                        </div>


                        <div>

                        </div>


                        <div>
                            <h3 className="font-semibold text-gray-300 mb-4">Say hello</h3>
                            <ul>
                                <li className="mb-2">
                                    <a href="mailto:HELLO@DEVLOP.ME.COM" className="text-gray-400 hover:text-white transition">
                                        HELLO@DEVLOP.ME.COM
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:MAHBUBUL@ME.COM" className="text-gray-400 hover:text-white transition">
                                        MAHBUBUL@ME.COM
                                    </a>
                                </li>
                            </ul>
                            <h3 className="font-semibold text-gray-300 mb-4">Call</h3>
                            <ul>
                                <li className="mb-2">
                                    <a href="tel:+784549498100" className="text-gray-400 hover:text-white transition">
                                        +784549 4981 00
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+88450100211" className="text-gray-400 hover:text-white transition">
                                        +8845 0100 211
                                    </a>
                                </li>
                            </ul>
                        </div>


                        <div>
                            <h3 className="font-semibold text-gray-300 mb-4">Menu</h3>
                            <ul>
                                <li className="mb-2">
                                    <a href="#" className="text-gray-400 hover:text-white transition">
                                        HOME
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-gray-400 hover:text-white transition">
                                        ABOUT
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-gray-400 hover:text-white transition">
                                        PORTFOLIO
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition">
                                        BLOG
                                    </a>
                                </li>
                            </ul>
                        </div>


                        <div>
                            <h3 className="font-semibold text-gray-300 mb-4">Social</h3>
                            <ul>
                                <li className="mb-2">
                                    <a href="#" className="text-gray-400 hover:text-white transition">
                                        TWITTER
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-gray-400 hover:text-white transition">
                                        INSTAGRAM
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-gray-400 hover:text-white transition">
                                        FACEBOOK
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-gray-400 hover:text-white transition">
                                        BEHANCE
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition">
                                        DRIBBBLE
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="w-full max-w-7xl mx-auto border-t border-gray-700 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-gray-500 text-sm">
                    <div className="mb-4 sm:mb-0">BESNIK</div>
                    <div className="mb-4 sm:mb-0">© devlop.me 2022</div>
                    <div className="flex items-center gap-4 relative">


                        <a href="#" className="hover:text-white transition">PRIVACY</a>
                        <a href="#" className="hover:text-white transition">TERMS</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
