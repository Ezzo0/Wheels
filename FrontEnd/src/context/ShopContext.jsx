import { createContext, useEffect, useState } from "react";
import { cars } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = "$";
    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [carItem, setCarItem] = useState({});
    const navigate = useNavigate();

    const rentCar = async (itemId, period) => {
        const car = await cars.find((c) => c.id === itemId);
        if (period !== 0) {
            car.period = period;
        } else {
            toast.error("Select Renting period");
            return;
        }
        setCarItem(car);
        navigate("/place-order");
    };

    useEffect(() => {
        console.log(carItem);
    }, [carItem]);

    const value = {
        cars,
        currency,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        carItem,
        rentCar,
        navigate,
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
