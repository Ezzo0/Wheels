import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import CarItem from "../components/CarItem";

const Collection = () => {
    const { cars, search, showSearch } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);
    const [filterCars, setFilterCars] = useState([]);
    const [distance, setDistance] = useState([]);
    const [category, setCategory] = useState([]);
    const [sortType, setSortType] = useState("relavent");

    const toggleDistance = (e) => {
        if (distance.includes(e.target.value)) {
            setDistance((prev) =>
                prev.filter((item) => item !== e.target.value)
            );
        } else {
            setDistance((prev) => [...prev, e.target.value]);
        }
    };
    const toggleCategory = (e) => {
        if (category.includes(e.target.value)) {
            setCategory((prev) =>
                prev.filter((item) => item !== e.target.value)
            );
        } else {
            setCategory((prev) => [...prev, e.target.value]);
        }
    };

    const applyFilter = () => {
        let carsCopy = cars.slice();
        if (showSearch && search) {
            carsCopy = carsCopy.filter((item) =>
                item.name.toLowerCase().includes(search.toLowerCase())
            );
        }
        if (category.length > 0) {
            carsCopy = carsCopy.filter((item) =>
                category.includes(item.category)
            );
        }
        if (distance.length > 0) {
            carsCopy = carsCopy.filter((item) =>
                distance.includes(item.distance)
            );
        }
        setFilterCars(carsCopy);
    };

    const sortCar = () => {
        let fcCopy = filterCars.slice();
        switch (sortType) {
            case "low-high":
                setFilterCars(fcCopy.sort((a, b) => a.price - b.price));
                break;
            case "high-low":
                setFilterCars(fcCopy.sort((a, b) => b.price - a.price));
                break;
            default:
                applyFilter();
                break;
        }
    };

    useEffect(() => {
        applyFilter();
    }, [distance, category, search, showSearch]);

    useEffect(() => {
        sortCar();
    }, [sortType]);

    return (
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
            {/* Filter Options */}
            <div className="min-w-60">
                <p
                    onClick={() => setShowFilter(!showFilter)}
                    className="my-2 text-xl flex items-center cursor-pointer gap-2"
                >
                    Filters
                    <img
                        className={`h-3 sm:hidden ${
                            showFilter ? "rotate-90" : ""
                        }`}
                        src={assets.dropdown_icon}
                        alt=""
                    />
                </p>
                {/* Distance Filter */}
                <div
                    className={`border border-gray-300 pl-5 py-3 mt-6 ${
                        showFilter ? "" : "hidden"
                    } sm:block`}
                >
                    <p className="mb-3 text-sm font-medium">Distances</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        <p className="flex gap-2">
                            <input
                                className="w-3"
                                type="checkbox"
                                value={100}
                                onChange={toggleDistance}
                            />
                            100M
                        </p>
                        <p className="flex gap-2">
                            <input
                                className="w-3"
                                type="checkbox"
                                value={200}
                                onChange={toggleDistance}
                            />
                            200M
                        </p>
                        <p className="flex gap-2">
                            <input
                                className="w-3"
                                type="checkbox"
                                value={300}
                                onChange={toggleDistance}
                            />
                            300M
                        </p>
                    </div>
                </div>
                {/* Type Filter */}
                <div
                    className={`border border-gray-300 pl-5 py-3 my-5 ${
                        showFilter ? "" : "hidden"
                    } sm:block`}
                >
                    <p className="mb-3 text-sm font-medium">Type</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        <p className="flex gap-2">
                            <input
                                className="w-3"
                                type="checkbox"
                                value={"electric"}
                                onChange={toggleCategory}
                            />
                            Electric
                        </p>
                        <p className="flex gap-2">
                            <input
                                className="w-3"
                                type="checkbox"
                                value={"hybrid"}
                                onChange={toggleCategory}
                            />
                            Hybrid
                        </p>
                        <p className="flex gap-2">
                            <input
                                className="w-3"
                                type="checkbox"
                                value={"gas"}
                                onChange={toggleCategory}
                            />
                            Gas
                        </p>
                    </div>
                </div>
            </div>
            {/* Right Side */}
            <div className="flex-1">
                <div className="flex justify-between text-base sm:text-2xl mb-4">
                    <Title text1={"ALL "} text2={"Cars"} />
                    {/* Sorting */}
                    <select
                        onChange={(e) => setSortType(e.target.value)}
                        className="border-2 border-gray-300 text-sm px-2"
                    >
                        <option value="relavent">Sort by: Relavent</option>
                        <option value="low-high">Sort by: Low to High</option>
                        <option value="high-low">Sort by: High to Low</option>
                    </select>
                </div>
                {/* Map Cars */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
                    {filterCars.map((item, index) => (
                        <CarItem
                            key={index}
                            name={item.name}
                            id={item.id}
                            price={item.price}
                            img={item.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Collection;
