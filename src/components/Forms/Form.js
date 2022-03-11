import React from "react";
import { Routes, Route } from "react-router-dom";
import { FormHome } from "./FormHome/FormHome";
import { FormContact } from "./FormContact/FormContact";
import { FormLogin } from "./FormLogin/FormLogin";

export function Form() {
    return (
        <Routes>
            <Route path='/' element={<FormHome />} />
            <Route path='/contacto' element={<FormContact />} />
            <Route path='/login' element={<FormLogin />} />
        </Routes>
    );
}