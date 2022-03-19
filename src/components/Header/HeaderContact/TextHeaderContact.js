import React from 'react';
import styles from './TextHeaderContact.module.scss'

export function TextHeaderContact() {
    return (
        <div className={styles.divHeaderContact}>
            <h1 className={styles.h1HeaderContact}>Contacto</h1>
            <p className={styles.pHeaderContact}>¡Pongase en contacto con nosotros! <br />Si desea conocer más información sobre nuestra empresa o productos no dude en enviarnos sus datos. Nuestro equipo se pondrá en contacto con usted a la brevedad.</p>
        </div>
    );
}