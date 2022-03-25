import React from 'react';
import styles from './Products.module.scss';

export function EditableProduct({ product, editFormData, handleEditFormChange, handleCancelClick }) {
    return (
        <div className={styles.divProduct}>
            <div className={styles.divText}>
                <div className={styles.divLeftText}>
                    <h2 contentEditable="true" onBlur={handleEditFormChange} className={styles.h2Product}  data-name='product_name'>{product.product_name}</h2>
                    <p><b>Id:</b><span contentEditable="true" onBlur={handleEditFormChange} data-name='product_id'>{product.product_id}</span></p>
                    <p contentEditable="true" onBlur={handleEditFormChange} data-name='description'>{product.description}</p>
                </div>
            </div>
            <p className={styles.pVersionProduct}><b>Versión</b><br/><span contentEditable="true" onBlur={handleEditFormChange} data-name='version'>{product.version}</span></p>
            <div className={styles.divButtons}>
                <button type='submit' className={styles.buttonUpdate}>Guardar</button>
                <button type='submit' className={styles.buttonDelete} onClick={handleCancelClick}>Cancelar</button>
            </div>
        </div>
    );
}