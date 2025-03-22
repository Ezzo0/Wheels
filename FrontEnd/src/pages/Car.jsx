import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedCars from "../components/RelatedCars";

const Car = () => {
    const { carId } = useParams();
    const { cars, currency, rentCar } = useContext(ShopContext);
    const [carData, setCarData] = useState(false);
    const [image, setImage] = useState("");
    const [period, setPeriod] = useState(0);
    const num = [2, 5, 10];

    const fetchCarData = async () => {
        cars.map((item) => {
            if (item.id == carId) {
                setCarData(item);
                setImage(item.image[0]);
                return null;
            }
        });
    };

    useEffect(() => {
        fetchCarData();
    }, [carId]);
    return carData ? (
        <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
            {/* Car Data */}
            <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
                {/* Car Images */}
                <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
                    <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
                        {carData.image.map((item, index) => (
                            <img
                                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                                onClick={() => setImage(item)}
                                key={index}
                                src={item}
                                alt=""
                            />
                        ))}
                    </div>
                    <div className="w-full sm:w-[80%]">
                        <img className="w-full h-auto" src={image} alt="" />
                    </div>
                </div>
                {/* Car Info */}
                <div className="flex-1">
                    <h1 className="font-medium text-2xl mt-2">
                        {carData.name}
                    </h1>
                    <div className="flex items-center gap-1 mt-2">
                        <img className="w-3 5" src={assets.star_icon} alt="" />
                        <img className="w-3 5" src={assets.star_icon} alt="" />
                        <img className="w-3 5" src={assets.star_icon} alt="" />
                        <img className="w-3 5" src={assets.star_icon} alt="" />
                        <img
                            className="w-3 5"
                            src={assets.star_dull_icon}
                            alt=""
                        />
                        <p className="pl-2">(12)</p>
                    </div>
                    <p className="mt-5 text-3xl font-medium">
                        {currency}
                        {carData.price}
                    </p>
                    <p className="mt-5 text-gray-500 md:w-4/5">
                        {carData.description}
                    </p>
                    <div className="flex flex-col gap-4 my-8">
                        <p>Rent for</p>
                        <div className="flex gap-2">
                            {num.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => setPeriod(item)}
                                    className={`border py-2 px-4 bg-gray-100 ${
                                        item === period
                                            ? "border-orange-500"
                                            : ""
                                    }`}
                                >
                                    {item} Days
                                </button>
                            ))}
                        </div>
                    </div>
                    <button
                        className="bg-black text-white px-8 py-3 gap-4 my-3 text-sm active:bg-gray-700"
                        onClick={() => rentCar(carData.id, period)}
                    >
                        Rent Now
                    </button>
                    <button
                        className="bg-black text-white px-8 py-3 gap-4 mx-5 text-sm active:bg-gray-700"
                        onClick={() => {}}
                    >
                        View Location
                    </button>
                    <hr className="mt-8 sm:w-4/5" />
                    <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
                        <p>Verified & Well-Maintained Vehicles</p>
                        <p>Flexible Payment Options</p>
                        <p>Easy Cancellation & Modification Policy</p>
                    </div>
                </div>
            </div>
            {/* Describtion and Review */}
            <div className="mt-20">
                <div className="flex">
                    <p className="border px-5 py-3 text-sm">Reviews (12)</p>
                </div>
                <div className="flex flex-col gap-4 border px-6 py-6 text-sm">
                    <p>Text</p>
                    <p>Other text</p>
                </div>
            </div>
            {/* Related Products */}
            <RelatedCars
                distance={carData.distance}
                category={carData.category}
            />
        </div>
    ) : (
        <div className="opacity-0"></div>
    );
};

export default Car;
