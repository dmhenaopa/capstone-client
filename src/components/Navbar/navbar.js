import React from 'react';
import Image from "./../assets/logo.png"
import { NavbarItem } from "./NavbarItem/NavbarItem";
import { LoginButton } from "./LoginButton/LoginButton";
import styles from './Navbar.module.scss';

export function Navbar() {
    return (
        <nav className={styles.navbar}>
            <img className={styles.logoNavbar} src={Image} alt=""></img>
            <ul className={styles.ulNavbar}>
                <NavbarItem link='/' text={'Inicio'}/>
                <NavbarItem link='/productos' text={'Productos'}/>
                <NavbarItem link='/nosotros' text={'Nosotros'}/>
                <NavbarItem link='/contacto' text={'Contacto'}/>
            </ul>
            <LoginButton to={'/login'}/>
        </nav>
    );
}