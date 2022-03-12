import React from 'react';
import './LoginButton.module.scss';

export function LoginButton({ to }) {
    return (
        <a href={ to }>
            <button>Iniciar sesión</button>
        </a>
    );
}