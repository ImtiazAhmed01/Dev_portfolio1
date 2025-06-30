'use client';

// import { useTheme } from "../contexts/ThemeProvider";
import React, { useState, useEffect } from "react";
import SecondaryShareButton from "./SecondaryShareButton";


export default function Navbar() {
    // const { theme, toggleTheme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);
    const [activePath, setActivePath] = useState("");
    useEffect(() => {
        setActivePath(window.location.pathname);
    }, []);

    const isActive = (path: string) =>
        activePath === path ? "border-b-2 border-yellow-400 text-orange-600" : "";

    return (

        <nav className=" px-6 lg:px-12 py-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <button
                        className="lg:hidden p-2 rounded-md hover:bg-gray-100"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </button>
                    <span className="text-xl font-semibold">DEVLOP.ME</span>
                </div>

                <ul className="hidden lg:flex gap-6 font-medium">
                    <li className="mt-3">
                        <a href="/" className={`hover:text-orange-500 ${isActive("/")}`}>
                            Home
                        </a>
                    </li>
                    <li className="mt-3">
                        <a href="/" className={`hover:text-orange-500 ${isActive("/about")}`}>
                            About
                        </a>
                    </li>
                    <li className="mt-3">
                        <a href="/" className={`hover:text-orange-500 ${isActive("/portfolio")}`}>
                            Portfolio
                        </a>
                    </li>
                    <li className="mt-3">
                        <a href="/" className={`hover:text-orange-500  ${isActive("/blog")}`}>
                            Blog
                        </a>
                    </li>
                    <li>
                        <SecondaryShareButton
                            text="Start Project"
                            iconSrc="https://img.icons8.com/?size=100&id=1QOLyXCSaEtK&format=png&color=000000"
                            onClick={() => console.log("Start Project Clicked!")}
                        />

                    </li>
                </ul>


            </div>

            {menuOpen && (
                <ul className="flex flex-col gap-2 mt-4 lg:hidden font-medium">
                    <li>
                        <a href="/" className={`hover:text-orange-500 ${isActive("/")}`}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/blogs" className={`hover:text-orange-500 ${isActive("/blogs")}`}>
                            Blog & News
                        </a>
                    </li>
                    <li>
                        <a href="/services" className={`hover:text-orange-500 ${isActive("/services")}`}>
                            Services
                        </a>
                    </li>
                </ul>
            )}
        </nav>
    );

}


