import React from "react";
import { Routes, Route } from "react-router-dom";
import { FeatureHome } from "./FeatureHome/FeatureHome";
import { FeatureProducts } from "./FeatureProducts/FeatureProducts";
import { FeatureAboutUs } from "./FeatureAboutUs/FeatureAboutUs";

export function Feature() {
    return (
        <Routes>
            <Route path='/' element={<FeatureHome />} />
            <Route path='/productos' element={<FeatureProducts />} />
            <Route path='/nosotros' element={<FeatureAboutUs />} />
        </Routes>
    );
}