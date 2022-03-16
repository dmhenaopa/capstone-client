import { Routes, Route } from "react-router-dom";
import React, { Fragment } from 'react';
import { UserProducts } from "./UserProducts/UserProducts";
import { UserProfile } from "./UserProfile/UserProfile";

export function User() {
    return (
        <Fragment>
            <Routes>
                <Route path='/user01/productos' element={<UserProducts />} />
                <Route path='/user01/perfil' element={<UserProfile />} />
            </Routes>
        </Fragment>
    );
}