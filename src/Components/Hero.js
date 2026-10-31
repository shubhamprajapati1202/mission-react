import React from "react"

const Hero = () => {
    return (
        <section className="relative">
            {/* Carousel */}
            <div id="default-carousel" className="relative w-full" data-carousel="slide">
                <div className="relative h-56 sm:h-72 md:h-96 overflow-hidden rounded-lg">
                    {/* Slide 1 */}
                    <div className="duration-700 ease-in-out" data-carousel-item>
                        <img
                            src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            className="absolute block w-full h-full object-cover"
                            alt="Coding Inspiration 1"
                        />
                    </div>
                    {/* Slide 2 */}
                    <div className="duration-700 ease-in-out" data-carousel-item>
                        <img
                            src="https://images.pexels.com/photos/3861967/pexels-photo-3861967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            className="absolute block w-full h-full object-cover"
                            alt="Coding Inspiration 2"
                        />
                    </div>
                </div>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-blue-900 opacity-40 rounded-lg"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 sm:px-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6">
                    Learn React by <span className="text-yellow-400">Building</span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-2 sm:mb-3">
                    Hands-on mini projects &mdash; Tic-Tac-Toe, Todo, Currency Converter & more!
                </p>
                <p className="text-xs sm:text-sm text-blue-200 mb-5 sm:mb-7">
                    Built by <strong>Shubham Prajapati</strong> while mastering React.js
                </p>
                <a href="/tic-tak-toe" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base md:text-lg rounded shadow-lg transition duration-300">
                    Explore Projects
                </a>
            </div>
        </section>
    )
}

export default Hero
