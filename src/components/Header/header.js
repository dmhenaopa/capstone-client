import { Routes, Route } from "react-router-dom";
import React from 'react';
import { HeaderHome } from "./HeaderHome";
import { HeaderProducts } from "./HeaderProducts";
import { HeaderAboutUs } from "./HeaderAboutUs";
import { HeaderContact } from "./HeaderContact";

export function Header() {
    return (
        <Routes>
            <Route path='/' element={<HeaderHome />} />
            <Route path='productos' element={<HeaderProducts />} />
            <Route path='nosotros' element={<HeaderAboutUs />} />
            <Route path='contacto' element={<HeaderContact />} />
        </Routes>
    );
}