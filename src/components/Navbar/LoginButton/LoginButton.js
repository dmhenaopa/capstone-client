import React from 'react';
import styles from './LoginButton.module.scss';

export function LoginButton({ to }) {
    return (
        <a href={ to }>
            <button className={styles.buttonNavbarLoginButton}>Iniciar sesión</button>
        </a>
    );
}