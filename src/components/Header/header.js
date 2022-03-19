import { Routes, Route } from "react-router-dom";
import React from 'react';
import { HeaderHome } from "./HeaderHome/HeaderHome";
import { HeaderProducts } from "./HeaderProducts/HeaderProducts";
import { HeaderAboutUs } from "./HeaderAboutUs/HeaderAboutUs";
import { HeaderContact } from "./HeaderContact/HeaderContact";

export function Header() {
    return (
        <Routes>
            <Route path='/' element={<HeaderHome />} />
            <Route path='/productos' element={<HeaderProducts />} />
            <Route path='/nosotros' element={<HeaderAboutUs />} />
            <Route path='/contacto' element={<HeaderContact />} />
        </Routes>
    );
}