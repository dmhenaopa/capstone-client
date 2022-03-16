import React, { Fragment } from 'react';
import styles from './UserProfile.module.scss';

export function UserProfile() {
    return (
        <Fragment>
            <div className={styles.divWelcomeUser}>
                <h1 className={styles.h1User}>¡Bienvenido usuario01!</h1>
                <hr />
            </div>
            <ul className={styles.ulMenu}>
                <li className={styles.liMenu}><a className={styles.aMenuProducts} href="/user01/productos">Productos</a></li>
                <li className={styles.liMenu}><a className={styles.aMenuProfile} href="/user01/perfil">Mi perfil</a></li>
            </ul>
            <div className={styles.divTabs}>
            </div>
        </Fragment>
    );
}