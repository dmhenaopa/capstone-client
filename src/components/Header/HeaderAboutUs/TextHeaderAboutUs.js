import React from 'react';
import styles from './TextHeaderAboutUs.module.scss';

export function TextHeaderAboutUs() {
    return (
        <div className={styles.divHeaderAboutUs}>
            <h1 className={styles.h1HeaderAboutUs}>Acerca de ALAS</h1>
            <p className={styles.pHeaderAboutUs}>Buscamos constituirnos en la principal herramienta de consulta especializada en la nomenclatura y tarifa arancelaria colombiana y de la normativa relacionada con el régimen de aduanas.</p>
        </div>
    );
}