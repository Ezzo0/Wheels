import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import CarItem from "./CarItem";

const BestSeller = () => {
    const { cars } = useContext(ShopContext);
    const [bestseller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestSellerArray = cars.filter((item) => item.bestseller);
        setBestSeller(bestSellerArray.slice(0, 5));
    }, []);
    return (
        <div className="my-10">
            <div className="text-center text-3xl py-8">
                <Title text1={"Most "} text2={"Rented"} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                    Top Cars
                </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {bestseller.map((item, index) => (
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

export default BestSeller;
