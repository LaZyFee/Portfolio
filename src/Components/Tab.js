import { NavLink } from "react-router-dom";
import React from "react";

function Tab() {
    const menuItems = [
        { name: "Full Stack", path: "/projects" },
        { name: "React", path: "/projects/react" },
        { name: "Node", path: "/projects/node" },
        { name: "JS & DOM", path: "/projects/js-dom" },
    ];

    return (
        <div role="tablist" className="tabs tabs-bordered w-full text-center mx-auto flex justify-center lg:gap-2 p-2">
            {menuItems.map((item) => (
                <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                        `tab ${isActive ? "tab-active font-semibold text-rose-700" : ""} 
                         textarea-xs sm:text-base lg:text-lg whitespace-nowrap`
                    }
                    end
                    role="tab"
                >
                    <span className="inline-flex items-center">
                        {item.name}
                    </span>
                </NavLink>
            ))}
        </div>
    );
}

export default Tab;
