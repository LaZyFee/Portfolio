import React from 'react';
import { NavLink } from 'react-router-dom';
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




    return (
        <div className="navbar text-white shadow-2xl">
            <div className="navbar-start">
                {/* <div className="dropdown">
                    <label tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-24">
                        {menuItems}
                    </ul>
                </div> */}
                <a href='/' className="btn btn-ghost text-xl normal-case">Rabiul <span className='hidden lg:block'>Rafee</span></a>
            </div>
            <div className="navbar-center flex">
                <ul className="menu menu-horizontal p-0 gap-2 lg:gap-4 lg:text-xl lg:font-medium me-5 lg:me-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end flex items-center justify-center">
                <a href="Asset/Rabiul Rafee resume.pdf" download className="relative inline-block px-3 lg:px-6 py-3 font-bold text-white bg-gray-900 border-2 border-transparent rounded-md group">
                    <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform bg-gradient-to-r from-green-400 to-blue-500 opacity-75 blur group-hover:opacity-100 group-hover:blur-md"></span>
                    <span className="relative">Hire Me</span>
                </a>

            </div>
        </div>
    );
};

export default Navbar;

