import React from 'react';
import styles from './FeatureProducts.module.scss';
import Image1 from './../../assets/renaldo-matamoro-DEMrRuvJvqo-unsplash.jpg';
import Image2 from './../../assets/renaldo-matamoro-WzgnhsodeqU-unsplash.jpg';
import Image3 from './../../assets/teng-yuhong-qMehmIyaXvY-unsplash.jpg';

export function FeatureProducts() {
    return (
        <div className={styles.divFeatureProducts}>
            <h2 className={styles.h2FeatureProducts}>Puede elegir entre 3 tipos de suscripciones</h2>
            <div className={styles.divImgSubscriptions}>
                <div className={styles.divImagesFeatureProducts}>
                    <div className={styles.divCircle1}></div>
                    <img className={styles.imgFeatureProduct1} src={Image1} alt=""></img>
                    <div className={styles.divCircle2}></div>
                    <img className={styles.imgFeatureProduct2} src={Image2} alt=""></img>
                    <div className={styles.divCircle3}></div>
                    <img className={styles.imgFeatureProduct3} src={Image3} alt=""></img>
                </div>
                <div className={styles.divSubscriptions}>
                    <div className={styles.divSubscriptionInstaller}>
                        <h3 className={styles.h3FeatureProducts}> Suscripción Instalador</h3>
                        <p className={styles.pFeatureProducts}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis scelerisque at quam congue posuere libero in sit quam. Consequat, scelerisque non tincidunt sit lectus senectus.</p>
                    </div>
                    <div className={styles.divSubscriptionDocs}>
                        <h3 className={styles.h3FeatureProducts}> Suscripción Documentación y actualizaciones</h3>
                        <p className={styles.pFeatureProducts}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis scelerisque at quam congue posuere libero in sit quam. Consequat, scelerisque non tincidunt sit lectus senectus.</p>
                    </div>
                    <div className={styles.divSubscriptionInstallerDocs}>
                        <h3 className={styles.h3FeatureProducts}> Suscripción Instalador + Documentación y actualizaciones</h3>
                        <p className={styles.pFeatureProducts}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis scelerisque at quam congue posuere libero in sit quam. Consequat, scelerisque non tincidunt sit lectus senectus.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}