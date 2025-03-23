import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const TotalFees = () => {
    const { currency, carItem } = useContext(ShopContext);
    const rentalFees = parseInt(carItem.price);
    const serviceFees = rentalFees * 0.1;
    return (
        <div className="w-full">
            <div className="text-2xl">
                <Title text1={"Total "} text2={"Fees"} />
            </div>
            <div className="flex flex-col gap-2 mt-2 text-sm">
                <div className="flex justify-between">
                    <p>Total rental fee:</p>
                    <p>
                        {currency}
                        {rentalFees}
                    </p>
                </div>
                <hr />
                <div className="flex justify-between">
                    <p> Service fee:</p>
                    <p>
                        {currency}
                        {serviceFees}
                    </p>
                </div>
                <hr />
                <div className="flex justify-between">
                    <p> Total cost:</p>
                    <p>
                        {currency}
                        {rentalFees + serviceFees}
                    </p>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default TotalFees;
