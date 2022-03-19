import React, { Fragment } from 'react';
import styles from './UserProducts.module.scss';

export function UserProducts() {
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
                <input className={styles.inputSearch} type='search' name='search' placeholder='Buscar producto' />
                <div className={styles.divProducts}>
                    <div className={styles.divProduct1}>
                        <div className={styles.divTextProducts}>
                            <h2 className={styles.h2Product}>Instalador</h2>
                            <p className={styles.pProducts}>En el archivo descargable encontrará el instalador.</p>
                        </div>
                        <button className={styles.buttonDownload}>Descargar</button>
                    </div>
                    <div className={styles.divProduct2}>
                        <div className={styles.divTextProducts}>
                            <h2 className={styles.h2Product}>Documentación y actualizaciones</h2>
                            <p className={styles.pProducts}>En el archivo descargable encontrará los siguientes documentos:
                                <ul>
                                    <li>Actualización No. 219</li>
                                    <li>Actualización No. 218</li>
                                    <li>Actualizador No. 217</li>
                                </ul>
                            </p>
                        </div>
                        <button className={styles.buttonDownload}>Descargar</button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}