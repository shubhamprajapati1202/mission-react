import React from "react"
import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-slate-900 text-white py-16 sm:py-24 lg:py-28">
            {/* Background subtle radial glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
                {/* Status Pill Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-sky-200 text-xs sm:text-sm font-medium mb-6 backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
                    Interactive React Engineering Workspace
                </div>

                {/* Primary Headline */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                    Practical React Patterns, <br className="hidden sm:inline" />
                    <span className="bg-gradient-to-r from-sky-400 via-blue-300 to-indigo-200 bg-clip-text text-transparent">
                        Engineered From Scratch
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg lg:text-xl text-blue-100/90 max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
                    A focused laboratory showcasing functional components, state orchestrations, custom reactive hooks, and asynchronous workflows in production React 18.
                </p>

                {/* Call to action buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <a
                        href="#interactive-labs"
                        className="px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-all duration-200 hover:-translate-y-0.5"
                    >
                        Explore Applications ↓
                    </a>
                    <Link
                        to="/tic-tak-toe"
                        className="px-7 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-sm sm:text-base border border-white/20 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5"
                    >
                        Try Game Demo
                    </Link>
                </div>

                {/* Micro tech stack indicators */}
                <div className="mt-12 pt-8 border-t border-blue-700/40 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm text-blue-200/70 font-medium">
                    <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span> React 18.3
                    </span>
                    <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span> Context API
                    </span>
                    <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span> Custom Hooks
                    </span>
                    <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span> Tailwind CSS
                    </span>
                    <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span> React Router v7
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Hero