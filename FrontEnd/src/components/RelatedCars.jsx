import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import CarItem from "./CarItem";

const RelatedCars = ({ distance, category }) => {
    const { cars } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        if (cars.length > 0) {
            let carsCopy = cars.slice();
            carsCopy = carsCopy.filter((item) => item.distance === distance);
            carsCopy = carsCopy.filter((item) => item.category === category);

            setRelated(carsCopy.slice(0, 5));
        }
    }, [cars]);
    return (
        <div className="my-24">
            <div className="text-center text-3xl py-2">
                <Title text1={"Related "} text2={"Cars"} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {related.map((item, index) => (
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

export default RelatedCars;
