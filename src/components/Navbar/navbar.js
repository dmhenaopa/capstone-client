import NavbarItem from "./navbarItem/navbarItem";
import React from 'react';

function Navbar() {
    return (
        <nav>
            <ul>
                <NavbarItem link='/' text={'Inicio'}/>
                <NavbarItem link='/productos' text={'Productos'}/>
                <NavbarItem link='/nosotros' text={'Nosotros'}/>
                <NavbarItem link='/contacto' text={'Contacto'}/>
            </ul>
        </nav>
    );
}

export default Navbar;