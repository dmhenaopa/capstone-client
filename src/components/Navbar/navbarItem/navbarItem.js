import React from 'react';

export function NavbarItem({ link, text }) {
    return(
        <li>
            <a href={link}>
                {text}
            </a>
        </li>
    );
}