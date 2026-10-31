import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const iconMap = {
    faPhone: faPhone,
    faEnvelope: faEnvelope,
    faMapMarkerAlt: faMapMarkerAlt,
};

const PageHeroSection = (props) => {
    return (
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 sm:py-12 md:py-16 lg:py-20">
            <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                    {props.title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl mt-4 sm:mt-6 md:mt-8">
                    {props.subTitle}
                </p>
            </div>
        </div>
    );
};


const CallToAction = (props) => {
    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-blue-600 text-center text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                    {props?.title || 'Ready to Get Started?'}
                </h2>
                <p className="text-base sm:text-lg md:text-xl mt-4 sm:mt-6">
                    {props?.subTitle || 'Join our community and start building amazing projects today!'}
                </p>
                <button className="mt-6 sm:mt-8 px-6 sm:px-8 py-2 sm:py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition duration-200 ease-in-out">
                    {props?.buttonText || 'Sign Up Now'}
                </button>
            </div>
        </section>
    );
};


const AboutSection = () => {
    return (
        <section className="py-12 sm:py-16 bg-gray-100 text-center">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                    About Us
                </h2>
                <p className="text-base sm:text-lg md:text-xl mb-6 max-w-3xl lg:max-w-4xl mx-auto">
                    We are a team of passionate developers creating innovative solutions for the modern world. Our mission is to make programming accessible and fun for everyone.
                </p>
                <button className="bg-blue-500 text-white px-4 sm:px-6 py-2 sm:py-3 md:px-8 md:py-4 rounded-lg hover:bg-blue-700 transition duration-300">
                    Learn More
                </button>
            </div>
        </section>
    )
}

const Testimonial = () => {
    return (
        <section className="py-12 sm:py-16 bg-gray-100 text-center">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                    What Our Users Say
                </h2>
                <div className="max-w-2xl mx-auto">
                    <div className="p-6 sm:p-8 border rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
                        <p className="text-base sm:text-lg md:text-xl mb-4 text-gray-800 italic">
                            "This platform has completely changed the way I think about programming. I can now build full-stack applications effortlessly."
                        </p>
                        <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">
                            John Doe
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600">
                            Software Engineer
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

const FeatureSection = () => {
    const projects = [
        {
            title: "Tic-Tac-Toe Arena",
            tagline: "State Machine & Audio Reactivity",
            desc: "Turn-based match engine featuring an automated toss simulator, sound synthesizers, draw detection, and celebratory confetti effects.",
            link: "/tic-tak-toe",
            category: "Game Engine",
            stack: ["State Machine", "Web Audio", "Confetti FX"],
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
            )
        },
        {
            title: "Context Todo Manager",
            tagline: "Scalable Global State Flow",
            desc: "Full CRUD productivity application decoupled with React Context and custom reducers, maintaining clear separation between actions and rendering.",
            link: "/todo",
            category: "Context API",
            stack: ["React Context", "CRUD State", "Optimistic Flow"],
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
            )
        },
        {
            title: "Live Currency Exchange",
            tagline: "Reactive Data Ingestion Hook",
            desc: "Real-time currency converter utilizing an isolated custom hook (useCurrenciesRates) to fetch, parse, and synchronize global exchange rates.",
            link: "/currency-convert",
            category: "Custom Hooks",
            stack: ["Custom Hook", "Asynchronous Fetch", "Live Rates"],
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "Dynamic Canvas Palette",
            tagline: "Direct DOM Reactivity Patterns",
            desc: "Visual theme manipulator demonstrating state-driven style injection, quick color transitions, and responsive layout adaptations.",
            link: "/background-changer",
            category: "State & DOM",
            stack: ["useState", "CSS Variables", "Event Flow"],
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4 4 4 0 014-4h2v6a2 2 0 01-2 2zm0 0h12a2 2 0 002-2v-6h-2a4 4 0 00-4 4 4 4 0 004 4zM9 13V5a2 2 0 012-2h2a2 2 0 012 2v8" />
                </svg>
            )
        },
        {
            title: "Password Entropy Engine",
            tagline: "Algorithmic Generation & Clipboard",
            desc: "Customizable security tool generating high-entropy credentials based on variable length parameters, character classes, and clipboard synchronization.",
            link: "/password-generator",
            category: "Algorithms",
            stack: ["Cryptographic Logic", "Clipboard API", "Hooks"],
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
            )
        },
        {
            title: "AI Interaction Interface",
            tagline: "Modular Conversation Prototype",
            desc: "Modern AI assistant interface testing structured prompt layouts, message stream representation, and responsive conversational components.",
            link: "/ai-agent",
            category: "AI Interfaces",
            stack: ["Chat Architecture", "UI Componentry", "Async Streams"],
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            )
        }
    ]

    return (
        <section id="interactive-labs" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
                        Hands-on Engineering
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                        Interactive Demonstrations
                    </h2>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                        Practical implementations demonstrating core architectural principles in React 18 &mdash; tested, decoupled, and running entirely client-side.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                    {projects.map((project, index) => (
                        <Link
                            to={project.link}
                            key={index}
                            className="group flex flex-col justify-between bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-400/60 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div>
                                {/* Top Meta Row */}
                                <div className="flex items-center justify-between mb-5">
                                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 border border-blue-100/80 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                        {project.icon}
                                    </div>
                                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                                        {project.category}
                                    </span>
                                </div>

                                {/* Title & Tagline */}
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1.5">
                                    {project.title}
                                </h3>
                                <p className="text-xs font-medium text-slate-400 mb-3 uppercase tracking-wider">
                                    {project.tagline}
                                </p>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                    {project.desc}
                                </p>
                            </div>

                            {/* Card Footer: Tech tags + action */}
                            <div className="pt-4 border-t border-slate-100">
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {project.stack.map((tech, i) => (
                                        <span key={i} className="text-[11px] font-medium bg-slate-50 text-slate-600 px-2 py-0.5 rounded border border-slate-200/60">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center justify-between text-blue-600 font-semibold text-sm">
                                    <span>Launch Application</span>
                                    <span className="transform group-hover:translate-x-1.5 transition-transform duration-200">
                                        &rarr;
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

const NavContactInfoSection = ({ dataList }) => {
    return (
        <section className="bg-gray-800 w-full ">
            <div className="mx-4 sm:mx-6 lg:mx-10 flex text-white py-2 flex-wrap justify-center lg:justify-start">
                {
                    dataList.map(([key, item], index) => (
                        <p key={key} className="mb-2 lg:mb-0 flex items-center text-white">
                            <Link to={item.link} className="hover:underline flex items-center">
                                <FontAwesomeIcon icon={iconMap[item.icon]} className="mr-2" />
                                {item.data}
                            </Link>

                            {index < dataList?.length - 1 && (
                                <span className=" mx-3">|</span>
                            )}
                        </p>
                    ))
                }
            </div>
        </section>
    )
}

const ContactInfoSection = ({ dataList }) => {
    return (
        <section className='bg-gray-100'>
            <div className="container mx-auto py-16 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                {
                    dataList.map((item, index) => (
                        <div className="bg-white shadow-lg p-6 rounded-lg" key={item.title}>
                            <FontAwesomeIcon icon={iconMap[item.icon]} className="text-blue-600 text-3xl mb-4" />
                            <h2 className="text-xl font-bold">{item.title}</h2>
                            <Link to={item.link} rel="noopener noreferrer">
                                <p className="mt-2 text-gray-600">{item.data}</p>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

const MapSection = () => {
    return (
        <section className="bg-gray-100 pt-12">
            <div className="w-full text-center px-4 sm:px-6 md:px-8">
                <h2 className="text-3xl font-bold mb-4 text-blue-600">Our Location</h2>
                <p className="text-gray-600 mb-6">
                    Visit us at our office or contact us for more information. We're always happy to assist!
                </p>
                <div className="rounded-lg shadow-lg overflow-hidden">
                    {/* Google Map Embed */}
                    <iframe
                        title="Our Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14014.861576167213!2d77.31686056977536!3d28.580065148183866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce52550ad94ed%3A0x8e0c8b6bd1429dbb!2sSector%202%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                        className="w-full h-64 sm:h-80 md:h-96 lg:h-112" // Height responsive to screen size
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    )
}

export {
    PageHeroSection,
    AboutSection,
    Testimonial,
    CallToAction,
    FeatureSection,
    ContactInfoSection,
    NavContactInfoSection,
    MapSection
}
