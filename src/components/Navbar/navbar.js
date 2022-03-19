import React from 'react';
import { Routes, Route } from "react-router-dom";
import Image from "./../assets/logo.png"
import { NavbarItem } from "./NavbarItem/NavbarItem";
import { LoginButton } from "./LoginButton/LoginButton";
import { LogoutButton } from "./LoginButton/LogoutButton";
import styles from './Navbar.module.scss';

export function Navbar() {
    return (
        <nav className={styles.navNavbar}>
            <img className={styles.imgNavbar} src={Image} alt=""></img>
            <ul className={styles.ulNavbar}>
                <NavbarItem link='/' text={'Inicio'}/>
                <NavbarItem link='/productos' text={'Productos'}/>
                <NavbarItem link='/nosotros' text={'Nosotros'}/>
                <NavbarItem link='/contacto' text={'Contacto'}/>
            </ul>
            <Routes>
                <Route path='/' element={<LoginButton />} />
                <Route path='/productos' element={<LoginButton />} />
                <Route path='/nosotros' element={<LoginButton />} />
                <Route path='/contacto' element={<LoginButton />} />
                <Route path='/login' element={<LoginButton />} />
                <Route path='/user01/*' element={<LogoutButton />} />
                <Route path='/admin/*' element={<LogoutButton />} />
            </Routes>
        </nav>
    );
}