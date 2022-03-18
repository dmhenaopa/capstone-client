import React, { Fragment, useState, useEffect, setState } from 'react';
import Image from '../../assets/avatar-profile.png'
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
                <div className={styles.divUserProfile}>
                    <img className={styles.imgProfile} src={Image} alt=""></img>
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