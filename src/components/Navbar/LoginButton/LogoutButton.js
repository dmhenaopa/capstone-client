import React from 'react';
import styles from './Button.module.scss';

export function LogoutButton() {
    return (
        <a href='/login'>
            <button className={styles.buttonNavbarLoginButton}>Cerrar sesión</button>
        </a>
    );
}