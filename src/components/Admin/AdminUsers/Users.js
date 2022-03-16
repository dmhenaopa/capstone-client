import React, { Fragment } from 'react';
import styles from './Users.module.scss';

export function Users() {
    return (
        <Fragment>
            <input className={styles.inputSearch} type='search' name='search' placeholder='Buscar usuario' />
            <button className={styles.buttonNewProduct}>Nuevo usuario</button>
            <div className={styles.divUsersTable}>
                <table className={styles.tableUsersTable}>
                    <td className={styles.tdUsers}>
                        <th>Usuario</th>
                        <tr>usuario01</tr>
                        <tr>usuario02</tr>
                        <tr>usuario03</tr>
                    </td>

                    <td className={styles.tdProducts}>
                        <th>ID Producto</th>
                        <tr>01</tr>
                        <tr>02</tr>
                        <tr>03</tr>
                    </td>

                    <td className={styles.tdActions}>
                        <th>Acciones</th>
                        <tr><a href='#'>Ver</a> | <a href='#'>Eliminar</a></tr>
                        <tr><a href='#'>Ver</a> | <a href='#'>Eliminar</a></tr>
                        <tr><a href='#'>Ver</a> | <a href='#'>Eliminar</a></tr>
                    </td>
                </table>
            </div>
        </Fragment>
    );
}