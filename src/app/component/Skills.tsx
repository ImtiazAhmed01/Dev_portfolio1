import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import { FaReact } from "react-icons/fa";
import { motion, Variants } from "framer-motion";
import ShareButton from "./ShareButton";

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function Skills() {
    return (
        <div className="md:px-4 lg:px-8 z-20 relative -mt-10">
            <section className="bg-black text-white py-16 px-6 lg:rounded-3xl rounded-2xl">
                <motion.div
                    className="max-w-6xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    {/* Header */}
                    <motion.div
                        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6"
                        variants={itemVariants}
                    >
                        <div>
                            <ShareButton
                                text="Start Project"
                                icon={<ArrowDown size={18} />}
                                iconPosition="left"
                            />
                            <h2 className="text-4xl font-bold leading-snug mt-2">
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
                    </motion.div>

                    {/* Skills Grid */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                        variants={containerVariants}
                    >
                        {[
                            {
                                title: "HTML & CSS",
                                description:
                                    "Clean and responsive design using modern semantic markup and styling.",
                            },
                            {
                                title: "JavaScript",
                                description:
                                    "Interactive, dynamic, and fast frontends powered by JS and modern frameworks.",
                                rotate: "-rotate-2",
                            },
                            {
                                title: "Webflow",
                                description:
                                    "Beautiful no-code solutions built with precision using Webflow tools.",
                            },
                        ].map((skill, i) => (
                            <motion.div
                                key={i}
                                className={`bg-[#1a1a1a] p-6 rounded-2xl hover:scale-105 transition-transform ${skill.rotate || ""
                                    }`}
                                variants={itemVariants}
                            >
                                <FaReact size={48} color="white" />
                                <h3 className="font-bold text-lg mt-4">{skill.title}</h3>
                                <p className="text-sm text-gray-400 mt-2">{skill.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );
}
