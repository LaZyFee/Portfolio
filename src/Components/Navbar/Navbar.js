import React, { Fragment } from 'react';

const Navbar = () => {

    const menuItems = <Fragment>
        <a href='#about'>About</a>
        <a href='#experience'>Exprience</a>
        <a href='#project'>Projects</a>
        <a href='#contact'>Contact </a>

    </Fragment>


    return (
        <div className="navbar text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-24">
                        {menuItems}
                    </ul>
                </div>
                <a href='/' className="btn btn-ghost text-xl normal-case">Rabiul</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 gap-4 text-xl font-medium">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a href="Asset/Rabiul Rafee resume.pdf" download className="btn btn-outline btn-info">
                    Hire Me
                </a>
            </div>
        </div>
    );
};

export default Navbar;

