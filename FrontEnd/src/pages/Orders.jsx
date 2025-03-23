import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Orders = () => {
    const { cars, currency } = useContext(ShopContext);
    return (
        <div className="border-t pt-16">
            <div className="text-2xl">
                <Title text1={"My "} text2={"Bookings"} />
            </div>
            <div className="">
                {cars.slice(1, 4).map((item, index) => (
                    <div
                        key={index}
                        className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                    >
                        <div className="flex items-start gap-6 text-sm">
                            <img
                                className="w-16 sm:w-20"
                                src={item.image[0]}
                                alt=""
                            />
                            <div>
                                <p className="sm:text-base font-medium">
                                    {item.name}
                                </p>
                                <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                                    <p className="text-lg">
                                        {currency}
                                        {item.price}
                                    </p>
                                    <p>From: 1/1/2025</p>
                                    <p>To: 10/1/2025</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Orders;
