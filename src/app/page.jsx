"use client";
import { FloatingPaths } from "@/components/FloatingPaths";
import { motion } from "framer-motion";
import FloatingNav from "@/components/floating-nav";
import { Button } from "@/components/ui/button"
import React from "react";
import { Code, Users, Rocket } from "lucide-react";
import SpotlightCard from '@/components/SpotlightCard';
import Steps from "@/components/steps";
import { WorldMap } from "@/components/world-map"
import Link from "next/link"
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-4 mt-8 text-center">
            <nav className="flex justify-center space-x-6">
                <a href="/about" className="hover:underline">About</a>
                <a href="/blog" className="hover:underline">Blog</a>
                <a href="/faqs" className="hover:underline">FAQs</a>
                <a href="/terms" className="hover:underline">Terms</a>
                <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
            </nav>
        </footer>
    );
};

export default function Home({ title = "Find Your Perfect Developer Match" }) {
    const words = title.split(" ");
    return (
        <>
            <FloatingNav />
            <div
                suppressHydrationWarning
                className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
            >

                <div className="absolute inset-0">
                    <FloatingPaths position={1} />
                    <FloatingPaths position={-1} />
                </div>
                <div
                    className={`relative z-10 container mx-auto px-4 md:px-6 text-center `}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="max-w-4xl mx-auto"
                    >

                        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter">
                            {words.map((word, wordIndex) => (
                                <span key={wordIndex} className="inline-block mr-4 last:mr-0">
                                    {word.split("").map((letter, letterIndex) => (
                                        <motion.span
                                            key={`${wordIndex}-${letterIndex}`}
                                            initial={{ y: 100, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{
                                                delay: wordIndex * 0.1 + letterIndex * 0.03,
                                                type: "spring",
                                                stiffness: 150,
                                                damping: 25,
                                            }}
                                            className="inline-block text-transparent bg-clip-text 
                      bg-gradient-to-r from-neutral-900 to-neutral-700/80 
                      dark:from-white dark:to-white/80"
                                        >
                                            {letter}
                                        </motion.span>
                                    ))}
                                </span>
                            ))}
                        </h1>

                        <div
                            className={`inline-block group bg-gradient-to-b from-black/10 to-white/10 
              dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg 
              overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 `}
                        >

                            <Link href='/login'>
                                <Button
                                    variant="ghost"
                                    className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md 
                    bg-white/95 hover:bg-white/100 dark:bg-black/95 dark:hover:bg-black/100 
                    text-black dark:text-white transition-all duration-300 
                    group-hover:-translate-y-0.5 border border-black/10 dark:border-white/10
                    hover:shadow-md dark:hover:shadow-neutral-800/50"
                                >
                                    Get Started
                                    <span
                                        className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
                      transition-all duration-300"
                                    >
                                        →
                                    </span>
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div >
            </div >

            <div className="container  font-size-[20px] text-center mt-5 h-full">
                <div>
                    <Steps />
                </div>
            </div>


            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 w-full p-4">
                {[
                    {
                        icon: <Rocket size={40} className="text-blue-400" />,
                        title: "Innovating with Technology",
                        text: "Building AI-powered, scalable, and secure web solutions to solve real-world problems.",
                        color: "rgba(96, 165, 250,0.5)"
                    },
                    {
                        icon: <Code size={40} className="text-green-400" />,
                        title: "Empowering Developers & Businesses",
                        text: "Providing tools, mentorship, and resources to accelerate innovation and growth.",
                        color: "rgba(74 ,222 ,128 ,0.5)"
                    },
                    {
                        icon: <Users size={40} className="text-purple-400" />,
                        title: "Building a Strong Community",
                        text: "Connecting developers, sharing knowledge, and organizing tech events.",
                        color: "rgba(192, 132, 252,0.5)"
                    },
                ].map((item, index) => (
                    <SpotlightCard
                        key={index}
                        className="custom-spotlight-card w-full max-w-xs sm:max-w-sm"
                        spotlightColor={item.color}
                    >
                        <div className="p-4 sm:p-6 flex flex-col items-center text-center">
                            <div className="mb-4">{item.icon}</div>
                            <div className="mb-4 text-lg font-semibold">{item.title}</div>
                            <p className="text-sm text-gray-300">{item.text}</p>
                        </div>
                    </SpotlightCard>
                ))}
            </div>

            <section className="py-16 bg-gray-100 flex justify-center">
                <div className="max-w-screen-xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">What Our Users Say</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            { name: "Anish", review: "Dev Match helped me find my dream job!" },
                            { name: "Priya", review: "Amazing platform! Found great developers easily." },
                            { name: "Abhay", review: "Amazing platform! Found great developers easily." },
                        ].map(({ name, review }) => (
                            <SpotlightCard
                                key={name}
                                className="custom-spotlight-card w-full max-w-xs sm:max-w-sm bg-black flex flex-col items-center text-center"
                                spotlightColor={"rgba(255,255,255,0.5)"}
                            >
                                <div className="p-4 sm:p-6 flex flex-col items-center text-center">
                                    <div className="mb-4 text-lg text-white font-semibold">{name}</div>
                                    <p className="text-sm text-gray-300">{review}</p>
                                </div>
                            </SpotlightCard>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-blue-600 text-white text-center py-16">
                <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
                <p className="text-lg mt-2">Join thousands of developers and recruiters today.</p>
                <div className="mt-6">
                    <Link href={"/signup"}>
                        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-md">
                            Sign Up Now
                        </button>
                    </Link>
                </div>
            </section>

            <Footer />

        </>
    );
}