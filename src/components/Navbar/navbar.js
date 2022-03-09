import React from 'react';
import { NavbarItem } from "./NavbarItem/NavbarItem";
import { LoginButton } from "./LoginButton/LoginButton";

export function Navbar() {
    return (
        <nav>
            <ul>
                <NavbarItem link='/' text={'Inicio'}/>
                <NavbarItem link='/productos' text={'Productos'}/>
                <NavbarItem link='/nosotros' text={'Nosotros'}/>
                <NavbarItem link='/contacto' text={'Contacto'}/>
            </ul>
            <LoginButton />
        </nav>
    );
}