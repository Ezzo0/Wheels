import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Rentable from "./pages/Rentable";
import Car from "./pages/Car";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
    return (
        <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px[9vw]">
            <ToastContainer />
            <NavBar />
            <SearchBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/rent" element={<Collection />} />
                <Route path="/about" element={<About />} />
                <Route path="/rentable" element={<Rentable />} />
                <Route path="/car/:carId" element={<Car />} />
                <Route path="/login" element={<Login />} />
                <Route path="/place-order" element={<PlaceOrder />} />
                <Route path="/order" element={<Orders />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
