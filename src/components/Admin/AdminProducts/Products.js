import React, { Fragment } from 'react';
import styles from './Products.module.scss';

export function Products() {
    return (
        <Fragment>
            <input className={styles.inputSearch} type='search' name='search' placeholder='Buscar producto' />
            <button className={styles.buttonNewProduct}>Añadir producto</button>
            <div className={styles.divProducts}>
                <div className={styles.divProduct1}>
                    <h2 className={styles.h2Product}>Suscripción Instalador</h2>
                    <div className={styles.divButtons}>
                        <button className={styles.buttonDownload}>Descargar</button>
                        <button className={styles.buttonUpdate}>Actualizar</button>
                        <button className={styles.buttonDelete}>Eliminar</button>
                    </div>
                </div>
                <div className={styles.divProduct2}>
                    <h2 className={styles.h2Product}>Suscripción Documentación y actualizaciones</h2>
                    <div className={styles.divButtons}>
                        <button className={styles.buttonDownload}>Descargar</button>
                        <button className={styles.buttonUpdate}>Actualizar</button>
                        <button className={styles.buttonDelete}>Eliminar</button>
                    </div>
                </div>
                <div className={styles.divProduct3}>
                    <h2 className={styles.h2Product}>Suscripción Instalador + Documentación y actualizaciones</h2>
                    <div className={styles.divButtons}>
                        <button className={styles.buttonDownload}>Descargar</button>
                        <button className={styles.buttonUpdate}>Actualizar</button>
                        <button className={styles.buttonDelete}>Eliminar</button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}