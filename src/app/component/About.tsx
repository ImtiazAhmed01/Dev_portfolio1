import { ArrowDown } from "lucide-react";
import ShareButton from "./ShareButton";

export default function About() {
    <ShareButton text="About" icon={<ArrowDown size={18} />} />
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center text-center -mt-10 px-4 bg-white overflow-hidden">
            <style>
                {`
          .about-gradient {
            position: absolute;
            top: -100px; 
            left: -100px; 
            width: 150%; 
            height:60%; 
            background: radial-gradient(
  circle at top left,
  rgba(89, 255, 1, 1) 0%, 
  rgba(89, 255, 2, 0.6) 25%, 
  rgba(89, 255, 200, 0.5) 55%, 
  rgba(255, 255, 255, 0) 75%
);
            
            filter: blur(68px); /* Increase blur for a softer, more diffused look */
            pointer-events: none;
            z-index: 0;
          }
        `}
            </style>


            <div className="about-gradient -mt-20"></div>


            <div className="absolute top-4 right-4 z-10 mt-10 mr-90">

                <ShareButton
                    text="About"
                    icon={<ArrowDown size={18} />}
                    iconPosition="left"
                    border="border-black"

                />
            </div>


            <h1 className="lg:text-[78px] md:text-5xl font-bold leading-tight mt-10 mb-6 z-10">
                I’ve been <span className="bg-black text-white px-2 rounded-xl">Developing</span> <br />
                Websites since <span className="bg-black text-white px-2 rounded-xl">2013</span>
            </h1>

            <p className="max-w-xl text-gray-700 mb-12 z-10">
                We start every new client interaction with an in-depth discovery call where we get
                to know each other and recommend the best course of action.
            </p>


            <div className="text-left w-full max-w-5xl z-10 flex">
                <div>
                    <h2 className="text-[26px] font-bold mb-4 ml-10">PREVIOUSLY <br />WORKED ON</h2>
                </div>
                <div className="flex flex-wrap gap-2 justify-center ml-20">
                    <div className="absolute bottom-41 left-1/2 -ml-24 -translate-x-1/2 rotate-10 bg-black text-white px-6 py-4 rounded-full shadow-lg">
                        awwwards.
                    </div>
                    <div className="absolute ml-58 bottom-[116px] left-1/4 -translate-x-1/2 border border-black px-4 py-3 rounded-full shadow-lg">
                        CSS WINNER
                    </div>
                    <div className="absolute bottom-[125px] -ml-[88px] left-1/2 translate-x-4 -rotate-15 border border-black px-4 py-2.5 rounded-full shadow-lg">
                        /thoughtworks
                    </div>
                    <div className="absolute bottom-45 mr-[290px] right-1/4 translate-x-1/2 border border-black px-8 py-2 rounded-full shadow-lg">
                        facebook
                    </div>
                    <div className="absolute bottom-29 -mr-[54px] right-1/2 translate-x-full border border-black px-6 py-2 rounded-full shadow-lg">
                        AUTODESK
                    </div>
                    <div className="absolute bottom-35 mr-[234px] right-1/4 translate-x-full rotate-20 border border-black px-2.5 py-2 rounded-full shadow-lg">
                        CSSDesignAwards
                    </div>

                </div>
            </div>
        </section >
    );
}