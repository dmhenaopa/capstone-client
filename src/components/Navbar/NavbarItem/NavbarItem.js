import React from 'react';
import styles from './NavbarItem.module.scss';

export function NavbarItem({ link, text }) {
    return(
        <li className={styles.liNavbarItem}>
            <a className={styles.aNavbarItem} href={link}>
                {text}
            </a>
        </li>
    );
}