import { Routes, Route } from "react-router-dom";
import React, { Fragment } from 'react';
import { UserProducts } from "./UserProducts/UserProducts";
import { UserProfile } from "./UserProfile/UserProfile";

export function User() {
    return (
        <Fragment>
            <Routes>
                <Route path='/ernestop/productos' element={<UserProducts />} />
                <Route path='/ernestop/perfil' element={<UserProfile />} />
            </Routes>
        </Fragment>
    );
}