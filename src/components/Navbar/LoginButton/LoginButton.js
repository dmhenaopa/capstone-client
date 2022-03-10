import React from 'react';

export function LoginButton({ to }) {
    return (
        <a href={ to }>
            <button>Iniciar sesión</button>
        </a>
    );
}