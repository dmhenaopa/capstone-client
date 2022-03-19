import React from 'react';
import Image from '../../assets/paul-teysen-bukjsECgmeU-unsplash.jpg';
import styles from './FeatureHome.module.scss';

export function FeatureHome() {
    return (
        <div className={styles.divFeatureHome}>
            <img className={styles.imgFeatureHome} src={Image} alt=""></img>
            <p className={styles.pFeatureHome}>Somos <b><em>ALAS</em></b>, una empresa que reune la información más actualizada del Arancel de Aduanas de Colombia. También ofrecemos otras normas necesarias para el manejo del comercio exterior. Buscamos cubrir las necesidades de información oportuna y confiable de nuestros suscriptores.</p>
        </div>
    );
}