import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import Header from "home/Header";
import Footer from "home/Footer";
import PDPContent from "pdp/PDPContent";
import HomeContent from "home/HomeContent";
import CartContent from "cart/CartContent";


const MainLayout = () => {
    return (
        <Router>
            <div className="mt-10 text-3xl mx-auto max-w-6xl">
                <Header />
                <div className="my-10">
                    <Routes>
                        <Route exact path="/" element={<HomeContent />} />
                        <Route path="/cart" element={<CartContent />} />
                        <Route path="/product/:id" element={<PDPContent />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default MainLayout;