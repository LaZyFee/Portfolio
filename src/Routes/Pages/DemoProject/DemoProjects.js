import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function DemoProjects() {
    const projects = [
        {
            "id": 1,
            "name": "Blog Web App",
            "description": "The Blog Web App is a full-stack application designed for creating, managing, and sharing blog posts.It includes robust authentication features such as user signup, login, email verification, password reset, and token-based route protection. Users can upload images with Multer, manage content effortlessly, and enjoy a dynamic browsing experience powered by Swiper. The application ensures data security with JWT authentication and features a clean, responsive design for optimal user experience.",
            "image": "Asset/Projects/",
            "source": "https://github.com/LaZyFee/Blog_app",
            "live": "",
            "library": [
                "React",
                "NodeJS",
                "Express",
                "MongoDB",
                "mongoose",
                "Multer",
                "JWT",
                "Zustand",
                "Swiper",
                "Axios"
            ]
        },
        {
            "id": 2,
            "name": "Jerin's Parlour",
            "description": "A full-featured parlour management app built using the MERN stack, enabling customers to book, pay, and review services, with an admin portal for service management. Leveraged React and Vite on the frontend and Node.js, Express, MongoDB, Passport.js, and Multer for a secure, flexible backend, including email/password and Google OAuth2 authentication. Integrated Stripe and PayPal for payment processing, ensuring a seamless and secure user experience.",
            "image": "../Asset/Projects/jerins-parlour.png",
            "source": "https://github.com/LaZyFee/jerins-Parlour-Server",
            "live": "https://jerins-parlour-webappx.netlify.app/",
            "library": [
                "React",
                "Tailwind",
                "Axios",
                "Zustand",
                "PassportJS",
                "NodeJS",
                "Express",
                "MongoDB",
                "stripe",
                "Paypal"
            ]
        }, {
            "id": 3,
            "name": "Doctor's Portal",
            "description": "Doctors Portal is a full-stack appointment booking application where users can view available slots for various services by day, book appointments, and make payments using Stripe. The project also includes an admin dashboard, enabling administrators to manage bookings, promote users to admins, view doctor lists, and add new doctors.",
            "image": "Asset/Projects/doctors portal.jpg",
            "source": "https://github.com/LaZyFee/Doctors-portal-client",
            "live": "https://doctors-portal-mern.netlify.app/",
            "library": [
                "React",
                "Tailwind",
                "React-Query",
                "NodeJS",
                "Express",
                "MongoDB",
                "firebase",
                "stripe",
                "NodeMailer"
            ]
        }
    ];

    return (
        <div className="lg:card flex flex-col hero-content border relative overflow-hidden w-full mx-auto [background:linear-gradient(45deg,#080b11,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box]  border-transparent animate-border my-5 py-5">
            {/* Aurora Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-purple-800 to-custom-radial opacity-20 blur-3xl animate-pulse"></div>
            <h1 className="text-4xl font-bold text-red-500 p-4 tracking-wide uppercase">
                Featured Projects
            </h1>

            <div className="space-y-12">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`flex flex-col lg:flex-row items-center gap-8 bg-opacity-40 p-6 rounded-xl shadow-2xl backdrop-blur-md ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                            }`}
                        style={{
                            background: "rgba(255, 255, 255, 0.1)",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                        }}
                    >
                        {/* Image */}
                        <div className="w-full lg:w-1/2">
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-72 object-fit rounded-lg shadow-lg border-2 border-indigo-500/50"
                            />
                        </div>

                        {/* Text Content */}
                        <div className="w-full lg:w-1/2 text-white flex flex-col justify-center">
                            <h2 className="text-3xl font-bold mb-4 text-indigo-300">{project.name}</h2>
                            <p className="text-gray-300 mb-6">{project.description}</p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.library.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="bg-indigo-600 px-3 py-1 rounded-full text-sm font-medium shadow-md"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="flex items-center gap-4">
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-2 bg-green-600 hover:bg-green-500 rounded-lg text-white font-medium transition-all shadow-md"
                                    >
                                        Live Demo <FaExternalLinkAlt />
                                    </a>
                                )}
                                <a
                                    href={project.source}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-medium transition-all shadow-md"
                                >
                                    Code <FaGithub />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full flex justify-end mt-6 pr-6">
                <Link to="/projects">
                    <p className="text-indigo-400 hover:text-orange-500 transition-all duration-300 cursor-pointer underline underline-offset-4 decoration-dotted text-xl">
                        View more →
                    </p>
                </Link>
            </div>

        </div>
    );
}
