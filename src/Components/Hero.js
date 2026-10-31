import React from "react"
import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-gray-900 text-white">
            {/* Background Image with blue overlay */}
            <div className="relative h-[360px] sm:h-[420px] md:h-[460px]">
                <img
                    src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Coding workspace"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-blue-950/90"></div>

                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-3xl mx-auto">
                    <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-300 bg-blue-800/40 border border-blue-400/30 px-3.5 py-1 rounded-full mb-4">
                        React.js Practice Projects
                    </span>
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4 leading-tight">
                        Build Your Future with <span className="text-blue-400">Code</span>
                    </h1>
                    <p className="text-base sm:text-lg text-gray-200 mb-8 max-w-xl mx-auto leading-relaxed">
                        A collection of hands-on mini projects built while learning React, Hooks, Tailwind CSS, and State Management.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <a
                            href="#mini-projects"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-lg shadow-md transition duration-200"
                        >
                            View Projects
                        </a>
                        <Link
                            to="/about-us"
                            className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-medium px-6 py-2.5 rounded-lg backdrop-blur-sm transition duration-200"
                        >
                            About Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero