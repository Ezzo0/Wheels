import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import CarItem from "./CarItem";

const LatestCars = () => {
    const { cars } = useContext(ShopContext);
    const [latestCars, setLatestCars] = useState([]);

    useEffect(() => {
        const latestCarsArray = cars.slice(0, 10);
        setLatestCars(latestCarsArray);
    }, []);

    return (
        <div className="my-10">
            <div className="text-center py-8 text-3x1">
                <Title text1={"Latest "} text2={"Cars"} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                    Enjoy Your Journey with our New Cars
                </p>
            </div>
            {/* Rendering cars */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {latestCars.map((item, index) => (
                    <CarItem
                        key={index}
                        id={item.id}
                        img={item.image}
                        name={item.name}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default LatestCars;
