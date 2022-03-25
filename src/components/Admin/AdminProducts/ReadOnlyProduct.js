import React from 'react';
import styles from './Products.module.scss';

export function ReadOnlyProduct({ product, handleEditClick, handleDeleteClick }) {
    return (
        <div className={styles.divProduct}>
            <div className={styles.divText}>
                <div className={styles.divLeftText}>
                    <h2 className={styles.h2Product}>{product.product_name}</h2>
                    <p><b>Id:</b> {product.product_id}</p>
                    <p>{product.description}</p>
                </div>
            </div>
            <p className={styles.pVersionProduct}><b>Versión</b><br/>{product.version}</p>
            <div className={styles.divButtons}>
                <button className={styles.buttonDownload}>Descargar</button>
                <button type='button' 
                    className={styles.buttonUpdate} 
                    onClick={(event) => handleEditClick(event, product)}>Editar</button>
                <button type='button' 
                    className={styles.buttonDelete} 
                    onClick={() => handleDeleteClick(product.product_id)}>Eliminar</button>
            </div>
      </div>
    );
}