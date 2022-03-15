import { Routes, Route } from "react-router-dom";
import React from 'react';
import { AdminProducts } from "./AdminProducts/AdminProducts";
import { AdminUsers } from "./AdminUsers/AdminUsers";

export function Admin() {
    return (
        <Routes>
            <Route path='/admin/productos' element={<AdminProducts />} />
            <Route path='/admin/usuarios' element={<AdminUsers />} />
        </Routes>
    );
}