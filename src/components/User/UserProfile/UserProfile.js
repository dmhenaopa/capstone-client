import React, { Fragment, useState, useEffect, setState } from 'react';
import styles from './UserProfile.module.scss';
import Image from './../../assets/frailejon.jpg';


export function UserProfile() {

    return (
        <Fragment>
            <div className={styles.divWelcomeUser}>
                <h1 className={styles.h1User}>¡Bienvenido ernestop!</h1>
                <hr />
            </div>
            <ul className={styles.ulMenu}>
                <li className={styles.liMenu}><a className={styles.aMenuProducts} href="/ernestop/productos">Productos</a></li>
                <li className={styles.liMenu}><a className={styles.aMenuProfile} href="/ernestop/perfil">Mi perfil</a></li>
            </ul>
            <div className={styles.divTabs}>
                <div className={styles.divUserProfile}>
                    <img className={styles.imgProfile} src={Image} alt=''></img>
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
                                <tr>Ernesto</tr>
                                <tr>Pérez Frailejón</tr>
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

/*
import Avatar from "boring-avatars";
<Avatar size={220} name="Frailejon Ernesto Perez" variant="bauhaus" colors={["#16C1C8", "#49CCCC", "#7CD7CF", "#AEE1D3", "#E1ECD6"]} square={'True'} />
*/