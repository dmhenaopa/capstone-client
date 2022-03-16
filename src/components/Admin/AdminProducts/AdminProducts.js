import React, { Fragment } from 'react';
import styles from './AdminProducts.module.scss';
import { Products } from './Products';

export function AdminProducts() {
    return (
        <Fragment>
            <div className={styles.divWelcomeUser}>
                <h1 className={styles.h1User}>¡Bienvenido admin!</h1>
                <hr />
            </div>
            <ul className={styles.ulMenu}>
                <li className={styles.liMenu}><a className={styles.aMenuUsers} href="/admin/usuarios">Usuarios</a></li>
                <li className={styles.liMenu}><a className={styles.aMenuProducts} href="/admin/productos">Productos</a></li>
            </ul>
            <div className={styles.divTabs}>
                <Products />
            </div>
        </Fragment>
    );
}