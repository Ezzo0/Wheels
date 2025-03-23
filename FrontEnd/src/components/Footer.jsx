import React from "react";
import { assets } from "../assets/assets";

const footer = () => {
    return (
        <div>
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
                <div>
                    <img className="mb-5 w-32" src={assets.logo} alt="" />
                    <p className="w-full m:w-2/3 text-gray-600">
                        Our car rental company is committed to providing the
                        best service you have ever seen
                    </p>
                </div>
                <div>
                    <p className="text-xl font-medium mb-5">Company</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>Home</li>
                        <li>About us</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <p className="text-xl font-medium mb-5">Get IN Touch</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>+20xxx-xx-xx-xxx</li>
                        <li>contact@hotwheelz.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className="py-5 text-sm text-center">
                    Copyright 2025@FEE - All Right Reserved.
                </p>
            </div>
        </div>
    );
};

export default footer;
