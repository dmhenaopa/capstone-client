import React, { Fragment, useState, useEffect, setState } from 'react';
import styles from './UserProfile.module.scss';
import Avatar from "boring-avatars";


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
                <div className={styles.divUserProfile}>
                    <div className={styles.imgProfile}>
                        <Avatar size={220} name="Frailejon Ernesto Perez" variant="bauhaus" colors={["#16C1C8", "#49CCCC", "#7CD7CF", "#AEE1D3", "#E1ECD6"]} square={'True'} />
                    </div>
                    <table className={styles.tableUserTable}>
                        <tbody>
                            <td className={styles.tdBold}>
                                <tr>Nombre:</tr>
                                <tr>Apellidos:</tr>
                                <tr>Teléfono celular:</tr>
                                <tr>Correo electrónico:</tr>
                                <tr>Empresa:</tr>
                            </td>
                            <td>
                                <tr>Frailejón Ernesto</tr>
                                <tr>Pérez</tr>
                                <tr>300-1234567</tr>
                                <tr>ernestico@paramo.com</tr>
                                <tr>Páramo Co.</tr>
                            </td>
                        </tbody>
                    </table>
                </div>
                <div className={styles.divButtons}>
                    <button className={styles.buttonUpdate}>Actualizar información</button>
                    <button className={styles.buttonDelete}>Eliminar mi perfil</button>
                </div>
            </div>
        </Fragment>
    );
}