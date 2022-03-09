import { Routes, Route } from "react-router-dom";
import React from 'react';
import HeaderHome from "./headerHome";
import HeaderProducts from "./headerProducts";
import HeaderAboutUs from "./headerAboutUs";
import HeaderContact from "./headerContact";

function Header() {
    return (
        <Routes>
            <Route path='/' element={<HeaderHome />} />
            <Route path='productos' element={<HeaderProducts />} />
            <Route path='nosotros' element={<HeaderAboutUs />} />
            <Route path='contacto' element={<HeaderContact />} />
        </Routes>
    );
}

export default Header;