import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { useLocation } from "react-router-dom";

const NavBar = () => {
    const [visible, setVisible] = useState(false);
    const { showSearch, setShowSearch } = useContext(ShopContext);
    const location = useLocation();
    return (
        <div className="flex items-center justify-between py-5 font-medium">
            <Link to="/">
                <img src={assets.logo} alt="" />
            </Link>
            <ul className="hidden sm:flex gap-5 text-sm text-grey-700">
                <NavLink to="/" className="flex flex-col items-center gap-1">
                    <p>HOME</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></hr>
                </NavLink>
                <NavLink
                    to="/rent"
                    className="flex flex-col items-center gap-1"
                >
                    <p>RENT</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></hr>
                </NavLink>
                <NavLink
                    to="/rentable"
                    className="flex flex-col items-center gap-1"
                >
                    <p>MAKE IT RENTABLE</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></hr>
                </NavLink>
                <NavLink
                    to="/about"
                    className="flex flex-col items-center gap-1"
                >
                    <p>ABOUT</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></hr>
                </NavLink>
            </ul>
            <div className="flex items-center gap-6">
                <img
                    className={`w-5 cursor-pointer ${
                        location.pathname === "/rent" ? "" : "hidden"
                    }`}
                    onClick={() => setShowSearch(!showSearch)}
                    src={assets.search_icon}
                    alt=""
                />
                <div className="group relative">
                    <Link to="/login">
                        <img
                            className="w-5 cursor-pointer"
                            src={assets.profile_icon}
                            alt=""
                        />
                    </Link>
                    <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                        <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-grey-500 rounded">
                            <p className="cursor-pointer hover:text-black">
                                My profile
                            </p>
                            <p className="cursor-pointer hover:text-black">
                                Orders
                            </p>
                            <p className="cursor-pointer hover:text-black">
                                Logout
                            </p>
                        </div>
                    </div>
                </div>
                <Link to="/order" className="relative">
                    <img
                        className="w-7 min-w-7"
                        src={assets.request_quote}
                        alt=""
                    />
                    {/* <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
                        10
                    </p> */}
                </Link>
                <img
                    onClick={() => setVisible(true)}
                    className="w-5 cursor-pointer sm:hidden"
                    src={assets.menu_icon}
                    alt=""
                />
            </div>
            {/* Sidebar menu for small screens */}
            <div
                className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
                    visible ? "w-full" : "w-0"
                }`}
            >
                <div className="flex flex-col text-gray-600">
                    <div
                        onClick={() => setVisible(false)}
                        className="flex items-center gap-4 p-3 cursor-pointer"
                    >
                        <img
                            className="h-4 rotate-180"
                            src={assets.dropdown_icon}
                            alt=""
                        />
                        <p>Back</p>
                    </div>
                    <NavLink
                        onClick={() => setVisible(false)}
                        className="py-2 pl-6 border"
                        to="/"
                    >
                        HOME
                    </NavLink>
                    <NavLink
                        onClick={() => setVisible(false)}
                        className="py-2 pl-6 border"
                        to="/rent"
                    >
                        RENT
                    </NavLink>
                    <NavLink
                        onClick={() => setVisible(false)}
                        className="py-2 pl-6 border"
                        to="/rentable"
                    >
                        MAKE IT RENTABLE
                    </NavLink>
                    <NavLink
                        onClick={() => setVisible(false)}
                        className="py-2 pl-6 border"
                        to="/about"
                    >
                        ABOUT
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
