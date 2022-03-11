import React from 'react';
/* import { login } from './LoginButton.module.css'<button className={login}>Iniciar sesión</button>*/

export function LoginButton({ to }) {
    return (
        <a href={ to }>
            <button>Iniciar sesión</button>
        </a>
    );
}