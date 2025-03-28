import React, { useContext, useState } from "react";
import Title from "../components/Title";
import TotalFees from "../components/TotalFees";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
    const [method, setMethod] = useState("stripe");
    const { navigate } = useContext(ShopContext);
    return (
        <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
            {/* Left Side */}
            <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
                <div className="text-xl sm:text-2xl my-3">
                    <Title text1={"Payment "} text2={""} />
                </div>
                <div className="flex gap-3">
                    <input
                        className="border border-gray-300 rounded py-1.5 px-3.5 w-full "
                        type="text"
                        placeholder="First Name"
                    />
                    <input
                        className="border border-gray-300 rounded py-1.5 px-3.5 w-full "
                        type="text"
                        placeholder="Last Name"
                    />
                </div>
                <input
                    className="border border-gray-300 rounded py-1.5 px-3.5 w-full "
                    type="email"
                    placeholder="Email"
                />
                <div className="flex gap-3">
                    <input
                        className="border border-gray-300 rounded py-1.5 px-3.5 w-full "
                        type="text"
                        placeholder="Phone Number"
                    />
                    <input
                        className="border border-gray-300 rounded py-1.5 px-3.5 w-full "
                        type="text"
                        placeholder="Liecence Number"
                    />
                </div>
                <input
                    className="border border-gray-300 rounded py-1.5 px-3.5 w-full "
                    type="text"
                    placeholder="NationalID Number"
                />
            </div>
            {/* Right Side */}
            <div className="mt-8">
                <div className="mt-8 min-w-80">
                    <TotalFees />
                </div>
                <div className="mt-12 ">
                    <Title text1={"Payment "} text2={"Method"} />
                    <div className="flex gap-3 flex-col lg:flex-row">
                        <div
                            onClick={() => setMethod("stripe")}
                            className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
                        >
                            <p
                                className={`min-w-3.5 h-3.5 border rounded-full ${
                                    method === "stripe" ? "bg-green-400" : ""
                                }`}
                            ></p>
                            <img
                                className="h-5 mx-4"
                                src={assets.stripe_logo}
                                alt=""
                            />
                        </div>
                        <div
                            onClick={() => setMethod("razorpay")}
                            className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
                        >
                            <p
                                className={`min-w-3.5 h-3.5 border rounded-full ${
                                    method === "razorpay" ? "bg-green-400" : ""
                                } `}
                            ></p>
                            <img
                                className="h-5 mx-4"
                                src={assets.razorpay_logo}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="w-full text-end mt-8">
                        <button
                            className="bg-black text-white px-16 py-3 text-sm w-full rounded-md"
                            onClick={() => navigate("/order")}
                        >
                            Pay Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;
