import React, { Fragment } from 'react';
import styles from './Products.module.scss';

export function Products() {
    return (
        <Fragment>
            <button className={styles.buttonNewProduct}>Añadir producto</button>
            <div className={styles.divProducts}>
                <div className={styles.divProduct1}>
                    <h2 className={styles.h2Product}>Suscripción Instalador</h2>
                    <button className={styles.buttonDownload}>Descargar</button>
                    <button className={styles.buttonUpdate}>Actualizar</button>
                    <button className={styles.buttonDelete}>Eliminar</button>
                    <button className={styles.buttonPermissions}>Asignar permisos</button>
                </div>
                <div className={styles.divProduct2}>
                    <h2 className={styles.h2Product}>Suscripción Documentación y actualizaciones</h2>
                    <button className={styles.buttonDownload}>Descargar</button>
                    <button className={styles.buttonUpdate}>Actualizar</button>
                    <button className={styles.buttonDelete}>Eliminar</button>
                    <button className={styles.buttonPermissions}>Asignar permisos</button>
                </div>
                <div className={styles.divProduct3}>
                    <h2 className={styles.h2Product}>Suscripción Instalador + Documentación y actualizaciones</h2>
                    <button className={styles.buttonDownload}>Descargar</button>
                    <button className={styles.buttonUpdate}>Actualizar</button>
                    <button className={styles.buttonDelete}>Eliminar</button>
                    <button className={styles.buttonPermissions}>Asignar permisos</button>
                </div>
            </div>
        </Fragment>
    );
}