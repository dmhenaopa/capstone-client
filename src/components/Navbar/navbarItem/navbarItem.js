import React from 'react';

export function NavbarItem(props) {
    return(
        <li>
            <a href={props.link}>
                {props.text}
            </a>
        </li>
    );
}