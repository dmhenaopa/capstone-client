import React from 'react';
import styles from './Button.module.scss';

export function LoginButton() {
    return (
        <a href='/login'>
            <button className={styles.buttonNavbarLoginButton}>Iniciar sesión</button>
        </a>
    );
}