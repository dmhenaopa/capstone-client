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
                        <a className={styles.aInstalador219} href='https://alas.com.co/documentos/Instalar/Instalar_ALAS3240_Act219.zip' download='Instalar_ALAS3240_Act219.zip'><button className={styles.buttonDownload}>Descargar</button></a>
                    </div>
                    <div className={styles.divProduct2}>
                        <div className={styles.divTextProducts}>
                            <h2 className={styles.h2Product}>Documentación y actualizaciones</h2>
                            <p className={styles.pProducts}>En los archivos descargables encontrará los siguientes documentos:
                                <ul>
                                    <li>Actualizador No. 219</li>
                                    <li>Actualizador No. 218</li>
                                    <li>Actualizador No. 217</li>
                                </ul>
                            </p>
                        </div>
                        <div className={styles.divDownloadButtons}>
                            <a className={styles.aActualizador219} href='https://alas.com.co/documentos/1Actualizar_219/Actualizar_ALAS3240_Act219.zip' download='Actualizar_ALAS3240_Act219.zip'><button className={styles.buttonDownload}>Descargar No. 219</button></a>
                            <a className={styles.aActualizador218} href='https://alas.com.co/documentos/2Actualizar_218/Actualizar_ALAS3240_Act218.zip' download='Actualizar_ALAS3240_Act218.zip'><button className={styles.buttonDownload}>Descargar No. 218</button></a>
                            <a className={styles.aActualizador217} href='https://alas.com.co/documentos/3Actualizar_217/Actualizar_ALAS3240_Act217.exe' download='Actualizar_ALAS3240_Act217.exe'><button className={styles.buttonDownload}>Descargar No. 217</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}