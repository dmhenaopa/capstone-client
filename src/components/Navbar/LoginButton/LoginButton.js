import React from 'react';
import { login } from './LoginButton.module.css'

export function LoginButton({ to }) {
    return (
        <a href={ to }>
            <button className={login}>Iniciar sesión</button>
        </a>
    );
}