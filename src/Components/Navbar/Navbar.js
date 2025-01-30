import React from 'react';
import { NavLink } from 'react-router-dom';
import ButtonRotatingBackgroundGradient from '../Button/ButtonRotatingBackgroundGradient';

const Navbar = () => {
    const menuItems = [
        { name: "About", path: "/" },
        { name: "Projects", path: "/projects" }
    ].map((item) => (
        <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
                isActive
                    ? "text-rose-500 font-extrabold border-b-4 border-b-red-500"
                    : "hover:border-b-4 hover:border-b-gray-500 transition duration-300"
            }
        >
            {item.name}
        </NavLink>
    ));

    // ✅ Function to handle download
    const handleDownload = () => {
        const resumePath = process.env.PUBLIC_URL + "/Asset/Rabiul Rafee resume.pdf"; // Ensure this file is in `public/Asset/`
        const link = document.createElement("a");
        link.href = resumePath;
        link.setAttribute("download", "Rabiul_Rafee_Resume.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="navbar text-white shadow-2xl">
            <div className="navbar-start">
                <a href='/' className="btn btn-ghost text-xl normal-case">Rabiul <span className='hidden lg:block'>Rafee</span></a>
            </div>
            <div className="navbar-center flex">
                <ul className="menu menu-horizontal p-0 gap-2 lg:gap-4 lg:text-xl lg:font-medium me-5 lg:me-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end flex items-center justify-center">
                <ButtonRotatingBackgroundGradient onClick={handleDownload}>
                    Hire Me
                </ButtonRotatingBackgroundGradient>
            </div>
        </div>
    );
};

export default Navbar;
