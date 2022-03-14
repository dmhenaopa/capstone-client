import React from 'react';
import styles from './TextHeaderHome.module.scss';

export function TextHeaderHome() {
    return (
        <div className={styles.divHeaderHome}>
            <h1 className={styles.h1HeaderHome}>Arancel y Legislación Aduanera Sistematizados</h1>
            <p className={styles.pHeaderHome}>Suministramos a nuestros suscriptores información actualizada, práctica y confiable del Arancel de Aduanas de Colombia y demás normas relacionadas con el régimen de aduanas y comercio exterior.</p>
            <a className={styles.aHeaderHome} href='/nosotros'>¡Quiero saber más! </a>
        </div>
    );
}