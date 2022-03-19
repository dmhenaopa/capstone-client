import { Routes, Route } from "react-router-dom";
import React, { Fragment } from 'react';
import { AdminProducts } from "./AdminProducts/AdminProducts";
import { AdminUsers } from "./AdminUsers/AdminUsers";

export function Admin() {
    return (
        <Fragment>
            <Routes>
                <Route path='/admin/usuarios' element={<AdminUsers />} />
                <Route path='/admin/productos' element={<AdminProducts />} />
            </Routes>
        </Fragment>
    );
}