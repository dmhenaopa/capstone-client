import { Routes, Route } from "react-router-dom";
import React from 'react';
import { StepsHome } from "./StepsHome/StepsHome";

export function Steps() {
    return (
        <Routes>
            <Route path='/' element={<StepsHome />} />
        </Routes>
    );
}