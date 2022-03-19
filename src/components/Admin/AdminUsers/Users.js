import React, { Fragment } from 'react';
import styles from './Users.module.scss';

export function Users() {
    return (
        <Fragment>
            <input className={styles.inputSearch} type='search' name='search' placeholder='Buscar usuario' />
            <button className={styles.buttonNewProduct}>Agregar nuevo usuario</button>
            <div className={styles.divUsersTable}>
                <table className={styles.tableUsersTable}>
                    <thead>
                        <tr>
                            <th>ID Usuario</th>
                            <th>Nombre</th>
                            <th>Apellidos</th>
                            <th>Teléfono</th>
                            <th>Correo electrónico</th>
                            <th>Empresa</th>
                            <th>ID Producto</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>01</td>
                            <td>Frailejón Ernesto</td>
                            <td>Pérez</td>
                            <td>300-1234567</td>
                            <td>ernestico@paramo.com</td>
                            <td>Páramo Co.</td>
                            <td>03</td>
                            <td><a href='#'>Ver</a> | <a href='#'>Eliminar</a></td>
                        </tr>

                        <tr>
                            <td>02</td>
                            <td>Rana</td>
                            <td>René</td>
                            <td>300-7654321</td>
                            <td>kermit@muppet.com</td>
                            <td>The Muppets Show</td>
                            <td>01</td>
                            <td><a href='#'>Ver</a> | <a href='#'>Eliminar</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Fragment>
    );
}