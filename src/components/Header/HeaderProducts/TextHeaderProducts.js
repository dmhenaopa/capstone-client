import React from 'react';
import styles from './TextHeaderProducts.module.scss';

export function TextHeaderProducts() {
    return (
        <div className={styles.divHeaderProducts}>
            <h1 className={styles.h1HeaderProducts}>Productos</h1>
            <p className={styles.pHeaderProducts}>Ofrecemos herramientas de consulta especializada y actualizada del Arancel de Aduanas de Colombia correlacionada con otras normas indispensables para el manejo del comercio exterior colombiano.</p>
        </div>
    );
}